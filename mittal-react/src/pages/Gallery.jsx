import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Seo } from '../components/Seo';
import { PageHero, Section } from '../components/ui/Section';
import { galleryImages } from '../data/site';

const CATS = ['All', 'Facility', 'Events', 'Camps'];

export default function Gallery() {
  const [cat, setCat] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = useMemo(() =>
    cat === 'All' ? galleryImages : galleryImages.filter((g) => g.cat === cat),
    [cat]
  );

  return (
    <>
      <Seo title="Gallery" path="/gallery" />
      <PageHero
        badge="Inside Our Hospital"
        title="A visual tour"
        subtitle="Get a feel for our facilities, events and community health activities."
      />

      <Section className="!pt-4">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all
                ${cat === c ? 'bg-primary-500 text-white shadow-glow-primary' : 'glass text-navy hover:bg-white/80'}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          <AnimatePresence>
            {filtered.map((g, i) => (
              <motion.div
                key={g.src}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: (i % 10) * 0.03 }}
                className="break-inside-avoid mb-4 rounded-3xl overflow-hidden shadow-glass cursor-pointer group"
                onClick={() => setLightbox(g)}
              >
                <img src={g.src} alt={g.alt} loading="lazy"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
                <div className="px-3 py-2 text-xs text-slate-500 bg-white/70 backdrop-blur flex items-center justify-between">
                  <span>{g.alt}</span>
                  <span className="px-2 py-0.5 rounded-full bg-accent-100 text-accent-700 text-[10px] font-bold">{g.cat}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lb"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/80 backdrop-blur z-50 grid place-items-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }}
              src={lightbox.src} alt={lightbox.alt}
              className="max-w-5xl max-h-[85vh] rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={() => setLightbox(null)} aria-label="Close"
              className="absolute top-5 right-5 w-12 h-12 rounded-full grid place-items-center glass-strong text-navy">
              <i className="fa-solid fa-xmark text-xl" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
