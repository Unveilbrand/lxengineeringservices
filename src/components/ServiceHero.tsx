import Image from "next/image";

type ServiceHeroProps = {
  title: string;
  image: string;
  imageAlt?: string;
  light?: boolean;
};

export default function ServiceHero({
  title,
  image,
  imageAlt = "",
  light = false,
}: ServiceHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[300px] sm:h-[360px] lg:h-[430px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="mx-auto flex h-full w-full max-w-[1200px] items-center px-6 pt-16">
          <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl ${light ? "text-white" : "text-foreground"} lg:text-[56px]`}>
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
