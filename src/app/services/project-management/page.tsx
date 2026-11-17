import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Project Management | LX Engineering Services",
};

export default function ProjectManagementPage() {
  return (
    <ServicePage
      slug="project-management"
      title="Project Management"
      image="/images/project_bg.png"
      imageAlt="Worker cutting metal with sparks flying"
      accent="green"
    />
  );
}
