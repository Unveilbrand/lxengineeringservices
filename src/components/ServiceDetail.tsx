import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const accents = {
  green: { solid: "#75DD43", soft: "#e3f8d9" },
  yellow: { solid: "#f5c400", soft: "#fdf3c4" },
  orange: { solid: "#e8732c", soft: "#fde3d2" },
};

export type ServiceAccent = keyof typeof accents;

const serviceLinks = [
  { label: "Architectural Drawings", href: "/services/architectural-drawings", key: "architectural-drawings" },
  { label: "Interior Design & Planning", href: "/services/interior-design-planning", key: "interior-design-planning" },
  { label: "Consulting Services", href: "/services/consulting-services", key: "consulting-services" },
  { label: "Project Management", href: "/services/project-management", key: "project-management" },
  { label: "Landscape Architecture", href: "/services/landscape-architecture", key: "landscape-architecture" },
  { label: "3D Rendering Visualization", href: "/services/3d-rendering-visualization", key: "3d-rendering-visualization" },
  { label: "Feasibility Studies", href: "/services/feasibility-studies", key: "feasibility-studies" },
];

const offers = [
  { title: "Site Planning", icon: "/images/site_planning.svg" },
  { title: "Structural Designs", icon: "/images/structural_designs.svg" },
  { title: "Schematic Designs", icon: "/images/schematic_designs.svg" },
  { title: "Rendering", icon: "/images/rendering.svg" },
  { title: "Mechanical &Electrical Designs", icon: "/images/electrical_designs.svg" },
  { title: "Layout Design", icon: "/images/layout_design.svg" },
];

const included = [
  { title: "In-Depth Consultations", text: "to understand your project goals, lifestyle, and preferences." },
  { title: "Tailored Solutions", text: "Every design reflects your unique style and needs to work beautifully as they look." },
  { title: "Complete Design Development", text: "with detailed plans, renderings, and specifications." },
  { title: "Material & Color Palette Guidance", text: "to align the design with your vision." },
  { title: "Permit Ready Documents", text: "prepared for local authority approvals" },
  { title: "Collaboration with Builders", text: "to ensure flawless execution of the design." },
  { title: "Ongoing Support", text: "throughout the project for adjustments and recommendations." },
  { title: "Innovative Thinking", text: "Smart solutions that solve even the toughest design challenges." },
  { title: "Professional Guidance", text: "From start to finish, we ensure the process is smooth and rewarding." },
];

const benefits = [
  { title: "Discovery & Planning", icon: "/images/site_planning.svg" },
  { title: "Concept Design", icon: "/images/structural_designs.svg" },
  { title: "Refinement", icon: "/images/electrical_designs.svg" },
  { title: "Delivery & Beyond", icon: "/images/layout_design.svg" },
];

const inputClass =
  "w-full bg-white px-4 py-3.5 text-[14px] text-foreground placeholder:text-foreground/40 outline-none ring-brand focus:ring-2";

const offerText =
  "We optimize every inch of your site by blending zoning, environmental insight, and creative planning—ensuring your project is practical, harmonious, and purpose-driven.";

type ServiceDetailProps = {
  activeService: string;
  breadcrumb: string;
  introTitle: string;
  introText: string[];
  accent?: keyof typeof accents;
};

function Chevron() {
  return (
    <svg
      viewBox="0 0 8 12"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-2.5 w-2"
    >
      <path d="m2 1.5 4 4.5-4 4.5" />
    </svg>
  );
}

export default function ServiceDetail({
  activeService,
  breadcrumb,
  introTitle,
  introText,
  accent = "green",
}: ServiceDetailProps) {
  const theme = {
    "--accent": accents[accent].solid,
    "--accent-soft": accents[accent].soft,
  } as CSSProperties;

  return (
    <section style={theme}>
      {/* Breadcrumb bar */}
      <div className="bg-[var(--accent)]">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex w-full max-w-[1200px] items-center gap-5 px-6 py-3.5 text-[12px] text-black"
        >
          <Link href="/" className="font-semibold transition-opacity hover:opacity-70">
            Home
          </Link>
          <Chevron />
          <Link href="/services" className="font-semibold transition-opacity hover:opacity-70">
            Services
          </Link>
          <Chevron />
          <span aria-current="page">{breadcrumb}</span>
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Main content */}
        <div className="min-w-0 flex-1 px-6 py-12 lg:py-14 lg:pl-[max(24px,calc((100vw-1200px)/2+24px))] lg:pr-14">
          <h2 className="text-3xl font-normal tracking-tight text-foreground lg:text-[36px]">
            {introTitle}
          </h2>
          <div className="mt-7 max-w-[820px] space-y-2 text-[15px] leading-snug text-foreground">
            {introText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mt-12 text-2xl font-normal tracking-tight text-foreground lg:text-[28px]">
            What we offer
          </h3>

          <ul className="mt-8 grid max-w-[820px] gap-5 sm:grid-cols-2">
            {offers.map(({ title, icon }) => (
              <li
                key={title}
                className="border border-zinc-100 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center bg-zinc-100 text-foreground">
                  <Image
                    src={icon}
                    alt=""
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] object-contain"
                  />
                </span>
                <h4 className="mt-5 text-[20px] font-normal text-foreground">
                  {title}
                </h4>
                <p className="mt-2.5 text-[16px] leading-relaxed text-foreground">
                  {offerText}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-14 max-w-[820px] bg-[var(--accent-soft)] px-5 py-8 sm:px-6 sm:py-10">
            <h3 className="text-2xl font-normal tracking-tight text-foreground lg:text-[28px]">
              See what&apos;s included
            </h3>
            <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {included.map(({ title, text }, i) => {
                const dark = i % 2 === 1;
                return (
                  <li
                    key={title}
                    className={`py-[30px] px-[25px] ${dark ? "bg-black text-white" : "bg-white text-foreground"}`}
                  >
                    <h4 className="text-[20px] font-normal leading-tight">
                      {title}
                    </h4>
                    <p
                      className={`mt-2 text-[16px] leading-snug ${
                        dark ? "text-white/85" : "text-foreground/80"
                      }`}
                    >
                      {text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          <h3 className="mt-14 text-2xl font-normal tracking-tight text-foreground lg:text-[28px]">
            Benefits
          </h3>
          <ul className="mt-7 grid max-w-[820px] grid-cols-2 gap-5 lg:grid-cols-4">
            {benefits.map(({ title, icon }) => (
              <li
                key={title}
                className="bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center bg-zinc-100">
                  <Image
                    src={icon}
                    alt=""
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] object-contain"
                  />
                </span>
                <h4 className="mt-5 max-w-[120px] text-[16px] font-normal leading-tight text-foreground">
                  {title}
                </h4>
              </li>
            ))}
          </ul>

          <div className="relative isolate mt-12 max-w-[820px] overflow-hidden px-5 py-14 sm:px-16 sm:py-16">
            <Image
              src="/images/form_bg_img.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 820px, 100vw"
              className="-z-10 object-cover"
            />
            <form className="mx-auto max-w-[540px] bg-[var(--accent-soft)]/90 px-6 py-10 sm:px-12 sm:py-12">
              <h3 className="text-center text-2xl font-normal leading-tight tracking-tight text-foreground lg:text-[28px]">
                Send us your question,
                <br />
                and we&apos;ll be happy to help!
              </h3>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <label className="sr-only" htmlFor="sd-name">Name</label>
                <input id="sd-name" name="name" type="text" placeholder="Name" required className={inputClass} />
                <label className="sr-only" htmlFor="sd-phone">Phone Number</label>
                <input id="sd-phone" name="phone" type="tel" placeholder="Phone Number" className={inputClass} />
                <label className="sr-only" htmlFor="sd-email">Email</label>
                <input id="sd-email" name="email" type="email" placeholder="Email" required className={`${inputClass} sm:col-span-2`} />
                <label className="sr-only" htmlFor="sd-message">Message</label>
                <textarea id="sd-message" name="message" placeholder="Message" rows={4} required className={`${inputClass} resize-none sm:col-span-2`} />
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="cta-brackets text-[13px] text-foreground transition-colors hover:text-white focus-visible:text-white"
                >
                  Let&apos;s Talk Now
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sticky sidebar */}
        <aside className="flex flex-col bg-white lg:w-[23%] lg:min-w-[280px] lg:max-w-[360px] lg:shrink-0">
          <div className="lg:flex-1">
          <div className="lg:sticky lg:top-0">
            <div className="px-7 pt-0">
              <Link
                href="/services"
                aria-label="Close services menu"
                className="inline-flex h-9 w-11 items-center justify-center bg-[var(--accent)] text-foreground transition-opacity hover:opacity-80"
              >
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="h-3 w-3"
                >
                  <path d="M2 2l8 8M10 2l-8 8" />
                </svg>
              </Link>
            </div>

            <nav aria-label="Services" className="mt-8 pb-10">
              <ul>
                {serviceLinks.map(({ label, href, key }) => {
                  const active = key === activeService;
                  return (
                    <li key={key}>
                      <Link
                        href={href}
                        aria-current={active ? "page" : undefined}
                        className={`block px-7 py-[15px] text-[12px] uppercase tracking-[0.04em] transition-colors ${
                          active
                            ? "border-r-4 border-[var(--accent)] bg-[var(--accent-soft)] text-foreground"
                            : "text-foreground hover:bg-zinc-50"
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          </div>
          <div className="hidden overflow-hidden lg:block">
            <Image
              src="/images/sidebar_bottom_img.png"
              alt="Architectural line sketch of a multi-storey building"
              width={375}
              height={1207}
              sizes="(min-width: 1024px) 380px, 0px"
              className="-ml-[5.5%] -mt-[5.5%] h-auto w-[106%] max-w-none"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
