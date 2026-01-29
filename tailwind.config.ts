import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        iaso: {
          green: {
            DEFAULT: '#2C5F2D',
            50: '#E8F0E8',
            100: '#C5D9C5',
            200: '#9EBF9F',
            300: '#77A578',
            400: '#598B5A',
            500: '#2C5F2D',
            600: '#275428',
            700: '#214721',
            800: '#1A3A1B',
            900: '#132C14',
          },
          beige: {
            DEFAULT: '#D4C4A8',
            50: '#FAF8F5',
            100: '#F2EDE4',
            200: '#E8E0D0',
            300: '#DED2BC',
            400: '#D4C4A8',
            500: '#C4B08E',
          },
          gold: {
            DEFAULT: '#C9A96E',
            500: '#C9A96E',
            600: '#B8945A',
          },
          mint: {
            DEFAULT: '#8FBC8F',
            500: '#8FBC8F',
          },
          text: {
            DEFAULT: '#2C3E50',
            light: '#5D6D7E',
          },
          bg: {
            DEFAULT: '#F9F9F7',
          },
        },
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['1.125rem', { lineHeight: '1.6' }],
      },
      borderRadius: {
        iaso: '0.625rem',
      },
      boxShadow: {
        'iaso-sm': '0 2px 8px rgba(44, 62, 80, 0.08)',
        iaso: '0 4px 16px rgba(44, 62, 80, 0.10)',
        'iaso-lg': '0 8px 32px rgba(44, 62, 80, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
