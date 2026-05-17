import { Seo } from '../components/Seo';
import { PageHero, Section, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { services, hospital } from '../data/site';

export default function Services() {
  return (
    <>
      <Seo
        title="Patient Services"
        path="/services"
        description={`Comprehensive patient services at ${hospital.name} — blood bank, cath lab, dialysis, pathology, radiology, ambulance, pharmacy and more.`}
      />

      <PageHero
        badge="Patient Services"
        title="Modern services. Trusted outcomes."
        subtitle="Diagnostic, therapeutic and supportive services to deliver complete care under one roof — every service NABH-audited for safety and quality."
      />

      <Section className="!pt-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.slug} delay={(i % 9) * 0.05}>
              <article id={s.slug} className="card card-hover p-0 overflow-hidden h-full group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2">{s.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{s.desc}</p>
                  <Button to="/contact" variant="ghost" size="sm" icon="fa-arrow-right" className="!px-0">
                    Learn More
                  </Button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="rounded-4xl overflow-hidden shadow-glass-lg aspect-[4/3]">
              <img src={hospital.buildingMain} alt="Mittal Hospital" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <span className="section-tag">Every Service, One Roof</span>
            <h2 className="mb-3">From diagnosis to discharge — <span className="text-gradient">we handle it all</span></h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The most stressful part of healthcare is being passed between hospitals, labs and pharmacies — losing time and reports along the way. At Mittal Hospital, every service from the first blood test to your final follow-up happens under the same roof, by the same coordinated team.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our pathology, radiology, blood bank, pharmacy and rehab services are deeply integrated with clinical departments — so your reports reach your doctor instantly and your treatment moves forward without delay. This single-roof model also makes care faster and more affordable.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button to="/appointment" variant="primary" icon="fa-calendar-check">Book Appointment</Button>
              <Button to="/contact" variant="outline" icon="fa-envelope">Contact Us</Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
