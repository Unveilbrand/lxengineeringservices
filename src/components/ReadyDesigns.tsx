import Image from "next/image";
import Link from "next/link";

const tags = [
  "32sq\u00b2",
  "Schematics",
  "Rendering",
  "Elevations",
  "Sections",
  "Door & Window Scheduling",
];

export type ReadyDesignPlan = {
  title: string;
  image: string;
  alt: string;
  border: string;
  band: string;
};

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
];

export function ReadyDesignCard({ title, image, alt, border, band }: ReadyDesignPlan) {
  return (
    <article
      className={`flex flex-col border-[1.5px] ${border} bg-white p-2 shadow-[0_24px_60px_rgba(0,0,0,0.10)]`}
    >
      <div className="relative aspect-[380/300] w-full overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <h3
          className={`absolute inset-x-0 bottom-0 ${band} px-4 py-2.5 text-[15px] font-medium leading-tight text-foreground backdrop-blur-[3px]`}
        >
          {title}
        </h3>
      </div>

      <ul className="mt-4 flex flex-wrap gap-2 px-3">
        {tags.map((tag) => (
          <li
            key={tag}
            className="bg-zinc-100 px-2.5 py-1 text-[11px] text-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>

      <Link
        href="/ready-designs"
        className="mb-2 mr-3 mt-4 inline-flex items-center gap-1 self-end border-b border-brand pb-0.5 text-[12px] text-foreground transition-colors hover:text-brand"
      >
        Buy Now
        <Image
          src="/images/buy_now_icon.svg"
          alt=""
          width={10}
          height={13}
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}

export default function ReadyDesigns() {
  return (
    <section>
      <div className="relative isolate overflow-hidden lg:h-[calc(100vw*1050/1512_-_50px)] lg:max-h-[910px]">
        <Image
          src="/images/how_we_work_bg.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="-z-10 object-cover object-[right_bottom]"
        />

        <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-center px-6 py-20 lg:h-full lg:min-h-[640px] lg:py-24 lg:pt-15">
        <div className="flex max-w-[460px] flex-col items-start">
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
          <h2 className="mt-5 text-3xl font-medium leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[46px]">
            Get Our Premade Building Plans &amp; Drawings.
          </h2>
          <p className="mt-5 text-xl max-w-[320px] leading-snug text-foreground lg:text-[24px]">
            Lets Help Customize it to fit your desired need.
          </p>
          <Link
            href="/contact"
            className="cta-brackets mt-10 text-[14px] text-foreground transition-colors hover:text-white focus-visible:text-white"
          >
            Let&apos;s Talk Now
          </Link>
        </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <ReadyDesignCard key={plan.image} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
