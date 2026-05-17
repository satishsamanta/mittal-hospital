import { Link, Navigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Seo } from '../components/Seo';
import { Section, SectionHeader, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';
import { departments, doctors, hospital } from '../data/site';

/* 1. Hero — large image banner with title overlay */
function HeroBanner({ dept }) {
  return (
    <section className="relative h-[58vh] min-h-[420px] max-h-[560px] overflow-hidden">
      <img
        src={dept.heroImage || dept.image}
        alt={`${dept.name} at ${hospital.name}`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

      <div className="relative h-full container-px flex items-end pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="max-w-3xl text-white"
        >
          <nav aria-label="Breadcrumb" className="text-sm text-white/75 mb-3">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/departments" className="hover:text-white">Departments</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{dept.name}</span>
          </nav>
          <h1 className="text-white mb-2">{dept.name}</h1>
          <p className="text-xl md:text-2xl text-white/90 font-display font-medium">
            Best {dept.name} Hospital in Ajmer
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* 2. Department Introduction — definition + side image */
function IntroSection({ dept }) {
  return (
    <Section>
      <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
        <FadeIn>
          <span className="section-tag">Department</span>
          <h2 className="mb-4">What is <span className="text-gradient">{dept.name}?</span></h2>
          <p className="text-slate-600 leading-relaxed text-[1.02rem] mb-4">{dept.overview}</p>
          <p className="text-slate-600 leading-relaxed">{dept.description}</p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="relative">
            <div className="rounded-4xl overflow-hidden shadow-glass-lg aspect-[4/3]">
              <img src={dept.image} alt={`${dept.name} care at Mittal Hospital`}
                className="w-full h-full object-cover" loading="lazy" />
            </div>
            {dept.stats?.[0] && (
              <div className="glass-strong absolute -bottom-5 -left-3 md:-left-6 px-5 py-3 rounded-2xl shadow-glass-lg">
                <div className="text-2xl font-bold text-primary-700 leading-none">{dept.stats[0].value}</div>
                <div className="text-xs text-slate-500 mt-1">{dept.stats[0].label}</div>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

/* 3. Common Diseases & Conditions — image grid */
function ConditionsSection({ dept }) {
  if (!dept.conditions?.length) return null;
  return (
    <Section>
      <SectionHeader
        tag="What We Treat"
        title='Common Diseases & <span class="text-gradient">Conditions</span>'
        subtitle={`A few of the many ${dept.name.toLowerCase()} conditions our specialists diagnose and treat every day.`}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {dept.conditions.map((c, i) => (
          <FadeIn key={c.name} delay={(i % 6) * 0.05}>
            <article className="card card-hover p-0 overflow-hidden h-full">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={c.image} alt={c.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="text-lg mb-2">{c.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed m-0">{c.text}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* 4. What We Offer — clean bulleted services list with side image */
function WhatWeOfferSection({ dept }) {
  if (!dept.proceduresDetailed?.length && !dept.treatments?.length) return null;
  const services = dept.proceduresDetailed?.map((p) => p.name) || dept.treatments;
  const support = [
    'Outpatient consultation (OPD)',
    '24/7 emergency response',
    'In-patient admission & ward stay',
    'In-house pathology & radiology',
    'Pharmacy & blood bank support',
    'Critical care (ICU/CCU) when needed',
  ];
  return (
    <Section>
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
        <FadeIn>
          <div className="rounded-4xl overflow-hidden shadow-glass-lg aspect-[4/3] sticky top-24">
            <img
              src={dept.gallery?.[0] || dept.image}
              alt={`${dept.name} care`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <span className="section-tag">Our Services</span>
          <h2 className="mb-3">What We <span className="text-gradient">Offer</span></h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Our {dept.name.toLowerCase()} team delivers the complete spectrum of clinical, surgical and supportive care — under one roof, by a coordinated team.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
            {services.map((t) => (
              <div key={t} className="flex items-start gap-2.5 text-slate-700">
                <span className="w-5 h-5 shrink-0 rounded-full bg-accent-100 grid place-items-center text-accent-700 mt-0.5">
                  <i className="fa-solid fa-check text-[10px]" />
                </span>
                <span className="text-sm leading-snug">{t}</span>
              </div>
            ))}
          </div>

          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 mt-6">Also included</div>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
            {support.map((s) => (
              <div key={s} className="flex items-start gap-2.5 text-slate-600 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2" />
                <span>{s}</span>
              </div>
            ))}
          </div>

          <Button to="/appointment" variant="primary" icon="fa-calendar-check">Book an Appointment</Button>
        </FadeIn>
      </div>
    </Section>
  );
}

/* 5. Callback Request Form */
function CallbackFormSection({ dept }) {
  const toast = useToast();
  const deptDoctors = doctors.filter((d) => d.dept === dept.slug);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    if (data.company) return;
    await new Promise((r) => setTimeout(r, 700));
    toast({ title: 'Callback requested', message: `Our ${dept.name} desk will call ${data.phone} shortly.` });
    reset();
  };

  return (
    <Section>
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-stretch">
        <FadeIn>
          <div className="relative rounded-4xl overflow-hidden h-full min-h-[400px]">
            <img
              src={dept.gallery?.[1] || dept.image}
              alt={`${dept.name} consultation`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/85 via-navy/60 to-navy/30" />
            <div className="relative h-full flex flex-col justify-end p-8 md:p-10 text-white">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 backdrop-blur border border-white/25 mb-3 w-fit">
                Free callback
              </span>
              <h2 className="text-white mb-3">Talk to a {dept.name} specialist</h2>
              <p className="text-white/85 mb-6 max-w-md">
                Leave your number and our {dept.name.toLowerCase()} desk will call you within 30 minutes during working hours.
              </p>
              <ul className="space-y-2 text-sm text-white/85">
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-accent-300" /> No referral required</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-accent-300" /> 100% confidential</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-accent-300" /> Transparent pricing</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="card h-full">
            <h3 className="mb-1">Request a Callback</h3>
            <p className="text-sm text-slate-500 mb-5">We will get back within 30 minutes during working hours.</p>
            <input type="text" tabIndex="-1" autoComplete="off" {...register('company')} className="hidden" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="form-label">Full Name *</label>
                <input {...register('name', { required: 'Required' })}
                  className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Your name" autoComplete="name" />
                {errors.name && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.name.message}</p>}
              </div>
              <div>
                <label className="form-label">Phone *</label>
                <input type="tel" inputMode="tel" maxLength={10}
                  {...register('phone', { required: 'Required', pattern: { value: /^[6-9]\d{9}$/, message: '10-digit mobile' } })}
                  className={`form-input ${errors.phone ? 'error' : ''}`} placeholder="10-digit mobile" />
                {errors.phone && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.phone.message}</p>}
              </div>
              <div>
                <label className="form-label">Email</label>
                <input type="email"
                  {...register('email', { pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
                  className={`form-input ${errors.email ? 'error' : ''}`} placeholder="you@example.com" />
              </div>
              <div>
                <label className="form-label">Doctor (optional)</label>
                <select {...register('doctor')} className="form-input" defaultValue="">
                  <option value="">Any specialist</option>
                  {deptDoctors.map((d) => <option key={d.name}>{d.name}</option>)}
                </select>
              </div>
              <div>
                <label className="form-label">Preferred Date</label>
                <input type="date" {...register('date')} className="form-input"
                  min={new Date().toISOString().slice(0, 10)} />
              </div>
              <div>
                <label className="form-label">Preferred Time</label>
                <select {...register('time')} className="form-input" defaultValue="">
                  <option value="">Any time</option>
                  <option>Morning (10 AM – 12 PM)</option>
                  <option>Afternoon (12 – 4 PM)</option>
                  <option>Evening (4 – 7 PM)</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="form-label">Brief reason (optional)</label>
                <textarea rows={3} {...register('reason')} className="form-input" placeholder="e.g. follow-up after surgery / second opinion / new symptoms" />
              </div>
              <label className="sm:col-span-2 flex items-start gap-2 text-sm text-slate-700">
                <input type="checkbox" {...register('consent', { required: 'Please accept' })} className="mt-1" />
                <span>I agree to be contacted by Mittal Hospital and accept the <Link to="/privacy" className="text-primary-600 underline">privacy policy</Link>.</span>
              </label>
              {errors.consent && <p className="form-error sm:col-span-2"><i className="fa-solid fa-circle-exclamation" />{errors.consent.message}</p>}
            </div>
            <Button disabled={isSubmitting} variant="primary" size="lg"
              icon={isSubmitting ? 'fa-spinner fa-spin' : 'fa-phone'} className="w-full mt-5">
              {isSubmitting ? 'Sending…' : 'Request Callback'}
            </Button>
          </form>
        </FadeIn>
      </div>
    </Section>
  );
}

/* 6. Why Choose Us — image cards */
function WhyChooseSection({ dept }) {
  if (!dept.whyChoose?.length) return null;
  return (
    <Section>
      <SectionHeader
        tag="Why Mittal Hospital"
        title={`What makes our <span class="text-gradient">${dept.name}</span> different`}
      />
      <div className="grid md:grid-cols-3 gap-6">
        {dept.whyChoose.map((w, i) => (
          <FadeIn key={w.title} delay={i * 0.08}>
            <article className="card card-hover p-0 overflow-hidden h-full">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={w.image} alt={w.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="mb-2">{w.title}</h3>
                <p className="text-sm text-slate-600 m-0">{w.text}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* 7. Our Specialists */
function DoctorsSection({ dept, deptDoctors }) {
  if (!deptDoctors.length) return null;
  return (
    <Section>
      <SectionHeader
        tag="Our Specialists"
        title={`Meet the doctors of <span class="text-gradient">${dept.name}</span>`}
        subtitle="NABH-credentialed clinicians dedicated to your care."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {deptDoctors.map((d, i) => (
          <FadeIn key={d.name} delay={i * 0.06}>
            <article className="card card-hover p-0 overflow-hidden h-full">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={d.image} alt={d.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur text-primary-700">
                  {d.experience}+ yrs
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base mb-0.5">{d.name}</h3>
                <span className="text-sm text-accent-600 font-semibold">{d.speciality}</span>
                <div className="text-xs text-slate-500 mt-1">{d.qualification}</div>
                <div className="text-xs text-slate-500 mt-1.5">{d.opd}</div>
                <Button to="/appointment" variant="primary" size="sm" className="w-full mt-4">Book Appointment</Button>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* 8. FAQ accordion */
function FaqSection({ dept }) {
  if (!dept.faqs?.length) return null;
  return (
    <Section>
      <SectionHeader
        tag="Patient FAQs"
        title='Frequently Asked <span class="text-gradient">Questions</span>'
      />
      <div className="max-w-3xl mx-auto space-y-3">
        {dept.faqs.map((f, i) => (
          <FadeIn key={f.q} delay={i * 0.04}>
            <details className="card cursor-pointer group">
              <summary className="font-semibold text-navy flex items-center justify-between list-none gap-4">
                <span>{f.q}</span>
                <span className="w-7 h-7 shrink-0 rounded-full bg-primary-50 text-primary-600 grid place-items-center group-open:bg-primary-500 group-open:text-white transition-colors">
                  <i className="fa-solid fa-plus group-open:rotate-45 transition-transform text-xs" />
                </span>
              </summary>
              <p className="text-slate-600 mt-3 text-sm leading-relaxed">{f.a}</p>
            </details>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* 9. "Save Time. Feel Better. Skip The Waiting!" CTA banner */
function SkipWaitingBanner() {
  return (
    <Section className="!py-10">
      <div className="relative rounded-4xl overflow-hidden">
        <img src={hospital.buildingMain} alt="" aria-hidden
          className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/85 to-primary-700/55" />
        <div className="relative p-8 md:p-14 text-white grid md:grid-cols-[1.5fr_1fr] gap-6 items-center">
          <div>
            <h2 className="text-white mb-2">Save Time. Feel Better. Skip The Waiting!</h2>
            <p className="text-white/85 text-lg">Register online and book your appointment in 60 seconds — no calls, no queue.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button to="/appointment" variant="glass" size="lg" icon="fa-calendar-check" className="!text-primary-700">Book Appointment</Button>
            <a href={`tel:${hospital.phone}`} className="btn btn-lg !bg-white !text-primary-700 hover:!bg-white shadow-md">
              <i className="fa-solid fa-phone" /> {hospital.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function DepartmentDetail() {
  const { slug } = useParams();
  const dept = departments.find((d) => d.slug === slug);
  if (!dept) return <Navigate to="/departments" replace />;
  const deptDoctors = doctors.filter((d) => d.dept === slug);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalSpecialty',
    name: dept.name,
    description: dept.overview || dept.description,
    medicalProcedure: (dept.proceduresDetailed || []).map((p) => ({
      '@type': 'MedicalProcedure', name: p.name, description: p.text,
    })),
  };

  return (
    <>
      <Seo
        title={`${dept.name} Hospital in Ajmer`}
        path={`/departments/${dept.slug}`}
        description={dept.overview?.slice(0, 158) || dept.short}
        image={dept.heroImage || dept.image}
        schema={schema}
      />

      <HeroBanner dept={dept} />
      <IntroSection dept={dept} />
      <ConditionsSection dept={dept} />
      <WhatWeOfferSection dept={dept} />
      <CallbackFormSection dept={dept} />
      <WhyChooseSection dept={dept} />
      <DoctorsSection dept={dept} deptDoctors={deptDoctors} />
      <FaqSection dept={dept} />
      <SkipWaitingBanner />
    </>
  );
}
