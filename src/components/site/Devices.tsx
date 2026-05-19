import { Tv, Smartphone, Monitor, Cast, Box } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { telegramUrl, whatsappUrl } from "@/lib/site-links";
import { TelegramIcon, WhatsAppIcon } from "@/lib/order-modal";

const devicesEN = [
  { i: Tv, n: "Smart TV", d: "Samsung · LG · Sony" },
  { i: Smartphone, n: "Smartphone & Tablet", d: "Android · iOS" },
  { i: Monitor, n: "PC / Mac", d: "Windows · macOS" },
  { i: Cast, n: "Streaming Box", d: "Firestick · Chromecast" },
  { i: Box, n: "IPTV Box", d: "MAG · Formuler" },
];

const devicesDE = [
  { i: Tv, n: "Smart-TV", d: "Samsung · LG · Sony" },
  { i: Smartphone, n: "Smartphone & Tablet", d: "Android · iOS" },
  { i: Monitor, n: "PC / Mac", d: "Windows · macOS" },
  { i: Cast, n: "Streaming-Box", d: "Firestick · Chromecast" },
  { i: Box, n: "IPTV-Box", d: "MAG · Formuler" },
];

export function Devices() {
  const { language } = useLanguage();
  const isGerman = language === "de";

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
          {isGerman ? "Kompatible Geräte" : "Compatible Devices"}
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
          {isGerman ? "Verfügbar auf " : "Available on "}<span className="text-gradient-green">{isGerman ? "jedem Gerät" : "every device"}</span>{isGerman ? " das du besitzt" : " you own"}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          {isGerman ? "TIVIPLANET funktioniert auf all deinen Geräten. In wenigen Minuten einrichten und sofort streamen — ohne technisches Wissen." : "TIVIPLANET works on all your devices. Set up in minutes and start watching immediately — no technical knowledge required."}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
        {(isGerman ? devicesDE : devicesEN).map((d) => (
          <div
            key={d.n}
            className="rounded-xl border border-border bg-surface/50 p-5 hover:border-primary/40 transition"
          >
            <div className="w-10 h-10 rounded-lg bg-surface-2 grid place-items-center text-primary mb-3">
              <d.i className="w-5 h-5" />
            </div>
            <div className="font-semibold text-sm">{d.n}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{d.d}</div>
            <div className="text-[10px] text-primary mt-2">✓ Supported</div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-surface/40 p-4">
        <div className="text-sm">
          <span className="text-muted-foreground">Stream quality: </span>
          {["HD", "FHD", "4K", "UHD"].map((q) => (
            <span
              key={q}
              className="ml-1 text-xs px-2 py-0.5 rounded-md bg-surface-2 text-foreground"
            >
              {q}
            </span>
          ))}
        </div>
        <Link to="/tutorials" className="text-sm text-primary hover:underline">{isGerman ? "Setup-Tutorials ansehen" : "See setup tutorials"} →</Link>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-surface/40 p-4">
        <div>
          <div className="text-sm font-medium">{isGerman ? "Brauchst du Hilfe beim Start?" : "Need help getting started?"}</div>
          <div className="text-xs text-muted-foreground">
            {isGerman ? "Unser Support-Team richtet dich in Minuten ein — täglich per WhatsApp oder Telegram verfügbar." : "Our support team gets you up and running in minutes — available daily via WhatsApp or Telegram."}
          </div>
        </div>
        <div className="flex gap-2">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-whatsapp text-contact-foreground hover:opacity-90 transition">
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp
          </a>
          <a href={telegramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-telegram text-contact-foreground hover:opacity-90 transition">
            <TelegramIcon className="w-4 h-4" /> Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
