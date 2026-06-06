import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Axiom Method | Our Framework',
  description: 'Discover The Axiom Method — our six-phase framework for developing intellectually positioned, strategically compelling postgraduate applicants. Beyond admissions. Towards purposeful educational trajectories.',
  openGraph: {
    title: 'The Axiom Method | Our Framework',
    description: 'Our six-phase framework for developing intellectually positioned, strategically compelling postgraduate applicants. Beyond admissions. Towards purposeful educational trajectories.',
    url: 'https://theaxiomcollective.org/method',
  },
  twitter: {
    title: 'The Axiom Method | Our Framework',
    description: 'Our six-phase framework for developing intellectually positioned, strategically compelling postgraduate applicants.',
  },
};

export default function MethodLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
