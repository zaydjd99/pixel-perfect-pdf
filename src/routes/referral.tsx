import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Gift, Info, MessageCircle, Send, ArrowRight, Check, Clock, Users, Mail } from "lucide-react";

export const Route = createFileRoute("/referral")({
  component: ReferralPage,
  head: () => ({
    meta: [
      { title: "Referral Program — NEXASTREAM" },
      { name: "description", content: "Invite friends and earn 1 free month for every 12 months they buy. No codes, no hassle." },
      { property: "og:title", content: "Invite friends. Get rewarded." },
      { property: "og:description", content: "Refer someone to NexaStream and get free months added to your subscription." },
    ],
  }),
});

const steps = [
  {
    n: 1,
    title: "Tell us who you invited",
    body: "Contact our support with your email and your friend's email so we can link the referral.",
  },
  {
    n: 2,
    title: "Friend buys 12+ months",
    body: "Your friend purchases any yearly plan (12, 24 months, etc.). Monthly plans do not qualify.",
  },
  {
    n: 3,
    title: "We extend your subscription",
    body: "Once the purchase is confirmed, we add 1 free month to your subscription for every 12 months they bought.",
  },
];

const terms = [
  "You receive 1 free month for every 12 months purchased by the referred customer (e.g. 24 months = 2 free months).",
  "One reward per referred customer — the same person cannot be referred twice.",
  "Support may ask for both email addresses to verify the referral.",
  "The reward is added as an extension to your existing subscription.",
  "Referrals made before the program existed are not eligible.",
];

function ReferralPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
              <Gift className="w-3.5 h-3.5" /> Referral Program
            </span>
            <h1 className="mt-5 text-5xl md:text-6xl font-bold leading-tight">
              Invite friends.
              <br />
              <span className="text-gradient-green">Get rewarded.</span>
            </h1>
            <p className="mt-5 text-muted-foreground max-w-lg">
              Refer someone to NexaStream. Once their subscription is confirmed, we add free months
              directly to your account — no codes, no hassle.
            </p>

            <div className="mt-7 rounded-2xl border border-primary/40 bg-primary/5 p-5 flex items-center gap-4 max-w-md shadow-glow">
              <div className="w-12 h-12 rounded-xl bg-primary/15 grid place-items-center text-primary">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">1 month free</div>
                <div className="text-xs text-muted-foreground">
                  for every 12 months your friend buys
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-border bg-surface/50 p-4 max-w-md text-sm text-muted-foreground flex gap-3">
              <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                <span className="text-foreground font-medium">Example:</span> Your friend buys a
                24-month plan → you receive 2 free months added to your subscription.
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm hover:opacity-90 transition">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href="https://t.me/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#229ED9] text-white text-sm hover:opacity-90 transition">
                <Send className="w-4 h-4" /> Telegram
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-foreground hover:bg-surface-2 transition"
              >
                View Plans <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-2xl border border-border bg-surface/50 p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">How it works</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  It takes 3 simple steps. You refer, they subscribe, you get rewarded.
                </p>
              </div>
              <span className="shrink-0 text-xs px-3 py-1 rounded-full border border-primary/40 text-primary bg-primary/10">
                1 month free
              </span>
            </div>

            <ol className="mt-6 relative space-y-5 before:content-[''] before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-border">
              {steps.map((s) => (
                <li key={s.n} className="relative pl-14">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary/15 border border-primary/40 grid place-items-center text-primary font-semibold">
                    {s.n}
                  </div>
                  <div className="rounded-xl border border-border bg-surface-2/40 p-4">
                    <div className="font-semibold">{s.title}</div>
                    <p className="text-sm text-muted-foreground mt-1">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-xl border border-border bg-surface-2/40 p-5">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Clock className="w-4 h-4 text-primary" /> Terms & conditions
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {terms.map((t) => (
                  <li key={t} className="flex gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-border bg-surface-2/40 p-3 flex items-center gap-2 text-xs text-muted-foreground">
              <Users className="w-4 h-4 text-primary" />
              Open to all existing customers with an active NexaStream subscription.
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-2xl border border-border bg-surface/50 p-8 text-center">
          <h3 className="text-2xl font-bold">Ready to refer?</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Just message our support with your email and your friend's email after they subscribe.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-medium shadow-glow hover:opacity-90 transition">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href="https://t.me/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#229ED9] text-white font-medium hover:opacity-90 transition">
              <Send className="w-4 h-4" /> Telegram
            </a>
            <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border text-foreground hover:bg-surface-2 transition">
              <Mail className="w-4 h-4" /> Email
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
