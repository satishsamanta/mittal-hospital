import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Seo } from '../components/Seo';
import { PageHero, Section, SectionHeader, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { coreTeam, hospital } from '../data/site';

function MemberCard({ m, accent = 'primary' }) {
  const ring = accent === 'accent' ? 'from-accent-400 to-accent-600' : 'from-primary-400 to-accent-500';
  return (
    <article className="card card-hover h-full text-center group">
      <div className="relative mx-auto mb-4 w-32 h-32 sm:w-36 sm:h-36">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${ring} p-[3px] group-hover:scale-105 transition-transform duration-500`}>
          <div className="bg-white rounded-full w-full h-full overflow-hidden">
            <img src={m.image} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <span className="absolute -bottom-1 right-1 w-6 h-6 rounded-full bg-success grid place-items-center text-white text-[10px] shadow-glass">
          <i className="fa-solid fa-check" />
        </span>
      </div>
      <h3 className="mb-1 text-lg">{m.name}</h3>
      <p className="text-sm font-semibold text-accent-600 mb-1">{m.role}</p>
      {m.qualification && <p className="text-xs text-slate-500 mb-3">{m.qualification}</p>}
      <p className="text-sm text-slate-600 leading-relaxed">{m.bio}</p>
    </article>
  );
}

function MemberRow({ m }) {
  return (
    <article className="card card-hover h-full flex flex-col md:flex-row items-start gap-5 group">
      <div className="relative shrink-0 mx-auto md:mx-0">
        <div className="rounded-3xl overflow-hidden w-32 h-40 md:w-36 md:h-44 shadow-glass">
          <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="mb-1 text-lg">{m.name}</h3>
        <p className="text-sm font-semibold text-accent-600 mb-1">{m.role}</p>
        <p className="text-xs text-slate-500 mb-3">{m.qualification}</p>
        <p className="text-sm text-slate-600 leading-relaxed">{m.bio}</p>
      </div>
    </article>
  );
}

export default function CoreTeam() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: hospital.name,
    url: `${hospital.url}/core-team`,
    member: [
      ...coreTeam.promoters,
      ...coreTeam.executives,
      ...coreTeam.hods,
      ...coreTeam.administration,
    ].map((m) => ({
      '@type': 'Person',
      name: m.name,
      jobTitle: m.role,
      description: m.bio,
      image: m.image,
    })),
  };

  return (
    <>
      <Seo
        title="Core Team"
        path="/core-team"
        description={`Meet the founders, leadership and department heads of ${hospital.name} — the team behind Ajmer's leading NABH accredited multi-specialty hospital.`}
        schema={schema}
      />

      <PageHero
        badge="Our People"
        title="The team behind Mittal Hospital"
        subtitle="From our founding family to our department heads — the leaders, clinicians and administrators who power our promise of compassionate, world-class care."
        breadcrumb={
          <span>
            <Link to="/" className="hover:text-primary-600">Home</Link>
            {' / '}
            <Link to="/about" className="hover:text-primary-600">About</Link>
            {' / '}
            Core Team
          </span>
        }
      />

      {/* Promoters */}
      <Section className="!pt-4">
        <SectionHeader
          tag="Founders"
          title='Our <span class="text-gradient">Promoters</span>'
          subtitle="The vision and values that built Mittal Hospital."
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {coreTeam.promoters.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.1}>
              <MemberRow m={m} />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Executive leadership */}
      <Section>
        <SectionHeader
          tag="Executive Leadership"
          title='Running the <span class="text-gradient">hospital, day to day</span>'
          subtitle="A seasoned executive team accountable for clinical quality, operations and financial stewardship."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreTeam.executives.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.08}>
              <MemberCard m={m} />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Heads of Department */}
      <Section>
        <SectionHeader
          tag="Clinical Leadership"
          title='Heads of <span class="text-gradient">Department</span>'
          subtitle="Senior clinicians leading our super-specialty programs and clinical outcomes."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreTeam.hods.map((m, i) => (
            <FadeIn key={m.name} delay={(i % 8) * 0.06}>
              <MemberCard m={m} accent="accent" />
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button to="/doctors" variant="outline" icon="fa-arrow-right">View All 120+ Doctors</Button>
        </div>
      </Section>

      {/* Administration */}
      <Section>
        <SectionHeader
          tag="Administration"
          title='Behind the <span class="text-gradient">scenes</span>'
          subtitle="The administrative team that ensures every patient experience is safe, smooth and kind."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreTeam.administration.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.08}>
              <MemberCard m={m} />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Values strip */}
      <Section>
        <div className="relative overflow-hidden rounded-4xl p-8 md:p-12 text-white"
          style={{ backgroundImage: 'linear-gradient(135deg,#0a2540 0%,#0a4f86 60%,#1a9c8e 100%)' }}>
          <div className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(at 20% 30%, rgba(46,196,182,0.4) 0px, transparent 50%), radial-gradient(at 80% 70%, rgba(255,255,255,0.18) 0px, transparent 50%)',
            }} />
          <div className="relative grid md:grid-cols-[1fr_1fr] gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 backdrop-blur mb-3">Our Promise</span>
              <h2 className="text-white mb-3">One team, one mission — your wellbeing.</h2>
              <p className="text-white/85 leading-relaxed">
                Every member of our team — from our founders to our newest staff nurse — is bound by the same five values: Compassion, Integrity, Excellence, Respect and Teamwork. It's how we have earned the trust of {hospital.address.city} for over 20 years.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { icon: 'fa-heart', title: 'Compassion' },
                { icon: 'fa-shield-halved', title: 'Integrity' },
                { icon: 'fa-award', title: 'Excellence' },
                { icon: 'fa-handshake', title: 'Respect' },
                { icon: 'fa-users', title: 'Teamwork' },
                { icon: 'fa-stethoscope', title: 'Ethics' },
              ].map((v) => (
                <div key={v.title} className="glass-dark rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl grid place-items-center text-white bg-white/15">
                    <i className={`fa-solid ${v.icon}`} />
                  </div>
                  <span className="font-semibold">{v.title}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Join us */}
      <Section>
        <div className="card text-center max-w-2xl mx-auto">
          <span className="section-tag">Grow With Us</span>
          <h2 className="mb-2">Want to be part of this team?</h2>
          <p className="text-slate-600 mb-6">We are always looking for clinicians, nurses, technicians and support staff who share our values.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button to="/career" variant="primary" icon="fa-briefcase">View Open Positions</Button>
            <Button to="/contact" variant="outline" icon="fa-envelope">Get in Touch</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
