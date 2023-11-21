import { Jost, Red_Hat_Display as RedHatDisplay } from 'next/font/google'

export const primary = RedHatDisplay({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const secondary = Jost({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-secondary',
})
