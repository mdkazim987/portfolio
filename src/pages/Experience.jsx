import { motion } from 'framer-motion'
import { Building2, Calendar, MapPin, CheckCircle2, ExternalLink, ChevronRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'
import GlassCard from '../components/GlassCard'
import NeonBadge from '../components/NeonBadge'
import { experience } from '../data/content'

const badgeColor = {
  'Java 8':        'cyan',
  'Java 7':        'blue',
  'Spring Boot':   'cyan',
  'Hibernate/JPA': 'cyan',
  'Oracle':        'orange',
  'MongoDB':       'green',
  'PL/SQL':        'orange',
  'REST API':      'blue',
  'Maven':         'slate',
  'Git':           'slate',
  'Microservices': 'purple',
  'WebLogic':      'slate',
  'Log4j 2':       'yellow',
  'SSL/TLS':       'green',
  'SFTP':          'green',
  'JSP':           'slate',
  'Servlets':      'slate',
  'SVN':           'slate',
  'Tomcat':        'slate',
}

export default function Experience() {
  return (
    <PageTransition>
      <div className="relative bg-[#050b14] min-h-screen">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <SectionHeader
            label="Experience"
            title="Professional Journey"
            subtitle="3+ years of hands-on Java backend engineering on NSE trading infrastructure — from regulatory reporting to collateral management systems."
          />

          {/* Timeline connector */}
          <div className="relative space-y-10">
            {experience.map((exp, i) => (
              <ScrollReveal key={exp.id} delay={i * 0.15}>
                <ExperienceCard exp={exp} index={i} />
              </ScrollReveal>
            ))}
          </div>

          {/* Summary Bar */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 p-6 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-transparent border border-cyan-500/15 rounded-2xl">
              <h3 className="text-white font-semibold text-sm mb-5 font-mono">// Career Metrics</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { value: '3+',    label: 'Years Total',          sub: 'Industry Experience' },
                  { value: '2',     label: 'Companies',            sub: 'NSEIT · NuSummit' },
                  { value: 'NSE',   label: 'Primary Client',       sub: 'National Stock Exchange' },
                  { value: '100%',  label: 'Java / Backend',       sub: 'Core Specialization' },
                ].map((m, j) => (
                  <div key={j} className="text-center">
                    <div className="text-2xl font-bold font-mono text-cyan-400 mb-0.5">{m.value}</div>
                    <div className="text-white text-xs font-medium">{m.label}</div>
                    <div className="text-slate-600 text-[10px]">{m.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  )
}

function ExperienceCard({ exp }) {
  const borderColor = exp.color === 'cyan'
    ? 'border-l-cyan-500'
    : 'border-l-blue-500'

  return (
    <div className={`relative pl-0 sm:pl-8 border-l-0 sm:border-l-2 ${borderColor} border-l-opacity-40`}>
      {/* Timeline dot */}
      <div className="hidden sm:block absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-[#050b14] border-2 border-cyan-500 shadow-neon-cyan" />

      <GlassCard hover={false} className="overflow-hidden">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-slate-800/50">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center flex-shrink-0">
                <Building2 size={20} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">{exp.company}</h3>
                <p className="text-cyan-400 font-semibold text-sm">{exp.role}</p>
                <div className="flex flex-wrap items-center gap-3 mt-1.5">
                  <span className="flex items-center gap-1 text-slate-500 text-xs">
                    <Calendar size={11} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500 text-xs">
                    <MapPin size={11} />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-1">Client</div>
              <div className="text-white font-semibold text-sm">{exp.client}</div>
              <div className="text-slate-500 text-xs mt-0.5">{exp.project}</div>
              {exp.period.includes('Present') && (
                <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/25 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 text-[10px] font-mono">Active</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 pt-4 pb-2">
          <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
        </div>

        {/* Achievements */}
        <div className="px-6 py-4">
          <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-3">Key Achievements</div>
          <ul className="space-y-2.5">
            {exp.achievements.map((a, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={14} className="text-cyan-500/70 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">{a}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="px-6 pb-6 pt-2 border-t border-slate-800/50">
          <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-3 mt-3">Technology Stack</div>
          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <NeonBadge key={t} color={badgeColor[t] ?? 'slate'} size="sm">
                {t}
              </NeonBadge>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
