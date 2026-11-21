import {
  ReadyDesignCard,
  type ReadyDesignPlan,
} from "@/components/ReadyDesigns";

const plans: ReadyDesignPlan[] = [
  {
    title: "Residential 3 Bedroom Detached Bungalow",
    image: "/images/hww_1.png",
    alt: "Modern concrete and glass building viewed from below",
    border: "border-brand",
    band: "bg-brand/75",
  },
  {
    title: "Residential 3 Bedroom Detached Bungalow",
    image: "/images/hww_2.png",
    alt: "Curved yellow architectural structure",
    border: "border-[#f5c400]",
    band: "bg-[#f5c400]/80",
  },
  {
    title: "Residential 3 Bedroom Detached Bungalow",
    image: "/images/hww_3.png",
    alt: "White Mediterranean-style buildings under a blue sky",
    border: "border-[#e8732c]",
    band: "bg-[#e8732c]/80",
  },
  {
    title: "Residential 3 Bedroom Detached Bungalow",
    image: "/images/hww_2.png",
    alt: "Curved yellow architectural structure",
    border: "border-[#f5c400]",
    band: "bg-[#f5c400]/80",
  },
  {
    title: "Residential 3 Bedroom Detached Bungalow",
    image: "/images/hww_3.png",
    alt: "White Mediterranean-style buildings under a blue sky",
    border: "border-[#e8732c]",
    band: "bg-[#e8732c]/80",
  },
  {
    title: "Residential 3 Bedroom Detached Bungalow",
    image: "/images/hww_1.png",
    alt: "Modern concrete and glass building viewed from below",
    border: "border-brand",
    band: "bg-brand/75",
  },
];

export default function ReadyDesignsGallery() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <ReadyDesignCard key={`${plan.image}-${i}`} {...plan} />
        ))}
      </div>
    </section>
  );
}
