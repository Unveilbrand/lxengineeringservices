import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "3D Rendering Visualization | LX Engineering Services",
};

export default function RenderingVisualizationPage() {
  return (
    <ServicePage
      slug="3d-rendering-visualization"
      title="3D Rendering Visualization"
      image="/images/3d_bg.png"
      imageAlt="3D rendering of a modern apartment building with balconies"
      accent="orange"
    />
  );
}
