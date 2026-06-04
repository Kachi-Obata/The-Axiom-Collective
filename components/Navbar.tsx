'use client';
import { useState, useEffect } from 'react'; // useState kept for menuOpen
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/method', label: 'Method' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        style={{
          paddingTop: 'env(safe-area-inset-top, 0px)',
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem',
          paddingBottom: 0,
          height: 'calc(72px + env(safe-area-inset-top, 0px))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <Image src="/brand/AxiomNavLogo.png" alt="Axiom Collective" width={200} height={45} style={{ objectFit: 'contain' }} />
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: pathname === href ? 'var(--off-white)' : 'var(--muted)',
                transition: 'color 0.2s ease',
                borderBottom: pathname === href ? '1px solid var(--crimson)' : '1px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: 'var(--off-white)',
              padding: '10px 24px',
              border: '1px solid var(--crimson)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'var(--crimson)';
              (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.color = 'var(--off-white)';
            }}
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span style={{ display: 'block', width: '24px', height: '1px', background: menuOpen ? 'var(--crimson)' : 'var(--off-white)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--off-white)', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '24px', height: '1px', background: menuOpen ? 'var(--crimson)' : 'var(--off-white)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          top: 'calc(72px + env(safe-area-inset-top, 0px))',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--bg)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2.5rem',
              fontWeight: 300,
              textDecoration: 'none',
              color: pathname === href ? 'var(--crimson)' : 'var(--off-white)',
              letterSpacing: '0.04em',
            }}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: '#FFFFFF',
            padding: '14px 36px',
            border: '1px solid var(--crimson)',
            background: 'var(--crimson)',
            marginTop: '1rem',
          }}
        >
          Book Consultation
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
