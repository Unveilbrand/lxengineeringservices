import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceDetail, { type ServiceAccent } from "@/components/ServiceDetail";
import ServiceHero from "@/components/ServiceHero";

type ServicePageProps = {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  accent: ServiceAccent;
};

export default function ServicePage({
  slug,
  title,
  image,
  imageAlt,
  accent,
}: ServicePageProps) {
  return (
    <>
      <Navbar activeHref="/services" transparent dark />
      <main className="flex-1">
        <ServiceHero title={title} image={image} imageAlt={imageAlt} />
        <ServiceDetail
          activeService={slug}
          breadcrumb={title}
          introTitle="Designing the Future, One Idea at a Time."
          introText={[
            "Every iconic building starts with a brilliant idea, and that's where architectural design takes center stage.",
            "Our team blends creativity, functionality, and technical expertise to shape spaces that inspire and elevate everyday life. From initial concepts to detailed construction documents, we transform ideas into designs that are practical, stunning, and uniquely yours.",
          ]}
          accent={accent}
        />
      </main>
      <Footer />
    </>
  );
}
