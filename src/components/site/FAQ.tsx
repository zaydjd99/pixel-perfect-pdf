import { ChevronDown } from "lucide-react";
import { useState } from "react";

const items = [
  ["Does one account support multiple devices?", "By default each subscription supports 1 device. Multi-device plans are available for 2, 3 or 4 simultaneous connections."],
  ["Do you offer a free trial?", "Yes — request a free 1-day trial before purchasing any plan, no payment details needed."],
  ["Which payment methods are available?", "We accept Visa, Mastercard, PayPal, iDEAL, Sofort, GiroPay, Apple Pay, Google Pay and crypto."],
  ["How long does delivery take?", "Activation is instant after payment confirmation — usually within a few seconds."],
  ["What countries are included?", "Channels from across Europe and the world: UK, Germany, France, Italy, Spain, Netherlands, USA, and many more."],
  ["Will my subscription renew automatically?", "No, all subscriptions are one-time payments. You renew manually whenever you choose."],
  ["Do you have a referral program?", "Yes, share your referral link and earn credit on every purchase made by a friend."],
  ["How do I contact support if I have an issue?", "Reach out via Live Chat or Telegram, daily from 09:00 to 00:00."],
  ["Is adult (18+) content available?", "Adult content is not included by default but is available upon request."],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
          FAQ
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
          Frequently Asked <span className="text-gradient-green">Questions</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Everything you need to know about TIVIPLANET. Can't find your answer?{" "}
          <a className="text-primary underline">View the full FAQ page</a>.
        </p>
      </div>

      <div className="mt-10 max-w-3xl mx-auto divide-y divide-border rounded-xl border border-border bg-surface/40 overflow-hidden">
        {items.map(([q, a], i) => (
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
