import { useForm } from 'react-hook-form';
import { Seo } from '../components/Seo';
import { Section, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';
import { hospital } from '../data/site';

export default function Emergency() {
  const toast = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 500));
    toast({ title: 'Callback requested', message: 'Our emergency desk will call you within 2 minutes.', type: 'info' });
    reset();
  };

  return (
    <>
      <Seo title="24/7 Emergency" path="/emergency" />
      <section className="relative pt-28 pb-12 overflow-hidden text-white"
        style={{ background: 'linear-gradient(135deg,#e63946 0%,#7b1623 100%)' }}>
        <div className="blob w-96 h-96 bg-white/15 -top-20 -left-20" />
        <div className="container-px relative">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 backdrop-blur mb-4">
              <i className="fa-solid fa-bolt mr-1.5" /> Emergency Services
            </span>
            <h1 className="text-white mb-3">24/7 Emergency · Trauma · Critical Care</h1>
            <p className="text-white/90 text-lg max-w-2xl">A medical emergency? Don't wait. Call our emergency line and our team will be ready before you arrive.</p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a href={`tel:${hospital.emergencyPhone}`} className="btn btn-lg bg-white text-emergency hover:bg-white/90">
                <i className="fa-solid fa-phone" /> Emergency · {hospital.emergencyPhone}
              </a>
              <a href={`tel:${hospital.ambulancePhone}`} className="btn btn-lg btn-glass !text-white !bg-white/15">
                <i className="fa-solid fa-truck-medical" /> Ambulance · 108
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: 'fa-truck-medical', title: 'Ambulance Service', text: 'Advanced Life Support ambulances with trained paramedics and oxygen support — anywhere in the city.' },
            { icon: 'fa-heart-pulse', title: 'Trauma Care', text: 'Dedicated trauma room with on-call orthopaedic, neurosurgery and surgical teams.' },
            { icon: 'fa-bed-pulse', title: 'Critical Care', text: 'ICU, CCU and NICU with multi-disciplinary intensivist cover round the clock.' },
            { icon: 'fa-stethoscope', title: 'On-call Specialists', text: 'Cardiologists, neurologists and surgeons reachable within minutes — 24/7.' },
          ].map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.07}>
              <div className="card card-hover h-full">
                <div className="w-12 h-12 rounded-2xl grid place-items-center text-white mb-4"
                  style={{ background: 'linear-gradient(135deg,#e63946,#c1121f)' }}>
                  <i className={`fa-solid ${c.icon}`} />
                </div>
                <h3 className="mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600 m-0">{c.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <span className="section-tag">When to call</span>
            <h2 className="mb-4">Don't wait — call us if you experience:</h2>
            <ul className="grid sm:grid-cols-2 gap-2 mb-6">
              {[
                'Chest pain / pressure', 'Sudden numbness or weakness', 'Severe head injury',
                'Heavy bleeding', 'Difficulty breathing', 'Loss of consciousness',
                'Severe abdominal pain', 'Suspected stroke', 'Poisoning / overdose',
                'Severe burns', 'High-fall trauma', 'Snake / animal bite',
              ].map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                  <i className="fa-solid fa-triangle-exclamation text-emergency mt-1" /> {s}
                </li>
              ))}
            </ul>
            <Button href={`tel:${hospital.emergencyPhone}`} variant="emergency" size="lg" icon="fa-phone">Call Emergency Now</Button>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="card">
              <h3 className="mb-1">Request a Callback</h3>
              <p className="text-sm text-slate-500 mb-5">Leave your number and our emergency desk will call you in 2 minutes.</p>
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4">
                <div>
                  <label className="form-label">Your Name</label>
                  <input {...register('name', { required: 'Required' })} className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Full name" />
                </div>
                <div>
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" inputMode="tel" maxLength={10}
                    {...register('phone', { required: 'Required', pattern: { value: /^[6-9]\d{9}$/, message: 'Enter valid 10-digit mobile' } })}
                    className={`form-input ${errors.phone ? 'error' : ''}`} placeholder="10-digit mobile" />
                  {errors.phone && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="form-label">Brief description</label>
                  <textarea rows={3} {...register('issue')} className="form-input" placeholder="What is happening? (optional)" />
                </div>
                <Button disabled={isSubmitting} variant="emergency" size="lg" icon={isSubmitting ? 'fa-spinner fa-spin' : 'fa-phone'}>
                  {isSubmitting ? 'Sending…' : 'Request Callback'}
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
