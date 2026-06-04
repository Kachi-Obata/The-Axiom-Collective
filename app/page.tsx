'use client';
import Link from 'next/link';
import Image from 'next/image';
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

const logos = [
  { src: '/logos/HARVARD-logo.svg.png', alt: 'Harvard', width: 145, height: 50 },
  { src: '/logos/YALEUni-logo.png', alt: 'Yale', width: 180, height: 64 },
  { src: '/logos/COLUMBIA-Logo-updated.png', alt: 'Columbia', width: 280, height: 92 },
  { src: '/logos/LSEecons-polsci-logo.svg.png', alt: 'LSE', width: 160, height: 56 },
  { src: '/logos/IMPERIAL-College-London-Logo.png', alt: 'Imperial College London', width: 145, height: 48 },
  { src: '/logos/UCL-logo-dark.png', alt: 'UCL', width: 150, height: 48 },
  { src: '/logos/JOHNHOPKINS-logo.png', alt: 'Johns Hopkins', width: 160, height: 48 },
  { src: '/logos/EMORYUni-logo.png', alt: 'Emory', width: 110, height: 40 },
  { src: '/logos/BROWNUni-logo.png', alt: 'Brown', width: 150, height: 48 },
  { src: '/logos/LSHTM-logo.png', alt: 'LSHTM', width: 200, height: 64 },
];

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
        padding: '5rem 2.5rem 6rem',
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
            We Don't<br />
            Craft Applications.<br />
            <em style={{ color: 'var(--crimson)', fontStyle: 'italic' }}>We Position People.</em>
          </h1>

          <div className="animate-fade-up opacity-0-init delay-400" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '3rem' }}>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1.1rem',
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'var(--muted)',
              maxWidth: '520px',
            }}>
              Elite institutions don't admit credentials alone. They admit narratives, trajectories, and intellectual identities. The Axiom Collective transforms high-potential candidates into globally compelling applicants.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: '#FFFFFF',
                padding: '16px 36px',
                background: 'var(--crimson)',
                border: '1px solid var(--crimson)',
                transition: 'all 0.25s ease',
                display: 'inline-block',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--off-white)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--crimson)'; (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; }}
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
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--crimson)'; (e.currentTarget as HTMLElement).style.color = 'var(--crimson)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'; (e.currentTarget as HTMLElement).style.color = 'var(--off-white)'; }}
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* INSTITUTIONS TICKER */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '2rem 0', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
        <div className="logo-ticker" style={{ display: 'flex', alignItems: 'center', gap: '4rem', animation: 'ticker 30s linear infinite', whiteSpace: 'nowrap' }}>
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} style={{ flexShrink: 0, height: `${logo.height}px`, position: 'relative', width: `${logo.width}px` }}>
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                style={{ objectFit: 'contain', objectPosition: 'center', filter: 'opacity(0.7)' }}
                sizes={`${logo.width}px`}
              />
            </div>
          ))}
        </div>
        <style>{`
          @keyframes ticker {
            from { transform: translateX(0); }
            to   { transform: translateX(-33.33%); }
          }
          @media (max-width: 768px) {
            .logo-ticker { animation-duration: 10s !important; }
          }
        `}</style>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-padded" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid-2col" style={{ gap: '6rem', alignItems: 'start' }}>
          <div>
            <AnimateOnScroll>
              <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--off-white)', marginBottom: '2rem' }}>
                The Gap Between<br />
                <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Talent</em> and<br />
                Admission
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.8', fontWeight: 300, maxWidth: '440px' }}>
                Many exceptional candidates fail to access elite institutions not because they lack intelligence or potential — but because their stories are poorly articulated, their intellectual identities underdeveloped, and their profiles strategically incoherent.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.8', fontWeight: 300, maxWidth: '440px', marginTop: '1.25rem' }}>
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
                    <p style={{ color: 'var(--muted)', fontSize: '1rem', fontWeight: 300 }}>{item.desc}</p>
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
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 300, color: 'var(--crimson)', letterSpacing: '0.08em' }}>{s.number}</span>
                  <div>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 400, color: 'var(--off-white)', marginBottom: '0.4rem' }}>{s.title}</p>
                    <p style={{ color: 'var(--muted)', fontSize: '1rem', fontWeight: 300, lineHeight: '1.65', maxWidth: '600px' }}>{s.description}</p>
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
            "Elite admissions aren't merely administrative processes; they're exercises in intellectual recognition and strategic positioning."
          </blockquote>
          <span style={{ display: 'block', width: '1px', height: '60px', background: 'var(--crimson)', margin: '3rem auto 0' }} />
        </AnimateOnScroll>
      </section>

      {/* FOUNDER TEASER */}
      <section className="section-padded-sm" style={{
        paddingLeft: '2.5rem',
        paddingRight: '2.5rem',
        borderTop: '1px solid var(--border)',
      }}>
        <AnimateOnScroll>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: '5rem',
            alignItems: 'center',
          }}
            className="founder-teaser"
          >
            {/* Photo */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '3 / 4' }}>
              <Image
                src="/marius.png"
                alt="Dr. Marius Isikalu"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 768px) 100vw, 260px"
              />
            </div>

            {/* Text */}
            <div>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--crimson)',
                fontWeight: 500,
                marginBottom: '0.75rem',
              }}>
                Founder
              </p>
              <h3 className="font-display" style={{
                fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                marginBottom: '2rem',
                lineHeight: 1.1,
              }}>
                Dr. Marius Isikalu
              </h3>
              <p className="font-display" style={{
                fontSize: 'clamp(1.1rem, 1.6vw, 1.4rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.5,
                color: 'var(--muted)',
                marginBottom: '2.5rem',
                maxWidth: '520px',
              }}>
                "Exceptional applicants are not manufactured through templates; they are cultivated through strategy and intellectual authenticity."
              </p>
              <Link href="/about" style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: 'var(--crimson)',
                borderBottom: '1px solid var(--crimson)',
                paddingBottom: '2px',
                fontWeight: 500,
              }}>
                Read his story →
              </Link>
            </div>
          </div>
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
            <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--off-white)', marginBottom: '1.5rem' }}>
              Your Trajectory<br />
              <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Begins Here.</em>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
              Book a consultation and take the first step toward a strategically positioned, globally compelling application.
            </p>
            <Link href="/contact" style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: '#FFFFFF',
              padding: '18px 48px',
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
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
