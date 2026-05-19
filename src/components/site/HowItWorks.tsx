import { MessageSquare, CreditCard, Tv } from "lucide-react";
import { useLanguage } from "@/lib/language";

const stepsEN = [
  {
    icon: MessageSquare,
    number: "1",
    title: "Contact Us",
    description: "Reach out via WhatsApp, Telegram or Email to request your free trial or purchase a plan.",
  },
  {
    icon: CreditCard,
    number: "2",
    title: "Make Payment",
    description: "Choose your preferred payment method — PayPal, Crypto, or Bank Transfer. Fast & secure.",
  },
  {
    icon: Tv,
    number: "3",
    title: "Start Watching",
    description: "Receive your login credentials instantly and enjoy 20,000+ channels on any device.",
  },
];

const stepsDE = [
  {
    icon: MessageSquare,
    number: "1",
    title: "Kontaktiere uns",
    description: "Melde dich per WhatsApp, Telegram oder E-Mail, um deine kostenlose Testversion anzufordern oder einen Plan zu kaufen.",
  },
  {
    icon: CreditCard,
    number: "2",
    title: "Bezahlung",
    description: "Wähle deine bevorzugte Zahlungsmethode — PayPal, Krypto oder Banküberweisung. Schnell & sicher.",
  },
  {
    icon: Tv,
    number: "3",
    title: "Starte das Streaming",
    description: "Erhalte deine Zugangsdaten sofort und genieße 20.000+ Sender auf jedem Gerät.",
  },
];

export function HowItWorks() {
  const { language } = useLanguage();
  const isGerman = language === "de";
  const steps = isGerman ? stepsDE : stepsEN;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
          {isGerman ? "So funktioniert's" : "How it works"}
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
          <span className="text-gradient-green">3</span> {isGerman ? "einfache Schritte" : "easy steps"}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          {isGerman 
            ? "Starte in wenigen Minuten mit dem Streaming. Kein technisches Wissen erforderlich." 
            : "Start streaming in minutes. No technical knowledge required."}
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative rounded-2xl border border-border bg-surface/50 p-6 text-center hover:border-primary/40 transition group"
          >
            {/* Connection line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/50 to-transparent" />
            )}
            
            {/* Step number badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-glow">
              {step.number}
            </div>
            
            {/* Icon */}
            <div className="mt-4 w-14 h-14 mx-auto rounded-xl bg-surface-2 grid place-items-center text-primary group-hover:bg-primary/10 transition">
              <step.icon className="w-7 h-7" />
            </div>
            
            {/* Content */}
            <h3 className="mt-4 font-semibold text-lg">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Getting started banner */}
      <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-sm font-medium">
            {isGerman ? "Bereit anzufangen?" : "Ready to get started?"}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {isGerman 
              ? "Kontaktiere uns jetzt für eine kostenlose 24-Stunden-Testversion." 
              : "Contact us now for a free 24-hour trial."}
          </div>
        </div>
        <a
          href="/contact"
          className="px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium shadow-glow hover:opacity-90 transition inline-flex items-center gap-2"
        >
          {isGerman ? "Kontakt aufnehmen" : "Get in Touch"} →
        </a>
      </div>
    </section>
  );
}
