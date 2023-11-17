import { VariantProps, tv } from 'tailwind-variants'
import { HTMLMotionProps, motion } from 'framer-motion'

const button = tv({
  base: 'bg-primary-500 text-white px-6 py-3 rounded-lg',
  variants: {
    size: {
      full: 'w-full',
      max: 'w-max',
    },
  },
  defaultVariants: {
    size: 'max',
  },
})

type ButtonProps = HTMLMotionProps<'button'> & VariantProps<typeof button>

export function Button({ children, className, size, ...rest }: ButtonProps) {
  return (
    <motion.button className={button({ size, className })} {...rest}>
      {children}
    </motion.button>
  )
}
