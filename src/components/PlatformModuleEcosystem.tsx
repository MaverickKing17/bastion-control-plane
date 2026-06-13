import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  ShieldCheck, 
  GitFork, 
  Database, 
  AlertTriangle, 
  Activity, 
  Sliders, 
  TrendingUp, 
  Workflow, 
  Layers,
  ArrowRight
} from 'lucide-react';

export default function PlatformModuleEcosystem() {
  const [activeModule, setActiveModule] = useState<string>("REGISTRY");

  const modules = [
    {
      id: "REGISTRY",
      title: "Agent Registry",
      icon: Cpu,
      desc: "Discovers and inventories all active autonomous agents operating across model endpoints, catalogs and identifies active reasoning networks.",
      flowIn: "Integration Center feeds discovered endpoints and host metadata.",
      flowOut: "Channels active agent profiles into Agent Certification for posture audits.",
      cohesion: "Secures instant visibility. You cannot govern what you do not catalog."
    },
    {
      id: "CERTIFICATION",
      title: "Agent Certification",
      icon: ShieldCheck,
      desc: "Audits system prompt constraints and validates base models and alignments before allowing live directory operations.",
      flowIn: "Ingests active directory credentials and container profile states.",
      flowOut: "Signs model profiles and directs alignment scores to the Trust Engine.",
      cohesion: "Establishes a hardened gate, blocking overprivileged prompts from launching."
    },
    {
      id: "GRAPH",
      title: "Governance Graph",
      icon: GitFork,
      desc: "The topological map indexing who authorized, owns, controls, and holds evidence for active model reasoning lines.",
      flowIn: "Binds user IAM from Entra ID and logs from ServiceNow and Jira.",
      flowOut: "Generates continuous topological maps for Executive Exposure dashboard reporting.",
      cohesion: "Calculates the dynamic risk relationships across the enterprise network."
    },
    {
      id: "VAULT",
      title: "Evidence Vault",
      icon: Database,
      desc: "Write-once, read-many cryptographic ledger recording prompt/response traces and system validations.",
      flowIn: "Secures continuous signal streams normalized by the Trust Engine.",
      flowOut: "Serves Court-Ready reports and SEC files directly to board directors.",
      cohesion: "Ensures legal and compliance teams maintain perfect defense postures."
    },
    {
      id: "CASE_MGMT",
      title: "Case Management",
      icon: AlertTriangle,
      desc: "Automated alert triaging, drift analysis, and remediation playbooks to contain overprivileged actions.",
      flowIn: "Ingests policy violation triggers and anomaly signals from the Trust Engine.",
      flowOut: "Executes programmatic veto scripts to notify human security teams.",
      cohesion: "Bridges passive observations into immediate risk-mitigation operations."
    },
    {
      id: "TRUST_ENGINE",
      title: "Trust Engine",
      icon: Activity,
      desc: "Computes fluid safety metrics, monitoring output drift indices, alignment scores, and potential bypass attempts.",
      flowIn: "Parses prompt activities fed by Signal Normalization Connectors.",
      flowOut: "Flashes alerts to Case Management while appending traces to Evidence Vault.",
      cohesion: "The core analytical core mapping cognitive safety margins in milliseconds."
    },
    {
      id: "EXECUTIVE",
      title: "Executive Exposure",
      icon: Sliders,
      desc: "Comprehensive board-level dashboard presenting real-time risk scores, drift metrics, and compliance ratings.",
      flowIn: "Aggregates indices compiled by Trust Engine and Governance Graph.",
      flowOut: "Produces high-status report briefs to corporate oversight boards.",
      cohesion: "Simplifies raw technical telemetry into understandable corporate benchmarks."
    },
    {
      id: "WORKFLOWS",
      title: "Governance Workflows",
      icon: Workflow,
      desc: "Allows security policy designers to build custom, visual permission gates and compliance constraints.",
      flowIn: "Ingests corporate alignment requirements and legal restrictions.",
      flowOut: "Deploys updated safety boundaries directly out to the Trust Engine.",
      cohesion: "Enables policy managers to edit rules without redeploying code."
    },
    {
      id: "INTEGRATION",
      title: "Integration Center",
      icon: Layers,
      desc: "The native connection hubs binding to Entra ID, Azure OpenAI, Jira, GitHub, and ServiceNow.",
      flowIn: "Intercepts API endpoints and log outputs.",
      flowOut: "Pipes normalized raw signals into Agent Registry and Trust Engine.",
      cohesion: "The fundamental ingestion bridge linking Bastion to existing enterprise infrastructure."
    }
  ];

  const active = modules.find(m => m.id === activeModule) || modules[0];

  return (
    <section id="platform-ecosystem-section" className="bg-[#071524] border-y border-slate-800 py-24 px-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,120,212,0.06)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-50" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0078D4]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full text-[10px] text-sky-400 font-mono font-bold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5 text-[#0078D4]" /> COHESIVE SYSTEM ARCHITECTURE
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4.5xl text-white tracking-tight leading-none">
            Platform Module Ecosystem
          </h2>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
            Instead of disconnected feature assets, Bastion unifies all operations into a single cohesive, interacting control plane.
          </p>
        </div>

        {/* 2-Column interactive flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch font-sans">
          
          {/* Left: 9 Module unified grid map (Col Span 7) */}
          <div className="lg:col-span-7 bg-slate-950/40 p-6 rounded-3xl border border-white/5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-[10.5px] font-mono text-slate-400 uppercase tracking-widest font-black">
                  Unified Platform Map
                </span>
                <span className="text-[10px] text-slate-500">Click a module to trace telemetry flows</span>
              </div>

              {/* 3x3 Grid representing the fully synchronized engine */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 select-none">
                {modules.map((mod) => {
                  const ModIcon = mod.icon;
                  const isSelected = activeModule === mod.id;
                  return (
                    <div
                      key={mod.id}
                      onClick={() => setActiveModule(mod.id)}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-[120px] relative overflow-hidden ${
                        isSelected 
                          ? 'bg-[#0078D4]/10 border-[#0078D4] text-white shadow-lg shadow-[#0078D4]/10' 
                          : 'bg-slate-900/40 border-white/5 hover:border-white/15 hover:bg-slate-900/60 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className={`p-1.5 rounded-lg border flex-shrink-0 ${
                          isSelected ? 'bg-[#0078D4]/20 border-sky-400' : 'bg-white/5 border-white/5'
                        }`}>
                          <ModIcon className="w-4 h-4 text-white" />
                        </div>
                        <span className={`text-[8px] font-mono font-bold uppercase tracking-widest ${
                          isSelected ? 'text-sky-305' : 'text-slate-500'
                        }`}>
                          {isSelected ? 'ACTIVE TRACE' : 'STANDBY'}
                        </span>
                      </div>

                      <strong className="text-[11.5px] font-display font-bold font-mono tracking-tight uppercase block leading-none mt-2">
                        {mod.title}
                      </strong>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[10.5px] font-mono text-slate-500 leading-relaxed">
              * The Platform Module Ecosystem interacts natively, operating under strict, read-only parameters. Raw user data is ignored to comply with SOC2 boundaries.
            </div>
          </div>

          {/* Right: Flow Telemetry Inspector Column (Col Span 5) */}
          <div className="lg:col-span-5 bg-slate-950 border border-white/5 p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-2xl">
            {/* Edge line decorations */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0078D4] to-cyan-500" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest font-bold">
                  Telemetry Flow Monitor
                </span>
                <span className="text-[9.5px] font-mono text-slate-400 bg-slate-900 border border-white/5 px-2 py-0.5 rounded uppercase font-bold">
                  {active.id}
                </span>
              </div>

              {/* Module Header */}
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#0078D4] text-white rounded-xl border border-white/10">
                  <active.icon className="w-5.5 h-5.5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-white tracking-tight">
                    {active.title}
                  </h3>
                  <p className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wide">
                    Module Function and Cohesion
                  </p>
                </div>
              </div>

              {/* Descriptions & Inputs/Outputs */}
              <div className="space-y-4 pt-2">
                <p className="text-xs text-slate-205 leading-relaxed font-light bg-slate-905 border border-white/5 p-3 rounded-xl">
                  {active.desc}
                </p>

                {/* Input Telemetry */}
                <div className="space-y-1 bg-slate-900/50 p-3 rounded-xl border border-white/5">
                  <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-widest block font-bold">
                    📥 Inflow signals:
                  </span>
                  <p className="text-xs text-slate-300 leading-normal font-light">
                    {active.flowIn}
                  </p>
                </div>

                {/* Output Telemetry */}
                <div className="space-y-1 bg-slate-900/50 p-3 rounded-xl border border-white/5">
                  <span className="text-[9px] font-mono text-teal-400 uppercase tracking-widest block font-bold">
                    📤 Outflow telemetry:
                  </span>
                  <p className="text-xs text-slate-300 leading-normal font-light">
                    {active.flowOut}
                  </p>
                </div>

                {/* Cohesion segment */}
                <div className="space-y-1 bg-slate-900/50 p-3 rounded-xl border border-white/5">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                    ⚖️ Cohesion Role:
                  </span>
                  <p className="text-xs text-[#0078D4] leading-normal font-semibold italic">
                    &gt; {active.cohesion}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom button trigger */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between gap-4 text-xs">
              <span className="text-slate-400 font-light font-mono leading-none">
                Telemetry State: Calibrated
              </span>
              <button
                onClick={() => {
                  const nextIdx = (modules.findIndex(m => m.id === activeModule) + 1) % modules.length;
                  setActiveModule(modules[nextIdx].id);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all font-mono font-bold text-white uppercase rounded-lg"
              >
                Scan Next Module <ArrowRight className="w-3.5 h-3.5 text-[#0078D4]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
