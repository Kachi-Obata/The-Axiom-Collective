'use client';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function MethodPage() {
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
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--crimson)', fontWeight: 500 }}>Our Framework</span>
          </div>
          <h1 className="font-display animate-fade-up opacity-0-init delay-200" style={{
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--off-white)',
            marginBottom: '1.5rem',
          }}>
            The Axiom<br />
            <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Method.</em>
          </h1>
          <p className="animate-fade-up opacity-0-init delay-400 font-display" style={{
            fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--muted)',
            maxWidth: '600px',
          }}>
            Beyond Admissions. Towards Purposeful Educational Trajectories.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-padded" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
        <div className="grid-2col method-intro-grid" style={{ maxWidth: '1200px', margin: '0 auto', gap: '8rem', alignItems: 'start' }}>
          <AnimateOnScroll>
            <p className="font-display" style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.4,
              color: 'var(--off-white)',
            }}>
              "Most educational consultancies focus on applications. We focus on people."
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
              At The Axiom Collective, we believe that the strongest applications emerge from a deeper process of reflection and strategic planning. Admission is not the objective; it is the outcome of a carefully developed educational journey.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
              The Axiom Method is our framework for helping students clarify their aspirations, and present themselves authentically and compellingly to leading universities around the world.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300 }}>
              Rather than offering generic advice or formulaic application support, we work closely with a select number of students each year to develop a coherent academic and personal narrative aligned with their long-term goals.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PHASES */}
      <section className="method-phases" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '6rem 2.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Phase I */}
          <AnimateOnScroll>
            <div className="grid-method-phase" style={{ paddingBottom: '4rem', marginBottom: '4rem', borderBottom: '1px solid var(--border)' }}>
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--crimson)', fontWeight: 500, marginBottom: '0.75rem' }}>Phase I</p>
                <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', fontWeight: 300, color: 'var(--off-white)', lineHeight: 1.1 }}>Discovery</h2>
              </div>
              <div>
                <p style={{ color: 'var(--off-white)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  Every successful educational journey begins with understanding.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
                  During the Discovery Phase, we seek to understand the student beyond grades and test scores. Through structured conversations and reflective exercises, we explore interests, values, ambitions, experiences, and motivations.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
                  We ask questions that many students are usually not encouraged to consider:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
                  {[
                    'What genuinely excites you intellectually?',
                    'Which experiences have shaped your worldview?',
                    'What impact do you hope to make in the future?',
                    'What kind of life do you wish to build?',
                  ].map((q) => (
                    <li key={q} style={{ display: 'flex', gap: '1rem', marginBottom: '0.65rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--crimson)', flexShrink: 0, fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', lineHeight: '1.85' }}>—</span>
                      <span style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300 }}>{q}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300 }}>
                  The purpose of this phase is to uncover the foundations of an authentic and compelling academic identity.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Phase II */}
          <AnimateOnScroll>
            <div className="grid-method-phase" style={{ paddingBottom: '4rem', marginBottom: '4rem', borderBottom: '1px solid var(--border)' }}>
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--crimson)', fontWeight: 500, marginBottom: '0.75rem' }}>Phase II</p>
                <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', fontWeight: 300, color: 'var(--off-white)', lineHeight: 1.1 }}>Strategic<br />Positioning</h2>
              </div>
              <div>
                <p style={{ color: 'var(--off-white)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  Many students approach admissions by asking which universities they can enter.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.5rem' }}>
                  We encourage a different question:
                </p>
                <div style={{ borderLeft: '2px solid var(--crimson)', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <p className="font-display" style={{ fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--off-white)', lineHeight: 1.45 }}>
                    Which institutions, programmes, and opportunities best align with your aspirations and potential?
                  </p>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
                  During this phase, we work with students to identify suitable universities, programmes, scholarships, and academic pathways. We assess institutional fit, programme strengths, financial considerations, and long-term career implications.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300 }}>
                  The result is a clear strategic roadmap rather than a collection of random applications.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Phase III */}
          <AnimateOnScroll>
            <div className="grid-method-phase" style={{ paddingBottom: '4rem', marginBottom: '4rem', borderBottom: '1px solid var(--border)' }}>
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--crimson)', fontWeight: 500, marginBottom: '0.75rem' }}>Phase III</p>
                <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', fontWeight: 300, color: 'var(--off-white)', lineHeight: 1.1 }}>Portfolio<br />Development</h2>
              </div>
              <div>
                <p style={{ color: 'var(--off-white)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  Strong applications are built on evidence.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
                  This phase focuses on strengthening and presenting the experiences that demonstrate a student's interests, initiative, leadership, and commitment. Together, we examine academic achievements, extracurricular activities, community engagement, research experience, creative work, entrepreneurship, internships, and other relevant experiences.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300 }}>
                  Our role is not to manufacture achievements but to help students recognize and communicate the value of the experiences they already possess while identifying opportunities for meaningful growth where appropriate.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Phase IV */}
          <AnimateOnScroll>
            <div className="grid-method-phase" style={{ paddingBottom: '4rem', marginBottom: '4rem', borderBottom: '1px solid var(--border)' }}>
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--crimson)', fontWeight: 500, marginBottom: '0.75rem' }}>Phase IV</p>
                <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', fontWeight: 300, color: 'var(--off-white)', lineHeight: 1.1 }}>Narrative<br />Development</h2>
              </div>
              <div>
                <p style={{ color: 'var(--off-white)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  Every applicant has a story. Few know how to tell it effectively.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
                  The Narrative Development Phase helps students connect their experiences, interests, achievements, and aspirations into a coherent and authentic narrative.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
                  We help students answer three fundamental questions:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
                  {[
                    'Who are you?',
                    'Why this field of study?',
                    'Why now?',
                  ].map((q) => (
                    <li key={q} style={{ display: 'flex', gap: '1rem', marginBottom: '0.65rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--crimson)', flexShrink: 0, fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', lineHeight: '1.85' }}>—</span>
                      <span style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300 }}>{q}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
                  The result is a clear and persuasive application narrative that remains entirely the student's own.
                </p>
                <div style={{ borderLeft: '2px solid var(--crimson)', paddingLeft: '1.5rem' }}>
                  <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.85', fontWeight: 300, fontStyle: 'italic' }}>
                    The Axiom Collective does not write essays for students. We provide guidance, feedback, and strategic support while ensuring that all submitted work remains the authentic work of the applicant.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Phase V */}
          <AnimateOnScroll>
            <div className="grid-method-phase" style={{ paddingBottom: '4rem', marginBottom: '4rem', borderBottom: '1px solid var(--border)' }}>
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--crimson)', fontWeight: 500, marginBottom: '0.75rem' }}>Phase V</p>
                <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', fontWeight: 300, color: 'var(--off-white)', lineHeight: 1.1 }}>Application<br />Execution</h2>
              </div>
              <div>
                <p style={{ color: 'var(--off-white)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  Only after strategy, positioning, and narrative development do we move to the application itself.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
                  This phase includes:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
                  {[
                    'Application planning and timeline management',
                    'University-specific application guidance',
                    'Document review',
                    'Interview preparation',
                    'Scholarship application support',
                    'Final application checks',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '1rem', marginBottom: '0.65rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--crimson)', flexShrink: 0, fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', lineHeight: '1.85' }}>—</span>
                      <span style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300 }}>
                  Our objective is to ensure that every element of the application accurately reflects the student's strengths and aspirations while meeting the expectations of each institution.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Phase VI */}
          <AnimateOnScroll>
            <div className="grid-method-phase">
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--crimson)', fontWeight: 500, marginBottom: '0.75rem' }}>Phase VI</p>
                <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', fontWeight: 300, color: 'var(--off-white)', lineHeight: 1.1 }}>Transition<br />& Beyond</h2>
              </div>
              <div>
                <p style={{ color: 'var(--off-white)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  Our work does not necessarily end with an admission decision.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
                  Where appropriate, we continue to support students as they prepare for the next stage of their educational journey. This may include scholarship decisions, pre-departure preparation, academic planning, and transition support.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300 }}>
                  We view admission not as the destination but as the beginning of a larger trajectory.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="section-padded" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimateOnScroll>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--crimson)', fontWeight: 500, marginBottom: '2rem' }}>Our Commitment</p>
          </AnimateOnScroll>
          <div className="grid-2col" style={{ gap: '8rem', alignItems: 'start' }}>
            <AnimateOnScroll>
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--off-white)' }}>
                Authenticity<br />
                <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Outperforms</em><br />
                Performance.
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
                The Axiom Collective is built upon a simple principle: Authenticity outperforms performance. We do not promise admission to any institution. No ethical adviser can.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
                What we promise is a rigorous, reflective, and strategic process designed to help students present the strongest and most authentic version of themselves.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
                By working with only a limited number of students each year, we ensure that every client receives the time, attention, and strategic guidance necessary to pursue ambitious educational goals with confidence and clarity.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '3rem' }}>
                The objective is not simply admission. The objective is alignment between potential, purpose, and opportunity.
              </p>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                <p className="font-display" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.55rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--off-white)', lineHeight: 1.4 }}>
                  We work with no more than 25 students annually.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padded" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', textAlign: 'center' }}>
        <AnimateOnScroll>
          <span style={{ display: 'block', width: '1px', height: '50px', background: 'var(--crimson)', margin: '0 auto 3rem' }} />
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: 'var(--off-white)', marginBottom: '1.5rem' }}>
            Begin the Process.
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 300, maxWidth: '480px', margin: '0 auto 3rem' }}>
            Book a consultation to explore whether The Axiom Method is the right fit for your goals.
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

      <style>{`
        .grid-method-phase {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 5rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .grid-method-phase {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
