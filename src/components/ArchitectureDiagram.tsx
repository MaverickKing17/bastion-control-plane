import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  GitBranch, 
  Cpu, 
  Database, 
  Layers, 
  Network, 
  Key, 
  ExternalLink,
  ChevronRight,
  FileCheck2,
  AlertOctagon,
  SearchCode,
  BarChart4,
  Briefcase
} from 'lucide-react';

export default function ArchitectureDiagram() {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  const pipelineStages = [
    {
      id: 'ecosystem',
      name: 'Enterprise Ecosystem',
      desc: 'Standard enterprise systems securing raw server environments, networks, active directory permissions, and codebase repos.',
      tech: 'Ingests logs from Microsoft Entra ID, Sentinel, Purview, Defender, ServiceNow, Jira, and GitHub.',
      color: 'border-slate-700 text-slate-300'
    },
    {
      id: 'connectors',
      name: 'Bastion Connectors',
      desc: 'Secure read-only API connectors linking Bastion directly to LLM provider gateways and corporate credentials.',
      tech: 'Collects intermediate prompts, output completions, token counts, and operational system configurations.',
      color: 'border-bastion-azure text-sky-450'
    },
    {
      id: 'normalization',
      name: 'Signal Normalization',
      desc: 'Correlates raw unstructured network outputs, prompt lengths, and API usage into unified security telemetries.',
      tech: 'Normalizes and filters vector inputs, isolating potential direct injections and credential abuse in milliseconds.',
      color: 'border-bastion-azure text-sky-400'
    },
    {
      id: 'graph',
      name: 'Governance Graph',
      desc: 'High-density relational nodes tracking cognitive maps, identity bounds, authorized tool access ratios, and data ownership.',
      tech: 'Resolves exact permission graphs, verifying which agents are talking to which backend SQL datastores.',
      color: 'border-emerald-500 text-emerald-400'
    },
    {
      id: 'engine',
      name: 'Trust Engine',
      desc: 'Continuous real-time cognitive behavior modeling, mapping intent risk scores, overprivilege thresholds, and alignment drift.',
      tech: 'Calculates continuous trust indexes, flagging deviations before they lead to unauthorized database exfiltrations.',
      color: 'border-bastion-azure text-white'
    },
    {
      id: 'vault',
      name: 'Evidence Vault',
      desc: 'Cryptographically sealed audit trails validating decisions, prompt trajectories, and compliance constraints.',
      tech: 'Appends SHA-256 blocks containing digital footprints of agent queries, creating tamper-proof SOC2 audit chains.',
      color: 'border-bastion-azure text-white'
    },
    {
      id: 'cases',
      name: 'Case Management',
      desc: 'Incident response desks, isolating critical cognitive violations and revoking active Entra ID tokens instantly.',
      tech: 'Coordinates API playbooks to isolate servers, lock corporate credit bounds, or alert the corporate CISO team.',
      color: 'border-rose-500 text-rose-450'
    },
    {
      id: 'reporting',
      name: 'Executive Reporting',
      desc: 'Real-time board-level risk analytics, compliance audits, and financial exposure overviews.',
      tech: 'Provides structured legal and regulatory proof of control logs for DORA, HIPAA, and custom banking audits.',
      color: 'border-bastion-azure text-white'
    }
  ];

  return (
    <div id="architecture-diagram" className="w-full bg-bastion-bg rounded-lg border border-bastion-border p-6 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial from-bastion-azure/5 to-transparent pointer-events-none" />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-bastion-border pb-4">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-bastion-azure font-bold uppercase">Technical Framework</span>
          <h3 className="text-lg font-bold text-white mt-1">Platform Architecture Overview</h3>
          <p className="text-xs text-bastion-text-muted mt-0.5">Bastion sits cleanly above your existing ecosystem to monitor, verify, and govern autonomous AI agents.</p>
        </div>
        <div className="text-[10px] font-mono text-bastion-text-muted bg-bastion-bg-secondary border border-bastion-border px-2.5 py-1 rounded">
          Hover stages to trace signal pipelines
        </div>
      </div>

      {/* Main Flow Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative">
        
        {/* Box 1: Enterprise Ecosystem (Col-span 3) */}
        <div className="lg:col-span-3 bg-bastion-bg-secondary/40 border border-bastion-border rounded-lg p-4 space-y-3 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold text-slate-300 font-mono flex items-center gap-1.5 uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Enterprise Ecosystem
            </h4>
            <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">Existing security boundaries protecting legacy virtual infrastructure logs, servers, and databases.</p>
            
            {/* Integrated Systems Stack */}
            <div className="space-y-1.5 text-[11.5px]">
              {[
                { name: 'Microsoft Entra ID', status: 'Binds Identity' },
                { name: 'Microsoft Sentinel', status: 'Security Logs' },
                { name: 'Microsoft Purview', status: 'Data Policy' },
                { name: 'Microsoft Defender', status: 'Threat Intel' },
                { name: 'ServiceNow CRM', status: 'Workflows' },
                { name: 'Jira Software', status: 'Issue Tracking' },
                { name: 'GitHub Enterprise', status: 'Code Origin' },
                { name: 'Azure OpenAI Gateways', status: 'Base LLMs' }
              ].map((sys, i) => (
                <div key={i} className="flex justify-between items-center py-1.5 px-3 bg-[#081827] border border-bastion-border/40 rounded text-slate-300 hover:text-white hover:border-bastion-border/80 transition-all font-mono text-[10px]">
                  <span>{sys.name}</span>
                  <span className="text-[9px] text-[#8fa3b7]/70 font-light">{sys.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-bastion-border/40 text-[10px] text-bastion-text-muted leading-snug">
            Standard systems secure structural infrastructure. Bastion sits vertically on top to secure cognitive agent choices.
          </div>
        </div>

        {/* Dynamic Connector Arrows (Col-span 1) */}
        <div className="lg:col-span-1 flex flex-col justify-center items-center py-4 lg:py-0">
          <div className="w-full flex lg:flex-col items-center justify-center gap-2">
            <div className="h-0.5 lg:h-12 w-10 lg:w-0.5 bg-gradient-to-r lg:bg-gradient-to-b from-slate-500 to-bastion-azure" />
            <span className="text-[10px] font-mono text-bastion-azure uppercase font-bold tracking-widest text-center px-1">Connect</span>
            <div className="h-0.5 lg:h-12 w-10 lg:w-0.5 bg-gradient-to-r lg:bg-gradient-to-b from-bastion-azure to-emerald-500" />
          </div>
        </div>

        {/* Box 2: Bastion Core Engine & Control Logic (Col-span 8) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Top Level Pipeline Chain */}
          <div className="bg-bastion-bg-secondary/40 border border-bastion-border rounded-lg p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-widest">Active Pipeline</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <h4 className="text-xs font-bold text-white uppercase font-mono">Cognitive Signal processing</h4>
              <p className="text-[11px] text-bastion-text-muted mt-0.5">Continuous ingestion and alignment pipeline protecting workflows.</p>
            </div>

            <div className="space-y-2.5">
              {[
                { step: '01', id: 'connectors', name: 'Bastion Connectors', role: 'Secure Read-Only Access' },
                { step: '02', id: 'normalization', name: 'Signal Normalization', role: 'Format, Filter, and Correlate' },
                { step: '03', id: 'graph', name: 'Governance Graph', role: 'Map Cognitive Intent Relationships' }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveStage(item.id)}
                  onMouseLeave={() => setActiveStage(null)}
                  className={`p-3 rounded border transition-all cursor-pointer ${
                    activeStage === item.id 
                      ? 'bg-bastion-bg-tertiary border-bastion-azure text-white relative shadow-lg scale-[1.02]'
                      : 'bg-bastion-bg border-bastion-border/60 hover:border-bastion-border text-slate-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] bg-bastion-bg-secondary font-mono text-bastion-azure h-5 w-5 rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </span>
                      <span className="text-xs font-semibold text-white">{item.name}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-bastion-text-muted" />
                  </div>
                  <p className="text-[10.5px] text-bastion-text-muted mt-1 font-mono tracking-wide">{item.role}</p>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-bastion-text-muted italic leading-normal">
              Signals are correlated in sub-seconds. Bastion analyzes agent behavior BEFORE it submits instructions to core tools or APIs.
            </p>
          </div>

          {/* Right Level Compliance Handlers */}
          <div className="bg-bastion-bg-secondary/40 border border-bastion-border rounded-lg p-5 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] font-mono text-bastion-azure uppercase font-bold tracking-widest block mb-1">Response Loop</span>
              <h4 className="text-xs font-bold text-white uppercase font-mono">Control Ring Policy</h4>
              <p className="text-[11px] text-bastion-text-muted mt-0.5">Enforces safety rules, generates audit logs, and coordinates compliance actions.</p>
            </div>

            <div className="space-y-2.5">
              {[
                { icon: ShieldCheck, id: 'engine', name: 'Trust Engine', focus: 'Real-time Risk Metrics' },
                { icon: FileCheck2, id: 'vault', name: 'Evidence Vault', focus: 'Sealed Audit Ledger Blocks' },
                { icon: AlertOctagon, id: 'cases', name: 'Case Management', focus: 'Quick Revoke & Isolation' },
                { icon: SearchCode, id: 'reporting', name: 'Executive Reporting', focus: 'Transparent CISO Summaries' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    onMouseEnter={() => setActiveStage(item.id)}
                    onMouseLeave={() => setActiveStage(null)}
                    className={`p-2.5 rounded border transition-all cursor-pointer flex items-center justify-between ${
                      activeStage === item.id 
                        ? 'bg-bastion-bg-tertiary border-bastion-azure text-white scale-[1.02]'
                        : 'bg-bastion-bg border-bastion-border/60 hover:border-bastion-hover text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-bastion-bg-secondary rounded flex items-center justify-center text-bastion-azure">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-white block">{item.name}</span>
                        <span className="text-[10px] text-bastion-text-muted font-mono">{item.focus}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-bastion-text-muted" />
                  </div>
                );
              })}
            </div>

            <p className="text-[10px] text-bastion-text-muted italic">
              Acts as the central command ring, stopping agents before they create regulatory breach or exposure.
            </p>
          </div>

        </div>

      </div>

      {/* Popover Live Inspector on State Hover */}
      <div className="mt-6 p-4 rounded-lg bg-bastion-bg-secondary border border-bastion-border min-h-[90px] flex items-center transition-all bg-gradient-to-r from-bastion-bg-secondary to-[#0b1b2f]">
        {activeStage ? (
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bastion-azure" />
              <strong className="text-xs text-white uppercase font-mono tracking-wider">
                Pipeline Node: {pipelineStages.find(p => p.id === activeStage)?.name}
              </strong>
            </div>
            <p className="text-xs text-white mt-1 leading-relaxed">{pipelineStages.find(p => p.id === activeStage)?.desc}</p>
            <p className="text-[10px] text-bastion-azure-light font-mono mt-1">&gt; Technology Profile: {pipelineStages.find(p => p.id === activeStage)?.tech}</p>
          </div>
        ) : (
          <div className="text-center w-full my-auto">
            <p className="text-[11px] text-bastion-text-muted italic flex items-center justify-center gap-2">
              <Network className="w-4 h-4 text-bastion-azure" /> Place cursor over any pipeline stage above to dissect continuous signals and active compliance workflows.
            </p>
          </div>
        )}
      </div>

      {/* Row of Outcomes at the bottom */}
      <div className="mt-6 border-t border-bastion-border pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="p-3.5 bg-bastion-bg rounded-lg border border-bastion-border/40 flex items-start gap-3">
          <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
            <FileCheck2 className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-semibold text-white">Continuous Audit Readiness</h5>
            <p className="text-[11px] text-bastion-text-muted mt-0.5 leading-normal">Creates tamper-proof, cryptographic logs of agent behavior, simplifying compliance with SOC2, GDPR, and financial audits.</p>
          </div>
        </div>

        <div className="p-3.5 bg-bastion-bg rounded-lg border border-bastion-border/40 flex items-start gap-3">
          <div className="p-2 bg-sky-500/10 text-sky-400 rounded-lg">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-semibold text-white">Cognitive Risk Reduction</h5>
            <p className="text-[11px] text-bastion-text-muted mt-0.5 leading-normal">Proactively monitors LLM prompt boundary drift and isolates security compromises before harmful actions execute.</p>
          </div>
        </div>

        <div className="p-3.5 bg-bastion-bg rounded-lg border border-bastion-border/40 flex items-start gap-3">
          <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-semibold text-white">Full Regulatory Confidence</h5>
            <p className="text-[11px] text-bastion-text-muted mt-0.5 leading-normal">Bridges legacy enterprise security frameworks directly into modern AI layers, proving absolute accountability to boards and regulators.</p>
          </div>
        </div>

      </div>

    </div>
  );
}
