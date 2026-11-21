"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export type BlogPost = {
  title: string;
  image: string;
  alt: string;
};

export const posts: BlogPost[] = [
  {
    title: "Designing Your Dream Home: A Comprehensive Step-by-Step Guide",
    image: "/images/blog_img_1.png",
    alt: "Modern curved glass and stone building exterior",
  },
  {
    title: "Innovations Shaping the Future of Sustainable Construction",
    image: "/images/blog_img_2.png",
    alt: "Contemporary building with glass facade at dusk",
  },
  {
    title: "Essential Factors for Choosing the Right Builder",
    image: "/images/blog_img_3.png",
    alt: "Coastal town on cliffs overlooking the sea",
  },
  {
    title: "Innovations Shaping the Future of Sustainable Construction",
    image: "/images/blog_img_4.png",
    alt: "Contemporary building with glass facade at dusk",
  },
];

export function BlogCard({ title, image, alt }: BlogPost) {
  return (
    <article className="flex h-full flex-col bg-white pb-8 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
      <div className="relative aspect-[210/197] w-full overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 330px, (min-width: 640px) 45vw, 85vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-7 px-6 text-[18px] font-medium leading-snug text-foreground lg:text-[20px]">
        {title}
      </h3>
      <Link
        href="/blog"
        className="mt-4 inline-flex items-center gap-1.5 self-start px-6 text-[13px] text-foreground/70 transition-colors hover:text-brand"
      >
        Read Blog
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

export default function Blogs() {
  return (
    <section className="overflow-x-clip py-16 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6">
        <span className="inline-flex items-center gap-2 bg-zinc-100 px-3 py-1.5 text-[13px] font-medium text-foreground">
          <Image
            src="/images/section_icon.svg"
            alt=""
            width={12}
            height={12}
            aria-hidden="true"
          />
          Our Latest Updates
        </span>
      </div>

      <div className="mx-auto mt-10 w-full max-w-[1200px] px-6">
        <Swiper
          className="!pb-10 !pt-2"
          slidesPerView={1.15}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.5 },
          }}
        >
          {posts.map((post, i) => (
            <SwiperSlide key={`${post.image}-${i}`} className="!h-auto">
              <BlogCard {...post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-4 flex justify-center">
        <Link
          href="/blog"
          className="cta-brackets text-[14px] text-foreground transition-colors hover:text-white focus-visible:text-white"
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
}
