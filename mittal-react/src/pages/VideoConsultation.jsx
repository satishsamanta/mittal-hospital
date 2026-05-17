import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { Section, SectionHeader, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';
import { doctors, departments, hospital, videoConsultTestimonials } from '../data/site';

const TIME_BLOCKS = [
  { label: 'Morning', sub: '10:00 AM – 12:00 PM' },
  { label: 'Afternoon', sub: '2:00 PM – 4:00 PM' },
  { label: 'Evening', sub: '5:00 PM – 8:00 PM' },
];

const STEPS = [
  { icon: 'fa-user-doctor', title: 'Choose a Doctor', text: 'Browse our specialists and pick the one suited for your problem.', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80' },
  { icon: 'fa-calendar-check', title: 'Book an Appointment', text: 'Pick a date and a time block — morning, afternoon or evening.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80' },
  { icon: 'fa-credit-card', title: 'Make Payment', text: 'Secure online payment via UPI, card or net banking — or pay after the call.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80' },
  { icon: 'fa-video', title: 'Start Consultation', text: 'Join the secure video link sent on SMS and WhatsApp at your slot time.', image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=900&q=80' },
];

const WHY_US = [
  { icon: 'fa-house-laptop', title: 'Consult from Home', text: 'Skip travel, parking and waiting rooms. Talk to a specialist from your sofa.' },
  { icon: 'fa-shield-halved', title: '100% Private & Secure', text: 'End-to-end encrypted calls. Records stored under NABH information-security policy.' },
  { icon: 'fa-bolt', title: 'Quick Appointments', text: 'Most slots available within 24 hours — many on the same day.' },
  { icon: 'fa-file-prescription', title: 'Digital Prescription', text: 'E-prescription delivered to your email and WhatsApp instantly after the call.' },
  { icon: 'fa-earth-asia', title: 'Available Anywhere', text: 'Consult from your home, office, train or even abroad — all you need is internet.' },
  { icon: 'fa-headset', title: '24/7 Booking Support', text: 'Our care desk is always one call away to help you book or reschedule.' },
];

const STATS = [
  { num: '98%', label: 'Patient Satisfaction' },
  { num: '20+', label: 'Years of Excellence' },
  { num: '10K+', label: 'Consultations Done' },
  { num: '24/7', label: 'Booking Support' },
];

const FAQS = [
  { q: 'What do I need for a video consultation?', a: 'A phone, tablet or laptop with a working camera and microphone, plus a stable 4G or Wi-Fi internet connection. You can join from any modern browser — no app install needed.' },
  { q: 'Is my health data secure?', a: 'Absolutely — all video calls are end-to-end encrypted and your medical records are stored under our NABH-audited information-security policy. We never share data without your consent.' },
  { q: 'Can I get a prescription after the consultation?', a: 'Yes — the doctor will issue a digital prescription delivered instantly to your email and WhatsApp, valid at any registered pharmacy in India.' },
  { q: 'What if I miss my scheduled appointment?', a: 'You can reschedule once free of charge. If we cannot find a suitable slot within 7 days, we will issue a full refund.' },
  { q: 'Are all doctors verified?', a: 'Every doctor available for video consultation is a Mittal Hospital credentialed specialist with verified medical registration and a minimum 10 years of experience.' },
];

/* HERO */
function Hero({ onBookClick }) {
  return (
    <section className="relative pt-12 md:pt-16 pb-20 overflow-hidden">
      <div className="blob w-[34rem] h-[34rem] bg-accent-300/30 -top-32 -left-32" />
      <div className="blob w-[30rem] h-[30rem] bg-primary-300/30 top-10 -right-20" />
      <div className="container-px relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-tag"><i className="fa-solid fa-video mr-1.5" /> Online OPD · Telemedicine</span>
            <h1 className="mt-3 mb-5">
              Consult Experienced Doctors <span className="text-gradient">via Video Call</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-7">
              Get expert medical advice from the comfort of your home — talk to Mittal Hospital specialists with 20+ years of clinical experience. Secure, easy and same-day available.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={onBookClick} variant="primary" size="lg" icon="fa-calendar-check">Book Now</Button>
              <Button href={`tel:${hospital.phone}`} variant="glass" size="lg" icon="fa-phone">{hospital.phoneDisplay}</Button>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8 max-w-md text-sm">
              <div className="flex items-center gap-2 text-slate-600"><i className="fa-solid fa-circle-check text-success" /> Verified doctors</div>
              <div className="flex items-center gap-2 text-slate-600"><i className="fa-solid fa-circle-check text-success" /> NABH-audited</div>
              <div className="flex items-center gap-2 text-slate-600"><i className="fa-solid fa-circle-check text-success" /> Encrypted</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="relative">
            <div className="rounded-4xl overflow-hidden shadow-glass-lg aspect-[4/5] sm:aspect-square lg:aspect-[5/6]">
              <img
                src="https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=900&q=80"
                alt="Doctor on a video consultation"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="glass-strong absolute top-5 -left-3 md:-left-6 px-4 py-3 rounded-2xl shadow-glass-lg flex items-center gap-3 animate-float">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success" />
              </span>
              <div className="text-sm">
                <div className="font-bold text-navy">12 doctors online</div>
                <div className="text-xs text-slate-500">Avg wait · 5 min</div>
              </div>
            </div>
            <div className="glass-strong absolute -bottom-5 -right-3 md:-right-8 px-4 py-3 rounded-2xl shadow-glass-lg flex items-center gap-3 animate-float-reverse">
              <div className="w-10 h-10 rounded-xl grid place-items-center text-white"
                style={{ background: 'linear-gradient(135deg,#0a6cb8,#2ec4b6)' }}>
                <i className="fa-solid fa-file-prescription" />
              </div>
              <div className="text-sm">
                <div className="font-bold text-navy">E-prescription</div>
                <div className="text-xs text-slate-500">Delivered in 5 min</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* SPECIALISTS AVAILABLE NOW */
function SpecialistsGrid() {
  const live = doctors.filter((d) => d.online).slice(0, 6);
  return (
    <Section className="!pt-4">
      <SectionHeader
        tag="Live Now"
        title='Specialists Available <span class="text-gradient">Now</span>'
        subtitle="Verified Mittal Hospital doctors ready to consult you over a secure video call."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {live.map((d, i) => (
          <FadeIn key={d.name} delay={(i % 6) * 0.06}>
            <article className="card card-hover p-0 overflow-hidden h-full">
              <div className="relative aspect-[5/4] overflow-hidden">
                <img src={d.image} alt={d.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-success text-xs font-bold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                  </span>
                  Live · Online
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-primary-700 text-xs font-bold">
                  <i className="fa-solid fa-shield-check mr-1" /> Verified
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base mb-0.5">{d.name}</h3>
                <span className="text-sm text-accent-600 font-semibold">{d.speciality}</span>
                <div className="text-xs text-slate-500 mt-1">{d.qualification}</div>
                <div className="flex items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <span><i className="fa-solid fa-clock text-primary-500" /> Avg wait · 5 min</span>
                  <span>{d.experience}+ yrs</span>
                </div>
                <Button to="#book" variant="primary" size="sm" icon="fa-video" className="w-full mt-4">
                  Consult Now
                </Button>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* HOW IT WORKS */
function HowItWorks() {
  return (
    <Section>
      <SectionHeader
        tag="How It Works"
        title='4 simple <span class="text-gradient">steps</span>'
        subtitle="From booking to consultation — the whole journey takes less than a minute of your time."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STEPS.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.08}>
            <article className="card card-hover p-0 overflow-hidden h-full relative">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              </div>
              <div className="absolute top-4 left-4 w-9 h-9 rounded-full grid place-items-center text-white font-bold shadow-glow-primary"
                style={{ background: 'linear-gradient(135deg,#0a6cb8,#2ec4b6)' }}>
                {i + 1}
              </div>
              <div className="p-5">
                <h3 className="mb-1.5">{s.title}</h3>
                <p className="text-sm text-slate-600 m-0">{s.text}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* BOOKING FORM */
function BookingForm({ submittedRef, onSubmitted }) {
  const toast = useToast();
  const { register, handleSubmit, watch, setValue, reset, formState: { errors, isSubmitting } } = useForm({
    mode: 'onBlur',
    defaultValues: { department: '', doctor: '', time: 'Morning' },
  });

  const dept = watch('department');
  const filteredDocs = useMemo(() => {
    if (!dept) return doctors.filter((d) => d.online);
    const d = departments.find((x) => x.name === dept);
    if (!d) return [];
    return doctors.filter((doc) => doc.dept === d.slug);
  }, [dept]);

  const onSubmit = async (data) => {
    if (data.company) return;
    await new Promise((r) => setTimeout(r, 900));
    const ref = `VC-${Date.now().toString().slice(-7)}`;
    onSubmitted({ ref, ...data });
    toast({ title: 'Booking confirmed', message: `Reference ${ref}. Video link will arrive 10 minutes before your slot.` });
    reset({ department: '', doctor: '', time: 'Morning' });
  };

  if (submittedRef) {
    return (
      <Section id="book">
        <div className="max-w-xl mx-auto card text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
            className="w-20 h-20 rounded-full mx-auto mb-5 grid place-items-center text-white text-3xl"
            style={{ background: 'linear-gradient(135deg,#06a77d,#34d399)' }}>
            <i className="fa-solid fa-video" />
          </motion.div>
          <h2 className="mb-2">Booking confirmed</h2>
          <p className="text-slate-600 mb-5">Your video consultation link will arrive on SMS and WhatsApp 10 minutes before your slot.</p>
          <div className="rounded-2xl bg-slate-50 p-5 text-left text-sm space-y-1 mb-6">
            <div><span className="text-slate-500">Reference:</span> <strong>{submittedRef.ref}</strong></div>
            <div><span className="text-slate-500">Doctor:</span> {submittedRef.doctor || 'Next available'}</div>
            <div><span className="text-slate-500">Slot:</span> {submittedRef.date} · {submittedRef.time}</div>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="book">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
        <FadeIn>
          <div className="relative rounded-4xl overflow-hidden h-full min-h-[440px]">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80"
              alt="Doctor on video call" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/95 via-primary-800/75 to-primary-600/40" />
            <div className="relative h-full p-8 md:p-10 text-white flex flex-col justify-end">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 backdrop-blur border border-white/25 mb-3 w-fit">
                Book in 60 seconds
              </span>
              <h2 className="text-white mb-3">Book Video Consultation with a Doctor</h2>
              <p className="text-white/85 mb-5">Pick your slot — we will send the encrypted video-call link to your phone 10 minutes before the consultation.</p>
              <ul className="space-y-2 text-sm text-white/85">
                <li><i className="fa-solid fa-circle-check text-accent-300 mr-2" /> Pay after the call (optional)</li>
                <li><i className="fa-solid fa-circle-check text-accent-300 mr-2" /> Free reschedule</li>
                <li><i className="fa-solid fa-circle-check text-accent-300 mr-2" /> E-prescription on WhatsApp</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="card">
            <h3 className="mb-1">Appointment Booking Form</h3>
            <p className="text-sm text-slate-500 mb-5">All fields with * are required.</p>
            <input type="text" tabIndex="-1" autoComplete="off" {...register('company')} className="hidden" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
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
                <label className="form-label">Speciality</label>
                <select {...register('department')}
                  onChange={(e) => { setValue('department', e.target.value); setValue('doctor', ''); }}
                  className="form-input" defaultValue="">
                  <option value="">Any speciality</option>
                  {departments.map((d) => <option key={d.slug}>{d.name}</option>)}
                </select>
              </div>
              <div>
                <label className="form-label">Select Doctor</label>
                <select {...register('doctor')} className="form-input" defaultValue="">
                  <option value="">Next available</option>
                  {filteredDocs.map((d) => <option key={d.name}>{d.name}</option>)}
                </select>
              </div>

              <div>
                <label className="form-label">Date *</label>
                <input type="date" {...register('date', { required: 'Required' })}
                  className={`form-input ${errors.date ? 'error' : ''}`}
                  min={new Date().toISOString().slice(0, 10)} />
              </div>
              <div>
                <label className="form-label">Consultation Time *</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {TIME_BLOCKS.map((t) => {
                    const v = watch('time');
                    return (
                      <label key={t.label} className={`cursor-pointer text-center px-2 py-2 rounded-xl border-2 transition-all
                        ${v === t.label ? 'border-primary-500 bg-primary-50/60' : 'border-slate-200 hover:border-primary-300'}`}>
                        <input type="radio" value={t.label} {...register('time')} className="sr-only" />
                        <div className="text-xs font-bold text-navy">{t.label}</div>
                        <div className="text-[9px] text-slate-500 mt-0.5">{t.sub}</div>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="form-label">Brief reason for consultation</label>
                <textarea rows={3} {...register('reason')} className="form-input" placeholder="Optional — helps the doctor prepare." />
              </div>

              <label className="sm:col-span-2 flex items-start gap-2 text-sm text-slate-700">
                <input type="checkbox" {...register('consent', { required: 'Please accept' })} className="mt-1" />
                <span>I accept the <Link to="/privacy" className="text-primary-600 underline">privacy policy</Link> and consent to be contacted for this consultation.</span>
              </label>
              {errors.consent && <p className="form-error sm:col-span-2"><i className="fa-solid fa-circle-exclamation" />{errors.consent.message}</p>}
            </div>

            <div className="flex gap-3 mt-5">
              <Button type="button" onClick={() => reset()} variant="outline" size="lg" className="flex-1">Cancel</Button>
              <Button disabled={isSubmitting} variant="primary" size="lg"
                icon={isSubmitting ? 'fa-spinner fa-spin' : 'fa-circle-check'} className="flex-1">
                {isSubmitting ? 'Confirming…' : 'Confirm Booking'}
              </Button>
            </div>
          </form>
        </FadeIn>
      </div>
    </Section>
  );
}

/* WHY US */
function WhyUs() {
  return (
    <Section>
      <SectionHeader
        tag="Why Choose Us"
        title='Why our patients <span class="text-gradient">prefer video consultation</span>'
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {WHY_US.map((w, i) => (
          <FadeIn key={w.title} delay={(i % 6) * 0.06}>
            <div className="card card-hover h-full">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 grid place-items-center mb-4">
                <i className={`fa-solid ${w.icon} text-lg`} />
              </div>
              <h3 className="mb-2">{w.title}</h3>
              <p className="text-sm text-slate-600 m-0">{w.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="glass-strong rounded-4xl p-6 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.08}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient leading-none">{s.num}</div>
              <div className="text-xs md:text-sm text-slate-500 mt-1.5">{s.label}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* TESTIMONIALS */
function Testimonials() {
  return (
    <Section>
      <SectionHeader
        tag="Patient Stories"
        title='What our <span class="text-gradient">patients say</span>'
      />
      <div className="grid md:grid-cols-3 gap-6">
        {videoConsultTestimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.08}>
            <article className="card card-hover h-full">
              <div className="text-accent-500 mb-3">
                {Array.from({ length: t.rating }).map((_, k) => <i key={k} className="fa-solid fa-star text-sm mr-0.5" />)}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-navy text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.location}</div>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* FAQ */
function Faq() {
  return (
    <Section>
      <SectionHeader
        tag="FAQ"
        title='Frequently Asked <span class="text-gradient">Questions</span>'
      />
      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS.map((f, i) => (
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

/* SKIP-WAITING CTA */
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
            <p className="text-white/85 text-lg">Register online and book your video consultation in under a minute.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button to="#book" variant="glass" size="lg" icon="fa-video" className="!text-primary-700">Book Video Consult</Button>
            <a href={`tel:${hospital.phone}`} className="btn btn-lg !bg-white !text-primary-700 hover:!bg-white shadow-md">
              <i className="fa-solid fa-phone" /> {hospital.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function VideoConsultation() {
  const [submitted, setSubmitted] = useState(null);

  return (
    <>
      <Seo
        title="Video Consultation"
        path="/video-consultation"
        description="Consult experienced Mittal Hospital specialists over a secure video call — verified doctors, e-prescription delivered instantly, available same day."
      />
      <Hero onBookClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })} />
      <SpecialistsGrid />
      <HowItWorks />
      <BookingForm submittedRef={submitted} onSubmitted={setSubmitted} />
      <WhyUs />
      <Testimonials />
      <Faq />
      <SkipWaitingBanner />
    </>
  );
}
