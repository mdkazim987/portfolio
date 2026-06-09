import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Cpu } from 'lucide-react'

const NAV_LINKS = [
  { path: '/',              label: 'Home' },
  { path: '/about',         label: 'About' },
  { path: '/experience',    label: 'Experience' },
  { path: '/projects',      label: 'Projects' },
  { path: '/architecture',  label: 'Arch Lab' },
  { path: '/war-stories',   label: 'War Stories' },
  { path: '/skills',        label: 'Skills' },
  { path: '/certifications',label: 'Certifications' },
  { path: '/contact',       label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  const isActive = (path) => location.pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050b14]/95 backdrop-blur-lg border-b border-cyan-500/10 shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-full ring-2 ring-cyan-500/40 group-hover:ring-cyan-400/80 transition-all duration-300 overflow-hidden shadow-neon-cyan flex-shrink-0">
              <img
                src="/DP.jpg"
                alt="Md Kazim"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block leading-none">
              <div className="text-white font-semibold text-sm">Md Kazim</div>
              <div className="text-cyan-400 text-[10px] font-mono opacity-80">System Analyst</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-[11px] font-medium rounded-md transition-colors duration-200 tracking-wide ${
                  isActive(link.path)
                    ? 'text-cyan-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-cyan-500/10 rounded-md border border-cyan-500/25"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="MdKazim_Resume.pdf"
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-mono font-medium text-cyan-400 border border-cyan-500/40 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-neon-cyan transition-all duration-200"
            >
              <Download size={11} />
              Resume
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-md hover:bg-slate-800/50"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-[#050b14]/98 backdrop-blur-xl border-t border-cyan-500/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {isActive(link.path) && <Cpu size={12} className="text-cyan-400" />}
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3 border-t border-slate-800/60">
                <a
                  href="/resume.pdf"
                  download="MdKazim_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
