import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "Initial Consultation",
    description:
      "We begin by sitting down with you to understand your vision, goals, and preferences. This is where we listen carefully to your ideas, discuss your needs, and explore what’s possible.",
    border: "border-brand",
    band: "bg-brand/75",
  },
  {
    title: "Concept Development",
    description:
      "Once we have a clear understanding of your goals, we move on to brainstorming and designing. We create initial sketches, layouts, and concepts tailored to your unique vision.",
    border: "border-[#f5c400]",
    band: "bg-[#f5c400]/80",
  },
  {
    title: "Execution & Delivery",
    description:
      "With the concept approved, we focus on the practicalities. From detailed drawings and material selection to project timelines and budgets, we ensure every aspect is planned meticulously.",
    border: "border-[#e8732c]",
    band: "bg-[#e8732c]/80",
  },
];

export default function HowWeWork() {
  return (
    <section className="border-t border-foreground/90">
      <div className="mx-auto grid w-full max-w-[1200px] items-start gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
        {/* Left column */}
        <div className="flex flex-col items-start lg:sticky lg:top-24">
          <span className="inline-flex items-center gap-2 bg-zinc-100 px-3 py-1.5 text-[13px] font-medium text-foreground">
            <Image
              src="/images/section_icon.svg"
              alt=""
              width={12}
              height={12}
              aria-hidden="true"
            />
            How We Work
          </span>
          <h2 className="mt-5 max-w-[420px] text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
            See How We Bring your big ideas to life with clarity and fun
          </h2>
          <Link
            href="/contact"
            className="cta-brackets mt-14 text-[14px] text-foreground transition-colors hover:text-white focus-visible:text-white"
          >
            Let&apos;s Talk Now
          </Link>
        </div>

        {/* Step cards */}
        <div className="flex flex-col gap-12 lg:gap-24 lg:justify-self-end">
          {steps.map(({ title, description, border, band }, index) => (
            <article
              key={title}
              className={`w-full max-w-[540px] border-[1.5px] ${border} bg-white p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.12)]`}
            >
              <div className="relative h-[260px] w-full overflow-hidden sm:h-[285px]">
                <Image
                  src="/images/hero_img_1.png"
                  alt="Service apartment building with a multi-storey glass atrium"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover object-top"
                />
                <div
                  className={`absolute inset-x-0 bottom-0 flex items-end gap-4 ${band} px-8 py-5 backdrop-blur-[3px]`}
                >
                  <p className="flex flex-col leading-none">
                    <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-foreground">
                      Step
                    </span>
                    <span className="mt-1 text-[50px] font-bold leading-[0.85] text-foreground">
                      {index + 1}
                    </span>
                  </p>
                  <h3 className="pb-0.5 text-2xl font-medium leading-none text-foreground sm:text-[30px]">
                    {title}
                  </h3>
                </div>
              </div>
              <p className="px-8 pb-8 pt-7 text-[16px] leading-[1.45] text-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
