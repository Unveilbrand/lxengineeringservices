import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Landscape Architecture | LX Engineering Services",
};

export default function LandscapeArchitecturePage() {
  return (
    <ServicePage
      slug="landscape-architecture"
      title="Landscape Architecture"
      image="/images/landscape_bg.png"
      imageAlt="Modern house with large glass doors surrounded by greenery"
      accent="yellow"
    />
  );
}
