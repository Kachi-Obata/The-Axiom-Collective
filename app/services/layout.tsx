import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | The Axiom Collective',
  description: 'Four disciplines. One strategic purpose. Admissions Strategy, Research Identity Development, Narrative Architecture, and Interview Preparation for elite postgraduate and fellowship applications.',
  openGraph: {
    title: 'Our Services | The Axiom Collective',
    description: 'Four disciplines. One strategic purpose. Admissions Strategy, Research Identity Development, Narrative Architecture, and Interview Preparation for elite postgraduate and fellowship applications.',
    url: 'https://theaxiomcollective.org/services',
  },
  twitter: {
    title: 'Our Services | The Axiom Collective',
    description: 'Four disciplines. One strategic purpose. Admissions Strategy, Research Identity Development, Narrative Architecture, and Interview Preparation.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
