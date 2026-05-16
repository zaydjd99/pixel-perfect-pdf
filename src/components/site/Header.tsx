import { Play, ChevronDown, Menu, X, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useLanguage, type Language } from "@/lib/language";

const nav = [
  { en: "Home", de: "Start", to: "/" },
  { en: "Pricing", de: "Preise", to: "/pricing" },
  { en: "Tutorials", de: "Tutorials", to: "/tutorials" },
  { en: "Referral", de: "Empfehlung", to: "/referral" },
  { en: "FAQ", de: "FAQ", to: "/faq" },
  { en: "Contact", de: "Kontakt", to: "/contact" },
] as const;

const langs: { code: Language; flag: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "de", flag: "🇩🇪", label: "DE" },
];

export function Header() {
  const { language, setLanguage } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = langs.find((l) => l.code === language) ?? langs[1];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-wide text-primary">
          <span className="grid place-items-center w-7 h-7 rounded-md bg-gradient-primary text-primary-foreground">
            <Play className="w-3.5 h-3.5 fill-current" />
          </span>
          <span>NEXASTREAM</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {nav.map((n) => (
            <Link
              key={n.en}
              to={n.to}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {language === "de" ? n.de : n.en}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div ref={langRef} className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border bg-surface text-xs text-foreground hover:border-primary/40 transition"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              <span className="text-[11px] uppercase text-muted-foreground">{current.flag}</span>
              <span className="font-medium">{current.label}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-lg border border-border bg-popover shadow-glow overflow-hidden z-50">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLanguage(l.code);
                      setLangOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs hover:bg-surface-2"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[11px] text-muted-foreground">{l.flag}</span>
                      <span className="font-medium">{l.label}</span>
                    </span>
                    {l.code === language && <Check className="w-3.5 h-3.5 text-primary" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/pricing" className="hidden sm:inline-flex text-sm font-medium px-4 py-2 rounded-md bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition">
            {language === "de" ? "Paket wählen" : "Get Package"}
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden grid place-items-center w-9 h-9 rounded-md border border-border bg-surface text-foreground"
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-background/95 backdrop-blur-md">
          <div className="flex items-center justify-between px-6 h-16 border-b border-border/40">
            <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 font-semibold text-primary">
              <span className="grid place-items-center w-7 h-7 rounded-md bg-gradient-primary text-primary-foreground">
                <Play className="w-3.5 h-3.5 fill-current" />
              </span>
              <span>NEXASTREAM</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="grid place-items-center w-9 h-9 rounded-md border border-border bg-surface"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-6 gap-3">
            {nav.map((n) => (
              <Link
                key={n.en}
                to={n.to}
                onClick={() => setMobileOpen(false)}
                className="text-center px-4 py-3.5 rounded-full bg-surface/80 border border-border text-base font-semibold text-foreground hover:bg-surface-2 transition"
                activeProps={{ className: "text-primary border-primary/40" }}
              >
                {language === "de" ? n.de : n.en}
              </Link>
            ))}
            <div className="mt-4 pt-5 border-t border-border/50 text-center text-xs text-muted-foreground">
              {language === "de" ? "Schnelle Einrichtung. Sofortige Testversion per E-Mail." : "Fast setup. Instant trial by email."}
            </div>
            <Link
              to="/pricing"
              onClick={() => setMobileOpen(false)}
              className="text-center text-base font-semibold px-4 py-3.5 rounded-full bg-gradient-primary text-primary-foreground shadow-glow"
            >
              {language === "de" ? "Paket wählen" : "Get Package"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
