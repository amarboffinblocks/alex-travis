import type { Metadata } from "next";
import { Manrope, Phudu } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { DotGrid } from "@/components/layout/dot-grid";

const phudu = Phudu({
  subsets: ["latin"],
  variable: "--font-phudu",
  weight: ["500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Alex Travis — Product Designer",
  description:
    "Creative product designer crafting experiences that are meant to be lived.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased font-sans",
        phudu.variable,
        manrope.variable
      )}
    >
      <body className="flex min-h-full flex-col relative">{children}
      </body>
    </html>
  );
}
