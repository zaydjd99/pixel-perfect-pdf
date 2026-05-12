import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Users } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/reseller")({
  component: ResellerPage,
  head: () => ({
    meta: [
      { title: "Reseller — NEXASTREAM" },
      { name: "description", content: "Become a NEXASTREAM reseller and contact support for IPTV reseller packages." },
      { property: "og:title", content: "Reseller — NEXASTREAM" },
      { property: "og:description", content: "Contact us for IPTV reseller packages." },
    ],
  }),
});

function ResellerPage() {
  const { language } = useLanguage();
  const isGerman = language === "de";
  const bullets = isGerman
    ? ["Premium-Serverstabilität", "Schnelle Aktivierung", "Support täglich", "Flexible Pakete"]
    : ["Premium server stability", "Fast activation", "Daily support", "Flexible packages"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-20">
        <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
          <Users className="w-3.5 h-3.5" /> Reseller
        </span>
        <h1 className="mt-5 text-4xl sm:text-6xl font-bold">
          {isGerman ? "Werde " : "Become a "}<span className="text-gradient-green">NEXASTREAM reseller</span>
        </h1>
        <p className="mt-5 text-muted-foreground max-w-2xl">
          {isGerman ? "Starte dein IPTV-Angebot mit stabilen Paketen und direktem Support." : "Start your IPTV offer with stable packages and direct support."}
        </p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {bullets.map((item) => (
            <div key={item} className="rounded-xl border border-border bg-surface/50 p-5 flex gap-3">
              <Check className="w-5 h-5 text-primary shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <Link to="/contact" className="mt-8 inline-flex px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition">
          {isGerman ? "Support kontaktieren" : "Contact support"}
        </Link>
      </main>
      <Footer />
    </div>
  );
}
