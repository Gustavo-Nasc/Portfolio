import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        secondary: 'var(--font-secondary)',
      },
      colors: {
        primary: {
          50: '#f8f7fd',
          400: '#8a70e1',
          500: '#4e2ac3',
        },
        seconday: {
          400: '#646466',
          500: '#9a9a9a',
        },
        gray: {
          700: '#121212',
          800: '#0d0d0d',
          900: '#080808',
        },
      },
      boxShadow: {
        border: '0 0 0 2px',
      },
    },
  },
  plugins: [],
}
export default config
