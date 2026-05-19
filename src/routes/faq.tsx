import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQ — TIVIPLANET" },
      { name: "description", content: "Answers about TIVIPLANET subscriptions, setup, payments, devices and support." },
      { property: "og:title", content: "FAQ — TIVIPLANET" },
      { property: "og:description", content: "Answers about subscriptions, setup, payments, devices and support." },
    ],
  }),
});

function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-6">
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
