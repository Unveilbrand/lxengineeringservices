import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReadyDesignsHero from "@/components/ReadyDesignsHero";

export const metadata: Metadata = {
  title: "Ready Designs | LX Engineering Services",
};

export default function ReadyDesignsPage() {
  return (
    <>
      <Navbar activeHref="/ready-designs" transparent dark />
      <main className="flex-1">
        <ReadyDesignsHero />
      </main>
      <Footer />
    </>
  );
}
