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

export function Logo() {
  return (
    <motion.p variants={variants} className="relative z-[1] uppercase">
      <span className="font-bold">Gustavo</span>Souza
    </motion.p>
  )
}
