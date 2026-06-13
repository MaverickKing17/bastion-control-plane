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
  Database,
  Server
} from 'lucide-react';

// Custom Enterprise Sections (Modular & Robust)
import WhereBastionFits from './components/WhereBastionFits';
import ExecutiveOutcomes from './components/ExecutiveOutcomes';
import EnterpriseTrustFramework from './components/EnterpriseTrustFramework';
import GovernanceGraphExplanation from './components/GovernanceGraphExplanation';
import PlatformModuleEcosystem from './components/PlatformModuleEcosystem';
import GovernanceReadinessAssessment from './components/GovernanceReadinessAssessment';
import IntegrationEcosystem from './components/IntegrationEcosystem';

// Existing Interactive Telemetry elements
import DashboardDemo from './components/DashboardDemo';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import DesignPartnerModal from './components/DesignPartnerModal';
import ThreatHeatmap from './components/ThreatHeatmap';
import CognitiveShieldDemo from './components/CognitiveShieldDemo';
import AuthorityMetricsBar from './components/AuthorityMetricsBar';

// Desaturated meeting photo
const boardroomImg = '/src/assets/images/boardroom_meeting_1781371964505.jpg';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
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

  return (
    <div className="min-h-screen bg-[#071524] text-white font-sans selection:bg-[#0078D4] selection:text-white relative">
      
      {/* Decorative enterprise space gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0078D4]/5 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] opacity-35 pointer-events-none" />

      {/* Navigation Header - Highly custom corporate bar */}
      <nav id="navbar" className="sticky top-0 z-40 bg-[#071524]/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative flex items-center justify-center w-9 h-9 bg-gradient-to-br from-[#0078D4] to-sky-600 rounded-lg shadow-md border border-white/10">
              <div className="absolute inset-1 border border-white/5 rounded-md" />
              <Shield className="w-5 h-5 text-white stroke-[2.3]" />
            </div>
            <div>
              <div className="font-display font-extrabold text-white tracking-wider text-sm flex items-center gap-1.5 uppercase">
                BASTION
              </div>
              <p className="text-[8px] font-mono tracking-widest text-[#0078D4] uppercase mt-0.5 leading-none">Enterprise AI Control Plane</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wide text-slate-300">
            <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('executive-outcomes-section')}>
              Outcomes
            </span>
            <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('why-platforms-fail')}>
              Security Gap
            </span>
            <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('where-bastion-fits-section')}>
              Architecture
            </span>
            <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('trust-frameworks-section')}>
              Frameworks
            </span>
            <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('governance-graph-section')}>
              Governance Graph
            </span>
            <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('platform-ecosystem-section')}>
              Ecosystem
            </span>
            <span className="hover:text-white transition-colors cursor-pointer text-sky-400" onClick={() => handleScrollTo('founding-design-partners-section')}>
              Design Partners
            </span>
          </div>

          {/* Header Action Button */}
          <div>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#0078D4] hover:bg-sky-600 text-white text-xs font-bold px-4 py-2 rounded-lg border border-white/10 shadow-lg cursor-pointer transition-all flex items-center gap-2"
            >
              Request Design Partner Review <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </nav>

      {/* SECTION 1: HERO CONTAINER (Desaturated Deep Charcoal-Teal, Microsoft/Palantir layout) */}
      <header className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-20 grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Typography */}
        <div className="xl:col-span-6 space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0078D4]/10 border border-[#0078D4]/20 rounded-full text-[10px] text-sky-305 font-mono font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Financial Services Ready • Enterprise Infrastructure
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.08] max-w-2xl">
            AI Control Plane <br />
            <span className="text-[#0078D4] font-black">for Autonomous Agents</span>
          </h1>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl font-light">
            Bastion provides the governance, trust, ownership, compliance, and evidence layer required to safely operate autonomous AI agents across enterprise environments.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#0078D4] hover:bg-sky-600 text-white text-xs font-mono font-bold px-6 py-4 rounded-lg border border-white/10 shadow-2xl cursor-pointer transition-all text-center flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              Request Design Partner Review <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScrollTo('where-bastion-fits-section')}
              className="bg-white/5 hover:bg-white/10 text-white text-xs font-mono font-bold px-6 py-4 rounded-lg border border-white/10 shadow-sm transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider"
            >
              View Architecture
            </button>
          </div>

          {/* Enterprise Trust Indicators (PDF Page 3 mandated list) */}
          <div className="pt-8 border-t border-slate-800 space-y-3">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black block">
              ENTERPRISE TRUST INDICATORS
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono font-semibold">
              {[
                "Multi-Tenant Architecture",
                "Synthetic Data Pilot",
                "Financial Services Ready",
                "Zero Production Data Required",
                "Governance Graph Powered"
              ].map((item, id) => (
                <div key={id} className="flex items-center gap-1.5 p-2 bg-slate-950/40 rounded border border-white/5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                  <span className="text-[10px] truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Cognitive shield mock telemetry */}
        <div className="xl:col-span-6 w-full relative">
          <CognitiveShieldDemo />
        </div>

      </header>

      {/* Dynamic Animated C-suite Authority Metrics */}
      <AuthorityMetricsBar />

      {/* SECTION 4: EXECUTIVE OUTCOMES (KPI cards moved high up) */}
      <ExecutiveOutcomes />

      {/* SECTION 2: WHY EXISTING SECURITY PLATFORMS ARE NOT ENOUGH */}
      <section id="why-platforms-fail" className="max-w-7xl mx-auto px-6 py-24 space-y-16">
        
        {/* Headings */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/20 text-[10px] font-mono font-bold text-sky-400 tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-[#0078D4]" /> COGNITIVE SECURITY GAP ANALYSIS
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-4.5xl text-white tracking-tight leading-none">
            Why Existing Security Platforms Are Not Enough
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Legacy frameworks are engineered for static applications. Autonomous AI systems introduce non-deterministic vulnerabilities that security teams are completely blind to.
          </p>
        </div>

        {/* Comparative Grid Plate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Current Platforms Scope */}
          <div className="lg:col-span-6 bg-slate-950/70 border border-white/5 p-6 sm:p-8 rounded-3xl relative flex flex-col justify-between h-[420px]">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-black block tracking-widest bg-slate-900 border border-white/5 px-2.5 py-1 rounded inline-block">
                FOUNDATIONAL LAYER
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white tracking-tight">
                Current Platforms Secure Under-Layers:
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Existing security infrastructures (SIEM, Firewalls, IAM) protect physical endpoints. They verify packets, but cannot govern autonomous execution intentions.
              </p>

              {/* Ingested list requested in PDF page 3 */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono font-bold">
                {[
                  { label: "Users Security", desc: "Identity & access tracking" },
                  { label: "Devices Integrity", desc: "Endpoint posture checks" },
                  { label: "Networks Traffic", desc: "Port restrictions & SIEM" },
                  { label: "Applications Controls", desc: "Binary static checks" }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-900 rounded-xl border border-white/5">
                    <span className="text-[#0078D4] block uppercase text-[10px] font-black">{item.label}</span>
                    <span className="text-[9.5px] text-slate-400 block font-normal mt-0.5">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-[10px] font-mono text-slate-500">
              * Status: Effective for infrastructure. Blind to autonomous agency logic.
            </div>
          </div>

          {/* Column 2: New AI Vulnerabilities Scope */}
          <div className="lg:col-span-6 bg-[#0078D4]/5 border border-[#0078D4]/20 p-6 sm:p-8 rounded-3xl relative flex flex-col justify-between h-[420px] shadow-[0_15px_35px_rgba(0,120,212,0.05)]">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-rose-450 uppercase font-bold bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded inline-block">
                CRITICAL VULNERABILITY GAP
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white tracking-tight">
                Autonomous AI Introduces High-Risk Voids:
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Multi-hop AI systems operate recursively, write unstructured completions, and mutate database rows, introducing dangerous liabilities.
              </p>

              {/* Ingested list requested in PDF page 4 */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono font-bold">
                {[
                  { label: "Ownership Ambiguity", desc: "Who authorized this query?" },
                  { label: "Trust Uncertainty", desc: "Does this prompt represent drift?" },
                  { label: "Certification Needs", desc: "Is this model aligned?" },
                  { label: "Regulatory Exposure", desc: "Is customer privacy safe?" },
                  { label: "Evidence Obligations", desc: "Can you produce SEC-level proofs?" }
                ].map((item, idx) => (
                  <div key={idx} className={`p-3 bg-slate-950 rounded-xl border border-white/5 hover:border-rose-400/20 transition-colors ${idx === 4 ? 'col-span-2' : ''}`}>
                    <span className="text-rose-405 block uppercase text-[10px] font-black">{item.label}</span>
                    <span className="text-[9.5px] text-slate-400 block font-normal mt-0.5">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-[10.5px] font-mono text-[#0078D4] font-semibold">
              &gt; Bastion is the missing governance layer governing cognitive executors.
            </div>
          </div>

        </div>

      </section>

      {/* SECTION 3: WHERE BASTION FITS (Interactive Diagram) */}
      <WhereBastionFits />

      {/* Interactive Command Center Demonstration */}
      <section id="interactive-demo" className="bg-slate-950 border-t border-slate-900 py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/5 pb-6">
            <div className="space-y-1 text-left">
              <span className="text-[10px] font-mono tracking-widest text-sky-400 font-bold block uppercase">Continuous Telemetry Console</span>
              <h2 className="font-display font-black text-2.5xl sm:text-3.5xl text-white tracking-tight">
                Interactive Control Plane Demonstration
              </h2>
              <p className="text-xs text-slate-350 max-w-2xl font-light mt-0.5">
                Explore the CISO console interface. Cycle through different tracking ports to trigger simulated alignment drift, inspect validation checks, or trigger immediate session vetoes.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#0078D4] hover:bg-sky-600 text-white text-xs font-mono font-bold px-4 py-2.5 rounded-lg border border-white/10 transition-all cursor-pointer inline-flex items-center gap-1.5 uppercase tracking-wider"
              >
                Schedule Private Demo Tour <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Render the core dashboard demo */}
          <DashboardDemo />

        </div>
      </section>

      {/* SECTION 5: ENTERPRISE TRUST FRAMEWORK (Built Around Standards) */}
      <EnterpriseTrustFramework />

      {/* SECTION 6: GOVERNANCE GRAPH (Flagship Relationship Layer) */}
      <GovernanceGraphExplanation />

      {/* SECTION 7: PLATFORM MODULE ECOSYSTEM (Platform Map) */}
      <PlatformModuleEcosystem />

      {/* SECTION 8: AI GOVERNANCE READINESS ASSESSMENT (Quiz) */}
      <GovernanceReadinessAssessment onRequestReview={() => setModalOpen(true)} />

      {/* SECTION 9: INTEGRATION ECOSYSTEM (Showcase) */}
      <IntegrationEcosystem />

      {/* Global Threat Heatmap telemetry block */}
      <section className="bg-slate-950 py-16 px-6 border-b border-slate-900">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#0078D4] font-bold uppercase block">ANOMALY LOG MATRIX</span>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">Active Alignment Threat Map</h3>
            <p className="text-xs text-slate-400 font-light">Global drift scores continuously monitored across financial transaction nodes.</p>
          </div>
          <ThreatHeatmap />
        </div>
      </section>

      {/* Architecture pipeline svg segment */}
      <section id="pipeline-architecture-visual" className="max-w-7xl mx-auto px-6 py-24 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[10px] font-mono text-[#0078D4] tracking-widest uppercase font-bold block">TECHNICAL TELEMETRY FLOWS</span>
          <h2 className="font-display font-black text-2.5xl sm:text-4.5xl text-white tracking-tight leading-none">Security Pipeline Architecture</h2>
          <p className="text-sm text-slate-350 font-light leading-relaxed">Read-only hooks intercept, normalize, and commit safety traces to cryptographically sealed vaults.</p>
        </div>
        <ArchitectureDiagram />
      </section>

      {/* SECTION 10: FOUNDING DESIGN PARTNER PROGRAM (Highly Custom, Exclusive & Desaturated) */}
      <section id="founding-design-partners-section" className="bg-slate-950 py-24 px-6 relative overflow-hidden border-t border-slate-900">
        <div className="absolute inset-0 bg-[#071524]/60 bg-[size:16px_16px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0078D4]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl border border-white/5 shadow-2xl p-6 sm:p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-teal-500 via-[#0078D4] to-teal-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Descriptive briefs */}
              <div className="lg:col-span-7 space-y-8 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] text-amber-500 font-mono font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" /> Exclusive Cohort Openings
                </div>

                <div className="space-y-4">
                  <h2 className="font-display font-black text-3xl sm:text-4.5xl text-white tracking-tight leading-none">
                    Seeking Four Financial Services <br />
                    <span className="text-[#0078D4]">Design Partners</span>
                  </h2>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
                    We coordinate directly with leading hedge funds, credit unions, wealth management platforms, and security leaders to design, test, and validate secure, non-deterministic boundary rules for autonomous executors.
                  </p>
                </div>

                {/* Bullets mapping the required 6 benefits specified in PDF page 10 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    { title: "Architecture Review", desc: "Direct code safety audits led by core compiler system architects." },
                    { title: "Synthetic Data Pilot", desc: "No production database keys. Operate purely within locked sandboxed twin simulations." },
                    { title: "Roadmap Influence", desc: "Directly structure product release bounds to fit your compliance needs." },
                    { title: "Preferred Commercial Terms", desc: "Exclusive, locked pricing structures prior to national public releases." },
                    { title: "Executive Workshops", desc: "Provide C-suite or board training sessions detailing AI fiduciary liability vectors." },
                    { title: "Early Access To Future Integrations", desc: "Get native connection interfaces first, before they deploy to registries." }
                  ].map((b, idx) => (
                    <div key={idx} className="flex gap-3 p-4 bg-slate-950 border border-white/5 rounded-xl hover:border-[#0078D4]/25 transition-colors">
                      <div className="w-6 h-6 rounded-lg bg-[#0078D4]/10 border border-[#0078D4]/20 flex items-center justify-center text-[#0078D4] flex-shrink-0 text-xs font-bold leading-none">
                        ✓
                      </div>
                      <div className="space-y-1">
                        <strong className="text-xs font-mono font-extrabold uppercase tracking-wide text-white block">
                          {b.title}
                        </strong>
                        <p className="text-[11px] text-slate-400 leading-normal font-light">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full sm:w-auto bg-[#0078D4] hover:bg-sky-600 text-white text-xs font-mono font-bold px-6 py-4 rounded-lg border border-white/10 shadow-lg cursor-pointer transition-all uppercase tracking-wide inline-flex items-center justify-center gap-2"
                  >
                    Request Partner Seat <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-[10.5px] font-mono text-slate-500">
                    * Final cohort spots lock soon
                  </span>
                </div>
              </div>

              {/* Right Column: High status Boardroom Meeting Photo */}
              <div className="lg:col-span-5 relative w-full h-full min-h-[340px]">
                {/* Desaturated, tinted meeting photo to reinforce premium trust */}
                <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply z-10 pointer-events-none rounded-2xl border border-white/5" />
                
                <div className="relative rounded-2xl overflow-hidden group w-full h-full shadow-2xl border border-white/5">
                  <img 
                    src={boardroomImg} 
                    alt="Corporate Advisors Boardroom Session" 
                    className="w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-700 min-h-[340px] max-h-[460px]"
                  />

                  {/* Stamp Info Shield Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 p-4 bg-slate-950/95 border border-[#0078D4]/25 backdrop-blur-md rounded-xl font-mono text-[9.5px] text-slate-300 shadow-xl space-y-1 text-left">
                    <div className="flex items-center gap-1.5 text-white font-bold text-[10px]">
                      <Building className="w-3.5 h-3.5 text-[#0078D4]" />
                      <span>Bastion Fiduciary Security</span>
                    </div>
                    <div>Audits: Banks, Credit Unions, Securities Agencies</div>
                    <div className="text-emerald-400 font-bold flex items-center gap-1 text-[9px] pt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      STATUS: OPEN FOR COHORT APPLICANTS
                    </div>
                  </div>
                </div>

                {/* Precision corners decoration */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-[#0078D4]/50 z-20" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-[#0078D4]/50 z-20" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-[#0078D4]/50 z-20" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-[#0078D4]/50 z-20" />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA (PDF Page 10 specified parameters) */}
      <section className="bg-gradient-to-b from-slate-950 to-[#071524] py-28 px-6 text-center border-t border-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,120,212,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0078D4]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <p className="text-[10.5px] font-mono tracking-widest text-[#0078D4] uppercase font-bold">
            LEAD THE AUTONOMOUS TRANSITION
          </p>

          <h2 className="font-display font-black text-4xl sm:text-5.5xl text-white tracking-tight leading-none">
            Building The AI Control Plane Category
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
            Bastion is partnering with a small number of financial institutions to define the future of autonomous AI governance.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 select-none">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto bg-[#0078D4] hover:bg-sky-600 text-white text-xs font-mono font-bold px-8 py-4 rounded-lg border border-white/10 shadow-2xl cursor-pointer transition-all uppercase tracking-wider"
            >
              Request Design Partner Review
            </button>

            <button
              onClick={() => handleScrollTo('pipeline-architecture-visual')}
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white text-xs font-mono font-bold px-8 py-4 rounded-lg border border-white/10 transition-all cursor-pointer uppercase tracking-wider"
            >
              View Platform Architecture
            </button>
          </div>

          <div className="pt-8 flex justify-center items-center gap-1 bg-transparent text-slate-500 font-mono text-[9px] uppercase tracking-widest leading-none">
            <span>Fiduciary System Assurance</span>
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>Zero Production Records Required</span>
          </div>
        </div>
      </section>

      {/* Strategic FAQ Accordion */}
      <section className="bg-slate-950 border-t border-slate-900 py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12 text-left">
          
          <div className="text-center space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#0078D4] font-bold block uppercase">Strategic Framework</span>
            <h2 className="font-display font-black text-2.5xl sm:text-3.5xl text-white tracking-tight">
              Enterprise Governance FAQ
            </h2>
            <p className="text-xs text-slate-400 max-w-lg mx-auto font-light leading-relaxed">
              Addressing technical safety and implementation queries from CISOs, CROs, and legal directors in the financial space.
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
                <div key={idx} className="border border-white/5 bg-slate-900/40 rounded-xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-display font-bold text-xs sm:text-sm text-white flex justify-between items-center bg-slate-900/10 hover:bg-slate-900/30 cursor-pointer transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-[#0078D4]' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-white/5"
                      >
                        <p className="p-4 text-xs text-slate-300 leading-relaxed font-light">
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

      {/* FOOTER CONTAINER (Desaturated, Classic Enterprise) */}
      <footer className="relative border-t border-slate-900 bg-slate-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,120,212,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-80" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-[#0078D4]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            
            {/* Left Brand Column - Col Span 4 */}
            <div className="lg:col-span-4 bg-slate-900/20 border border-white/5 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-lg hover:border-[#0078D4]/20 transition-all duration-350">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0078D4] to-cyan-505" />
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#0078D4] rounded-xl flex items-center justify-center border border-white/20 shadow-md">
                    <Shield className="w-5 h-5 text-white animate-pulse" />
                  </div>
                  <div>
                    <div className="font-display font-black text-white text-base tracking-wider uppercase">
                      BASTION
                    </div>
                    <span className="text-[8px] font-mono text-sky-400 tracking-widest block uppercase font-bold leading-none mt-0.5">COGNITIVE CONTROL SYSTEM</span>
                  </div>
                </div>
                <p className="text-[12px] text-slate-300 leading-relaxed font-light">
                  AI Control Plane for Autonomous Agents. Calibrating real-time safety, alignment audits, and immutable cryptographic proofs for financial institutions.
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-3 text-[9px] font-mono text-slate-300 mt-6 pt-4 border-t border-white/5">
                <span className="flex items-center gap-1 px-2 py-1 rounded bg-sky-500/10 border border-[#0078D4]/20 text-sky-300 font-bold uppercase">
                  <Lock className="w-3 h-3 text-[#0078D4]" /> SOC2 TYPE II COMPLIANT
                </span>
                <span className="flex items-center gap-1 px-2 py-1 rounded bg-teal-500/10 border border-teal-500/20 text-teal-300 font-bold uppercase">
                  <CheckCircle2 className="w-3 h-3 text-teal-400" /> ISO-27001
                </span>
              </div>
            </div>

            {/* Resources - Col Span 2 */}
            <div className="lg:col-span-2 bg-slate-900/20 border border-white/5 p-6 rounded-2xl relative overflow-hidden shadow-lg hover:border-[#0078D4]/20 transition-all">
              <h5 className="font-bold text-white font-mono text-[10.5px] tracking-widest uppercase mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
                Resources
              </h5>
              <ul className="space-y-3 text-[12px] text-slate-305 font-light">
                <li className="hover:text-white transition-all cursor-pointer flex items-center justify-between group/link">
                  <span>Compliance whitepaper</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0078D4] opacity-0 group-hover/link:opacity-100 transition-all" />
                </li>
                <li className="hover:text-white transition-all cursor-pointer flex items-center justify-between group/link">
                  <span>Fiduciary AI standard</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0078D4] opacity-0 group-hover/link:opacity-100 transition-all" />
                </li>
                <li className="hover:text-white transition-all cursor-pointer flex items-center justify-between group/link">
                  <span>CI Integration Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0078D4] opacity-0 group-hover/link:opacity-100 transition-all" />
                </li>
                <li className="hover:text-white transition-all cursor-pointer flex items-center justify-between group/link">
                  <span>NIST Reference Bounds</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0078D4] opacity-0 group-hover/link:opacity-100 transition-all" />
                </li>
              </ul>
            </div>

            {/* Architecture Overview - Col Span 2 */}
            <div className="lg:col-span-2 bg-slate-900/20 border border-white/5 p-6 rounded-2xl relative overflow-hidden shadow-lg hover:border-[#0078D4]/20 transition-all">
              <h5 className="font-bold text-white font-mono text-[10.5px] tracking-widest uppercase mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                Architecture
              </h5>
              <ul className="space-y-3 text-[12px] text-slate-305 font-light">
                <li className="hover:text-white transition-all cursor-pointer flex items-center justify-between group/link" onClick={() => handleScrollTo('where-bastion-fits-section')}>
                  <span>Connectors Array</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-400 opacity-0 group-hover/link:opacity-100 transition-all" />
                </li>
                <li className="hover:text-white transition-all cursor-pointer flex items-center justify-between group/link" onClick={() => handleScrollTo('platform-ecosystem-section')}>
                  <span>Ecosystem Map</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-400 opacity-0 group-hover/link:opacity-100 transition-all" />
                </li>
                <li className="hover:text-white transition-all cursor-pointer flex items-center justify-between group/link" onClick={() => handleScrollTo('pipeline-architecture-visual')}>
                  <span>Continuous Ledger</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-400 opacity-0 group-hover/link:opacity-100 transition-all" />
                </li>
              </ul>
            </div>

            {/* Advisory Contact - Col Span 4 */}
            <div className="lg:col-span-4 bg-slate-900/20 border border-white/5 p-6 rounded-2xl relative overflow-hidden shadow-lg hover:border-[#0078D4]/20 transition-all flex flex-col justify-between h-[210px]">
              <div className="space-y-3">
                <h5 className="font-bold text-white font-mono text-[10.5px] tracking-widest uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Request CISO Advisory Review
                </h5>
                <p className="text-[12px] text-slate-300 leading-normal font-light">
                  Our custom security desk offers secure reviews mapping alignment structures with zero data leak risks.
                </p>
              </div>
              
              <div className="space-y-2 mt-4 font-mono text-[11px] text-white">
                <a href="mailto:advisory@bastioncontrol.com" className="flex items-center gap-3 p-2 rounded-xl bg-white/5 hover:bg-emerald-500/10 border border-white/5 transition-colors group/contact">
                  <div className="w-7.5 h-7.5 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover/contact:scale-105 transition-transform">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold group-hover/contact:text-emerald-300 transition-colors">advisory@bastioncontrol.com</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright stamp */}
          <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-xs text-slate-400 font-light relative z-10">
            <div className="space-y-1">
              <p className="text-slate-300 text-[11.5px] font-normal">© 2026 Bastion. All rights reserved. Engineered for financial institutes and global enterprise core compliance.</p>
              <p className="text-[9.5px] text-slate-500 font-mono">Telemetry active. Local Time: 2026-06-13. Built inside High-Trust Grid Platform.</p>
            </div>
            
            <div className="flex flex-wrap gap-4 font-mono text-[10px] text-[#0078D4] font-semibold bg-[#0078D4]/5 border border-[#0078D4]/10 px-4 py-2 rounded-xl">
              <span className="hover:text-sky-300 hover:underline cursor-pointer transition-colors">Platform Registry</span>
              <span className="text-slate-700">•</span>
              <span className="hover:text-sky-300 hover:underline cursor-pointer transition-colors">Compliance Boundaries</span>
              <span className="text-slate-705">•</span>
              <span className="hover:text-sky-300 hover:underline cursor-pointer transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Return Top</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Callback Modal */}
      <DesignPartnerModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />

      {/* Floating Scroll up indicator */}
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
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#0078D4] text-white shadow-2xl border border-white/10 flex items-center justify-center cursor-pointer hover:bg-sky-600 transition-colors"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
