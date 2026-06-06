import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Consultation | The Axiom Collective',
  description: 'Begin your strategic positioning. Share your profile, goals, and target institutions — our team will review your background and reach out within 2–3 business days.',
  openGraph: {
    title: 'Book a Consultation | The Axiom Collective',
    description: 'Begin your strategic positioning. Share your profile, goals, and target institutions — our team will review your background and reach out within 2–3 business days.',
    url: 'https://theaxiomcollective.org/contact',
  },
  twitter: {
    title: 'Book a Consultation | The Axiom Collective',
    description: 'Begin your strategic positioning. Share your profile, goals, and target institutions — our team will reach out within 2–3 business days.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
