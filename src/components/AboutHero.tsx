import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative isolate flex h-[100svh] min-h-[560px] max-h-[900px] items-end overflow-hidden">
      <Image
        src="/images/about_hero_bg.png"
        alt="Modern cliffside villa with an infinity pool at sunset"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0)_22%,rgba(0,0,0,0)_60%,rgba(0,0,0,0.55)_100%)]"
      />

      <div className="mx-auto w-full max-w-[1200px] px-6 pb-12 lg:pb-16">
        <h1 className="text-3xl max-w-[1100px] font-normal leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[44px]">
          We listen, we plan, and we build&mdash;always keeping your goals at the
          heart of everything we do.
        </h1>
      </div>
    </section>
  );
}
