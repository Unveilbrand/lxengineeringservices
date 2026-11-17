import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceDetail from "@/components/ServiceDetail";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Interior Design & Planning | LX Engineering Services",
};

export default function InteriorDesignPlanningPage() {
  return (
    <>
      <Navbar activeHref="/services" transparent dark />
      <main className="flex-1">
        <ServiceHero
          title="Interior Design & Planning"
          image="/images/interior_bg.png"
          imageAlt="Modern living room with yellow armchair and sofa"
        />
        <ServiceDetail
          activeService="interior-design-planning"
          breadcrumb="Interior Design & Planning"
          introTitle="Designing the Future, One Idea at a Time."
          introText={[
            "Every iconic building starts with a brilliant idea, and that's where architectural design takes center stage.",
            "Our team blends creativity, functionality, and technical expertise to shape spaces that inspire and elevate everyday life. From initial concepts to detailed construction documents, we transform ideas into designs that are practical, stunning, and uniquely yours.",
          ]}
          accent="yellow"
        />
      </main>
      <Footer />
    </>
  );
}
