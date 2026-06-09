import { motion } from 'framer-motion'

export default function SectionHeader({ label, title, subtitle, align = 'center' }) {
  const alignClass = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  }[align]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`flex flex-col mb-14 ${alignClass}`}
    >
      {label && (
        <span className="inline-block px-3 py-1 text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4 uppercase tracking-[0.15em]">
          {label}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`flex gap-3 mt-5 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-px w-14 bg-gradient-to-r from-transparent to-cyan-500/60" />
        <div className="relative w-2 h-2 rounded-full bg-cyan-500 shadow-neon-cyan flex-shrink-0 self-center" />
        <div className="h-px w-14 bg-gradient-to-l from-transparent to-cyan-500/60" />
      </div>
    </motion.div>
  )
}
