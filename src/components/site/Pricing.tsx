import { Check, Smartphone, Monitor } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { whatsappUrl } from "@/lib/site-links";

const single = [
  { name: "1 Month", price: "€15", per: "/ month", sub: "" },
  { name: "3 Months", price: "€30", per: "/ quarterly", sub: "≈ €10 / month" },
  { name: "6 Months", price: "€45", per: "/ semi-annually", sub: "≈ €7.50 / month" },
  { name: "1 Year", price: "€70", per: "/ year", sub: "≈ €5.83 / month", best: true },
];

const multi = [
  { name: "2 Devices", price: "€120", per: "/year", sub: "≈ €5 / device / month", conn: "2 simultaneous connections" },
  { name: "3 Devices", price: "€160", per: "/year", sub: "≈ €4.44 / device / month", conn: "3 simultaneous connections", reco: true },
  { name: "4 Devices", price: "€200", per: "/year", sub: "≈ €4.17 / device / month", conn: "4 simultaneous connections" },
];

const features = ["20,000+ international channels (HD / FHD / 4K & UHD)", "Thousands of movies & series (FHD, 4K & HDR)", "Catch-Up TV on most channels"];

function Plan({ p }: { p: (typeof single)[number] }) {
  const isBest = !!p.best;
  const { language } = useLanguage();
  const isGerman = language === "de";
  return (
    <div
      className={`relative rounded-2xl border p-6 bg-surface/50 ${
        isBest ? "border-primary/60 bg-primary/5 shadow-glow" : "border-border"
      }`}
    >
      {isBest && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground font-semibold">
          ★ {isGerman ? "Bester Wert" : "Best Value"}
        </div>
      )}
      <div className="font-semibold">{p.name}</div>
      <div className="mt-3 flex items-end gap-1">
        <span className="text-4xl font-bold">{p.price}</span>
        <span className="text-sm text-muted-foreground mb-1.5">{p.per}</span>
      </div>
      {p.sub && <div className="text-xs text-muted-foreground mt-1">{p.sub}</div>}
      <ul className="mt-5 space-y-2.5 text-sm">
        {(isGerman ? ["20.000+ internationale Sender (HD / FHD / 4K & UHD)", "Tausende Filme & Serien (FHD, 4K & HDR)", "Catch-Up TV auf den meisten Sendern"] : features).map((f) => (
          <li key={f} className="flex gap-2 text-muted-foreground">
            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="text-xs text-muted-foreground mt-3">▾ {isGerman ? "3 weitere Funktionen anzeigen" : "Show 3 more features"}</div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className={`mt-5 w-full py-2.5 rounded-md font-medium ${
          isBest
            ? "bg-gradient-primary text-primary-foreground"
            : "bg-surface-2 hover:bg-surface-3 text-foreground"
        } inline-flex items-center justify-center`}
      >
        {isGerman ? "Jetzt kaufen" : "Buy Now"}
      </a>
      <div className="text-xs text-center text-muted-foreground mt-3">⚡ {isGerman ? "Sofortaktivierung" : "Instant activation"}</div>
    </div>
  );
}

export function Pricing() {
  const { language } = useLanguage();
  const isGerman = language === "de";
  const translatedFeatures = isGerman ? ["20.000+ internationale Sender (HD / FHD / 4K & UHD)", "Tausende Filme & Serien (FHD, 4K & HDR)", "Catch-Up TV auf den meisten Sendern"] : features;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
          ✦ {isGerman ? "Einfache Preise" : "Simple Pricing"}
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
          {isGerman ? "Wähle deinen " : "Choose your "}<span className="text-gradient-green">{isGerman ? "perfekten Plan" : "perfect plan"}</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          {isGerman ? "Noch nicht bereit? Du kannst vor dem Kauf einen " : "Not ready to commit yet? You can request a "}
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-primary underline decoration-dotted">{isGerman ? "kostenlosen 1-Tages-Test" : "free 1-day trial"}</a>
          {isGerman ? " anfordern — keine Zahlung nötig." : " before buying any plan — no payment needed."}
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          {isGerman ? "7-Tage-Geld-zurück · Sofortaktivierung · Support täglich 09–24 Uhr" : "7-day money-back guarantee · Instant activation · Support daily 09–24h"}
        </p>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Smartphone className="w-4 h-4" /> {isGerman ? "1 Gerät · 1 Verbindung" : "1 Device · 1 Connection"}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {single.map((p) => (
            <Plan key={p.name} p={p} />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Monitor className="w-4 h-4" /> {isGerman ? "Mehrere Geräte · 1 Jahr" : "Multiple Devices · 1 Year"}
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {multi.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-6 bg-surface/50 ${
                p.reco ? "border-primary/60 bg-primary/5 shadow-glow" : "border-border"
              }`}
            >
              {p.reco && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground font-semibold">
                  ✦ {isGerman ? "Empfohlen" : "Recommended"}
                </div>
              )}
              <div className="font-semibold">{p.name}</div>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground mb-1.5">{p.per}</span>
              </div>
              <div className="text-xs text-primary mt-1">{p.sub}</div>
              <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {p.conn}
                </li>
                {translatedFeatures.slice(0, 2).map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="text-xs text-muted-foreground mt-3">▾ {isGerman ? "4 weitere Funktionen anzeigen" : "Show 4 more features"}</div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className={`mt-5 w-full py-2.5 rounded-md font-medium ${
                  p.reco
                    ? "bg-gradient-primary text-primary-foreground"
                    : "bg-surface-2 hover:bg-surface-3 text-foreground"
                } inline-flex items-center justify-center`}
              >
                {isGerman ? "Jetzt kaufen" : "Buy Now"}
              </a>
              <div className="text-xs text-center text-muted-foreground mt-3">
                ⚡ {isGerman ? "Sofortaktivierung" : "Instant activation"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
