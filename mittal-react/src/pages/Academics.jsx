import { Seo } from '../components/Seo';
import { PageHero, Section, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

const programs = [
  { name: 'DNB Programs', desc: 'Diplomate of National Board residency tracks in Medicine, Surgery & Paediatrics.', icon: 'fa-user-graduate' },
  { name: 'Nursing Internship', desc: 'Hands-on hospital training for nursing graduates in critical care and ward management.', icon: 'fa-user-nurse' },
  { name: 'Allied Health Programs', desc: 'Certified courses for radiology, physiotherapy and lab technologists.', icon: 'fa-microscope' },
  { name: 'Clinical Observership', desc: 'Short-term observerships for visiting doctors and international fellows.', icon: 'fa-eye' },
  { name: 'CME & Workshops', desc: 'Regular continuing medical education for practicing clinicians.', icon: 'fa-chalkboard-user' },
  { name: 'Research Collaboration', desc: 'Joint research with universities & device manufacturers on clinical outcomes.', icon: 'fa-flask' },
];

export default function Academics() {
  return (
    <>
      <Seo title="Academics & Training" path="/academics" />
      <PageHero
        badge="Learn With Us"
        title="Academics, training & research"
        subtitle="A teaching hospital culture — investing in the next generation of healthcare leaders."
      />

      <Section className="!pt-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.07}>
              <div className="card card-hover h-full">
                <div className="w-12 h-12 rounded-2xl grid place-items-center text-white text-lg mb-4"
                  style={{ background: 'linear-gradient(135deg,#0a6cb8,#2ec4b6)' }}>
                  <i className={`fa-solid ${p.icon}`} />
                </div>
                <h3 className="mb-2">{p.name}</h3>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <div className="card text-center max-w-2xl mx-auto">
          <span className="section-tag">Apply</span>
          <h2 className="mb-2">Interested in joining a program?</h2>
          <p className="text-slate-600 mb-5">Our academic office reviews applications on a rolling basis.</p>
          <Button to="/contact" variant="primary" icon="fa-arrow-right">Contact Academic Office</Button>
        </div>
      </Section>
    </>
  );
}
