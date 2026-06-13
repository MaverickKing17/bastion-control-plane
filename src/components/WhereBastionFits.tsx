import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Database, 
  ShieldCheck, 
  Activity, 
  GitBranch, 
  Lock, 
  Sliders, 
  Layers, 
  Terminal, 
  FileSpreadsheet, 
  ChevronRight, 
  CornerDownRight, 
  Sparkles,
  ArrowDown
} from 'lucide-react';

export default function WhereBastionFits() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 0,
      title: "Enterprise Systems Source",
      short: "Integrations Layer",
      desc: "Connects native enterprise infrastructure and model hosts.",
      nodes: ["Microsoft Entra ID", "Microsoft Sentinel", "Microsoft Purview", "ServiceNow", "GitHub", "Azure OpenAI", "Jira"],
      tech: "Ingests structural IAM, repository, compliance, and LLM activity tokens."
    },
    {
      id: 1,
      title: "Bastion Connectors",
      short: "Secure Gateways",
      desc: "Zero-latency intercept connectors bound at the agent execution interface.",
      nodes: ["Network interceptors", "Gateway proxies", "OAuth binders"],
      tech: "Sits above systems of record, operating within sub-5ms routing overhead."
    },
    {
      id: 2,
      title: "Signal Normalization Layer",
      short: "Token Parsing",
      desc: "Deconstructs raw completion streams and system prompts into structured intent schemas.",
      nodes: ["AST query parses", "Vector comparison logs", "Intent extraction"],
      tech: "Converts unstructured agentic reasoning paths into machine-verifiable operations."
    },
    {
      id: 3,
      title: "Governance Graph",
      short: "Relationship Mapping",
      desc: "Continuously charts current model status back to human directors, credentials, and assets.",
      nodes: ["Direct ownership tracking", "Permission boundaries", "Resource exposure maps"],
      tech: "The master control dictionary mapping all operational trust dependencies."
    },
    {
      id: 4,
      title: "Trust Engine",
      short: "Algorithmic Risk Check",
      desc: "Evaluates token compliance, prompt injections, and operational drift scores in real-time.",
      nodes: ["Alignment validator", "Insolvency check", "Rogue command block"],
      tech: "Computes system trust indices dynamically against corporate policy layers."
    },
    {
      id: 5,
      title: "Evidence Vault",
      short: "Sealed Regulatory Log",
      desc: "Write-once, read-many cryptographic ledger recording prompt traces securely.",
      nodes: ["SHA-256 blocks", "Tamper-proof storage", "Immutable audit track"],
      tech: "Constructs court-ready files to satisfy stringent SEC and FINRA requirements."
    },
    {
      id: 6,
      title: "Case Management",
      short: "Incident Remediation",
      desc: "Triggers automated workflows to freeze drift, isolate containers, and alert human operators.",
      nodes: ["Instant session block", "Token revocation", "CISO notification streams"],
      tech: "Ensures dangerous autonomous vectors are immediately contained prior to execution."
    },
    {
      id: 7,
      title: "Executive Exposure",
      short: "Risk Assessment View",
      desc: "Aggregates security risk factors, active compliance override states, and incident histories.",
      nodes: ["CISO dashboard", "Regulatory exposure index", "Drift parameters"],
      tech: "Provides risk-management stakeholders with clear, quantitative safety indices."
    },
    {
      id: 8,
      title: "Board Reporting",
      short: "Corporate Governance",
      desc: "Generates high-status, desaturated static compliance reports and corporate summaries.",
      nodes: ["Executive briefing decks", "Audit-ready PDFs", "Legal compliance certificates"],
      tech: "Translates technical telemetry into clear fiduciary metrics for directors."
    }
  ];

  return (
    <section id="where-bastion-fits-section" className="bg-[#071524] border-y border-slate-800 py-24 px-6 relative overflow-hidden">
      {/* Grid Backdrops conforming to Palantir style */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,120,212,0.1)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-60" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#0078D4]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full text-[10.5px] text-sky-400 font-mono font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#0078D4]" /> ARCHITECTURAL INTEGRITY LAYER
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4.5xl text-white tracking-tight leading-none">
            Where Bastion Fits
          </h2>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
            Bastion unifies identity, security, compliance, evidence, and workflow signals into a single governance control plane for autonomous agents.
          </p>
        </div>

        {/* The Premium Interactive Architecture Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Vertical Schematic Flow (Col Span 7) */}
          <div className="lg:col-span-7 space-y-3 bg-[#0b1d33]/80 p-6 sm:p-8 rounded-3xl border border-white/10 relative shadow-[0_10px_35px_rgba(0,0,0,0.4)]">
            <div className="absolute top-4 right-4 text-[9px] font-mono text-slate-400 tracking-widest uppercase">
              COGNITIVE CONTROL STACK
            </div>

            <div className="space-y-2 relative mt-6">
              {/* Connecting line on the left side of the steps */}
              <div className="absolute left-6 top-6 bottom-6 w-[1.5px] bg-[#0078D4]/35 pointer-events-none hidden sm:block" />

              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                
                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-start gap-4 p-3.5 rounded-xl border transition-all duration-300 cursor-pointer text-left select-none ${
                      isActive 
                        ? 'bg-[#0a233c] border-[#0078D4] shadow-[0_0_25px_rgba(0,120,212,0.35)] translate-x-1 sm:translate-x-2' 
                        : 'bg-[#071524]/70 border-white/10 hover:border-[#0078D4]/40 hover:bg-[#071524]'
                    }`}
                  >
                    {/* Circle badge */}
                    <div className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center font-mono text-xs font-black flex-shrink-0 transition-all border sm:z-10 ${
                      isActive 
                        ? 'bg-[#0078D4] text-white border-white/20 scale-105 shadow-[0_0_12px_rgba(0,120,212,0.5)]' 
                        : 'bg-slate-905 text-slate-300 border-white/10'
                    }`}>
                      0{step.id + 1}
                    </div>

                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className={`text-sm font-bold font-display tracking-tight transition-colors ${
                          isActive ? 'text-white' : 'text-slate-200 hover:text-white'
                        }`}>
                          {step.title}
                        </h4>
                        <span className={`text-[9.5px] font-mono px-2 py-0.5 rounded border uppercase flex-shrink-0 tracking-wide font-semibold ${
                          isActive 
                            ? 'bg-sky-500/15 border-sky-400/30 text-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.15)]'
                            : 'bg-white/5 border-white/5 text-slate-400'
                        }`}>
                          {step.short}
                        </span>
                      </div>
                      
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="space-y-3 pt-2"
                        >
                          <p className="text-xs text-slate-200 leading-relaxed font-light">
                            {step.desc}
                          </p>
                          
                          {/* Inner nodes tag group */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {step.nodes.map((node, i) => (
                              <span 
                                key={i} 
                                className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-white/10 text-slate-200 font-semibold"
                              >
                                {node}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <ChevronRight className={`w-4 h-4 text-slate-400 self-center transition-transform ${
                      isActive ? 'rotate-90 text-[#0078D4]' : ''
                    }`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Inspector Panel (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#0b1d33] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-[0_15px_40px_rgba(0,120,212,0.15)] hover:border-[#0078D4]/60 hover:shadow-[0_0_30px_rgba(0,120,212,0.3)] transition-all duration-300 relative overflow-hidden">
            {/* Top Indicator Accent gradient */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0078D4] via-cyan-500 to-teal-500" />
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#0078D4]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono text-sky-305 uppercase tracking-widest font-bold">
                  Telemetry Inspector
                </span>
                <span className="text-[10px] font-mono text-slate-200 bg-slate-900 border border-white/10 px-2 py-1 rounded">
                  STEP 0{steps[activeStep].id + 1} OF 09
                </span>
              </div>

              {/* Header */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-display text-white tracking-tight">
                  {steps[activeStep].title}
                </h3>
                <p className="text-xs text-sky-300 font-mono tracking-wider uppercase">
                  Execution Level Configuration
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-[#071524] border border-white/10 p-4 rounded-2xl relative">
                  <span className="text-[9px] font-mono text-[#0078D4] uppercase block tracking-widest mb-1.5 font-bold">
                    🛡️ Governance Objective
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-light">
                    {steps[activeStep].desc}
                  </p>
                </div>

                <div className="bg-[#071524] border border-[#0078D4]/20 p-4 rounded-2xl">
                  <span className="text-[9px] font-mono text-teal-400 uppercase block tracking-widest mb-2 font-bold">
                    ⚙️ Technical Intercept Mechanism
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-light italic">
                    &ldquo;{steps[activeStep].tech}&rdquo;
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-[9.5px] font-mono text-slate-300 uppercase tracking-widest font-bold block">
                    Bound Artifacts & Systems
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    {steps[activeStep].nodes.map((node, i) => (
                      <div key={i} className="flex items-center gap-1.5 p-2 rounded-lg bg-[#071524] border border-white/10 text-slate-200 hover:border-[#0078D4]/50 transition-colors">
                        <CornerDownRight className="w-3.5 h-3.5 text-[#0078D4] flex-shrink-0" />
                        <span className="truncate">{node}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom prompt alignment */}
            <div className="mt-8 pt-4 border-t border-white/10 space-y-3">
              <p className="text-[10px] text-slate-400 font-mono leading-relaxed">
                * Bastion sits directly above these integration frameworks and registers trace records as safe, immutable logs in the compliance pipeline.
              </p>
              <button 
                onClick={() => {
                  setActiveStep((prev) => (prev + 1) % steps.length);
                }}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#0078D4] hover:border-[#0078D4] border border-white/10 transition-all text-xs font-mono font-bold text-white uppercase flex items-center justify-center gap-1.5 cursor-pointer shadow-lg"
              >
                Inspect Next Step <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
