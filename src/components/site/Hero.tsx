import { Check, Tv, Trophy } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { useOrderModal } from "@/lib/order-modal";

export function Hero() {
  const { language } = useLanguage();
  const isGerman = language === "de";
  const { open } = useOrderModal();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute -left-40 top-40 w-[480px] h-[480px] ring-orbit opacity-40" />
      <div className="absolute right-[-160px] top-10 w-[280px] h-[280px] ring-orbit opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {isGerman ? "99.9% Betriebszeit garantiert" : "99.9% uptime guaranteed"}
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            {isGerman ? "TV streamen" : "Stream TV"}
            <br />
            {isGerman ? "wie" : "like"}
            <br />
            <span className="text-gradient-green">{isGerman ? "nie zuvor" : "never before"}</span>
          </h1>

          <p className="mt-6 max-w-xl text-muted-foreground">
            {isGerman ? "Über " : "Over "}<span className="text-foreground font-medium">20,000+ {isGerman ? "Live-Sender" : "live channels"}</span>,{" "}
            <span className="text-foreground font-medium">180,000+ {isGerman ? "Filme & Serien" : "movies & series"}</span>{" "}
            {isGerman ? "in Full HD, 4K und UHD — kompatibel mit all deinen Geräten." : "in Full HD, 4K and UHD — compatible with all your devices."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={() => open(isGerman ? "Kostenlose Testversion" : "Free Trial")} className="px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition">
              {isGerman ? "Kostenlos testen" : "Start Free Trial"}
            </button>
            <Link to="/pricing" className="px-5 py-3 rounded-full border border-border bg-surface/60 text-foreground hover:bg-surface transition">
              {isGerman ? "Pläne ansehen" : "See Plans & Pricing"}
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-muted-foreground max-w-md">
            {[
              isGerman ? "Inkl. integriertem VPN" : "Incl. integrated VPN",
              "Catch-Up TV",
              isGerman ? "EPG Programmführer" : "EPG Guide",
              isGerman ? "Sofortaktivierung" : "Instant activation",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" /> {f}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-surface shadow-glow">
            <div className="aspect-[16/10] grid grid-cols-3 gap-1 p-1 bg-background">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-md bg-gradient-to-br from-surface-2 to-surface-3 grid place-items-center text-xs text-muted-foreground/60"
                >
                  CH {i + 1}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs">
            <Tv className="w-3.5 h-3.5 text-primary" /> 4K Ultra HD
          </div>
          <div className="absolute -bottom-4 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs">
            <Trophy className="w-3.5 h-3.5 text-primary" /> Live Sports
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 -mt-6">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-primary mb-1">
              {isGerman ? "Bestehende Kunden" : "Existing Customers"}
            </div>
            <div className="text-sm text-muted-foreground">
              {isGerman ? "Läuft dein Abonnement bald ab und du möchtest verlängern? " : "Your subscription is about to expire and you need to extend? "}
              <span className="text-foreground">{isGerman ? "Klicke auf Abo verlängern." : "Click the Extend Subscription button."}</span>
            </div>
          </div>
          <button type="button" onClick={() => open(isGerman ? "Abo verlängern" : "Extend Subscription")} className="px-4 py-2 rounded-md bg-gradient-primary text-primary-foreground text-sm font-medium">
            {isGerman ? "Abo verlängern" : "Extend Subscription"}
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { v: "20,000+", l: isGerman ? "Live-Sender" : "Live Channels" },
          { v: "180,000+", l: isGerman ? "Filme & Serien" : "Movies & Series" },
          { v: "99.9%", l: isGerman ? "Betriebszeit" : "Uptime" },
          { v: "6+", l: isGerman ? "Erfahrung & Vertrauen" : "Years Experience & Trust" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-border bg-surface/50 p-5">
            <div className="text-3xl font-bold text-gradient-green">{s.v}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
