import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { PageHero, Section, SectionHeader, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import {
  govSchemes, psuTieUps, empanelments, tpas, internationalPartners, hospital,
} from '../data/site';

/* ---------- Stats strip ---------- */
function StatsStrip() {
  const stats = [
    { num: govSchemes.length, label: 'Government Schemes' },
    { num: psuTieUps.length, label: 'PSU / Govt Tie-ups' },
    { num: empanelments.filter((e) => !e.scheme).length + 4, label: 'Insurance Partners' },
    { num: tpas.length, label: 'TPA Partners' },
  ];
  return (
    <section className="relative -mt-10 z-10">
      <div className="container-px">
        <div className="glass-strong rounded-3xl p-6 md:p-8 shadow-glass-lg grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.06}>
              <div className="text-center md:text-left md:border-l md:first:border-l-0 md:pl-6 md:first:pl-0 border-slate-200">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient leading-none">{s.num}+</div>
                <div className="text-xs md:text-sm text-slate-500 mt-1.5">{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Government schemes section ---------- */
function GovSchemesSection() {
  return (
    <Section id="government-schemes">
      <SectionHeader
        tag="Cashless Government Programs"
        title='Government Health <span class="text-gradient">Schemes</span>'
        subtitle="Mittal Hospital is empanelled with all major central and state government health schemes — cashless treatment as per scheme package rates."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {govSchemes.map((s, i) => (
          <FadeIn key={s.code} delay={(i % 6) * 0.06}>
            <article className="card card-hover h-full relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full opacity-20 blur-2xl"
                style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}aa)` }} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-2xl grid place-items-center text-white font-display font-bold text-xl shrink-0"
                    style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)`, boxShadow: `0 8px 20px -6px ${s.color}66` }}
                  >
                    {s.mark}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-bold" style={{ color: s.color }}>{s.code}</div>
                    <h3 className="text-base m-0 leading-tight">{s.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{s.desc}</p>
                <div className="text-xs text-slate-500 flex items-start gap-2 pt-3 border-t border-slate-100">
                  <i className="fa-solid fa-circle-info text-primary-500 mt-0.5" />
                  <span><strong className="text-navy">Who is eligible:</strong> {s.eligibility}</span>
                </div>
                {s.note && (
                  <div className="mt-3 text-xs bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-800">
                    <i className="fa-solid fa-triangle-exclamation mr-1.5" />
                    {s.note}
                  </div>
                )}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* ---------- PSU / Govt employer tie-ups ---------- */
function PsuSection() {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    if (!qq) return psuTieUps;
    return psuTieUps.filter((p) => p.name.toLowerCase().includes(qq) || p.short.toLowerCase().includes(qq) || p.sector.toLowerCase().includes(qq));
  }, [q]);
  return (
    <Section id="psu-tie-ups">
      <SectionHeader
        tag="Employer Tie-ups"
        title='PSU & Government <span class="text-gradient">Employer Tie-ups</span>'
        subtitle="Direct billing arrangements for employees and dependents of these public-sector undertakings, government departments and educational institutions."
      />

      <div className="max-w-xl mx-auto mb-8 relative">
        <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="search" value={q} onChange={(e) => setQ(e.target.value)}
          placeholder="Search by employer or sector (e.g. railway, oil, bank)"
          className="form-input pl-11 !rounded-full !bg-white"
          aria-label="Search PSU tie-ups"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-slate-500">No match — try a different keyword.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((p, i) => (
            <FadeIn key={p.name} delay={(i % 12) * 0.03}>
              <div className="card card-hover h-full p-4 flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 rounded-xl grid place-items-center text-white font-bold text-xs"
                  style={{ background: 'linear-gradient(135deg,#0a6cb8,#2ec4b6)' }}>
                  {p.short.slice(0, 4)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-bold text-navy leading-tight">{p.name}</div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">{p.sector}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      )}
    </Section>
  );
}

/* ---------- Insurance partners ---------- */
function InsuranceSection() {
  const insurers = empanelments.filter((e) => !e.scheme);
  return (
    <Section id="insurance">
      <SectionHeader
        tag="Health Insurance"
        title='Cashless Insurance <span class="text-gradient">Partners</span>'
        subtitle="Empanelled with leading insurers — bring your insurance card and a valid ID for cashless pre-authorisation."
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {insurers.map((p, i) => (
          <FadeIn key={p.name} delay={(i % 12) * 0.03}>
            <div className="card card-hover h-full p-4 flex items-center gap-3">
              <div
                className="w-12 h-12 shrink-0 rounded-xl grid place-items-center text-white font-display font-bold text-lg"
                style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`, boxShadow: `0 6px 16px -4px ${p.color}55` }}
              >
                {p.mark}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold leading-tight truncate" style={{ color: p.color }}>{p.short}</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5 truncate">{p.tagline}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* ---------- TPA partners ---------- */
function TpaSection() {
  return (
    <Section id="tpas">
      <SectionHeader
        tag="Third-Party Administrators"
        title='TPA <span class="text-gradient">Partners</span>'
        subtitle="Cashless claims processing through major TPAs — present your TPA card at admission and we will handle pre-authorisation."
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tpas.map((p, i) => (
          <FadeIn key={p.name} delay={(i % 12) * 0.03}>
            <div className="card card-hover h-full p-4 flex items-center gap-3">
              <div
                className="w-11 h-11 shrink-0 rounded-xl grid place-items-center text-white font-display font-bold"
                style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`, boxShadow: `0 6px 16px -4px ${p.color}55` }}
              >
                {p.mark}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold leading-tight truncate" style={{ color: p.color }}>{p.name}</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">TPA</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* ---------- International partners ---------- */
function InternationalSection() {
  return (
    <Section id="international">
      <SectionHeader
        tag="International Assistance"
        title='Global Assistance <span class="text-gradient">Partners</span>'
        subtitle="Coordinated care and direct billing with leading international travel-insurance and medical-assistance networks."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {internationalPartners.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.06}>
            <article className="card card-hover h-full text-center">
              <div
                className="w-14 h-14 rounded-2xl mx-auto mb-3 grid place-items-center text-white font-display font-bold text-xl"
                style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`, boxShadow: `0 6px 16px -4px ${p.color}55` }}
              >
                {p.mark}
              </div>
              <h3 className="text-base mb-1">{p.name}</h3>
              <div className="text-[10px] uppercase tracking-wider text-slate-500">{p.region}</div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* ---------- How to avail cashless ---------- */
function HowToAvailSection() {
  const steps = [
    { icon: 'fa-id-card', title: 'Carry your card', text: 'Bring your insurance / TPA / scheme card along with a valid government photo ID at admission.' },
    { icon: 'fa-file-medical', title: 'Pre-authorisation', text: 'Our billing desk will collect details and send a pre-authorisation request to the insurer / TPA / scheme.' },
    { icon: 'fa-hourglass-half', title: 'Approval', text: 'Approval typically arrives in a few hours for planned admissions; expedited for emergencies.' },
    { icon: 'fa-bed-pulse', title: 'Treatment & discharge', text: 'You receive treatment without paying out of pocket (subject to scheme limits). Final settlement happens at discharge.' },
  ];
  return (
    <Section>
      <SectionHeader
        tag="How It Works"
        title='Avail Cashless Treatment in <span class="text-gradient">4 Steps</span>'
        subtitle="A simple process — our insurance desk will guide you through every step."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.08}>
            <article className="card card-hover h-full relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full grid place-items-center text-white font-bold text-sm shadow-glow-primary"
                style={{ background: 'linear-gradient(135deg,#0a6cb8,#2ec4b6)' }}>
                {i + 1}
              </div>
              <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 grid place-items-center mb-4">
                <i className={`fa-solid ${s.icon} text-lg`} />
              </div>
              <h3 className="mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 m-0">{s.text}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Important note ---------- */
function ImportantNote() {
  return (
    <Section className="!py-10">
      <FadeIn>
        <div className="max-w-4xl mx-auto card border-l-4 border-l-amber-500">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-amber-100 text-amber-700 grid place-items-center text-lg">
              <i className="fa-solid fa-circle-info" />
            </div>
            <div>
              <h3 className="mb-2">A quick clarification — Chiranjeevi vs Chief Minister Ayushman Health Yojana</h3>
              <p className="text-slate-600 leading-relaxed m-0 mb-2">
                Mittal Hospital’s official empanelment page lists <strong className="text-navy">“Chief Minister Ayushman Health Yojana” (CMAHY)</strong> — it does not list a separate “Chiranjeevi” programme.
                The two are the rebranded/renamed iterations of Rajasthan’s state-cover scheme. If you previously held a Chiranjeevi card, please carry your latest scheme card and a valid ID at admission — our insurance desk will verify eligibility.
              </p>
              <p className="text-sm text-slate-500 m-0">
                As per the official Rajasthan portal, RGHS beneficiaries are entitled to cashless hospitalisation at empanelled hospitals, with the treatment cost borne by the government as per package rates.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

/* ---------- CTA band ---------- */
function HelpBand() {
  return (
    <Section className="!py-10">
      <div className="relative rounded-4xl overflow-hidden">
        <img src={hospital.buildingMain} alt="" aria-hidden
          className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/85 to-primary-700/55" />
        <div className="relative p-8 md:p-14 text-white grid md:grid-cols-[1.5fr_1fr] gap-6 items-center">
          <div>
            <h2 className="text-white mb-2">Need help with your insurance or government scheme?</h2>
            <p className="text-white/85 text-lg">Our insurance desk is open 8 AM – 8 PM. Bring your card — we will handle the paperwork.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button to="/contact" variant="glass" size="lg" icon="fa-envelope" className="!text-primary-700">Insurance Desk</Button>
            <a href={`tel:${hospital.phone}`} className="btn btn-lg !bg-white !text-primary-700 hover:!bg-white shadow-md">
              <i className="fa-solid fa-phone" /> {hospital.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function Empanelment() {
  return (
    <>
      <Seo
        title="Empanelment & Cashless Treatment"
        path="/empanelment"
        description={`Cashless treatment at ${hospital.shortName}, Ajmer — empanelled with RGHS, CGHS, ECHS, Chief Minister Ayushman Health Yojana, ESIC, 25+ PSU/government employers, leading health insurers and major TPAs.`}
      />

      <PageHero
        badge="Cashless Treatment Network"
        title="Empanelment & Cashless Treatment"
        subtitle="Mittal Hospital is empanelled with major government schemes, public-sector employers, health insurers, TPAs and international assistance partners — patients can access cashless treatment with their card and a valid ID."
        breadcrumb={<span><Link to="/" className="hover:text-primary-600">Home</Link> / Empanelment</span>}
      />

      <StatsStrip />
      <ImportantNote />
      <GovSchemesSection />
      <PsuSection />
      <InsuranceSection />
      <TpaSection />
      <InternationalSection />
      <HowToAvailSection />
      <HelpBand />
    </>
  );
}
