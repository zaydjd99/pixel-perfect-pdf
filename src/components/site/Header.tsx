import { Play, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";

const nav = [
  { en: "Home", de: "Start", to: "/" },
  { en: "Pricing", de: "Preise", to: "/pricing" },
  { en: "Tutorials", de: "Tutorials", to: "/tutorials" },
  { en: "Referral", de: "Empfehlung", to: "/referral" },
  { en: "Reseller", de: "Reseller", to: "/reseller" },
  { en: "FAQ", de: "FAQ", to: "/faq" },
  { en: "Contact", de: "Kontakt", to: "/contact" },
] as const;

export function Header() {
  const { language, setLanguage } = useLanguage();

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

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center rounded-md border border-border bg-surface p-1 text-xs text-muted-foreground">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded ${language === "en" ? "bg-primary text-primary-foreground" : "hover:text-foreground"}`}
            >
              🇬🇧 EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("de")}
              className={`px-2 py-1 rounded ${language === "de" ? "bg-primary text-primary-foreground" : "hover:text-foreground"}`}
            >
              🇩🇪 DE
            </button>
            <ChevronDown className="w-3 h-3 mx-1" />
          </div>
          <Link to="/pricing" className="text-sm font-medium px-4 py-2 rounded-md bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition">
            {language === "de" ? "Paket wählen" : "Get Package"}
          </Link>
        </div>
      </div>
    </header>
  );
}
