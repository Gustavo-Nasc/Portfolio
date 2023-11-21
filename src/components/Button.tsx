import { VariantProps, tv } from 'tailwind-variants'
import { HTMLMotionProps, motion } from 'framer-motion'

const button = tv({
  base: 'px-3 py-1 rounded-lg text-sm ring-2 ring-primary-500 hover:ring-primary-400 focus:ring-black transition-all duration-300',
  variants: {
    variant: {
      filled: 'bg-primary-500 text-white hover:bg-primary-400',
      ghost:
        'bg-transparent text-primary-500 hover:bg-primary-50 focus:bg-primary-50 dark:text-white dark:focus:bg-transparent dark:hover:bg-transparent',
    },
    size: {
      full: 'w-full',
      max: 'w-max',
    },
    padding: {
      menu: 'px-6 py-3',
    },
  },
  defaultVariants: {
    variant: 'filled',
    size: 'max',
  },
})

type ButtonProps = HTMLMotionProps<'button'> & VariantProps<typeof button>

export function Button({
  children,
  variant,
  size,
  padding,
  className,
  ...rest
}: ButtonProps) {
  return (
    <motion.button
      className={button({ variant, padding, size, className })}
      {...rest}
    >
      {children}
    </motion.button>
  )
}
