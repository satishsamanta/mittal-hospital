import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Seo } from '../components/Seo';
import { PageHero, Section, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';
import { careers } from '../data/site';

export default function Career() {
  const [selected, setSelected] = useState(null);
  const toast = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    if (data.company) return;
    await new Promise((r) => setTimeout(r, 900));
    toast({ title: 'Application received', message: `Thanks ${data.name}! Our HR team will be in touch.` });
    reset();
    setSelected(null);
  };

  return (
    <>
      <Seo title="Careers" path="/career" />
      <PageHero
        badge="Join Our Team"
        title="Build a career that heals."
        subtitle="We are growing fast — and we are always looking for clinicians, nurses, technicians and support staff who share our values."
      />

      <Section className="!pt-4">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="mb-4">Open Positions</h2>
            <div className="space-y-3">
              {careers.map((c, i) => (
                <FadeIn key={c.title} delay={i * 0.05}>
                  <div className="card card-hover flex flex-wrap items-center justify-between gap-4">
                    <div className="flex-1 min-w-[180px]">
                      <h3 className="text-base mb-1">{c.title}</h3>
                      <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                        <span><i className="fa-solid fa-building-user mr-1" /> {c.dept}</span>
                        <span><i className="fa-solid fa-location-dot mr-1" /> {c.location}</span>
                        <span><i className="fa-solid fa-briefcase mr-1" /> {c.exp}</span>
                        <span className="px-2 py-0.5 rounded-full bg-accent-100 text-accent-700 font-semibold">{c.type}</span>
                      </div>
                    </div>
                    <Button onClick={() => setSelected(c)} variant="primary" size="sm" icon="fa-paper-plane">Apply</Button>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.15}>
            <div className="card sticky top-24">
              <h3 className="mb-1">{selected ? `Apply: ${selected.title}` : 'Submit your CV'}</h3>
              <p className="text-sm text-slate-500 mb-5">
                {selected ? 'Fill the form below and we will get in touch.' : 'Don\'t see your role? Send us your CV and we will keep it on file.'}
              </p>
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4">
                <input type="text" tabIndex="-1" autoComplete="off" {...register('company')} className="hidden" />
                <div>
                  <label className="form-label">Full Name *</label>
                  <input {...register('name', { required: 'Required' })} className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Your name" />
                  {errors.name && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.name.message}</p>}
                </div>
                <div>
                  <label className="form-label">Email *</label>
                  <input type="email"
                    {...register('email', { required: 'Required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
                    className={`form-input ${errors.email ? 'error' : ''}`} placeholder="you@example.com" />
                  {errors.email && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.email.message}</p>}
                </div>
                <div>
                  <label className="form-label">Phone *</label>
                  <input type="tel" inputMode="tel" maxLength={10}
                    {...register('phone', { required: 'Required', pattern: { value: /^[6-9]\d{9}$/, message: 'Enter valid 10-digit mobile' } })}
                    className={`form-input ${errors.phone ? 'error' : ''}`} placeholder="10-digit mobile" />
                  {errors.phone && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="form-label">Position</label>
                  <input value={selected?.title || ''} readOnly={!!selected}
                    {...register('position')} className="form-input" placeholder="Position of interest" />
                </div>
                <div>
                  <label className="form-label">Years of Experience</label>
                  <input type="number" min={0} {...register('experience')} className="form-input" placeholder="e.g. 3" />
                </div>
                <div>
                  <label className="form-label">Upload CV (PDF / DOCX)</label>
                  <input type="file" accept=".pdf,.doc,.docx" {...register('cv')}
                    className="form-input file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-primary-50 file:text-primary-700 file:text-sm" />
                  <p className="form-hint">Max size 5 MB</p>
                </div>
                <div>
                  <label className="form-label">Cover Note</label>
                  <textarea rows={3} {...register('note')} className="form-input" placeholder="Tell us why you'd be a great fit (optional)" />
                </div>
                <label className="flex items-start gap-2 text-sm text-slate-700">
                  <input type="checkbox" {...register('consent', { required: 'Required' })} className="mt-1" />
                  <span>I consent to Mittal Hospital storing this CV for recruitment purposes.</span>
                </label>
                <Button disabled={isSubmitting} variant="primary" size="lg" icon={isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}>
                  {isSubmitting ? 'Submitting…' : 'Submit Application'}
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
