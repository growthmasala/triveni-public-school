import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#272D66',
          dark:    '#1C2150',
          light:   '#3B4499',
        },
        accent: {
          DEFAULT: '#EC7E34',
          dark:    '#D06820',
          light:   '#F5A050',
        },
        body:    '#4A4A6A',
        muted:   '#8888A8',
        border:  '#E0E3F0',
        surface: '#F4F6FA',
        dark:    '#0F1230',
      },
      fontFamily: {
        urbanist: ['var(--font-urbanist)', 'sans-serif'],
        inter:    ['var(--font-inter)',    'sans-serif'],
      },
      borderRadius: {
        sm:   '8px',
        md:   '12px',
        lg:   '20px',
        pill: '9999px',
      },
      boxShadow: {
        sm: '0 2px 8px rgba(39,45,102,0.08)',
        md: '0 4px 24px rgba(39,45,102,0.12)',
        lg: '0 8px 48px rgba(39,45,102,0.18)',
      },
      maxWidth: {
        container: '1760px',
      },
    },
  },
  plugins: [],
}

export default config
