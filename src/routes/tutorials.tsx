import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { Send, MessageCircle, ArrowRight } from "lucide-react";
import { telegramUrl, whatsappUrl } from "@/lib/site-links";
import { useLanguage } from "@/lib/language";
import { tutorials } from "@/lib/tutorials";

export const Route = createFileRoute("/tutorials")({
  component: TutorialsPage,
  head: () => ({
    meta: [
      { title: "Tutorials — How to set up NexaStream" },
      { name: "description", content: "Step-by-step setup instructions for every device — Fire TV, Android, iOS, Windows, Roku, LG, Samsung, MAG/STB." },
      { property: "og:title", content: "How to set up NexaStream" },
      { property: "og:description", content: "Setup guides for every device in less than 2 minutes." },
    ],
  }),
});

function TutorialsPage() {
  const { language } = useLanguage();
  const isGerman = language === "de";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-6 py-16 text-center">
          <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
            {isGerman ? "Setup-Anleitung" : "Setup Guide"}
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold">{isGerman ? "So richtest du NexaStream ein" : "How to set up NexaStream"}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            {isGerman ? "Schritt-für-Schritt-Anleitungen für jedes Gerät — dauert weniger als 2 Minuten. Brauchst du Hilfe? Unser Team ist sofort da." : "Step-by-step instructions for every device — takes less than 2 minutes. Need help? Our team is here instantly."}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-whatsapp text-contact-foreground text-sm font-medium hover:opacity-90 transition">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href={telegramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-telegram text-contact-foreground text-sm font-medium hover:opacity-90 transition">
              <Send className="w-4 h-4" /> Telegram
            </a>
          </div>

          <div className="mt-14">
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
              {isGerman ? "Wähle dein Gerät" : "Select your device"}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {tutorials.map((d) => (
                <div
                  key={d.slug}
                  className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/40 transition group"
                >
                  <div className="aspect-[4/3] rounded-xl bg-surface-2 grid place-items-center mb-4 overflow-hidden">
                    <img
                      src={d.image}
                      alt={d.name}
                      loading="lazy"
                      className="w-full h-full object-contain p-3"
                    />
                  </div>
                  <div className="font-semibold mb-3 text-sm">{d.name.split(" · ")[0].split(" / ")[0]}</div>
                  <Link
                    to="/tutorials/$device"
                    params={{ device: d.slug }}
                    className="w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider px-3 py-2 rounded-md border border-border bg-surface-2/60 text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition"
                  >
                    {isGerman ? "Setup-Anleitung" : "Setup Guide"} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
