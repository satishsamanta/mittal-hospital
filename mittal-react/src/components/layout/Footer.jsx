import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { hospital, departments } from '../../data/site';
import { useToast } from '../ui/Toast';

export function Footer() {
  const toast = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const onSubscribe = async (data) => {
    await new Promise((r) => setTimeout(r, 700));
    toast({ title: 'Subscribed!', message: `We will keep ${data.email} in the loop.`, type: 'success' });
    reset();
  };

  return (
    <footer className="relative mt-20 text-white" style={{ background: 'linear-gradient(135deg, #0a2540 0%, #0a3f6b 100%)' }}>
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(at 20% 20%, rgba(46,196,182,0.25) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(10,108,184,0.30) 0px, transparent 50%)'
        }} />

      <div className="relative">
        <div className="container-px pt-20 pb-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
            <div>
              <Link to="/" className="inline-flex items-center mb-4" aria-label={`${hospital.name} — home`}>
                <div className="bg-white rounded-2xl p-3 shadow-glass">
                  <img src={hospital.logo} alt={hospital.name} className="h-12 w-auto object-contain" />
                </div>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Ajmer’s first NABH-accredited multi-specialty hospital — delivering ethical, world-class care since {hospital.since}.
              </p>
              <div className="flex gap-2">
                {[
                  ['facebook', 'fa-facebook-f'],
                  ['linkedin', 'fa-linkedin-in'],
                  ['instagram', 'fa-instagram'],
                  ['youtube', 'fa-youtube'],
                  ['twitter', 'fa-x-twitter'],
                ].map(([k, icon]) => (
                  <a key={k} href={hospital.social[k]} aria-label={k} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-accent-500 hover:-translate-y-0.5 transition-all">
                    <i className={`fa-brands ${icon}`} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white text-base mb-4 font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {[
                  ['About Us', '/about'],
                  ['Core Team', '/core-team'],
                  ['Find a Doctor', '/doctors'],
                  ['Video Consultation', '/video-consultation'],
                  ['Second Opinion', '/second-opinion'],
                  ['Book Appointment', '/appointment'],
                  ['Health Checkup', '/health-checkup'],
                  ['Career', '/career'],
                  ['Contact', '/contact'],
                ].map(([l, h]) => (
                  <li key={l}>
                    <Link to={h} className="text-white/70 hover:text-accent-300 transition-colors flex items-center gap-2">
                      <i className="fa-solid fa-chevron-right text-[8px]" /> {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white text-base mb-4 font-semibold">Specialities</h4>
              <ul className="space-y-2 text-sm">
                {departments.slice(0, 8).map((d) => (
                  <li key={d.slug}>
                    <Link to={`/departments/${d.slug}`} className="text-white/70 hover:text-accent-300 transition-colors flex items-center gap-2">
                      <i className={`fa-solid ${d.icon} text-accent-300/70 text-xs`} /> {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white text-base mb-4 font-semibold">Get In Touch</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex gap-3">
                  <i className="fa-solid fa-location-dot text-accent-300 mt-1" />
                  <span>{hospital.address.line1}<br />{hospital.address.city}, {hospital.address.region} {hospital.address.postalCode}</span>
                </li>
                <li className="flex gap-3">
                  <i className="fa-solid fa-phone text-accent-300 mt-1" />
                  <a href={`tel:${hospital.phone}`} className="hover:text-white">{hospital.phoneDisplay}</a>
                </li>
                <li className="flex gap-3">
                  <i className="fa-solid fa-envelope text-accent-300 mt-1" />
                  <a href={`mailto:${hospital.email}`} className="hover:text-white break-all">{hospital.email}</a>
                </li>
                <li className="flex gap-3">
                  <i className="fa-solid fa-clock text-accent-300 mt-1" />
                  <span>{hospital.hours[0].days}: {hospital.hours[0].open} – {hospital.hours[0].close}<br />{hospital.hours[2].days}: {hospital.hours[2].open}</span>
                </li>
              </ul>

              <form onSubmit={handleSubmit(onSubscribe)} className="mt-6">
                <label className="text-xs text-white/70 mb-2 block">Subscribe for health tips & news</label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    {...register('email', { required: true, pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ })}
                    className="flex-1 px-3 py-2 rounded-full bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent-300"
                    aria-label="Email"
                  />
                  <button disabled={isSubmitting} className="btn btn-primary btn-sm" type="submit">
                    {isSubmitting ? <i className="fa-solid fa-spinner fa-spin" /> : <i className="fa-solid fa-paper-plane" />}
                  </button>
                </div>
                {errors.email && <p className="text-xs text-red-300 mt-1.5">Please enter a valid email.</p>}
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-px py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
            <p>© {new Date().getFullYear()} {hospital.name}. All rights reserved.</p>
            <ul className="flex flex-wrap gap-4">
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/disclosures" className="hover:text-white">Statutory Disclosures</Link></li>
              <li><Link to="/sitemap" className="hover:text-white">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
