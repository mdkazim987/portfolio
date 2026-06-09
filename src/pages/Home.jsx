import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Download, Mail, Eye, Server, Cpu, GitBranch, Database,
  ArrowDown, ChevronRight, Shield, Zap, Globe,
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { personal } from '../data/content'

const STATS = [
  { value: '3+',    label: 'Years Experience',  sub: 'Production Systems',    icon: Server,    color: 'cyan' },
  { value: 'NSE',   label: 'Trading Systems',   sub: 'Live Infrastructure',   icon: Cpu,       color: 'blue' },
  { value: '15+',   label: 'APIs Delivered',    sub: 'REST & Integration',    icon: GitBranch, color: 'purple' },
  { value: '99.9%', label: 'Uptime Target',     sub: 'HA Architecture',       icon: Database,  color: 'green' },
]

const TECH = ['Java 8', 'Spring Boot', 'Hibernate/JPA', 'Oracle', 'MongoDB', 'MySQL', 'PL/SQL', 'Microservices', 'REST API', 'Maven', 'SSL/TLS', 'Log4j 2', 'WebLogic', 'Tomcat', 'Git']

const FEATURES = [
  { icon: Shield,  title: 'Financial-Grade Security', desc: 'SSL/TLS, SFTP secure transmission, and compliance-ready audit trails.' },
  { icon: Zap,     title: 'High-Performance APIs',    desc: 'Optimized REST APIs with Oracle query tuning — sub-100ms p99 latency.' },
  { icon: Globe,   title: 'NSE-Scale Microservices',  desc: 'Distributed systems serving thousands of trading members and custodians.' },
  { icon: Database,title: 'Data Pipeline Engineering',desc: 'Automated report generation, Maker-Checker workflows, and data integrity.' },
]

const colorMap = {
  cyan:   { ring: 'bg-cyan-500/10 border-cyan-500/25',   text: 'text-cyan-400',   icon: 'text-cyan-400' },
  blue:   { ring: 'bg-blue-500/10 border-blue-500/25',   text: 'text-blue-400',   icon: 'text-blue-400' },
  purple: { ring: 'bg-violet-500/10 border-violet-500/25',text: 'text-violet-400', icon: 'text-violet-400' },
  green:  { ring: 'bg-emerald-500/10 border-emerald-500/25',text:'text-emerald-400',icon:'text-emerald-400' },
}

export default function Home() {
  return (
    <PageTransition>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050b14]">
        {/* Grid bg */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none" />
        {/* Glow orbs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-blue-700/5 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-cyan-900/10 to-transparent rounded-full pointer-events-none" />

        {/* Corner scan lines */}
        <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-cyan-500/15 rounded-tl-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-cyan-500/15 rounded-br-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20 pb-8">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/8 border border-emerald-500/25 rounded-full backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-xs font-mono">Available for Opportunities</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl font-black mb-4 leading-none tracking-tight"
          >
            <span className="bg-gradient-to-br from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
              Md Kazim
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-6"
          >
            {['System Analyst', 'Java Backend Engineer', 'NSE Trading Systems'].map((t, i) => (
              <span key={t} className="flex items-center gap-2">
                {i > 0 && <span className="text-cyan-500/40 text-lg hidden sm:inline">·</span>}
                <span className="text-cyan-400 font-mono text-sm sm:text-base font-medium">{t}</span>
              </span>
            ))}
          </motion.div>

          {/* Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Building{' '}
            <span className="text-white">High-Availability Financial Systems</span>,{' '}
            <span className="text-white">Scalable Microservices</span>, and{' '}
            <span className="text-white">Production-Grade Backend Architecture</span>{' '}
            for NSE Trading Infrastructure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            <a
              href={personal.resumeUrl}
              download="MdKazim_Resume.pdf"
              className="btn-primary hover:shadow-neon-cyan"
            >
              <Download size={15} />
              Download Resume
            </a>
            <Link to="/contact" className="btn-outline">
              <Mail size={15} />
              Contact Me
            </Link>
            <Link to="/projects" className="btn-ghost">
              <Eye size={15} />
              View Projects
            </Link>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
          >
            {STATS.map((s, i) => (
              <StatCard key={i} {...s} delay={0.6 + i * 0.08} />
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#capabilities"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 hover:text-slate-400 transition-colors"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ArrowDown size={14} />
          </motion.div>
        </motion.a>
      </section>

      {/* ── Tech Stack Marquee ── */}
      <section className="py-8 bg-[#030810] border-y border-cyan-500/[0.07] overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex gap-10 whitespace-nowrap"
        >
          {[...TECH, ...TECH].map((tech, i) => (
            <span key={i} className="flex items-center gap-2.5 text-slate-600 font-mono text-xs flex-shrink-0">
              <span className="text-cyan-700 text-[8px]">◆</span>
              {tech}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ── Capabilities ── */}
      <section id="capabilities" className="relative bg-[#050b14] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4 uppercase tracking-[0.15em]">
              Core Capabilities
            </span>
            <h2 className="text-4xl font-bold text-white mb-3">
              Engineering for Production Reality
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Not just feature delivery — engineering systems that survive market open, stay reliable under load, and meet regulatory compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 bg-slate-900/50 border border-cyan-500/10 rounded-xl hover:border-cyan-500/25 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-cyan transition-all duration-300">
                  <f.icon size={18} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{f.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-10"
          >
            <Link
              to="/experience"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors group"
            >
              View Full Experience
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

function StatCard({ value, label, sub, icon: Icon, color, delay }) {
  const c = colorMap[color]
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: 'easeOut' }}
      className={`group border ${c.ring} rounded-xl p-4 text-center hover:scale-105 transition-transform duration-200 backdrop-blur-sm`}
    >
      <Icon size={18} className={`${c.icon} mx-auto mb-2 group-hover:scale-110 transition-transform duration-200`} />
      <div className={`text-2xl font-bold font-mono ${c.text} leading-none mb-1`}>{value}</div>
      <div className="text-white text-xs font-medium">{label}</div>
      <div className="text-slate-600 text-[10px] mt-0.5">{sub}</div>
    </motion.div>
  )
}
