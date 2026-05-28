'use client';
import { useState } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const programs = [
  'Master\'s Degree (MSc / MA / LLM)',
  'PhD / Doctoral Program',
  'MPP / MPA / Public Policy',
  'MBA / Professional Postgraduate',
  'Global Fellowship',
  'Scholarship / Funding',
  'Not sure yet',
];

const stages = [
  'Just starting — exploring options',
  'Actively researching programs',
  'Preparing applications now',
  'Already applied — need support',
];

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    stage: '',
    institutions: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setError('Unable to send your inquiry. Please check your connection and try again.');
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    color: 'var(--off-white)',
    padding: '14px 16px',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.88rem',
    fontWeight: 300,
    outline: 'none',
    transition: 'border-color 0.2s ease',
    appearance: 'none',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.7rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    marginBottom: '0.5rem',
    fontWeight: 500,
  };

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2.5rem' }}>
        <div>
          <span style={{ display: 'block', width: '1px', height: '60px', background: 'var(--crimson)', margin: '0 auto 3rem' }} />
          <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 300, color: 'var(--off-white)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Your Inquiry<br />Has Been Received.
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300, maxWidth: '440px', margin: '0 auto' }}>
            A member of the Axiom Collective will review your profile and reach out within 2–3 business days to schedule your consultation.
          </p>
          <span style={{ display: 'block', width: '1px', height: '60px', background: 'var(--crimson)', margin: '3rem auto 0' }} />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 2.5rem 5rem',
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
          <h1 className="font-display animate-fade-up opacity-0-init" style={{
            fontSize: 'clamp(3rem, 6vw, 6rem)',
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--off-white)',
          }}>
            Begin Your<br />
            <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Strategic Positioning.</em>
          </h1>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="section-padded" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid-contact" style={{ gap: '8rem', alignItems: 'start' }}>

          {/* Left: Info */}
          <AnimateOnScroll>
            <div>
              <h2 className="font-display" style={{ fontSize: '1.8rem', fontWeight: 300, color: 'var(--off-white)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                What to Expect
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '3rem' }}>
                Fill in your details and we will review your academic background, target institutions, and ambitions. A member of our team will reach out within 2–3 business days to schedule your consultation.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  { step: '01', title: 'Submit Inquiry', desc: 'Share your profile, goals, and target institutions.' },
                  { step: '02', title: 'Profile Review', desc: 'Our team assesses your background and positioning gaps.' },
                  { step: '03', title: 'Consultation', desc: 'A strategic conversation about your path forward.' },
                  { step: '04', title: 'Engagement', desc: 'We begin positioning you for your target institutions.' },
                ].map(item => (
                  <div key={item.step} style={{ display: 'flex', gap: '1.25rem', padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem', color: 'var(--crimson)', letterSpacing: '0.06em', flexShrink: 0, paddingTop: '2px' }}>{item.step}</span>
                    <div>
                      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: 'var(--off-white)', marginBottom: '0.25rem' }}>{item.title}</p>
                      <p style={{ color: 'var(--muted)', fontSize: '0.82rem', fontWeight: 300, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                <p style={{ color: 'var(--muted)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '1rem' }}>Contact</p>
                <p style={{ color: 'var(--off-white)', fontSize: '0.88rem', fontWeight: 300, marginBottom: '0.75rem' }}>
                  marius@theaxiomcollective.org
                </p>
                {whatsappNumber && (
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--muted)',
                      fontSize: '0.85rem',
                      fontWeight: 300,
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--off-white)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Message on WhatsApp
                  </a>
                )}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Form */}
          <AnimateOnScroll delay={200}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Name row */}
              <div className="grid-2col" style={{ gap: '1rem' }}>
                <div>
                  <label htmlFor="firstName" style={labelStyle}>First Name *</label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--crimson)'}
                    onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" style={labelStyle}>Last Name *</label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--crimson)'}
                    onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" style={labelStyle}>Email Address *</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--crimson)'}
                  onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" style={labelStyle}>Phone / WhatsApp</label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  style={inputStyle}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--crimson)'}
                  onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                  placeholder="+234 xxx xxx xxxx"
                />
              </div>

              <div>
                <label htmlFor="program" style={labelStyle}>Program Type *</label>
                <select
                  id="program"
                  required
                  value={formData.program}
                  onChange={e => setFormData({ ...formData, program: e.target.value })}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--crimson)'}
                  onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                >
                  <option value="" style={{ background: 'var(--bg)' }}>Select program type...</option>
                  {programs.map(p => <option key={p} value={p} style={{ background: 'var(--bg)' }}>{p}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="stage" style={labelStyle}>Application Stage *</label>
                <select
                  id="stage"
                  required
                  value={formData.stage}
                  onChange={e => setFormData({ ...formData, stage: e.target.value })}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--crimson)'}
                  onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                >
                  <option value="" style={{ background: 'var(--bg)' }}>Select your current stage...</option>
                  {stages.map(s => <option key={s} value={s} style={{ background: 'var(--bg)' }}>{s}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="institutions" style={labelStyle}>Target Institutions</label>
                <input
                  id="institutions"
                  type="text"
                  value={formData.institutions}
                  onChange={e => setFormData({ ...formData, institutions: e.target.value })}
                  style={inputStyle}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--crimson)'}
                  onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                  placeholder="e.g. Oxford, LSE, Harvard Kennedy School"
                />
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>Tell Us About Your Goals *</label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.7' }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--crimson)'}
                  onBlur={e => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                  placeholder="Share your academic background, professional experience, and what you're hoping to achieve..."
                />
              </div>

              {error && (
                <p style={{ color: 'var(--crimson)', fontSize: '0.82rem', fontWeight: 300, lineHeight: 1.6 }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--off-white)',
                  padding: '18px 36px',
                  background: loading ? 'transparent' : 'var(--crimson)',
                  border: '1px solid var(--crimson)',
                  cursor: loading ? 'default' : 'pointer',
                  transition: 'all 0.25s ease',
                  width: '100%',
                  marginTop: '0.5rem',
                  opacity: loading ? 0.6 : 1,
                }}
                onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLElement).style.background = 'var(--crimson)'; }}
              >
                {loading ? 'Sending...' : 'Submit Inquiry'}
              </button>

              <p style={{ color: 'var(--muted)', fontSize: '0.75rem', fontWeight: 300, textAlign: 'center', lineHeight: '1.6' }}>
                Your information is kept strictly confidential. We will respond within 2–3 business days.
              </p>
            </form>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
