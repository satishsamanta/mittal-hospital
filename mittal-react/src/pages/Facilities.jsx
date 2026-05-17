import { Seo } from '../components/Seo';
import { PageHero, Section, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { facilities } from '../data/site';

export default function Facilities() {
  return (
    <>
      <Seo title="Hospital Facilities" path="/facilities" />
      <PageHero
        badge="Infrastructure"
        title="Modern infrastructure, world-class facilities"
        subtitle="From modular operation theatres to a fully automated pathology lab — every facility designed around patient safety."
      />

      <Section className="!pt-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, i) => (
            <FadeIn key={f.name} delay={(i % 6) * 0.08}>
              <div className="card card-hover p-0 overflow-hidden h-full">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={f.image} alt={f.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="mb-2">{f.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <div className="card max-w-5xl mx-auto p-8 md:p-12 text-center">
          <span className="section-tag">Visit Us</span>
          <h2 className="mb-3">Take a virtual or in-person tour</h2>
          <p className="text-slate-600 mb-6">Visit our hospital and meet our team. Tours can be arranged for prospective patients and corporate partners.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button to="/contact" variant="primary" icon="fa-route">Schedule a Tour</Button>
            <Button to="/gallery" variant="outline" icon="fa-images">View Gallery</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
