import { Tv2, Zap, ShieldOff, Lock, Layers, Database, CalendarRange, Headphones } from "lucide-react";
import { useLanguage } from "@/lib/language";

const itemsEN = [
  { i: Tv2, n: "20,000+ Live Channels", d: "Thousands of live TV channels from Europe and around the world — sports, news, entertainment and more." },
  { i: Zap, n: "Lightning Fast Streams", d: "Ultra-low latency thanks to our powerful CDN infrastructure. No buffering, no lag — pure entertainment." },
  { i: ShieldOff, n: "Anti-Freeze Technology", d: "Our advanced anti-freeze system ensures your stream never cuts out — even during peak hours." },
  { i: Lock, n: "Integrated VPN", d: "Every plan includes an integrated VPN for maximum privacy and unlimited access from anywhere." },
  { i: Layers, n: "All Devices Supported", d: "Smart TV, Android, iOS, Amazon Fire Stick, Roku, MAG, PC, Mac and more — everywhere." },
  { i: Database, n: "180,000+ VOD Content", d: "Massive library of movies and series on demand — newest content added daily." },
  { i: CalendarRange, n: "EPG / TV Guide", d: "7-day electronic program guide on most channels — never miss your favorite show." },
  { i: Headphones, n: "Support 09–24h", d: "Our support team is available daily from 09:00 to 00:00 to help you with any issue." },
];

const itemsDE = [
  { i: Tv2, n: "20.000+ Live-Sender", d: "Tausende Live-TV-Sender aus Europa und der ganzen Welt — Sport, Nachrichten, Unterhaltung und mehr." },
  { i: Zap, n: "Blitzschnelle Streams", d: "Ultra-niedrige Latenz dank unserer leistungsstarken CDN-Infrastruktur. Kein Buffering, keine Verzögerung." },
  { i: ShieldOff, n: "Anti-Freeze-Technologie", d: "Unser fortschrittliches Anti-Freeze-System sorgt dafür, dass dein Stream niemals aussetzt — auch zur Stoßzeit." },
  { i: Lock, n: "Integriertes VPN", d: "Jeder Plan enthält ein integriertes VPN für maximale Privatsphäre und unbegrenzten Zugriff von überall." },
  { i: Layers, n: "Alle Geräte unterstützt", d: "Smart TV, Android, iOS, Amazon Fire Stick, Roku, MAG, PC, Mac und mehr — überall." },
  { i: Database, n: "180.000+ VOD-Inhalte", d: "Riesige Filme- und Serienbibliothek auf Abruf — täglich neue Inhalte." },
  { i: CalendarRange, n: "EPG / TV-Guide", d: "7-Tage-Programmführer auf den meisten Sendern — verpasse nie deine Lieblingssendung." },
  { i: Headphones, n: "Support 09–24 Uhr", d: "Unser Support-Team ist täglich von 09:00 bis 00:00 für dich da." },
];

export function Features() {
  const { language } = useLanguage();
  const isGerman = language === "de";
  const items = isGerman ? itemsDE : itemsEN;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
          {isGerman ? "Warum NEXASTREAM?" : "Why NEXASTREAM?"}
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
          {isGerman ? "Alles was du für " : "Everything you need for "}<span className="text-gradient-green">{isGerman ? "perfektes Streaming brauchst" : "perfect streaming"}</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          {isGerman ? "Der vollständigste IPTV-Dienst mit Premium-Features — für Zuschauer in ganz Europa." : "The most complete IPTV service with premium features — for viewers across Europe."}
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
