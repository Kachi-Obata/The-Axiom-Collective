import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// viewport-fit=cover extends the page coordinate system to the full screen,
// so position:fixed top:0 anchors the nav at the absolute top — covering the
// area where Safari's address bar sits. Without this, the nav sits below the
// address bar and content bleeds into that space when the bar collapses.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: "The Axiom Collective | Strategy. Positioning. Possibility.",
  description: "Africa's leading academic positioning and postgraduate admissions strategy firm. We don't merely craft applications — we strategically position people.",
  keywords: "postgraduate admissions, academic positioning, Oxford, Harvard, PhD admissions, Africa, scholarship strategy",
  metadataBase: new URL("https://theaxiomcollective.org"),
  openGraph: {
    title: "The Axiom Collective | Strategy. Positioning. Possibility.",
    description: "Africa's leading academic positioning and postgraduate admissions strategy firm. We don't merely craft applications — we strategically position people.",
    url: "https://theaxiomcollective.org",
    siteName: "The Axiom Collective",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Axiom Collective — Strategy. Positioning. Possibility.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Axiom Collective | Strategy. Positioning. Possibility.",
    description: "Africa's leading academic positioning and postgraduate admissions strategy firm.",
    images: ["/og-image.png"],
  },
  // Favicon: handled via file-based metadata (app/icon.png + app/apple-icon.png).
  // Next.js auto-generates <link rel="icon"> and <link rel="apple-touch-icon"> from those files.
  // Additional sizes live in public/ and are referenced in public/site.webmanifest.
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body>
        <div className="safari-top-fill" aria-hidden="true" />
        <Navbar />
        <main style={{ paddingTop: 'calc(72px + env(safe-area-inset-top, 0px) + var(--vv-top, 0px))' }}>{children}</main>
        <Footer />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}</Script>
          </>
        )}
      </body>
    </html>
  );
}
