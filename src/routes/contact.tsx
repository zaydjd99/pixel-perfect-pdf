import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Send, Mail, Clock } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { telegramUrl, supportEmail, whatsappUrl } from "@/lib/site-links";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — TIVIPLANET" },
      { name: "description", content: "Contact TIVIPLANET support by WhatsApp, Telegram or email." },
      { property: "og:title", content: "Contact — TIVIPLANET" },
      { property: "og:description", content: "Contact support by WhatsApp, Telegram or email." },
    ],
  }),
});

function ContactPage() {
  const { language } = useLanguage();
  const isGerman = language === "de";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-20 text-center">
        <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
          <Clock className="w-3.5 h-3.5" /> {isGerman ? "Support täglich 09–24 Uhr" : "Support daily 09–24h"}
        </span>
        <h1 className="mt-5 text-4xl sm:text-6xl font-bold">{isGerman ? "Kontaktiere uns" : "Contact us"}</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          {isGerman ? "Unser Team hilft dir bei Tests, Aktivierung, Verlängerung und Einrichtung." : "Our team helps with trials, activation, renewals and setup."}
        </p>
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-border bg-surface/50 p-7 hover:border-primary/40 transition">
            <MessageCircle className="w-9 h-9 text-primary mx-auto" />
            <div className="mt-4 font-semibold">WhatsApp</div>
          </a>
          <a href={telegramUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-border bg-surface/50 p-7 hover:border-primary/40 transition">
            <Send className="w-9 h-9 text-primary mx-auto" />
            <div className="mt-4 font-semibold">Telegram</div>
          </a>
          <a href={supportEmail} className="rounded-2xl border border-border bg-surface/50 p-7 hover:border-primary/40 transition">
            <Mail className="w-9 h-9 text-primary mx-auto" />
            <div className="mt-4 font-semibold">Email</div>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
