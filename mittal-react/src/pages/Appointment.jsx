import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Seo } from '../components/Seo';
import { PageHero, Section, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';
import { departments, doctors } from '../data/site';

const STORAGE_KEY = 'mittal_appointment_draft';
const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM',
  '11:30 AM', '12:00 PM', '02:00 PM', '02:30 PM', '03:00 PM',
  '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM',
];

const STEPS = [
  { label: 'Patient', icon: 'fa-user' },
  { label: 'Department', icon: 'fa-stethoscope' },
  { label: 'Doctor', icon: 'fa-user-doctor' },
  { label: 'Schedule', icon: 'fa-calendar-days' },
  { label: 'Your Details', icon: 'fa-id-card' },
  { label: 'Review', icon: 'fa-clipboard-check' },
];

export default function Appointment() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(null);
  const toast = useToast();

  const { register, handleSubmit, watch, setValue, formState: { errors }, getValues, trigger } = useForm({
    mode: 'onBlur',
    defaultValues: {
      patientType: 'new',
      department: '',
      doctor: '',
      date: '',
      time: '',
      name: '',
      phone: '',
      email: '',
      age: '',
      gender: '',
      symptoms: '',
      consent: false,
      company: '', // honeypot
    },
  });

  // localStorage draft persistence
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        Object.entries(parsed).forEach(([k, v]) => setValue(k, v));
      } catch {}
    }
  }, [setValue]);
  useEffect(() => {
    const sub = watch((val) => {
      const { company, ...safe } = val;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(safe));
    });
    return () => sub.unsubscribe();
  }, [watch]);

  const dept = watch('department');
  const docs = doctors.filter((d) => d.dept === dept);

  const validateStep = async () => {
    const fields = [
      ['patientType'],
      ['department'],
      ['doctor'],
      ['date', 'time'],
      ['name', 'phone', 'age', 'gender'],
      ['consent'],
    ][step];
    return await trigger(fields);
  };

  const next = async () => {
    const ok = await validateStep();
    if (!ok) return;
    setStep((s) => Math.min(STEPS.length - 1, s + 1));
  };
  const back = () => setStep((s) => Math.max(0, s - 1));

  const onSubmit = async (data) => {
    if (data.company) return; // honeypot
    await new Promise((r) => setTimeout(r, 900));
    const ref = `MH-${Date.now().toString().slice(-7)}`;
    setSubmitted({ ref, ...data });
    localStorage.removeItem(STORAGE_KEY);
    toast({ title: 'Appointment requested', message: `Your reference: ${ref}. We will confirm via SMS.` });
  };

  if (submitted) {
    return (
      <>
        <Seo title="Appointment Confirmed" path="/appointment" />
        <PageHero badge="All set!" title="Appointment request received" />
        <Section className="!pt-4">
          <div className="max-w-xl mx-auto card text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
              className="w-20 h-20 rounded-full mx-auto mb-5 grid place-items-center text-white text-3xl"
              style={{ background: 'linear-gradient(135deg,#06a77d,#34d399)' }}>
              <i className="fa-solid fa-check" />
            </motion.div>
            <h2 className="mb-2">Thank you, {submitted.name}!</h2>
            <p className="text-slate-600 mb-5">Your appointment request has been received. We will confirm via SMS and call you within 30 minutes during working hours.</p>
            <div className="rounded-2xl bg-slate-50 p-5 text-left text-sm space-y-1 mb-6">
              <div><span className="text-slate-500">Reference:</span> <strong>{submitted.ref}</strong></div>
              <div><span className="text-slate-500">Department:</span> {submitted.department}</div>
              <div><span className="text-slate-500">Doctor:</span> {submitted.doctor}</div>
              <div><span className="text-slate-500">When:</span> {submitted.date} at {submitted.time}</div>
              <div><span className="text-slate-500">Phone:</span> {submitted.phone}</div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button to="/" variant="primary" icon="fa-home">Back to Home</Button>
              <Button onClick={() => { setSubmitted(null); setStep(0); }} variant="outline" icon="fa-plus">New Appointment</Button>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <Seo title="Book Appointment" path="/appointment" />
      <PageHero
        badge="Online Booking"
        title="Book your appointment in 60 seconds"
        subtitle="Simple. Secure. Smart. Pick a doctor, time and we will handle the rest."
      />

      <Section className="!pt-4">
        <div className="max-w-3xl mx-auto">
          {/* Step indicator */}
          <div className="glass rounded-3xl p-4 md:p-5 mb-6 sticky top-20 z-20">
            <ol className="flex items-center justify-between gap-1">
              {STEPS.map((s, idx) => (
                <li key={s.label} className="flex-1 flex flex-col items-center text-center">
                  <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full grid place-items-center text-sm font-bold mb-1.5 transition-all
                    ${idx < step ? 'bg-success text-white' :
                      idx === step ? 'bg-primary-500 text-white shadow-glow-primary scale-110' :
                      'bg-slate-200 text-slate-500'}`}>
                    {idx < step ? <i className="fa-solid fa-check" /> : <i className={`fa-solid ${s.icon}`} />}
                  </div>
                  <span className={`text-[10px] md:text-xs ${idx === step ? 'font-bold text-navy' : 'text-slate-500'}`}>
                    {s.label}
                  </span>
                </li>
              ))}
            </ol>
            <div className="h-1 mt-3 rounded-full bg-slate-200 overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
                initial={false} animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="card">
            {/* Honeypot */}
            <input type="text" tabIndex="-1" autoComplete="off" {...register('company')} className="hidden" />

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {step === 0 && (
                  <div>
                    <h3 className="mb-1">Are you a new or existing patient?</h3>
                    <p className="text-sm text-slate-500 mb-5">This helps us prepare your visit.</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        { v: 'new', label: 'New Patient', icon: 'fa-user-plus' },
                        { v: 'existing', label: 'Existing Patient', icon: 'fa-user-check' },
                      ].map((o) => {
                        const val = watch('patientType');
                        return (
                          <label key={o.v} className={`cursor-pointer card !p-5 text-center transition-all
                            ${val === o.v ? 'ring-2 ring-primary-500 bg-primary-50/50' : ''}`}>
                            <input type="radio" value={o.v} {...register('patientType', { required: true })} className="sr-only" />
                            <i className={`fa-solid ${o.icon} text-3xl text-primary-600 mb-2`} />
                            <div className="font-semibold text-navy">{o.label}</div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div>
                    <h3 className="mb-1">Choose a department</h3>
                    <p className="text-sm text-slate-500 mb-5">Pick the speciality you need.</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {departments.map((d) => {
                        const v = watch('department');
                        return (
                          <label key={d.slug} className={`cursor-pointer p-4 rounded-2xl border-2 text-center transition-all
                            ${v === d.name ? 'border-primary-500 bg-primary-50/40 shadow-glow-primary' : 'border-slate-200 hover:border-primary-300'}`}>
                            <input type="radio" value={d.name} {...register('department', { required: 'Please select a department' })} className="sr-only" onChange={() => setValue('doctor', '')} />
                            <i className={`fa-solid ${d.icon} text-2xl text-primary-600 mb-1.5`} />
                            <div className="text-sm font-semibold text-navy">{d.name}</div>
                          </label>
                        );
                      })}
                    </div>
                    {errors.department && <p className="form-error mt-3"><i className="fa-solid fa-circle-exclamation" />{errors.department.message}</p>}
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="mb-1">Pick a doctor</h3>
                    <p className="text-sm text-slate-500 mb-5">Available specialists in {dept}.</p>
                    {docs.length === 0 ? (
                      <div className="text-center py-8 text-slate-500">No doctors found. Please go back and choose another department.</div>
                    ) : (
                      <div className="grid sm:grid-cols-2 gap-3">
                        {docs.map((d) => {
                          const v = watch('doctor');
                          return (
                            <label key={d.name} className={`cursor-pointer flex items-center gap-3 p-3 rounded-2xl border-2 transition-all
                              ${v === d.name ? 'border-primary-500 bg-primary-50/40' : 'border-slate-200 hover:border-primary-300'}`}>
                              <input type="radio" value={d.name} {...register('doctor', { required: 'Please select a doctor' })} className="sr-only" />
                              <img src={d.image} alt={d.name} className="w-14 h-14 rounded-full object-cover" />
                              <div className="flex-1">
                                <div className="font-semibold text-navy text-sm">{d.name}</div>
                                <div className="text-xs text-accent-600 font-semibold">{d.speciality}</div>
                                <div className="text-[11px] text-slate-500 mt-0.5">{d.opd}</div>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    )}
                    {errors.doctor && <p className="form-error mt-3"><i className="fa-solid fa-circle-exclamation" />{errors.doctor.message}</p>}
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className="mb-1">Pick a date & time</h3>
                    <p className="text-sm text-slate-500 mb-5">Choose your preferred slot.</p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-5">
                      <div>
                        <label className="form-label">Date *</label>
                        <input type="date" {...register('date', { required: 'Please pick a date' })}
                          className={`form-input ${errors.date ? 'error' : ''}`}
                          min={new Date().toISOString().slice(0, 10)} />
                      </div>
                      <div>
                        <label className="form-label">Selected time</label>
                        <div className="form-input flex items-center justify-between">
                          <span className={watch('time') ? 'text-navy' : 'text-slate-400'}>
                            {watch('time') || 'Pick from below'}
                          </span>
                          <i className="fa-solid fa-clock text-slate-400" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {TIME_SLOTS.map((t) => {
                        const v = watch('time');
                        return (
                          <button key={t} type="button" onClick={() => setValue('time', t, { shouldValidate: true })}
                            className={`px-3 py-2 rounded-xl text-sm font-medium transition-all
                              ${v === t ? 'bg-primary-500 text-white shadow-glow-primary' : 'bg-slate-100 text-slate-700 hover:bg-primary-100'}`}>
                            {t}
                          </button>
                        );
                      })}
                    </div>
                    <input type="hidden" {...register('time', { required: 'Please pick a time' })} />
                    {(errors.date || errors.time) && <p className="form-error mt-3"><i className="fa-solid fa-circle-exclamation" />{errors.date?.message || errors.time?.message}</p>}
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h3 className="mb-1">Your details</h3>
                    <p className="text-sm text-slate-500 mb-5">We will use these to confirm your booking.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="form-label">Full Name *</label>
                        <input {...register('name', { required: 'Required', minLength: { value: 2, message: 'Too short' } })}
                          className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Your full name" autoComplete="name" />
                        {errors.name && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="form-label">Phone Number *</label>
                        <input type="tel" inputMode="tel" maxLength={10} autoComplete="tel-national"
                          {...register('phone', { required: 'Required', pattern: { value: /^[6-9]\d{9}$/, message: 'Enter valid 10-digit Indian mobile' } })}
                          className={`form-input ${errors.phone ? 'error' : ''}`} placeholder="10-digit mobile" />
                        {errors.phone && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.phone.message}</p>}
                      </div>
                      <div>
                        <label className="form-label">Email</label>
                        <input type="email" autoComplete="email"
                          {...register('email', { pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
                          className={`form-input ${errors.email ? 'error' : ''}`} placeholder="you@example.com" />
                        {errors.email && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="form-label">Age *</label>
                        <input type="number" min={0} max={120}
                          {...register('age', { required: 'Required', min: { value: 0, message: 'Invalid age' }, max: { value: 120, message: 'Invalid age' } })}
                          className={`form-input ${errors.age ? 'error' : ''}`} placeholder="e.g. 32" />
                        {errors.age && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.age.message}</p>}
                      </div>
                      <div>
                        <label className="form-label">Gender *</label>
                        <select {...register('gender', { required: 'Required' })} className={`form-input ${errors.gender ? 'error' : ''}`} defaultValue="">
                          <option value="">Select</option>
                          <option>Male</option><option>Female</option><option>Other</option>
                        </select>
                        {errors.gender && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.gender.message}</p>}
                      </div>
                      <div className="sm:col-span-2">
                        <label className="form-label">Brief symptoms or reason</label>
                        <textarea rows={3} {...register('symptoms')} className="form-input" placeholder="Optional — helps the doctor prepare." />
                      </div>
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div>
                    <h3 className="mb-1">Review your booking</h3>
                    <p className="text-sm text-slate-500 mb-5">Make sure the details below are correct.</p>
                    <div className="rounded-2xl bg-slate-50 p-5 text-sm space-y-2">
                      {[
                        ['Patient', watch('patientType') === 'new' ? 'New Patient' : 'Existing Patient'],
                        ['Department', watch('department')],
                        ['Doctor', watch('doctor')],
                        ['When', `${watch('date')} at ${watch('time')}`],
                        ['Name', watch('name')],
                        ['Phone', watch('phone')],
                        ['Email', watch('email') || '—'],
                        ['Age / Gender', `${watch('age')} / ${watch('gender')}`],
                        ['Symptoms', watch('symptoms') || '—'],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between gap-4 py-1 border-b border-white">
                          <span className="text-slate-500">{k}</span>
                          <span className="text-navy font-medium text-right">{v}</span>
                        </div>
                      ))}
                    </div>
                    <label className="flex items-start gap-2 mt-5 text-sm text-slate-700">
                      <input type="checkbox" {...register('consent', { required: 'Please accept to continue' })} className="mt-1" />
                      <span>I consent to be contacted by Mittal Hospital regarding this appointment and accept the <a href="/privacy" className="text-primary-600 underline">privacy policy</a>.</span>
                    </label>
                    {errors.consent && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.consent.message}</p>}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between gap-3 mt-7 pt-5 border-t border-slate-100">
              <Button type="button" onClick={back} disabled={step === 0} variant="outline" icon="fa-arrow-left">
                Back
              </Button>
              {step < STEPS.length - 1 ? (
                <Button type="button" onClick={next} variant="primary" icon="fa-arrow-right">
                  Next
                </Button>
              ) : (
                <Button type="submit" variant="primary" size="lg" icon="fa-paper-plane">
                  Confirm Appointment
                </Button>
              )}
            </div>
          </form>

          <p className="text-xs text-slate-500 text-center mt-4">
            🔒 Your data is encrypted in transit and only used to process your appointment.
          </p>
        </div>
      </Section>
    </>
  );
}
