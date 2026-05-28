'use client';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const values = [
  { title: 'Intellectual Rigor', desc: 'Analytical depth, academic seriousness, and intellectual precision in everything we do.' },
  { title: 'Strategic Excellence', desc: 'Every applicant receives carefully tailored, institution-specific strategy — never a template.' },
  { title: 'Integrity', desc: 'We reject fraudulent admissions practices, fabricated achievements, and unethical application manipulation.' },
  { title: 'Authenticity', desc: 'The strongest applications emerge not from artificial branding, but from strategically articulated authenticity.' },
  { title: 'Global Competitiveness', desc: 'We prepare applicants not merely to gain admission, but to compete meaningfully within elite global environments.' },
];

const vision = [
  'Scholar mentorship programs',
  'Academic workshops & fellowship incubators',
  'Policy and research initiatives',
  'Publications & intellectual communities',
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 2.5rem 6rem',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.3,
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="animate-fade-up opacity-0-init" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--crimson)', fontWeight: 500 }}>About the Collective</span>
          </div>
          <h1 className="font-display animate-fade-up opacity-0-init delay-200" style={{
            fontSize: 'clamp(3rem, 6vw, 6.5rem)',
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--off-white)',
          }}>
            A Strategic Institution<br />
            for <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Globally Ambitious</em><br />
            Minds.
          </h1>
        </div>
      </section>

      {/* IDENTITY */}
      <section className="section-padded" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid-2col" style={{ gap: '8rem', alignItems: 'start' }}>
          <AnimateOnScroll>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 300, lineHeight: 1.2, color: 'var(--off-white)', marginBottom: '2rem' }}>
              Who We Are
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
              The Axiom Collective is a premium academic positioning and postgraduate admissions strategy firm dedicated to cultivating globally competitive scholars, researchers, professionals, and future leaders from Africa and beyond.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.85', fontWeight: 300 }}>
              We exist at the intersection of elite postgraduate admissions, intellectual positioning, research identity formation, and global academic mobility.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '3rem' }}>
              <div style={{ marginBottom: '3rem' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: '1rem', fontWeight: 500 }}>Vision</p>
                <p className="font-display" style={{ fontSize: '1.2rem', fontWeight: 300, fontStyle: 'italic', color: 'var(--off-white)', lineHeight: 1.5 }}>
                  To become Africa's leading intellectual and academic positioning collective, cultivating globally competitive scholars capable of accessing and shaping the world's most influential institutions.
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: '1rem', fontWeight: 500 }}>Mission</p>
                <p className="font-display" style={{ fontSize: '1.2rem', fontWeight: 300, fontStyle: 'italic', color: 'var(--off-white)', lineHeight: 1.5 }}>
                  To strategically position exceptional applicants for admission into the world's leading universities, fellowships, and research institutions through rigorous mentorship, narrative architecture, and elite admissions strategy.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-padded-sm" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimateOnScroll>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--off-white)', marginBottom: '5rem' }}>Our Philosophy</h2>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            <AnimateOnScroll>
              <div style={{ padding: '2.5rem', border: '1px solid var(--border)', background: 'var(--bg-card)', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-1px', left: '2.5rem', display: 'block', width: '40px', height: '2px', background: 'var(--crimson)' }} />
                <p className="font-display" style={{ fontSize: '1.6rem', fontWeight: 300, color: 'var(--off-white)', marginBottom: '1rem', lineHeight: 1.2 }}>The Admissions<br />Fallacy</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: '1.8', fontWeight: 300 }}>
                  Most talented applicants believe that strong grades and credentials alone will secure them elite admissions. This is the central fallacy The Axiom Collective was built to correct.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <div style={{ padding: '2.5rem', border: '1px solid var(--border)', background: 'var(--bg-card)', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-1px', left: '2.5rem', display: 'block', width: '40px', height: '2px', background: 'var(--crimson)' }} />
                <p className="font-display" style={{ fontSize: '1.6rem', fontWeight: 300, color: 'var(--off-white)', marginBottom: '1rem', lineHeight: 1.2 }}>What Institutions<br />Actually Admit</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: '1.8', fontWeight: 300 }}>
                  Elite institutions admit narratives, trajectories, and intellectual identities. They seek demonstrated potential and a compelling sense of where you are going — and why.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <div style={{ padding: '2.5rem', border: '1px solid var(--border)', background: 'var(--bg-card)', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-1px', left: '2.5rem', display: 'block', width: '40px', height: '2px', background: 'var(--crimson)' }} />
                <p className="font-display" style={{ fontSize: '1.6rem', fontWeight: 300, color: 'var(--off-white)', marginBottom: '1rem', lineHeight: 1.2 }}>The Axiom<br />Difference</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: '1.8', fontWeight: 300 }}>
                  We don't process applications. We architect intellectual identities. We align your story with the language, culture, and expectations of the world's most selective institutions.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padded" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <AnimateOnScroll>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--off-white)', marginBottom: '5rem' }}>Institutional Values</h2>
        </AnimateOnScroll>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {values.map((v, i) => (
            <AnimateOnScroll key={v.title} delay={i * 80}>
              <div className="grid-values" style={{
                gap: '3rem',
                padding: '2.5rem 0',
                borderBottom: '1px solid var(--border)',
                alignItems: 'start',
              }}>
                <p className="font-display" style={{ fontSize: '1.4rem', fontWeight: 400, color: 'var(--off-white)' }}>{v.title}</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: '1.75', fontWeight: 300 }}>{v.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* LONG-TERM VISION */}
      <section className="section-padded" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="grid-2col" style={{ maxWidth: '1200px', margin: '0 auto', gap: '6rem', alignItems: 'center' }}>
          <AnimateOnScroll>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--off-white)', marginBottom: '1.5rem' }}>
              Beyond Admissions.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>An Intellectual Ecosystem.</em>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: '1.85', fontWeight: 300 }}>
              The long-term ambition is to establish The Axiom Collective as a globally respected African institution for academic strategy, intellectual development, and scholar cultivation — far beyond the consultancy model.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div>
              {vision.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ display: 'block', width: '8px', height: '8px', background: 'var(--crimson)', borderRadius: '50%', flexShrink: 0 }} />
                  <p style={{ color: 'var(--off-white)', fontSize: '1.05rem', fontWeight: 300, fontFamily: 'Cormorant Garamond, serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padded" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
        <AnimateOnScroll>
          <span style={{ display: 'block', width: '1px', height: '50px', background: 'var(--crimson)', margin: '0 auto 3rem' }} />
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: 'var(--off-white)', marginBottom: '1.5rem' }}>
            Ready to Be Positioned?
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '3rem', maxWidth: '480px', margin: '0 auto 3rem' }}>
            Book a consultation and let us begin architecting your path to the world's most selective institutions.
          </p>
          <Link href="/contact" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.78rem',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'var(--off-white)',
            padding: '16px 42px',
            background: 'var(--crimson)',
            border: '1px solid var(--crimson)',
            display: 'inline-block',
            transition: 'all 0.25s ease',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--crimson)'; }}
          >
            Book a Consultation
          </Link>
        </AnimateOnScroll>
      </section>
    </>
  );
}
