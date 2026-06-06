import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

// viewport-fit=cover extends the page coordinate system to the full screen
// so the fixed nav can paint the notch/Dynamic Island area with the site
// background colour. env(safe-area-inset-top) inside the nav then pushes
// logo and links below the notch so they stay legible.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#FFFFFF',
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
        url: "/brand/og-image.png",
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
    images: ["/brand/og-image.png"],
  },
  // Favicon: handled via file-based metadata (app/icon.png + app/apple-icon.png).
  // Next.js auto-generates <link rel="icon"> and <link rel="apple-touch-icon"> from those files.
  // Additional sizes live in public/ and are referenced in public/site.webmanifest.
  manifest: "/site.webmanifest",
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://theaxiomcollective.org/#organization',
      name: 'The Axiom Collective',
      url: 'https://theaxiomcollective.org',
      email: 'ask@theaxiomcollective.org',
      description: "Africa's leading academic positioning and postgraduate admissions strategy firm dedicated to cultivating globally competitive scholars, researchers, and future leaders.",
      slogan: 'Strategy. Positioning. Possibility.',
      areaServed: 'Worldwide',
      knowsAbout: [
        'Postgraduate Admissions Strategy',
        'Research Identity Development',
        'Narrative Architecture',
        'Academic Positioning',
        'Fellowship Applications',
        'PhD Admissions',
      ],
      founder: {
        '@type': 'Person',
        name: 'Dr. Marius Isikalu',
        jobTitle: 'Founder',
        description: 'Researcher, policy strategist, and founder of The Axiom Collective.',
        knowsAbout: ['Academic Positioning', 'Postgraduate Admissions', 'Education Policy'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://theaxiomcollective.org/#website',
      url: 'https://theaxiomcollective.org',
      name: 'The Axiom Collective',
      publisher: { '@id': 'https://theaxiomcollective.org/#organization' },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main><PageTransition>{children}</PageTransition></main>
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
