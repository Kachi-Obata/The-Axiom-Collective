'use client';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const services = [
  {
    number: '01',
    title: 'Elite Postgraduate Admissions Strategy',
    tagline: 'From profile to placement — with precision.',
    description: 'Comprehensive strategic guidance for applicants pursuing master\'s degrees, PhDs, MPP/MPA programs, professional postgraduate degrees, and elite global fellowships.',
    details: [
      'Institutional matching and admissions mapping',
      'Strategic planning and profile evaluation',
      'Application timeline architecture',
      'School-specific positioning strategy',
      'Competitive landscape analysis',
    ],
    ideal: 'Graduates targeting top-20 global programs, competitive PhD placements, or Fellowships/Grants.',
  },
  {
    number: '02',
    title: 'Research Identity Development',
    tagline: 'Build an intellectual identity that commands attention.',
    description: 'For research-intensive applications, we help you develop a coherent and compelling intellectual identity — refining your research interests, building thematic coherence, and establishing a clear academic trajectory.',
    details: [
      'Research interest refinement and articulation',
      'Thematic positioning across disciplines',
      'Academic trajectory development',
      'Intellectual coherence building',
      'Research proposal framing',
    ],
    ideal: 'PhD applicants, emerging researchers, and academics seeking fellowship or research-track admissions.',
  },
  {
    number: '03',
    title: 'Statement of Purpose & Narrative Architecture',
    tagline: "We don't edit essays. We architect trajectories.",
    description: 'The Axiom Collective specializes in constructing sophisticated, institutionally aligned application narratives. We develop personal statements, statements of purpose, and academic narratives that communicate intellectual depth and professional direction.',
    details: [
      'Personal statement and SOP development',
      'Academic narrative positioning',
      'Institution-specific tone calibration',
      'Strategic storytelling and trajectory framing',
      'Iterative refinement and polish',
    ],
    ideal: 'Any applicant preparing written materials for elite postgraduate programs.',
  },
  // {
  //   number: '04',
  //   title: 'Scholarship & Fellowship Positioning',
  //   tagline: 'Funded ambition, strategically pursued.',
  //   description: 'Strategic support for applicants targeting fully funded postgraduate programs, global fellowships, leadership scholarships, and competitive research grants.',
  //   details: [
  //     'Fellowship landscape mapping',
  //     'Funding opportunity identification',
  //     'Scholarship-specific narrative development',
  //     'Application strategy for competitive funding',
  //     'Post-acceptance fellowship positioning',
  //   ],
  //   ideal: 'Applicants targeting Rhodes, Chevening, Fulbright, Gates Cambridge, Schwarzman, and similar competitive awards.',
  // },
  {
    number: '04',
    title: 'Interview Preparation & Academic Communication',
    tagline: 'Intellectual confidence. Institutional fluency.',
    description: 'Preparation for admissions interviews, scholarship panels, and fellowship assessments — focused on intellectual confidence, clarity of thought, and demonstrated institutional fit.',
    details: [
      'Mock admissions and fellowship interviews',
      'Academic communication coaching',
      'Intellectual confidence development',
      'Institutional fit articulation',
      'Panel and panel-response strategy',
    ],
    ideal: 'Applicants shortlisted for interview at Oxford, LSE, Chevening, Gates Cambridge, and similar institutions.',
  },
];

export default function ServicesPage() {
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
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.3,
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="animate-fade-up opacity-0-init" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--crimson)', fontWeight: 500 }}>Our Services</span>
          </div>
          <h1 className="font-display animate-fade-up opacity-0-init delay-200" style={{
            fontSize: 'clamp(3rem, 6vw, 6.5rem)',
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--off-white)',
          }}>
            Four Disciplines.<br />
            One <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Strategic Purpose.</em>
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="grid-2col section-padded-sm" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', maxWidth: '1200px', margin: '0 auto', gap: '6rem', alignItems: 'center' }}>
        <AnimateOnScroll>
          <p className="font-display" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.4, color: 'var(--off-white)' }}>
            "We approach admissions not as paperwork, but as narrative construction, institutional alignment, and strategic identity formation."
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300 }}>
            Every service the Axiom Collective offers is built around a single conviction: that the gap between talented candidates and elite institutions is almost always a positioning gap, not a merit gap. Our five disciplines address every dimension of that gap.
          </p>
        </AnimateOnScroll>
      </section>

      {/* SERVICES */}
      <section style={{ borderTop: '1px solid var(--border)' }}>
        {services.map((s, i) => (
          <AnimateOnScroll key={s.number}>
            <div style={{
              padding: '6rem 2.5rem',
              borderBottom: '1px solid var(--border)',
              background: i % 2 === 1 ? 'var(--bg-secondary)' : 'var(--bg)',
            }}>
              <div className="grid-asymm" style={{ maxWidth: '1200px', margin: '0 auto', gap: '6rem', alignItems: 'start' }}>
                {/* Left */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.9rem', color: 'var(--crimson)', letterSpacing: '0.08em' }}>{s.number}</span>
                    <span style={{ display: 'block', flex: 1, height: '1px', background: 'var(--border)' }} />
                  </div>
                  <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--off-white)', marginBottom: '1rem' }}>
                    {s.title}
                  </h2>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--crimson)', marginBottom: '2rem' }}>
                    {s.tagline}
                  </p>
                  <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300 }}>
                    {s.description}
                  </p>
                </div>

                {/* Right */}
                <div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem', fontWeight: 500 }}>
                    What's Included
                  </p>
                  <div style={{ marginBottom: '3rem' }}>
                    {s.details.map((d, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '0.85rem 0', borderBottom: '1px solid var(--border)' }}>
                        <span style={{ display: 'block', width: '6px', height: '6px', background: 'var(--crimson)', borderRadius: '50%', marginTop: '6px', flexShrink: 0 }} />
                        <p style={{ color: 'var(--off-white)', fontSize: '0.88rem', fontWeight: 300, lineHeight: '1.6' }}>{d}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '1.5rem', border: '1px solid var(--crimson-dim)', background: 'var(--crimson-dim)' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: '0.5rem', fontWeight: 500 }}>Ideal For</p>
                    <p style={{ color: 'var(--off-white)', fontSize: '0.85rem', fontWeight: 300, lineHeight: '1.65' }}>{s.ideal}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </section>

      {/* CTA */}
      <section className="section-padded" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
        <AnimateOnScroll>
          <span style={{ display: 'block', width: '1px', height: '50px', background: 'var(--crimson)', margin: '0 auto 3rem' }} />
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: 'var(--off-white)', marginBottom: '1.5rem' }}>
            Not Sure Where to Start?
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
            Book a consultation. We will evaluate your profile and recommend the precise combination of services to position you for your target institutions.
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
    </>
  );
}
