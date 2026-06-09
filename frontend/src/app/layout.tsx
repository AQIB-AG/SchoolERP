import type { Metadata } from "next";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/constants/site";
import "./globals.css";

import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | Modern School Management Platform`,
  description: SITE_DESCRIPTION,
  keywords: [
    "school management",
    "education software",
    "student management",
    "attendance tracking",
    "fee management",
    "parent communication",
    "SaaS",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} | Modern School Management Platform`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Modern School Management Platform`,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { ClientLayoutWrapper } from "@/components/layout/ClientLayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-text antialiased">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
