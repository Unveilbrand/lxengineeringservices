import Image from "next/image";

export default function OurStory() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="inline-block bg-brand px-3.5 py-2 text-[13px] font-medium text-black">
            Our Story
          </span>
          <h2 className="mt-10 text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[36px]">
            We listen, we plan,
          </h2>
          <p className="mt-7 max-w-[560px] text-[13px] leading-relaxed text-white/85">
            It all started with a sketch on a coffee-stained napkin. Our
            founder, Oliver Vance, had a vision&mdash;a dream of building not
            just structures, but experiences. Armed with boundless creativity, a
            small but mighty team, and a shared love for great design,
            Architectured was born in 2005.
          </p>
          <p className="mt-5 max-w-[560px] text-[13px] leading-relaxed text-white/85">
            Fast forward to today, and we&apos;re proud to be a thriving team,
            working on projects of all shapes and sizes, still fueled by the
            same passion and curiosity that got us started. While our tools and
            techniques have evolved, our commitment to quality, sustainability,
            and building meaningful connections remains stronger than ever.
          </p>
        </div>

        <div className="relative aspect-[500/480] w-full overflow-hidden">
          <Image
            src="/images/story_img.png"
            alt="Modern white villa with balconies under a clear blue sky"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
