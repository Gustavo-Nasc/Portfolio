'use client'

import { Header } from '@/components/Header/Header'
import { Start } from './container/Start'

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-4">
        <Start />
      </main>
    </>
  )
}
