"use client";

import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const testimonials = [
  {
    quote:
      "Fawezhejpinhands are my companions, they help in dealing with annoying, frustrating or even offensive comments from family and friends",
    name: "Amanda Wells",
  },
  {
    quote:
      "From the first consultation to the final drawings, the team made every step clear and stress-free. Our home turned out better than we imagined.",
    name: "Daniel Okoye",
  },
  {
    quote:
      "Their attention to detail is unmatched. The plans were permit-ready and the builders had zero questions. We will absolutely work with them again.",
    name: "Grace Mensah",
  },
  {
    quote:
      "Professional, responsive, and genuinely creative. They turned a difficult plot into a beautiful, practical design our whole family loves.",
    name: "Michael Adeyemi",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 19"
          fill="#f5c400"
          className="h-[18px] w-[18px]"
          aria-hidden="true"
        >
          <path d="M10 0l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L10 14.8l-5.8 3.1 1.1-6.5L.6 6.8l6.5-.9L10 0z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/testimonial_bg.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/80 to-black/60"
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 py-16 sm:py-20 lg:flex-row lg:items-center lg:gap-16 lg:py-28">
        {/* Left copy */}
        <div className="shrink-0 lg:max-w-[400px]">
          <span className="inline-flex items-center gap-2 bg-white px-3 py-1.5 text-[13px] font-medium text-foreground">
            <Image
              src="/images/section_icon.svg"
              alt=""
              width={12}
              height={12}
              aria-hidden="true"
            />
            Customer Experiences
          </span>
          <h2 className="mt-6 text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[42px]">
            Real client stories showcasing our proven result.
          </h2>
        </div>

        {/* Slider card */}
        <div className="min-w-0 flex-1">
          <Swiper
            slidesPerView={1}
            autoHeight
            onSwiper={setSwiper}
            onSlideChange={(s) => setActive(s.activeIndex)}
          >
            {testimonials.map(({ quote, name }) => (
              <SwiperSlide key={name} className="!h-auto">
                <figure className="flex h-full flex-col rounded-[24px] bg-[#16181d]/70 p-6 backdrop-blur-lg sm:p-11">
                  <Stars />
                  <blockquote className="mt-6 text-[15px] leading-relaxed text-white/85 sm:text-[16px]">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-7 text-[15px] font-medium text-white">
                    {name}
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination — all yellow; active dot widens into a pill */}
          <div className="mt-7 flex items-center justify-end gap-2.5">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => swiper?.slideTo(i)}
                className={`h-2.5 rounded-full bg-[#f5c400] transition-all duration-300 ${
                  i === active ? "w-12" : "w-2.5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
