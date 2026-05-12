import { Play } from "lucide-react";

export function Footer() {
  const cols = [
    { h: "Explore", l: ["Pricing", "Reseller"] },
    { h: "Help", l: ["Tutorials", "FAQs", "Contact"] },
    { h: "Legal", l: ["Privacy Policy", "Terms of Service", "Refund Policy"] },
  ];
  return (
    <footer className="border-t border-border/40 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="grid place-items-center w-7 h-7 rounded-md bg-gradient-primary text-primary-foreground">
              <Play className="w-3.5 h-3.5 fill-current" />
            </span>
            NEXASTREAM
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Seamless IPTV, premium stability, and friendly human support.
          </p>
          <div className="mt-4 text-xs">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary font-medium">Open every day</span>
            </span>
            <div className="text-muted-foreground mt-1">Support hours: 09:00–00:00</div>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div className="text-sm font-semibold mb-3">{c.h}</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.l.map((x) => (
                <li key={x}>
                  <a href="#" className="hover:text-foreground">
                    {x}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© 2018 NEXASTREAM. All rights reserved.</div>
          <div className="flex flex-wrap gap-2">
            <span>Payment methods:</span>
            {["Visa", "Mastercard", "PayPal", "iDEAL", "Sofort", "GiroPay", "Crypto"].map((p) => (
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
