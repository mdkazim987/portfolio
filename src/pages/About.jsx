import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, MapPin, Star, Target, Users, Code2, Lightbulb } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import GlassCard from '../components/GlassCard'
import { timeline, personal } from '../data/content'

const STRENGTHS = [
  {
    icon: Target,
    title: 'Production Thinking',
    desc: "Designs systems for real-world failure modes, not textbook scenarios. In financial systems, a bug isn't an inconvenience — it could be a trading halt.",
    color: 'cyan',
  },
  {
    icon: Code2,
    title: 'Performance Obsession',
    desc: 'Benchmarks critical paths before and after every optimization. Reduced Oracle query times by 35% and API latency by 40% through systematic profiling.',
    color: 'blue',
  },
  {
    icon: Star,
    title: 'Security-First Mindset',
    desc: 'SSL certificate management, SFTP encryption, secure coding practices, and compliance audit trails are not afterthoughts — they are architectural decisions.',
    color: 'purple',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'Daily Agile ceremonies, cross-functional coordination with QA, business analysts, and NSE client teams. Strong communicator in distributed setups.',
    color: 'green',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    desc: 'IBM Machine Learning and Watson certifications, IIM Indore entrepreneurship program. Actively expanding into AI/ML integration for backend services.',
    color: 'orange',
  },
]

const colorMap = {
  cyan:   'from-cyan-500/20 to-transparent border-cyan-500/20 text-cyan-400',
  blue:   'from-blue-500/20 to-transparent border-blue-500/20 text-blue-400',
  purple: 'from-violet-500/20 to-transparent border-violet-500/20 text-violet-400',
  green:  'from-emerald-500/20 to-transparent border-emerald-500/20 text-emerald-400',
  orange: 'from-orange-500/20 to-transparent border-orange-500/20 text-orange-400',
}

const typeIcon = { education: GraduationCap, work: Briefcase, current: Star }
const typeColor = {
  education: 'bg-violet-500/15 border-violet-500/30 text-violet-400',
  work:      'bg-blue-500/15   border-blue-500/30   text-blue-400',
  current:   'bg-cyan-500/15   border-cyan-500/30   text-cyan-400',
}

export default function About() {
  return (
    <PageTransition>
      <div className="relative bg-[#050b14] min-h-screen">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60 pointer-events-none" />

        {/* ── Cover + Profile Hero ── */}
        <div className="relative pt-16">
          {/* Cover image */}
          <div className="relative h-52 sm:h-72 overflow-hidden">
            <img
              src="/CVR.jpg"
              alt="Cover"
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050b14]/50 to-transparent" />
            {/* Subtle cyan tint to blend with palette */}
            <div className="absolute inset-0 bg-cyan-950/20 mix-blend-color" />
          </div>

          {/* Profile overlap row */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="flex flex-col sm:flex-row items-start sm:items-end gap-5"
            >
              {/* Profile picture */}
              <div className="relative flex-shrink-0">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl border-4 border-[#050b14] shadow-neon-cyan overflow-hidden">
                  <img
                    src="/DP.jpg"
                    alt="Md Kazim"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-emerald-400 border-2 border-[#050b14] flex items-center justify-center shadow-neon-green">
                  <span className="text-[9px] font-bold text-slate-950">✓</span>
                </div>
              </div>

              {/* Name / title */}
              <div className="sm:pb-2 flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h1 className="text-white text-2xl sm:text-3xl font-black leading-tight">Md Kazim</h1>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/25 rounded-full">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-emerald-400 text-[10px] font-mono">Available</span>
                  </span>
                </div>
                <p className="text-cyan-400 font-mono text-sm font-medium">System Analyst · Java Backend Engineer</p>
                <div className="flex flex-wrap items-center gap-3 mt-1.5 text-slate-500 text-xs">
                  <span className="flex items-center gap-1"><MapPin size={11} /> Mumbai, Maharashtra</span>
                  <span className="text-slate-700">·</span>
                  <span className="flex items-center gap-1"><Briefcase size={11} /> NuSummit Technologies</span>
                  <span className="text-slate-700">·</span>
                  <span>Client: NSE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Profile + Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
            {/* Profile card */}
            <ScrollReveal delay={0.1} className="lg:col-span-2">
              <GlassCard hover={false} className="p-6 h-full">
                {/* Compact profile photo row */}
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-slate-800/60">
                  <div className="w-14 h-14 rounded-xl overflow-hidden ring-2 ring-cyan-500/30 flex-shrink-0">
                    <img src="/DP.jpg" alt="Md Kazim" className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Md Kazim</div>
                    <div className="text-cyan-400 text-xs font-mono">System Analyst</div>
                    <div className="text-slate-600 text-[10px] mt-0.5">NuSummit Technologies</div>
                  </div>
                </div>

                <div className="space-y-3 text-sm mb-5">
                  <InfoRow icon={MapPin}        label="Location"   value="Mumbai, Maharashtra" />
                  <InfoRow icon={Briefcase}     label="Role"       value="System Analyst" />
                  <InfoRow icon={GraduationCap} label="Education"  value="B.Tech CSE — RGPV" />
                </div>

                <div className="pt-4 border-t border-slate-800/60">
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {personal.bio}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>

            {/* Philosophy */}
            <ScrollReveal delay={0.2} className="lg:col-span-3">
              <GlassCard hover={false} className="p-8 h-full">
                <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                  <Code2 size={18} className="text-cyan-400" />
                  Engineering Philosophy
                </h3>
                <div className="h-px bg-gradient-to-r from-cyan-500/30 to-transparent mb-6" />

                <div className="space-y-5 text-sm text-slate-400 leading-relaxed">
                  <p>
                    <span className="text-cyan-400 font-mono text-xs block mb-1">// Production Reality</span>
                    Financial systems demand a different level of engineering rigor.
                    When your code runs on NSE infrastructure processing live trades,
                    a silent failure doesn't just break a feature — it can trigger
                    regulatory violations or block thousands of trading members.
                    I design for the worst case first.
                  </p>
                  <p>
                    <span className="text-blue-400 font-mono text-xs block mb-1">// Observability Over Optimism</span>
                    Monitoring, structured logging, and health checks aren't optional extras.
                    The Log4j migration I led wasn't just a security fix — it was an
                    opportunity to build the observability foundation the system deserved.
                    You can't fix what you can't see.
                  </p>
                  <p>
                    <span className="text-violet-400 font-mono text-xs block mb-1">// Simplicity Scales</span>
                    The most maintainable microservice is the one whose logic fits
                    in your head. I resist over-engineering and favor clear domain
                    boundaries, well-named abstractions, and code that reads as documentation.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-slate-950/60 rounded-lg border border-cyan-500/10 font-mono text-xs">
                  <span className="text-slate-600">// Core principle</span>
                  <div className="text-cyan-300 mt-1">
                    <span className="text-slate-500">if</span>{' '}
                    <span className="text-white">(</span>
                    <span className="text-emerald-400">production.fails</span>
                    <span className="text-white">)</span>
                    {' '}<span className="text-slate-500">then</span>{' '}
                    <span className="text-orange-400">investigate</span>
                    <span className="text-white">(</span>
                    <span className="text-yellow-400">"root cause"</span>
                    <span className="text-white">)</span>
                  </div>
                  <div className="text-cyan-300 mt-0.5">
                    <span className="text-slate-500">not</span>{' '}
                    <span className="text-orange-400">patch</span>
                    <span className="text-white">(</span>
                    <span className="text-yellow-400">"symptoms"</span>
                    <span className="text-white">)</span>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <ScrollReveal>
              <h3 className="text-2xl font-bold text-white mb-10 text-center">Engineering Journey</h3>
            </ScrollReveal>
            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-blue-500/30 to-transparent hidden sm:block" />

              <div className="space-y-6">
                {timeline.map((item, i) => {
                  const Icon = typeIcon[item.type] ?? Briefcase
                  return (
                    <ScrollReveal key={i} delay={i * 0.1}>
                      <div className="flex gap-5 group">
                        {/* Timeline node */}
                        <div className="relative flex-shrink-0 hidden sm:flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-xl border flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 ${typeColor[item.type]}`}>
                            <Icon size={16} />
                          </div>
                        </div>

                        <GlassCard hover={false} className="flex-1 p-5 group-hover:border-cyan-500/25 transition-all duration-300">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <div>
                              <span className={`inline-block px-2 py-0.5 text-[10px] font-mono border rounded mb-1.5 ${typeColor[item.type]}`}>
                                {item.year}
                              </span>
                              <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                              <p className="text-cyan-400 text-xs font-mono">{item.company}</p>
                            </div>
                            {item.type === 'current' && (
                              <span className="flex items-center gap-1.5 px-2 py-1 bg-emerald-500/10 border border-emerald-500/25 rounded-full">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                <span className="text-emerald-400 text-[10px] font-mono">Current</span>
                              </span>
                            )}
                          </div>
                          <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
                        </GlassCard>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Strengths */}
          <div>
            <ScrollReveal>
              <h3 className="text-2xl font-bold text-white mb-10 text-center">Key Strengths</h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {STRENGTHS.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className={`p-6 rounded-xl border bg-gradient-to-br ${colorMap[s.color]} hover:-translate-y-1 transition-all duration-300 h-full`}>
                    <s.icon size={20} className={`mb-3 ${colorMap[s.color].split(' ').pop()}`} />
                    <h4 className="text-white font-semibold text-sm mb-2">{s.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-7 h-7 rounded-md bg-slate-800/60 border border-slate-700/40 flex items-center justify-center flex-shrink-0">
        <Icon size={13} className="text-cyan-500/70" />
      </div>
      <div>
        <div className="text-slate-600 text-[10px] font-mono uppercase tracking-wide">{label}</div>
        <div className="text-slate-300 text-xs">{value}</div>
      </div>
    </div>
  )
}
