import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurMission from "@/components/OurMission";
import OurStory from "@/components/OurStory";
import OurVision from "@/components/OurVision";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About | LX Engineering Services",
};

export default function AboutPage() {
  return (
    <>
      <Navbar activeHref="/about" transparent />
      <main className="flex-1">
        <AboutHero />
        <OurStory />
        <OurMission />
        <OurVision />
        <Careers />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
