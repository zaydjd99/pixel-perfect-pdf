import { Play, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";

const nav = [
  { label: "Home", to: "/" },
  { label: "Pricing", to: "/pricing" },
  { label: "Tutorials", to: "/tutorials" },
  { label: "Referral", to: "/referral" },
  { label: "Reseller", to: "/" },
  { label: "FAQ", to: "/" },
  { label: "Contact", to: "/" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-wide text-primary">
          <span className="grid place-items-center w-7 h-7 rounded-md bg-gradient-primary text-primary-foreground">
            <Play className="w-3.5 h-3.5 fill-current" />
          </span>
          <span>TIVIPLANET</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md border border-border bg-surface text-muted-foreground hover:text-foreground">
            🇬🇧 EN <ChevronDown className="w-3 h-3" />
          </button>
          <button className="text-sm font-medium px-4 py-2 rounded-md bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition">
            Get Package
          </button>
        </div>
      </div>
    </header>
  );
}
