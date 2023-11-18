'use client'

import { ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'

interface FramerMotionConfigProps {
  children: ReactNode
}

export function FramerMotionConfig({ children }: FramerMotionConfigProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
