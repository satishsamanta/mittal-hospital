import { useEffect, useRef, useState } from 'react';

export function Counter({ to = 100, suffix = '', duration = 1600 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const animate = (now) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setVal(Math.floor(eased * to));
              if (t < 1) requestAnimationFrame(animate);
              else setVal(to);
            };
            requestAnimationFrame(animate);
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const formatted = to >= 1000 ? val.toLocaleString() : String(val);
  return (
    <span ref={ref} className="font-mono">
      {formatted}
      {suffix}
    </span>
  );
}
