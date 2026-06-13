import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Lock, 
  Layers, 
  GitBranch, 
  FileCheck, 
  Activity, 
  AlertTriangle, 
  HelpCircle,
  TrendingUp,
  ArrowUp,
  FileCheck2,
  Users2,
  Sliders,
  ChevronDown,
  Building,
  Mail,
  PhoneCall,
  Download,
  Terminal,
  Clock,
  Sparkles,
  Cloud,
  Database
} from 'lucide-react';

import DashboardDemo from './components/DashboardDemo';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import DesignPartnerModal from './components/DesignPartnerModal';
import ThreatHeatmap from './components/ThreatHeatmap';

// Reference the generated ballroom meetings photo safely
const boardroomImg = '/src/assets/images/boardroom_meeting_1781371964505.jpg';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const capabilities = [
    {
      id: 1,
      icon: Cpu,
      title: 'Agent Registry',
      desc: 'Discover and inventory all autonomous agents operating across enterprise networks and model clusters.',
      details: 'Automatic container scraping registers active model profiles, tracking origin systems, owners, and active credentials.'
    },
    {
      id: 2,
      icon: Shield,
      title: 'Agent Certification',
      desc: 'Certify agent alignment, security posture, and compliance bounds before allowing production execution.',
      details: 'Evaluates system prompt constraints, checking weights and base models against active bank and SEC policy dictionaries.'
    },
    {
      id: 3,
      icon: GitBranch,
      title: 'Governance Graph',
      desc: 'Map multi-hop relationships, tool authorization parameters, database write access, and direct files.',
      details: 'Maintains instant visual trace mappings of what data sources are accessed by which autonomous executors.'
    },
    {
      id: 4,
      icon: AlertTriangle,
      title: 'Case Management',
      desc: 'Triage, investigate, and auto-remediate cognitive anomalies, credential overreaches, and prompt drifts.',
      details: 'Execute programmatic playbooks to freeze agent memory states, revoke API access, and alert CISOs side-by-side.'
    },
    {
      id: 5,
      icon: FileCheck,
      title: 'Evidence Vault',
      desc: 'Cryptographically secure, tamper-proof logs validating transaction traces and compliance baselines.',
      details: 'Appends hardened SHA-256 blocks of prompt history, establishing a clear line of institutional accountability for external audits.'
    },
    {
      id: 6,
      icon: Activity,
      title: 'Trust Score Engine',
      desc: 'Continuous real-time evaluation of LLM prompt integrity, model alignment, and API access security ratios.',
      details: 'Computes fluid safety metrics, proactively flagging prompt-injection attacks and instruction overreach.'
    },
    {
      id: 7,
      icon: Sliders,
      title: 'Executive Exposure Dashboard',
      desc: 'Aggregates cognitive risks, active policy overrides, and compliance index grades for legal stakeholders.',
      details: 'Provides clean, board-level reporting, mapping active agent drift indexes and mitigation states in single views.'
    },
    {
      id: 8,
      icon: Layers,
      title: 'Digital Twin Simulator',
      desc: 'Simulate, stress-test, and validate agent behavior in sandboxed mock runs under aggressive scenario prompts.',
      details: 'Tests model stability, verifying whether safe default stances withstand complex adversarial token chains.'
    }
  ];

  const integrationLogos = [
    { name: 'Microsoft Azure', detail: 'Cloud Infrastructure', icon: Cloud, glow: 'hover:shadow-cyan-400/20' },
    { name: 'Microsoft Entra ID', detail: 'Identity & Access', icon: Shield, glow: 'hover:shadow-emerald-400/20' },
    { name: 'Microsoft Sentinel', detail: 'SIEM Integration', icon: Activity, glow: 'hover:shadow-rose-400/20' },
    { name: 'Microsoft Purview', detail: 'Data Governance', icon: Database, glow: 'hover:shadow-amber-400/20' },
    { name: 'ServiceNow', detail: 'ITSM Workflows', icon: Sliders, glow: 'hover:shadow-sky-400/20' },
    { name: 'Jira Software', detail: 'Project Tracking', icon: Layers, glow: 'hover:shadow-blue-400/20' },
    { name: 'GitHub Enterprise', detail: 'Repository Secure', icon: GitBranch, glow: 'hover:shadow-indigo-400/20' }
  ];

  return (
    <div className="min-h-screen bg-bastion-bg text-bastion-text-bright font-sans selection:bg-bastion-azure selection:text-white">
      
      {/* Dynamic Background Glow Spots */}
      <div className="absolute top-0 left-1/4 w-96 h-96 ambient-glow rounded-full opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] ambient-glow rounded-full opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 ambient-glow rounded-full opacity-35 pointer-events-none" />

      {/* Navigation Header */}
      <nav id="navbar" className="sticky top-0 z-40 bg-bastion-bg/85 backdrop-blur-md border-b border-bastion-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative flex items-center justify-center w-8.5 h-8.5 bg-gradient-to-br from-bastion-azure to-sky-500 rounded-lg shadow-md border border-white/10">
              {/* Sleek geometric emblem */}
              <div className="absolute inset-1 border border-white/5 rounded-md" />
              <Shield className="w-5 h-5 text-white stroke-[2.5]" />
            </div>
            <div>
              <div className="font-display font-extrabold text-slate-900 tracking-wider text-sm flex items-center gap-1.5 uppercase">
                BASTION <span className="text-indigo-600 font-medium tracking-normal text-xs">AUDIT</span>
              </div>
              <p className="text-[8.5px] font-mono tracking-widest text-slate-500 uppercase mt-0.5 leading-none">AI Control Plane</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wide text-bastion-text-muted">
            <span className="hover:text-indigo-600 transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('features')}>
              Features
            </span>
            <span className="hover:text-indigo-600 transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('why-bastion')}>
              Platform <ChevronDown className="w-3 h-3 text-bastion-text-muted/60" />
            </span>
            <span className="hover:text-indigo-600 transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('capabilities')}>
              Capabilities <ChevronDown className="w-3 h-3 text-bastion-text-muted/60" />
            </span>
            <span className="hover:text-indigo-600 transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('interactive-demo')}>
              Interactive Demo
            </span>
            <span className="hover:text-indigo-600 transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('architecture')}>
              Architecture <ChevronDown className="w-3 h-3 text-bastion-text-muted/60" />
            </span>
            <span className="hover:text-indigo-600 transition-colors cursor-pointer text-indigo-600" onClick={() => handleScrollTo('design-partners')}>
              Design Partner Program
            </span>
          </div>

          {/* Header Action Button */}
          <div>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-bastion-azure hover:bg-bastion-azure-light text-white text-xs font-bold px-4 py-2 rounded-lg border border-white/10 shadow-lg cursor-pointer transition-all flex items-center gap-2"
            >
              Request Design Partner Review <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Typography Intro */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-[10.5px] text-indigo-700 font-mono font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Built for Financial Services. Engineered for Trust.
            <ArrowUp className="w-3.5 h-3.5 text-indigo-600 stroke-[3] ml-1 animate-bounce" />
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.08] max-w-2xl">
            AI Control Plane <br className="hidden sm:inline" />
            <span className="text-blue-600 font-black">for Autonomous Agents.</span>
          </h1>

          <p className="text-sm md:text-base text-bastion-text-muted leading-relaxed max-w-xl font-normal">
            Govern, monitor, and secure the execution of autonomous AI agents with enterprise-grade observability, continuous alignment validation, and immediate veto protocols. The single source of truth for autonomous systems.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-bastion-azure hover:bg-indigo-700 text-white text-xs font-bold px-6 py-3.5 rounded-lg border border-white/10 shadow-xl cursor-pointer transition-all text-center flex items-center justify-center gap-2"
            >
              Request a Demo <span className="bg-sky-400/20 text-indigo-900 font-mono text-[9px] px-1.5 py-0.5 rounded ml-1 font-bold animate-pulse">CISO Review</span>
            </button>

            <button
              onClick={() => handleScrollTo('interactive-demo')}
              className="bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold px-6 py-3.5 rounded-lg border border-slate-200 shadow-sm transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Get Started <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>

          {/* Fast Stats summary */}
          <div className="pt-8 grid grid-cols-3 gap-6 max-w-md border-t border-bastion-border/40">
            <div>
              <p className="text-xl md:text-2xl font-black font-display text-slate-900">60%+</p>
              <p className="text-[10px] text-bastion-text-muted font-mono tracking-wider uppercase mt-0.5">Risk Restraint</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-black font-display text-slate-900">10.2k</p>
              <p className="text-[10px] text-bastion-text-muted font-mono tracking-wider uppercase mt-0.5">Audit Traces</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-black font-display text-slate-900">Realtime</p>
              <p className="text-[10px] text-bastion-text-muted font-mono tracking-wider uppercase mt-0.5">CISO Monitoring</p>
            </div>
          </div>
        </div>

        {/* Right Side: High-tech 3D Interactive Abstract Wireframe */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-radial from-bastion-azure/10 to-transparent pointer-events-none rounded-full blur-2xl" />
          
          <div className="relative w-full max-w-[380px] aspect-square rounded-full border border-bastion-border/40 flex items-center justify-center bg-black/10 shadow-2xl overflow-hidden">
            {/* Pulsing circular grid background panels */}
            <div className="absolute inset-4 rounded-full border border-bastion-border/20" />
            <div className="absolute inset-12 rounded-full border border-bastion-border/10" />
            <div className="absolute inset-24 rounded-full border border-bastion-border/5" />

            {/* Glowing Bastion Custom SVG Logo Shield Graph */}
            <svg viewBox="0 0 400 400" className="w-full h-full p-4 relative z-10">
              {/* Connections forming the shield logo */}
              <g stroke="#0078D4" strokeWidth="1.5">
                <line x1="200" y1="80" x2="300" y2="120" strokeWidth="2" className="animate-pulse" />
                <line x1="300" y1="120" x2="300" y2="240" />
                <line x1="300" y1="240" x2="200" y2="320" strokeWidth="2.5" />
                <line x1="200" y1="320" x2="100" y2="240" />
                <line x1="100" y1="240" x2="100" y2="120" />
                <line x1="100" y1="120" x2="200" y2="80" />

                {/* Inner diagonal cross lines resembling the B symbol */}
                <line x1="200" y1="80" x2="200" y2="320" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 200,80 Q 280,140 200,200 Q 280,260 200,320" fill="none" stroke="#0078D4" strokeWidth="3" />
                <line x1="100" y1="180" x2="200" y2="200" />
                <line x1="300" y1="180" x2="200" y2="200" />
              </g>

              {/* Glowing Interactive Nodes */}
              <circle cx="200" cy="80" r="8" fill="#0078D4" stroke="#fff" strokeWidth="1.5" />
              <text x="200" y="60" fontSize="9" fill="#8fa3b7" textAnchor="middle" fontFamily="monospace">CERTIFICATION</text>

              <circle cx="300" cy="120" r="6" fill="#0b1e32" stroke="#0078D4" strokeWidth="1.5" />
              <text x="315" y="123" fontSize="8" fill="#8fa3b7" textAnchor="start" fontFamily="monospace">OP_LIMIT</text>

              <circle cx="300" cy="240" r="7" fill="#0078D4" stroke="#fff" strokeWidth="1.5" />
              <text x="315" y="244" fontSize="8" fill="#8fa3b7" textAnchor="start" fontFamily="monospace">EVIDENCE_LOG</text>

              <circle cx="200" cy="320" r="8" fill="#0078D4" stroke="#fff" strokeWidth="1.5" />
              <text x="200" y="340" fontSize="9" fill="#8fa3b7" textAnchor="middle" fontFamily="monospace">GUARDRAIL_VETO</text>

              <circle cx="100" cy="240" r="6" fill="#0b1e32" stroke="#0078D4" strokeWidth="1.5" />
              <text x="85" y="244" fontSize="8" fill="#8fa3b7" textAnchor="end" fontFamily="monospace">DB_ROW_LIMIT</text>

              <circle cx="100" cy="120" r="7" fill="#0078D4" stroke="#fff" strokeWidth="1.5" />
              <text x="85" y="123" fontSize="8" fill="#8fa3b7" textAnchor="end" fontFamily="monospace">ENTRA_CRED</text>

              {/* Core pulse */}
              <circle cx="200" cy="200" r="16" fill="#0078D4" className="animate-ping opacity-25" />
              <circle cx="200" cy="200" r="12" fill="#0078D4" stroke="#fff" strokeWidth="2" />
              <text x="200" y="228" fontSize="10" fill="#fff" fontWeight="bold" textAnchor="middle" fontFamily="monospace">BASTION_CORE</text>
            </svg>

            {/* Glowing Corner Accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-bastion-azure" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-bastion-azure" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-bastion-azure" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-bastion-azure" />
          </div>
        </div>

      </header>

      {/* Integration Logos Panel (As styled in mockup bottom-left of hero) */}
      <section className="bg-slate-50/75 border-y border-slate-250 py-10 px-6 relative overflow-hidden">
        {/* Subtle executive tech grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-8 relative z-10">
          <div className="text-left lg:w-1/4 flex flex-col justify-center space-y-2.5">
            <div className="inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-150/70 text-[9.5px] font-mono font-bold text-indigo-700 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              SECURE CONNECTORS
            </div>
            <h3 className="text-sm font-mono font-extrabold text-slate-800 tracking-wider uppercase">Seamless Native Intercepts</h3>
            <p className="text-[11.5px] text-slate-550 font-normal leading-relaxed">
              Zero-latency native connectors linking securely to leading enterprise directory structures and cloud gateway environments.
            </p>
          </div>
          
          {/* Logo Grid/Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-4 lg:w-3/4 items-stretch">
            {integrationLogos.map((logo, idx) => {
              const Icon = logo.icon;
              return (
                <div 
                  key={idx} 
                  className={`glowing-card rounded-xl p-4 flex flex-col justify-between h-32 relative overflow-visible group cursor-pointer ${logo.glow}`}
                  title={`${logo.name} Integrated Context Provider`}
                >
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between gap-1.5">
                      <div className="w-7 h-7 rounded-lg bg-indigo-50/80 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[7.5px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-100 px-1 py-0.5 rounded font-extrabold tracking-wider uppercase leading-none">
                        ACTIVE
                      </span>
                    </div>

                    <div className="space-y-0.5 mt-auto">
                      <span className="text-slate-900 font-extrabold text-[11px] block tracking-tight truncate leading-tight group-hover:text-indigo-600 transition-colors">
                        {logo.name}
                      </span>
                      <span className="text-[9px] text-slate-400 font-mono block leading-tight">
                        {logo.detail}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: Features Showcase */}
      <section id="features" className="bg-white border-b border-slate-200 py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-[#2563eb] font-bold uppercase block">Core Operational Pillars</span>
            <h2 className="font-display font-black text-2.5xl sm:text-4xl text-slate-900 tracking-tight leading-snug">
              Enterprise Feature Suite
            </h2>
            <p className="text-sm text-bastion-text-muted max-w-2xl mx-auto font-normal">
              A comprehensive system of record engineered to deliver ultimate safety, orchestration control, and compliance confidence across your entire agentic workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            
            {/* Feature 1: Autonomous Agent Orchestration */}
            <div className="glowing-card rounded-xl p-6 relative overflow-visible group">
              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Cpu className="w-5.5 h-5.5 stroke-[2]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors">Autonomous Agent Orchestration</h3>
                    <p className="text-xs text-slate-650 leading-relaxed font-normal">
                      Binds agentic networks directly to strict, mission-based validation paths. Ensures recursion limits and operational scopes remain tightly constrained.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-indigo-600 tracking-wider">MISSION CONTROL</span>
                  <span className="text-[10px] text-slate-400 font-normal">Prevents loops & drift</span>
                </div>
              </div>
            </div>

            {/* Feature 2: Real-time Monitoring & Analytics */}
            <div className="glowing-card rounded-xl p-6 relative overflow-visible group">
              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Activity className="w-5.5 h-5.5 stroke-[2]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors">Real-time Monitoring & Analytics</h3>
                    <p className="text-xs text-slate-650 leading-relaxed font-normal">
                      Active stream capturing thought vectors, context window states, tool-calling chains, and safety scores with zero latency overhead.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-indigo-600 tracking-wider">LIVE TELEMETRY</span>
                  <span className="text-[10px] text-slate-400 font-normal">Instant vector audit</span>
                </div>
              </div>
            </div>

            {/* Feature 3: Automated Compliance & Security */}
            <div className="glowing-card rounded-xl p-6 relative overflow-visible group">
              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Lock className="w-5.5 h-5.5 stroke-[2]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors">Automated Compliance & Security</h3>
                    <p className="text-xs text-slate-650 leading-relaxed font-normal">
                      Auto-validates decision-logs against regulatory rules. Enforces custom compliance thresholds with inline agent veto filters.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-indigo-600 tracking-wider">ZERO TRUST AUDIT</span>
                  <span className="text-[10px] text-slate-400 font-normal">Veto rogue actions</span>
                </div>
              </div>
            </div>

            {/* Feature 4: Scalable Infrastructure Management */}
            <div className="glowing-card rounded-xl p-6 relative overflow-visible group">
              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Layers className="w-5.5 h-5.5 stroke-[2]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors">Scalable Infrastructure Management</h3>
                    <p className="text-xs text-slate-650 leading-relaxed font-normal">
                      Manages distributed model limits, failover nodes, credential boundaries, and isolated transaction zones across hybrid cluster networks.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-indigo-600 tracking-wider">RUNTIME CONTROL</span>
                  <span className="text-[10px] text-slate-400 font-normal">Enterprise isolation</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: Why Existing Security Platforms Are Not Enough */}
      <section id="why-bastion" className="max-w-7xl mx-auto px-6 py-20 md:py-28 space-y-16">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-[#4f46e5] font-bold uppercase block">Architectural Gap Analysis</span>
          <h2 className="font-display font-black text-2.5xl sm:text-4xl text-slate-900 tracking-tight leading-snug">
            Why Existing Security Platforms Are Not Enough
          </h2>
          <p className="text-sm text-bastion-text-muted max-w-2xl mx-auto font-normal">
            Firewalls, IAM rules, SIEM pipelines, and database permissions secure physical server architectures. Bastion controls independent, autonomous cognitive agents acting <strong>across</strong> that architecture.
          </p>
        </div>

        {/* Message and comparative visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Traditional Perimeter Box */}
          <div className="glowing-card rounded-xl p-6 md:p-8 relative overflow-visible group">
            <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold tracking-wider">FOUNDATIONAL INTEGRITY LAYER</span>
                <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors">Traditional Enterprise Security</h3>
                <p className="text-xs text-bastion-text-muted leading-relaxed font-normal">
                  Configured to monitor networks, block unauthorized IP ports, inspect static binaries, and secure employee logins. They understand machine packages, but are completely blind to agent intent.
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  { label: 'Active Directory / Entra', status: 'Verifies employee logins but cannot audit whether an LLM is drifting into fiduciary liability.' },
                  { label: 'SIEM / Microsoft Sentinel', status: 'Monitors infrastructure alerts but cannot parse unstructured adversarial prompt injection payloads.' },
                  { label: 'Cloud Firewalls', status: 'Blocks port traffic but cannot detect continuous overprivileged database reads by certified agents.' }
                ].map((item, id) => (
                  <div key={id} className="p-3 bg-slate-50 rounded border border-slate-200 text-xs hover:border-slate-350 hover:bg-slate-100/55 transition-all">
                    <span className="font-mono font-semibold text-slate-800 block">{item.label}</span>
                    <p className="text-[#64748b] text-[11px] mt-1 font-normal leading-snug">{item.status}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-400 italic font-mono pt-3 border-t border-slate-200 text-[11px]">
                &gt; Conclusion: Secures underlying infrastructure. Blind to cognitive execution logic.
              </p>
            </div>
          </div>

          {/* Bastion Auditing Layer */}
          <div className="glowing-card rounded-xl p-6 md:p-8 relative overflow-visible shadow-sm group">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-50/20 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-indigo-600 uppercase font-bold tracking-widest">Cognitive Control Ring</span>
                  <span className="text-[9px] bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 px-2 py-0.5 rounded font-mono uppercase font-bold">Bastion Domain</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors">Bastion Audit Protection</h3>
                <p className="text-xs text-bastion-text-muted leading-relaxed font-normal">
                  Inspects real-time instructions, validates agent actions against certified boundaries, and prevents data breaches before commands hitting legacy database gateways can execute.
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  { label: 'Prompt Injection Defense', status: 'Intercepts adversarial token overrides and malicious system prompts in milliseconds.' },
                  { label: 'Cognitive Access Control', status: 'Binds agent identities directly to Entra ID, ensuring model executions match explicit user authorizations.' },
                  { label: 'Instant API Veto Gateways', status: 'Automatically intercepts and isolates rogue database rows mutations or unapproved transactions.' }
                ].map((item, id) => (
                  <div key={id} className="p-3 bg-indigo-50/50 rounded border border-indigo-100 text-xs hover:bg-indigo-50 hover:border-indigo-200 transition-all">
                    <span className="font-mono font-bold text-indigo-700 block">{item.label}</span>
                    <p className="text-slate-600 text-[11px] mt-1 font-normal leading-snug">{item.status}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-indigo-600 italic font-mono pt-3 border-t border-indigo-200 text-[11px]">
                &gt; Conclusion: Bastion governs independent agents operating across secure infrastructures.
              </p>
            </div>
          </div>

        </div>

        {/* Display-Grade stripe/palantir style core message banner */}
        <div className="p-8 md:p-12 bg-gradient-to-r from-slate-100 via-indigo-50/20 to-slate-100 rounded-xl border border-slate-200 text-center space-y-4">
          <p className="text-[10.5px] font-mono tracking-widest text-indigo-600 uppercase font-bold">Unified Executive Verdict</p>
          <blockquote className="font-display font-extrabold text-slate-900 text-lg sm:text-2xl tracking-normal max-w-4xl mx-auto leading-relaxed">
            &ldquo;Legacy systems secure databases, ports, and servers. Bastion certifies, audits, and controls autonomous agents operating across that secure infrastructure.&rdquo;
          </blockquote>
          <div className="pt-2 flex justify-center items-center gap-1 text-slate-500 font-mono text-[10px]">
            <span>Calibrated Baseline</span>
            <div className="w-1 h-1 rounded-full bg-[#0078D4]" />
            <span>Fiduciary AI Guardrails</span>
          </div>
        </div>

      </section>

      {/* SECTION 3: Platform Capabilities (Grid of 8) */}
      <section id="capabilities" className="max-w-7xl mx-auto px-6 py-20 border-t border-bastion-border space-y-16">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-indigo-600 font-bold uppercase block">Technical Capabilities</span>
          <h2 className="font-display font-black text-2.5xl sm:text-4xl text-slate-900 tracking-tight leading-snug">
            Platform Capabilities
          </h2>
          <p className="text-sm text-bastion-text-muted font-normal max-w-2xl mx-auto">
            Comprehensive compliance, trust, and risk-management tooling to validate complex model behavior, preventing systemic asset leakage and operational liabilities.
          </p>
        </div>

        {/* 8 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isHovered = hoveredCapability === idx;
            return (
              <div
                key={cap.id}
                onMouseEnter={() => setHoveredCapability(idx)}
                onMouseLeave={() => setHoveredCapability(null)}
                className="glowing-card rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-visible group cursor-pointer"
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 font-display tracking-wider uppercase group-hover:text-indigo-600 transition-colors">{cap.title}</h4>
                      <p className="text-[11.5px] text-bastion-text-muted mt-2 leading-relaxed font-normal">{cap.desc}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[10px] font-mono text-[#8fa3b7] leading-tight">
                    {cap.details}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Threat Heatmap Visualization Tool for C-Suite appeal */}
        <div className="pt-10 border-t border-slate-200">
          <ThreatHeatmap />
        </div>

      </section>

      {/* Embedded Live Interactive Demo Section (Command Center) */}
      <section id="interactive-demo" className="bg-slate-100 border-y border-slate-200 py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-[#4f46e5] font-bold block uppercase">Live Operational Sandbox</span>
              <h2 className="font-display font-black text-2xl sm:text-3.5xl text-slate-900 tracking-tight">
                Interactive Control Plane Demonstration
              </h2>
              <p className="text-xs text-bastion-text-muted max-w-2xl font-normal mt-0.5">
                Explore the actual user experience of our security console. Click through different tracking terminals to trigger simulated overprivilege vectors, inspect validation audits, or remediate active threats.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-bastion-azure hover:bg-bastion-azure-light text-white text-xs font-bold px-4 py-2.5 rounded-lg border border-white/5 transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                Schedule Private Demo Tour <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Render the core responsive dashboard component */}
          <DashboardDemo />

        </div>
      </section>

      {/* SECTION 4: Technical Architecture Pipeline Flow */}
      <section id="architecture" className="max-w-7xl mx-auto px-6 py-20 md:py-28 space-y-12">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-[#4f46e5] font-bold uppercase block">Technical Framework pipeline</span>
          <h2 className="font-display font-black text-2.5xl sm:text-4xl text-slate-900 tracking-tight leading-snug">
            How Bastion Works
          </h2>
          <p className="text-sm text-bastion-text-muted max-w-xl mx-auto font-normal">
            Continuous read-only normalization mapping signals directly into safe structural control points.
          </p>
        </div>

        {/* Embedded SVG Interactive Architecture Diagram */}
        <ArchitectureDiagram />

      </section>

      {/* SECTION 5: Design Partner Program */}
      <section id="design-partners" className="bg-slate-50 border-t border-slate-200 py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] ambient-glow rounded-full opacity-35 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Program description and structured bullets */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] text-amber-600 font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" /> Design Partner Program
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4.5xl text-slate-900 tracking-tight leading-tight">
              Seeking 4 Financial Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700">Design Partners</span>
            </h2>

            <p className="text-sm text-bastion-text-muted leading-relaxed font-normal max-w-xl">
              We coordinate directly with leading hedge funds, credit unions, multi-family offices, and security leaders to refine compliance and cognitive risk boundaries for active AI agents.
            </p>

            {/* Bullets stack */}
            <div className="space-y-3 pt-2">
              {[
                { title: 'Synthetic data only', desc: 'Runs zero risk during baseline analysis. No custom private databases accessed.' },
                { title: 'No production access required', desc: 'Operates in sandboxed, isolated simulated environments to protect data privacy.' },
                { title: 'No customer data required', desc: 'Maintains perfect compliance with GDPR, HIPAA, and SEC regulations.' },
                { title: 'White-label architecture review', desc: 'Direct feedback and analysis from lead system software engineers during build.' },
                { title: 'Direct influence on product roadmap', desc: 'Customize core compliance rules and security formats to fit your exact legal parameters.' }
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1.5 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-full mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4f46e5]" />
                  </div>
                  <div>
                    <strong className="text-xs text-slate-800 block font-display uppercase">{bullet.title}</strong>
                    <p className="text-[11.5px] text-bastion-text-muted mt-0.5 leading-snug">{bullet.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-bastion-azure hover:bg-bastion-azure-light text-white text-xs font-bold px-6 py-3.5 rounded-lg border border-white/10 shadow-xl cursor-pointer transition-colors inline-flex items-center gap-2"
              >
                Request 15-Minute Review <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Side: Professional Boardroom Photo (Desaturated corporate style) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-500/10 to-transparent opacity-80 z-10 pointer-events-none" />
            
            <div className="relative rounded-xl border border-slate-200 shadow-2xl overflow-hidden group">
              {/* Premium desaturated monochrome overlay with dark tint */}
              <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply group-hover:bg-slate-900/5 transition-all z-10 duration-500" />
              
              <img 
                src={boardroomImg} 
                alt="Advisory Boardroom and Financial Security Meeting" 
                className="w-full h-auto object-cover opacity-85 group-hover:scale-[1.03] transition-all duration-700 max-h-[380px]"
                id="design-partner-img"
              />

              {/* Secure Stamp Graphic */}
              <div className="absolute bottom-4 left-4 z-20 p-2.5 bg-slate-900/90 border border-indigo-400/30 backdrop-blur-md rounded font-mono text-[9.5px] space-y-0.5 text-slate-300">
                <div className="flex items-center gap-1 text-white font-bold text-[10px]">
                  <Building className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Bastion Advisory Group</span>
                </div>
                <div className="text-[9px]">Scope: Financial Institutions</div>
                <div className="text-[9px] text-indigo-400 font-semibold">STATUS: OPEN FOR DESIGN PARTNERS</div>
              </div>
            </div>

            {/* Glowing Corner Accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-bastion-azure z-20" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-bastion-azure z-20" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-bastion-azure z-20" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-bastion-azure z-20" />
          </div>

        </div>
      </section>

      {/* SECTION 6: Executive Outcomes Metrics cards */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 space-y-16">
        
        {/* Headings */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[10px] font-mono tracking-widest text-indigo-650 font-bold uppercase block">Measurable Performance</span>
          <h2 className="font-display font-black text-2.5xl sm:text-4xl text-slate-900 tracking-tight leading-snug">
            Executive Outcomes
          </h2>
          <p className="text-sm text-bastion-text-muted font-normal">
            Quantifiable compliance, risk containment, and cost-reduction impacts audited across active enterprise deployments.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch font-sans">
          
          <div className="glowing-card rounded-xl p-6 relative overflow-visible group flex flex-col justify-between cursor-pointer shadow-xs">
            <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-indigo-650 tracking-widest font-extrabold uppercase block">REDUCED RISK</span>
                <p className="text-3.5xl md:text-4xl font-black font-display text-slate-900 group-hover:text-indigo-600 group-hover:scale-105 origin-left transition-all duration-300">60%+</p>
              </div>
              <p className="text-[11.5px] text-slate-605 leading-relaxed font-normal">
                Average reduction in cognitive vulnerabilities, policy boundaries breaches, and credential abuse incidents.
              </p>
            </div>
          </div>

          <div className="glowing-card rounded-xl p-6 relative overflow-visible group flex flex-col justify-between cursor-pointer shadow-xs">
            <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-indigo-650 tracking-widest font-extrabold uppercase block">AUDIT READINESS</span>
                <p className="text-3.5xl md:text-4xl font-black font-display text-slate-900 group-hover:text-indigo-600 group-hover:scale-105 origin-left transition-all duration-300">75%+</p>
              </div>
              <p className="text-[11.5px] text-slate-605 leading-relaxed font-normal">
                Faster generation of validated regulatory compliance evidence and reporting outputs for board stakeholders.
              </p>
            </div>
          </div>

          <div className="glowing-card rounded-xl p-6 relative overflow-visible group flex flex-col justify-between cursor-pointer shadow-xs">
            <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-indigo-650 tracking-widest font-extrabold uppercase block">EFFORT REDUCTION</span>
                <p className="text-3.5xl md:text-4xl font-black font-display text-slate-900 group-hover:text-indigo-600 group-hover:scale-105 origin-left transition-all duration-300">80%+</p>
              </div>
              <p className="text-[11.5px] text-slate-605 leading-relaxed font-normal">
                Decrease in manual compliance overhead, log tracing, and executive reports preparation time.
              </p>
            </div>
          </div>

          <div className="glowing-card rounded-xl p-6 relative overflow-visible group flex flex-col justify-between cursor-pointer shadow-xs">
            <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-indigo-600 tracking-widest font-extrabold uppercase block font-sans">CISO VISIBILITY</span>
                <p className="text-3.5xl md:text-4xl font-black font-display text-slate-900 group-hover:text-indigo-600 group-hover:scale-105 origin-left transition-all duration-300">100%</p>
              </div>
              <p className="text-[11.5px] text-slate-605 leading-relaxed font-normal">
                Continuous dashboard visibility and real-time alerts stream regarding model behavior across all channels.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* FAQ Accordion Section for trust establishment */}
      <section className="bg-slate-150/40 border-t border-slate-200 py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-indigo-600 font-bold block uppercase">Strategic FAQ</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Enterprise Governance FAQ
            </h2>
            <p className="text-xs text-bastion-text-muted max-w-lg mx-auto font-normal">
              Answering technical security questions from CISOs and compliance leaders.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How does Bastion connect without requiring full database write permissions?',
                a: 'Bastion operates using secure, granular read-only API connectors linking directly to directory systems and LLM completion gateways. At no point does Bastion intercept or mutate business data — it strictly inspects token intents and cognitive instruction chains dynamically.'
              },
              {
                q: 'Does this software store our private prompts or corporate customer profiles?',
                a: 'No. Bastion structures all logs on synthetic or hashed token hashes. Raw prompt data and customer identifiers are ignored, keeping your organization 100% compliant with SEC, GDPR, and global financial privacy frameworks.'
              },
              {
                q: 'How does the auto-remediation engine integrate with Microsoft Entra ID?',
                a: 'Upon a policy violation (e.g. attempt to access unauthorized ledger databases), Bastion automatically signals Entra ID via webhook callbacks, instantly revoking the target agent\'s access token. This isolates the agent across your ecosystem in less than 200 milliseconds.'
              }
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="border border-slate-200 bg-white rounded-lg overflow-hidden shadow-xs">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-display font-bold text-xs sm:text-sm text-slate-900 flex justify-between items-center bg-white hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#64748b] transition-transform ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-slate-100"
                      >
                        <p className="p-4 text-xs text-bastion-text-muted leading-relaxed font-normal">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-bastion-border bg-[#05111d] py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Left Brand Summary Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-bastion-azure rounded-lg flex items-center justify-center border border-white/10 shadow-md">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div className="font-display font-extrabold text-[#ffffff] text-xs tracking-wider uppercase">
                  BASTION <span className="text-[#0078D4] font-medium">AUDIT</span>
                </div>
              </div>
              <p className="text-xs text-bastion-text-muted leading-relaxed font-normal max-w-sm">
                AI Control Plane for Autonomous Agents. Calibrating real-time safety indices and cryptographic audit proofs for financial services and institutional ecosystems.
              </p>
              
              <div className="flex items-center gap-4 text-[10px] font-mono text-[#8fa3b7]">
                <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-bastion-azure" /> SOC2 COMPLIANT</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-bastion-azure" /> ISO-27001</span>
              </div>
            </div>

            {/* Col 2: Enterprise AI Resources */}
            <div className="space-y-3 text-xs">
              <h5 className="font-bold text-white font-mono text-[10px] tracking-widest uppercase">AI Governance Resources</h5>
              <ul className="space-y-2 text-[11.5px] text-bastion-text-muted font-normal">
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">Compliance Whitepaper <ArrowRight className="w-2.5 h-2.5 opacity-0 hover:opacity-100 transition-opacity" /></li>
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">Fiduciary AI Guidelines <ArrowRight className="w-2.5 h-2.5 opacity-0 hover:opacity-100 transition-opacity" /></li>
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">Continuous Integration Standards <ArrowRight className="w-2.5 h-2.5 opacity-0 hover:opacity-100 transition-opacity" /></li>
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">DORA Risk Checklist <ArrowRight className="w-2.5 h-2.5 opacity-0 hover:opacity-100 transition-opacity" /></li>
              </ul>
            </div>

            {/* Col 3: Architecture Overview */}
            <div className="space-y-3 text-xs">
              <h5 className="font-bold text-white font-mono text-[10px] tracking-widest uppercase">Architecture Overview</h5>
              <ul className="space-y-2 text-[11.5px] text-bastion-text-muted font-normal">
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('architecture')}>API Connectors</li>
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('architecture')}>Cryptographic Ledger</li>
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('interactive-demo')}>Sentinel Integration sync</li>
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">Entra Identity Schema</li>
              </ul>
            </div>

            {/* Col 4: Advisory & Contact */}
            <div className="space-y-3 text-xs">
              <h5 className="font-bold text-white font-mono text-[10px] tracking-widest uppercase">Contact Advisory Desk</h5>
              <p className="text-[11px] text-bastion-text-muted leading-normal">Our dedicated advisory desk supports financial institutions seeking security audits.</p>
              
              <div className="space-y-2 text-[11px] font-mono text-white">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-bastion-azure" />
                  <span>advisory@bastionaudit.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-bastion-azure" />
                  <span>+1 (800) BSTN-AUDT</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright stamp */}
          <div className="border-t border-bastion-border/60 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-bastion-text-muted font-normal">
            <div>
              <p>© 2026 Bastion Audit. All rights reserved. Engineered for financial institutions and global enterprise infrastructures.</p>
              <p className="text-[10px] text-slate-500 mt-1 font-mono">Simulators configured on current time: 2026-06-13. Built in Cloud Native Core.</p>
            </div>
            
            <div className="flex gap-4 font-mono text-[10px] text-sky-400">
              <span className="hover:underline cursor-pointer">Security Ledger</span>
              <span>•</span>
              <span className="hover:underline cursor-pointer">Privacy Guidelines</span>
              <span>•</span>
              <span className="hover:underline cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Control Room Top</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Embedded Callback Form Modal */}
      <DesignPartnerModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />

      {/* Floating Scroll up indicator - A brightly colored up arrow! */}
      <AnimatePresence>
        {showScrollUp && (
          <motion.button
            key="scroll-up-btn"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white shadow-2xl shadow-pink-500/30 border border-white/20 flex items-center justify-center cursor-pointer hover:shadow-pink-500/50 transition-shadow"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 stroke-[3.5] animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}

