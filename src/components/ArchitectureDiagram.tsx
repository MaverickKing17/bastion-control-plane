import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Briefcase,
  Radio,
  Server,
  Terminal,
  Fingerprint,
  Sliders,
  Workflow,
  Lock,
  Compass,
  CheckCircle2,
  Activity
} from 'lucide-react';

export default function ArchitectureDiagram() {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  const pipelineStages = [
    {
      id: 'ecosystem',
      name: 'Enterprise Ecosystem',
      desc: 'Standard physical and digital security boundaries protecting raw server infrastructure, identity nodes, directory maps, and network boundaries.',
      tech: 'Microsoft Security Suite integration + ServiceNow DevOps endpoints + GitHub secure code origin gates.',
      color: 'border-slate-500/30 text-slate-200',
      accentColor: 'text-slate-400',
      glow: 'shadow-[0_0_20px_rgba(148,163,184,0.15)] border-slate-400/40',
      iconColor: 'bg-slate-500/10 text-slate-300',
      metrics: [
        { label: 'INGEST ENDPOINTS', val: '8 Core Integrations' },
        { label: 'LOG INTEGRITY', val: 'Fiduciary Enforced' }
      ]
    },
    {
      id: 'connectors',
      name: 'Bastion Connectors',
      desc: 'Zero-trust proxy gateway linking agent runtimes directly to LLM endpoints and container networks.',
      tech: 'gRPC Secure proxies + OAuth authorization + encrypted connection boundaries.',
      color: 'border-cyan-500/30 text-cyan-200',
      accentColor: 'text-cyan-400',
      glow: 'shadow-[0_0_20px_rgba(6,182,212,0.35)] border-cyan-400/50 bg-[#06182c]/40',
      iconColor: 'bg-cyan-500/10 text-cyan-400',
      metrics: [
        { label: 'GATEWAY SECURITY', val: 'gRPC Secure' },
        { label: 'LATENCY CORE', val: '< 0.3ms' }
      ]
    },
    {
      id: 'normalization',
      name: 'Signal Normalization',
      desc: 'High-speed normalizer structuring agent intents, prompt lengths, and API usage into readable safety telemetries.',
      tech: 'Regex sanitation arrays + unified telemetry format engines + local cache lookup dictionaries.',
      color: 'border-purple-500/30 text-purple-200',
      accentColor: 'text-purple-400',
      glow: 'shadow-[0_0_20px_rgba(168,85,247,0.35)] border-purple-400/50 bg-[#16082c]/40',
      iconColor: 'bg-purple-500/10 text-purple-400',
      metrics: [
        { label: 'SANITIZE RATE', val: 'Sub-millisecond' },
        { label: 'CACHE RETENTION', val: 'Zero Data Local' }
      ]
    },
    {
      id: 'graph',
      name: 'Governance Graph',
      desc: 'Dynamic semantic authorization model mapping active credentials to allowable cognitive database fields.',
      tech: 'Relational knowledge map resolvers + SQL boundary protection matrices.',
      color: 'border-emerald-500/30 text-emerald-200',
      accentColor: 'text-emerald-400',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.35)] border-emerald-400/50 bg-[#051e12]/40',
      iconColor: 'bg-emerald-500/10 text-emerald-400',
      metrics: [
        { label: 'MAPPING ACCURACY', val: '100% Relational' },
        { label: 'TRUST THRESHOLD', val: 'Fiducial Grade' }
      ]
    },
    {
      id: 'engine',
      name: 'Trust Engine',
      desc: 'Continuous real-time cognitive behavior monitoring tracking model drift, prompt injections, and infinite loops.',
      tech: 'Drift-variance analysis + loop containment logic veto mechanisms.',
      color: 'border-blue-300 text-blue-200',
      accentColor: 'text-blue-400',
      glow: 'shadow-[0_0_20px_rgba(59,130,246,0.35)] border-blue-400/50 bg-[#06152d]/40',
      iconColor: 'bg-blue-500/10 text-blue-400',
      metrics: [
        { label: 'VETO VELOCITY', val: '< 0.8ms average' },
        { label: 'DRIFT MONITOR', val: 'Dynamic Active' }
      ]
    },
    {
      id: 'vault',
      name: 'Evidence Vault',
      desc: 'Cryptographically sealed storage appending tamper-proof ledger logs of all cognitive inputs and vector queries.',
      tech: 'SHA-256 Block validations + immutable local audit ledgers.',
      color: 'border-fuchsia-300 text-fuchsia-200',
      accentColor: 'text-fuchsia-400',
      glow: 'shadow-[0_0_20px_rgba(217,70,239,0.35)] border-fuchsia-400/50 bg-[#1e051d]/40',
      iconColor: 'bg-fuchsia-500/10 text-fuchsia-400',
      metrics: [
        { label: 'LEDGER SECURITY', val: 'Immutable SHA-256' },
        { label: 'SLO PROTECTION', val: 'Zero Leak Guarantee' }
      ]
    },
    {
      id: 'cases',
      name: 'Case Management',
      desc: 'Automated policy enforcement orchestrator initiating prompt locks, threat isolation, or token revocations.',
      tech: 'Credential veto procedures + instant Entra ID API token deauthorization playbooks.',
      color: 'border-rose-300 text-rose-200',
      accentColor: 'text-rose-400',
      glow: 'shadow-[0_0_20px_rgba(244,63,94,0.35)] border-rose-400/50 bg-[#23040c]/40',
      iconColor: 'bg-rose-500/10 text-rose-400',
      metrics: [
        { label: 'ISOLATION DELAY', val: 'Immediate Veto' },
        { label: 'REVOKE ENGINE', val: 'Entra token reset' }
      ]
    },
    {
      id: 'reporting',
      name: 'Executive Reporting',
      desc: 'Corporate board-ready visualization dashboard tracking compliance indices and financial risk containment.',
      tech: 'Real-time DORA audit generators + CISO ledger synthesis reports.',
      color: 'border-amber-300 text-amber-200',
      accentColor: 'text-amber-400',
      glow: 'shadow-[0_0_20px_rgba(245,158,11,0.35)] border-amber-400/50 bg-[#1f1003]/40',
      iconColor: 'bg-amber-500/10 text-amber-400',
      metrics: [
        { label: 'COMPLIANCE GRADE', val: 'Fiduciary Audited' },
        { label: 'DORA EXPOSURE', val: '0% Regulatory Drifts' }
      ]
    }
  ];

  const currentStageInfo = pipelineStages.find(p => p.id === activeStage);

  return (
    <div id="architecture-diagram" className="w-full bg-[#030209] rounded-2xl border border-purple-500/10 p-6 md:p-8 relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
      {/* Background cyber grid & colorful vector mesh glows */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(147,51,234,0.08)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-80 z-0" />
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header telemetry and title block */}
      <div className="relative z-10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-8 border-b border-purple-500/20 pb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono font-bold text-purple-300 tracking-wider uppercase">
            <Sliders className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            VETO CONDUIT CLOUD RUNTIME
          </span>
          <h3 className="text-xl md:text-2xl font-display font-extrabold text-white mt-2 tracking-tight leading-none">
            Platform Architecture & Live Safeguard Conduit
          </h3>
          <p className="text-[13px] text-purple-200/60 mt-2 max-w-4xl font-normal leading-relaxed">
            Bastion sits transparently above standard legacy infrastructure logs and API gateways to monitor, intercept, and veto agent actions in real time.
          </p>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1.5 rounded-lg font-mono font-bold uppercase tracking-wide">
          <Activity className="w-3.5 h-3.5 animate-pulse text-cyan-400" /> Hover stages to visualize signal profiles
        </div>
      </div>

      {/* Main Flow Layout Bridge */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* LEFT COLUMN: Enterprise Ecosystem (Col-span 3) */}
        <div className="lg:col-span-3 bg-slate-950/60 border-2 border-yellow-400/90 shadow-[0_0_30px_rgba(234,179,8,0.35),0_12px_45px_rgba(0,0,0,0.6)] hover:border-yellow-300 hover:shadow-[0_0_45px_rgba(234,179,8,0.55),0_12px_45px_rgba(0,0,0,0.6)] rounded-xl p-5 space-y-4 flex flex-col justify-between backdrop-blur-md transition-all duration-300">
          <div>
            <div className="flex items-center gap-2 border-b border-purple-500/10 pb-3 mb-4">
              <div className="p-1.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-300">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
                  Enterprise Ecosystem
                </h4>
                <p className="text-[10px] text-purple-300/50 font-mono">PHYSICAL BOUNDARY</p>
              </div>
            </div>

            <p className="text-[12px] text-purple-200/75 mb-4 leading-relaxed font-light">
              Standard infrastructure tools, cloud servers, Active Directory identity vaults, and source control repositories.
            </p>
            
            {/* Colorful custom brand-themed integration pills stack */}
            <div className="space-y-2">
              {[
                { name: 'Microsoft Entra ID', status: 'Binds Identity', color: 'border-indigo-500/20 text-indigo-200 bg-indigo-500/5 hover:border-indigo-500/40 hover:bg-indigo-500/15' },
                { name: 'Microsoft Sentinel', status: 'Security Logs', color: 'border-cyan-500/20 text-cyan-200 bg-cyan-500/5 hover:border-cyan-500/40 hover:bg-cyan-500/15' },
                { name: 'Microsoft Purview', status: 'Data Policy', color: 'border-amber-500/20 text-amber-200 bg-amber-500/5 hover:border-amber-500/40 hover:bg-amber-500/15' },
                { name: 'Microsoft Defender', status: 'Threat Intel', color: 'border-rose-500/20 text-rose-200 bg-rose-500/5 hover:border-rose-500/40 hover:bg-rose-500/15' },
                { name: 'ServiceNow CRM', status: 'Workflows', color: 'border-emerald-500/20 text-emerald-200 bg-emerald-500/5 hover:border-emerald-500/40 hover:bg-emerald-500/15' },
                { name: 'Jira Software', status: 'Issue Tracking', color: 'border-sky-500/20 text-sky-200 bg-sky-500/5 hover:border-sky-500/40 hover:bg-sky-500/15' },
                { name: 'GitHub Enterprise', status: 'Code Origin', color: 'border-slate-500/20 text-slate-200 bg-slate-500/5 hover:border-slate-500/40 hover:bg-slate-500/15' },
                { name: 'Azure OpenAI Gateways', status: 'Base LLM layer', color: 'border-fuchsia-500/20 text-fuchsia-200 bg-fuchsia-500/5 hover:border-fuchsia-500/40 hover:bg-fuchsia-500/15' }
              ].map((sys, idx) => (
                <div 
                  key={idx} 
                  className={`flex justify-between items-center py-2 px-3 border rounded-lg transition-all duration-300 font-mono text-[10.5px] cursor-pointer group hover:shadow-xs shadow-[0_2px_4px_rgba(0,0,0,0.2)] ${sys.color}`}
                  onMouseEnter={() => setActiveStage('ecosystem')}
                  onMouseLeave={() => setActiveStage(null)}
                >
                  <span className="font-semibold group-hover:translate-x-0.5 transition-transform">{sys.name}</span>
                  <span className="text-[8.5px] px-1.5 py-0.5 rounded-full bg-slate-900 border border-white/5 opacity-80">{sys.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-purple-500/10 text-[10.5px] text-purple-200/40 leading-normal font-mono">
            Infrastructure layers protect physical bounds. Bastion interceptors guard agentic actions.
          </div>
        </div>

        {/* CENTER COLUMN: Interactive Animated Connector Conduit (Col-span 1) */}
        <div className="lg:col-span-1 flex flex-col justify-center items-center py-4 lg:py-0 relative">
          <div className="w-full flex lg:flex-col items-center justify-center gap-2 relative">
            {/* Glowing laser track */}
            <div className="h-1 lg:h-44 w-20 lg:w-1 bg-gradient-to-r lg:bg-gradient-to-b from-[#6366f1]/40 via-[#d946ef]/40 to-emerald-500/40 rounded-full relative overflow-hidden shadow-[0_0_15px_rgba(139,92,246,0.3)] border border-purple-500/10">
              {/* Dynamic light packet floaters */}
              <motion.div 
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="absolute h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4] hidden lg:block left-[-3px]"
              />
              <motion.div 
                animate={{ top: ["80%", "-10%"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                className="absolute h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7] hidden lg:block left-[-1.5px]"
              />
              {/* Horizontal version for mobile viewports */}
              <motion.div 
                animate={{ left: ["0%", "100%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                className="absolute h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4] block lg:hidden top-[-3px]"
              />
            </div>
            <span className="text-[10px] font-mono text-cyan-400 font-extrabold tracking-widest text-center px-1.5 py-0.5 bg-cyan-950/50 rounded border border-cyan-500/20 select-none animate-pulse">CONNECT</span>
          </div>
        </div>

        {/* RIGHT COLUMN: The Bastion Core Interceptor Engine (Col-span 8) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Box 1: Cognitive Signal processing (Cyan & Purple themes) */}
          <div className="bg-slate-950/60 border-2 border-yellow-400/90 shadow-[0_0_30px_rgba(234,179,8,0.35),0_12px_45px_rgba(0,0,0,0.6)] hover:border-yellow-300 hover:shadow-[0_0_45px_rgba(234,179,8,0.55),0_12px_45px_rgba(0,0,0,0.6)] rounded-xl p-5 flex flex-col justify-between space-y-4 backdrop-blur-md transition-all duration-300">
            <div>
              <div className="flex justify-between items-center border-b border-purple-500/10 pb-3 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-widest">Active Pipeline</span>
                </div>
                <span className="text-[9.5px] font-mono text-purple-300/40 bg-purple-950/30 px-2 py-0.5 rounded border border-purple-500/10">SUB-MILLISECOND INTERCEPT</span>
              </div>
              <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">Cognitive Signal processing</h4>
              <p className="text-[11px] text-purple-300/60 mt-1 leading-relaxed">Continuous ingestion and alignment pipeline sanitizing user-agent workflows.</p>
            </div>

            <div className="space-y-3">
              {[
                { 
                  step: '01', 
                  id: 'connectors', 
                  name: 'Bastion Connectors', 
                  role: 'Secure Zero-Trust Access', 
                  tech: 'LATENCY: <0.3ms',
                  themeColor: 'cyan',
                  accentColor: 'text-cyan-400 border-cyan-500/20'
                },
                { 
                  step: '02', 
                  id: 'normalization', 
                  name: 'Signal Normalization', 
                  role: 'Structure, Filter, and Correlate', 
                  tech: 'MAPPED: 140 Relational Vectors',
                  themeColor: 'purple',
                  accentColor: 'text-purple-400 border-purple-500/20'
                },
                { 
                  step: '03', 
                  id: 'graph', 
                  name: 'Governance Graph', 
                  role: 'Map Cognitive Intent Bounds', 
                  tech: 'COMPLY: Active Schema Guard',
                  themeColor: 'emerald',
                  accentColor: 'text-emerald-400 border-emerald-500/20'
                }
              ].map((item, idx) => {
                const isHovered = activeStage === item.id;
                let ringColor = 'border-purple-500/10 hover:border-purple-500/30 hover:bg-white/5 bg-[#07040e]/70';
                if (isHovered) {
                  if (item.themeColor === 'cyan') ringColor = 'border-cyan-500 bg-[#06182c]/70 shadow-[0_0_15px_rgba(6,182,212,0.4)]';
                  if (item.themeColor === 'purple') ringColor = 'border-purple-500 bg-[#12072f]/70 shadow-[0_0_15px_rgba(168,85,247,0.4)]';
                  if (item.themeColor === 'emerald') ringColor = 'border-emerald-500 bg-[#051c0e]/70 shadow-[0_0_15px_rgba(16,185,129,0.4)]';
                }

                return (
                  <div 
                    key={idx}
                    onMouseEnter={() => setActiveStage(item.id)}
                    onMouseLeave={() => setActiveStage(null)}
                    className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer text-slate-350 ${ringColor} ${isHovered ? 'scale-[1.02] -translate-y-0.5' : ''}`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className={`text-[10.5px] font-mono tracking-tight font-black h-5.5 w-5.5 rounded-full flex items-center justify-center border ${
                          item.themeColor === 'cyan' ? 'bg-cyan-950 text-cyan-400 border-cyan-500/30' :
                          item.themeColor === 'purple' ? 'bg-purple-950 text-purple-400 border-purple-500/30' :
                          'bg-emerald-950 text-emerald-400 border-emerald-500/30'
                        }`}>
                          {item.step}
                        </span>
                        <div>
                          <span className="text-[12.5px] font-extrabold text-white block tracking-wide">{item.name}</span>
                          <p className="text-[11px] text-purple-200/80 font-mono tracking-wide mt-0.5">{item.role}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-purple-300/40" />
                    </div>

                    {/* Telemetry metadata footer inside card */}
                    <div className="mt-2 text-[9px] font-mono flex items-center justify-between text-purple-300/50 bg-black/30 p-1.5 rounded-md border border-white/5">
                      <span className="uppercase">{item.tech}</span>
                      <span className="text-emerald-400 tracking-wider">● TELEMETRY STABLE</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-[10px] text-purple-300/50 font-mono italic leading-relaxed">
              &gt; Bastion validates agent behavior on endpoints BEFORE actions are pushed down to critical physical networks.
            </p>
          </div>

          {/* Box 2: Response Loop & Enforcement Rings */}
          <div className="bg-slate-950/60 border-2 border-yellow-400/90 shadow-[0_0_30px_rgba(234,179,8,0.35),0_12px_45px_rgba(0,0,0,0.6)] hover:border-yellow-300 hover:shadow-[0_0_45px_rgba(234,179,8,0.55),0_12px_45px_rgba(0,0,0,0.6)] rounded-xl p-5 flex flex-col justify-between space-y-4 backdrop-blur-md transition-all duration-300">
            <div>
              <div className="flex justify-between items-center border-b border-purple-500/10 pb-3 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-pink-400 uppercase font-bold tracking-widest">Response Loop</span>
                </div>
                <span className="text-[9.5px] font-mono text-pink-300/40 bg-pink-950/30 px-2 py-0.5 rounded border border-pink-500/10">ACTIVE CONTROL RULES</span>
              </div>
              <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">Control Ring Policy</h4>
              <p className="text-[11px] text-purple-300/60 mt-1 leading-relaxed">Enforces policy rules, anchors unforgeable ledger audits, and quarantines bad actions.</p>
            </div>

            <div className="space-y-3">
              {[
                { icon: ShieldCheck, id: 'engine', name: 'Trust Engine', focus: 'Real-time Drift Variance', tag: 'VETO: ACTIVE', themeColor: 'indigo' },
                { icon: FileCheck2, id: 'vault', name: 'Evidence Vault', focus: 'Immutable SHA-256 Ledger', tag: 'INTEGRITY: 100%', themeColor: 'fuchsia' },
                { icon: AlertOctagon, id: 'cases', name: 'Case Management', focus: 'Automated Revoke Playbooks', tag: 'ISOLATION: SECURE', themeColor: 'rose' },
                { icon: SearchCode, id: 'reporting', name: 'Executive Reporting', focus: 'Transparent DORA Compliance', tag: 'AUDITS: VERIFIED', themeColor: 'amber' }
              ].map((item, idx) => {
                const Icon = item.icon;
                const isHovered = activeStage === item.id;
                let ringColor = 'border-purple-500/10 hover:border-purple-500/30 hover:bg-white/5 bg-[#07040e]/70';
                if (isHovered) {
                  if (item.themeColor === 'indigo') ringColor = 'border-indigo-500 bg-[#08082c]/70 shadow-[0_0_15px_rgba(99,102,241,0.4)]';
                  if (item.themeColor === 'fuchsia') ringColor = 'border-fuchsia-500 bg-[#1d041e]/70 shadow-[0_0_15px_rgba(217,70,239,0.4)]';
                  if (item.themeColor === 'rose') ringColor = 'border-rose-500 bg-[#1c030d]/70 shadow-[0_0_15px_rgba(244,63,94,0.4)]';
                  if (item.themeColor === 'amber') ringColor = 'border-amber-500 bg-[#180e03]/70 shadow-[0_0_15px_rgba(245,158,11,0.4)]';
                }

                return (
                  <div 
                    key={idx}
                    onMouseEnter={() => setActiveStage(item.id)}
                    onMouseLeave={() => setActiveStage(null)}
                    className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${ringColor} ${isHovered ? 'scale-[1.02] -translate-y-0.5' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center border shadow-xs ${
                        item.themeColor === 'indigo' ? 'bg-indigo-950 border-indigo-500/20 text-indigo-400' :
                        item.themeColor === 'fuchsia' ? 'bg-fuchsia-950 border-fuchsia-500/20 text-fuchsia-400' :
                        item.themeColor === 'rose' ? 'bg-rose-950 border-rose-500/20 text-rose-400' :
                        'bg-amber-950 border-amber-500/20 text-amber-500'
                      }`}>
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[12.5px] font-extrabold text-white block tracking-wide">{item.name}</span>
                        <span className="text-[10.5px] text-purple-200/70 font-mono block">{item.focus}</span>
                      </div>
                    </div>
                    
                    {/* Visual metadata micro tag */}
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-mono font-black border ${
                        item.themeColor === 'indigo' ? 'bg-indigo-950/40 text-indigo-300 border-indigo-500/20' :
                        item.themeColor === 'fuchsia' ? 'bg-fuchsia-950/40 text-fuchsia-300 border-fuchsia-500/20' :
                        item.themeColor === 'rose' ? 'bg-rose-950/40 text-rose-300 border-rose-500/20 animate-pulse' :
                        'bg-amber-950/40 text-amber-300 border-amber-500/20'
                      }`}>
                        {item.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-[10px] text-purple-300/50 font-mono italic leading-relaxed">
              &gt; Bastion acts as the supreme corporate veto lock, preventing dynamic agents from executing malicious API commands.
            </p>
          </div>

        </div>

      </div>

      {/* Dynamic Popover Real-Time Telemetry Inspector HUD */}
      <div className="mt-8 p-5 rounded-2xl bg-slate-950/40 border border-purple-500/20 min-h-[140px] relative overflow-hidden flex flex-col justify-center transition-all bg-gradient-to-r from-slate-950 via-[#11082d]/80 to-[#0e162f]/80 shadow-[inset_0_2px_15px_rgba(139,92,246,0.1)] backdrop-blur-md">
        {/* Holographic scanner aesthetic edge bar */}
        <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-rose-600 animate-pulse" />
        
        <AnimatePresence mode="wait">
          {activeStage ? (
            <motion.div 
              key={activeStage}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full"
            >
              <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">
                <div className="space-y-2 max-w-2xl py-1 pl-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <strong className="text-sm text-white uppercase font-mono tracking-widest flex items-center gap-1.5">
                      <Terminal className="w-4.5 h-4.5 text-cyan-400" />
                      Active Node Readout // {currentStageInfo?.name}
                    </strong>
                    <span className="text-[9px] bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded uppercase font-mono font-bold tracking-wider">
                      STATUS_STABLE
                    </span>
                  </div>
                  <p className="text-[13px] text-purple-100 font-light leading-relaxed">{currentStageInfo?.desc}</p>
                  <p className="text-[10.5px] text-cyan-400 font-mono tracking-wide">&gt; Secure Profile: {currentStageInfo?.tech}</p>
                </div>

                {/* Simulated Diagnostic Gauges */}
                <div className="grid grid-cols-2 gap-3 min-w-[240px] flex-shrink-0 bg-black/40 p-3 rounded-xl border border-purple-500/10">
                  {currentStageInfo?.metrics.map((m, id) => (
                    <div key={id} className="space-y-1">
                      <span className="text-[9px] font-mono text-purple-300/50 block font-semibold uppercase">{m.label}</span>
                      <span className="text-xs font-mono font-extrabold text-white">{m.val}</span>
                      <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-white/5">
                        <div className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full w-4/5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="fallback-hud"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center w-full py-4 relative z-10"
            >
              <p className="text-[12px] text-purple-200/50 italic flex items-center justify-center gap-2.5 font-mono">
                <Compass className="w-5 h-5 text-cyan-400 animate-pulse" /> Place cursor over any pipeline nodes or system integration components above to analyze real-time secure telemetry tracks.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Row of Outcomes at the bottom */}
      <div className="mt-8 border-t border-purple-500/20 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Colorful Card 1: Continuous Audit Readiness */}
        <div className="group relative p-5 bg-[#0f0923]/60 rounded-xl border border-purple-500/10 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] overflow-hidden">
          {/* Top border glowing slide */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-start gap-3.5 relative z-10">
            <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20 shadow-inner group-hover:scale-110 transition-transform">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h5 className="text-[13.5px] font-bold text-white tracking-wide">Continuous Audit Readiness</h5>
              <p className="text-[11.5px] text-purple-200/60 leading-relaxed font-light">
                Creates cryptographically unforgeable ledger audits containing every agent input and query trajectory, ensuring simple compliance readiness for SOC2, DORA, and central bank parameters.
              </p>
            </div>
          </div>
        </div>

        {/* Colorful Card 2: Cognitive Risk Reduction */}
        <div className="group relative p-5 bg-[#0f0923]/60 rounded-xl border border-purple-500/10 transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)] overflow-hidden">
          {/* Top border glowing slide */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-60 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-start gap-3.5 relative z-10">
            <div className="p-2.5 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20 shadow-inner group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h5 className="text-[13.5px] font-bold text-white tracking-wide">Cognitive Risk Reduction</h5>
              <p className="text-[11.5px] text-purple-200/60 leading-relaxed font-light">
                Failsafe model isolation rings monitor, intercept, and veto recursive system cascades, prompt containment deviations, loop storms, and overprivileged API actions in milliseconds.
              </p>
            </div>
          </div>
        </div>

        {/* Colorful Card 3: Full Regulatory Confidence */}
        <div className="group relative p-5 bg-[#0f0923]/60 rounded-xl border border-purple-500/10 transition-all duration-300 hover:border-rose-500/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(244,63,94,0.1)] overflow-hidden">
          {/* Top border glowing slide */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-amber-500 opacity-60 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-start gap-3.5 relative z-10">
            <div className="p-2.5 bg-rose-500/10 text-rose-400 rounded-xl border border-rose-500/20 shadow-inner group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h5 className="text-[13.5px] font-bold text-white tracking-wide">Full Regulatory Confidence</h5>
              <p className="text-[11.5px] text-purple-200/60 leading-relaxed font-light">
                Bridges physical infrastructure parameters perfectly into modern cognitive layers. Delivers unified assurance templates directly to C-suite, board members, and regulatory auditors alike.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
