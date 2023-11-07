import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gustavo N. Souza | Portfólio',
  description: 'Generated by create next app',
  authors: [
    {
      name: 'Gustavo Nascimento Souza',
      url: 'https://github.com/Gustavo-Nasc'
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
