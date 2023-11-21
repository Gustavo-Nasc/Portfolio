import { motion } from 'framer-motion'
import WavingHand from '@/assets/waving-hand.png'
import * as Icon from 'react-icons/fa6'
import Link from 'next/link'
import { Button } from '@/components/Button'

export function Start() {
  return (
    <section id="inicio" className="flex min-h-screen flex-col pt-[72px]">
      <svg>
        <image />
      </svg>
      <div className="mb-3 flex items-center gap-1">
        <motion.img
          src={WavingHand.src}
          animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 1,
          }}
          className="w-6"
        />
        <h1 className="text-sm font-bold">
          Olá, me chamo{' '}
          <span className="text-[#4a89f4] dark:text-[#245fc5]">Gustavo</span>!
        </h1>
      </div>
      <h2 className="mb-2 text-[26px] font-bold leading-[34px]">
        Desenvolvedor Web
      </h2>
      <p className="mb-4 text-xs">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        suscipit earum vel incidunt a fuga quis expedita laudantium debitis
        voluptatibus!
      </p>
      <div className="text-seconday-400 dark: dark:text-seconday-500 mb-4 flex items-center gap-3 text-xs">
        Siga-me:{' '}
        <div className="flex gap-5">
          <Link
            href="https://github.com/Gustavo-Nasc"
            className="focus:rounded-full"
          >
            <Icon.FaGithub size={16} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gustanascsouza/"
            className="focus:rounded-sm"
          >
            <Icon.FaLinkedin size={16} />
          </Link>
          <Link
            href="https://www.instagram.com/gustavonascsouza/"
            className="focus:rounded-sm"
          >
            <Icon.FaSquareInstagram size={16} />
          </Link>
          <Link
            href="https://www.facebook.com/gustanascsouza/"
            className="focus:rounded-sm"
          >
            <Icon.FaSquareFacebook size={16} />
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button>Me Contrate</Button>
        <Button variant="ghost">Baixar CV</Button>
      </div>
    </section>
  )
}
