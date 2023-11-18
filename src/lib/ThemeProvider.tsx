'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

interface NextThemesProviderProps {
  children: ReactNode
}

export function NextThemesProvider({ children }: NextThemesProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      themes={['light', 'dark']}
      defaultTheme="light"
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  )
}
