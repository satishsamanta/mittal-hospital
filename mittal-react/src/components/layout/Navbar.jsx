import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { hospital, departments } from '../../data/site';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  {
    label: 'About', to: '/about',
    children: [
      { label: 'Our Story', to: '/about' },
      { label: 'Core Team', to: '/core-team' },
      { label: 'Leadership', to: '/about#leadership' },
      { label: 'NABH Accreditation', to: '/about#nabh' },
      { label: 'Milestones', to: '/about#milestones' },
      { label: 'Patient Stories', to: '/patient-stories' },
    ],
  },
  { label: 'Doctors', to: '/doctors' },
  {
    label: 'Departments', to: '/departments',
    childrenFromDepts: true,
  },
  {
    label: 'Services', to: '/services',
    children: [
      { label: 'Video Consultation', to: '/video-consultation' },
      { label: 'Second Opinion', to: '/second-opinion' },
      { label: 'Health Checkup', to: '/health-checkup' },
      { label: 'Blood Bank', to: '/services#blood-bank' },
      { label: 'Cath Lab', to: '/services#cath-lab' },
      { label: 'Dialysis', to: '/services#dialysis' },
      { label: 'Physiotherapy', to: '/services#physiotherapy' },
    ],
  },
  { label: 'Facilities', to: '/facilities' },
  {
    label: 'More', to: '#',
    children: [
      { label: 'Gallery', to: '/gallery' },
      { label: 'Events & News', to: '/events' },
      { label: 'Blog / Press', to: '/blog' },
      { label: 'Academics', to: '/academics' },
      { label: 'Career', to: '/career' },
      { label: 'Medical Tourism', to: '/medical-tourism' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
];

export function Navbar({ onOpenMobile }) {
  const [scrolled, setScrolled] = useState(false);
  const [openIdx, setOpenIdx] = useState(null);
  const loc = useLocation();
  const isHome = loc.pathname === '/';
  // On Home, navbar floats transparent over the building hero image until user scrolls.
  // On other pages, navbar stays light/frosted glass to sit cleanly on lighter backgrounds.
  const onImage = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpenIdx(null); }, [loc.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-glass py-2'
          : onImage
            ? 'bg-transparent py-3 border-b border-white/10'
            : 'bg-white/40 backdrop-blur-md py-3'
      }`}
    >
      <div className="container-px flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center shrink-0" aria-label={`${hospital.name} — home`}>
          <img
            src={hospital.logo}
            alt={hospital.name}
            className="h-12 md:h-14 w-auto object-contain"
            loading="eager"
            width="220" height="56"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {NAV_ITEMS.map((item, idx) => {
            const kids = item.childrenFromDepts ? departments.map(d => ({ label: d.name, to: `/departments/${d.slug}` })) : item.children;
            const hasKids = kids && kids.length > 0;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasKids && setOpenIdx(idx)}
                onMouseLeave={() => hasKids && setOpenIdx(null)}
              >
                <NavLink
                  to={item.to === '#' ? loc.pathname : item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 transition-colors ${
                      isActive && item.to !== '#'
                        ? (onImage ? 'text-white bg-white/15' : 'text-primary-600 bg-primary-50')
                        : (onImage ? 'text-white hover:text-accent-300' : 'text-navy hover:text-primary-600')
                    }`
                  }
                >
                  {item.label}
                  {hasKids && <i className="fa-solid fa-chevron-down text-[9px] mt-0.5" />}
                </NavLink>
                <AnimatePresence>
                  {hasKids && openIdx === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full pt-2 min-w-[240px]"
                    >
                      <ul className="glass-strong rounded-2xl py-2 shadow-glass-lg overflow-hidden">
                        {kids.map((c) => (
                          <li key={c.label}>
                            <Link
                              to={c.to}
                              className="block px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button to="/appointment" variant="primary" size="sm" icon="fa-calendar-check" className="hidden md:inline-flex">
            Book Appointment
          </Button>
          <button
            onClick={onOpenMobile}
            className={`lg:hidden w-10 h-10 grid place-items-center rounded-xl transition-colors
              ${onImage ? 'bg-white/15 backdrop-blur border border-white/25 text-white' : 'glass text-navy'}`}
            aria-label="Open menu"
          >
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </div>
    </header>
  );
}
