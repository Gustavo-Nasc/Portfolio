import { Poppins, Jost } from 'next/font/google'

export const primary = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const secondary = Jost({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-secondary',
})
