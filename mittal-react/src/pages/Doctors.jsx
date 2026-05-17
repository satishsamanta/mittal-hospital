import { useMemo, useState } from 'react';
import { Seo } from '../components/Seo';
import { PageHero, Section, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { doctors, departments } from '../data/site';

export default function Doctors() {
  const [q, setQ] = useState('');
  const [dept, setDept] = useState('all');

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return doctors.filter((d) => {
      const matchesQ = !qq || d.name.toLowerCase().includes(qq) || d.speciality.toLowerCase().includes(qq);
      const matchesDept = dept === 'all' || d.dept === dept;
      return matchesQ && matchesDept;
    });
  }, [q, dept]);

  return (
    <>
      <Seo title="Find a Doctor" path="/doctors" />
      <PageHero
        badge="Our Specialists"
        title="Find the right doctor for you"
        subtitle="Search across 120+ doctors by name, speciality or department."
      />

      <Section className="!pt-4">
        <div className="glass-strong rounded-3xl p-4 md:p-5 mb-8 grid md:grid-cols-[1fr_240px_auto] gap-3 sticky top-20 z-20">
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name or speciality"
              className="form-input pl-11 !rounded-full !bg-white"
              aria-label="Search doctors"
            />
          </div>
          <select value={dept} onChange={(e) => setDept(e.target.value)} className="form-input !rounded-full !bg-white" aria-label="Filter by department">
            <option value="all">All Departments</option>
            {departments.map((d) => (
              <option key={d.slug} value={d.slug}>{d.name}</option>
            ))}
          </select>
          <Button to="/appointment" variant="primary" icon="fa-calendar-check">Book</Button>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <i className="fa-solid fa-user-doctor text-5xl text-slate-300 mb-4" />
            <h3>No doctors match your search</h3>
            <p className="text-slate-500">Try a different keyword or clear the filters.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((d, i) => (
              <FadeIn key={d.name} delay={(i % 8) * 0.05}>
                <div className="card card-hover p-0 overflow-hidden h-full">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={d.image} alt={d.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur text-primary-700">
                      {d.experience}+ yrs
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base mb-0.5">{d.name}</h3>
                    <span className="text-sm text-accent-600 font-semibold">{d.speciality}</span>
                    <div className="text-xs text-slate-500 mt-1">{d.qualification}</div>
                    <div className="text-xs text-slate-500 mt-2 flex items-start gap-1.5">
                      <i className="fa-solid fa-clock mt-0.5" /><span>{d.opd}</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button to="/appointment" variant="primary" size="sm" className="flex-1">Book</Button>
                      <a href={`tel:+911452603603`} className="btn btn-outline btn-sm" aria-label="Call">
                        <i className="fa-solid fa-phone" />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
