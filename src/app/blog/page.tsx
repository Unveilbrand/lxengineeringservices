import type { Metadata } from "next";
import BlogGrid from "@/components/BlogGrid";
import BlogHero from "@/components/BlogHero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceForm from "@/components/ServiceForm";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Blog | LX Engineering Services",
};

export default function BlogPage() {
  return (
    <>
      <Navbar activeHref="/blog" transparent dark />
      <main className="flex-1">
        <BlogHero />
        <BlogGrid />
        <div className="mx-auto w-full max-w-[1200px] px-6 pb-20">
          <ServiceForm />
        </div>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
