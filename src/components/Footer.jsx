import { Link } from 'react-router-dom'
import { Mail, Phone, Linkedin, MapPin, Code2, ExternalLink } from 'lucide-react'

const FOOTER_LINKS = [
  ['/about',         'About'],
  ['/experience',    'Experience'],
  ['/projects',      'Projects'],
  ['/architecture',  'Architecture Lab'],
  ['/war-stories',   'War Stories'],
  ['/skills',        'Skills'],
  ['/certifications','Certifications'],
  ['/contact',       'Contact'],
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#030810] border-t border-cyan-500/[0.08] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

          {/* Brand Block */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-neon-cyan">
                <span className="text-white font-bold font-mono">MK</span>
              </div>
              <div>
                <div className="text-white font-semibold text-base">Md Kazim</div>
                <div className="text-cyan-400 text-xs font-mono">System Analyst @ NuSummit Technologies</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-5">
              Building production-grade Java backend systems for NSE trading infrastructure.
              Specializing in high-availability microservices, Oracle data pipelines, and secure financial APIs.
            </p>
            <div className="flex items-center gap-1.5 text-slate-600 text-xs">
              <MapPin size={12} className="text-slate-600" />
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-semibold mb-4 font-mono uppercase tracking-widest">Navigation</h4>
            <ul className="grid grid-cols-2 gap-2">
              {FOOTER_LINKS.map(([path, label]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-white text-xs font-semibold mb-4 font-mono uppercase tracking-widest">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:mdkazim987@gmail.com"
                className="flex items-center gap-3 text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200 group"
              >
                <div className="w-7 h-7 rounded-md bg-slate-800/60 border border-slate-700/40 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                  <Mail size={13} />
                </div>
                mdkazim987@gmail.com
              </a>
              <a
                href="tel:+918368471473"
                className="flex items-center gap-3 text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200 group"
              >
                <div className="w-7 h-7 rounded-md bg-slate-800/60 border border-slate-700/40 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                  <Phone size={13} />
                </div>
                +91-8368471473
              </a>
              <a
                href="https://linkedin.com/in/mdkazim-6391201a0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200 group"
              >
                <div className="w-7 h-7 rounded-md bg-slate-800/60 border border-slate-700/40 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                  <Linkedin size={13} />
                </div>
                <span>LinkedIn Profile</span>
                <ExternalLink size={10} className="text-slate-700 group-hover:text-cyan-600" />
              </a>
            </div>

            {/* Tech stack pills */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              {['Java', 'Spring Boot', 'Oracle', 'NSE'].map((t) => (
                <span key={t} className="px-2 py-0.5 text-[10px] font-mono text-slate-600 bg-slate-800/40 border border-slate-700/30 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-700 text-xs font-mono">
            © {year} Md Kazim · Mumbai, India
          </p>
          <div className="flex items-center gap-1.5 text-slate-700 text-xs font-mono">
            <Code2 size={11} className="text-cyan-800" />
            Built with React · Vite · Tailwind CSS · Framer Motion
          </div>
        </div>
      </div>
    </footer>
  )
}
