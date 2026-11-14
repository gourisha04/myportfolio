/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          bg: '#EAF0F8',
          surface: '#F8FAFD',
          surfaceHover: '#EEF4FC',
          card: '#F8FAFD',
          accent: '#7189E8',
          accentHover: '#5B74D8',
          secondary: '#A8B8F2',
          text: '#24334D',
          muted: '#687891',
          border: 'rgba(168, 184, 242, 0.35)',
          borderHover: 'rgba(113, 137, 232, 0.5)',
        },
        ivory: {
          DEFAULT: '#EAF0F8',
          50: '#F8FAFD',
          100: '#F0F5FC',
          200: '#EAF0F8',
          300: '#DEE8F5',
          400: '#CBD8EC',
        },
        charcoal: {
          DEFAULT: '#24334D',
          50: '#F0F5FC',
          100: '#EAF0F8',
          200: '#D5E2F3',
          300: '#687891',
          400: '#3D4F6E',
          900: '#24334D',
        },
        burnt: {
          DEFAULT: '#7189E8',
          light: 'rgba(113, 137, 232, 0.12)',
          hover: '#5B74D8',
          dark: '#4B62C4',
        },
        ink: {
          DEFAULT: '#24334D',
          muted: '#687891',
          light: '#8898B0',
          border: 'rgba(168, 184, 242, 0.35)',
          darkBorder: 'rgba(113, 137, 232, 0.35)',
        }
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
        ultra: '0.22em',
      },
      boxShadow: {
        'editorial': '0 10px 30px -10px rgba(36, 51, 77, 0.08)',
        'editorial-hover': '0 20px 40px -15px rgba(113, 137, 232, 0.18)',
        'glow-accent': '0 0 25px rgba(113, 137, 232, 0.25)',
        'glow-subtle': '0 0 20px rgba(168, 184, 242, 0.2)',
        'dark-card': '0 20px 50px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
};
