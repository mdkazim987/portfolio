import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'
import GlassCard from '../components/GlassCard'
import { personal } from '../data/content'

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mdkazim987@gmail.com',
    href: 'mailto:mdkazim987@gmail.com',
    sub: 'Preferred contact method',
    color: 'cyan',
    external: false,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-8368471473',
    href: 'tel:+918368471473',
    sub: 'Available Mon–Fri, 10am–7pm IST',
    color: 'blue',
    external: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mdkazim-6391201a0',
    href: 'https://linkedin.com/in/mdkazim-6391201a0',
    sub: 'Connect professionally',
    color: 'blue',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mumbai, Maharashtra, India',
    href: null,
    sub: 'Open to hybrid / remote opportunities',
    color: 'green',
    external: false,
  },
]

const colorMap = {
  cyan:  'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  blue:  'bg-blue-500/10 border-blue-500/20 text-blue-400',
  green: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
}

const STATUS = { idle: 'idle', loading: 'loading', success: 'success', error: 'error' }

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm]     = useState(INITIAL_FORM)
  const [status, setStatus] = useState(STATUS.idle)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())                             e.name    = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email   = 'Valid email required'
    if (!form.subject.trim())                          e.subject  = 'Subject is required'
    if (form.message.trim().length < 20)               e.message  = 'Message must be at least 20 characters'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((ev) => ({ ...ev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus(STATUS.loading)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name:    form.name,
          email:   form.email,
          title:   form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus(STATUS.success)
      setForm(INITIAL_FORM)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus(STATUS.error)
    }
  }

  return (
    <PageTransition>
      <div className="relative bg-[#050b14] min-h-screen">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60 pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/4 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <SectionHeader
            label="Contact"
            title="Let's Build Something Together"
            subtitle="Open to backend engineering roles, contract work, and technical collaborations. Based in Mumbai — available hybrid or remote."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <ScrollReveal className="lg:col-span-2" direction="left">
              <div className="space-y-4">
                {CONTACT_ITEMS.map((item) => {
                  const c = colorMap[item.color]
                  const Inner = (
                    <GlassCard hover={!!item.href} className="p-4 flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 ${c}`}>
                        <item.icon size={16} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{item.label}</div>
                        <div className="text-white text-sm font-medium truncate">{item.value}</div>
                        <div className="text-slate-600 text-[11px] mt-0.5">{item.sub}</div>
                      </div>
                      {item.external && <ExternalLink size={12} className="text-slate-700 flex-shrink-0 mt-1" />}
                    </GlassCard>
                  )

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div key={item.label}>{Inner}</div>
                  )
                })}

                {/* Availability Card */}
                <div className="p-4 bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/15 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                    </span>
                    <span className="text-emerald-400 text-xs font-mono font-semibold">Currently Available</span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Open to new opportunities — Backend Engineer, System Analyst, or Java Architect roles.
                    Remote, hybrid, or Mumbai onsite.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={0.15} className="lg:col-span-3" direction="right">
              <GlassCard hover={false} className="p-6">
                <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                  Send a Message
                </div>

                {status === STATUS.success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 flex flex-col items-center gap-4 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                      <CheckCircle2 size={32} className="text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Message Sent!</h3>
                      <p className="text-slate-400 text-sm max-w-xs">
                        Your message has been delivered. I'll get back to you as soon as possible!
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus(STATUS.idle)}
                      className="mt-2 px-4 py-2 text-xs font-mono text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-colors"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : status === STATUS.error ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 flex flex-col items-center gap-4 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center">
                      <AlertCircle size={32} className="text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Failed to Send</h3>
                      <p className="text-slate-400 text-sm max-w-xs">
                        Something went wrong. Please email directly at{' '}
                        <a href="mailto:mdkazim987@gmail.com" className="text-cyan-400 underline">mdkazim987@gmail.com</a>
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus(STATUS.idle)}
                      className="mt-2 px-4 py-2 text-xs font-mono text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-colors"
                    >
                      Try Again
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field
                        label="Full Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        error={errors.name}
                      />
                      <Field
                        label="Email Address"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        error={errors.email}
                      />
                    </div>
                    <Field
                      label="Subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      error={errors.subject}
                    />
                    <Field
                      label="Message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity, project, or question..."
                      error={errors.message}
                      textarea
                      rows={5}
                    />

                    <button
                      type="submit"
                      disabled={status === STATUS.loading}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold text-sm rounded-lg transition-all duration-200 hover:shadow-neon-cyan"
                    >
                      {status === STATUS.loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-slate-700 text-[10px] text-center font-mono">
                      This will open your email client with the message pre-filled.
                    </p>
                  </form>
                )}
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

function Field({ label, name, type = 'text', value, onChange, placeholder, error, textarea = false, rows = 3 }) {
  const base = `w-full bg-slate-950/70 border rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-700 outline-none transition-all duration-200 font-mono focus:border-cyan-500/50 focus:bg-slate-950/90 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.08)] ${
    error ? 'border-red-500/40' : 'border-slate-700/50 hover:border-slate-600/60'
  }`

  return (
    <div>
      <label className="block text-xs font-medium text-slate-400 mb-1.5">
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={base}
        />
      )}
      {error && (
        <div className="flex items-center gap-1.5 mt-1.5">
          <AlertCircle size={11} className="text-red-400" />
          <span className="text-red-400 text-[11px]">{error}</span>
        </div>
      )}
    </div>
  )
}
