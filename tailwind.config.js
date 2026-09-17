/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sandstone / temple wall — page backgrounds
        sand: {
          50: '#FDFBF6',
          100: '#FAF5EA',
          200: '#F3E9D6',
          300: '#E9D9BC',
          400: '#DCC49B',
          500: '#C9A874',
        },
        // Saffron — primary devotional accent
        saffron: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F07B1D',
          600: '#D9600B',
          700: '#B4480A',
          800: '#8F390E',
          900: '#74300F',
        },
        // Kumkum — secondary accent for emphasis
        kumkum: {
          500: '#B3261E',
          600: '#9A1F18',
          700: '#7C1A14',
        },
        // Temple night — deep indigo used for footer, overlays, hero
        night: {
          700: '#243050',
          800: '#1A2440',
          900: '#121A2E',
          950: '#0B1020',
        },
        // Warm ink for body copy
        ink: {
          500: '#6B5B4E',
          600: '#54453A',
          700: '#3D3129',
          800: '#2A211B',
          900: '#1C1512',
        },
        gold: {
          400: '#D9B26A',
          500: '#C09553',
        },
      },
      fontFamily: {
        display: ['Marcellus', 'Georgia', 'serif'],
        devanagari: ['"Tiro Devanagari Hindi"', '"Noto Sans Devanagari"', 'serif'],
        sans: ['Inter', '"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(42, 33, 27, 0.04), 0 8px 24px -12px rgba(42, 33, 27, 0.18)',
        lift: '0 2px 4px rgba(42, 33, 27, 0.06), 0 18px 40px -18px rgba(42, 33, 27, 0.28)',
      },
      backgroundImage: {
        'temple-grid':
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23C9A874' stroke-opacity='0.16' stroke-width='1'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        'fade-in': 'fade-in 0.35s ease-out both',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
