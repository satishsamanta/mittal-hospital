import { Link } from 'react-router-dom';
import { hospital } from '../../data/site';

function IconChip({ tone = 'accent', icon }) {
  const tones = {
    accent: 'bg-accent-500/25 text-accent-300',
    amber: 'bg-amber-500/25 text-amber-300',
    rose: 'bg-rose-500/25 text-rose-300',
  };
  return (
    <span className={`w-6 h-6 shrink-0 rounded-full grid place-items-center ${tones[tone]}`}>
      <i className={`fa-solid ${icon} text-[10px]`} />
    </span>
  );
}

export function TopBar() {
  const altPhoneDisplay = hospital.emergencyPhone.replace(/^\+91-?/, '+91 ').replace(/-/g, ' ');
  const opdHours = `${hospital.hours[0].open} to ${hospital.hours[0].close}`;

  return (
    <div className="bg-navy/35 backdrop-blur-md text-white text-xs py-2 hidden md:block relative z-30 border-b border-white/10">
      <div className="container-px flex items-center justify-between gap-4">
        {/* Left — contact strip */}
        <div className="flex items-center gap-5 lg:gap-7 min-w-0">
          <a href={`tel:${hospital.phone}`} className="flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap">
            <IconChip icon="fa-phone" tone="accent" />
            <span>{hospital.phoneDisplay}<span className="hidden xl:inline">, {altPhoneDisplay}</span></span>
          </a>
          <span className="hidden lg:flex items-center gap-2 whitespace-nowrap">
            <IconChip icon="fa-clock" tone="amber" />
            <span>{opdHours}</span>
          </span>
          <span className="hidden xl:flex items-center gap-2 whitespace-nowrap">
            <IconChip icon="fa-location-dot" tone="rose" />
            <span>{hospital.address.line1} | {hospital.address.city}</span>
          </span>
        </div>

        {/* Right — Video Consultation / Second Opinion / Social */}
        <div className="flex items-center gap-2 lg:gap-3 shrink-0">
          <Link
            to="/video-consultation"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-white text-xs font-semibold shadow-md hover:-translate-y-0.5 hover:shadow-glow-emergency transition-all whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg,#e63946,#c1121f)' }}
          >
            <i className="fa-solid fa-video" /> Video Consultation
          </Link>
          <Link
            to="/second-opinion"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-white text-xs font-semibold shadow-md hover:-translate-y-0.5 hover:shadow-glow-primary transition-all whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg,#0a6cb8,#2ec4b6)' }}
          >
            <i className="fa-solid fa-user-doctor" /> Second Opinion
          </Link>

          <div className="hidden lg:flex items-center gap-1.5 ml-1 pl-3 border-l border-white/15">
            {[
              ['facebook', 'fa-facebook-f'],
              ['youtube', 'fa-youtube'],
              ['instagram', 'fa-instagram'],
            ].map(([k, ic]) => (
              <a
                key={k}
                href={hospital.social[k]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={k}
                className="w-7 h-7 grid place-items-center rounded-full bg-white/10 hover:bg-accent-500 hover:-translate-y-0.5 transition-all"
              >
                <i className={`fa-brands ${ic} text-[10px]`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
