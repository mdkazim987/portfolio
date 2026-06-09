const COLORS = {
  cyan:   'bg-cyan-500/10   text-cyan-400   border-cyan-500/30',
  blue:   'bg-blue-500/10   text-blue-400   border-blue-500/30',
  green:  'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  purple: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
  orange: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  red:    'bg-red-500/10    text-red-400    border-red-500/30',
  yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  slate:  'bg-slate-700/40  text-slate-400  border-slate-600/40',
}

const SIZES = {
  xs: 'px-2 py-0.5 text-[10px]',
  sm: 'px-2.5 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
}

export default function NeonBadge({ children, color = 'cyan', size = 'sm' }) {
  return (
    <span
      className={`inline-flex items-center font-mono font-medium border rounded-md ${COLORS[color] ?? COLORS.cyan} ${SIZES[size] ?? SIZES.sm}`}
    >
      {children}
    </span>
  )
}
