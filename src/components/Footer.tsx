import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Ready Designs", href: "/ready-designs" },
  { label: "Blog", href: "/blog" },
];

const offerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Ready Designs", href: "/ready-designs" },
  { label: "Blog", href: "/blog" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", src: "/images/facebook.svg", width: 22, height: 22 },
  { label: "Instagram", href: "https://instagram.com", src: "/images/instagram.svg", width: 70, height: 20 },
  { label: "YouTube", href: "https://youtube.com", src: "/images/youtube.svg", width: 48, height: 20 },
];

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[18px] font-medium text-foreground">{title}</h3>
      <ul className="mt-4 space-y-3 text-[13px] text-foreground">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link href={href} className="transition-colors hover:text-brand">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 pb-16 pt-12">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-foreground/50 pb-6">
          <Link href="/" aria-label="LX Engineering Services home">
            <Image
              src="/images/logo.svg"
              alt="LX Engineering Services"
              width={153}
              height={60}
            />
          </Link>
          <a
            href="https://unveilbrand.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start gap-2 sm:items-end"
          >
            <span className="text-[13px] font-bold text-foreground underline underline-offset-2">
              Web Creation By:
            </span>
            <Image
              src="/images/unveilbrand_logo.svg"
              alt="Unveilbrand"
              width={130}
              height={27}
            />
          </a>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1fr_2fr] lg:gap-8">
          <div>
            <h3 className="text-[18px] font-medium text-foreground">Reach Us</h3>
            <address className="mt-4 space-y-3 text-[13px] not-italic leading-snug text-foreground">
              <p>
                9 &amp;10 Canal lane, off post office
                <br />
                Oshodi, Lagos State. Nigeria.
              </p>
              <p>
                <a
                  href="mailto:info@lxengineeringservices.com"
                  className="transition-colors hover:text-brand"
                >
                  info@lxengineeringservices.com
                </a>
              </p>
              <p>
                <a href="tel:+2347035782888" className="transition-colors hover:text-brand">
                  +234 703 578 2888.
                </a>
              </p>
            </address>
          </div>

          <LinkColumn title="Quick Links" links={quickLinks} />
          <LinkColumn title="Our Offers" links={offerLinks} />

          <div>
            <h3 className="text-[18px] font-medium text-foreground">
              Subscribe To Newsletter
            </h3>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder=""
                className="h-11 flex-1 bg-zinc-100 px-4 text-[14px] text-foreground outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                className="h-11 border-[1.5px] border-brand px-8 text-[14px] text-foreground transition-colors hover:bg-brand hover:text-white"
              >
                Subscribe
              </button>
            </form>
            <ul className="mt-5 flex items-center gap-4">
              {socials.map(({ label, href, src, width, height }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="block transition-opacity hover:opacity-70"
                  >
                    <Image src={src} alt="" width={width} height={height} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
