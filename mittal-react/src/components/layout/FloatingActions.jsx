import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { hospital } from '../../data/site';

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const wa = `https://wa.me/${hospital.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <>
      {/* Desktop / tablet floating cluster */}
      <div className="fixed right-4 bottom-24 md:bottom-8 z-40 flex flex-col gap-3 print:hidden">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative w-12 h-12 rounded-full grid place-items-center text-white shadow-glass-lg hover:-translate-y-0.5 transition-transform"
          style={{ background: '#25D366' }}
        >
          <i className="fa-brands fa-whatsapp text-xl" />
          <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-pulse-ring" />
        </a>
        <a
          href={`tel:${hospital.emergencyPhone}`}
          aria-label="Emergency call"
          className="relative w-12 h-12 rounded-full grid place-items-center text-white shadow-glow-emergency hover:-translate-y-0.5 transition-transform"
          style={{ background: 'linear-gradient(135deg,#e63946,#c1121f)' }}
        >
          <i className="fa-solid fa-truck-medical text-lg" />
          <span className="absolute inset-0 rounded-full border-2 border-red-300 animate-pulse-ring" />
        </a>
        <button
          onClick={() => setOpenChat((v) => !v)}
          aria-label="Open chat"
          className="w-12 h-12 rounded-full grid place-items-center text-white shadow-glow-primary hover:-translate-y-0.5 transition-transform"
          style={{ background: 'linear-gradient(135deg,#0a6cb8,#2ec4b6)' }}
        >
          <i className={`fa-solid ${openChat ? 'fa-xmark' : 'fa-comment-dots'} text-lg`} />
        </button>
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="w-12 h-12 rounded-full grid place-items-center glass-strong text-primary-600 shadow-glass hover:-translate-y-0.5 transition-transform"
          >
            <i className="fa-solid fa-arrow-up" />
          </button>
        )}
      </div>

      {/* Chat preview */}
      {openChat && (
        <div className="fixed right-4 bottom-44 md:bottom-28 z-40 w-[280px] glass-strong rounded-3xl p-4 shadow-glass-lg">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="w-10 h-10 rounded-full grid place-items-center text-white"
              style={{ background: 'linear-gradient(135deg,#0a6cb8,#2ec4b6)' }}>
              <i className="fa-solid fa-headset" />
            </div>
            <div>
              <div className="font-semibold text-navy text-sm">Mittal Care Desk</div>
              <div className="text-xs text-success flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" /> Online · We reply in minutes
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-600 my-3">Hi! How can we help today?</p>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/appointment" className="px-3 py-2 rounded-xl bg-primary-50 text-primary-700 hover:bg-primary-100">📅 Book an appointment</Link>
            <Link to="/video-consultation" className="px-3 py-2 rounded-xl bg-primary-50 text-primary-700 hover:bg-primary-100">🎥 Video consultation</Link>
            <Link to="/second-opinion" className="px-3 py-2 rounded-xl bg-primary-50 text-primary-700 hover:bg-primary-100">📄 Second opinion</Link>
            <Link to="/doctors" className="px-3 py-2 rounded-xl bg-primary-50 text-primary-700 hover:bg-primary-100">👨‍⚕️ Find a doctor</Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-xl bg-green-50 text-green-700 hover:bg-green-100">💬 Chat on WhatsApp</a>
            <a href={`tel:${hospital.phone}`} className="px-3 py-2 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100">📞 Call us</a>
          </div>
        </div>
      )}

      {/* Mobile bottom action bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 glass-strong border-t border-white/40 shadow-glass-lg print:hidden">
        <div className="grid grid-cols-4 text-[11px]">
          <a href={`tel:${hospital.phone}`} className="flex flex-col items-center gap-1 py-3 text-primary-700">
            <i className="fa-solid fa-phone text-lg" /> Call
          </a>
          <Link to="/appointment" className="flex flex-col items-center gap-1 py-3 text-primary-700">
            <i className="fa-solid fa-calendar-check text-lg" /> Book
          </Link>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-3 text-green-700">
            <i className="fa-brands fa-whatsapp text-lg" /> WhatsApp
          </a>
          <Link to="/emergency" className="flex flex-col items-center gap-1 py-3 text-red-600">
            <i className="fa-solid fa-truck-medical text-lg" /> Emergency
          </Link>
        </div>
      </div>
    </>
  );
}
