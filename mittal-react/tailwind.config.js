/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7fd',
          100: '#d9ecfa',
          200: '#b3d8f4',
          300: '#7fbceb',
          400: '#3d99dd',
          500: '#0a6cb8',
          600: '#0a5fa3',
          700: '#0a4f86',
          800: '#0a3f6b',
          900: '#0a2540',
        },
        accent: {
          50: '#e8f8f5',
          100: '#c7f0e9',
          200: '#8fe2d4',
          300: '#56e0d4',
          400: '#2ec4b6',
          500: '#1a9c8e',
          600: '#147a70',
          700: '#0f5e57',
        },
        navy: '#0a2540',
        emergency: '#e63946',
        success: '#06a77d',
        warning: '#f77f00',
        mint: '#e8f8f5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '4px',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(10, 37, 64, 0.08)',
        'glass-lg': '0 20px 60px -10px rgba(10, 37, 64, 0.15)',
        'glow-primary': '0 10px 40px -10px rgba(10, 108, 184, 0.4)',
        'glow-accent': '0 10px 40px -10px rgba(46, 196, 182, 0.4)',
        'glow-emergency': '0 10px 40px -10px rgba(230, 57, 70, 0.45)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-reverse': 'float-reverse 8s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
        'gradient-shift': 'gradient-shift 12s ease infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(20px) rotate(-3deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
