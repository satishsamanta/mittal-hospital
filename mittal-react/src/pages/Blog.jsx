import { useMemo, useState } from 'react';
import { Seo } from '../components/Seo';
import { PageHero, Section, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { blogPosts } from '../data/site';

const TAGS = ['All', 'Cardiology', 'Diabetes', 'Prevention', 'Maternity'];

export default function Blog() {
  const [tag, setTag] = useState('All');
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const qq = q.toLowerCase();
    return blogPosts.filter((p) =>
      (tag === 'All' || p.tag === tag) &&
      (!qq || p.title.toLowerCase().includes(qq) || p.excerpt.toLowerCase().includes(qq))
    );
  }, [tag, q]);

  return (
    <>
      <Seo title="Health Blog & Press" path="/blog" />
      <PageHero
        badge="Knowledge Hub"
        title="Health articles, by our doctors."
        subtitle="Evidence-based, easy to read. Stay informed about wellness, prevention and the latest in medicine."
      />

      <Section className="!pt-4">
        <div className="glass-strong rounded-3xl p-4 md:p-5 mb-8 grid md:grid-cols-[1fr_auto] gap-3">
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles"
              className="form-input pl-11 !rounded-full !bg-white"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <button key={t} onClick={() => setTag(t)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all
                  ${tag === t ? 'bg-primary-500 text-white' : 'bg-white text-slate-600 hover:bg-primary-50'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.06}>
              <article className="card card-hover p-0 overflow-hidden h-full">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-accent-100 text-accent-700 font-semibold">{p.tag}</span>
                    <span>·</span> <span>{p.readTime} read</span>
                    <span>·</span> <span>{new Date(p.date).toLocaleDateString('en-IN')}</span>
                  </div>
                  <h3 className="mb-2 line-clamp-2">{p.title}</h3>
                  <p className="text-sm text-slate-600 mb-3 line-clamp-3">{p.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-xs text-slate-500">By {p.author}</span>
                    <Button variant="ghost" size="sm" icon="fa-arrow-right">Read</Button>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
          {filtered.length === 0 && (
            <div className="lg:col-span-3 text-center py-12 text-slate-500">No articles match your filters.</div>
          )}
        </div>
      </Section>
    </>
  );
}
