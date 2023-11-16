import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import { Logo } from '../Logo'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export function Navigation() {
  return (
    <motion.ul
      className="fixed bottom-0 left-0 right-0 top-0 flex flex-col gap-3 px-6 pt-[88px]"
      variants={variants}
    >
      <Logo />
      <MenuItem>Home</MenuItem>
    </motion.ul>
  )
}
