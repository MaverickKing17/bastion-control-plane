import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Lock, 
  Globe, 
  FileCheck2, 
  Building2, 
  CheckCircle2, 
  FolderCheck,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function EnterpriseTrustFramework() {
  const [selectedId, setSelectedId] = useState<string>("OSFI");

  const frameworks = [
    {
      id: "OSFI",
      name: "OSFI E-21",
      badge: "Canadian Banking Sector Standard",
      longName: "Operational Risk Management Guide",
      whyAI: "Enforces strict limits on third-party model dependencies and unguided automated agent decision thresholds.",
      financialFocus: "Crucial for tier-1 credit unions and banks who deploy autonomous workflow workers into operational roles.",
      summary: "Restricts autonomous model executions by forcing hard boundary controls at standard network layers."
    },
    {
      id: "PIPEDA",
      name: "PIPEDA",
      badge: "Data Privacy Regulation",
      longName: "Personal Information Protection & Electronic Documents Act",
      whyAI: "Requires perfect compliance mapping, ensuring prompt completion traces never exfiltrate personal customer details.",
      financialFocus: "Monitors and intercepts unauthorized prompt exposures, protecting private consumer records.",
      summary: "Secures consumer trust and legal alignment during multi-hop database transactions."
    },
    {
      id: "AIDA",
      name: "AIDA",
      badge: "Artificial Intelligence and Data Act",
      longName: "AI Stewardship & Audit Act",
      whyAI: "Enforces continuous oversight and accountability, requiring clear trails for high-impact AI model pipelines.",
      financialFocus: "Allows compliance teams to produce immediate evidence proving models operate within acceptable bias limits.",
      summary: "Establishes a verifiable system of record satisfying Canadian and global AI regulatory frameworks."
    },
    {
      id: "NIST",
      name: "NIST AI RMF",
      badge: "NIST AI Risk Management Framework",
      longName: "National Risk Core Guidelines",
      whyAI: "Maps out the core practices of Governing, Mapping, Measuring, and Mitigating adversarial LLM prompt vulnerabilities.",
      financialFocus: "Provides an institutional risk framework allowing CISOs to quantify the safety level of model deployment environments.",
      summary: "Translates technical AI operations into standard NIST-level cybersecurity metrics."
    },
    {
      id: "SOC",
      name: "SOC 2 Type II",
      badge: "Cryptographic Service Auditing",
      longName: "System and Organization Controls",
      whyAI: "Provides validated assurance on system security, continuous telemetry, data confidentiality, and platform privacy limits.",
      financialFocus: "Meets global operational due-diligence standards demanded by enterprise partners and institutional wealth firms.",
      summary: "Ensures the Bastion Control Plane keeps strict boundaries for all client agent pools."
    },
    {
      id: "ISO",
      name: "ISO 27001",
      badge: "Global Security Framework",
      longName: "Information Security Management System",
      whyAI: "Defines international standard guidelines for corporate asset safety, security engineering practices, and credential separation.",
      financialFocus: "Protects sensitive financial records and ensures all automated agent profiles map securely back to actual authorized workers.",
      summary: "Integrates agent actions auditing directly into existing enterprise security structures."
    }
  ];

  const active = frameworks.find(f => f.id === selectedId) || frameworks[0];

  return (
    <section id="trust-frameworks-section" className="bg-[#071524] border-y border-slate-800 py-24 px-6 relative overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,120,212,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-[10px] text-teal-300 font-mono font-bold uppercase tracking-wider">
            <FolderCheck className="w-3.5 h-3.5 text-teal-400" /> COMPLIANCE STANDARDS ALIGNMENT
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4.5xl text-white tracking-tight leading-none">
            Built Around Enterprise Standards
          </h2>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
            Bastion aligns autonomous AI operations with strict global regulatory mandates, ensuring institutional trust at every transaction stage.
          </p>
        </div>

        {/* Dynamic selector block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Interactive list of standards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3 bg-slate-950/40 p-4 rounded-3xl border border-white/5 relative">
            <div className="absolute top-4 left-4 text-[9px] font-mono text-slate-500 tracking-wider">
              SELECT STANDARD TO REVIEW
            </div>
            
            <div className="space-y-2 mt-8 flex-1">
              {frameworks.map((fw) => {
                const isSelected = selectedId === fw.id;
                return (
                  <button
                    key={fw.id}
                    onClick={() => setSelectedId(fw.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 text-left select-none cursor-pointer ${
                      isSelected 
                        ? 'bg-sky-950/40 border-[#0078D4] text-white shadow-lg' 
                        : 'bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/60 text-slate-300'
                    }`}
                  >
                    <div className="space-y-1">
                      <span className="font-mono text-xs font-black uppercase tracking-wider block">
                        {fw.name}
                      </span>
                      <span className="text-[10px] text-slate-400 block font-light">
                        {fw.longName}
                      </span>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#0078D4] translate-x-1' : 'text-slate-500'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Premium HUD Details display Panel */}
          <div className="lg:col-span-7 bg-[#0b1d33]/90 border border-white/10 p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,120,212,0.15)] hover:border-[#0078D4]/50 hover:shadow-[0_0_25px_rgba(0,120,212,0.25)] transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-500 to-[#0078D4]" />
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="space-y-6">
              {/* Badge info */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4">
                <span className="px-2.5 py-1 rounded inline-flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase bg-teal-500/10 border border-teal-500/20 text-teal-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> {active.badge}
                </span>
                <span className="text-[10.5px] font-mono text-slate-200">
                  STANDARD: {active.name}
                </span>
              </div>

              {/* Title & Long Name */}
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                  {active.name} Alignment Protocols
                </h3>
                <p className="text-xs text-slate-400 font-mono uppercase">
                  {active.longName}
                </p>
              </div>

              {/* Explanations (Why AI Matters / Financial Focus) */}
              <div className="space-y-4">
                
                {/* Segment 1: Why it matters to AI governance */}
                <div className="bg-[#071524] border border-white/10 p-4 rounded-2xl">
                  <span className="text-[9.5px] font-mono text-[#0078D4] font-extrabold uppercase block tracking-widest mb-1.5">
                    💡 Why It Matters to AI Governance
                  </span>
                  <p className="text-[12.5px] text-slate-200 leading-relaxed font-light">
                    {active.whyAI}
                  </p>
                </div>

                {/* Segment 2: Financial institutions focus */}
                <div className="bg-[#071524] border border-[#0078D4]/20 p-4 rounded-2xl">
                  <span className="text-[9.5px] font-mono text-teal-400 font-extrabold uppercase block tracking-widest mb-1.5">
                    🏦 Focus on Financial Institutions
                  </span>
                  <p className="text-[12.5px] text-slate-100 leading-relaxed font-normal">
                    {active.financialFocus}
                  </p>
                </div>

              </div>

            </div>

            {/* Bottom summary and sign-off */}
            <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
              <p className="text-slate-400 font-light max-w-md">
                &gt; Operational Proof: {active.summary}
              </p>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono font-bold text-white uppercase flex-shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> ALIGNED & AUDITED
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
