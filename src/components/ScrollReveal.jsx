import { motion } from 'framer-motion'

const INITIAL = {
  up:    { opacity: 0, y: 30 },
  down:  { opacity: 0, y: -30 },
  left:  { opacity: 0, x: 30 },
  right: { opacity: 0, x: -30 },
  fade:  { opacity: 0 },
  scale: { opacity: 0, scale: 0.92 },
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) {
  return (
    <motion.div
      initial={INITIAL[direction] ?? INITIAL.up}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
