import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  AlertTriangle, Shield, Clock, TrendingUp, ChevronDown, CheckCircle2,
  AlertCircle, Activity, Zap, Terminal,
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'
import GlassCard from '../components/GlassCard'
import { warStories } from '../data/content'

const severityStyle = {
  CRITICAL: 'bg-red-500/10 text-red-400 border-red-500/30',
  HIGH:     'bg-orange-500/10 text-orange-400 border-orange-500/30',
  MEDIUM:   'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
}

const catIcon = {
  Security:        Shield,
  'Data Integrity': Shield,
  Infrastructure:  Activity,
}

export default function WarStories() {
  return (
    <PageTransition>
      <div className="relative bg-[#050b14] min-h-screen">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <SectionHeader
            label="War Stories"
            title="Production Incident Case Studies"
            subtitle="Real problems from NSE financial infrastructure — root cause analysis, systematic fixes, and lessons that shaped better engineering habits."
          />

          {/* Disclaimer */}
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-12 p-4 bg-slate-900/40 border border-slate-700/30 rounded-xl flex items-start gap-3">
              <AlertCircle size={15} className="text-slate-600 flex-shrink-0 mt-0.5" />
              <p className="text-slate-600 text-xs font-mono leading-relaxed">
                System and client details are generalized. No confidential NSE data, credentials, or internal architecture specifics are disclosed. These case studies describe engineering patterns and problem-solving approaches.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8 max-w-5xl mx-auto">
            {warStories.map((story, i) => (
              <ScrollReveal key={story.id} delay={i * 0.1}>
                <StoryCard story={story} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

function StoryCard({ story, index }) {
  const [expanded, setExpanded] = useState(index === 0)
  const CatIcon = catIcon[story.category] ?? Zap

  return (
    <GlassCard hover={false} className="overflow-hidden">
      {/* Header — always visible */}
      <button
        className="w-full text-left p-6 group"
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/40 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold font-mono text-lg">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-base leading-snug group-hover:text-cyan-100 transition-colors">
                {story.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className={`flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono border rounded-full ${severityStyle[story.severity]}`}>
                  <AlertTriangle size={9} />
                  {story.severity}
                </span>
                <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-slate-500 bg-slate-800/50 border border-slate-700/30 rounded-full">
                  <CatIcon size={9} />
                  {story.category}
                </span>
                <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-slate-500 bg-slate-800/50 border border-slate-700/30 rounded-full">
                  <Clock size={9} />
                  {story.duration}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Result pill */}
            <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/25 rounded-lg text-emerald-400 text-xs font-mono">
              <TrendingUp size={11} />
              {story.result}
            </span>
            <ChevronDown
              size={18}
              className={`text-slate-600 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </div>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mt-4">{story.summary}</p>
      </button>

      {/* Expandable body */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-800/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-800/40">
                {/* Problem */}
                <div className="p-6">
                  <SectionLabel icon={AlertTriangle} label={story.problem.title} color="text-red-400" />
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{story.problem.content}</p>
                  <div className="space-y-1.5">
                    {story.problem.metrics.map((m, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-500">
                        <span className="text-red-500/60">▸</span>
                        {m}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Investigation */}
                <div className="p-6">
                  <SectionLabel icon={Terminal} label={story.investigation.title} color="text-yellow-400" />
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{story.investigation.content}</p>
                  <div className="space-y-1.5">
                    {story.investigation.steps.map((s, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-500">
                        <span className="text-yellow-500/60 font-mono flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}.</span>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-800/40 border-t border-slate-800/40">
                {/* Solution */}
                <div className="p-6">
                  <SectionLabel icon={Zap} label={story.solution.title} color="text-blue-400" />
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{story.solution.content}</p>
                  <ul className="space-y-2">
                    {story.solution.steps.map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-blue-500/60 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-400 text-xs leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div className="p-6">
                  <SectionLabel icon={TrendingUp} label={story.result.title} color="text-emerald-400" />
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{story.result.content}</p>
                  <div className="space-y-2">
                    {story.result.metrics.map((m, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-emerald-500/60 text-xs">✓</span>
                        <span className="text-emerald-400/80 text-xs font-mono">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lesson learned */}
              <div className="p-6 border-t border-slate-800/40 bg-slate-950/40">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-violet-500/15 border border-violet-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-violet-400 text-[10px]">💡</span>
                  </div>
                  <div>
                    <div className="text-violet-400 text-[10px] font-mono uppercase tracking-widest mb-1">Lesson Learned</div>
                    <p className="text-slate-400 text-sm italic">&ldquo;{story.lesson}&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  )
}

function SectionLabel({ icon: Icon, label, color }) {
  return (
    <div className={`flex items-center gap-2 mb-3 ${color}`}>
      <Icon size={14} />
      <span className="text-xs font-mono font-semibold uppercase tracking-wide">{label}</span>
    </div>
  )
}
