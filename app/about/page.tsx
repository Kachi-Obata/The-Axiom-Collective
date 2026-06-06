'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Lightbox from '@/components/Lightbox';

const MARIUS_LETTER = '/results/letters/marius-harvard.jpg';

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
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

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
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
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
        <div className="grid-2col about-identity-grid" style={{ gap: '8rem', alignItems: 'start' }}>
          <AnimateOnScroll>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 300, lineHeight: 1.2, color: 'var(--off-white)', marginBottom: '2rem' }}>
              Who We Are
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
              The Axiom Collective is a premium academic positioning and postgraduate admissions strategy firm dedicated to cultivating globally competitive scholars, researchers, professionals, and future leaders from Africa and beyond.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300 }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'stretch' }}>
            <AnimateOnScroll style={{ height: '100%' }}>
              <div style={{ height: '100%', padding: '2.5rem', border: '1px solid var(--border)', background: 'var(--bg-card)', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-1px', left: '2.5rem', display: 'block', width: '40px', height: '2px', background: 'var(--crimson)' }} />
                <p className="font-display" style={{ fontSize: '1.6rem', fontWeight: 300, color: 'var(--off-white)', marginBottom: '1rem', lineHeight: 1.2 }}>The Admissions<br />Fallacy</p>
                <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.8', fontWeight: 300 }}>
                  Most talented applicants believe that strong grades and credentials alone will secure them elite admissions. This is the central fallacy The Axiom Collective was built to correct.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150} style={{ height: '100%' }}>
              <div style={{ height: '100%', padding: '2.5rem', border: '1px solid var(--border)', background: 'var(--bg-card)', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-1px', left: '2.5rem', display: 'block', width: '40px', height: '2px', background: 'var(--crimson)' }} />
                <p className="font-display" style={{ fontSize: '1.6rem', fontWeight: 300, color: 'var(--off-white)', marginBottom: '1rem', lineHeight: 1.2 }}>What Institutions<br />Actually Admit</p>
                <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.8', fontWeight: 300 }}>
                  Elite institutions admit narratives, trajectories, and intellectual identities. They seek demonstrated potential and a compelling sense of where you are going — and why.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300} style={{ height: '100%' }}>
              <div style={{ height: '100%', padding: '2.5rem', border: '1px solid var(--border)', background: 'var(--bg-card)', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-1px', left: '2.5rem', display: 'block', width: '40px', height: '2px', background: 'var(--crimson)' }} />
                <p className="font-display" style={{ fontSize: '1.6rem', fontWeight: 300, color: 'var(--off-white)', marginBottom: '1rem', lineHeight: 1.2 }}>The Axiom<br />Difference</p>
                <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.8', fontWeight: 300 }}>
                  We don't process applications. We architect intellectual identities. We align your story with the language, culture, and expectations of the world's most selective institutions.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CRAFTING THE APPLICANT */}
      <section className="section-padded" style={{
        paddingLeft: '2.5rem',
        paddingRight: '2.5rem',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="grid-2col about-method-grid" style={{ maxWidth: '1200px', margin: '0 auto', gap: '8rem', alignItems: 'center' }}>
          <AnimateOnScroll>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.68rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--crimson)',
              fontWeight: 500,
              marginBottom: '1.5rem',
            }}>
              Our Method
            </p>
            <h2 className="font-display" style={{
              fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'var(--off-white)',
              letterSpacing: '-0.01em',
            }}>
              Crafting the Applicant,<br />
              <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Not the Application.</em>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <blockquote className="font-display" style={{
              fontSize: 'clamp(1.1rem, 1.7vw, 1.45rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.55,
              color: 'var(--off-white)',
              marginBottom: '2rem',
              borderLeft: '2px solid var(--crimson)',
              paddingLeft: '1.75rem',
            }}>
              "We do not write applications for students. We help students discover, articulate, and present their own stories."
            </blockquote>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300 }}>
              Applications emerge from a process of discovery, not manufacture. Our role is to ask the right questions, challenge comfortable narratives, and help each candidate locate the authentic core of their intellectual identity — then give it the precise, compelling language that elite institutions recognise. Every word a student submits belongs entirely to them.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padded" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <AnimateOnScroll>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--off-white)', marginBottom: '1.25rem' }}>Institutional Values</h2>
          <span className="values-rule" style={{ display: 'block', width: '40px', height: '1px', background: 'var(--crimson)', marginBottom: '3rem' }} />
        </AnimateOnScroll>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {values.map((v, i) => (
            <AnimateOnScroll key={v.title} delay={i * 80}>
              <div className="grid-values values-row" style={{
                gap: '3rem',
                padding: '2.5rem 0',
                borderBottom: '1px solid var(--border)',
                alignItems: 'start',
              }}>
                <p className="font-display" style={{ fontSize: '1.4rem', fontWeight: 400, color: 'var(--off-white)' }}>{v.title}</p>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.75', fontWeight: 300 }}>{v.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section-padded" style={{
        paddingLeft: '2.5rem',
        paddingRight: '2.5rem',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <AnimateOnScroll>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--crimson)', fontWeight: 500, marginBottom: '4rem' }}>
              Leadership
            </p>
          </AnimateOnScroll>

          {/* Row 1 — Dr. Marius Isikalu */}
          <div className="grid-asymm" style={{ gap: '6rem', alignItems: 'start', paddingBottom: '5rem', marginBottom: '5rem', borderBottom: '1px solid var(--border)' }}>

            {/* Photo */}
            <AnimateOnScroll>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '3 / 4' }}>
                <Image
                  src="/people/marius.png"
                  alt="Dr. Marius Isikalu"
                  fill
                  priority
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </AnimateOnScroll>

            {/* Bio */}
            <AnimateOnScroll delay={200}>
              <h2 className="font-display" style={{
                fontSize: 'clamp(2.2rem, 3vw, 3.2rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                marginBottom: '0.5rem',
                lineHeight: 1.1,
              }}>
                Dr. Marius Isikalu
              </h2>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--crimson)',
                fontWeight: 500,
                marginBottom: '3rem',
              }}>
                Founder & Director
              </p>

              <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.5rem' }}>
                Dr. Marius Isikalu is a researcher, policy strategist, and founder of The Axiom Collective, a premium postgraduate admissions and academic positioning consultancy dedicated to helping globally ambitious applicants gain admission into the world's leading universities, fellowship programmes, and leadership development opportunities.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.5rem' }}>
                His work is founded on a simple principle: exceptional applications emerge from exceptional applicants. Rather than focusing solely on admissions documents, he works closely with candidates to develop intellectual identity, narrative coherence, strategic positioning, and long-term academic distinction. Through this approach, he helps applicants present not only achievement, but also the clarity and purpose sought by the world's most selective institutions.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.5rem' }}>
                Dr. Isikalu serves as Head of Strategy and Methodology to the Senior Special Assistant to the President of Nigeria on Technical, Vocational and Entrepreneurship Education, where he contributes to the design of strategic initiatives aimed at advancing educational development, talent cultivation, and human capital formation. His experience at the intersection of policy, education, and leadership informs his distinctive approach to applicant development and academic mentorship.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.5rem' }}>
                Through The Axiom Collective, he has successfully guided candidates to institutions including Harvard University, Stanford University, Yale University, Columbia University, Johns Hopkins University, the London School of Economics, Brown University, and University College London, among others. His work focuses on helping applicants navigate highly competitive admissions environments through deliberate profile development, compelling personal narratives, and strategic institutional alignment.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '3rem' }}>
                Dr. Isikalu holds a PhD in Political Science and maintains active interests in global affairs, political theory, research methodology, educational development, and leadership formation. He is particularly committed to cultivating a new generation of globally competitive African scholars, professionals, and policy leaders capable of contributing meaningfully to international academic, policy, and leadership spaces.
              </p>

              {/* Pull quote */}
              <div style={{ borderLeft: '2px solid var(--crimson)', paddingLeft: '2rem', marginTop: '1rem' }}>
                <blockquote className="font-display" style={{
                  fontSize: 'clamp(1.2rem, 2vw, 1.55rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  lineHeight: 1.45,
                  color: 'var(--off-white)',
                  letterSpacing: '0.01em',
                }}>
                  "Exceptional applicants are not manufactured through templates; they are cultivated through strategy and intellectual authenticity."
                </blockquote>
              </div>

              {/* Admission */}
              <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginTop: '1.5rem', marginBottom: '0' }}>
                Dr. Isikalu also received an offer of admission from Harvard University's Graduate School of Education — the same institution whose admissions standards inform the strategic work he brings to every scholar at The Axiom Collective.
              </p>
              <div style={{ borderTop: '1px solid var(--border)', marginTop: '2rem', paddingTop: '1.5rem' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.75rem' }}>
                  Admission
                </p>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', color: 'var(--off-white)', fontWeight: 400, marginBottom: '0.25rem' }}>
                  Harvard University
                </p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', fontWeight: 300, color: 'var(--muted)', marginBottom: '0.6rem', lineHeight: 1.5 }}>
                  Master of Education (Ed.M.) · Learning Design, Innovation, and Technology · Graduate School of Education
                </p>
                <button
                  onClick={() => setLightbox({ src: MARIUS_LETTER, alt: 'Harvard University admission letter' })}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--crimson)',
                    padding: 0,
                  }}
                >
                  View Letter →
                </button>
              </div>
            </AnimateOnScroll>

          </div>

          {/* Row 2 — Joffrey Doma */}
          <div className="grid-asymm" style={{ gap: '6rem', alignItems: 'start' }}>

            {/* Photo */}
            <AnimateOnScroll>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '3 / 4' }}>
                <Image
                  src="/people/joff.png"
                  alt="Joffrey Doma"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <span style={{ display: 'block', width: '40px', height: '1px', background: 'var(--crimson)', marginTop: '1.75rem' }} />
            </AnimateOnScroll>

            {/* Bio */}
            <AnimateOnScroll delay={200}>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--crimson)',
                fontWeight: 500,
                marginBottom: '0.75rem',
              }}>
                Co-Founder
              </p>
              <h2 className="font-display" style={{
                fontSize: 'clamp(2.2rem, 3vw, 3.2rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                marginBottom: '0.5rem',
                lineHeight: 1.1,
              }}>
                Joffrey Doma
              </h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                MSc, University of Oxford · PhD Candidate, University College London
              </p>
              <span style={{ display: 'block', width: '40px', height: '1px', background: 'var(--crimson)', marginBottom: '2rem' }} />

              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', fontWeight: 300, lineHeight: '1.85', color: 'var(--muted)', marginBottom: '1.25rem' }}>
                Joffrey Doma is a researcher, educator, and higher education strategist whose academic and professional journey spans some of the United Kingdom's leading institutions. He holds an MA in International Relations from the University of Sheffield and an MSc in Global Governance and Diplomacy from the University of Oxford. He is currently pursuing a PhD at University College London (UCL), where his research engages critical questions of global governance, knowledge production, and environmental politics.
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', fontWeight: 300, lineHeight: '1.85', color: 'var(--muted)', marginBottom: '1.25rem' }}>
                Having successfully navigated the complexities of international education, UK immigration systems, competitive scholarship applications, and academic career development, Joffrey brings a wealth of practical experience to students seeking to pursue educational opportunities abroad. Over the years, he has secured scholarships, research opportunities, and teaching appointments, developing a deep understanding of the academic pathways available to ambitious students at every stage of their journey.
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', fontWeight: 300, lineHeight: '1.85', color: 'var(--muted)', marginBottom: '1.25rem' }}>
                His research interests lie at the intersection of African knowledge systems, global governance, and environmental politics. In particular, he is interested in how African intellectual traditions and epistemologies can contribute to contemporary debates on governance, sustainability, and international cooperation. His work also explores environmental governance in Africa, with a focus on the political, social, and institutional challenges shaping responses to climate and ecological change across the continent.
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', fontWeight: 300, lineHeight: '1.85', color: 'var(--muted)' }}>
                At The Axiom Collective, Joffrey combines academic insight with practical mentorship, helping students identify opportunities, clarify their aspirations, and navigate the often-complex process of pursuing higher education at leading institutions around the world. His approach is grounded in the belief that successful applications emerge not from formulaic strategies, but from a clear understanding of purpose, potential, and long-term educational goals.
              </p>
            </AnimateOnScroll>

          </div>

        </div>
      </section>

      {/* LONG-TERM VISION */}
      <section className="section-padded" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="grid-2col about-vision-grid" style={{ maxWidth: '1200px', margin: '0 auto', gap: '6rem', alignItems: 'center' }}>
          <AnimateOnScroll>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--off-white)', marginBottom: '1.5rem' }}>
              Beyond Admissions.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>An Intellectual Ecosystem.</em>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300 }}>
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
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '3rem', maxWidth: '480px', margin: '0 auto 3rem' }}>
            Book a consultation and let us begin architecting your path to the world's most selective institutions.
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

      <Lightbox
        src={lightbox?.src ?? ''}
        alt={lightbox?.alt ?? ''}
        isOpen={lightbox !== null}
        onClose={() => setLightbox(null)}
      />
    </>
  );
}
