import Link from "next/link";

const positions = Array.from({ length: 6 }, () => ({
  title: "Carpenters",
  date: "Jan 11, 2025",
  type: "Full Time",
  pay: "\u20a625,000 - \u20a695,000 per month",
}));

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M2.5 1.5h7A1.5 1.5 0 0 1 11 3v6.5A1.5 1.5 0 0 1 9.5 11h-7A1.5 1.5 0 0 1 1 9.5V3a1.5 1.5 0 0 1 1.5-1.5ZM10 4H2v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4ZM3.5 0h1v2h-1V0Zm4 0h1v2h-1V0Z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      aria-hidden="true"
      className={className}
    >
      <circle cx="6" cy="6" r="5" />
      <path d="M6 3.5V6l1.8 1" strokeLinecap="round" />
    </svg>
  );
}

function PayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M1.5 4.5h9v6h-9z" />
      <path d="M4.5 4.5V3A1.5 1.5 0 0 1 6 1.5h0A1.5 1.5 0 0 1 7.5 3v1.5" />
      <path d="M6 7.5v0" strokeWidth={1.6} />
    </svg>
  );
}

export default function Careers() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6">
        <span className="inline-block bg-brand px-3.5 py-2 text-[13px] font-medium text-black">
          Careers- Open Positions
        </span>
        <h2 className="mt-8 max-w-[1000px] text-center text-3xl font-normal leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-[36px]">
          Be part of a forward-thinking company. Our roles are more than just
          jobs&mdash;they&apos;re a chance to make an impact
        </h2>
      </div>

      <div className="mx-auto mt-14 w-full max-w-[1200px] px-6">
        <ul className="grid border-b border-foreground lg:grid-cols-2">
          {positions.map(({ title, date, type, pay }, i) => (
            <li
              key={i}
              className="flex items-center justify-between gap-6 border-t border-foreground px-2 py-9 lg:even:border-l lg:even:pl-10 lg:odd:pr-10"
            >
              <div>
                <h3 className="text-[16px] font-semibold text-foreground">
                  {title}
                </h3>
                <ul className="mt-3 space-y-1.5 text-[12px] text-foreground">
                  <li className="flex items-center gap-2">
                    <CalendarIcon className="h-3 w-3 shrink-0" />
                    {date}
                  </li>
                  <li className="flex items-center gap-2">
                    <ClockIcon className="h-3 w-3 shrink-0" />
                    {type}
                  </li>
                  <li className="flex items-center gap-2">
                    <PayIcon className="h-3 w-3 shrink-0" />
                    {pay}
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="cta-brackets shrink-0 text-[12px] text-foreground transition-colors hover:text-white focus-visible:text-white"
              >
                Let&apos;s Talk Now
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-14 max-w-[950px] px-6 text-center text-[20px] leading-relaxed text-foreground">
        If you don&apos;t see an open position that fits, we&apos;d still love to
        hear from you! Drop us a note about how we could
        collaborate&mdash;we&apos;re always excited to connect with talented
        people and grow together.
      </p>
    </section>
  );
}
