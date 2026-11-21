import Image from "next/image";
import type { CSSProperties } from "react";

const inputClass =
  "w-full bg-white px-4 py-3.5 text-[14px] text-foreground placeholder:text-foreground/40 outline-none ring-brand focus:ring-2";

type ServiceFormProps = {
  /** Soft tint used for the form panel; defaults to the green accent. */
  soft?: string;
  className?: string;
};

export default function ServiceForm({ soft = "#e3f8d9", className = "" }: ServiceFormProps) {
  const theme = { "--accent-soft": soft } as CSSProperties;

  return (
    <div
      style={theme}
      className={`relative isolate overflow-hidden px-5 py-14 sm:px-16 sm:py-16 ${className}`}
    >
      <Image
        src="/images/form_bg_img.png"
        alt=""
        fill
        sizes="(min-width: 1024px) 1200px, 100vw"
        className="-z-10 object-cover"
      />
      <form className="mx-auto max-w-[540px] bg-[var(--accent-soft)]/90 px-6 py-10 sm:px-12 sm:py-12">
        <h3 className="text-center text-2xl font-normal leading-tight tracking-tight text-foreground lg:text-[28px]">
          Send us your question,
          <br />
          and we&apos;ll be happy to help!
        </h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <label className="sr-only" htmlFor="sf-name">Name</label>
          <input id="sf-name" name="name" type="text" placeholder="Name" required className={inputClass} />
          <label className="sr-only" htmlFor="sf-phone">Phone Number</label>
          <input id="sf-phone" name="phone" type="tel" placeholder="Phone Number" className={inputClass} />
          <label className="sr-only" htmlFor="sf-email">Email</label>
          <input id="sf-email" name="email" type="email" placeholder="Email" required className={`${inputClass} sm:col-span-2`} />
          <label className="sr-only" htmlFor="sf-message">Message</label>
          <textarea id="sf-message" name="message" placeholder="Message" rows={4} required className={`${inputClass} resize-none sm:col-span-2`} />
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
  );
}
