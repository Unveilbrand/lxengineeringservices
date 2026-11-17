import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Feasibility Studies | LX Engineering Services",
};

export default function FeasibilityStudiesPage() {
  return (
    <ServicePage
      slug="feasibility-studies"
      title="Feasibility Studies"
      image="/images/feasibility_bg.png"
      imageAlt="Hands assembling an architectural scale model"
      accent="green"
    />
  );
}
