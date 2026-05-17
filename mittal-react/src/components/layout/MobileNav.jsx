import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { departments, hospital } from '../../data/site';
import { Button } from '../ui/Button';

const TOP_LINKS = [
  { label: 'Home', to: '/' },
  {
    label: 'About', children: [
      { label: 'Our Story', to: '/about' },
      { label: 'Core Team', to: '/core-team' },
      { label: 'Leadership', to: '/about#leadership' },
      { label: 'Patient Stories', to: '/patient-stories' },
    ],
  },
  { label: 'Doctors', to: '/doctors' },
  {
    label: 'Departments', children: departments.map(d => ({ label: d.name, to: `/departments/${d.slug}` })),
  },
  {
    label: 'Services', children: [
      { label: 'All Services', to: '/services' },
      { label: 'Video Consultation', to: '/video-consultation' },
      { label: 'Second Opinion', to: '/second-opinion' },
      { label: 'Health Checkup', to: '/health-checkup' },
      { label: 'Blood Bank', to: '/services#blood-bank' },
      { label: 'Dialysis', to: '/services#dialysis' },
    ],
  },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Events & News', to: '/events' },
  { label: 'Blog', to: '/blog' },
  { label: 'Career', to: '/career' },
  { label: 'Academics', to: '/academics' },
  { label: 'Medical Tourism', to: '/medical-tourism' },
  { label: 'Contact', to: '/contact' },
];

export function MobileNav({ open, onClose }) {
  const [openIdx, setOpenIdx] = useState(null);
  const loc = useLocation();
  useEffect(() => { onClose(); /* eslint-disable-next-line */ }, [loc.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="bd"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/40 backdrop-blur-sm z-40"
          />
          <motion.aside
            key="dr"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 right-0 bottom-0 w-[88%] max-w-sm bg-white z-50 shadow-2xl flex flex-col"
            aria-label="Mobile menu"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <Link to="/" className="flex items-center">
                <img src={hospital.logo} alt={hospital.name} className="h-11 w-auto object-contain" />
              </Link>
              <button onClick={onClose} aria-label="Close menu" className="w-9 h-9 grid place-items-center rounded-xl text-navy hover:bg-slate-100">
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-2 scrollbar-thin">
              <ul>
                {TOP_LINKS.map((item, idx) => (
                  <li key={item.label} className="border-b border-slate-50">
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                          className="w-full flex items-center justify-between px-5 py-3.5 text-left text-navy font-medium"
                          aria-expanded={openIdx === idx}
                        >
                          {item.label}
                          <i className={`fa-solid fa-chevron-down text-xs transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {openIdx === idx && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-slate-50"
                            >
                              {item.children.map((c) => (
                                <li key={c.label}>
                                  <Link to={c.to} onClick={onClose} className="block px-8 py-2.5 text-sm text-slate-600 hover:text-primary-600">
                                    {c.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link to={item.to} onClick={onClose} className="block px-5 py-3.5 text-navy font-medium hover:bg-slate-50">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-4 border-t border-slate-100 space-y-2">
              <Button to="/appointment" variant="primary" icon="fa-calendar-check" className="w-full">Book Appointment</Button>
              <Button to="/emergency" variant="emergency" icon="fa-truck-medical" className="w-full">Emergency 24/7</Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
