/* ============================================
   Mittal Hospital — Forms (Validation, Multi-step)
   Secure, accessible, mobile-friendly
   ============================================ */

(function () {
  'use strict';

  // ===== Toast notification =====
  const showToast = (message, type = 'success') => {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    toast.innerHTML = `
      <div class="toast-icon">
        <i class="fa-solid fa-${type === 'success' ? 'check' : 'exclamation'}"></i>
      </div>
      <div class="toast-message">${message}</div>
    `;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  };
  window.showToast = showToast;

  // ===== Validators =====
  const validators = {
    required: (val) => val.trim().length > 0,
    email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val),
    phone: (val) => /^[+]?[\d\s()-]{10,15}$/.test(val.trim()),
    minLength: (val, len) => val.trim().length >= len,
    maxLength: (val, len) => val.trim().length <= len,
    numeric: (val) => /^\d+$/.test(val),
    age: (val) => {
      const n = parseInt(val, 10);
      return !isNaN(n) && n >= 0 && n <= 120;
    },
    name: (val) => /^[A-Za-zÀ-ſ\s'.-]{2,60}$/.test(val.trim()),
    date: (val) => !isNaN(Date.parse(val)),
    futureDate: (val) => {
      const d = new Date(val);
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      return !isNaN(d.getTime()) && d >= now;
    },
    file: (input, maxMB = 5) => {
      if (!input.files || !input.files.length) return true;
      const file = input.files[0];
      return file.size <= maxMB * 1024 * 1024;
    },
    fileType: (input, allowed) => {
      if (!input.files || !input.files.length) return true;
      const file = input.files[0];
      const ext = file.name.split('.').pop().toLowerCase();
      return allowed.includes(ext);
    }
  };

  // ===== Sanitize for safe display =====
  const sanitize = (str) => {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  };

  // ===== Validate a single field =====
  const validateField = (field) => {
    const group = field.closest('.form-group');
    if (!group) return true;
    const value = field.value || '';
    const rules = (field.dataset.validate || '').split('|').filter(Boolean);
    let valid = true;
    let errorMsg = '';

    for (const rule of rules) {
      const [name, ...args] = rule.split(':');
      const arg = args.join(':');

      if (name === 'required' && !validators.required(value)) {
        valid = false; errorMsg = field.dataset.errorRequired || 'This field is required.'; break;
      }
      if (value.trim() === '' && name !== 'required') continue;
      if (name === 'email' && !validators.email(value)) {
        valid = false; errorMsg = 'Please enter a valid email address.'; break;
      }
      if (name === 'phone' && !validators.phone(value)) {
        valid = false; errorMsg = 'Please enter a valid phone number (10-15 digits).'; break;
      }
      if (name === 'name' && !validators.name(value)) {
        valid = false; errorMsg = 'Please enter a valid name (2-60 letters).'; break;
      }
      if (name === 'minLength' && !validators.minLength(value, parseInt(arg))) {
        valid = false; errorMsg = `Minimum ${arg} characters required.`; break;
      }
      if (name === 'maxLength' && !validators.maxLength(value, parseInt(arg))) {
        valid = false; errorMsg = `Maximum ${arg} characters allowed.`; break;
      }
      if (name === 'numeric' && !validators.numeric(value)) {
        valid = false; errorMsg = 'Only numbers are allowed.'; break;
      }
      if (name === 'age' && !validators.age(value)) {
        valid = false; errorMsg = 'Please enter a valid age (0-120).'; break;
      }
      if (name === 'futureDate' && !validators.futureDate(value)) {
        valid = false; errorMsg = 'Please choose today or a future date.'; break;
      }
      if (name === 'file' && !validators.file(field, parseInt(arg) || 5)) {
        valid = false; errorMsg = `File size must be under ${arg || 5}MB.`; break;
      }
      if (name === 'fileType') {
        const allowed = arg.split(',');
        if (!validators.fileType(field, allowed)) {
          valid = false; errorMsg = `Allowed types: ${allowed.join(', ')}.`; break;
        }
      }
    }

    const errorEl = group.querySelector('.form-error');
    if (errorEl) errorEl.textContent = errorMsg;
    group.classList.toggle('invalid', !valid);
    group.classList.toggle('valid', valid && value.trim() !== '' && rules.length > 0);
    field.setAttribute('aria-invalid', !valid);

    return valid;
  };

  // ===== Validate whole form (or step) =====
  const validateContainer = (container) => {
    const fields = container.querySelectorAll('[data-validate]');
    let allValid = true;
    fields.forEach(field => {
      if (!validateField(field)) allValid = false;
    });
    return allValid;
  };

  // ===== Attach realtime validation =====
  document.querySelectorAll('[data-validate]').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      const group = field.closest('.form-group');
      if (group && group.classList.contains('invalid')) {
        validateField(field);
      }
    });
    if (field.type === 'tel') {
      field.addEventListener('input', (e) => {
        let v = e.target.value.replace(/[^\d+\s()-]/g, '');
        e.target.value = v;
      });
    }
  });

  // ===== Generic form submit handler =====
  document.querySelectorAll('form[data-async]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Honeypot
      const honeypot = form.querySelector('input[name="website_url"]');
      if (honeypot && honeypot.value !== '') {
        showToast('Submission blocked.', 'error');
        return;
      }

      // Validate
      if (!validateContainer(form)) {
        showToast('Please correct the highlighted fields.', 'error');
        const firstInvalid = form.querySelector('.form-group.invalid [data-validate]');
        if (firstInvalid) {
          firstInvalid.focus();
          firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // Submit button loading
      const submitBtn = form.querySelector('[type="submit"]');
      const originalContent = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
      }

      // Simulated async submission (replace URL when backend ready)
      try {
        await new Promise(r => setTimeout(r, 1400));
        // const data = new FormData(form);
        // const res = await fetch(form.action || '/api/submit', { method: 'POST', body: data });
        // if (!res.ok) throw new Error('Submission failed');

        const successMsg = form.dataset.success || 'Thank you! We will get back to you shortly.';
        showToast(successMsg, 'success');
        form.reset();
        form.querySelectorAll('.form-group').forEach(g => g.classList.remove('valid', 'invalid'));

        // If multi-step, reset to step 1
        const stepWizard = form.querySelector('[data-step="1"]');
        if (stepWizard) {
          form.querySelectorAll('.form-step').forEach((s, i) => s.classList.toggle('active', i === 0));
          updateSteps(form, 1);
        }

        // Trigger success callback if exists
        if (typeof window[form.dataset.callback] === 'function') {
          window[form.dataset.callback](form);
        }
      } catch (err) {
        showToast('Something went wrong. Please try again or call us directly.', 'error');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalContent;
        }
      }
    });
  });

  // ===== Multi-step wizard =====
  const updateSteps = (form, currentStep) => {
    const indicator = form.querySelector('.steps-indicator');
    if (!indicator) return;
    const items = indicator.querySelectorAll('.step-item');
    const fill = indicator.querySelector('.steps-indicator-fill');
    items.forEach((item, idx) => {
      item.classList.remove('active', 'completed');
      if (idx + 1 < currentStep) item.classList.add('completed');
      else if (idx + 1 === currentStep) item.classList.add('active');
    });
    if (fill) {
      const pct = items.length > 1 ? ((currentStep - 1) / (items.length - 1)) * 100 : 0;
      fill.style.width = pct + '%';
    }
  };

  document.querySelectorAll('form[data-wizard]').forEach(form => {
    const steps = form.querySelectorAll('.form-step');
    if (!steps.length) return;
    let current = 1;
    updateSteps(form, current);

    form.querySelectorAll('[data-next]').forEach(btn => {
      btn.addEventListener('click', () => {
        const currentStep = form.querySelector('.form-step.active');
        if (!validateContainer(currentStep)) {
          showToast('Please complete required fields.', 'error');
          return;
        }
        if (current < steps.length) {
          current++;
          steps.forEach((s, i) => s.classList.toggle('active', i === current - 1));
          updateSteps(form, current);
          form.scrollIntoView({ behavior: 'smooth', block: 'start' });
          updateReview(form);
        }
      });
    });

    form.querySelectorAll('[data-prev]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (current > 1) {
          current--;
          steps.forEach((s, i) => s.classList.toggle('active', i === current - 1));
          updateSteps(form, current);
          form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  });

  // ===== Multi-step Review (fills review section before submit) =====
  const updateReview = (form) => {
    const reviewContainer = form.querySelector('[data-review]');
    if (!reviewContainer) return;
    const formData = new FormData(form);
    const items = reviewContainer.querySelectorAll('[data-review-field]');
    items.forEach(el => {
      const field = el.dataset.reviewField;
      const value = formData.get(field);
      el.textContent = value ? sanitize(value) : '—';
    });
  };

  // ===== Phone formatting (Indian +91 default) =====
  document.querySelectorAll('input[type="tel"][data-format="in"]').forEach(input => {
    input.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').slice(0, 10);
      let formatted = val;
      if (val.length > 5) formatted = `${val.slice(0,5)} ${val.slice(5)}`;
      e.target.value = formatted;
    });
  });

  // ===== Set min date for date inputs to today =====
  document.querySelectorAll('input[type="date"][data-min="today"]').forEach(input => {
    const today = new Date().toISOString().split('T')[0];
    input.min = today;
    if (!input.value) input.value = today;
  });

  // ===== Time slot picker (visual selection) =====
  document.querySelectorAll('[data-time-slots]').forEach(container => {
    const hidden = document.querySelector(container.dataset.timeSlots);
    container.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        if (hidden) hidden.value = btn.dataset.value || btn.textContent.trim();
      });
    });
  });

  // ===== Department-aware doctor dropdown =====
  const deptSelect = document.querySelector('#appointment-department');
  const doctorSelect = document.querySelector('#appointment-doctor');
  if (deptSelect && doctorSelect && window.doctorsByDept) {
    deptSelect.addEventListener('change', () => {
      const dept = deptSelect.value;
      const list = window.doctorsByDept[dept] || [];
      doctorSelect.innerHTML = '<option value="">Any Available Doctor</option>';
      list.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d;
        opt.textContent = d;
        doctorSelect.appendChild(opt);
      });
    });
  }
})();
