import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";

export function Footer() {
  const { language } = useLanguage();
  const isGerman = language === "de";
  const cols = [
    { h: isGerman ? "Entdecken" : "Explore", l: [{ label: isGerman ? "Preise" : "Pricing", to: "/pricing" }, { label: isGerman ? "Empfehlung" : "Referral", to: "/referral" }, { label: "Reseller", to: "/referral" }] },
    { h: isGerman ? "Hilfe" : "Help", l: [{ label: "Tutorials", to: "/tutorials" }, { label: "FAQs", to: "/faq" }, { label: isGerman ? "Kontakt" : "Contact", to: "/contact" }] },
    { h: isGerman ? "Rechtliches" : "Legal", l: [{ label: isGerman ? "Datenschutz" : "Privacy Policy", to: "/privacy" }, { label: isGerman ? "Nutzungsbedingungen" : "Terms of Service", to: "/terms" }, { label: isGerman ? "Rückerstattung" : "Refund Policy", to: "/refund" }] },
  ] as const;
  return (
    <footer className="border-t border-border/40 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <svg viewBox="0 0 120 24" className="h-6 w-auto" aria-label="TIVIPLANET">
              <defs>
                <linearGradient id="logo-gradient-footer" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="oklch(0.78 0.18 152)" />
                  <stop offset="100%" stopColor="oklch(0.85 0.2 160)" />
                </linearGradient>
              </defs>
              <text x="0" y="18" fill="url(#logo-gradient-footer)" fontWeight="700" fontSize="16" fontFamily="Inter, system-ui, sans-serif">TIVIPLANET</text>
            </svg>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            {isGerman ? "Nahtloses IPTV, Premium-Stabilität und freundlicher menschlicher Support." : "Seamless IPTV, premium stability, and friendly human support."}
          </p>
          <div className="mt-4 text-xs">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary font-medium">{isGerman ? "Jeden Tag geöffnet" : "Open every day"}</span>
            </span>
            <div className="text-muted-foreground mt-1">{isGerman ? "Supportzeiten" : "Support hours"}: 09:00–00:00</div>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div className="text-sm font-semibold mb-3">{c.h}</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.l.map((x) => (
                <li key={x.label}>
                  <Link to={x.to} className="hover:text-foreground">
                    {x.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© 2018 TIVIPLANET. {isGerman ? "Alle Rechte vorbehalten." : "All rights reserved."}</div>
          <div className="flex flex-wrap gap-2">
            <span>{isGerman ? "Zahlungsmethoden" : "Payment methods"}:</span>
            {["PayPal", "Crypto", isGerman ? "Banküberweisung" : "Bank Transfer"].map((p) => (
              <span key={p} className="px-2 py-0.5 rounded bg-surface-2 border border-border">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
