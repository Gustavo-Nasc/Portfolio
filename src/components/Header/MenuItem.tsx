import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

type MenuItemProps = {
  children: ReactNode
}

export function MenuItem({ children }: MenuItemProps) {
  return <motion.li variants={variants}>{children}</motion.li>
}
