import { ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useLanguage } from "@/lib/language";

const items = [
  ["Does one account support multiple devices?", "By default each subscription supports 1 device. Multi-device plans are available for 2, 3 or 4 simultaneous connections."],
  ["Do you offer a free trial?", "Yes — request a free 1-day trial before purchasing any plan, no payment details needed."],
  ["Which payment methods are available?", "We accept PayPal, Bank Transfer and Crypto."],
  ["How long does delivery take?", "Activation is instant after payment confirmation — usually within a few seconds."],
  ["What countries are included?", "Channels from across Europe and the world: UK, Germany, France, Italy, Spain, Netherlands, USA, and many more."],
  ["Will my subscription renew automatically?", "No, all subscriptions are one-time payments. You renew manually whenever you choose."],
  ["Do you have a referral program?", "Yes, share your referral link and earn credit on every purchase made by a friend."],
  ["How do I contact support if I have an issue?", "Reach out via WhatsApp or Telegram, daily from 09:00 to 00:00."],
  ["Is adult (18+) content available?", "Adult content is not included by default but is available upon request."],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { language } = useLanguage();
  const isGerman = language === "de";
  const translatedItems = isGerman
    ? [
        ["Kann ich ein Konto auf mehreren Geräten verwenden?", "Standardmäßig unterstützt jedes Abonnement 1 Gerät. Multi-Device-Pläne sind für 2, 3 oder 4 gleichzeitige Verbindungen verfügbar."],
        ["Bietet ihr eine kostenlose Testversion an?", "Ja — fordere vor dem Kauf einen kostenlosen 1-Tages-Test an, ohne Zahlungsdaten."],
        ["Welche Zahlungsmethoden sind verfügbar?", "Wir akzeptieren PayPal, Banküberweisung und Krypto."],
        ["Wie lange dauert die Lieferung?", "Die Aktivierung erfolgt sofort nach Zahlungsbestätigung — normalerweise in wenigen Sekunden."],
        ["Welche Länder sind enthalten?", "Sender aus Europa und weltweit: UK, Deutschland, Frankreich, Italien, Spanien, Niederlande, USA und viele mehr."],
        ["Verlängert sich mein Abonnement automatisch?", "Nein, alle Abonnements sind Einmalzahlungen. Du verlängerst manuell, wann du möchtest."],
        ["Habt ihr ein Empfehlungsprogramm?", "Ja, empfiehl Freunde und erhalte Guthaben bzw. kostenlose Monate für qualifizierte Käufe."],
        ["Wie kontaktiere ich den Support bei einem Problem?", "Kontaktiere uns täglich von 09:00 bis 00:00 per WhatsApp oder Telegram."],
        ["Ist Adult-Inhalt (18+) verfügbar?", "Adult-Inhalt ist nicht standardmäßig enthalten, aber auf Anfrage verfügbar."],
      ]
    : items;
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
          FAQ
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
          {isGerman ? "Häufig gestellte " : "Frequently Asked "}<span className="text-gradient-green">{isGerman ? "Fragen" : "Questions"}</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          {isGerman ? "Alles Wichtige zu TIVIPLANET. Keine Antwort gefunden? " : "Everything you need to know about TIVIPLANET. Can't find your answer? "}
          <Link to="/faq" className="text-primary underline">{isGerman ? "Vollständige FAQ-Seite anzeigen" : "View the full FAQ page"}</Link>.
        </p>
      </div>

      <div className="mt-10 max-w-3xl mx-auto divide-y divide-border rounded-xl border border-border bg-surface/40 overflow-hidden">
        {translatedItems.map(([q, a], i) => (
          <div key={q}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-surface/60"
            >
              <span className="text-sm font-medium">{q}</span>
              <ChevronDown
                className={`w-4 h-4 text-muted-foreground transition-transform ${
                  open === i ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-sm text-muted-foreground">{a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
