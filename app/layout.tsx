import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sidra Tul Muntaha | Web Developer",
    template: "%s | Sidra Tul Muntaha",
  },

  description:
    "Personal portfolio of Sidra Tul Muntaha, a web developer showcasing web projects, skills, and experience.",

  openGraph: {
    title: "Sidra Tul Muntaha | Web Developer",

    description:
      "Personal portfolio of Sidra Tul Muntaha, a web developer showcasing web projects, skills, and experience.",

    siteName: "Sidra Tul Muntaha",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sidra Tul Muntaha | Web Developer",
      },
    ],

    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}