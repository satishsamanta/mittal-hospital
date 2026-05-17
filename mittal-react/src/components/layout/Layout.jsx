import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Navbar } from './Navbar';
import { MobileNav } from './MobileNav';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';

export function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname, hash } = useLocation();

  // Smooth scroll on route change / hash
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg">
        Skip to content
      </a>
      <TopBar />
      <Navbar onOpenMobile={() => setMobileOpen(true)} />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <main id="main" className="flex-1 pb-20 md:pb-0">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
