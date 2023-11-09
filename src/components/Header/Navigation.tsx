import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'

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
      className="absolute right-0 top-[78px] flex h-[calc(100vh-78px)] w-screen flex-col gap-2"
      variants={variants}
    >
      <MenuItem name="Home" />
    </motion.ul>
  )
}
