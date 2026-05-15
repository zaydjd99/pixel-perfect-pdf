import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { ArrowRight } from "lucide-react";
import { telegramUrl, whatsappUrl } from "@/lib/site-links";
import { useLanguage } from "@/lib/language";
import { tutorials } from "@/lib/tutorials";
import { TelegramIcon, WhatsAppIcon } from "@/lib/order-modal";

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
  const location = useLocation();
  const isDetailPage = location.pathname !== "/tutorials";

  if (isDetailPage) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-6 py-16 text-center">
          <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
            {isGerman ? "Setup-Anleitung" : "Setup Guide"}
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-white [text-shadow:3px_3px_0_rgb(45_212_191/0.35)]">
            {isGerman ? "So richtest du NexaStream ein" : "How to set up NexaStream"}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto leading-7 text-muted-foreground">
            {isGerman ? "Schritt-für-Schritt-Anleitungen für jedes Gerät — dauert weniger als 2 Minuten. Brauchst du Hilfe? Unser Team ist sofort da." : "Step-by-step instructions for every device — takes less than 2 minutes. Need help? Our team is here instantly."}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href={telegramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-telegram px-5 py-2.5 text-sm font-bold text-contact-foreground shadow-[0_8px_22px_rgb(34_158_217/0.28)] transition hover:opacity-90">
              <TelegramIcon className="w-4 h-4" /> Telegram
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-whatsapp/40 bg-whatsapp/10 px-5 py-2.5 text-sm font-bold text-primary transition hover:bg-whatsapp/20">
              <WhatsAppIcon className="w-4 h-4" /> {isGerman ? "WhatsApp" : "Live Chat"}
            </a>
          </div>

          <div className="mt-14">
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
              {isGerman ? "Wähle dein Gerät" : "Select your device"}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {tutorials.map((d) => (
                <Link
                  key={d.slug}
                  to="/tutorials/$device"
                  params={{ device: d.slug }}
                  className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/40 transition group"
                >
                  <div className="mx-auto mb-4 grid h-20 w-20 place-items-center overflow-hidden rounded-2xl border border-border bg-surface-2 md:h-24 md:w-24">
                    <img
                      src={d.image}
                      alt={d.name}
                      loading="lazy"
                      className="h-full w-full object-contain p-2.5"
                    />
                  </div>
                  <div className="mb-3 text-sm font-black text-white md:text-base">{d.name.split(" · ")[0].split(" / ")[0]}</div>
                  <span className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface-2/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground transition group-hover:border-primary/40 group-hover:text-primary">
                    {isGerman ? "Setup-Anleitung" : "Setup Guide"} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
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
