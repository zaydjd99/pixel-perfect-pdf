import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — TIVIPLANET" },
      { name: "description", content: "How TIVIPLANET operates and protects your personal data." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

const sectionsEN = [
  { id: "scope", title: "Scope & Acceptance", body: "These General Terms and the Privacy Policy apply to all transactions made through our website catalog. Any order placed on this site requires the unconditional and irrevocable acceptance of these terms by the customer." },
  { id: "purpose", title: "Purpose of the Agreement", body: "This is a distance contract governing the rights and obligations of the parties in connection with the sale of IPTV products on the Internet via our store." },
  { id: "prices", title: "Prices", body: "Unless otherwise stated, all prices include applicable taxes on the day of the order. We reserve the right to modify prices at any time. The product will be billed according to the price in effect at the time of order confirmation and subject to availability." },
  { id: "orders", title: "Orders", body: "Place your order on our website or chat with us anytime via WhatsApp or Telegram. We are here to help every day." },
  { id: "confirmation", title: "Order Confirmation", body: "Any order placed implies acceptance of these Terms. Order confirmation indicates your full agreement without exception or reservation. All data provided and recorded confirmations constitute proof of the transaction." },
  { id: "payment", title: "Payment Methods & Security", body: "You may pay using the methods shown at checkout: PayPal, Bank Transfer or Crypto. Your account will be charged upon confirmation." },
  { id: "availability", title: "Availability", body: "Our products are offered as long as they are visible on the website and subject to availability. If a product becomes unavailable after your order, you will be informed by email." },
  { id: "delivery", title: "Delivery", body: "Your products are delivered to the email address you provided during checkout. If there is any delay, we will let you know right away on WhatsApp or Telegram." },
  { id: "warranty", title: "Warranty & Returns", body: "The legal guarantee of conformity and warranty against hidden defects apply to all our products. In case of non-conformity, a refund may be issued. All claims and refund requests must be made by email within 48 hours of delivery." },
  { id: "archiving", title: "Archiving of Proof", body: "We archive orders and invoices on a reliable and durable medium that constitutes a true copy in accordance with applicable civil code requirements." },
  { id: "force", title: "Force Majeure", body: "We are obligated to fulfill our commitments unless prevented by an event of force majeure." },
];

const sectionsDE = [
  { id: "scope", title: "Geltungsbereich & Annahme", body: "Diese AGB und die Datenschutzerklärung gelten für alle Transaktionen, die über unseren Webseitenkatalog getätigt werden. Jede auf dieser Seite getätigte Bestellung setzt die bedingungslose und unwiderrufliche Annahme dieser Bedingungen durch den Kunden voraus." },
  { id: "purpose", title: "Zweck der Vereinbarung", body: "Dies ist ein Fernabsatzvertrag, der die Rechte und Pflichten der Parteien im Zusammenhang mit dem Verkauf von IPTV-Produkten über unseren Online-Shop regelt." },
  { id: "prices", title: "Preise", body: "Sofern nicht anders angegeben, enthalten alle Preise die am Tag der Bestellung geltenden Steuern. Wir behalten uns das Recht vor, Preise jederzeit zu ändern." },
  { id: "orders", title: "Bestellungen", body: "Bestelle auf unserer Webseite oder schreibe uns jederzeit auf WhatsApp oder Telegram. Wir sind täglich für dich da." },
  { id: "confirmation", title: "Auftragsbestätigung", body: "Jede Bestellung beinhaltet die Annahme dieser Bedingungen. Die Auftragsbestätigung zeigt deine vollständige Zustimmung ohne Ausnahme oder Vorbehalt." },
  { id: "payment", title: "Zahlungsmethoden & Sicherheit", body: "Du kannst mit den an der Kasse angezeigten Methoden bezahlen: PayPal, Banküberweisung oder Krypto." },
  { id: "availability", title: "Verfügbarkeit", body: "Unsere Produkte werden so lange angeboten, wie sie auf der Webseite sichtbar sind und vorbehaltlich der Verfügbarkeit." },
  { id: "delivery", title: "Lieferung", body: "Deine Produkte werden an die bei der Bestellung angegebene E-Mail-Adresse geliefert. Bei Verzögerungen informieren wir dich sofort." },
  { id: "warranty", title: "Garantie & Rückgabe", body: "Die gesetzliche Garantie auf Konformität und gegen versteckte Mängel gilt für alle unsere Produkte. Reklamationen müssen innerhalb von 48 Stunden nach Lieferung per E-Mail erfolgen." },
  { id: "archiving", title: "Archivierung der Belege", body: "Wir archivieren Bestellungen und Rechnungen auf einem zuverlässigen und dauerhaften Medium gemäß den geltenden zivilrechtlichen Anforderungen." },
  { id: "force", title: "Höhere Gewalt", body: "Wir sind verpflichtet, unsere Verpflichtungen zu erfüllen, es sei denn, sie werden durch ein Ereignis höherer Gewalt verhindert." },
];

function PrivacyPage() {
  const { language } = useLanguage();
  const isDe = language === "de";
  return (
    <LegalPage
      badge={isDe ? "Rechtliches" : "Legal"}
      title={isDe ? "Datenschutzerklärung" : "Privacy Policy"}
      intro={isDe ? "Klar, einfach und transparent. Erfahre, wie wir arbeiten und deine Daten schützen." : "Clear, simple, and transparent. Learn how we operate and protect your data."}
      updated={isDe ? "Wir aktualisieren diese Seite regelmäßig." : "We update this page regularly."}
      sections={isDe ? sectionsDE : sectionsEN}
      contactTitle={isDe ? "Fragen zu dieser Richtlinie?" : "Questions about this policy?"}
      contactBody={isDe ? "Wir helfen gerne. Schreibe uns direkt — wir antworten schnell." : "We are happy to help. Message us directly and we will reply quickly."}
    />
  );
}
