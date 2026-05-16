import { Link } from "@tanstack/react-router";
import { MessageCircle, Send, Mail } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { telegramUrl, whatsappUrl, supportEmail } from "@/lib/site-links";

export type LegalSection = { id: string; title: string; body: string };

export function LegalPage({
  badge,
  title,
  intro,
  updated,
  sections,
  contactTitle,
  contactBody,
}: {
  badge: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  contactTitle: string;
  contactBody: string;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="mx-auto max-w-3xl px-6 pt-14 pb-10">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary uppercase tracking-wider">
              {badge}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>
            <p className="mt-4 text-muted-foreground">{intro}</p>
            <div className="mt-2 text-xs text-muted-foreground">Last updated: 2025-01-01 · {updated}</div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-whatsapp text-contact-foreground text-sm font-medium hover:opacity-90 transition">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href={telegramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-telegram text-contact-foreground text-sm font-medium hover:opacity-90 transition">
                <Send className="w-4 h-4" /> Telegram
              </a>
              <a href={supportEmail} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-sm font-medium hover:bg-surface-2 transition">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>

          <nav className="mt-10 rounded-xl border border-border bg-surface/40 p-5">
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">On this page</div>
            <ol className="grid sm:grid-cols-2 gap-2 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-primary hover:underline">
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-10 space-y-8">
            {sections.map((s, i) => (
              <article key={s.id} id={s.id} className="rounded-2xl border border-border bg-surface/40 p-6">
                <h2 className="text-lg font-semibold">
                  <span className="text-primary mr-2">{i + 1}.</span>
                  {s.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{s.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <h3 className="text-lg font-semibold">{contactTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{contactBody}</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <Link to="/contact" className="px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium">Contact us</Link>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-whatsapp/40 bg-whatsapp/10 text-sm font-medium">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href={telegramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-telegram/40 bg-telegram/10 text-sm font-medium">
                <Send className="w-4 h-4" /> Telegram
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
