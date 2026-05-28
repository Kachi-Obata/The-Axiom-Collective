'use client';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const services = [
  {
    number: '01',
    title: 'Admissions Strategy',
    description: 'Comprehensive institutional mapping, profile evaluation, and strategic planning for master\'s, PhD, MPP/MPA, and elite fellowship applications.',
  },
  {
    number: '02',
    title: 'Research Identity Development',
    description: 'We help you develop a coherent, compelling intellectual identity — refining research interests, building thematic positioning, and establishing academic trajectory.',
  },
  {
    number: '03',
    title: 'Narrative Architecture',
    description: 'Beyond editing essays — we construct sophisticated, institutionally aligned application narratives that communicate intellectual and professional trajectory.',
  },
  {
    number: '04',
    title: 'Scholarship & Fellowship Positioning',
    description: 'Strategic support for fully funded programs, global fellowships, leadership scholarships, and competitive research grants.',
  },
  {
    number: '05',
    title: 'Interview Preparation',
    description: 'Preparation for admissions and fellowship panels focused on intellectual confidence, clarity, and demonstrated institutional fit.',
  },
];

const institutions = ['Harvard', 'Oxford', 'Stanford', 'Cambridge', 'Yale', 'LSE', 'Columbia', 'Imperial', 'UCL'];

const philosophy = [
  { label: 'Narrative Construction', desc: 'Your story, precisely told.' },
  { label: 'Institutional Alignment', desc: 'Matched to the institution\'s intellectual culture.' },
  { label: 'Intellectual Signaling', desc: 'Demonstrating the depth they are looking for.' },
  { label: 'Strategic Identity', desc: 'A coherent, compelling profile — not a checklist.' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 2.5rem 6rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.4,
        }} />
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(192,39,45,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="animate-fade-up opacity-0-init" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            <span style={{ display: 'block', width: '40px', height: '1px', background: 'var(--crimson)' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--crimson)', fontWeight: 500 }}>
              Academic Positioning Collective
            </span>
          </div>

          <h1 className="animate-fade-up opacity-0-init delay-200 font-display" style={{
            fontSize: 'clamp(3.5rem, 8vw, 8rem)',
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--off-white)',
            marginBottom: '1.5rem',
            maxWidth: '900px',
          }}>
            We Do Not<br />
            Craft Applications.<br />
            <em style={{ color: 'var(--crimson)', fontStyle: 'italic' }}>We Position People.</em>
          </h1>

          <div className="animate-fade-up opacity-0-init delay-400" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '3rem' }}>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1.05rem',
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'var(--muted)',
              maxWidth: '520px',
            }}>
              Elite institutions do not admit credentials alone. They admit narratives, trajectories, and intellectual identities. The Axiom Collective transforms high-potential candidates into globally compelling applicants.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: 'var(--off-white)',
                padding: '16px 36px',
                background: 'var(--crimson)',
                border: '1px solid var(--crimson)',
                transition: 'all 0.25s ease',
                display: 'inline-block',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--crimson)'; }}
              >
                Book a Consultation
              </Link>
              <Link href="/services" style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: 'var(--off-white)',
                padding: '16px 36px',
                border: '1px solid var(--border-strong)',
                transition: 'all 0.25s ease',
                display: 'inline-block',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--crimson)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'; }}
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        <div className="animate-fade-in opacity-0-init delay-700" style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          color: 'var(--muted)',
          fontSize: '0.7rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontFamily: 'DM Sans, sans-serif',
        }}>
          <span>Scroll</span>
          <span style={{ display: 'block', width: '32px', height: '1px', background: 'var(--muted)' }} />
        </div>
      </section>

      {/* INSTITUTIONS TICKER */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1.5rem 0', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
        <div style={{ display: 'flex', gap: '4rem', animation: 'ticker 20s linear infinite', whiteSpace: 'nowrap' }}>
          {[...institutions, ...institutions].map((inst, i) => (
            <span key={i} style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1rem',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--muted)',
              letterSpacing: '0.06em',
            }}>
              {inst}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes ticker {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-padded" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid-2col" style={{ gap: '6rem', alignItems: 'start' }}>
          <div>
            <AnimateOnScroll>
              <span style={{ display: 'block', width: '40px', height: '1px', background: 'var(--crimson)', marginBottom: '2rem' }} />
              <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--off-white)', marginBottom: '2rem' }}>
                The Gap Between<br />
                <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Talent</em> and<br />
                Admission
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.8', fontWeight: 300, maxWidth: '440px' }}>
                Many exceptional candidates fail to access elite institutions not because they lack intelligence or potential — but because their stories are poorly articulated, their intellectual identities underdeveloped, and their profiles strategically incoherent.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.8', fontWeight: 300, maxWidth: '440px', marginTop: '1.25rem' }}>
                The Axiom Collective exists to bridge this gap.
              </p>
            </AnimateOnScroll>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {philosophy.map((item, i) => (
              <AnimateOnScroll key={item.label} delay={i * 100}>
                <div style={{
                  padding: '2rem 0',
                  borderBottom: '1px solid var(--border)',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'default',
                }}>
                  <div>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 400, color: 'var(--off-white)', marginBottom: '0.35rem' }}>{item.label}</p>
                    <p style={{ color: 'var(--muted)', fontSize: '0.84rem', fontWeight: 300 }}>{item.desc}</p>
                  </div>
                  <span style={{ color: 'var(--crimson)', fontSize: '1.2rem', fontFamily: 'Cormorant Garamond, serif' }}>→</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ padding: '6rem 2.5rem 8rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimateOnScroll>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <span style={{ display: 'block', width: '40px', height: '1px', background: 'var(--crimson)', marginBottom: '2rem' }} />
                <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--off-white)' }}>
                  What We Do
                </h2>
              </div>
              <Link href="/services" style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: 'var(--crimson)',
                borderBottom: '1px solid var(--crimson)',
                paddingBottom: '2px',
                fontWeight: 500,
              }}>
                All Services →
              </Link>
            </div>
          </AnimateOnScroll>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {services.map((s, i) => (
              <AnimateOnScroll key={s.number} delay={i * 80}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr auto',
                  alignItems: 'center',
                  gap: '2rem',
                  padding: '2.5rem 0',
                  borderBottom: '1px solid var(--border)',
                  transition: 'background 0.2s ease',
                }}>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.9rem', color: 'var(--crimson)', letterSpacing: '0.08em' }}>{s.number}</span>
                  <div>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 400, color: 'var(--off-white)', marginBottom: '0.4rem' }}>{s.title}</p>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', fontWeight: 300, lineHeight: '1.65', maxWidth: '600px' }}>{s.description}</p>
                  </div>
                  <span style={{ color: 'var(--crimson)', fontSize: '1.1rem', fontFamily: 'Cormorant Garamond, serif', opacity: 0.5 }}>→</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE INTERLUDE */}
      <section className="section-padded-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <AnimateOnScroll>
          <span style={{ display: 'block', width: '1px', height: '60px', background: 'var(--crimson)', margin: '0 auto 3rem' }} />
          <blockquote className="font-display" style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.3,
            color: 'var(--off-white)',
            letterSpacing: '0.01em',
          }}>
            "Elite admissions are not merely administrative processes; they are exercises in intellectual recognition and strategic positioning."
          </blockquote>
          <span style={{ display: 'block', width: '1px', height: '60px', background: 'var(--crimson)', margin: '3rem auto 0' }} />
        </AnimateOnScroll>
      </section>

      {/* CTA */}
      <section className="section-padded" style={{
        paddingLeft: '2.5rem',
        paddingRight: '2.5rem',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
      }}>
        <AnimateOnScroll>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <span style={{ display: 'block', width: '40px', height: '1px', background: 'var(--crimson)', margin: '0 auto 2.5rem' }} />
            <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--off-white)', marginBottom: '1.5rem' }}>
              Your Trajectory<br />
              <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Begins Here.</em>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
              Book a consultation and take the first step toward a strategically positioned, globally compelling application.
            </p>
            <Link href="/contact" style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: 'var(--off-white)',
              padding: '18px 48px',
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
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
