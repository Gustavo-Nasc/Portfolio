import type { Metadata } from 'next'
import '@/styles/globals.css'
import { primary, secondary } from '@/styles/fonts'
import { FramerMotionConfig } from '@/lib/MotionConfig'
import { NextThemesProvider } from '@/lib/ThemeProvider'

export const metadata: Metadata = {
  title: 'Gustavo N. Souza | Portfólio',
  description: `
    Portfólio with projets made by Gustavo Nascimento Souza,
    a Brasilian student and developer, finishing his studies
    at FATEC Zona Leste
  `,
  authors: [
    {
      name: 'Gustavo Nascimento Souza',
      url: 'https://github.com/Gustavo-Nasc',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased ${primary.className} ${secondary.variable} bg-white text-gray-800 dark:bg-gray-800 dark:text-white`}
      >
        <FramerMotionConfig>
          <NextThemesProvider>{children}</NextThemesProvider>
        </FramerMotionConfig>
      </body>
    </html>
  )
}
