'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Lightbox from '@/components/Lightbox';

// Add filenames here as letters become available
const AVAILABLE_LETTERS = new Set([
  '/results/letters/gayus-harvard.jpg',
  '/results/letters/gayus-brown.jpg',
  '/results/letters/gayus-columbia.jpg',
  '/results/letters/gayus-jhu.jpg',
  '/results/letters/gayus-yale.jpg',
  '/results/letters/gayus-emory.jpg',
  '/results/letters/halima-harvard.jpg',
  '/results/letters/halima-jhu.jpg',
  '/results/letters/halima-lse.jpg',
  '/results/letters/emmanuel-ucl.jpg',
]);

const EYEBROW: React.CSSProperties = {
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '0.68rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--crimson)',
  fontWeight: 500,
  marginBottom: '0.75rem',
};

const TAG: React.CSSProperties = {
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '0.62rem',
  fontWeight: 500,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--crimson)',
  background: 'rgba(192,39,45,0.08)',
  padding: '2px 7px',
  marginLeft: '0.5rem',
  display: 'inline',
};

interface Admission {
  university: string;
  programme: string;
  tag?: string;
  letter: string;
}

function AdmissionRow({
  admission,
  onLetterClick,
}: {
  admission: Admission;
  onLetterClick: (src: string, alt: string) => void;
}) {
  return (
    <div style={{
      padding: '0.85rem 0',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.25rem' }}>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', color: 'var(--off-white)', fontWeight: 400 }}>
          {admission.university}
        </span>
        {admission.tag && <span style={TAG}>{admission.tag}</span>}
      </div>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', fontWeight: 300, color: 'var(--muted)', marginBottom: '0.4rem', lineHeight: 1.5 }}>
        {admission.programme}
      </p>
      {AVAILABLE_LETTERS.has(admission.letter) && (
        <button
          onClick={() => onLetterClick(admission.letter, `${admission.university} admission letter`)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.68rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--crimson)',
            padding: 0,
          }}
        >
          View Letter →
        </button>
      )}
    </div>
  );
}

const gayusAdmissions: Admission[] = [
  {
    university: 'Harvard University',
    programme: 'Full-Time Master of Public Health (45-credit), Health Management · T.H. Chan School of Public Health',
    letter: '/results/letters/gayus-harvard.jpg',
  },
  {
    university: 'Brown University',
    programme: 'MPH/MPA Dual Degree · School of Public Health',
    tag: 'With Financial Support',
    letter: '/results/letters/gayus-brown.jpg',
  },
  {
    university: 'Columbia University',
    programme: 'Accelerated MPH, Health Policy and Management · Mailman School of Public Health',
    letter: '/results/letters/gayus-columbia.jpg',
  },
  {
    university: 'Johns Hopkins University',
    programme: 'Master of Public Health · Bloomberg School of Public Health',
    letter: '/results/letters/gayus-jhu.jpg',
  },
  {
    university: 'Yale University',
    programme: 'Advanced Professional Master of Public Health (AP MPH) · School of Public Health',
    letter: '/results/letters/gayus-yale.jpg',
  },
  {
    university: 'Emory University',
    programme: 'MPH, Health Policy and Management · Rollins School of Public Health',
    letter: '/results/letters/gayus-emory.jpg',
  },
];

const halimaAdmissions: Admission[] = [
  {
    university: 'Harvard University',
    programme: 'Full-Time Master of Public Health (45-credit), Health Management · T.H. Chan School of Public Health',
    letter: '/results/letters/halima-harvard.jpg',
  },
  {
    university: 'Johns Hopkins University',
    programme: 'MPH Full Time · Bloomberg School of Public Health',
    letter: '/results/letters/halima-jhu.jpg',
  },
  {
    university: 'London School of Economics & Political Science / London School of Hygiene & Tropical Medicine',
    programme: 'MSc Health Policy, Planning & Financing',
    tag: 'Joint Programme',
    letter: '/results/letters/halima-lse.jpg',
  },
];

const emmanuelAdmissions: Admission[] = [
  {
    university: 'University College London',
    programme: 'MSc Digital Health and Entrepreneurship · Global Business School for Health',
    tag: 'Unconditional Offer',
    letter: '/results/letters/emmanuel-ucl.jpg',
  },
];

export default function ResultsPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const openLetter = (src: string, alt: string) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  return (
    <>
      {/* HERO */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '5rem 2.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.3,
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="animate-fade-up opacity-0-init" style={{ marginBottom: '2rem' }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--crimson)', fontWeight: 500 }}>Our Results</span>
          </div>
          <h1 className="font-display animate-fade-up opacity-0-init delay-200" style={{
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--off-white)',
            marginBottom: '1.5rem',
          }}>
            Documented Outcomes.<br />
            <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Real Institutions.</em>
          </h1>
          <p className="animate-fade-up opacity-0-init delay-400" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.95rem',
            fontWeight: 300,
            color: 'var(--muted)',
            maxWidth: '520px',
            lineHeight: 1.75,
          }}>
            Every result on this page is documented. Every admission is real. What follows is an honest record of what strategic positioning makes possible.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '3rem 2.5rem',
      }}>
        <div className="results-stats" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { number: '3', label: 'Scholars Positioned' },
            { number: '10', label: 'Elite Admissions' },
            { number: '8', label: 'Institutions' },
            { number: '100%', label: 'Acceptance Rate' },
          ].map((stat, i, arr) => (
            <div key={stat.label} style={{
              textAlign: 'center',
              padding: '1rem 2rem',
              borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', fontWeight: 300, color: 'var(--crimson)', lineHeight: 1, marginBottom: '0.6rem' }}>
                {stat.number}
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SCHOLAR 01 — E. GAYUS */}
      <section className="section-padded" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="grid-asymm" style={{ maxWidth: '1200px', margin: '0 auto', gap: '6rem', alignItems: 'start' }}>

          {/* Left — identity + photo + admissions */}
          <AnimateOnScroll>
            <p style={EYEBROW}>Scholar 01</p>
            <h2 className="font-display" style={{ fontSize: '2.2rem', fontWeight: 300, color: 'var(--off-white)', marginBottom: '0.5rem', lineHeight: 1.1 }}>
              E. Gayus
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', marginBottom: '1.25rem' }}>
              MPH · Harvard T.H. Chan School of Public Health, Class of 2026
            </p>
            <span style={{ display: 'block', width: '40px', height: '1px', background: 'var(--crimson)', marginBottom: '1.75rem' }} />

            <div style={{ position: 'relative', width: '100%', aspectRatio: '3 / 4', marginBottom: '2rem' }}>
              <Image
                src="/results/gayus.jpg"
                alt="E. Gayus"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>
              Admitted To
            </p>
            {gayusAdmissions.map(a => (
              <AdmissionRow key={a.university} admission={a} onLetterClick={openLetter} />
            ))}
          </AnimateOnScroll>

          {/* Right — testimonial */}
          <AnimateOnScroll delay={200}>
            <p style={EYEBROW}>In Their Words</p>
            <blockquote style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem',
              fontWeight: 300,
              lineHeight: '1.85',
              color: 'var(--muted)',
              marginBottom: '2rem',
            }}>
              "Working with Marius was one of the most valuable decisions I made during my graduate school application journey. What stood out was not simply his understanding of the admissions process, but his ability to help me see my own experiences in a different light. Through our conversations, I gained clarity about my academic interests and the unique perspective I could bring to public health. Rather than telling me what admissions committees wanted to hear, he challenged me to think deeply about my motivations and communicate them authentically. That process gave me far greater confidence in my application and in myself. I was subsequently admitted to Harvard University's Master of Public Health programme, and I remain grateful for the guidance and strategic insight he provided throughout the journey."
            </blockquote>
            <p className="font-display" style={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--off-white)' }}>
              — E. Gayus, Harvard MPH '26
            </p>
          </AnimateOnScroll>

        </div>
      </section>

      {/* SCHOLAR 02 — H. SHOBULE */}
      <section className="section-padded" style={{
        paddingLeft: '2.5rem',
        paddingRight: '2.5rem',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6rem', alignItems: 'start' }}
          className="results-scholar-mirror">

          {/* Left — testimonial */}
          <AnimateOnScroll>
            <p style={EYEBROW}>In Their Words</p>
            <blockquote style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem',
              fontWeight: 300,
              lineHeight: '1.85',
              color: 'var(--muted)',
              marginBottom: '2rem',
            }}>
              "Before working with Marius, I knew where I wanted to go, but I was not entirely sure how to present my experiences and ambitions in a way that reflected who I was. His approach was thoughtful and highly personalised. He encouraged me to think beyond the application itself and focus on the broader trajectory I wanted to build for my academic and professional future. Through that process, I developed a much clearer sense of purpose and confidence. What I valued most was his genuine investment in my success and his willingness to challenge me to think more critically about my goals. Receiving offers from both LSE and LSHTM was a proud milestone, and I credit much of my growth during that period to the mentorship and strategic guidance I received."
            </blockquote>
            <p className="font-display" style={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--off-white)' }}>
              — H. Shobule, Harvard MPH
            </p>
          </AnimateOnScroll>

          {/* Right — identity + admissions */}
          <AnimateOnScroll delay={200}>
            <p style={EYEBROW}>Scholar 02</p>
            <h2 className="font-display" style={{ fontSize: '2.2rem', fontWeight: 300, color: 'var(--off-white)', marginBottom: '0.5rem', lineHeight: 1.1 }}>
              H. Shobule
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', marginBottom: '1.25rem' }}>
              MPH · Harvard T.H. Chan School of Public Health
            </p>
            <span style={{ display: 'block', width: '40px', height: '1px', background: 'var(--crimson)', marginBottom: '1.75rem' }} />

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>
              Admitted To
            </p>
            {halimaAdmissions.map(a => (
              <AdmissionRow key={a.university} admission={a} onLetterClick={openLetter} />
            ))}
          </AnimateOnScroll>

        </div>
      </section>

      {/* SCHOLAR 03 — S. MERIBOLE */}
      <section className="section-padded" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="grid-asymm" style={{ maxWidth: '1200px', margin: '0 auto', gap: '6rem', alignItems: 'start' }}>

          {/* Left — identity + photo + admissions */}
          <AnimateOnScroll>
            <p style={EYEBROW}>Scholar 03</p>
            <h2 className="font-display" style={{ fontSize: '2.2rem', fontWeight: 300, color: 'var(--off-white)', marginBottom: '0.5rem', lineHeight: 1.1 }}>
              S. Meribole
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', marginBottom: '1.25rem' }}>
              MSc Digital Health and Entrepreneurship · UCL
            </p>
            <span style={{ display: 'block', width: '40px', height: '1px', background: 'var(--crimson)', marginBottom: '1.75rem' }} />

            <div style={{ position: 'relative', width: '100%', height: '360px', marginBottom: '2rem' }}>
              <Image
                src="/results/emmanuel.jpg"
                alt="S. Meribole"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>
              Admitted To
            </p>
            {emmanuelAdmissions.map(a => (
              <AdmissionRow key={a.university} admission={a} onLetterClick={openLetter} />
            ))}
          </AnimateOnScroll>

          {/* Right — testimonial */}
          <AnimateOnScroll delay={200}>
            <p style={EYEBROW}>In Their Words</p>
            <blockquote style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem',
              fontWeight: 300,
              lineHeight: '1.85',
              color: 'var(--muted)',
              marginBottom: '2rem',
            }}>
              "Applying to a world-class university can feel overwhelming, particularly when there is so much conflicting advice about what makes a successful application. Marius helped cut through that noise. He took the time to understand my background and aspirations, then worked with me to develop a clear and coherent application strategy. What I appreciated most was that he never tried to impose a story on me. Instead, he helped me discover and articulate my own. His guidance gave me confidence at every stage of the process, from refining my academic goals to preparing my application materials. Receiving an offer from UCL was an incredible moment, and I am deeply thankful for the support and mentorship that helped make it possible."
            </blockquote>
            <p className="font-display" style={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--off-white)' }}>
              — S. Meribole, UCL MSc
            </p>
          </AnimateOnScroll>

        </div>
      </section>

      {/* CTA */}
      <section className="section-padded" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
        <AnimateOnScroll>
          <span style={{ display: 'block', width: '1px', height: '50px', background: 'var(--crimson)', margin: '0 auto 3rem' }} />
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: 'var(--off-white)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            These Results Begin with<br />
            <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>a Conversation.</em>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 300, maxWidth: '480px', margin: '0 auto 3rem' }}>
            Book a consultation and let us begin building your admissions strategy.
          </p>
          <Link href="/contact" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.78rem',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: '#FFFFFF',
            padding: '16px 42px',
            background: 'var(--crimson)',
            border: '1px solid var(--crimson)',
            display: 'inline-block',
            transition: 'all 0.25s ease',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--off-white)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--crimson)'; (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; }}
          >
            Book a Consultation
          </Link>
        </AnimateOnScroll>
      </section>

      {/* Lightbox */}
      <Lightbox
        src={lightbox?.src ?? ''}
        alt={lightbox?.alt ?? ''}
        isOpen={lightbox !== null}
        onClose={closeLightbox}
      />

      <style>{`
        @media (max-width: 768px) {
          .results-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .results-stats > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border);
            padding: 1rem !important;
          }
          .results-stats > div:nth-child(odd) {
            border-right: 1px solid var(--border) !important;
          }
          .results-stats > div:nth-last-child(-n+2) {
            border-bottom: none;
          }
          .results-scholar-mirror {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
