import type { CSSProperties } from "react";
import Image from "next/image";

const services = [
  { title: "Architectural Drawings", color: "#75dd43" },
  { title: "Building Construction", color: "#f5c400" },
  { title: "Site Project Management", color: "#e8732c" },
  { title: "Land Survey", color: "#f5c400" },
  { title: "Land Survey", color: "#75dd43" },
];

export default function WhatWeOffer() {
  return (
    <section className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-full bg-black lg:h-[84%]"
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] gap-10 px-6 pt-12 lg:grid-cols-2 lg:gap-16 lg:pt-0">
        <div className="mx-auto w-full max-w-[360px] lg:max-w-none">
          <Image
            src="/images/what_we_offer_img.svg"
            alt="Modern apartment building with balconies, framed by the LX letterform"
            width={720}
            height={1020}
            sizes="(min-width: 1200px) 544px, (min-width: 1024px) 46vw, 360px"
            className="h-auto w-full"
          />
        </div>

        <div className="flex flex-col justify-center pb-14 text-white lg:h-[84%] lg:py-12">
          <div className="flex flex-col">
            <span className="inline-flex items-center gap-2 self-start bg-zinc-100 px-3 py-1.5 text-[13px] font-medium text-foreground">
              <Image
                src="/images/section_icon.svg"
                alt=""
                width={12}
                height={12}
                aria-hidden="true"
              />
              What We Offer
            </span>
            <h2 className="mt-4 max-w-[400px] text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl lg:text-[36px]">
              With Innovative Design &amp; Experts In Construction Services
            </h2>

            <ol className="mt-8 flex max-w-[400px] flex-col gap-6 lg:gap-7">
              {services.map(({ title, color }, index) => (
                <li
                  key={`${title}-${index}`}
                  className="offer-row text-[14px]"
                  style={{ "--line": color } as CSSProperties}
                >
                  <span className="offer-row__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pl-6">{title}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
