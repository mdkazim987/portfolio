import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar,
  ResponsiveContainer, Tooltip,
} from 'recharts'
import { Code2, Database, GitBranch, Cpu, Shield, Brain } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'
import GlassCard from '../components/GlassCard'
import { skills, radarData } from '../data/content'

const CATEGORIES = [
  { key: 'backend',      label: 'Backend',      icon: Code2,     color: 'cyan',   accent: '#06b6d4' },
  { key: 'databases',    label: 'Databases',    icon: Database,  color: 'orange', accent: '#f97316' },
  { key: 'devops',       label: 'DevOps',       icon: GitBranch, color: 'blue',   accent: '#3b82f6' },
  { key: 'architecture', label: 'Architecture', icon: Cpu,       color: 'purple', accent: '#8b5cf6' },
  { key: 'security',     label: 'Security',     icon: Shield,    color: 'green',  accent: '#10b981' },
  { key: 'aiml',         label: 'AI / ML',      icon: Brain,     color: 'yellow', accent: '#eab308' },
]

const colorMap = {
  cyan:   { bar: 'bg-cyan-500',   text: 'text-cyan-400',   light: 'bg-cyan-500/10 border-cyan-500/25',   ring: 'ring-cyan-500/30' },
  orange: { bar: 'bg-orange-500', text: 'text-orange-400', light: 'bg-orange-500/10 border-orange-500/25', ring: 'ring-orange-500/30' },
  blue:   { bar: 'bg-blue-500',   text: 'text-blue-400',   light: 'bg-blue-500/10 border-blue-500/25',   ring: 'ring-blue-500/30' },
  purple: { bar: 'bg-violet-500', text: 'text-violet-400', light: 'bg-violet-500/10 border-violet-500/25', ring: 'ring-violet-500/30' },
  green:  { bar: 'bg-emerald-500',text: 'text-emerald-400',light: 'bg-emerald-500/10 border-emerald-500/25', ring: 'ring-emerald-500/30' },
  yellow: { bar: 'bg-yellow-500', text: 'text-yellow-400', light: 'bg-yellow-500/10 border-yellow-500/25', ring: 'ring-yellow-500/30' },
}

const TECHSTACK = [
  { name: 'Java',        years: '3+', level: 'Expert' },
  { name: 'Spring Boot', years: '3+', level: 'Expert' },
  { name: 'Hibernate',   years: '3+', level: 'Advanced' },
  { name: 'Oracle',      years: '3+', level: 'Advanced' },
  { name: 'PL/SQL',      years: '3+', level: 'Advanced' },
  { name: 'MongoDB',     years: '2+', level: 'Intermediate' },
  { name: 'MySQL',       years: '3+', level: 'Advanced' },
  { name: 'Maven',       years: '3+', level: 'Advanced' },
  { name: 'Git',         years: '3+', level: 'Advanced' },
  { name: 'REST API',    years: '3+', level: 'Expert' },
  { name: 'Python',      years: '1+', level: 'Intermediate' },
  { name: 'WebLogic',    years: '3+', level: 'Intermediate' },
]

const levelColor = {
  Expert:       'text-cyan-400 bg-cyan-500/10 border-cyan-500/25',
  Advanced:     'text-blue-400 bg-blue-500/10 border-blue-500/25',
  Intermediate: 'text-violet-400 bg-violet-500/10 border-violet-500/25',
}

function CustomRadarTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const { subject, level } = payload[0].payload
    return (
      <div className="bg-slate-900 border border-cyan-500/25 rounded-lg px-3 py-2 text-xs font-mono">
        <div className="text-cyan-400">{subject}</div>
        <div className="text-white font-bold">{level}%</div>
      </div>
    )
  }
  return null
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('backend')
  const activeCat = CATEGORIES.find((c) => c.key === activeCategory)

  return (
    <PageTransition>
      <div className="relative bg-[#050b14] min-h-screen">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <SectionHeader
            label="Skills"
            title="Technical Proficiency Matrix"
            subtitle="3+ years of hands-on engineering depth across Java backend, financial databases, DevOps tooling, and system architecture."
          />

          {/* Two-column layout: radar + skill bars */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
            {/* Radar Chart */}
            <ScrollReveal className="lg:col-span-2">
              <GlassCard hover={false} className="p-6 h-full">
                <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-4">Skill Radar</div>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={radarData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                    <PolarGrid stroke="rgba(6,182,212,0.12)" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'JetBrains Mono, monospace' }}
                    />
                    <Radar
                      name="Level"
                      dataKey="level"
                      stroke="#06b6d4"
                      fill="#06b6d4"
                      fillOpacity={0.12}
                      strokeWidth={1.5}
                    />
                    <Tooltip content={<CustomRadarTooltip />} />
                  </RadarChart>
                </ResponsiveContainer>

                {/* Legend */}
                <div className="mt-4 space-y-1.5">
                  {radarData.map((d) => (
                    <div key={d.subject} className="flex items-center justify-between">
                      <span className="text-slate-500 text-xs">{d.subject}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full"
                            style={{ width: `${d.level}%` }}
                          />
                        </div>
                        <span className="text-cyan-400 text-[10px] font-mono w-8 text-right">{d.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>

            {/* Category Skill Bars */}
            <ScrollReveal delay={0.1} className="lg:col-span-3">
              <GlassCard hover={false} className="p-6 h-full">
                {/* Category tabs */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => setActiveCategory(cat.key)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono rounded-md border transition-all duration-200 ${
                        activeCategory === cat.key
                          ? `${colorMap[cat.color].light} ${colorMap[cat.color].text}`
                          : 'text-slate-500 border-slate-700/30 hover:text-slate-300'
                      }`}
                    >
                      <cat.icon size={11} />
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {skills[activeCategory]?.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      color={activeCat?.color ?? 'cyan'}
                      delay={i * 0.07}
                    />
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Tech Stack Grid */}
          <ScrollReveal>
            <h3 className="text-lg font-bold text-white mb-6 text-center">Full Technology Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {TECHSTACK.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="group p-3 bg-slate-900/50 border border-slate-800/50 rounded-xl hover:border-cyan-500/25 hover:-translate-y-1 transition-all duration-200 text-center"
                >
                  <div className="text-white font-semibold text-xs mb-1">{tech.name}</div>
                  <div className="text-slate-600 text-[10px] font-mono mb-1.5">{tech.years} yrs</div>
                  <span className={`inline-block px-1.5 py-0.5 text-[9px] font-mono border rounded ${levelColor[tech.level]}`}>
                    {tech.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  )
}

function SkillBar({ skill, color, delay }) {
  const c = colorMap[color]
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
        <span className={`text-xs font-mono font-bold ${c.text}`}>{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${c.bar} rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-white/20 animate-shimmer" />
        </motion.div>
      </div>
    </motion.div>
  )
}
