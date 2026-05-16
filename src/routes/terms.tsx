import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service — NEXASTREAM" },
      { name: "description", content: "Please read these terms carefully. By using our services, you agree to these Terms of Service." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

const sectionsEN = [
  { id: "store", title: "Online Store Terms", body: "By agreeing to these Terms, you confirm you are at least the age of majority in your country or that you have given consent for your minor dependents to use this site. You must not use our Products for unlawful or unauthorized purposes." },
  { id: "general", title: "General Conditions", body: "We reserve the right to refuse service to anyone for any reason at any time. Your content, excluding payment details, may be transferred unencrypted over networks. Card details are always encrypted in transit." },
  { id: "accuracy", title: "Accuracy, Completeness & Timeliness", body: "We are not responsible if information on this site is not accurate, complete, or current. Material here is general information only and should not be your sole basis for decisions." },
  { id: "changes", title: "Changes to Service & Prices", body: "Prices may change without notice. We may modify or discontinue the Service at any time." },
  { id: "products", title: "Products or Services", body: "Some products and services may be available only online and in limited quantities. Descriptions and pricing may change at any time, and we may limit sales to any person, region, or jurisdiction." },
  { id: "tools", title: "Optional Tools", body: "We may provide access to third-party tools as is and as available without warranties. Use is entirely at your own risk." },
  { id: "comments", title: "User Comments & Submissions", body: "If you send ideas, suggestions, or other materials, you agree we may edit, publish, and use them without restriction. Your comments must not violate any rights or contain unlawful, offensive, or malicious content." },
  { id: "personal", title: "Personal Information", body: "Your submission of personal information is governed by our Privacy Policy." },
  { id: "law", title: "Governing Law", body: "These Terms and any separate agreements whereby we provide Services are governed by the laws applicable in our operating jurisdiction." },
  { id: "updates", title: "Changes to Terms", body: "You can review the most current version of the Terms on this page. We may update them here, and continued use after changes constitutes acceptance." },
];

const sectionsDE = [
  { id: "store", title: "Online-Shop-Bedingungen", body: "Mit der Annahme dieser Bedingungen bestätigst du, dass du in deinem Land mindestens volljährig bist. Du darfst unsere Produkte nicht für rechtswidrige Zwecke verwenden." },
  { id: "general", title: "Allgemeine Bedingungen", body: "Wir behalten uns das Recht vor, jederzeit aus beliebigem Grund den Service zu verweigern. Kartendaten werden bei der Übertragung stets verschlüsselt." },
  { id: "accuracy", title: "Genauigkeit & Aktualität", body: "Wir sind nicht verantwortlich, wenn Informationen auf dieser Seite nicht genau, vollständig oder aktuell sind." },
  { id: "changes", title: "Änderungen am Service & Preise", body: "Preise können ohne Vorankündigung geändert werden. Wir können den Service jederzeit ändern oder einstellen." },
  { id: "products", title: "Produkte oder Dienstleistungen", body: "Einige Produkte sind nur online und in begrenzter Menge verfügbar. Beschreibungen und Preise können sich jederzeit ändern." },
  { id: "tools", title: "Optionale Tools", body: "Wir bieten ggf. Zugang zu Drittanbieter-Tools ohne Gewährleistung. Die Nutzung erfolgt auf eigenes Risiko." },
  { id: "comments", title: "Benutzerkommentare & Einsendungen", body: "Wenn du Ideen oder Materialien sendest, dürfen wir diese ohne Einschränkung bearbeiten, veröffentlichen und verwenden." },
  { id: "personal", title: "Persönliche Daten", body: "Die Übermittlung persönlicher Daten unterliegt unserer Datenschutzerklärung." },
  { id: "law", title: "Geltendes Recht", body: "Diese Bedingungen unterliegen den am Sitz unseres Unternehmens geltenden Gesetzen." },
  { id: "updates", title: "Änderungen der Bedingungen", body: "Du kannst die aktuellste Version der Bedingungen auf dieser Seite einsehen. Wir können sie hier aktualisieren." },
];

function TermsPage() {
  const { language } = useLanguage();
  const isDe = language === "de";
  return (
    <LegalPage
      badge={isDe ? "Rechtliches" : "Legal"}
      title={isDe ? "Nutzungsbedingungen" : "Terms of Service"}
      intro={isDe ? "Bitte lies diese Bedingungen sorgfältig. Mit der Nutzung unserer Dienste stimmst du diesen Bedingungen zu." : "Please read these terms carefully. By using our services, you agree to these Terms of Service."}
      updated={isDe ? "Aktualisiert nach Bedarf." : "Updated as needed."}
      sections={isDe ? sectionsDE : sectionsEN}
      contactTitle={isDe ? "Fragen zu unseren Bedingungen?" : "Questions about our terms?"}
      contactBody={isDe ? "Unser Support-Team kann jeden Abschnitt vor oder nach deiner Bestellung erläutern." : "Our support team can clarify any section before or after your order."}
    />
  );
}
