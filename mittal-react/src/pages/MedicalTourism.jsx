import { useForm } from 'react-hook-form';
import { Seo } from '../components/Seo';
import { PageHero, Section, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';

const benefits = [
  { icon: 'fa-passport', title: 'Visa Assistance', text: 'Medical-visa invitation letters and end-to-end documentation help.' },
  { icon: 'fa-plane-arrival', title: 'Airport Pickup', text: 'Complimentary pickup, drop-off and local transport arrangements.' },
  { icon: 'fa-language', title: 'Translator Support', text: 'On-site translators for Arabic, French, Russian and English.' },
  { icon: 'fa-hotel', title: 'Accommodation', text: 'Tied-up hotels and serviced apartments at discounted rates.' },
  { icon: 'fa-utensils', title: 'Diet & Cuisine', text: 'Cuisine options tailored to dietary and cultural needs.' },
  { icon: 'fa-indian-rupee-sign', title: 'Cost Savings', text: 'Up to 70% less than equivalent US/UK procedure cost — at NABH quality.' },
];

export default function MedicalTourism() {
  const toast = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const onSubmit = async (data) => {
    if (data.company) return;
    await new Promise((r) => setTimeout(r, 700));
    toast({ title: 'Enquiry received', message: 'Our international patient desk will contact you within 24 hours.' });
    reset();
  };

  return (
    <>
      <Seo title="Medical Tourism" path="/medical-tourism" />
      <PageHero
        badge="International Patients"
        title="World-class care, Indian hospitality"
        subtitle="A dedicated international patient desk to make your treatment journey simple and welcoming."
      />

      <Section className="!pt-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.06}>
              <div className="card card-hover h-full">
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

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <span className="section-tag">How It Works</span>
            <h2 className="mb-5">Your journey, simplified</h2>
            <ol className="space-y-4">
              {[
                'Send us your medical reports & details',
                'Get a treatment plan and cost estimate within 48 hours',
                'Receive visa invitation letter from our team',
                'Travel — we receive you at the airport',
                'Treatment, recovery & follow-up — coordinated end-to-end',
              ].map((s, i) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="w-8 h-8 shrink-0 rounded-full grid place-items-center text-white font-bold"
                    style={{ background: 'linear-gradient(135deg,#0a6cb8,#2ec4b6)' }}>{i + 1}</span>
                  <p className="text-slate-700 pt-1">{s}</p>
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn delay={0.15}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="card">
              <h3 className="mb-1">Send a treatment enquiry</h3>
              <p className="text-sm text-slate-500 mb-5">We respond within 24 hours.</p>
              <input type="text" tabIndex="-1" autoComplete="off" {...register('company')} className="hidden" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Name *</label>
                  <input {...register('name', { required: 'Required' })} className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Full name" />
                </div>
                <div>
                  <label className="form-label">Country *</label>
                  <input {...register('country', { required: 'Required' })} className={`form-input ${errors.country ? 'error' : ''}`} placeholder="Country" />
                </div>
                <div>
                  <label className="form-label">Email *</label>
                  <input type="email"
                    {...register('email', { required: 'Required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
                    className={`form-input ${errors.email ? 'error' : ''}`} placeholder="you@example.com" />
                </div>
                <div>
                  <label className="form-label">WhatsApp / Phone</label>
                  <input {...register('phone')} className="form-input" placeholder="+xx phone number" />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Condition / Treatment Sought</label>
                  <textarea rows={4} {...register('message')} className="form-input" placeholder="Tell us about your condition and any reports you have." />
                </div>
                <label className="sm:col-span-2 flex items-start gap-2 text-sm text-slate-700">
                  <input type="checkbox" {...register('consent', { required: 'Required' })} className="mt-1" />
                  <span>I consent to share my medical information for treatment planning.</span>
                </label>
              </div>
              <Button disabled={isSubmitting} variant="primary" size="lg" icon={isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'} className="w-full mt-5">
                {isSubmitting ? 'Sending…' : 'Send Enquiry'}
              </Button>
            </form>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
