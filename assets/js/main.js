/* ============================================
   Mittal Hospital — Main JavaScript
   Navigation, Scroll Effects, Counters, Carousels
   ============================================ */

(function () {
  'use strict';

  // ===== Navbar scroll effect =====
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 20) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // ===== Mobile Nav Toggle =====
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileClose = document.querySelector('.mobile-nav-close');
  const backdrop = document.querySelector('.backdrop');

  const openMobileNav = () => {
    if (!mobileNav) return;
    mobileNav.classList.add('open');
    if (backdrop) backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
  };
  const closeMobileNav = () => {
    if (!mobileNav) return;
    mobileNav.classList.remove('open');
    if (backdrop) backdrop.classList.remove('show');
    document.body.style.overflow = '';
  };

  if (navToggle) navToggle.addEventListener('click', openMobileNav);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileNav);
  if (backdrop) backdrop.addEventListener('click', closeMobileNav);

  // Mobile nav submenu toggles
  document.querySelectorAll('.mobile-nav-menu .has-submenu > a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sub = link.nextElementSibling;
      if (sub) sub.classList.toggle('open');
      const icon = link.querySelector('i');
      if (icon) icon.style.transform = sub && sub.classList.contains('open') ? 'rotate(180deg)' : '';
    });
  });

  // Close mobile nav on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('open')) {
      closeMobileNav();
    }
  });

  // ===== Reveal on scroll (IntersectionObserver) =====
  const animatedElements = document.querySelectorAll('[data-animate]');
  if (animatedElements.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    animatedElements.forEach(el => observer.observe(el));
  } else {
    animatedElements.forEach(el => el.classList.add('is-visible'));
  }

  // ===== Counter animation =====
  const counters = document.querySelectorAll('.counter[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
          const duration = 1800;
          const start = performance.now();
          const step = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const value = target * eased;
            el.textContent = value.toFixed(decimals) + suffix;
            if (t < 1) requestAnimationFrame(step);
            else el.textContent = target.toFixed(decimals) + suffix;
          };
          requestAnimationFrame(step);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(el => counterObserver.observe(el));
  }

  // ===== Smooth scroll for anchors =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 90;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ===== Accordion =====
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');
      // Optional: close siblings
      const accordion = item.parentElement;
      if (accordion && accordion.dataset.single === 'true') {
        accordion.querySelectorAll('.accordion-item.open').forEach(i => {
          if (i !== item) i.classList.remove('open');
        });
      }
      item.classList.toggle('open', !isOpen);
    });
  });

  // ===== Tabs =====
  document.querySelectorAll('[data-tabs]').forEach(tabContainer => {
    const tabs = tabContainer.querySelectorAll('[data-tab]');
    const panels = document.querySelectorAll('[data-panel]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        panels.forEach(p => {
          if (p.dataset.panel === target) p.classList.add('active');
          else p.classList.remove('active');
        });
      });
    });
  });

  // ===== Simple carousel (testimonials, etc.) =====
  document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const prev = carousel.querySelector('.carousel-prev');
    const next = carousel.querySelector('.carousel-next');
    const dots = carousel.querySelectorAll('.carousel-dot');
    if (!track) return;

    let current = 0;
    const slides = track.children;
    const total = slides.length;
    const interval = parseInt(carousel.dataset.interval || '0', 10);

    const go = (idx) => {
      current = (idx + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    };

    if (prev) prev.addEventListener('click', () => go(current - 1));
    if (next) next.addEventListener('click', () => go(current + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => go(i)));

    if (interval > 0) {
      let timer = setInterval(() => go(current + 1), interval);
      carousel.addEventListener('mouseenter', () => clearInterval(timer));
      carousel.addEventListener('mouseleave', () => {
        timer = setInterval(() => go(current + 1), interval);
      });
    }
  });

  // ===== Gallery filter =====
  document.querySelectorAll('[data-gallery-filter]').forEach(filterBar => {
    const buttons = filterBar.querySelectorAll('button[data-filter]');
    const target = document.querySelector(filterBar.dataset.galleryFilter);
    if (!target) return;
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.filter;
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        target.querySelectorAll('[data-category]').forEach(item => {
          if (cat === 'all' || item.dataset.category === cat) {
            item.style.display = '';
            requestAnimationFrame(() => item.classList.remove('hidden'));
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });

  // ===== Doctor search/filter =====
  const doctorSearch = document.querySelector('#doctorSearch');
  const doctorDept = document.querySelector('#doctorDeptFilter');
  const doctorGrid = document.querySelector('#doctorGrid');
  if (doctorGrid && (doctorSearch || doctorDept)) {
    const filterDoctors = () => {
      const term = doctorSearch ? doctorSearch.value.toLowerCase().trim() : '';
      const dept = doctorDept ? doctorDept.value : 'all';
      let visible = 0;
      doctorGrid.querySelectorAll('[data-doctor]').forEach(card => {
        const name = (card.dataset.name || '').toLowerCase();
        const specialty = (card.dataset.specialty || '').toLowerCase();
        const cardDept = card.dataset.department || '';
        const matchesTerm = !term || name.includes(term) || specialty.includes(term);
        const matchesDept = dept === 'all' || cardDept === dept;
        if (matchesTerm && matchesDept) {
          card.style.display = '';
          visible++;
        } else {
          card.style.display = 'none';
        }
      });
      const noResults = document.querySelector('#noDoctorResults');
      if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
    };
    if (doctorSearch) doctorSearch.addEventListener('input', filterDoctors);
    if (doctorDept) doctorDept.addEventListener('change', filterDoctors);
  }

  // ===== Parallax mouse-move on hero (subtle) =====
  const heroVisual = document.querySelector('.hero-visual');
  if (heroVisual && window.matchMedia('(min-width: 1024px)').matches) {
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        heroVisual.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
      });
      hero.addEventListener('mouseleave', () => {
        heroVisual.style.transform = '';
      });
    }
  }

  // ===== Set current year in footer =====
  const yearEl = document.querySelectorAll('.current-year');
  yearEl.forEach(el => { el.textContent = new Date().getFullYear(); });

  // ===== Add page-loaded class on load =====
  window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
  });

  // ===== Active nav link on current page =====
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) link.classList.add('active');
  });
})();
