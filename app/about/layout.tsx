import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | The Axiom Collective',
  description: 'Learn about The Axiom Collective — Africa\'s leading academic positioning firm dedicated to cultivating globally competitive scholars and helping ambitious applicants gain admission to the world\'s top universities.',
  openGraph: {
    title: 'About Us | The Axiom Collective',
    description: 'Africa\'s leading academic positioning firm. We cultivate globally competitive scholars and help ambitious applicants gain admission to the world\'s top universities.',
    url: 'https://theaxiomcollective.org/about',
  },
  twitter: {
    title: 'About Us | The Axiom Collective',
    description: 'Africa\'s leading academic positioning firm. We cultivate globally competitive scholars and help ambitious applicants gain admission to the world\'s top universities.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
