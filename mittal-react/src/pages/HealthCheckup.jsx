import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Seo } from '../components/Seo';
import { PageHero, Section, SectionHeader, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';
import { healthPackages } from '../data/site';

export default function HealthCheckup() {
  const [selected, setSelected] = useState(null);
  const toast = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 800));
    toast({
      title: 'Booking received',
      message: `${selected?.name || 'Package'} requested for ${data.name}. We will call you shortly.`,
    });
    reset();
    setSelected(null);
  };

  return (
    <>
      <Seo title="Health Checkup Packages" path="/health-checkup" />
      <PageHero
        badge="Preventive Health"
        title="Health checkup packages to suit every need"
        subtitle="Comprehensive screening designed by our preventive-medicine team — value-priced and same-day reports."
      />

      <Section className="!pt-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthPackages.map((p, i) => (
            <FadeIn key={p.slug} delay={(i % 6) * 0.07}>
              <div className={`card card-hover h-full relative ${p.popular ? 'ring-2 ring-accent-500' : ''}`}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent-500 text-white text-xs font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="mb-1">{p.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{p.forWhom}</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-primary-700">₹{p.price.toLocaleString()}</span>
                  <span className="text-sm text-slate-500">/ person</span>
                </div>
                <div className="text-xs text-slate-500 mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-clock" /> Duration: {p.duration}
                </div>
                <ul className="space-y-1.5 mb-5">
                  {p.tests.map((t) => (
                    <li key={t} className="text-sm text-slate-700 flex items-start gap-2">
                      <i className="fa-solid fa-check text-success mt-0.5 text-xs" /> {t}
                    </li>
                  ))}
                </ul>
                <Button onClick={() => setSelected(p)} variant={p.popular ? 'primary' : 'outline'} className="w-full">
                  Book This Package
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {selected && (
        <Section>
          <div className="max-w-2xl mx-auto card">
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="section-tag">Booking</span>
                <h2 className="m-0">{selected.name}</h2>
                <p className="text-slate-500 text-sm mt-1">₹{selected.price.toLocaleString()} · {selected.duration}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-slate-500 hover:text-navy" aria-label="Close">
                <i className="fa-solid fa-xmark text-xl" />
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="grid sm:grid-cols-2 gap-4" noValidate>
              <input type="text" name="company" tabIndex="-1" autoComplete="off" className="hidden" />
              <div>
                <label className="form-label">Full Name *</label>
                <input {...register('name', { required: 'Required', minLength: { value: 2, message: 'Too short' } })} className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Your name" />
                {errors.name && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.name.message}</p>}
              </div>
              <div>
                <label className="form-label">Phone *</label>
                <input type="tel" inputMode="tel"
                  {...register('phone', { required: 'Required', pattern: { value: /^[6-9]\d{9}$/, message: 'Enter valid 10-digit mobile' } })}
                  className={`form-input ${errors.phone ? 'error' : ''}`} placeholder="10-digit mobile" maxLength={10} />
                {errors.phone && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.phone.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="form-label">Email</label>
                <input type="email"
                  {...register('email', { pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
                  className={`form-input ${errors.email ? 'error' : ''}`} placeholder="you@example.com" />
                {errors.email && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.email.message}</p>}
              </div>
              <div>
                <label className="form-label">Preferred Date *</label>
                <input type="date" {...register('date', { required: 'Required' })} className={`form-input ${errors.date ? 'error' : ''}`} min={new Date().toISOString().slice(0, 10)} />
              </div>
              <div>
                <label className="form-label">Time</label>
                <select {...register('time')} className="form-input" defaultValue="">
                  <option value="">Select a time slot</option>
                  <option>Morning (8 – 11 AM)</option>
                  <option>Mid-day (11 AM – 2 PM)</option>
                  <option>Afternoon (2 – 5 PM)</option>
                </select>
              </div>
              <div className="sm:col-span-2 flex items-start gap-2 text-sm text-slate-600">
                <input type="checkbox" {...register('consent', { required: 'Consent required' })} className="mt-1" />
                <span>I consent to be contacted by Mittal Hospital regarding this enquiry.</span>
              </div>
              {errors.consent && <p className="form-error sm:col-span-2"><i className="fa-solid fa-circle-exclamation" />{errors.consent.message}</p>}
              <div className="sm:col-span-2">
                <Button disabled={isSubmitting} variant="primary" size="lg" icon={isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'} className="w-full">
                  {isSubmitting ? 'Booking…' : 'Request Booking'}
                </Button>
              </div>
            </form>
          </div>
        </Section>
      )}

      <Section>
        <SectionHeader tag="Why Get Checked" title='Prevention is the <span class="text-gradient">best medicine</span>' />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: 'fa-shield-heart', title: 'Catch issues early', text: 'Most lifestyle conditions are silent. Annual checks find them before symptoms strike.' },
            { icon: 'fa-clock-rotate-left', title: 'Save time later', text: 'A 3-hour annual screen avoids weeks of treatment for late-stage disease.' },
            { icon: 'fa-hand-holding-medical', title: 'Personalised plan', text: 'Every patient gets a personalised follow-up plan from our physician team.' },
          ].map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.08}>
              <div className="card card-hover">
                <div className="w-12 h-12 rounded-2xl grid place-items-center text-white mb-4"
                  style={{ background: 'linear-gradient(135deg,#0a6cb8,#2ec4b6)' }}>
                  <i className={`fa-solid ${b.icon}`} />
                </div>
                <h3 className="mb-2">{b.title}</h3>
                <p className="text-sm text-slate-600 m-0">{b.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
