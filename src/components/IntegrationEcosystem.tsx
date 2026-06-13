import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cloud, 
  ShieldCheck, 
  Activity, 
  Database, 
  Sliders, 
  Layers, 
  GitBranch, 
  Terminal, 
  Brain,
  TerminalSquare, 
  ChevronRight, 
  AlertCircle,
  Eye,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface IntegrationItem {
  id: string;
  name: string;
  icon: any;
  category: "IDENTITY" | "SECURITY" | "WORKFLOW" | "MODELS";
  signalsCollected: string;
  governanceValue: string;
  trustImpact: string;
  evidenceImpact: string;
  ownershipCorrelation: string;
}

export default function IntegrationEcosystem() {
  const [activeId, setActiveId] = useState<string>("ENTRA");

  const integrations: IntegrationItem[] = [
    {
      id: "ENTRA",
      name: "Microsoft Entra ID",
      icon: ShieldCheck,
      category: "IDENTITY",
      signalsCollected: "User security IDs, directory groups, active session tokens, credential clearance vectors.",
      governanceValue: "Locks down model execution scopes, preventing agents from acting without active human clearances.",
      trustImpact: "Ensures no unmapped autonomous containers run queries outside of explicit employee IAM boundaries.",
      evidenceImpact: "Permits immediate signature logging on every transaction history trace, assuring strict user-identity proofs.",
      ownershipCorrelation: "Maps 100% of LLM completion events directly to a recognized employee profile from Microsoft directory."
    },
    {
      id: "SENTINEL",
      name: "Microsoft Sentinel",
      icon: Activity,
      category: "SECURITY",
      signalsCollected: "Anomaly threat markers, system API call logs, prompt-level override records, sandbox flags.",
      governanceValue: "Feeds active model threat intelligence into central enterprisewide SIEM pipelines.",
      trustImpact: "Shortens time-to-isolation, identifying anomalous LLM activity peaks across model hosts.",
      evidenceImpact: "Encrypts active threat traces side-by-side with original user prompts in court-ready formats.",
      ownershipCorrelation: "Flags active compromise chains directly back to target directory groups and CISO oversight dashboards."
    },
    {
      id: "PURVIEW",
      name: "Microsoft Purview",
      icon: Database,
      category: "SECURITY",
      signalsCollected: "Data classification tags, database schema rights, confidential asset tracking lists.",
      governanceValue: "Blocks active LLM models from reading or exfiltrating data tagged as highly confidential.",
      trustImpact: "Enforces continuous compliance boundary audits on files ingested into model context windows.",
      evidenceImpact: "Logs every prompt classification evaluation as a sealed cryptographic block in the trust register.",
      ownershipCorrelation: "Links data exposure risk metrics to specific active agent profiles in the Governance Graph."
    },
    {
      id: "DEFENDER",
      name: "Microsoft Defender",
      icon: Lock,
      category: "SECURITY",
      signalsCollected: "Device integrity reports, endpoint posture status, anomalous IP connections metadata.",
      governanceValue: "Intercepts and mitigates agentic command scripts targeting remote container endpoints.",
      trustImpact: "Stops rogue agent scripts from mutating underlying file systems or running malicious binaries.",
      evidenceImpact: "Validates and seals security signatures on all endpoint integrations for annual audits.",
      ownershipCorrelation: "Ties machine connection logs to direct prompt authorization footprints."
    },
    {
      id: "SERVICENOW",
      name: "ServiceNow",
      icon: Sliders,
      category: "WORKFLOW",
      signalsCollected: "Workflow ticket clearance records, IT policy constraints, unapproved change queues.",
      governanceValue: "Binds autonomous agents to strict IT change-control approvals before allowing runtime operations.",
      trustImpact: "Mitigates unguided infrastructure overrides, ensuring every automation matches an approved ticket.",
      evidenceImpact: "Attaches a validated audit trail containing original ServiceNow ticket IDs into the Evidence Vault.",
      ownershipCorrelation: "Traces automated system loops back to the employee who authorized and launched the ticket."
    },
    {
      id: "JIRA",
      name: "Jira Software",
      icon: Layers,
      category: "WORKFLOW",
      signalsCollected: "Task completion metrics, repository commit limits, software security clearance grades.",
      governanceValue: "Secures software generation workflows, preventing agents from writing code without task assignments.",
      trustImpact: "Validates code compilation limits, shielding software stacks from unapproved system modifications.",
      evidenceImpact: "Generates tamper-proof trace files showing task authorization vs. agent repository deliveries.",
      ownershipCorrelation: "Binds the generated agentic code directly to the developer profile assigned inside the tracker."
    },
    {
      id: "GITHUB",
      name: "GitHub Enterprise",
      icon: GitBranch,
      category: "WORKFLOW",
      signalsCollected: "Code pull requests, repository file access patterns, commit cryptographic signatures.",
      governanceValue: "Secures autonomous agent commits, proving that all code additions comply with standard pipeline rules.",
      trustImpact: "Mitigates backdoor exploits and uncertified script additions during automated pipeline assemblies.",
      evidenceImpact: "Secures immutable ledger entries showing the complete origin chain of every automated commits cycle.",
      ownershipCorrelation: "Maps repository actions directly to the authorized developer profile on Entra ID."
    },
    {
      id: "AZURE_OPENAI",
      name: "Azure OpenAI",
      icon: Cloud,
      category: "MODELS",
      signalsCollected: "Raw prompt tokens, model output completions, temperature grades, system instruction vectors.",
      governanceValue: "Provides granular API-level intercept controls on all Azure hosted model invocations.",
      trustImpact: "Halts adversarial prompt injections and system rule-override attempts in sub-10 milliseconds.",
      evidenceImpact: "Appends desaturated raw prompt logs of all model queries securely into the cryptographic vault.",
      ownershipCorrelation: "Binds model completion records back to the authorized corporate session that trigged the call."
    },
    {
      id: "OPENAI",
      name: "OpenAI API",
      icon: TerminalCircleIcon, // Using geometric model representation
      category: "MODELS",
      signalsCollected: "Model weights, temperature metrics, prompt text vectors, downstream file tool logs.",
      governanceValue: "Limits execution scopes, blocking models from sending private records to unapproved exterior APIs.",
      trustImpact: "Protects sensitive directories and user-identity boundaries from unguided external model drift.",
      evidenceImpact: "Maintains cryptographically secured files of all outbound API queries and returned states.",
      ownershipCorrelation: "Correlates external completions with individual user API keys mapped inside Bastion."
    },
    {
      id: "CLAUDE",
      name: "Anthropic Claude",
      icon: Brain,
      category: "MODELS",
      signalsCollected: "System prompt files, Claude context window sizes, output reasoning chains, tool-calling logs.",
      governanceValue: "Guarantees that Claude instances act within strict corporate safety boundaries and legal mandates.",
      trustImpact: "Validates reasoning chains, checking model intent outputs before commands execute on databases.",
      evidenceImpact: "Assembles validated PDF briefs of reasoning histories to satisfy financial fiduciary oversight.",
      ownershipCorrelation: "Binds autonomous Claude workers back to specialized corporate department owners."
    }
  ];

  const activeItem = integrations.find(item => item.id === activeId) || integrations[0];

  return (
    <section id="integration-ecosystem-section" className="bg-[#071524] border-y border-slate-800 py-24 px-6 relative overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,120,212,0.06)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none opacity-50" />
      <div className="absolute top-1/4 right-10 w-[500px] h-[300px] bg-[#0078D4]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full text-[10.1px] text-sky-400 font-mono font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#0078D4]" /> SECURE ECOSYSTEM PLUGINS
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4.5xl text-white tracking-tight leading-none text-center">
            Integration Ecosystem
          </h2>
          <p className="text-sm text-slate-350 max-w-xl mx-auto font-light leading-relaxed">
            Create premium, zero-latency connections across leading enterprise platforms to collect, normalize, and audit multi-hop security signals.
          </p>
        </div>

        {/* 2-Column Showcase Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive lists of cards categorized (Col Span 5) */}
          <div className="lg:col-span-5 bg-slate-950/40 p-4 rounded-3xl border border-white/5 flex flex-col justify-between max-h-[640px] overflow-y-auto scrollbar-thin">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black block p-2">
                ACTIVE CONNECTORS ({integrations.length})
              </span>

              <div className="space-y-2">
                {integrations.map((item) => {
                  const Icon = item.icon;
                  const isSelected = item.id === activeId;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveId(item.id)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 text-left select-none cursor-pointer ${
                        isSelected 
                          ? 'bg-[#0078D4]/10 border-[#0078D4] text-white shadow-md' 
                          : 'bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/60 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg border ${
                          isSelected ? 'bg-[#0078D4]/20 border-sky-500/30' : 'bg-white/5 border-white/5'
                        }`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-display font-bold text-xs uppercase tracking-wider block">
                          {item.name}
                        </span>
                      </div>
                      
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? 'text-[#0078D4] translate-x-1' : 'text-slate-500'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Inspector HUD (Col Span 7) */}
          <div className="lg:col-span-7 bg-slate-950 border border-white/5 p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-[0_20px_40px_rgba(0,120,212,0.06)]">
            {/* Top color bar */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-500 to-[#0078D4]" />
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#0078D4]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="space-y-8">
              {/* Header metadata */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="px-2.5 py-1 rounded inline-flex items-center gap-1 text-[9px] font-mono font-bold uppercase bg-[#0078D4]/10 border border-[#0078D4]/20 text-sky-305">
                  CATEGORY: {activeItem.category}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  CONNECTOR: OK (TLS 1.3 SECURE)
                </span>
              </div>

              {/* Title layout */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 text-white rounded-xl border border-white/10">
                  <activeItem.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                    {activeItem.name} Connector
                  </h3>
                  <p className="text-xs text-teal-400 font-mono uppercase">
                    Strategic Integration Blueprint
                  </p>
                </div>
              </div>

              {/* Detailed 5 Metrics block requested in PDF page 9 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* 1. Signals collected */}
                <div className="bg-slate-900 border border-white/5 p-4 rounded-xl flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[8.5px] font-mono text-sky-400 font-bold uppercase tracking-widest block">
                      📡 Signals Collected:
                    </span>
                    <p className="text-[11.5px] text-slate-205 leading-relaxed font-light">
                      {activeItem.signalsCollected}
                    </p>
                  </div>
                </div>

                {/* 2. Governance value */}
                <div className="bg-slate-900 border border-white/5 p-4 rounded-xl flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[8.5px] font-mono text-[#0078D4] font-bold uppercase tracking-widest block">
                      ⚖️ Governance Value:
                    </span>
                    <p className="text-[11.5px] text-slate-205 leading-relaxed font-light">
                      {activeItem.governanceValue}
                    </p>
                  </div>
                </div>

                {/* 3. Trust impact */}
                <div className="bg-slate-900 border border-white/5 p-4 rounded-xl flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[8.5px] font-mono text-teal-400 font-bold uppercase tracking-widest block">
                      🛡️ Trust Impact:
                    </span>
                    <p className="text-[11.5px] text-slate-205 leading-relaxed font-light">
                      {activeItem.trustImpact}
                    </p>
                  </div>
                </div>

                {/* 4. Evidence impact */}
                <div className="bg-slate-900 border border-white/5 p-4 rounded-xl flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[8.5px] font-mono text-purple-400 font-bold uppercase tracking-widest block">
                      📁 Evidence Impact:
                    </span>
                    <p className="text-[11.5px] text-slate-205 leading-relaxed font-light">
                      {activeItem.evidenceImpact}
                    </p>
                  </div>
                </div>

                {/* 5. Ownership correlation */}
                <div className="bg-slate-900 border border-white/5 p-4 rounded-xl sm:col-span-2">
                  <div className="space-y-1">
                    <span className="text-[8.5px] font-mono text-amber-400 font-bold uppercase tracking-widest block">
                      👥 Ownership Correlation:
                    </span>
                    <p className="text-[11.5px] text-slate-205 leading-relaxed font-normal">
                      {activeItem.ownershipCorrelation}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom summary indicator */}
            <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
              <p className="text-slate-400 font-light font-mono">
                &gt; Secure Link Status: ACTIVE Handshake Verified
              </p>
              
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9.5px] font-mono font-bold text-emerald-400 uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> NATIVE DRIVER
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// Simple internal icon helper representing geometric layouts
function TerminalCircleIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m14 10-4 4" />
      <path d="m10 10 4 4" />
    </svg>
  );
}
