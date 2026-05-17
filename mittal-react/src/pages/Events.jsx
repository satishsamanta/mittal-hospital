import { Seo } from '../components/Seo';
import { PageHero, Section, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { events } from '../data/site';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function Events() {
  return (
    <>
      <Seo title="Events & News" path="/events" />
      <PageHero
        badge="What's Happening"
        title="Events, camps & community news"
        subtitle="Free health camps, awareness drives and press updates from our hospital."
      />

      <Section className="!pt-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, i) => {
            const d = new Date(e.date);
            return (
              <FadeIn key={e.title} delay={i * 0.07}>
                <article className="card card-hover p-0 overflow-hidden h-full">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={e.image} alt={e.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    <div className="absolute top-3 left-3 glass-strong rounded-xl px-3 py-2 text-center">
                      <div className="text-xl font-bold text-primary-700 leading-none">{d.getDate()}</div>
                      <div className="text-[10px] uppercase text-slate-500 font-semibold tracking-wider">
                        {d.toLocaleDateString('en', { month: 'short' })}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-slate-500 mb-2">{formatDate(e.date)}</div>
                    <h3 className="mb-2">{e.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{e.desc}</p>
                    <Button to="/contact" variant="ghost" size="sm" icon="fa-arrow-right">Register Interest</Button>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Section>
    </>
  );
}
