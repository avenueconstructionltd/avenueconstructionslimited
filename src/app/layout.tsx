import type { Metadata } from "next";
import {
  Instrument_Serif,
  Plus_Jakarta_Sans,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/shared/smooth-scroll-provider";
import { FloatingContact } from "@/components/shared/floating-contact";
import {
  SITE_URL,
  SITE_NAME,
  SITE_HANDLE,
  SITE_LOCALE,
  SITE_TITLE_DEFAULT,
  SITE_TITLE_TEMPLATE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  AUTHOR_NAME,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  GOOGLE_SITE_VERIFICATION,
} from "@/constants/seo";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE_DEFAULT,
    template: SITE_TITLE_TEMPLATE,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE_PATH,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: `${SITE_NAME} - Premier Real Estate Developer in Dhaka`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE_HANDLE,
    creator: SITE_HANDLE,
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: [
      { url: "/images/site_logo.svg", type: "image/svg+xml" },
      { url: "/images/site_logo.png", type: "image/png" },
    ],
    shortcut: "/images/site_logo.png",
    apple: "/images/site_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-canvas text-text-primary"
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          <div
            className="flex flex-col flex-1 relative min-h-dvh"
            suppressHydrationWarning
          >
            {children}
          </div>
        </SmoothScrollProvider>
        <FloatingContact />
      </body>
    </html>
  );
}
