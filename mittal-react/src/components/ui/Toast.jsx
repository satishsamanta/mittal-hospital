import { createContext, useCallback, useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [items, setItems] = useState([]);
  const remove = (id) => setItems((arr) => arr.filter((t) => t.id !== id));
  const push = useCallback((toast) => {
    const id = Math.random().toString(36).slice(2);
    setItems((arr) => [...arr, { id, type: 'success', ...toast }]);
    setTimeout(() => remove(id), toast.duration || 4500);
  }, []);
  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {items.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              role="status"
              aria-live="polite"
              className={`glass-strong px-4 py-3 rounded-2xl shadow-glass-lg min-w-[260px] max-w-sm pointer-events-auto flex gap-3 items-start ${
                t.type === 'error' ? 'border-l-4 border-l-red-500' : t.type === 'info' ? 'border-l-4 border-l-primary-500' : 'border-l-4 border-l-success'
              }`}
            >
              <i className={`fa-solid mt-0.5 ${
                t.type === 'error' ? 'fa-circle-exclamation text-red-500' :
                t.type === 'info' ? 'fa-circle-info text-primary-500' :
                'fa-circle-check text-success'
              }`} />
              <div className="flex-1">
                {t.title && <div className="font-semibold text-navy text-sm">{t.title}</div>}
                <div className="text-sm text-slate-600">{t.message}</div>
              </div>
              <button onClick={() => remove(t.id)} aria-label="Close" className="text-slate-400 hover:text-slate-600">
                <i className="fa-solid fa-xmark" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside ToastProvider');
  return ctx.push;
}
