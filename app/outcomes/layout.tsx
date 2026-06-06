import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scholar Outcomes | The Axiom Collective',
  description: 'Real scholars. Real institutions. Documented admissions to Harvard, Columbia, Yale, Brown, Johns Hopkins, UCL, LSE, and more. Every result on this page is verified.',
  openGraph: {
    title: 'Scholar Outcomes | The Axiom Collective',
    description: 'Real scholars. Real institutions. Documented admissions to Harvard, Columbia, Yale, Brown, Johns Hopkins, UCL, LSE, and more. Every result is verified.',
    url: 'https://theaxiomcollective.org/outcomes',
  },
  twitter: {
    title: 'Scholar Outcomes | The Axiom Collective',
    description: 'Real scholars. Real institutions. Documented admissions to Harvard, Columbia, Yale, Brown, Johns Hopkins, UCL, LSE, and more.',
  },
};

export default function OutcomesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
