import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Consulting Services | LX Engineering Services",
};

export default function ConsultingServicesPage() {
  return (
    <ServicePage
      slug="consulting-services"
      title="Consulting Services"
      image="/images/consulting_bg.png"
      imageAlt="Modern interior space"
      accent="orange"
    />
  );
}
