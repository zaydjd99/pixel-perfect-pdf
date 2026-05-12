import { Star } from "lucide-react";

const reviews = [
  { n: "Sarah J.", l: "Switched from Sky", t: "I cancelled Netflix and Sky because NEXASTREAM has everything in one place. Massive VOD library, perfect stream quality. Best purchase in a long time!" },
  { n: "Marco D.", l: "Football fan", t: "All Champions League matches in 4K with zero buffering. The integrated VPN is a brilliant touch. Highly recommend." },
  { n: "Lena K.", l: "Family of 4", t: "Set it up on the kids' tablets, my Smart TV and my partner's phone in under 10 minutes. Support replied within minutes." },
];

export function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
          Customer Reviews
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
          Loved by <span className="text-gradient-green">customers</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          See for yourself — here's what our customers say about NEXASTREAM.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {reviews.map((r) => (
          <div key={r.n} className="rounded-xl border border-border bg-surface/50 p-6">
            <div className="flex gap-0.5 text-primary mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">"{r.t}"</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground text-xs font-bold">
                {r.n.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-semibold">{r.n}</div>
                <div className="text-xs text-muted-foreground">{r.l}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <div className="flex gap-0.5 text-primary">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
        <span className="text-primary font-semibold">★ Trustpilot</span>
        <span>· Rated 4.8 of 5 on Trustpilot</span>
      </div>
    </section>
  );
}
