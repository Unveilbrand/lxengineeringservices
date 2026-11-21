import Image from "next/image";
import Link from "next/link";
import { accents, serviceLinks } from "@/components/ServiceDetail";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ready Designs", href: "/ready-designs" },
  { label: "Blog", href: "/blog" },
];

type NavbarProps = {
  activeHref?: string;
  transparent?: boolean;
  /** Dark link/text colors for transparent navbars over light images. */
  dark?: boolean;
};

export default function Navbar({
  activeHref,
  transparent = false,
  dark = false,
}: NavbarProps) {
  const lightText = transparent && !dark;
  const linkColor = lightText ? "text-white/90" : "text-foreground/80";
  const activeColor = transparent
    ? `${lightText ? "text-white" : "text-foreground"} border-b-2 border-brand pb-2`
    : "text-brand";

  return (
    <header
      className={
        transparent
          ? "absolute inset-x-0 top-0 z-20 bg-transparent shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
          : "relative z-20 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.07)]"
      }
    >
      <nav className="mx-auto flex py-[15px] max-w-[1200px] items-center justify-between px-6">
        <Link href="/" aria-label="LX Engineering Services — home">
          <Image
            src="/images/logo.svg"
            alt="LX engineering service logo"
            width={153}
            height={60}
            className="h-[59px] w-[152px]"
            loading="eager"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 lg:flex">
          <li>
            <Link
              href={navLinks[0].href}
              aria-current={navLinks[0].href === activeHref ? "page" : undefined}
              className={`text-[14px] font-medium uppercase tracking-[0.14em] transition-colors hover:text-brand ${
                navLinks[0].href === activeHref ? activeColor : linkColor
              }`}
            >
              {navLinks[0].label}
            </Link>
          </li>
          <li>
            <Link
              href={navLinks[1].href}
              aria-current={navLinks[1].href === activeHref ? "page" : undefined}
              className={`text-[14px] font-medium uppercase tracking-[0.14em] transition-colors hover:text-brand ${
                navLinks[1].href === activeHref ? activeColor : linkColor
              }`}
            >
              {navLinks[1].label}
            </Link>
          </li>

          {/* Services — hover dropdown (no services index page) */}
          <li className="group relative">
            <button
              type="button"
              className={`text-[14px] font-medium uppercase tracking-[0.14em] transition-colors hover:text-brand ${linkColor}`}
              aria-haspopup="true"
            >
              Services
            </button>
            <div className="invisible absolute left-1/2 top-full z-30 w-[620px] max-w-[90vw] -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid grid-cols-[290px_1fr] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                <ul className="pb-3">
                  {serviceLinks.map(({ label, href, accent }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        aria-current={href === activeHref ? "page" : undefined}
                        style={
                          href === activeHref
                            ? {
                                backgroundColor: accents[accent].soft,
                                borderTop: `3px solid ${accents[accent].solid}`,
                              }
                            : undefined
                        }
                        className={`block px-7 py-3 text-[13px] uppercase tracking-[0.04em] transition-colors ${
                          href === activeHref
                            ? "text-foreground"
                            : "text-foreground hover:bg-zinc-50"
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="relative min-h-[220px]">
                  <Image
                    src="/images/services_dropdown_img.png"
                    alt=""
                    fill
                    sizes="330px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </li>

          {navLinks.slice(2).map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                aria-current={href === activeHref ? "page" : undefined}
                className={`text-[14px] font-medium uppercase tracking-[0.14em] transition-colors hover:text-brand ${
                  href === activeHref ? activeColor : linkColor
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={`hidden border border-brand px-6 py-2.5 text-[14px] font-medium uppercase tracking-[0.14em] transition-colors hover:bg-brand hover:text-white lg:inline-block ${
            lightText ? "text-white" : "text-foreground"
          }`}
        >
          Lets Talk
        </Link>

        {/* Mobile menu — JS-free disclosure widget */}
        <details className="group relative lg:hidden">
          <summary className={`flex h-10 w-10 cursor-pointer list-none items-center justify-center ${lightText ? "text-white" : "text-foreground"} marker:hidden [&::-webkit-details-marker]:hidden`}>
            <span className="sr-only">Toggle navigation</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="h-6 w-6 group-open:hidden"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="hidden h-6 w-6 group-open:block"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </summary>

          <ul className="absolute right-0 top-12 w-56 border border-foreground/10 bg-white py-3 shadow-lg">
            {navLinks.slice(0, 2).map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-current={href === activeHref ? "page" : undefined}
                  className={`block px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors hover:text-brand ${
                    href === activeHref ? "text-brand" : "text-foreground/80"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <span className="block px-5 pb-1 pt-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground/80">
                Services
              </span>
              <ul>
                {serviceLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={href === activeHref ? "page" : undefined}
                      className={`block py-1.5 pl-8 pr-5 text-[11px] font-medium uppercase tracking-[0.08em] transition-colors hover:text-brand ${
                        href === activeHref ? "text-brand" : "text-foreground/70"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {navLinks.slice(2).map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-current={href === activeHref ? "page" : undefined}
                  className={`block px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors hover:text-brand ${
                    href === activeHref ? "text-brand" : "text-foreground/80"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="px-5 pt-2">
              <Link
                href="/contact"
                className="inline-block border border-brand px-5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-brand hover:text-white"
              >
                Lets Talk
              </Link>
            </li>
          </ul>
        </details>
      </nav>
    </header>
  );
}
