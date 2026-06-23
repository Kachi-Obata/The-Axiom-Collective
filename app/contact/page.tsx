'use client';
import { useState } from 'react';
import Script from 'next/script';
import AnimateOnScroll from '@/components/AnimateOnScroll';

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

function getRecaptchaToken(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!RECAPTCHA_SITE_KEY || typeof window === 'undefined' || !window.grecaptcha) {
      reject(new Error('Verification failed to load. Please refresh and try again.'));
      return;
    }
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action: 'contact' })
        .then(resolve)
        .catch(() => reject(new Error('Verification failed. Please refresh and try again.')));
    });
  });
}

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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MAX = 5000;

/** Strip spaces, dashes, dots, parentheses from phone — keep digits and leading + */
function normalizePhone(raw: string): string {
  return raw.replace(/[\s\-().]/g, '');
}

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
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // ─── Validation ───────────────────────────────────────────────────
  const emailValid = EMAIL_RE.test(formData.email.trim());

  const isFormValid = Boolean(
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.trim() && emailValid &&
    formData.program &&
    formData.stage &&
    formData.institutions.trim() &&
    formData.message.trim()
  );

  function fieldError(field: string): string {
    if (!touched[field]) return '';
    switch (field) {
      case 'firstName': return formData.firstName.trim() ? '' : 'First name is required.';
      case 'lastName':  return formData.lastName.trim()  ? '' : 'Last name is required.';
      case 'email':
        if (!formData.email.trim()) return 'Email address is required.';
        if (!emailValid)            return 'Please enter a valid email address.';
        return '';
      case 'program': return formData.program ? '' : 'Please select a program type.';
      case 'stage':   return formData.stage   ? '' : 'Please select your application stage.';
      case 'institutions': return formData.institutions.trim() ? '' : 'Please list at least one target institution.';
      case 'message': return formData.message.trim() ? '' : 'Please tell us about your goals.';
      default: return '';
    }
  }

  const mark = (field: string) => setTouched(t => ({ ...t, [field]: true }));

  // ─── Submit ───────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoading(true);
    setError('');

    try {
      const recaptchaToken = await getRecaptchaToken();

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, phone: normalizePhone(formData.phone), recaptchaToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to send your inquiry. Please check your connection and try again.');
      setLoading(false);
    }
  };

  // ─── Styles ───────────────────────────────────────────────────────
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

  const errorTextStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.72rem',
    color: 'var(--crimson)',
    fontWeight: 300,
    marginTop: '0.4rem',
    lineHeight: 1.4,
  };

  /** Returns the border color to set on blur for a given field + current value */
  function blurBorder(field: string, value: string): string {
    const hasError = (() => {
      switch (field) {
        case 'firstName': return !value.trim();
        case 'lastName':  return !value.trim();
        case 'email':     return !value.trim() || !EMAIL_RE.test(value.trim());
        case 'program':   return !value;
        case 'stage':     return !value;
        case 'institutions': return !value.trim();
        case 'message':      return !value.trim();
        default: return false;
      }
    })();
    return hasError ? 'var(--crimson)' : 'var(--border)';
  }

  // ─── Button state ─────────────────────────────────────────────────
  const buttonDisabled = !isFormValid || loading;
  const buttonStyle: React.CSSProperties = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.78rem',
    fontWeight: 500,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    padding: '18px 36px',
    width: '100%',
    marginTop: '0.5rem',
    transition: 'all 0.25s ease',
    cursor: buttonDisabled ? (loading ? 'default' : 'not-allowed') : 'pointer',
    ...(loading
      ? { background: 'transparent', color: 'var(--off-white)', border: '1px solid var(--crimson)', opacity: 0.6 }
      : !isFormValid
      ? { background: 'var(--bg-card)', color: 'var(--muted-light)', border: '1px solid var(--border)', opacity: 1 }
      : { background: 'var(--crimson)', color: '#FFFFFF', border: '1px solid var(--crimson)', opacity: 1 }
    ),
  };

  // ─── Character count ──────────────────────────────────────────────
  const msgLen = formData.message.length;
  const msgRemaining = MESSAGE_MAX - msgLen;

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2.5rem' }}>
        <div>
          <span style={{ display: 'block', width: '1px', height: '60px', background: 'var(--crimson)', margin: '0 auto 3rem' }} />
          <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 300, color: 'var(--off-white)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Your Inquiry<br />Has Been Received.
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 300, maxWidth: '440px', margin: '0 auto' }}>
            A member of the Axiom Collective will review your profile and reach out within 2–3 business days to schedule your consultation.
          </p>
          <span style={{ display: 'block', width: '1px', height: '60px', background: 'var(--crimson)', margin: '3rem auto 0' }} />
        </div>
      </div>
    );
  }

  return (
    <>
      {RECAPTCHA_SITE_KEY && (
        <Script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`} strategy="afterInteractive" />
      )}

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
          <h1 className="font-display animate-fade-up opacity-0-init" style={{
            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
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
              <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '3rem' }}>
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
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 300, color: 'var(--crimson)', letterSpacing: '0.06em', flexShrink: 0, lineHeight: 1 }}>{item.step}</span>
                    <div>
                      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: 'var(--off-white)', marginBottom: '0.25rem' }}>{item.title}</p>
                      <p style={{ color: 'var(--muted)', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Form */}
          <AnimateOnScroll delay={200}>
            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Name row */}
              <div className="grid-2col" style={{ gap: '1rem' }}>
                <div>
                  <label htmlFor="firstName" style={labelStyle}>First Name *</label>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--crimson)'}
                    onBlur={e => {
                      mark('firstName');
                      (e.target as HTMLElement).style.borderColor = blurBorder('firstName', formData.firstName);
                    }}
                    placeholder="First name"
                  />
                  {fieldError('firstName') && <span style={errorTextStyle}>{fieldError('firstName')}</span>}
                </div>
                <div>
                  <label htmlFor="lastName" style={labelStyle}>Last Name *</label>
                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--crimson)'}
                    onBlur={e => {
                      mark('lastName');
                      (e.target as HTMLElement).style.borderColor = blurBorder('lastName', formData.lastName);
                    }}
                    placeholder="Last name"
                  />
                  {fieldError('lastName') && <span style={errorTextStyle}>{fieldError('lastName')}</span>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" style={labelStyle}>Email Address *</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={e => {
                    setFormData({ ...formData, email: e.target.value });
                    // Re-evaluate border live once the field has been touched
                    if (touched.email) {
                      (e.target as HTMLElement).style.borderColor = blurBorder('email', e.target.value);
                    }
                  }}
                  style={inputStyle}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--crimson)'}
                  onBlur={e => {
                    mark('email');
                    (e.target as HTMLElement).style.borderColor = blurBorder('email', formData.email);
                  }}
                  placeholder="your@email.com"
                />
                {fieldError('email') && <span style={errorTextStyle}>{fieldError('email')}</span>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" style={labelStyle}>Phone Number</label>
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

              {/* Program */}
              <div>
                <label htmlFor="program" style={labelStyle}>Program Type *</label>
                <select
                  id="program"
                  value={formData.program}
                  onChange={e => setFormData({ ...formData, program: e.target.value })}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--crimson)'}
                  onBlur={e => {
                    mark('program');
                    (e.target as HTMLElement).style.borderColor = blurBorder('program', formData.program);
                  }}
                >
                  <option value="" style={{ background: 'var(--bg)' }}>Select program type...</option>
                  {programs.map(p => <option key={p} value={p} style={{ background: 'var(--bg)' }}>{p}</option>)}
                </select>
                {fieldError('program') && <span style={errorTextStyle}>{fieldError('program')}</span>}
              </div>

              {/* Stage */}
              <div>
                <label htmlFor="stage" style={labelStyle}>Application Stage *</label>
                <select
                  id="stage"
                  value={formData.stage}
                  onChange={e => setFormData({ ...formData, stage: e.target.value })}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--crimson)'}
                  onBlur={e => {
                    mark('stage');
                    (e.target as HTMLElement).style.borderColor = blurBorder('stage', formData.stage);
                  }}
                >
                  <option value="" style={{ background: 'var(--bg)' }}>Select your current stage...</option>
                  {stages.map(s => <option key={s} value={s} style={{ background: 'var(--bg)' }}>{s}</option>)}
                </select>
                {fieldError('stage') && <span style={errorTextStyle}>{fieldError('stage')}</span>}
              </div>

              {/* Institutions */}
              <div>
                <label htmlFor="institutions" style={labelStyle}>Target Institutions *</label>
                <input
                  id="institutions"
                  type="text"
                  value={formData.institutions}
                  onChange={e => setFormData({ ...formData, institutions: e.target.value })}
                  style={inputStyle}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--crimson)'}
                  onBlur={e => {
                    mark('institutions');
                    (e.target as HTMLElement).style.borderColor = blurBorder('institutions', formData.institutions);
                  }}
                  placeholder="e.g. Oxford, LSE, Harvard Kennedy School"
                />
                {fieldError('institutions') && <span style={errorTextStyle}>{fieldError('institutions')}</span>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" style={labelStyle}>Tell Us About Your Goals *</label>
                <textarea
                  id="message"
                  value={formData.message}
                  maxLength={MESSAGE_MAX}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.7' }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--crimson)'}
                  onBlur={e => {
                    mark('message');
                    (e.target as HTMLElement).style.borderColor = blurBorder('message', formData.message);
                  }}
                  placeholder="Share your academic background, professional experience, and what you're hoping to achieve..."
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.4rem', minHeight: '1rem' }}>
                  <span style={errorTextStyle}>{fieldError('message')}</span>
                  {msgLen > 0 && (
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.72rem',
                      fontWeight: 300,
                      color: msgRemaining <= 200 ? 'var(--crimson)' : 'var(--muted-light)',
                      lineHeight: 1.4,
                      flexShrink: 0,
                      marginLeft: '1rem',
                    }}>
                      {msgLen.toLocaleString()} / {MESSAGE_MAX.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              {error && (
                <p style={{ color: 'var(--crimson)', fontSize: '0.82rem', fontWeight: 300, lineHeight: 1.6 }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={buttonDisabled}
                style={buttonStyle}
                onMouseEnter={e => {
                  if (!buttonDisabled) {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = 'var(--off-white)';
                  }
                }}
                onMouseLeave={e => {
                  if (!buttonDisabled) {
                    (e.currentTarget as HTMLElement).style.background = 'var(--crimson)';
                    (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
                  }
                }}
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
