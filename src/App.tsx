import { useState } from 'react';
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
  Sparkles
} from 'lucide-react';

import DashboardDemo from './components/DashboardDemo';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import DesignPartnerModal from './components/DesignPartnerModal';

// Reference the generated ballroom meetings photo safely
const boardroomImg = '/src/assets/images/boardroom_meeting_1781371964505.jpg';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);

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
    { name: 'Microsoft Azure', detail: 'Cloud Infrastructure' },
    { name: 'Microsoft Entra ID', detail: 'Identity & Access' },
    { name: 'Microsoft Sentinel', detail: 'SIEM Integration' },
    { name: 'Microsoft Purview', detail: 'Data Governance' },
    { name: 'ServiceNow', detail: 'ITSM Workflows' },
    { name: 'Jira Software', detail: 'Project Tracking' },
    { name: 'GitHub Enterprise', detail: 'Repository Secure' }
  ];

  return (
    <div className="min-h-screen bg-bastion-bg text-white font-sans selection:bg-bastion-azure selection:text-white">
      
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
              <div className="font-display font-extrabold text-[#ffffff] tracking-wider text-sm flex items-center gap-1.5 uppercase">
                BASTION <span className="text-[#0078D4] font-medium tracking-normal text-xs">AUDIT</span>
              </div>
              <p className="text-[8.5px] font-mono tracking-widest text-[#8fa3b7]/80 uppercase mt-0.5 leading-none">AI Control Plane</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wide text-bastion-text-muted">
            <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('why-bastion')}>
              Platform <ChevronDown className="w-3 h-3 text-bastion-text-muted/60" />
            </span>
            <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('capabilities')}>
              Capabilities <ChevronDown className="w-3 h-3 text-bastion-text-muted/60" />
            </span>
            <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('interactive-demo')}>
              Interactive Demo
            </span>
            <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('architecture')}>
              Architecture <ChevronDown className="w-3 h-3 text-bastion-text-muted/60" />
            </span>
            <span className="hover:text-white transition-colors cursor-pointer text-[#0078D4]" onClick={() => handleScrollTo('design-partners')}>
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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-bastion-azure/10 border border-bastion-azure/20 rounded-full text-[10.5px] text-bastion-azure-light font-mono font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Built for Financial Services. Engineered for Trust.
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-5.5xl text-white tracking-tight leading-[1.08] max-w-2xl">
            Control <span className="text-transparent bg-clip-text bg-gradient-to-r from-bastion-azure-light to-[#0078D4]">Autonomous AI</span> Before It Creates Risk
          </h1>

          <p className="text-sm md:text-base text-bastion-text-muted leading-relaxed max-w-xl font-normal">
            Bastion Audit is the AI Control Plane for Autonomous Agents. Monitor ownership, certification, trust, evidence, access, and compliance across enterprise AI ecosystems.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-bastion-azure hover:bg-bastion-azure-light text-white text-xs font-bold px-6 py-3.5 rounded-lg border border-white/10 shadow-xl cursor-pointer transition-all text-center flex items-center justify-center gap-2"
            >
              Request Design Partner Review <span className="bg-sky-400/20 text-sky-300 font-mono text-[9px] px-1.5 py-0.5 rounded ml-1">CISO Advisory</span>
            </button>

            <button
              onClick={() => handleScrollTo('architecture')}
              className="bg-bastion-bg-secondary hover:bg-bastion-bg-tertiary text-bastion-text-bright text-xs font-bold px-6 py-3.5 rounded-lg border border-bastion-border hover:border-bastion-border-hover transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Explore Platform Architecture <ArrowRight className="w-3.5 h-3.5 text-bastion-text-muted" />
            </button>
          </div>

          {/* Fast Stats summary */}
          <div className="pt-8 grid grid-cols-3 gap-6 max-w-md border-t border-bastion-border/40">
            <div>
              <p className="text-xl md:text-2xl font-black font-display text-white">60%+</p>
              <p className="text-[10px] text-bastion-text-muted font-mono tracking-wider uppercase mt-0.5">Risk Restraint</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-black font-display text-white">10.2k</p>
              <p className="text-[10px] text-bastion-text-muted font-mono tracking-wider uppercase mt-0.5">Audit Traces</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-black font-display text-white">Realtime</p>
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
      <section className="bg-[#0b1e32]/30 border-y border-bastion-border py-8 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-left md:max-w-xs">
            <span className="text-[10px] font-mono tracking-wider text-bastion-azure font-bold block uppercase">Seamless Native Intercepts</span>
            <p className="text-xs text-bastion-text-muted mt-1 font-normal">Connects out-of-the-box with leading enterprise environments and LLM gateways.</p>
          </div>
          
          {/* Logo Train */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:flex-1 md:justify-end text-slate-400 font-display font-medium text-xs">
            {integrationLogos.map((logo, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-1.5 opacity-65 hover:opacity-100 transition-all cursor-crosshair group"
                title={`${logo.name} Integrated Context Provider`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
                <div>
                  <span className="text-white font-semibold text-[11.5px] block">{logo.name}</span>
                  <span className="text-[9px] text-[#8fa3b7] font-mono block opacity-60 leading-none group-hover:text-bastion-azure-light transition-colors">{logo.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Existing Security Platforms Are Not Enough */}
      <section id="why-bastion" className="max-w-7xl mx-auto px-6 py-20 md:py-28 space-y-16">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-[#0078D4] font-bold uppercase block">Architectural Gap Analysis</span>
          <h2 className="font-display font-black text-2.5xl sm:text-4xl text-white tracking-tight leading-snug">
            Why Existing Security Platforms Are Not Enough
          </h2>
          <p className="text-sm text-bastion-text-muted max-w-2xl mx-auto font-normal">
            Firewalls, IAM rules, SIEM pipelines, and database permissions secure physical server architectures. Bastion controls independent, autonomous cognitive agents acting <strong>across</strong> that architecture.
          </p>
        </div>

        {/* Message and comparative visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Traditional Perimeter Box */}
          <div className="bg-bastion-bg-secondary/25 border border-bastion-border rounded-xl p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-slate-500 uppercase block font-semibold">FOUNDATIONAL INTEGRITY LAYER</span>
              <h3 className="text-lg font-bold text-white font-display">Traditional Enterprise Security</h3>
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
                <div key={id} className="p-3 bg-bastion-bg-secondary/40 rounded border border-bastion-border/40 text-xs">
                  <span className="font-mono font-semibold text-slate-300 block">{item.label}</span>
                  <p className="text-[#8fa3b7] text-[11px] mt-1 font-light leading-snug">{item.status}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-400 italic font-mono pt-3 border-t border-bastion-border/20 text-[11px]">
              &gt; Conclusion: Secures underlying infrastructure. Blind to cognitive execution logic.
            </p>
          </div>

          {/* Bastion Auditing Layer */}
          <div className="bg-bastion-bg-secondary border border-bastion-azure rounded-xl p-6 md:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-bastion-azure/10 to-transparent pointer-events-none" />
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-bastion-azure uppercase font-bold tracking-widest">Cognitive Control Ring</span>
                <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.2 rounded font-mono uppercase font-bold">Bastion Domain</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display">Bastion Audit Protection</h3>
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
                <div key={id} className="p-3 bg-bastion-bg/60 rounded border border-bastion-azure/30 text-xs">
                  <span className="font-mono font-semibold text-bastion-azure-light block">{item.label}</span>
                  <p className="text-[#8fa3b7] text-[11px] mt-1 font-light leading-snug">{item.status}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-bastion-azure-light italic font-mono pt-3 border-t border-bastion-border/40 text-[11px]">
              &gt; Conclusion: Bastion governs independent agents operating across secure infrastructures.
            </p>
          </div>

        </div>

        {/* Display-Grade stripe/palantir style core message banner */}
        <div className="p-8 md:p-12 bg-gradient-to-r from-bastion-bg-secondary via-[#0b1d30] to-bastion-bg-secondary rounded-xl border border-bastion-border text-center space-y-4">
          <p className="text-[10.5px] font-mono tracking-widest text-[#0078D4] uppercase font-bold">Unified Executive Verdict</p>
          <blockquote className="font-display font-extrabold text-[#fff] text-lg sm:text-2xl tracking-normal max-w-4xl mx-auto leading-relaxed">
            &ldquo;Legacy systems secure databases, ports, and servers. Bastion certifies, audits, and controls autonomous agents operating across that secure infrastructure.&rdquo;
          </blockquote>
          <div className="pt-2 flex justify-center items-center gap-1 text-slate-400 font-mono text-[10px]">
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
          <span className="text-[10px] font-mono tracking-widest text-bastion-azure font-bold uppercase block">Technical Capabilities</span>
          <h2 className="font-display font-black text-2.5xl sm:text-4xl text-white tracking-tight leading-snug">
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
                className={`p-5 rounded-lg border transition-all flex flex-col justify-between h-72 ${
                  isHovered 
                    ? 'bg-bastion-bg-secondary border-bastion-azure scale-[1.02] shadow-xl' 
                    : 'bg-bastion-bg-secondary/40 border-bastion-border/60 hover:border-bastion-border/90'
                }`}
              >
                <div className="space-y-4">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                    isHovered ? 'bg-bastion-azure text-white' : 'bg-bastion-bg-tertiary text-bastion-azure'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-display uppercase">{cap.title}</h4>
                    <p className="text-[11.5px] text-bastion-text-muted mt-2 leading-relaxed font-normal">{cap.desc}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-bastion-border/40 text-[10px] font-mono text-[#8fa3b7]/60 leading-tight">
                  {cap.details}
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* Embedded Live Interactive Demo Section (Command Center) */}
      <section id="interactive-demo" className="bg-[#05111d] border-y border-bastion-border py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-bastion-border pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-[#0078D4] font-bold block uppercase">Live Operational Sandbox</span>
              <h2 className="font-display font-black text-2xl sm:text-3.5xl text-white tracking-tight">
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
          <span className="text-[10px] font-mono tracking-widest text-[#0078D4] font-bold uppercase block">Technical Framework pipeline</span>
          <h2 className="font-display font-black text-2.5xl sm:text-4xl text-white tracking-tight leading-snug">
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
      <section id="design-partners" className="bg-[#05111d] border-t border-bastion-border py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] ambient-glow rounded-full opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Program description and structured bullets */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] text-amber-500 font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" /> Design Partner Program
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4.5xl text-white tracking-tight leading-tight">
              Seeking 4 Financial Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-bastion-azure-light to-[#0078D4]">Design Partners</span>
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
                  <div className="p-1.5 bg-bastion-azure/10 text-bastion-azure border border-bastion-azure/10 rounded-full mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0078D4]" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block font-display uppercase">{bullet.title}</strong>
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
            <div className="absolute inset-0 bg-gradient-to-t from-bastion-bg to-transparent opacity-80 z-10 pointer-events-none" />
            
            <div className="relative rounded-xl border border-bastion-border shadow-2xl overflow-hidden group">
              {/* Premium desaturated monochrome overlay with dark tint */}
              <div className="absolute inset-0 bg-[#071524]/60 mix-blend-multiply group-hover:bg-[#071524]/40 transition-all z-10 duration-500" />
              
              <img 
                src={boardroomImg} 
                alt="Advisory Boardroom and Financial Security Meeting" 
                className="w-full h-auto object-cover grayscale opacity-75 group-hover:scale-[1.03] transition-all duration-700 max-h-[380px]"
                id="design-partner-img"
              />

              {/* Secure Stamp Graphic */}
              <div className="absolute bottom-4 left-4 z-20 p-2 bg-black/60 border border-bastion-azure/40 backdrop-blur-md rounded font-mono text-[9.5px] space-y-0.5 text-[#8fa3b7]">
                <div className="flex items-center gap-1 text-white font-bold text-[10px]">
                  <Building className="w-3.5 h-3.5 text-bastion-azure-light" />
                  <span>Bastion Advisory Group</span>
                </div>
                <div className="text-[9px]">Scope: Financial Institutions</div>
                <div className="text-[9px] text-[#0078D4] font-semibold">STATUS: OPEN FOR DESIGN PARTNERS</div>
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
          <span className="text-[10px] font-mono tracking-widest text-[#0078D4] font-bold uppercase block">Measurable Performance</span>
          <h2 className="font-display font-black text-2.5xl sm:text-4xl text-white tracking-tight leading-snug">
            Executive Outcomes
          </h2>
          <p className="text-sm text-bastion-text-muted font-normal">
            Quantifiable compliance, risk containment, and cost-reduction impacts audited across active enterprise deployments.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch font-sans">
          
          <div className="p-5 rounded-lg border border-bastion-border bg-bastion-bg-secondary/40 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#0078D4] tracking-widest font-bold uppercase">REDUCED RISK</span>
              <p className="text-3.5xl md:text-4xl font-extrabold font-display text-white">60%+</p>
            </div>
            <p className="text-[11.5px] text-bastion-text-muted leading-relaxed font-normal">
              Average reduction in cognitive vulnerabilities, policy boundaries breaches, and credential abuse incidents.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-bastion-border bg-bastion-bg-secondary/40 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#0078D4] tracking-widest font-bold uppercase">AUDIT READINESS</span>
              <p className="text-3.5xl md:text-4xl font-extrabold font-display text-white">75%+</p>
            </div>
            <p className="text-[11.5px] text-bastion-text-muted leading-relaxed font-normal">
              Faster generation of validated regulatory compliance evidence and reporting outputs for board stakeholders.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-bastion-border bg-bastion-bg-secondary/40 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#0078D4] tracking-widest font-bold uppercase">EFFORT REDUCTION</span>
              <p className="text-3.5xl md:text-4xl font-extrabold font-display text-white">80%+</p>
            </div>
            <p className="text-[11.5px] text-bastion-text-muted leading-relaxed font-normal">
              Decrease in manual compliance overhead, log tracing, and executive reports preparation time.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-bastion-border bg-bastion-bg-secondary/40 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#0078D4] tracking-widest font-bold uppercase">CISO VISIBILITY</span>
              <p className="text-3.5xl md:text-4xl font-extrabold font-display text-white">100%</p>
            </div>
            <p className="text-[11.5px] text-bastion-text-muted leading-relaxed font-normal">
              Continuous dashboard visibility and real-time alerts stream regarding model behavior across all channels.
            </p>
          </div>

        </div>

      </section>

      {/* FAQ Accordion Section for trust establishment */}
      <section className="bg-bastion-bg-secondary/20 border-t border-bastion-border py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#0078D4] font-bold block uppercase">Strategic FAQ</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
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
                <div key={idx} className="border border-bastion-border bg-bastion-bg-secondary/40 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-display font-bold text-xs sm:text-sm text-white flex justify-between items-center bg-[#071321]/20 hover:bg-[#071321]/40 cursor-pointer transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-bastion-text-muted transition-transform ${isOpen ? 'rotate-180 text-bastion-azure' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-bastion-border/40"
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

    </div>
  );
}

