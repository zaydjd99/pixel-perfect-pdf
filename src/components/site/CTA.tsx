import { Check } from "lucide-react";

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-xs uppercase tracking-wider text-primary px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
            ✦ Try for free — no risk
          </span>
          <h3 className="mt-4 text-5xl md:text-6xl font-bold">24H</h3>
          <div className="text-2xl font-semibold mt-1">FREE TRIAL</div>
          <p className="text-sm text-muted-foreground mt-3">Get 24 hours of unlimited access</p>

          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            {[
              "20,000+ Live TV Channels",
              "180,000+ Movies & Series (VOD)",
              "Ultra-Fast Streaming — 4K / FHD / Anti-Freeze",
              "All devices compatible",
              "Instant Activation",
            ].map((f) => (
              <li key={f} className="flex gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5" /> {f}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button className="w-full py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition">
            Get Free Trial →
          </button>
          <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-muted-foreground">
            {[
              "No credit card needed",
              "Cancel anytime",
              "Instant Activation",
              "7-Day Money-Back",
            ].map((f) => (
              <div key={f} className="flex gap-2">
                <Check className="w-4 h-4 text-primary" /> {f}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">
              Accepted Payment Methods
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {["VISA", "Mastercard", "PayPal", "iDEAL", "Sofort", "GiroPay", "Apple Pay", "Google Pay", "Amex", "Crypto"].map((p) => (
                <span
                  key={p}
                  className="px-2.5 py-1 rounded-md bg-surface-2 border border-border text-muted-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-5 text-xs text-muted-foreground text-center">
            Join thousands of happy customers and try TIVIPLANET today.
          </p>
        </div>
      </div>
    </section>
  );
}
