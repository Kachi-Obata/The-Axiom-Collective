'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '5rem 2.5rem 3rem',
      background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '4rem',
          marginBottom: '5rem',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Image src="/logo.png" alt="The Axiom Collective" width={180} height={60} style={{ objectFit: 'contain', marginBottom: '1.5rem', display: 'block' }} />
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: '1.7', fontWeight: 300, maxWidth: '260px' }}>
              A strategic institution for globally ambitious minds.
            </p>
            <span style={{ display: 'block', width: '32px', height: '1px', background: 'var(--crimson)', marginTop: '1.5rem' }} />
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem', fontWeight: 500 }}>Navigate</p>
            {['Home', 'About', 'Services', 'Contact'].map(item => (
              <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--off-white)', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 300, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--crimson)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--off-white)'}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem', fontWeight: 500 }}>Services</p>
            {['Admissions Strategy', 'Research Identity', 'Narrative Architecture', 'Scholarship Positioning', 'Interview Preparation'].map(item => (
              <p key={item} style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--muted)', fontSize: '0.85rem', fontWeight: 300 }}>
                {item}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem', fontWeight: 500 }}>Contact</p>
            <p style={{ color: 'var(--off-white)', fontSize: '0.88rem', fontWeight: 300, marginBottom: '0.75rem' }}>marius@theaxiomcollective.org</p>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', fontWeight: 300, marginBottom: '2rem' }}>Africa & Global</p>
            <Link href="/contact" style={{
              display: 'inline-block',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: 'var(--off-white)',
              padding: '10px 20px',
              border: '1px solid var(--crimson)',
              transition: 'background 0.25s ease',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--crimson)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
            >
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ color: 'var(--muted)', fontSize: '0.78rem', fontWeight: 300 }}>
            © {new Date().getFullYear()} The Axiom Collective. All rights reserved.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '0.78rem', fontWeight: 300, fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>
            Strategy. Positioning. Possibility.
          </p>
        </div>
      </div>
    </footer>
  );
}
