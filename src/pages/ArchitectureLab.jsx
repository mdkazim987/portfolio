import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe, Shield, Cpu, Database, MessageSquare, Bell, FileText,
  Lock, TrendingUp, RefreshCw, Server, GitBranch, Zap, Activity,
  ArrowDown, ArrowRight,
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'

const TABS = [
  { id: 'microservices',  label: 'Microservices',    icon: Cpu },
  { id: 'api-gateway',    label: 'API Gateway',      icon: Shield },
  { id: 'event-driven',   label: 'Event-Driven',     icon: Zap },
  { id: 'database',       label: 'Database Scaling', icon: Database },
  { id: 'high-avail',     label: 'High Availability',icon: Activity },
]

export default function ArchitectureLab() {
  const [activeTab, setActiveTab] = useState('microservices')

  return (
    <PageTransition>
      <div className="relative bg-[#050b14] min-h-screen">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <SectionHeader
            label="Architecture Lab"
            title="System Design Blueprints"
            subtitle="Interactive architecture patterns applied in production Java backend systems — from API gateway design to high-availability infrastructure."
          />

          {/* Tab Selector */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-lg border transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/40 shadow-neon-cyan'
                      : 'text-slate-500 border-slate-700/40 hover:border-slate-600 hover:text-slate-300'
                  }`}
                >
                  <tab.icon size={13} />
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Diagram Area */}
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'microservices' && <MicroservicesDiagram />}
                {activeTab === 'api-gateway'   && <APIGatewayDiagram />}
                {activeTab === 'event-driven'  && <EventDrivenDiagram />}
                {activeTab === 'database'      && <DatabaseDiagram />}
                {activeTab === 'high-avail'    && <HighAvailDiagram />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

/* ── Shared primitives ── */

function DiagramBox({ icon: Icon, label, sublabel, color = 'slate', size = 'md', className = '' }) {
  const colors = {
    cyan:   'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    blue:   'bg-blue-500/10 border-blue-500/30 text-blue-400',
    green:  'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    purple: 'bg-violet-500/10 border-violet-500/30 text-violet-400',
    orange: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
    red:    'bg-red-500/10 border-red-500/30 text-red-400',
    slate:  'bg-slate-800/60 border-slate-700/40 text-slate-400',
    yellow: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
  }
  const sizes = {
    sm:   'px-2.5 py-2 min-w-[80px]',
    md:   'px-3 py-3 min-w-[100px]',
    lg:   'px-4 py-3 min-w-[140px]',
    full: 'px-4 py-3 w-full',
  }
  return (
    <div className={`flex flex-col items-center border rounded-lg text-center ${colors[color]} ${sizes[size]} ${className}`}>
      {Icon && <Icon size={size === 'sm' ? 13 : 16} className="mb-1 opacity-80" />}
      <div className={`font-mono font-semibold leading-tight ${size === 'sm' ? 'text-[10px]' : 'text-xs'}`}>{label}</div>
      {sublabel && <div className="text-[9px] opacity-60 mt-0.5 leading-tight max-w-[120px]">{sublabel}</div>}
    </div>
  )
}

function Arrow({ dir = 'down', label, className = '' }) {
  return (
    <div className={`flex flex-col items-center gap-0.5 ${className}`}>
      {dir === 'down' && (
        <>
          <div className="w-px h-4 bg-gradient-to-b from-cyan-500/50 to-cyan-500/20" />
          <ArrowDown size={10} className="text-cyan-500/50" />
          {label && <span className="text-[9px] font-mono text-slate-600">{label}</span>}
        </>
      )}
      {dir === 'right' && (
        <div className="flex items-center gap-0.5">
          <div className="h-px w-6 bg-gradient-to-r from-cyan-500/50 to-cyan-500/20" />
          <ArrowRight size={10} className="text-cyan-500/50" />
          {label && <span className="text-[9px] font-mono text-slate-600 ml-1">{label}</span>}
        </div>
      )}
    </div>
  )
}

function DiagramCard({ title, description, children }) {
  return (
    <div className="bg-slate-900/60 border border-cyan-500/12 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-800/60 bg-gradient-to-r from-cyan-500/5 to-transparent">
        <h3 className="text-white font-bold text-base">{title}</h3>
        <p className="text-slate-500 text-xs mt-1 leading-relaxed">{description}</p>
      </div>
      {/* Diagram */}
      <div className="p-6 md:p-8 overflow-x-auto">
        {children}
      </div>
    </div>
  )
}

/* ── Diagrams ── */

function MicroservicesDiagram() {
  return (
    <DiagramCard
      title="Microservices Architecture"
      description="Production pattern: independent services with clear domain boundaries, async messaging, and dedicated data stores per service domain."
    >
      <div className="flex flex-col items-center gap-2 min-w-[500px]">
        {/* Clients */}
        <div className="flex gap-4 justify-center">
          <DiagramBox icon={Globe} label="Web Client" color="slate" size="sm" />
          <DiagramBox icon={Globe} label="Mobile App" color="slate" size="sm" />
          <DiagramBox icon={Globe} label="Third Party" color="slate" size="sm" />
        </div>
        <Arrow dir="down" />
        {/* API Gateway */}
        <div className="w-full max-w-md">
          <DiagramBox icon={Shield} label="API Gateway" sublabel="Auth · Rate Limit · Load Balance · SSL Termination" color="cyan" size="full" />
        </div>
        <Arrow dir="down" />
        {/* Services */}
        <div className="flex flex-wrap gap-3 justify-center">
          <DiagramBox icon={Lock}       label="Auth Svc"   sublabel="JWT · OAuth" color="blue"   size="md" />
          <DiagramBox icon={TrendingUp} label="Trading Svc" sublabel="Core Logic" color="green"  size="md" />
          <DiagramBox icon={FileText}   label="Report Svc" sublabel="PDF · SFTP"  color="purple" size="md" />
          <DiagramBox icon={Bell}       label="Notify Svc" sublabel="Email · SMS"  color="orange" size="md" />
        </div>
        <Arrow dir="down" />
        {/* Message Bus */}
        <div className="w-full max-w-md">
          <DiagramBox icon={MessageSquare} label="Message Queue" sublabel="Async event processing · Decoupled communication" color="yellow" size="full" />
        </div>
        <Arrow dir="down" />
        {/* Databases */}
        <div className="flex gap-4 justify-center">
          <DiagramBox icon={Database} label="Oracle DB"  sublabel="Transactional" color="orange" size="md" />
          <DiagramBox icon={Database} label="MongoDB"    sublabel="Documents"     color="green"  size="md" />
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-3 justify-center text-[10px] font-mono text-slate-600 border-t border-slate-800/40 pt-4">
        {[
          ['cyan',   'Infrastructure'],
          ['blue',   'Security'],
          ['green',  'Business Logic'],
          ['purple', 'Reporting'],
          ['orange', 'Data Store'],
        ].map(([c, l]) => (
          <span key={l} className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-sm bg-${c}-500/40 border border-${c}-500/40`} />
            {l}
          </span>
        ))}
      </div>
    </DiagramCard>
  )
}

function APIGatewayDiagram() {
  const steps = [
    { icon: Globe,      label: 'Client Request', sub: 'HTTPS / REST',          color: 'slate' },
    { icon: Shield,     label: 'API Gateway',    sub: 'Entry Point',            color: 'cyan' },
    { icon: Activity,   label: 'Rate Limiter',   sub: 'Throttle · DDoS Guard',  color: 'red' },
    { icon: Lock,       label: 'Auth Middleware',sub: 'JWT Validate · RBAC',    color: 'blue' },
    { icon: RefreshCw,  label: 'Load Balancer',  sub: 'Round-robin · Health',   color: 'green' },
    { icon: Cpu,        label: 'Backend Services', sub: 'Business Logic',       color: 'purple' },
  ]

  return (
    <DiagramCard
      title="API Gateway Pattern"
      description="Request lifecycle through the gateway: every inbound request passes through rate limiting, authentication, and load balancing before reaching service logic."
    >
      <div className="flex flex-col items-center gap-2 min-w-[300px]">
        {steps.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-2 w-full">
            <div className="w-full max-w-xs">
              <DiagramBox icon={s.icon} label={s.label} sublabel={s.sub} color={s.color} size="full" />
            </div>
            {i < steps.length - 1 && <Arrow dir="down" />}
          </div>
        ))}
      </div>

      {/* Horizontal cross-concern */}
      <div className="mt-6 flex gap-3 flex-wrap justify-center">
        {['Logging', 'Tracing', 'Circuit Breaker', 'Caching'].map((c) => (
          <span key={c} className="px-2.5 py-1 bg-slate-800/50 border border-slate-700/30 rounded text-slate-500 text-[10px] font-mono">
            ↔ {c}
          </span>
        ))}
      </div>
    </DiagramCard>
  )
}

function EventDrivenDiagram() {
  return (
    <DiagramCard
      title="Event-Driven Architecture"
      description="Async, decoupled communication using a message broker — producers publish events; consumers process independently with retry and dead-letter queue support."
    >
      <div className="flex flex-col items-center gap-4 min-w-[400px]">
        {/* Producers */}
        <div>
          <div className="text-[10px] font-mono text-slate-600 text-center mb-2 uppercase tracking-widest">Producers</div>
          <div className="flex gap-3 justify-center">
            <DiagramBox icon={TrendingUp} label="Trading Svc"  color="green"  size="sm" />
            <DiagramBox icon={FileText}   label="Report Svc"   color="purple" size="sm" />
            <DiagramBox icon={Cpu}        label="Collateral Svc" color="blue" size="sm" />
          </div>
        </div>

        <Arrow dir="down" label="publish" />

        {/* Broker */}
        <div className="w-full max-w-md">
          <DiagramBox icon={MessageSquare} label="Message Broker" sublabel="Topic routing · Persistence · Replay" color="yellow" size="full" />
        </div>

        {/* Topics */}
        <div className="flex gap-2 flex-wrap justify-center">
          {['trade.events', 'report.generated', 'pledge.updated', 'audit.log'].map((t) => (
            <span key={t} className="px-2 py-1 bg-yellow-500/5 border border-yellow-500/15 rounded text-yellow-600 text-[10px] font-mono">
              {t}
            </span>
          ))}
        </div>

        <Arrow dir="down" label="consume" />

        {/* Consumers */}
        <div>
          <div className="text-[10px] font-mono text-slate-600 text-center mb-2 uppercase tracking-widest">Consumers</div>
          <div className="flex gap-3 flex-wrap justify-center">
            <DiagramBox icon={Bell}     label="Notify Svc"  color="orange" size="sm" />
            <DiagramBox icon={Database} label="Audit Store"  color="cyan"   size="sm" />
            <DiagramBox icon={Activity} label="Monitoring"  color="red"    size="sm" />
            <DiagramBox icon={RefreshCw} label="Retry Queue" color="slate"  size="sm" />
          </div>
        </div>

        {/* DLQ */}
        <div className="flex items-center gap-3 mt-2">
          <div className="w-px h-6 bg-red-500/30" />
          <DiagramBox icon={MessageSquare} label="Dead Letter Queue" sublabel="Failed events · Manual review" color="red" size="md" />
        </div>
      </div>
    </DiagramCard>
  )
}

function DatabaseDiagram() {
  return (
    <DiagramCard
      title="Database Scaling Strategy"
      description="Multi-database approach: Oracle primary/replica for transactional data, MongoDB for documents, connection pooling for performance, query optimization at every layer."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-w-[300px]">
        {/* Oracle */}
        <div className="space-y-3">
          <div className="text-[10px] font-mono text-orange-500/60 uppercase tracking-widest text-center">Oracle — Transactional</div>
          <DiagramBox icon={Database} label="Primary (Read/Write)" sublabel="ACID · Active transactions" color="orange" size="full" />
          <div className="flex gap-2 justify-center text-[9px] text-slate-600 font-mono">
            ↙ sync ↘
          </div>
          <div className="flex gap-2">
            <DiagramBox icon={Database} label="Replica 1" sublabel="Read-only" color="orange" size="full" />
            <DiagramBox icon={Database} label="Replica 2" sublabel="Read-only" color="orange" size="full" />
          </div>
          <div className="p-2 bg-slate-900/60 border border-slate-800/40 rounded text-[9px] font-mono text-slate-600 space-y-1">
            <div>• PL/SQL stored procedures</div>
            <div>• Connection pool (HikariCP)</div>
            <div>• Query plan caching</div>
            <div>• Index optimization</div>
          </div>
        </div>

        {/* MongoDB */}
        <div className="space-y-3">
          <div className="text-[10px] font-mono text-green-500/60 uppercase tracking-widest text-center">MongoDB — Document Store</div>
          <DiagramBox icon={Database} label="Primary Node" sublabel="Write operations" color="green" size="full" />
          <div className="flex gap-2 justify-center text-[9px] text-slate-600 font-mono">
            ↙ replica set ↘
          </div>
          <div className="flex gap-2">
            <DiagramBox icon={Database} label="Secondary 1" sublabel="Failover" color="green" size="full" />
            <DiagramBox icon={Database} label="Arbiter" sublabel="Election" color="slate" size="full" />
          </div>
          <div className="p-2 bg-slate-900/60 border border-slate-800/40 rounded text-[9px] font-mono text-slate-600 space-y-1">
            <div>• Flexible document schema</div>
            <div>• Aggregation pipelines</div>
            <div>• TTL indexes for logs</div>
            <div>• Spring Data MongoDB</div>
          </div>
        </div>
      </div>

      {/* Connection Pool */}
      <div className="mt-6 w-full">
        <DiagramBox icon={Server} label="Connection Pool Layer" sublabel="HikariCP · Max pool size · Health validation · Leak detection" color="cyan" size="full" />
      </div>
    </DiagramCard>
  )
}

function HighAvailDiagram() {
  return (
    <DiagramCard
      title="High Availability Design"
      description="Multi-instance deployment with health-check-aware load balancing, circuit breaker patterns, and automated failover to achieve 99.9%+ uptime targets."
    >
      <div className="flex flex-col items-center gap-3 min-w-[400px]">
        {/* LB */}
        <DiagramBox icon={Globe} label="Load Balancer" sublabel="Health-aware routing · Sticky sessions optional" color="cyan" size="full" className="max-w-md" />
        <Arrow dir="down" />

        {/* Service instances */}
        <div>
          <div className="text-[10px] font-mono text-slate-600 text-center mb-2 uppercase tracking-widest">Service Instances (N replicas)</div>
          <div className="flex gap-3 flex-wrap justify-center">
            {['Instance 1 ●', 'Instance 2 ●', 'Instance 3 ●'].map((inst, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <DiagramBox icon={Cpu} label={inst} sublabel="Active" color="green" size="sm" />
                <div className="text-[8px] font-mono text-green-600">HEALTHY</div>
              </div>
            ))}
            <div className="flex flex-col items-center gap-1.5">
              <DiagramBox icon={Cpu} label="Standby ○" sublabel="Warm standby" color="slate" size="sm" />
              <div className="text-[8px] font-mono text-slate-600">STANDBY</div>
            </div>
          </div>
        </div>

        <Arrow dir="down" />

        {/* Circuit Breaker */}
        <DiagramBox icon={Activity} label="Circuit Breaker" sublabel="CLOSED → OPEN → HALF-OPEN · Hystrix pattern" color="purple" size="full" className="max-w-md" />
        <Arrow dir="down" />

        {/* Health Checks */}
        <div className="flex gap-3 flex-wrap justify-center">
          <DiagramBox icon={Activity} label="Health Endpoint"  sublabel="/actuator/health" color="blue"   size="sm" />
          <DiagramBox icon={Bell}     label="Alert Manager"    sublabel="PagerDuty · Email" color="orange" size="sm" />
          <DiagramBox icon={RefreshCw} label="Auto Restart"    sublabel="Crash recovery"   color="green"  size="sm" />
        </div>

        {/* Metrics */}
        <div className="w-full mt-4 grid grid-cols-3 gap-3">
          {[
            { label: 'Target Uptime', value: '99.9%', color: 'text-emerald-400' },
            { label: 'Max Response', value: '< 200ms', color: 'text-cyan-400' },
            { label: 'Failover Time', value: '< 30s', color: 'text-blue-400' },
          ].map((m) => (
            <div key={m.label} className="text-center p-3 bg-slate-900/60 border border-slate-800/40 rounded-lg">
              <div className={`text-lg font-bold font-mono ${m.color}`}>{m.value}</div>
              <div className="text-slate-600 text-[10px]">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </DiagramCard>
  )
}
