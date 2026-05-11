import { Tv2, Zap, ShieldOff, Lock, Layers, Database, CalendarRange, Headphones } from "lucide-react";

const items = [
  { i: Tv2, n: "20,000+ Live Channels", d: "Thousands of live TV channels from Europe and around the world — sports, news, entertainment and more." },
  { i: Zap, n: "Lighting Fast Streams", d: "Ultra-low latency thanks to our powerful CDN infrastructure. No buffering, no lag — pure entertainment." },
  { i: ShieldOff, n: "Anti-Freeze Technology", d: "Our advanced anti-freeze system ensures your stream never cuts out — even during peak hours." },
  { i: Lock, n: "Integrated VPN", d: "Every plan includes an integrated VPN for maximum privacy and unlimited access from anywhere." },
  { i: Layers, n: "All Devices Supported", d: "Smart TV, Android, iOS, Amazon Fire Stick, Roku, MAG, PC, Mac and more — everywhere." },
  { i: Database, n: "180,000+ VOD Content", d: "Massive library of movies and series on demand — newest content added daily." },
  { i: CalendarRange, n: "EPG / TV Guide", d: "7-day electronic program guide on most channels — never miss your favorite show." },
  { i: Headphones, n: "Support 09–24h", d: "Our support team is available daily from 09:00 to 00:00 to help you with any issue." },
];

export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
          Why TIVIPLANET?
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
          Everything you need for <span className="text-gradient-green">perfect streaming</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          The most complete IPTV service with premium features — for viewers across Europe.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it) => (
          <div
            key={it.n}
            className="rounded-xl border border-border bg-surface/50 p-5 hover:border-primary/40 transition"
          >
            <div className="w-10 h-10 rounded-lg bg-surface-2 grid place-items-center text-primary mb-3">
              <it.i className="w-5 h-5" />
            </div>
            <div className="font-semibold text-sm">{it.n}</div>
            <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{it.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
