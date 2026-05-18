import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Seo } from '../components/Seo';
import { Section, SectionHeader, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Counter } from '../components/ui/Counter';
import { hospital, departments, doctors, testimonials, empanelments, blogPosts } from '../data/site';

function HeroSection() {
  return (
    <section className="relative pt-44 md:pt-56 pb-24 md:pb-32 -mt-[88px] md:-mt-[120px] overflow-hidden">
      {/* Full-bleed building image extending fully behind the header */}
      <div className="absolute inset-0 -z-10">
        <img
          src={hospital.buildingMain}
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Light overlays — just enough for text readability while keeping the building clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/55 via-navy/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-navy/15" />
      </div>

      {/* Subtle floating medical icons over image */}
      <div className="floating-icon top-32 right-8 md:right-24 text-5xl text-white/15 animate-float-reverse pointer-events-none" style={{ animationDelay: '1s' }}>
        <i className="fa-solid fa-heart-pulse" />
      </div>
      <div className="floating-icon bottom-24 left-6 md:left-24 text-5xl text-white/10 animate-float-slow pointer-events-none">
        <i className="fa-solid fa-stethoscope" />
      </div>

      <div className="container-px relative">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-white"
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 backdrop-blur border border-white/25 text-white mb-4">
              <i className="fa-solid fa-shield-halved mr-1.5 text-accent-300" />
              First NABH Accredited Hospital · Ajmer Division
            </span>
            <h1 className="mt-3 mb-5 text-white" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.55), 0 4px 30px rgba(0,0,0,0.4)' }}>
              Compassionate Care, <br />
              <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.4))' }}>
                Modern Medicine
              </span>
              {' '}— Always for You.
            </h1>
            <p className="text-lg text-white leading-relaxed mb-7 max-w-xl" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.55), 0 2px 16px rgba(0,0,0,0.35)' }}>
              For over 20 years, Mittal Hospital & Research Centre has set the benchmark for ethical, quality healthcare in Ajmer. Super-specialty treatments under one roof, delivered by India's finest medical talent.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button to="/appointment" variant="primary" size="lg" icon="fa-calendar-check">
                Book Appointment
              </Button>
              <Button to="/doctors" variant="glass" size="lg" icon="fa-user-doctor"
                className="!bg-white/15 !text-white hover:!bg-white/25 backdrop-blur border border-white/30">
                Find a Doctor
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { v: 20, s: '+', l: 'Years of Trust' },
                { v: 120, s: '+', l: 'Expert Doctors' },
                { v: 250, s: '+', l: 'Bed Capacity' },
              ].map((s) => (
                <div key={s.l} style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="text-xs text-white/85 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating glass info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="hidden lg:block relative h-[460px]"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="glass-strong absolute top-4 left-4 px-5 py-4 rounded-3xl shadow-glass-lg flex items-center gap-3 animate-float"
            >
              <div className="w-12 h-12 rounded-2xl grid place-items-center text-white text-xl shrink-0"
                style={{ background: 'linear-gradient(135deg,#0a6cb8,#2ec4b6)' }}>
                <i className="fa-solid fa-award" />
              </div>
              <div>
                <div className="font-bold text-navy">NABH Accredited</div>
                <div className="text-xs text-slate-500">Quality you can trust</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }}
              className="glass-strong absolute top-1/2 right-0 -translate-y-1/2 px-5 py-4 rounded-3xl shadow-glass-lg flex flex-col items-center gap-2 animate-float"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="flex -space-x-2">
                {doctors.slice(0, 4).map((d) => (
                  <img key={d.name} src={d.image} alt={d.name} className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <div className="text-xs font-bold text-navy mt-1">120+ Specialists</div>
              <div className="text-[10px] text-slate-500">Online & in-person</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
              className="glass-strong absolute bottom-4 left-8 px-5 py-4 rounded-3xl shadow-glass-lg flex items-center gap-3 animate-float-reverse"
            >
              <div className="w-12 h-12 rounded-2xl grid place-items-center text-white text-xl shrink-0"
                style={{ background: 'linear-gradient(135deg,#e63946,#c1121f)' }}>
                <i className="fa-solid fa-truck-medical" />
              </div>
              <div>
                <div className="font-bold text-navy">24/7 Emergency</div>
                <div className="text-xs text-slate-500">Always available</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave divider at bottom */}
      <div className="absolute -bottom-px left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}

function TrustBar() {
  const items = [
    {
      title: 'NABH Accredited',
      desc: 'Recognized for quality, patient safety and ethical clinical practice across every department.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: '24/7 Emergency',
      desc: 'Round-the-clock trauma care, ICU and ambulance services with senior consultants on call.',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Expert Specialists',
      desc: '120+ NABH-credentialed doctors across every major super-specialty — all under one roof.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Affordable Care',
      desc: 'World-class treatment at transparent, fair pricing — written estimates before every admission.',
      image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=80',
    },
  ];
  return (
    <Section className="pt-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it, i) => (
          <FadeIn key={it.title} delay={i * 0.08}>
            <article className="card card-hover p-0 overflow-hidden h-full group">
              <div className="aspect-[5/3] overflow-hidden">
                <img src={it.image} alt={it.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy" />
              </div>
              <div className="p-5">
                <h4 className="mb-1.5">{it.title}</h4>
                <p className="text-sm text-slate-600 m-0 leading-relaxed">{it.desc}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function DepartmentsSection() {
  return (
    <Section id="departments">
      <SectionHeader
        tag="Our Specialties"
        title='Comprehensive <span class="text-gradient">Super-Specialty Care</span>'
        subtitle="From advanced cardiac procedures to complex neurosurgery, our specialists deliver world-class outcomes across every major discipline."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {departments.slice(0, 8).map((d, i) => (
          <FadeIn key={d.slug} delay={(i % 8) * 0.05}>
            <Link to={`/departments/${d.slug}`} className="block card card-hover p-0 overflow-hidden h-full group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={d.image} alt={d.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                <h3 className="absolute bottom-3 left-4 right-4 text-white text-lg m-0">{d.name}</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600 mb-3 line-clamp-2">{d.short}</p>
                <span className="text-sm font-semibold text-primary-600 inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  Read more <i className="fa-solid fa-arrow-right text-xs" />
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button to="/departments" variant="outline" size="lg" icon="fa-arrow-right">View All Departments</Button>
      </div>
    </Section>
  );
}

function AboutPreview() {
  const points = [
    'NABH Accredited', '24/7 Emergency Services', '250+ Bed Capacity',
    'Modular OT Complex', 'ICU, NICU & CCU', 'Medical Tourism Ready'
  ];
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div className="relative">
            <div className="rounded-4xl overflow-hidden shadow-glass-lg aspect-[4/3]">
              <img
                src={hospital.buildingSecondary}
                alt="Mittal Hospital building, Ajmer" className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="glass-strong absolute -bottom-4 -left-4 px-5 py-4 rounded-2xl shadow-glass-lg max-w-[240px] flex items-center gap-3">
              <div className="w-12 h-12 rounded-full grid place-items-center text-white"
                style={{ background: 'linear-gradient(135deg,#0a6cb8,#2ec4b6)' }}>
                <i className="fa-solid fa-trophy text-lg" />
              </div>
              <div>
                <div className="text-2xl font-bold text-navy leading-none">20+</div>
                <div className="text-xs text-slate-500 mt-0.5">Years of Excellence</div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <span className="section-tag">About Us</span>
          <h2 className="mb-4">
            Healing Hands, <span className="text-gradient">Caring Hearts</span>
          </h2>
          <p className="text-slate-600 mb-3">
            Established in 2005 as Gheesibai Memorial Mittal Hospital, we have grown to become the largest private hospital in the district and the first to earn full NABH accreditation in the Ajmer division.
          </p>
          <p className="text-slate-600 mb-6">
            Our mission is simple — provide quality healthcare under one roof with competent, devoted professionals at affordable cost — in an ethical and hygienic environment.
          </p>
          <ul className="grid grid-cols-2 gap-3 mb-7">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
                <i className="fa-solid fa-circle-check text-success" /> {p}
              </li>
            ))}
          </ul>
          <Button to="/about" variant="primary" icon="fa-arrow-right">Learn More About Us</Button>
        </FadeIn>
      </div>
    </Section>
  );
}

function DoctorsSection() {
  return (
    <Section>
      <SectionHeader
        tag="Our Team"
        title='Meet Our <span class="text-gradient">Expert Doctors</span>'
        subtitle="A team of compassionate specialists committed to delivering personalized, evidence-based care."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {doctors.slice(0, 4).map((d, i) => (
          <FadeIn key={d.name} delay={i * 0.08}>
            <div className="card card-hover p-0 overflow-hidden h-full">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={d.image} alt={d.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 justify-center opacity-0 hover:opacity-100 transition-opacity">
                  {['fa-facebook-f', 'fa-linkedin-in', 'fa-x-twitter'].map((ic) => (
                    <a key={ic} href="#" aria-label={ic} className="w-8 h-8 rounded-full glass-strong grid place-items-center text-primary-600">
                      <i className={`fa-brands ${ic} text-xs`} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg mb-0.5">{d.name}</h3>
                <span className="text-sm text-accent-600 font-semibold">{d.speciality}</span>
                <div className="text-xs text-slate-500 mt-1">{d.qualification}</div>
                <div className="flex gap-2 mt-4">
                  <Button to="/appointment" variant="primary" size="sm" className="flex-1">Book</Button>
                  <Button to="/doctors" variant="outline" size="sm" className="flex-1">Profile</Button>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button to="/doctors" variant="outline" size="lg" icon="fa-arrow-right">View All Doctors</Button>
      </div>
    </Section>
  );
}

function PatientServicesPromo() {
  const items = [
    {
      to: '/video-consultation',
      tag: 'Online OPD',
      title: 'Video Consultation',
      text: 'Talk to a Mittal Hospital specialist over a secure encrypted video call — from your home, in under 24 hours. Digital prescription delivered instantly.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    },
    {
      to: '/second-opinion',
      tag: 'Expert Review',
      title: 'Second Opinion',
      text: 'Upload your medical reports — receive a thorough, written specialist opinion within 48 hours. Tumor-board review available for cancer cases.',
      image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80',
    },
    {
      to: '/health-checkup',
      tag: 'Preventive Care',
      title: 'Health Checkup',
      text: 'Six packages — from a 2-hour Basic screen to the full Executive workup, with same-day reports and a physician summary.',
      image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=80',
    },
  ];
  return (
    <Section>
      <SectionHeader
        tag="Patient Services"
        title='Care, beyond the <span class="text-gradient">hospital walls</span>'
        subtitle="Talk to specialists online, get a second opinion on your reports, or book a preventive health package — all in a few clicks."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <FadeIn key={it.to} delay={i * 0.1}>
            <Link to={it.to} className="block h-full card card-hover p-0 overflow-hidden group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={it.image} alt={it.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/90 backdrop-blur text-primary-700">
                  {it.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2">{it.title}</h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{it.text}</p>
                <span className="text-sm font-semibold text-primary-600 inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  Get started <i className="fa-solid fa-arrow-right text-xs" />
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function StatsBand() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden text-white"
      style={{
        backgroundImage: 'linear-gradient(135deg,#0a2540 0%,#0a4f86 100%)'
      }}>
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(at 10% 20%, rgba(46,196,182,0.4) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(10,108,184,0.5) 0px, transparent 50%)'
        }} />
      <div className="container-px relative">
        <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {hospital.stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08}>
              <div className="text-center glass-dark rounded-3xl p-6">
                <div className="w-12 h-12 rounded-2xl mx-auto mb-3 grid place-items-center text-white text-lg bg-white/10">
                  <i className={`fa-solid ${s.icon}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-white/70 mt-1">{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <Section>
      <SectionHeader
        tag="Patient Stories"
        title='What Our <span class="text-gradient">Patients Say</span>'
        subtitle="Real stories from people whose lives were touched by our care."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.08}>
            <div className="card card-hover h-full">
              <div className="text-accent-500 mb-3">
                {Array.from({ length: t.rating }).map((_, k) => (<i key={k} className="fa-solid fa-star text-sm mr-0.5" />))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-navy text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function BlogSection() {
  return (
    <Section>
      <SectionHeader
        tag="Health Library"
        title='Latest from our <span class="text-gradient">Doctors</span>'
        subtitle="Expert-written articles on staying healthy and informed."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.slice(0, 3).map((p, i) => (
          <FadeIn key={p.slug} delay={i * 0.1}>
            <article className="card card-hover p-0 overflow-hidden h-full">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-accent-100 text-accent-700 font-semibold">{p.tag}</span>
                  <span>·</span> <span>{p.readTime} read</span>
                </div>
                <h3 className="mb-2 line-clamp-2">{p.title}</h3>
                <p className="text-sm text-slate-600 mb-3 line-clamp-2">{p.excerpt}</p>
                <Link to="/blog" className="text-sm font-semibold text-primary-600 inline-flex items-center gap-1.5 hover:gap-3 transition-all">
                  Read more <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function PartnerLogo({ p }) {
  // Brand logo card: round colour chip with initial + brand name + tagline
  return (
    <div
      className="shrink-0 h-24 w-52 bg-white rounded-2xl border border-slate-200 shadow-glass flex items-center gap-3 px-4 hover:shadow-glass-lg hover:-translate-y-0.5 transition-all duration-300"
      title={p.name}
    >
      <div
        className="w-12 h-12 shrink-0 rounded-xl grid place-items-center text-white font-display font-bold text-lg shadow-md"
        style={{
          background: `linear-gradient(135deg, ${p.color} 0%, ${p.color}cc 100%)`,
          boxShadow: `0 6px 16px -4px ${p.color}55`,
        }}
        aria-hidden
      >
        {p.mark}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[13px] font-bold leading-tight" style={{ color: p.color }}>{p.short}</div>
        <div className="text-[9px] uppercase tracking-wider text-slate-500 mt-0.5 truncate">{p.tagline}</div>
      </div>
    </div>
  );
}

function EmpanelmentsMarquee() {
  const list = [...empanelments, ...empanelments];
  return (
    <section className="py-14 overflow-hidden bg-white/50">
      <div className="container-px text-center mb-10">
        <span className="section-tag">Insurance Partners</span>
        <h3 className="text-xl md:text-2xl">Empanelled with leading insurers & TPAs</h3>
        <p className="text-sm text-slate-500 mt-2 max-w-2xl mx-auto">Cashless treatment available with all major insurers and government schemes — bring your card and a valid ID.</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex gap-5 marquee-track items-center">
          {list.map((p, i) => (
            <PartnerLogo key={`${p.name}-${i}`} p={p} />
          ))}
        </div>
        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <Section className="!py-10">
      <div className="relative rounded-4xl overflow-hidden p-8 md:p-14 text-white"
        style={{ backgroundImage: 'linear-gradient(135deg,#0a6cb8 0%,#2ec4b6 100%)' }}>
        <div className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(at 20% 30%, rgba(255,255,255,0.25) 0px, transparent 50%), radial-gradient(at 80% 70%, rgba(255,255,255,0.18) 0px, transparent 50%)'
          }} />
        <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-6 items-center">
          <div>
            <h2 className="text-white mb-2">Ready to schedule your visit?</h2>
            <p className="text-white/90 text-lg">Book an appointment online in under 60 seconds — no calls, no waiting.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button to="/appointment" variant="glass" size="lg" icon="fa-calendar-check" className="!text-primary-700">Book Now</Button>
            <Button href={`tel:${hospital.phone}`} variant="primary" size="lg" icon="fa-phone" className="!bg-white !text-primary-700 hover:!bg-white">
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <Seo title="Modern Hospital Care in Ajmer" path="/" />
      <HeroSection />
      <TrustBar />
      <DepartmentsSection />
      <AboutPreview />
      <DoctorsSection />
      <PatientServicesPromo />
      <StatsBand />
      <TestimonialsSection />
      <BlogSection />
      <EmpanelmentsMarquee />
      <CtaBand />
    </>
  );
}
