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
    <motion.p variants={variants} className="absolute right-6 top-8 uppercase">
      <span className="font-bold">Gustavo</span>Souza
    </motion.p>
  )
}
