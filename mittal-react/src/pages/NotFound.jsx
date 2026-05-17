import { Seo } from '../components/Seo';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" path="/404" />
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="blob w-96 h-96 bg-accent-300/30 -top-20 -left-20" />
        <div className="blob w-72 h-72 bg-primary-300/30 top-10 right-10" />
        <div className="container-px relative text-center max-w-xl mx-auto">
          <div className="text-[7rem] md:text-[10rem] font-display font-bold text-gradient leading-none">404</div>
          <h2 className="mb-2">Page not found</h2>
          <p className="text-slate-600 mb-7">The page you are looking for might have moved or no longer exists.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button to="/" variant="primary" icon="fa-home">Back to Home</Button>
            <Button to="/contact" variant="outline" icon="fa-envelope">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
