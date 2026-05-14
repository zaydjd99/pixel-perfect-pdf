import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { ArrowLeft, Check, Send, MessageCircle, ExternalLink } from "lucide-react";
import { telegramUrl, whatsappUrl } from "@/lib/site-links";
import { useLanguage } from "@/lib/language";
import { getTutorial } from "@/lib/tutorials";

export const Route = createFileRoute("/tutorials/$device")({
  component: TutorialDetail,
  loader: ({ params }) => {
    const tutorial = getTutorial(params.device);
    if (!tutorial) throw notFound();
    return { tutorial };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.tutorial.name ?? "Tutorial"} — NexaStream Setup` },
      { name: "description", content: loaderData?.tutorial.intro ?? "NexaStream setup guide." },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground grid place-items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Tutorial not found</h1>
        <Link to="/tutorials" className="mt-4 inline-block text-primary underline">Back to tutorials</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background text-foreground grid place-items-center">
      <p className="text-destructive">{error.message}</p>
    </div>
  ),
});

function TutorialDetail() {
  const { tutorial } = Route.useLoaderData();
  const { language } = useLanguage();
  const isGerman = language === "de";
  const methods = isGerman ? tutorial.methodsDe : tutorial.methods;
  const needs = isGerman ? tutorial.needsDe : tutorial.needs;
  const subtitle = isGerman ? tutorial.subtitleDe : tutorial.subtitle;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="mx-auto max-w-4xl px-6 pt-10 pb-6">
          <Link to="/tutorials" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" /> {isGerman ? "Alle Tutorials" : "All Tutorials"}
          </Link>

          <div className="mt-6 flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-surface-2 grid place-items-center overflow-hidden shrink-0">
              <img src={tutorial.image} alt={tutorial.name} className="w-full h-full object-contain p-2" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
                {isGerman ? "Setup-Anleitung" : "Setup Guide"}
              </span>
              <h1 className="mt-2 text-3xl sm:text-4xl font-bold">{tutorial.name}</h1>
              <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-border bg-surface/50 p-5">
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
              {isGerman ? "Was du brauchst" : "What you need"}
            </div>
            <ul className="space-y-2">
              {needs.map((n) => (
                <li key={n} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary" /> {n}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 space-y-8">
            {methods.map((method, mi) => (
              <div key={method.name} className="rounded-2xl border border-border bg-surface/40 overflow-hidden">
                <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-7 h-7 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold">
                      {mi + 1}
                    </span>
                    <h2 className="text-lg font-semibold">{method.name}</h2>
                    {method.tag && (
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/30">
                        {method.tag}
                      </span>
                    )}
                  </div>
                  {method.link && (
                    <a
                      href={method.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {method.link.label} <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <ol className="p-6 space-y-5">
                  {method.steps.map((step, si) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="grid place-items-center w-6 h-6 rounded-md bg-surface-2 text-primary text-xs font-bold shrink-0 mt-0.5">
                        {si + 1}
                      </span>
                      <div>
                        <div className="font-medium text-sm">{step.title}</div>
                        <p className="text-sm text-muted-foreground mt-1">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-border bg-surface/40 p-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm font-medium">
                {isGerman ? "Brauchst du Hilfe beim Einrichten?" : "Need help setting up?"}
              </div>
              <div className="text-xs text-muted-foreground">
                {isGerman ? "Unser Team antwortet in Minuten und führt dich Schritt für Schritt." : "Our team responds in minutes and walks you through step by step."}
              </div>
            </div>
            <div className="flex gap-2">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-whatsapp text-contact-foreground hover:opacity-90 transition">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href={telegramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-telegram text-contact-foreground hover:opacity-90 transition">
                <Send className="w-4 h-4" /> Telegram
              </a>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
