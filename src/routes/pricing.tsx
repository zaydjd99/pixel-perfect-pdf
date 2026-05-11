import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Pricing } from "@/components/site/Pricing";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — TIVIPLANET" },
      { name: "description", content: "Choose your perfect IPTV plan. From €5.83/month with 7-day money-back guarantee." },
      { property: "og:title", content: "Pricing — TIVIPLANET" },
      { property: "og:description", content: "Choose your perfect IPTV plan." },
    ],
  }),
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-6">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
