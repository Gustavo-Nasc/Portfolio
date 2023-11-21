import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import { Button } from '../Button'
import * as Switch from '@radix-ui/react-switch'
import { useThemes } from '@/hooks/useThemes'

const list = {
  open: {
    x: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    x: '100%',
    transition: {
      y: { stiffness: 1000 },
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const elements = {
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

export function Navigation() {
  const { changeTheme, isDarkTheme } = useThemes()

  function handleChangeTheme() {
    changeTheme()
  }

  return (
    <motion.ul
      className="fixed bottom-0 left-0 right-0 top-0 flex flex-col gap-6 px-6 pt-[88px]"
      variants={list}
    >
      <motion.div
        variants={elements}
        className="flex items-center justify-between"
      >
        <label htmlFor="dark-mode">Tema Escuro</label>
        <Switch.Root
          className="relative h-8 w-[52px] rounded-full bg-gray-800 dark:bg-primary-500"
          id="dark-mode"
          checked={isDarkTheme}
          aria-label="Alterar Tema"
          onCheckedChange={handleChangeTheme}
        >
          <Switch.Thumb
            className={`block h-6 w-6 translate-x-1 rounded-full
            bg-white transition-transform duration-200
            will-change-transform data-[state=checked]:translate-x-6
          `}
          />
        </Switch.Root>
      </motion.div>
      <motion.div variants={elements} className="h-px w-full bg-gray-900" />
      <MenuItem>Início</MenuItem>
      <MenuItem>Sobre mim</MenuItem>
      <MenuItem>Tech Stack</MenuItem>
      <MenuItem>Serviços</MenuItem>
      <MenuItem>Projetos</MenuItem>
      <Button className="mt-4" padding="menu" variants={elements}>
        Contato
      </Button>
    </motion.ul>
  )
}
