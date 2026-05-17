import { motion } from 'framer-motion';

export function Section({ id, className = '', children, bg = 'transparent' }) {
  return (
    <section id={id} className={`section ${className}`} style={bg !== 'transparent' ? { background: bg } : undefined}>
      <div className="container-px relative">{children}</div>
    </section>
  );
}

export function SectionHeader({ tag, title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-3xl mb-12 ${alignClass}`}
    >
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className="mb-4" dangerouslySetInnerHTML={{ __html: title }} />
      {subtitle && <p className="text-slate-600 text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PageHero({ title, subtitle, breadcrumb, badge }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="blob w-96 h-96 bg-accent-300/40 -top-20 -left-20" />
      <div className="blob w-80 h-80 bg-primary-300/30 top-10 right-0" />
      <div className="container-px relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {badge && <span className="section-tag mb-4">{badge}</span>}
          <h1 className="mb-4">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-slate-600 leading-relaxed">{subtitle}</p>}
          {breadcrumb && (
            <nav aria-label="Breadcrumb" className="mt-6 text-sm text-slate-500">
              {breadcrumb}
            </nav>
          )}
        </motion.div>
      </div>
    </section>
  );
}
