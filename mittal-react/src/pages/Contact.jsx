import { useForm } from 'react-hook-form';
import { Seo } from '../components/Seo';
import { PageHero, Section, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';
import { hospital } from '../data/site';

export default function Contact() {
  const toast = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    if (data.company) return;
    await new Promise((r) => setTimeout(r, 700));
    toast({ title: 'Message sent', message: 'We will respond within 24 hours.' });
    reset();
  };

  return (
    <>
      <Seo title="Contact Us" path="/contact" />
      <PageHero
        badge="Reach Us"
        title="We are here to help."
        subtitle="Have a question or feedback? Send us a message or call us directly — we usually reply within an hour during working hours."
      />

      <Section className="!pt-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {[
            { icon: 'fa-location-dot', title: 'Address', text: `${hospital.address.line1}, ${hospital.address.city}, ${hospital.address.region} ${hospital.address.postalCode}` },
            { icon: 'fa-phone', title: 'Phone', text: hospital.phoneDisplay, href: `tel:${hospital.phone}` },
            { icon: 'fa-envelope', title: 'Email', text: hospital.email, href: `mailto:${hospital.email}` },
            { icon: 'fa-clock', title: 'Working Hours', text: `${hospital.hours[0].days}: ${hospital.hours[0].open} – ${hospital.hours[0].close}` },
          ].map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.07}>
              <div className="card text-center">
                <div className="w-12 h-12 mx-auto rounded-2xl mb-3 grid place-items-center text-white"
                  style={{ background: 'linear-gradient(135deg,#0a6cb8,#2ec4b6)' }}>
                  <i className={`fa-solid ${c.icon}`} />
                </div>
                <h4 className="mb-1">{c.title}</h4>
                {c.href ? <a href={c.href} className="text-sm text-slate-600 hover:text-primary-600 break-all">{c.text}</a>
                  : <p className="text-sm text-slate-600 m-0">{c.text}</p>}
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">
          <FadeIn>
            <div className="rounded-4xl overflow-hidden shadow-glass-lg aspect-[4/3] lg:aspect-auto lg:h-full bg-slate-200">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Mittal+Hospital+Ajmer&output=embed"
                className="w-full h-full border-0 min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="card">
              <h3 className="mb-1">Send us a message</h3>
              <p className="text-sm text-slate-500 mb-5">We typically reply within an hour during working hours.</p>

              <input type="text" tabIndex="-1" autoComplete="off" {...register('company')} className="hidden" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Name *</label>
                  <input {...register('name', { required: 'Required' })} className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Full name" />
                  {errors.name && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.name.message}</p>}
                </div>
                <div>
                  <label className="form-label">Phone *</label>
                  <input type="tel" inputMode="tel" maxLength={10}
                    {...register('phone', { required: 'Required', pattern: { value: /^[6-9]\d{9}$/, message: 'Enter valid 10-digit mobile' } })}
                    className={`form-input ${errors.phone ? 'error' : ''}`} placeholder="10-digit mobile" />
                  {errors.phone && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.phone.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Email</label>
                  <input type="email"
                    {...register('email', { pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
                    className={`form-input ${errors.email ? 'error' : ''}`} placeholder="you@example.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Reason</label>
                  <select {...register('reason')} className="form-input" defaultValue="">
                    <option value="">Select a reason</option>
                    <option>General Enquiry</option>
                    <option>Appointment Help</option>
                    <option>Billing & Insurance</option>
                    <option>Medical Records</option>
                    <option>Feedback / Complaint</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Message *</label>
                  <textarea rows={5} {...register('message', { required: 'Required', minLength: { value: 10, message: 'Tell us a little more' } })}
                    className={`form-input ${errors.message ? 'error' : ''}`} placeholder="How can we help?" />
                  {errors.message && <p className="form-error"><i className="fa-solid fa-circle-exclamation" />{errors.message.message}</p>}
                </div>
                <label className="sm:col-span-2 flex items-start gap-2 text-sm text-slate-700">
                  <input type="checkbox" {...register('consent', { required: 'Please accept to continue' })} className="mt-1" />
                  <span>I agree to be contacted by Mittal Hospital regarding this enquiry.</span>
                </label>
                {errors.consent && <p className="form-error sm:col-span-2"><i className="fa-solid fa-circle-exclamation" />{errors.consent.message}</p>}
              </div>

              <Button disabled={isSubmitting} variant="primary" size="lg" icon={isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'} className="w-full mt-5">
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </Button>
            </form>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
