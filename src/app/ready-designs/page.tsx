import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReadyDesignsGallery from "@/components/ReadyDesignsGallery";
import ReadyDesignsHero from "@/components/ReadyDesignsHero";
import ServiceForm from "@/components/ServiceForm";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Ready Designs | LX Engineering Services",
};

export default function ReadyDesignsPage() {
  return (
    <>
      <Navbar activeHref="/ready-designs" transparent dark />
      <main className="flex-1">
        <ReadyDesignsHero />
        <ReadyDesignsGallery />
        <div className="mx-auto w-full max-w-[1200px] px-6 pb-20">
          <ServiceForm />
        </div>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
