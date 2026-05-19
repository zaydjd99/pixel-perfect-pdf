import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Movies } from "@/components/site/Movies";
import { Channels } from "@/components/site/Channels";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Pricing } from "@/components/site/Pricing";
import { Devices } from "@/components/site/Devices";
import { Features } from "@/components/site/Features";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "TIVIPLANET — Stream TV like never before" },
      {
        name: "description",
        content:
          "20,000+ live channels and 180,000+ movies & series in HD, 4K and UHD. Integrated VPN, EPG guide, instant activation.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Movies />
        <Channels />
        <HowItWorks />
        <Pricing />
        <Devices />
        <Features />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
