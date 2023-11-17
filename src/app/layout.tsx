import type { Metadata } from 'next'
import '@/styles/globals.css'
import { primary, secondary } from '@/styles/fonts'

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
        className={`overflow-y-hidden ${primary.className} ${secondary.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
