import { Seo } from '../components/Seo';
import { PageHero, Section, FadeIn } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { testimonials } from '../data/site';

const longerStories = [
  ...testimonials,
  { name: 'Aman Singh', role: 'Stroke Survivor', text: 'I came in unable to move my right side. Within hours the neurology team had me stable. Three months of rehab later, I am back at work.', rating: 5, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
  { name: 'Geeta Khan', role: 'Cancer Survivor', text: 'The oncology team treated my breast cancer with the kindness of family. I am cancer free for 3 years now.', rating: 5, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' },
];

export default function PatientStories() {
  return (
    <>
      <Seo title="Patient Stories" path="/patient-stories" />
      <PageHero
        badge="Stories of Healing"
        title="Real patients. Real outcomes."
        subtitle="Every patient has a story. Here are a few that inspire us every day."
      />

      <Section className="!pt-4">
        <div className="grid md:grid-cols-2 gap-6">
          {longerStories.map((s, i) => (
            <FadeIn key={s.name + i} delay={i * 0.07}>
              <article className="card card-hover h-full">
                <div className="flex items-center gap-4 mb-4">
                  <img src={s.image} alt={s.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="m-0">{s.name}</h3>
                    <span className="text-sm text-accent-600 font-semibold">{s.role}</span>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">"{s.text}"</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <div className="card text-center max-w-2xl mx-auto">
          <h2 className="mb-2">Share your story</h2>
          <p className="text-slate-600 mb-5">If our care made a difference to you, we would love to hear about it.</p>
          <Button to="/contact" variant="primary" icon="fa-pen">Submit Your Story</Button>
        </div>
      </Section>
    </>
  );
}
