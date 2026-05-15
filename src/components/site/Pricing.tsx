import { Check, Smartphone, Monitor, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/language";
import { useOrderModal } from "@/lib/order-modal";

const single = [
  { name: "1 Month", price: "€15", per: "/ month", sub: "" },
  { name: "3 Months", price: "€30", per: "/ quarterly", sub: "≈ €10 / month" },
  { name: "6 Months", price: "€45", per: "/ semi-annually", sub: "≈ €7.50 / month" },
  { name: "1 Year", price: "€70", per: "/ year", sub: "≈ €5.83 / month", best: true },
];

const multi = [
  { name: "2 Devices", price: "€120", per: "/year", sub: "≈ €5 / device / month", conn: "2 simultaneous connections", extra: "+ 2 free app activations" },
  { name: "3 Devices", price: "€160", per: "/year", sub: "≈ €4.44 / device / month", conn: "3 simultaneous connections", reco: true, extra: "+ 3 free app activations" },
  { name: "4 Devices", price: "€200", per: "/year", sub: "≈ €4.17 / device / month", conn: "4 simultaneous connections", extra: "+ 4 free app activations" },
];

const featuresEN = [
  "20,000+ international channels (HD / FHD / 4K & UHD)",
  "Thousands of movies & series (FHD, 4K & HDR)",
  "Catch-Up TV on most channels",
  "EPG guide on most channels",
  "Integrated VPN technology",
  "Adults +18 — ON REQUEST",
];
const featuresDE = [
  "20.000+ internationale Sender (HD / FHD / 4K & UHD)",
  "Tausende Filme & Serien (FHD, 4K & HDR)",
  "Catch-Up TV auf den meisten Sendern",
  "EPG-Guide auf den meisten Sendern",
  "Integrierte VPN-Technologie",
  "Erwachsene +18 — AUF ANFRAGE",
];

function FeatureList({ items, expanded, visible }: { items: string[]; expanded: boolean; visible: number }) {
  const list = expanded ? items : items.slice(0, visible);
  return (
    <ul className="mt-5 space-y-2.5 text-sm">
      {list.map((f) => (
        <li key={f} className="flex gap-2 text-muted-foreground">
          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
}

function Plan({ p, isGerman }: { p: (typeof single)[number]; isGerman: boolean }) {
  const isBest = !!p.best;
  const { open } = useOrderModal();
  const [expanded, setExpanded] = useState(false);
  const items = isGerman ? featuresDE : featuresEN;
  const visible = 3;
  const hidden = items.length - visible;

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
      {p.sub && (
        isBest ? (
          <div className="relative mt-3 inline-flex px-5 py-2">
            <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 132 32" preserveAspectRatio="none" aria-hidden="true">
              <path d="M4 18 C10 5, 114 1, 128 12 C138 22, 113 31, 48 29 C14 28, -3 25, 4 18 Z" fill="none" stroke="currentColor" strokeWidth="2.2" className="text-destructive" />
              <path d="M8 20 C22 8, 104 4, 124 14 C130 20, 115 27, 61 28 C25 28, 4 25, 8 20 Z" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-destructive/60" />
            </svg>
            <span className="relative z-10 text-xs font-semibold text-primary">
              {p.sub}
            </span>
          </div>
        ) : (
          <div className="text-xs text-muted-foreground mt-1">{p.sub}</div>
        )
      )}
      <FeatureList items={items} expanded={expanded} visible={visible} />
      {hidden > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:underline"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" /> {isGerman ? "Weniger anzeigen" : "Show less"}
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" /> {isGerman ? `${hidden} weitere Funktionen anzeigen` : `Show ${hidden} more features`}
            </>
          )}
        </button>
      )}
      <button
        type="button"
        onClick={() => open(`${p.name} — ${p.price}`)}
        className={`mt-5 w-full py-2.5 rounded-md font-medium ${
          isBest
            ? "bg-gradient-primary text-primary-foreground"
            : "bg-surface-2 hover:bg-surface-3 text-foreground"
        } inline-flex items-center justify-center`}
      >
        {isGerman ? "Jetzt kaufen" : "Buy Now"}
      </button>
      <div className="text-xs text-center text-muted-foreground mt-3">⚡ {isGerman ? "Sofortaktivierung" : "Instant activation"}</div>
    </div>
  );
}

function MultiPlan({ p, isGerman }: { p: (typeof multi)[number]; isGerman: boolean }) {
  const { open } = useOrderModal();
  const [expanded, setExpanded] = useState(false);
  const items = isGerman ? featuresDE : featuresEN;
  const visible = 2;
  // For multi packs we add the "+ N free app activations" entry at the end
  const all = [p.conn, ...items.slice(0, 5), p.extra];
  const visibleCount = 1 + visible; // connection + first 2 features
  const hidden = all.length - visibleCount;
  const list = expanded ? all : all.slice(0, visibleCount);

  return (
    <div
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
        {list.map((f) => (
          <li key={f} className="flex gap-2">
            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {hidden > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:underline"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" /> {isGerman ? "Weniger anzeigen" : "Show less"}
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" /> {isGerman ? `${hidden} weitere Funktionen anzeigen` : `Show ${hidden} more features`}
            </>
          )}
        </button>
      )}
      <button
        type="button"
        onClick={() => open(`${p.name} — ${p.price}/year`)}
        className={`mt-5 w-full py-2.5 rounded-md font-medium ${
          p.reco
            ? "bg-gradient-primary text-primary-foreground"
            : "bg-surface-2 hover:bg-surface-3 text-foreground"
        } inline-flex items-center justify-center`}
      >
        {isGerman ? "Jetzt kaufen" : "Buy Now"}
      </button>
      <div className="text-xs text-center text-muted-foreground mt-3">
        ⚡ {isGerman ? "Sofortaktivierung" : "Instant activation"}
      </div>
    </div>
  );
}

export function Pricing() {
  const { language } = useLanguage();
  const isGerman = language === "de";
  const { open } = useOrderModal();

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
          <button type="button" onClick={() => open(isGerman ? "Kostenloser 1-Tages-Test" : "1 Free Day Trial")} className="text-primary underline decoration-dotted hover:decoration-solid">
            {isGerman ? "kostenlosen 1-Tages-Test" : "1 free day trial"}
          </button>
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
            <Plan key={p.name} p={p} isGerman={isGerman} />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Monitor className="w-4 h-4" /> {isGerman ? "Mehrere Geräte · 1 Jahr" : "Multiple Devices · 1 Year"}
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {multi.map((p) => (
            <MultiPlan key={p.name} p={p} isGerman={isGerman} />
          ))}
        </div>
      </div>
    </section>
  );
}
