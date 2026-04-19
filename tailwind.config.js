/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        dm: {
          background: '#0F1C1D',
          card: '#142B2C',
          primary: '#0D6E73',
          'primary-bright': '#14A39A',
          muted: '#8AA3A5',
          border: '#1F3A3B',
          foreground: '#FFFFFF',
        },
      },
      borderRadius: {
        card: '24px',
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(ellipse at top, rgba(13,110,115,0.22), transparent 60%)',
        'grid-dm':
          'linear-gradient(to right, rgba(31,58,59,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,58,59,0.35) 1px, transparent 1px)',
      },
      boxShadow: {
        'glow-primary': '0 0 40px -8px rgba(13,110,115,0.55)',
        'glow-primary-lg': '0 0 80px -12px rgba(20,163,154,0.5)',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate3d(-10%, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(10%, 8%, 0) scale(1.1)' },
        },
        'beam-flow': {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        aurora: 'aurora 18s ease-in-out infinite',
        'beam-flow': 'beam-flow 2.6s linear infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
        float: 'float 4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'pulse-slow': 'pulse-slow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
