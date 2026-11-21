import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import Navbar from "@/components/Navbar";
import ReadyDesigns from "@/components/ReadyDesigns";
import Testimonials from "@/components/Testimonials";
import WhatWeOffer from "@/components/WhatWeOffer";

export default function Home() {
  return (
    <>
      <Navbar activeHref="/" />
      <main className="flex-1">
        <Hero />
        <HowWeWork />
        <WhatWeOffer />
        <ReadyDesigns />
        <Blogs />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
