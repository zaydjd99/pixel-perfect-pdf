import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { Send, MessageCircle, ArrowRight, Tv, Smartphone, Apple, Monitor, Cast, Box } from "lucide-react";

export const Route = createFileRoute("/tutorials")({
  component: TutorialsPage,
  head: () => ({
    meta: [
      { title: "Tutorials — How to set up TiviPlanet" },
      { name: "description", content: "Step-by-step setup instructions for every device — Fire TV, Android, iOS, Windows, Roku, LG, Samsung, MAG/STB." },
      { property: "og:title", content: "How to set up TiviPlanet" },
      { property: "og:description", content: "Setup guides for every device in less than 2 minutes." },
    ],
  }),
});

const devices = [
  { name: "Fire TV", icon: Cast },
  { name: "Android", icon: Smartphone },
  { name: "Apple iOS", icon: Apple },
  { name: "Windows", icon: Monitor },
  { name: "Roku TV", icon: Tv },
  { name: "LG TV", icon: Tv },
  { name: "MAG / STB", icon: Box },
  { name: "Samsung TV", icon: Tv },
];

function TutorialsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-6 py-16 text-center">
          <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
            Setup Guide
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold">How to set up TiviPlanet</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Step-by-step instructions for every device — takes less than 2 minutes. Need help? Our team is here instantly.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#229ED9] text-white text-sm font-medium hover:opacity-90 transition">
              <Send className="w-4 h-4" /> Telegram
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition">
              <MessageCircle className="w-4 h-4" /> Live Chat
            </button>
          </div>

          <div className="mt-14">
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Select your device
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {devices.map((d) => (
                <div
                  key={d.name}
                  className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/40 transition group"
                >
                  <div className="aspect-[4/3] rounded-xl bg-surface-2 grid place-items-center mb-4">
                    <d.icon className="w-12 h-12 text-primary" />
                  </div>
                  <div className="font-semibold mb-3">{d.name}</div>
                  <button className="w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider px-3 py-2 rounded-md border border-border bg-surface-2/60 text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition">
                    Setup Guide <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
