import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        100: '#CCD5FF',
        400: '#3355ff',
      }
    },
    extend: {
      fontSize: {
        'heading-lg': ['4rem', {
          lineHeight: '1.1',
          fontWeight: '700'
        }],
        'heading-md': ['3rem', {
          lineHeight: '1.1',
          fontWeight: '700'
        }],
        'heading-sm': ['2.25rem', {
          lineHeight: '1.1',
          fontWeight: '700'
        }],
        'body-xl-bold': ['1.25rem', {
          lineHeight: '1.5',
          fontWeight: '700'
        }],
        'body-xl-regular': ['1.25rem', {
          lineHeight: '1.5',
          fontWeight: '400'
        }],
        'body-lg-bold': ['1.125rem', {
          lineHeight: '1.5',
          fontWeight: '700'
        }],
        'body-lg-regular': ['1.125rem', {
          lineHeight: '1.5',
          fontWeight: '400'
        }],
        'body-md-bold': ['1rem', {
          lineHeight: '1.5',
          fontWeight: '700'
        }],
        'body-md-regular': ['1rem', {
          lineHeight: '1.5',
          fontWeight: '400'
        }],
        'body-sm-bold': ['0.875rem', {
          lineHeight: '1.5',
          fontWeight: '700'
        }],
        'body-sm-regular': ['0.875rem', {
          lineHeight: '1.5',
          fontWeight: '400'
        }],
        'body-xs-bold': ['0.75rem', {
          lineHeight: '1.5',
          fontWeight: '700'
        }],
        'body-xs-regular': ['0.75rem', {
          lineHeight: '1.5',
          fontWeight: '400'
        }],
      }
    }
  },
  plugins: [],
}
export default config
