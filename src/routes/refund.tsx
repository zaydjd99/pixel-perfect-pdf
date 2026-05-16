import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/refund")({
  component: RefundPage,
  head: () => ({
    meta: [
      { title: "Refund Policy — NEXASTREAM" },
      { name: "description", content: "We aim to keep you fully satisfied. Here is how refunds work at NEXASTREAM." },
    ],
    links: [{ rel: "canonical", href: "/refund" }],
  }),
});

const sectionsEN = [
  { id: "window", title: "Refund Window", body: "We offer refunds within the first 7 days of purchase, except for one-month subscriptions. If you are dissatisfied during this period, you can request a refund." },
  { id: "eligibility", title: "Eligibility", body: "Refunds may be considered when the product does not work as described, differs significantly from what was advertised, or technical issues prevent proper use." },
  { id: "how", title: "How to Request a Refund", body: "Please contact our support via WhatsApp, Telegram or email. Include your order details and a brief explanation so we can review the request quickly." },
  { id: "process", title: "Refund Process", body: "Once approved, we process the refund to your original payment method within 3–10 business days. Your payment provider may take additional time to post it." },
  { id: "non", title: "Non-Refundable Cases", body: "Orders beyond the 7-day refund period and one-month subscriptions after delivery or activation are not refundable." },
];

const sectionsDE = [
  { id: "window", title: "Rückerstattungsfrist", body: "Wir bieten Rückerstattungen innerhalb der ersten 7 Tage nach dem Kauf an, ausgenommen Monatsabonnements. Bist du in dieser Zeit unzufrieden, kannst du eine Rückerstattung beantragen." },
  { id: "eligibility", title: "Voraussetzungen", body: "Rückerstattungen können in Betracht gezogen werden, wenn das Produkt nicht wie beschrieben funktioniert oder technische Probleme die ordnungsgemäße Nutzung verhindern." },
  { id: "how", title: "Rückerstattung beantragen", body: "Bitte kontaktiere unseren Support per WhatsApp, Telegram oder E-Mail. Gib deine Bestelldaten und eine kurze Erklärung an." },
  { id: "process", title: "Rückerstattungsprozess", body: "Nach Genehmigung erfolgt die Rückerstattung auf deine ursprüngliche Zahlungsmethode innerhalb von 3–10 Werktagen." },
  { id: "non", title: "Nicht erstattungsfähige Fälle", body: "Bestellungen nach Ablauf der 7-Tage-Frist und Monatsabonnements nach Lieferung oder Aktivierung sind nicht erstattungsfähig." },
];

function RefundPage() {
  const { language } = useLanguage();
  const isDe = language === "de";
  return (
    <LegalPage
      badge={isDe ? "Richtlinie" : "Policy"}
      title={isDe ? "Rückerstattungsrichtlinie" : "Refund Policy"}
      intro={isDe ? "Wir möchten dich vollständig zufriedenstellen. Hier erfährst du, wie Rückerstattungen funktionieren." : "We aim to keep you fully satisfied. If something is not right, here is how refunds work."}
      updated={isDe ? "Wir aktualisieren diese Seite regelmäßig." : "We update this page regularly."}
      sections={isDe ? sectionsDE : sectionsEN}
      contactTitle={isDe ? "Fragen zu Rückerstattungen?" : "Questions about refunds?"}
      contactBody={isDe ? "Wir sind täglich von 09:00 bis 00:00 erreichbar und prüfen deinen Fall schnell." : "We are available daily from 09:00 to 00:00 and can review your case quickly."}
    />
  );
}
