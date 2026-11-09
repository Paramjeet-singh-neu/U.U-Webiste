import type { Metadata, Viewport } from "next";
import { Newsreader, Schibsted_Grotesk } from "next/font/google";
import { siteMeta } from "@/content/site";
import "./globals.css";

const presentYou = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-present",
  display: "swap",
});

const futureYou = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-future",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  authors: [{ name: siteMeta.author }],
  metadataBase: new URL(siteMeta.url),
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: siteMeta.brandName,
    type: "website",
    images: [
      {
        url: siteMeta.socialImage,
        width: 1200,
        height: 630,
        alt: "u.u — text your future self",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: [siteMeta.socialImage],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff8f8" },
    { media: "(prefers-color-scheme: dark)", color: "#2d1b24" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${presentYou.variable} ${futureYou.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-present)]">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
