import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceDetail from "@/components/ServiceDetail";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Architectural Drawings | LX Engineering Services",
};

export default function ArchitecturalDrawingsPage() {
  return (
    <>
      <Navbar activeHref="/services" transparent dark />
      <main className="flex-1">
        <ServiceHero
          title="Architectural Drawings"
          image="/images/architectural_drawing_bg.png"
          imageAlt="White modern multi-storey house with balconies and trees"
        />
        <ServiceDetail
          activeService="architectural-drawings"
          breadcrumb="Architectural Drawings"
          introTitle="Designing the Future, One Idea at a Time."
          introText={[
            "Every iconic building starts with a brilliant idea, and that's where architectural design takes center stage.",
            "Our team blends creativity, functionality, and technical expertise to shape spaces that inspire and elevate everyday life. From initial concepts to detailed construction documents, we transform ideas into designs that are practical, stunning, and uniquely yours.",
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
