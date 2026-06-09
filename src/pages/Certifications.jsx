import { motion } from 'framer-motion'
import { Award, CheckCircle, ExternalLink, Star } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'
import { certifications } from '../data/content'

const colorMap = {
  cyan:   { card: 'border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_8px_32px_rgba(6,182,212,0.1)]',  badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',   icon: 'text-cyan-400' },
  blue:   { card: 'border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_8px_32px_rgba(59,130,246,0.1)]', badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30',   icon: 'text-blue-400' },
  purple: { card: 'border-violet-500/20 hover:border-violet-500/40 hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)]',badge:'bg-violet-500/10 text-violet-400 border-violet-500/30', icon: 'text-violet-400' },
  green:  { card: 'border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_8px_32px_rgba(16,185,129,0.1)]',badge:'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', icon: 'text-emerald-400' },
}

export default function Certifications() {
  return (
    <PageTransition>
      <div className="relative bg-[#050b14] min-h-screen">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <SectionHeader
            label="Certifications"
            title="Verified Learning"
            subtitle="Credentials from IBM, IIM Indore, and Anthropic — spanning machine learning, AI, entrepreneurship, and professional development."
          />

          {/* Cert Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.id} delay={i * 0.1}>
                <CertCard cert={cert} />
              </ScrollReveal>
            ))}
          </div>

          {/* Education Block */}
          <ScrollReveal delay={0.3}>
            <div className="max-w-5xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Education</h3>
              <div className="p-6 bg-slate-900/50 border border-violet-500/15 rounded-2xl hover:border-violet-500/30 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center flex-shrink-0">
                      <span className="text-violet-400 font-bold text-xl font-mono">B</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-violet-400 uppercase tracking-widest mb-1">Bachelor of Technology</div>
                      <h4 className="text-white font-bold text-lg">Computer Science Engineering</h4>
                      <p className="text-slate-400 text-sm mt-0.5">IES College of Technology</p>
                      <p className="text-slate-600 text-xs mt-0.5">RGPV University, Bhopal, Madhya Pradesh</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-1">Completed</div>
                    <div className="text-white font-bold text-lg font-mono">2022</div>
                    <div className="text-slate-600 text-xs">2018 — 2022</div>
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-800/50 pt-4">
                  <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-3">Key Subjects</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Data Structures & Algorithms',
                      'Object-Oriented Programming',
                      'Database Management Systems',
                      'Computer Networks',
                      'Operating Systems',
                      'Software Engineering',
                    ].map((s) => (
                      <span key={s} className="px-2.5 py-1 bg-slate-800/50 border border-slate-700/30 rounded-md text-slate-400 text-xs">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  )
}

function CertCard({ cert }) {
  const c = colorMap[cert.color]

  return (
    <div className={`group p-6 bg-slate-900/55 backdrop-blur-md border rounded-2xl transition-all duration-300 hover:-translate-y-1 ${c.card}`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-start gap-4">
          {/* Issuer badge */}
          <div className={`w-14 h-14 rounded-xl border flex items-center justify-center flex-shrink-0 ${c.badge}`}>
            <span className="font-bold text-sm font-mono">{cert.badge}</span>
          </div>
          <div>
            <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-1">{cert.issuer} · {cert.platform}</div>
            <h3 className="text-white font-bold text-sm leading-snug">{cert.title}</h3>
          </div>
        </div>
        {/* Verified mark */}
        <div className="flex-shrink-0">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-emerald-500/8 border border-emerald-500/20 rounded-lg">
            <CheckCircle size={12} className="text-emerald-400" />
            <span className="text-emerald-400 text-[10px] font-mono">Verified</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{cert.description}</p>

      {/* Skills covered */}
      <div>
        <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-2">Skills Covered</div>
        <div className="flex flex-wrap gap-1.5">
          {cert.skills.map((s) => (
            <span key={s} className={`px-2 py-0.5 text-[10px] font-mono border rounded ${c.badge}`}>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-slate-800/50 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className={`${i < 4 ? c.icon : 'text-slate-700'} fill-current`} />
          ))}
        </div>
        <Award size={14} className={c.icon} />
      </div>
    </div>
  )
}
