/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F4F1EA',
          50: '#FDFCFA',
          100: '#FAF8F3',
          200: '#F4F1EA',
          300: '#E8E2D5',
          400: '#DDD5C4',
        },
        charcoal: {
          DEFAULT: '#171717',
          50: '#2A2A2A',
          100: '#222222',
          200: '#1C1C1C',
          300: '#171717',
          400: '#121212',
          900: '#0D0D0D',
        },
        burnt: {
          DEFAULT: '#E87545',
          light: '#FDEEE8',
          hover: '#D36132',
          dark: '#B84E22',
        },
        ink: {
          DEFAULT: '#181818',
          muted: '#6F6A63',
          light: '#9E988F',
          border: '#E3DDD2',
          darkBorder: '#2E2D2B',
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
        'editorial': '0 20px 40px -15px rgba(23, 23, 23, 0.08)',
        'editorial-hover': '0 30px 60px -20px rgba(23, 23, 23, 0.14)',
        'dark-card': '0 20px 50px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
};
