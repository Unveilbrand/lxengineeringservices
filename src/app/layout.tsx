import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LX Engineering Services",
  description:
    "We design and build amazing apartments — innovative designs and impeccable craftsmanship for property owners.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
