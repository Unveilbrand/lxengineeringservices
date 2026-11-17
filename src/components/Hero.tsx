import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "/images/hero_img_1.png",
    alt: "Service apartment building with a multi-storey glass atrium",
    caption: "Service Apartment",
    width: 512,
    height: 361,
  },
  {
    src: "/images/hero_img_2.jpg",
    alt: "Grand staircase layout with red carpet",
    caption: "Staircase Layout",
    width: 1280,
    height: 853,
  },
  {
    src: "/images/hero_img_3.jpg",
    alt: "Checkerboard stone floor casting",
    caption: "Floor Casting",
    width: 1280,
    height: 850,
  },
  {
    src: "/images/hero_img_4.jpg",
    alt: "White modern building with clean wall cladding",
    caption: "Wall Cladding",
    width: 904,
    height: 1280,
  },
];

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 pb-20 pt-16 lg:pt-24">
      {/* Copy row */}
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-[16px] text-foreground">
            Creating a Brighter Future for Property Owners
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[54px]">
            We Design &amp; Build
            <br />
            Amazing <span className="text-brand">Apartment</span>
          </h1>
        </div>

        <div className="flex flex-col items-start gap-5 lg:pt-4">
          <p className="max-w-[570px] text-[16px] leading-6 text-foreground">
            We&apos;re not just builders; we&apos;re creators of exceptional
            spaces. Our team is dedicated to delivering innovative designs and
            impeccable craftsmanship, leaving a lasting mark on both our clients
            and the landscape we shape.
          </p>
          <Link
            href="/contact"
            className="cta-brackets text-[16px] text-foreground transition-colors hover:text-white focus-visible:text-white"
          >
            Lets Show You How
          </Link>
        </div>
      </div>

      {/* Hover-expanding image gallery */}
      <div className="hero-gallery mt-14 flex flex-col gap-4 lg:mt-16">
        {galleryImages.map(({ src, alt, caption, width, height }, index) => (
          <figure key={src} className="flex min-w-0 flex-col">
            <div className="relative h-56 w-full overflow-hidden md:h-full">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="(min-width: 1200px) 560px, (min-width: 768px) 45vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover"
                preload={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
            <figcaption className="pt-3 text-[16px] text-foreground">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
