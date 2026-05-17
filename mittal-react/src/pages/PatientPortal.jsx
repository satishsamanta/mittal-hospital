import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Seo } from '../components/Seo';
import { PageHero, Section, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';

export default function PatientPortal() {
  const [tab, setTab] = useState('login');
  const toast = useToast();
  const login = useForm();
  const register = useForm();

  const onLogin = async (data) => {
    await new Promise((r) => setTimeout(r, 700));
    toast({ title: 'OTP sent', message: `Please check your phone ending ${data.phone.slice(-4)}.`, type: 'info' });
  };
  const onRegister = async (data) => {
    await new Promise((r) => setTimeout(r, 800));
    toast({ title: 'Account created', message: 'You can now log in to view your records.' });
  };

  return (
    <>
      <Seo title="Patient Portal" path="/patient-portal" />
      <PageHero
        badge="Patient Login"
        title="Your records — always with you."
        subtitle="Access reports, prescriptions and upcoming appointments in one secure place."
      />

      <Section className="!pt-4">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-start max-w-5xl mx-auto">
          <FadeIn>
            <span className="section-tag">Features</span>
            <h2 className="mb-4">All your health in one place</h2>
            <ul className="space-y-3 text-slate-700">
              {[
                'View lab reports & imaging',
                'Download prescriptions',
                'Track past & upcoming appointments',
                'Online bill view & secure payment',
                'Share records with family doctors',
                'Tele-consultation with our specialists',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-success" /> {f}</li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="card">
              <div className="flex gap-2 mb-5 bg-slate-100 rounded-full p-1">
                <button onClick={() => setTab('login')}
                  className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all ${tab === 'login' ? 'bg-white shadow text-primary-700' : 'text-slate-500'}`}>
                  Login
                </button>
                <button onClick={() => setTab('register')}
                  className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all ${tab === 'register' ? 'bg-white shadow text-primary-700' : 'text-slate-500'}`}>
                  Register
                </button>
              </div>

              {tab === 'login' ? (
                <form onSubmit={login.handleSubmit(onLogin)} noValidate className="grid gap-4">
                  <div>
                    <label className="form-label">Phone or UHID *</label>
                    <input
                      {...login.register('phone', { required: 'Required', minLength: { value: 6, message: 'Too short' } })}
                      className={`form-input ${login.formState.errors.phone ? 'error' : ''}`}
                      placeholder="10-digit mobile or UHID"
                    />
                    {login.formState.errors.phone && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{login.formState.errors.phone.message}</p>}
                  </div>
                  <Button disabled={login.formState.isSubmitting} variant="primary" size="lg" icon={login.formState.isSubmitting ? 'fa-spinner fa-spin' : 'fa-key'}>
                    Send OTP
                  </Button>
                  <p className="text-xs text-slate-500 text-center">By logging in you agree to our <a href="/terms" className="text-primary-600 underline">terms</a> & <a href="/privacy" className="text-primary-600 underline">privacy policy</a>.</p>
                </form>
              ) : (
                <form onSubmit={register.handleSubmit(onRegister)} noValidate className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="form-label">Full Name *</label>
                    <input {...register.register('name', { required: 'Required' })}
                      className={`form-input ${register.formState.errors.name ? 'error' : ''}`} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="form-label">Phone *</label>
                    <input type="tel" inputMode="tel" maxLength={10}
                      {...register.register('phone', { required: 'Required', pattern: { value: /^[6-9]\d{9}$/, message: 'Enter valid 10-digit mobile' } })}
                      className={`form-input ${register.formState.errors.phone ? 'error' : ''}`} placeholder="10-digit mobile" />
                    {register.formState.errors.phone && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{register.formState.errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input type="email" {...register.register('email')} className="form-input" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="form-label">Date of Birth</label>
                    <input type="date" {...register.register('dob')} className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Gender</label>
                    <select {...register.register('gender')} className="form-input" defaultValue="">
                      <option value="">Select</option>
                      <option>Male</option><option>Female</option><option>Other</option>
                    </select>
                  </div>
                  <label className="sm:col-span-2 flex items-start gap-2 text-sm text-slate-700">
                    <input type="checkbox" {...register.register('consent', { required: true })} className="mt-1" />
                    <span>I agree to the terms & privacy policy.</span>
                  </label>
                  <Button disabled={register.formState.isSubmitting} variant="primary" size="lg" icon={register.formState.isSubmitting ? 'fa-spinner fa-spin' : 'fa-user-plus'} className="sm:col-span-2">
                    Create Account
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
