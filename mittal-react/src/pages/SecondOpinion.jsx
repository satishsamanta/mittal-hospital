import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { Section, SectionHeader, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';
import { departments, doctors, hospital, secondOpinionTestimonials } from '../data/site';

const CREDENTIALS = [
  { icon: 'fa-clock', title: 'Report Delivery', value: 'Within 24 Hours' },
  { icon: 'fa-language', title: 'Languages', value: 'English, Hindi, Regional' },
  { icon: 'fa-laptop-medical', title: 'Mode', value: 'Online & In-Person' },
  { icon: 'fa-award', title: 'Years of Excellence', value: '20+' },
  { icon: 'fa-users', title: 'Patients Served', value: '5,00,000+' },
  { icon: 'fa-stethoscope', title: 'Specialties', value: '12+' },
];

const BENEFITS = [
  { icon: 'fa-circle-check', title: 'Confirm Your Diagnosis', text: 'Studies show that 21% of patients receive a different or refined diagnosis after a second opinion. Make sure your diagnosis is right.' },
  { icon: 'fa-clipboard-list', title: 'Explore Alternative Treatments', text: 'Sometimes there are gentler, less invasive options. A second opinion brings the full range of choices to the table.' },
  { icon: 'fa-shield-halved', title: 'Avoid Unnecessary Surgery', text: 'Many major surgeries can be safely delayed or avoided. A second view gives you the confidence to choose.' },
  { icon: 'fa-heart', title: 'Peace of Mind', text: 'A major diagnosis is stressful enough. A trusted second opinion brings clarity and confidence to your decisions.' },
];

const RESEARCH = [
  { num: '88%', text: 'of second opinions led to a refined or confirmed diagnosis', src: 'Mayo Clinic Study, 2017' },
  { num: '21%', text: 'of patients received a completely different diagnosis', src: 'Journal of Evaluation in Clinical Practice' },
  { num: '3 in 5', text: 'patients reported feeling more confident about their treatment', src: 'BMJ Open, 2020' },
];

const STEPS = [
  { icon: 'fa-upload', title: 'Submit Your Records', text: 'Upload your medical reports, imaging scans and discharge summaries through our secure portal.', image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80' },
  { icon: 'fa-user-doctor', title: 'Expert Review', text: 'A senior specialist with 15+ years of experience reviews your case in depth.', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80' },
  { icon: 'fa-file-medical', title: 'Receive Report', text: 'A detailed, written second opinion delivered to your email within 24 hours.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80' },
  { icon: 'fa-comments', title: 'Optional Consultation', text: 'If you wish, schedule a follow-up video or in-person discussion with the specialist.', image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=900&q=80' },
];

const FAQS = [
  { q: 'How quickly will I receive my second opinion report?', a: 'Most second opinion reports are delivered within 24 hours. Complex cases (e.g. cancer requiring a tumor-board review) may take 3–5 working days.' },
  { q: 'What documents do I need to submit?', a: 'Recent diagnosis reports, lab results, imaging scans (X-rays, MRI, CT or PET), biopsy reports, discharge summaries and a current medication list. PDF, JPG, PNG and DICOM formats are accepted.' },
  { q: 'Is the service available for international patients?', a: 'Yes — we welcome patients from the Middle East, Africa, Europe and Southeast Asia. We offer translator support and visa-letter assistance for in-person follow-up.' },
  { q: 'How much does a second opinion cost?', a: 'Pricing depends on the speciality and complexity. We provide a transparent quote up front. Tumor-board reviews for cancer cases cost more than single-specialist reviews. Many insurance plans cover the cost.' },
  { q: 'Is my information confidential?', a: 'Absolutely. Our systems are NABH-audited and information is shared only with the assigned specialist. We never share data without your written consent.' },
  { q: 'Can I talk to the specialist after receiving the report?', a: 'Yes — after the written report, you can book an optional follow-up video or in-person consultation to discuss the opinion in detail.' },
];

/* HERO */
function Hero({ onSubmitRef, onHowRef }) {
  return (
    <section className="relative pt-12 md:pt-16 pb-20 overflow-hidden">
      <div className="blob w-[34rem] h-[34rem] bg-accent-300/30 -top-32 -left-32" />
      <div className="blob w-[30rem] h-[30rem] bg-primary-300/30 top-10 -right-20" />
      <div className="container-px relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-tag"><i className="fa-solid fa-clipboard-check mr-1.5" /> Expert Second Opinion</span>
            <h1 className="mt-3 mb-5">
              Get a Trusted Second Opinion from <span className="text-gradient">Top Specialists</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-7">
              Major medical decision? Have your reports reviewed by a senior Mittal Hospital specialist. Receive a thorough, evidence-based written opinion within 24 hours — comfortably, confidentially, from anywhere in the world.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => onSubmitRef.current?.scrollIntoView({ behavior: 'smooth' })} variant="primary" size="lg" icon="fa-paper-plane">
                Request Second Opinion
              </Button>
              <Button onClick={() => onHowRef.current?.scrollIntoView({ behavior: 'smooth' })} variant="outline" size="lg" icon="fa-circle-info">
                How It Works
              </Button>
            </div>
            <ul className="grid grid-cols-2 gap-2 mt-7 text-sm text-slate-600">
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-success" /> No referral required</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-success" /> 100% confidential</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-success" /> International patients welcome</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-success" /> Detailed written report</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-success" /> Video consultation available</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-success" /> Transparent pricing</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="relative">
            <div className="rounded-4xl overflow-hidden shadow-glass-lg aspect-[4/5] sm:aspect-square lg:aspect-[5/6]">
              <img
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=900&q=80"
                alt="Specialist reviewing reports"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="glass-strong absolute top-5 -left-3 md:-left-6 px-4 py-3 rounded-2xl shadow-glass-lg flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-xl grid place-items-center text-white"
                style={{ background: 'linear-gradient(135deg,#0a6cb8,#2ec4b6)' }}>
                <i className="fa-solid fa-clock" />
              </div>
              <div className="text-sm">
                <div className="font-bold text-navy">24 hour delivery</div>
                <div className="text-xs text-slate-500">Written specialist opinion</div>
              </div>
            </div>
            <div className="glass-strong absolute -bottom-5 -right-3 md:-right-8 px-4 py-3 rounded-2xl shadow-glass-lg flex items-center gap-3 animate-float-reverse">
              <div className="w-10 h-10 rounded-xl grid place-items-center text-white"
                style={{ background: 'linear-gradient(135deg,#06a77d,#34d399)' }}>
                <i className="fa-solid fa-shield-halved" />
              </div>
              <div className="text-sm">
                <div className="font-bold text-navy">100% Confidential</div>
                <div className="text-xs text-slate-500">NABH-audited security</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* CREDENTIALS GRID */
function CredentialsGrid() {
  return (
    <Section className="!pt-4">
      <div className="glass-strong rounded-4xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {CREDENTIALS.map((c, i) => (
          <FadeIn key={c.title} delay={(i % 6) * 0.05}>
            <div className="text-center md:text-left">
              <div className="w-10 h-10 mx-auto md:mx-0 rounded-2xl bg-primary-50 text-primary-700 grid place-items-center mb-2">
                <i className={`fa-solid ${c.icon}`} />
              </div>
              <div className="text-xs text-slate-500">{c.title}</div>
              <div className="text-base font-bold text-navy leading-tight">{c.value}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* WHY IT MATTERS + BENEFITS */
function WhyItMatters() {
  return (
    <Section>
      <SectionHeader
        tag="Why It Matters"
        title='Medical decisions can have <span class="text-gradient">life-changing consequences</span>'
        subtitle="A second opinion is not a sign of distrust — it is good medicine. Here is what a thorough specialist review brings to the table."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {BENEFITS.map((b, i) => (
          <FadeIn key={b.title} delay={(i % 4) * 0.08}>
            <article className="card card-hover h-full">
              <div className="w-12 h-12 rounded-2xl bg-success/10 text-success grid place-items-center mb-4">
                <i className={`fa-solid ${b.icon} text-xl`} />
              </div>
              <h3 className="mb-2">{b.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed m-0">{b.text}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* RESEARCH STATS */
function ResearchStats() {
  return (
    <Section>
      <SectionHeader
        tag="What the Research Says"
        title='Evidence behind <span class="text-gradient">second opinions</span>'
        subtitle="Independent studies show second opinions consistently change patient outcomes."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {RESEARCH.map((r, i) => (
          <FadeIn key={r.src} delay={i * 0.1}>
            <article className="relative card overflow-hidden h-full">
              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br from-primary-300/30 to-accent-300/30 blur-2xl" />
              <div className="relative">
                <div className="text-5xl md:text-6xl font-display font-bold text-gradient leading-none mb-3">{r.num}</div>
                <p className="text-slate-700 font-medium mb-4">{r.text}</p>
                <p className="text-xs text-slate-500 italic">Source: {r.src}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div className="card mt-8 max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 mx-auto rounded-full grid place-items-center text-white mb-4"
            style={{ background: 'linear-gradient(135deg,#0a6cb8,#2ec4b6)' }}>
            <i className="fa-solid fa-shield-halved text-xl" />
          </div>
          <h3 className="mb-2">Our Promise</h3>
          <p className="text-slate-600 leading-relaxed">
            Every second opinion at Mittal Hospital is reviewed by a board-certified senior consultant with a minimum of <strong className="text-navy">15 years of clinical experience</strong> — never by a junior or trainee.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}

/* HOW IT WORKS */
function HowItWorks({ innerRef }) {
  return (
    <Section>
      <div ref={innerRef}>
        <SectionHeader
          tag="How It Works"
          title='Four simple <span class="text-gradient">steps</span>'
          subtitle="Submit your reports today — receive a specialist opinion tomorrow."
        />
      </div>
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

/* TESTIMONIALS */
function Testimonials() {
  return (
    <Section>
      <SectionHeader
        tag="Patient Stories"
        title='How second opinions <span class="text-gradient">changed lives</span>'
      />
      <div className="grid md:grid-cols-3 gap-6">
        {secondOpinionTestimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.08}>
            <article className="card card-hover h-full">
              <div className="text-accent-500 mb-3">
                {Array.from({ length: t.rating }).map((_, k) => <i key={k} className="fa-solid fa-star text-sm mr-0.5" />)}
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent-100 text-accent-700 mb-3">
                {t.specialty}
              </span>
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

/* TRUST BAND — final CTA */
function TrustBand() {
  return (
    <Section className="!py-10">
      <div className="relative rounded-4xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=80" alt="" aria-hidden
          className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/85 to-primary-700/55" />
        <div className="relative p-8 md:p-14 text-white text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 backdrop-blur border border-white/25 mb-3">
            Trusted by 5,00,000+ Patients Worldwide
          </span>
          <h2 className="text-white mb-3">Don’t Leave Your Health to Chance.</h2>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-7">
            Get a thorough, evidence-based second opinion from a senior Mittal Hospital specialist — within 24 hours. No referral required, 100% confidential, international patients welcome.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button to="#submit" variant="glass" size="lg" icon="fa-paper-plane" className="!text-primary-700">Submit Your Reports</Button>
            <a href={`tel:${hospital.phone}`} className="btn btn-lg !bg-white !text-primary-700 hover:!bg-white shadow-md">
              <i className="fa-solid fa-phone" /> {hospital.phoneDisplay}
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/80">
            <span><i className="fa-solid fa-circle-check text-accent-300 mr-1.5" /> No referral required</span>
            <span><i className="fa-solid fa-circle-check text-accent-300 mr-1.5" /> 100% confidential</span>
            <span><i className="fa-solid fa-circle-check text-accent-300 mr-1.5" /> 24-hour delivery</span>
            <span><i className="fa-solid fa-circle-check text-accent-300 mr-1.5" /> International patients welcome</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* SUBMISSION FORM */
function SubmitForm({ innerRef, submitted, onSubmitted }) {
  const toast = useToast();
  const [files, setFiles] = useState([]);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ mode: 'onBlur' });

  const handleFiles = (e) => {
    const list = Array.from(e.target.files || []);
    const tooBig = list.find((f) => f.size > 10 * 1024 * 1024);
    if (tooBig) {
      toast({ title: 'File too large', message: `${tooBig.name} is over 10 MB.`, type: 'error' });
      e.target.value = '';
      return;
    }
    setFiles(list);
  };

  const onSubmit = async (data) => {
    if (data.company) return;
    await new Promise((r) => setTimeout(r, 1000));
    const ref = `SO-${Date.now().toString().slice(-7)}`;
    onSubmitted({ ref, ...data, fileCount: files.length });
    toast({ title: 'Submitted', message: `Reference ${ref}. Specialist review starts now.` });
    reset();
    setFiles([]);
  };

  if (submitted) {
    return (
      <Section id="submit">
        <div ref={innerRef} />
        <div className="max-w-xl mx-auto card text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
            className="w-20 h-20 rounded-full mx-auto mb-5 grid place-items-center text-white text-3xl"
            style={{ background: 'linear-gradient(135deg,#06a77d,#34d399)' }}>
            <i className="fa-solid fa-clipboard-check" />
          </motion.div>
          <h2 className="mb-2">Thank you, {submitted.name}!</h2>
          <p className="text-slate-600 mb-5">Our specialist team has been notified. You will hear back via email and SMS within 24 hours.</p>
          <div className="rounded-2xl bg-slate-50 p-5 text-left text-sm space-y-1 mb-6">
            <div><span className="text-slate-500">Reference:</span> <strong>{submitted.ref}</strong></div>
            <div><span className="text-slate-500">Speciality:</span> {submitted.speciality}</div>
            <div><span className="text-slate-500">Reports attached:</span> {submitted.fileCount}</div>
          </div>
          <Button to="/" variant="primary" icon="fa-home">Back to Home</Button>
        </div>
      </Section>
    );
  }

  return (
    <Section id="submit">
      <div ref={innerRef} className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
        <FadeIn>
          <div className="relative rounded-4xl overflow-hidden h-full min-h-[420px]">
            <img src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80"
              alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/95 via-primary-800/75 to-primary-600/40" />
            <div className="relative h-full p-8 md:p-10 text-white flex flex-col justify-end">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 backdrop-blur border border-white/25 mb-3 w-fit">
                Patient Information
              </span>
              <h2 className="text-white mb-3">Request Your Second Opinion</h2>
              <p className="text-white/85 mb-5">Fill the form and upload your medical records. Our senior specialists will review your case and send you a thorough written opinion within 24 hours.</p>
              <ul className="space-y-2 text-sm text-white/85">
                <li><i className="fa-solid fa-circle-check text-accent-300 mr-2" /> Free if you become a patient with us</li>
                <li><i className="fa-solid fa-circle-check text-accent-300 mr-2" /> Reviewed by a 15+ year consultant</li>
                <li><i className="fa-solid fa-circle-check text-accent-300 mr-2" /> Optional video consultation after review</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="card">
            <h3 className="mb-1">Request Second Opinion</h3>
            <p className="text-sm text-slate-500 mb-5">All fields with * are required.</p>
            <input type="text" tabIndex="-1" autoComplete="off" {...register('company')} className="hidden" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="form-label">Full Name *</label>
                <input {...register('name', { required: 'Required' })}
                  className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Patient name" autoComplete="name" />
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
                <label className="form-label">Phone / WhatsApp *</label>
                <input type="tel" inputMode="tel"
                  {...register('phone', { required: 'Required', minLength: { value: 7, message: 'Too short' } })}
                  className={`form-input ${errors.phone ? 'error' : ''}`} placeholder="Phone with country code" />
                {errors.phone && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.phone.message}</p>}
              </div>
              <div>
                <label className="form-label">Medical Speciality *</label>
                <select {...register('speciality', { required: 'Required' })}
                  className={`form-input ${errors.speciality ? 'error' : ''}`} defaultValue="">
                  <option value="">Select speciality</option>
                  {departments.map((d) => <option key={d.slug}>{d.name}</option>)}
                </select>
                {errors.speciality && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.speciality.message}</p>}
              </div>
              <div>
                <label className="form-label">Doctor (optional)</label>
                <select {...register('doctor')} className="form-input" defaultValue="">
                  <option value="">Next available specialist</option>
                  {doctors.map((d) => <option key={d.name}>{d.name}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="form-label">Brief Medical Summary *</label>
                <textarea rows={4}
                  {...register('summary', { required: 'Required', minLength: { value: 20, message: 'Please share a few more details' } })}
                  className={`form-input ${errors.summary ? 'error' : ''}`}
                  placeholder="Describe your current diagnosis, what your doctor has recommended, and your specific question." />
                {errors.summary && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.summary.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="form-label">Upload Medical Reports</label>
                <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.dcm"
                  onChange={handleFiles}
                  className="form-input file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-primary-50 file:text-primary-700 file:text-sm" />
                <p className="form-hint">PDF / images / DICOM — up to 10 MB per file.</p>
                {files.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {files.map((f) => (
                      <li key={f.name} className="text-xs text-slate-600 flex items-center gap-2">
                        <i className="fa-solid fa-file text-primary-600" /> {f.name}
                        <span className="text-slate-400">({(f.size / 1024 / 1024).toFixed(1)} MB)</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <label className="sm:col-span-2 flex items-start gap-2 text-sm text-slate-700">
                <input type="checkbox" {...register('consent', { required: 'Please accept' })} className="mt-1" />
                <span>I consent to share medical reports for a second-opinion review and accept the <Link to="/privacy" className="text-primary-600 underline">privacy policy</Link>.</span>
              </label>
              {errors.consent && <p className="form-error sm:col-span-2"><i className="fa-solid fa-circle-exclamation" />{errors.consent.message}</p>}
            </div>
            <Button disabled={isSubmitting} variant="primary" size="lg"
              icon={isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'} className="w-full mt-5">
              {isSubmitting ? 'Submitting…' : 'Request Second Opinion'}
            </Button>
            <p className="text-xs text-slate-500 text-center mt-3">🔒 Encrypted in transit. Reviewed only by the assigned senior specialist.</p>
          </form>
        </FadeIn>
      </div>
    </Section>
  );
}

export default function SecondOpinion() {
  const [submitted, setSubmitted] = useState(null);
  const submitRef = { current: null };
  const howRef = { current: null };

  return (
    <>
      <Seo
        title="Second Opinion"
        path="/second-opinion"
        description="Get a thorough, written second opinion from a Mittal Hospital senior specialist. Upload your medical reports — receive an expert review within 24 hours."
      />
      <Hero onSubmitRef={submitRef} onHowRef={howRef} />
      <CredentialsGrid />
      <WhyItMatters />
      <ResearchStats />
      <HowItWorks innerRef={(el) => (howRef.current = el)} />
      <Testimonials />
      <Faq />
      <SubmitForm innerRef={(el) => (submitRef.current = el)} submitted={submitted} onSubmitted={setSubmitted} />
      <TrustBand />
    </>
  );
}
