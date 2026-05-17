import { Seo } from '../components/Seo';
import { PageHero, Section, SectionHeader, FadeIn } from '../components/ui/Section';
import { Counter } from '../components/ui/Counter';
import { Button } from '../components/ui/Button';
import { milestones, hospital } from '../data/site';

export default function About() {
  return (
    <>
      <Seo title="About Us" path="/about" description={`Learn the story behind ${hospital.name} — Ajmer's first NABH accredited multi-specialty hospital.`} />
      <PageHero
        badge="About Mittal Hospital"
        title="Healing hearts, transforming lives — for over 20 years."
        subtitle="From a single-building memorial hospital in 2005 to Ajmer's leading NABH accredited multi-specialty centre today."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="rounded-4xl overflow-hidden shadow-glass-lg aspect-[4/3]">
              <img src={hospital.buildingMain} alt="Mittal Hospital building" className="w-full h-full object-cover" loading="eager" />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <span className="section-tag">Our Story</span>
            <h2 className="mb-3">From a single hospital to a regional flagship</h2>
            <p className="text-slate-600 mb-3">Founded in 2005 in memory of Smt. Gheesibai, the hospital began with a clear promise — quality healthcare under one roof, delivered ethically and affordably.</p>
            <p className="text-slate-600 mb-6">Today, with 250+ beds, advanced super-specialty units, NABH accreditation and a team of 120+ doctors, we are recognized as the most trusted name in healthcare across the Ajmer division.</p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { v: 20, s: '+', l: 'Years' },
                { v: 250, s: '+', l: 'Beds' },
                { v: 500000, s: '+', l: 'Lives Touched' },
              ].map((s) => (
                <div key={s.l} className="card p-4 text-center">
                  <div className="text-2xl font-bold text-primary-700"><Counter to={s.v} suffix={s.s} /></div>
                  <div className="text-xs text-slate-500 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: 'fa-bullseye', title: 'Our Mission', text: 'To provide quality healthcare under one roof with competent, devoted professionals at affordable cost in an ethical & hygienic environment.' },
            { icon: 'fa-eye', title: 'Our Vision', text: 'To be the most preferred & trusted healthcare destination in central Rajasthan — known for clinical excellence and human warmth.' },
            { icon: 'fa-handshake', title: 'Our Values', text: 'Compassion, Integrity, Excellence, Respect, Teamwork — the five values that guide every decision and every interaction.' },
          ].map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.08}>
              <div className="card card-hover h-full">
                <div className="w-14 h-14 rounded-2xl mb-4 grid place-items-center text-white text-lg"
                  style={{ background: 'linear-gradient(135deg,#0a6cb8,#2ec4b6)' }}>
                  <i className={`fa-solid ${c.icon}`} />
                </div>
                <h3 className="mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600">{c.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="nabh">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <FadeIn>
            <span className="section-tag">Accreditation</span>
            <h2 className="mb-3">NABH Accredited — quality you can <span className="text-gradient">verify</span></h2>
            <p className="text-slate-600 mb-3">
              We were the first multi-specialty hospital in the Ajmer division to receive full NABH accreditation. This rigorous certification covers over 600 quality and safety standards — from infection control and medication safety to patient rights and clinical outcomes.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Verified clinical protocols',
                'Strict infection-control practices',
                'Patient rights & informed consent',
                'Documented quality outcomes',
                'Continuous quality improvement program',
              ].map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
                  <i className="fa-solid fa-circle-check text-success" /> {p}
                </li>
              ))}
            </ul>
            <Button to="/disclosures" variant="primary" icon="fa-file-shield">View Statutory Disclosures</Button>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* Clean uniform 2x2 grid — every cell aspect-square, equal gaps, no overlap possible */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: hospital.buildingSecondary, alt: 'Mittal Hospital building' },
                { src: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=600&q=80', alt: 'Operation theatre' },
                { src: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=600&q=80', alt: 'Pathology lab' },
                { src: hospital.buildingMain, alt: 'Mittal Hospital main entrance' },
              ].map((g) => (
                <div key={g.src} className="rounded-3xl overflow-hidden shadow-glass aspect-square">
                  <img src={g.src} alt={g.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section id="leadership">
        <SectionHeader
          tag="Leadership"
          title='The minds behind <span class="text-gradient">our mission</span>'
          subtitle="A team of clinicians and administrators committed to ethical, high-quality medicine."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Dr. Dilip Mittal', role: 'Founder & Director', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80' },
            { name: 'Dr. Sushila Mittal', role: 'Medical Superintendent', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80' },
            { name: 'Mr. Rohit Mittal', role: 'CEO', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80' },
          ].map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <div className="card card-hover text-center">
                <img src={p.image} alt={p.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-white shadow-glass" />
                <h3 className="mb-1">{p.name}</h3>
                <p className="text-sm text-accent-600 font-semibold">{p.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="milestones">
        <SectionHeader
          tag="Our Journey"
          title='Milestones along the <span class="text-gradient">way</span>'
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 md:-translate-x-px" />
          {milestones.map((m, i) => (
            <FadeIn key={m.year} delay={i * 0.06}>
              <div className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 mb-8 ${i % 2 ? 'md:[&>:first-child]:order-2' : ''}`}>
                <div className={`hidden md:block ${i % 2 ? 'text-left' : 'text-right'}`}>
                  <div className="text-4xl font-bold text-gradient leading-none">{m.year}</div>
                </div>
                <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-primary-500" />
                <div>
                  <div className="md:hidden text-2xl font-bold text-gradient mb-2">{m.year}</div>
                  <p className="text-slate-700">{m.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
