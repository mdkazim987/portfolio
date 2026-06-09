import { motion } from 'framer-motion'

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  onClick,
  ...props
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -3 } : {}}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onClick={onClick}
      className={[
        'bg-slate-900/60 backdrop-blur-md',
        'border border-cyan-500/[0.12]',
        'rounded-xl shadow-card',
        'transition-all duration-300',
        hover && 'hover:border-cyan-500/25 hover:shadow-card-hover cursor-pointer',
        glow && 'shadow-neon-cyan',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </motion.div>
  )
}
