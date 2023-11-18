import { motion } from 'framer-motion'

function Path({ ...props }) {
  return (
    <motion.path
      fill="currentColor"
      strokeWidth="3"
      className="stroke-gray-900 dark:stroke-white"
      strokeLinecap="round"
      {...props}
    />
  )
}

type MenuToggleProps = {
  toggle: () => void
}

export function MenuToggle({ toggle }: MenuToggleProps) {
  return (
    <button onClick={toggle} className="relative">
      <svg width="24" height="21" viewBox="0 0 24 21">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  )
}
