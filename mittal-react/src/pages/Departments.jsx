import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { PageHero, Section, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { departments, hospital } from '../data/site';

export default function Departments() {
  return (
    <>
      <Seo
        title="Departments & Specialities"
        path="/departments"
        description={`Explore all super-specialty departments at ${hospital.name} — Cardiology, Neurology, Oncology, Orthopaedics, Gynaecology, Paediatrics and more.`}
      />

      <PageHero
        badge="Super-Specialty Care"
        title="All departments — under one roof"
        subtitle="A complete spectrum of medical specialities supported by modern diagnostics, 24/7 critical care and NABH-audited safety standards. Click any department to read in-depth treatment information."
      />

      <Section className="!pt-2">
        <div className="space-y-12">
          {departments.map((d, i) => {
            const reverse = i % 2 === 1;
            return (
              <FadeIn key={d.slug}>
                <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className={`relative ${reverse ? 'lg:order-2' : ''}`}>
                    <Link to={`/departments/${d.slug}`} className="block group">
                      <div className="rounded-4xl overflow-hidden shadow-glass-lg aspect-[4/3]">
                        <img
                          src={d.image}
                          alt={`${d.name} at ${hospital.shortName}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </Link>

                    {/* Tagline pill on image */}
                    {d.tagline && (
                      <div className="absolute -bottom-4 left-4 md:left-8 glass-strong px-4 py-2.5 rounded-2xl shadow-glass-lg max-w-[80%]">
                        <p className="text-xs md:text-sm font-semibold text-navy m-0">{d.tagline}</p>
                      </div>
                    )}

                    {/* Stat badge top right */}
                    {d.stats?.[0] && (
                      <div className="absolute top-4 right-4 glass-strong px-3.5 py-2 rounded-2xl shadow-glass">
                        <div className="text-base font-bold text-primary-700 leading-none">{d.stats[0].value}</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">{d.stats[0].label}</div>
                      </div>
                    )}
                  </div>

                  <div>
                    <span className="section-tag">Speciality · {d.name}</span>
                    <h2 className="mb-3 text-2xl md:text-3xl">{d.name}</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {(d.overview || d.description).split('. ').slice(0, 2).join('. ')}.
                    </p>

                    {d.treatments && (
                      <div className="mb-5">
                        <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">Common Treatments</div>
                        <div className="flex flex-wrap gap-2">
                          {d.treatments.slice(0, 6).map((t) => (
                            <span key={t} className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-medium">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      <Button to={`/departments/${d.slug}`} variant="primary" icon="fa-arrow-right">
                        Read More
                      </Button>
                      <Button to="/appointment" variant="outline" icon="fa-calendar-check">
                        Book a Consult
                      </Button>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="card max-w-3xl mx-auto text-center p-8 md:p-12">
          <h2 className="mb-3">Not sure which department to visit?</h2>
          <p className="text-slate-600 mb-6">Our care desk will guide you to the right specialist — based on your symptoms and reports.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={`tel:${hospital.phone}`} variant="primary" icon="fa-phone">Call {hospital.phoneDisplay}</Button>
            <Button to="/video-consultation" variant="outline" icon="fa-video">Video Consult</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
