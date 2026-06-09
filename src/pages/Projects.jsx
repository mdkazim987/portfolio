import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Layers, CheckCircle2, Tag, Filter } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'
import GlassCard from '../components/GlassCard'
import NeonBadge from '../components/NeonBadge'
import { projects } from '../data/content'

const FILTERS = ['All', 'Financial Systems', 'Workflow Automation', 'AI / NLP', 'Machine Learning']

const statusColor = {
  Live:      'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  Completed: 'bg-slate-700/40   text-slate-400   border-slate-600/30',
}

const typeColor = {
  Production: 'bg-blue-500/10 text-blue-400 border-blue-500/25',
  Academic:   'bg-violet-500/10 text-violet-400 border-violet-500/25',
}

const cardAccent = {
  cyan:   'hover:border-cyan-500/35   hover:shadow-[0_8px_32px_rgba(6,182,212,0.12)]',
  blue:   'hover:border-blue-500/35   hover:shadow-[0_8px_32px_rgba(59,130,246,0.12)]',
  green:  'hover:border-emerald-500/35 hover:shadow-[0_8px_32px_rgba(16,185,129,0.12)]',
  purple: 'hover:border-violet-500/35 hover:shadow-[0_8px_32px_rgba(139,92,246,0.12)]',
  orange: 'hover:border-orange-500/35 hover:shadow-[0_8px_32px_rgba(249,115,22,0.12)]',
}

const dotColor = {
  cyan:   'bg-cyan-500',
  blue:   'bg-blue-500',
  green:  'bg-emerald-500',
  purple: 'bg-violet-500',
  orange: 'bg-orange-500',
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <PageTransition>
      <div className="relative bg-[#050b14] min-h-screen">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <SectionHeader
            label="Projects"
            title="Production & Academic Work"
            subtitle="From live NSE trading infrastructure to academic AI/ML projects — a cross-section of backend engineering and data science work."
          />

          {/* Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono rounded-full border transition-all duration-200 ${
                    activeFilter === f
                      ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/40 shadow-neon-cyan'
                      : 'text-slate-500 border-slate-700/40 hover:border-slate-600/60 hover:text-slate-300'
                  }`}
                >
                  {f === 'All' && <Filter size={11} />}
                  {f}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((proj, i) => (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                >
                  <ProjectCard proj={proj} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-600 font-mono text-sm">
              No projects in this category yet.
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  )
}

function ProjectCard({ proj }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`group p-6 bg-slate-900/55 backdrop-blur-md border border-cyan-500/[0.1] rounded-xl transition-all duration-300 cursor-pointer h-full flex flex-col ${cardAccent[proj.color]}`}
      onClick={() => setExpanded((v) => !v)}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-2.5 h-2.5 rounded-full ${dotColor[proj.color]} flex-shrink-0 mt-0.5`} />
          <Layers size={15} className="text-slate-500 flex-shrink-0" />
        </div>
        <div className="flex items-center gap-1.5 flex-wrap justify-end">
          <span className={`px-2 py-0.5 text-[10px] font-mono border rounded-full ${typeColor[proj.type]}`}>
            {proj.type}
          </span>
          <span className={`px-2 py-0.5 text-[10px] font-mono border rounded-full flex items-center gap-1 ${statusColor[proj.status]}`}>
            {proj.status === 'Live' && <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />}
            {proj.status}
          </span>
        </div>
      </div>

      <h3 className="text-white font-bold text-base mb-2 group-hover:text-cyan-100 transition-colors">
        {proj.title}
      </h3>

      <div className="flex items-center gap-1.5 mb-3">
        <Tag size={11} className="text-slate-600" />
        <span className="text-slate-600 text-[10px] font-mono">{proj.category}</span>
      </div>

      <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">
        {proj.description}
      </p>

      {/* Expanded highlights */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden mb-4"
          >
            <div className="border-t border-slate-800/60 pt-4">
              <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-2.5">Highlights</div>
              <ul className="space-y-2">
                {proj.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={12} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-400 text-xs">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {proj.tech.map((t) => (
          <span key={t} className="px-2 py-0.5 text-[10px] font-mono text-slate-500 bg-slate-800/50 border border-slate-700/30 rounded">
            {t}
          </span>
        ))}
      </div>

      {/* Expand hint */}
      <div className="flex items-center justify-end mt-3 text-slate-700 text-[10px] font-mono group-hover:text-cyan-700 transition-colors">
        {expanded ? '▲ less' : '▼ details'}
      </div>
    </div>
  )
}
