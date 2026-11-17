import Image from "next/image";

export default function ReadyDesignsHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[480px] sm:h-[600px] lg:h-[760px]">
        <Image
          src="/images/ready_design_hero_bg.png"
          alt="Architectural sketch of a modern multi-storey building with warm lit interiors"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="mx-auto flex h-full w-full max-w-[1200px] items-end px-6 pb-12 lg:pb-16">
          <h1 className="max-w-[820px] text-3xl font-normal leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
            See the bold ideas, innovative concepts, and completed projects
            predesigned for you.
          </h1>
        </div>
      </div>
    </section>
  );
}
