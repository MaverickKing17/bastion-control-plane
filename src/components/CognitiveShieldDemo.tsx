import { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Sliders, 
  HelpCircle, 
  CheckCircle2, 
  Database, 
  Activity, 
  Key, 
  Sparkles, 
  FileText, 
  AlertTriangle,
  RotateCcw,
  Zap
} from 'lucide-react';

interface NodeDetails {
  id: string;
  name: string;
  badge: string;
  shortDesc: string;
  benefit: string;
  techDetails: string;
  status: 'active' | 'warning' | 'safe';
  stats: { label: string; value: string }[];
  accentColor: string;
}

export default function CognitiveShieldDemo() {
  const [activeNode, setActiveNode] = useState<string>('BASTION_CORE');
  const [threatLevel, setThreatLevel] = useState<number>(10); // 10% - 100%
  const [simulationActive, setSimulationActive] = useState<boolean>(false);
  const [overrideActive, setOverrideActive] = useState<boolean>(false);

  const nodes: Record<string, NodeDetails> = {
    BASTION_CORE: {
      id: 'BASTION_CORE',
      name: 'Bastion Cognitive Core',
      badge: 'Supreme Command Hub',
      shortDesc: 'The central security engine executing real-time semantic alignment checks, transaction intercepts, and agent state monitoring.',
      benefit: 'Serves as your single, centralized point of trust, preventing AI model decision failures before they can hit your legacy systems.',
      techDetails: 'Runs parallel with model generation, inspecting outputs against prompt state trees using isolated runtime environments.',
      status: 'active',
      accentColor: 'from-indigo-500 to-indigo-600 shadow-indigo-500/20',
      stats: [
        { label: 'System Integrity', value: '99.99%' },
        { label: 'Evaluation Latency', value: '< 4.2ms' },
        { label: 'Orchestrator State', value: 'ACTIVE MONITOR' }
      ]
    },
    CERTIFICATION: {
      id: 'CERTIFICATION',
      name: 'Cryptographic Alignment Certs',
      badge: 'Pre-Flight Validator',
      shortDesc: 'A cryptographically signed token proving that the agent is fully authorized and certified to execute its precise scheduled task.',
      benefit: 'Blocks uncertified, unapproved, or compromised custom LLM pipelines from running operations in sensitive client zones.',
      techDetails: 'Undergoes automatic static analysis checking weight origins and prompt configuration SHA strings on startup.',
      status: 'safe',
      accentColor: 'from-blue-500 to-blue-600 shadow-blue-500/20',
      stats: [
        { label: 'Cert Authority', value: 'Bastion CA v3.1' },
        { label: 'Status Code', value: 'VALID & COMMITTED' },
        { label: 'Revocation Check', value: 'Passed (0.8ms)' }
      ]
    },
    ENTRA_CRED: {
      id: 'ENTRA_CRED',
      name: 'Entra ID Identity Binding',
      badge: 'Zero Trust Authorization',
      shortDesc: 'An enterprise bind that links the autonomous agent\'s session directly back to a verified Microsoft Entra/Aad employee profile.',
      benefit: 'Eliminates liability. Establishes perfect human proxy records, ensuring the model never acts beyond its human holder\'s clearance.',
      techDetails: 'Intercepts downstream tokens and appends OAuth claims mapping, matching client credentials to standard IAM profiles.',
      status: 'safe',
      accentColor: 'from-[#0078D4] to-[#005a9e] shadow-[#0078D4]/20',
      stats: [
        { label: 'Identity Provider', value: 'Microsoft Entra ID' },
        { label: 'Session Bind', value: 'Proxy: KingNarmer (CISO)' },
        { label: 'Claims Verified', value: 'ISO-Auditor, Compliance-Lead' }
      ]
    },
    OP_LIMIT: {
      id: 'OP_LIMIT',
      name: 'Physical Operational Thresholds',
      badge: 'Execution Boundary',
      shortDesc: 'Rigid spatial limits, rate restrictions, and dollar spending caps hardcoded completely outside the LLM context window.',
      benefit: 'Guarantees the agent can never place millions in mock orders or overload endpoints, even if completely corrupted by prompt injects.',
      techDetails: 'Enforced at the network interface layer. Bypasses model reasoning, injecting absolute physical execution gates.',
      status: threatLevel > 60 ? 'warning' : 'safe',
      accentColor: threatLevel > 60 ? 'from-amber-550 to-amber-600 shadow-amber-500/20' : 'from-[#10b981] to-[#059669] shadow-emerald-500/20',
      stats: [
        { label: 'Transaction Cap', value: '$500,000 USD' },
        { label: 'Active Rate Limit', value: '60 calls / min' },
        { label: 'Safety Margin', value: threatLevel > 60 ? 'RECALIBRATING...' : '100% SECURE' }
      ]
    },
    EVIDENCE_LOG: {
      id: 'EVIDENCE_LOG',
      name: 'Sealed Cryptographic Ledger',
      badge: 'Compliance Proof vault',
      shortDesc: 'A tamper-proof, write-once database that appends SHA-256 blocks containing every single context prompt and decision trace.',
      benefit: 'Provides perfect math-based evidence archives to easily satisfy SEC regulations and pass external SOC2 compliance checks.',
      techDetails: 'Records inputs, raw model logits, selected tool params, and outputs. Highly encrypted at the ledger block-level.',
      status: 'safe',
      accentColor: 'from-cyan-500 to-cyan-600 shadow-cyan-500/20',
      stats: [
        { label: 'Logs Contained', value: '18,485 Records' },
        { label: 'Crypto Anchor', value: 'SHA-256 (0x7a8e...39bf)' },
        { label: 'Audit Status', value: 'SEC 17a-4 COMPLIANT' }
      ]
    },
    GUARDRAIL_VETO: {
      id: 'GUARDRAIL_VETO',
      name: 'Instant Intercept Veto',
      badge: 'Cognitive Emergency Brake',
      shortDesc: 'Our lightning-fast intercept layer that analyzes intermediate semantic intents and aborts malicious operations on the fly.',
      benefit: 'Acts as your safety safety net, instantly locking down compromised sessions in under 5 milliseconds.',
      techDetails: 'Uses semantic distance checks against our pre-calculated risk matrices to catch drift in realtime.',
      status: threatLevel > 80 ? 'warning' : 'active',
      accentColor: threatLevel > 80 ? 'from-rose-500 to-rose-600 shadow-rose-500/20' : 'from-indigo-600 to-indigo-700 shadow-indigo-600/20',
      stats: [
        { label: 'Intercept Latency', value: '3.9 milliseconds' },
        { label: 'Policy Sets Loaded', value: '142 Rules' },
        { label: 'Active Shield Ring', value: threatLevel > 80 ? 'IMMEDIATE VETO TRIGGER' : 'DEFEND_STANDBY' }
      ]
    },
    DB_ROW_LIMIT: {
      id: 'DB_ROW_LIMIT',
      name: 'Database Row Safety Bounds',
      badge: 'Data Leakage Shield',
      shortDesc: 'Hard boundaries limiting the depth, count, and size of database query results mapped from unguided agent queries.',
      benefit: 'Guarantees that a compromised or drifting LLM cannot secretly dump your entire client directory or exfiltrate private DB blocks.',
      techDetails: 'Validates SQL/NoSQL AST query structures prior to compilation. Caps return counts outside client runtime parameters.',
      status: 'safe',
      accentColor: 'from-purple-500 to-purple-600 shadow-purple-500/20',
      stats: [
        { label: 'Max Row Read Cap', value: '50 Rows / Query' },
        { label: 'Data Leak Defense', value: 'Active Integrity' },
        { label: 'Mutations Guard', value: 'Enforced' }
      ]
    }
  };

  const handleTestSimulation = () => {
    setSimulationActive(true);
    setThreatLevel(90);
    setTimeout(() => {
      setOverrideActive(true);
      setTimeout(() => {
        setSimulationActive(false);
        setOverrideActive(false);
        setThreatLevel(15);
      }, 3500);
    }, 1500);
  };

  const active = nodes[activeNode] || nodes.BASTION_CORE;

  return (
    <div className="w-full bg-slate-950 border border-slate-800/90 rounded-3xl p-6 lg:p-8 shadow-[0_24px_60px_rgba(3,7,18,0.7)] text-slate-100 relative overflow-hidden">
      {/* Decorative top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500" />
      
      {/* Dynamic glow points based on state */}
      <div className="absolute -top-12 -right-12 w-[250px] h-[250px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-[250px] h-[250px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Main explanation text blocks inside this specialized component */}
      <div className="mb-6 pb-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-300 font-mono font-bold uppercase tracking-wider mb-2">
            <Zap className="w-3 h-3 text-indigo-400 animate-pulse" /> Unified Security Architecture
          </div>
          <h2 className="text-lg md:text-xl font-bold font-display text-white tracking-tight">
            The Bastion Cognitive Shield Topology
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-xl font-light">
            An interactive diagram mapping our multi-layered defense. Autonomous AI agents operate within this secure boundaries framework, enforcing hard containment rules at every stage.
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[10.5px] font-mono text-emerald-400 tracking-wider">CISO CONTROL: ENGAGED</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Aspect: The beautiful SVG Hexagon Widget */}
        <div className="lg:col-span-6 flex flex-col items-center justify-between bg-slate-900/40 border border-white/5 rounded-2xl p-4 md:p-6 relative">
          
          <div className="w-full flex justify-between items-center text-[10px] font-mono text-slate-400 pb-3 border-b border-white/5">
            <span>NETWORK SCHEMATIC v1.0.4</span>
            <span className="text-indigo-400 font-semibold">{simulationActive ? '🔥 DETECTING OVERRIDE...' : '● STANDBY'}</span>
          </div>

          <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center py-6">
            
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            
            {/* Hover help */}
            <div className="absolute bottom-1 text-[9.5px] font-mono text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/5">
              Click elements to inspect safety benefits
            </div>

            {/* Glowing Bastion Custom SVG Logo Shield Graph */}
            <svg viewBox="0 0 400 400" className="w-full h-full relative z-10 overflow-visible">
              
              {/* Pulsing connections */}
              <g stroke="#3730a3" strokeWidth="1.5">
                <line 
                  x1="200" y1="80" x2="300" y2="120" 
                  className={`transition-all duration-300 ${activeNode === 'CERTIFICATION' || activeNode === 'OP_LIMIT' ? 'stroke-indigo-400 stroke-[2.5]' : 'opacity-65'}`} 
                />
                <line 
                  x1="300" y1="120" x2="300" y2="240" 
                  className={`transition-all duration-300 ${activeNode === 'OP_LIMIT' || activeNode === 'EVIDENCE_LOG' ? 'stroke-indigo-400 stroke-[2.5]' : 'opacity-65'}`} 
                />
                <line 
                  x1="300" y1="240" x2="200" y2="320" 
                  className={`transition-all duration-300 ${activeNode === 'EVIDENCE_LOG' || activeNode === 'GUARDRAIL_VETO' ? 'stroke-indigo-400 stroke-[2.5]' : 'opacity-65'}`} 
                />
                <line 
                  x1="200" y1="320" x2="100" y2="240" 
                  className={`transition-all duration-300 ${activeNode === 'GUARDRAIL_VETO' || activeNode === 'DB_ROW_LIMIT' ? 'stroke-indigo-400 stroke-[2.5]' : 'opacity-65'}`} 
                />
                <line 
                  x1="100" y1="240" x2="100" y2="120" 
                  className={`transition-all duration-300 ${activeNode === 'DB_ROW_LIMIT' || activeNode === 'ENTRA_CRED' ? 'stroke-indigo-400 stroke-[2.5]' : 'opacity-65'}`} 
                />
                <line 
                  x1="100" y1="120" x2="200" y2="80" 
                  className={`transition-all duration-300 ${activeNode === 'ENTRA_CRED' || activeNode === 'CERTIFICATION' ? 'stroke-indigo-400 stroke-[2.5]' : 'opacity-65'}`} 
                />

                {/* Inner diagonal cross lines */}
                <line 
                  x1="200" y1="80" x2="200" y2="320" 
                  strokeDasharray="4 4" 
                  className={`transition-all duration-300 ${activeNode === 'BASTION_CORE' ? 'stroke-indigo-400/90' : 'opacity-40'}`} 
                />
                <path 
                  d="M 200,80 Q 280,140 200,200 Q 280,260 200,320" 
                  fill="none" 
                  stroke={activeNode === 'BASTION_CORE' ? '#6366f1' : '#312e81'} 
                  strokeWidth={activeNode === 'BASTION_CORE' ? '4' : '2'} 
                  className="transition-all duration-300" 
                />
                <line x1="100" y1="180" x2="200" y2="200" className="opacity-40" />
                <line x1="300" y1="180" x2="200" y2="200" className="opacity-40" />
              </g>

              {/* Glowing Interactive Nodes: clickable! */}
              {/* CERTIFICATION */}
              <g className="cursor-pointer group/node" onClick={() => setActiveNode('CERTIFICATION')}>
                <circle 
                  cx="200" cy="80" r="11" 
                  fill={activeNode === 'CERTIFICATION' ? '#6366f1' : '#030712'} 
                  stroke={activeNode === 'CERTIFICATION' ? '#fff' : '#4f46e5'} 
                  strokeWidth="2.5" 
                  className="transition-all duration-200 group-hover/node:scale-115" 
                />
                <circle cx="200" cy="80" r="5" fill="#fff" className={activeNode === 'CERTIFICATION' ? 'block' : 'hidden'} />
                <text 
                  x="200" y="58" 
                  fontSize="10" 
                  fill={activeNode === 'CERTIFICATION' ? '#fff' : '#b4c6ef'} 
                  fontWeight={activeNode === 'CERTIFICATION' ? 'bold' : 'normal'} 
                  textAnchor="middle" 
                  fontFamily="monospace"
                >
                  CERTIFICATION
                </text>
              </g>

              {/* OP_LIMIT */}
              <g className="cursor-pointer group/node" onClick={() => setActiveNode('OP_LIMIT')}>
                <circle 
                  cx="300" cy="120" r="9" 
                  fill={activeNode === 'OP_LIMIT' ? (threatLevel > 60 ? '#f59e0b' : '#3b82f6') : '#030712'} 
                  stroke={activeNode === 'OP_LIMIT' ? '#fff' : '#3b82f6'} 
                  strokeWidth="2" 
                  className="transition-all duration-200 group-hover/node:scale-115" 
                />
                <text 
                  x="315" y="123" 
                  fontSize="9.5" 
                  fill={activeNode === 'OP_LIMIT' ? '#fff' : '#a1a1aa'} 
                  fontWeight={activeNode === 'OP_LIMIT' ? 'bold' : 'normal'} 
                  textAnchor="start" 
                  fontFamily="monospace"
                >
                  OP_LIMIT
                </text>
              </g>

              {/* EVIDENCE_LOG */}
              <g className="cursor-pointer group/node" onClick={() => setActiveNode('EVIDENCE_LOG')}>
                <circle 
                  cx="300" cy="240" r="10" 
                  fill={activeNode === 'EVIDENCE_LOG' ? '#06b6d4' : '#030712'} 
                  stroke={activeNode === 'EVIDENCE_LOG' ? '#fff' : '#06b6d4'} 
                  strokeWidth="2" 
                  className="transition-all duration-200 group-hover/node:scale-115" 
                />
                <text 
                  x="315" y="244" 
                  fontSize="9.5" 
                  fill={activeNode === 'EVIDENCE_LOG' ? '#fff' : '#a1a1aa'} 
                  fontWeight={activeNode === 'EVIDENCE_LOG' ? 'bold' : 'normal'} 
                  textAnchor="start" 
                  fontFamily="monospace"
                >
                  EVIDENCE_LOG
                </text>
              </g>

              {/* GUARDRAIL_VETO */}
              <g className="cursor-pointer group/node" onClick={() => setActiveNode('GUARDRAIL_VETO')}>
                <circle 
                  cx="200" cy="320" r="11" 
                  fill={activeNode === 'GUARDRAIL_VETO' ? '#6366f1' : '#030712'} 
                  stroke={activeNode === 'GUARDRAIL_VETO' ? '#fff' : '#4f46e5'} 
                  strokeWidth="2.5" 
                  className="transition-all duration-200 group-hover/node:scale-115" 
                />
                <circle cx="200" cy="320" r="5" fill="#fff" className={activeNode === 'GUARDRAIL_VETO' ? 'block' : 'hidden'} />
                <text 
                  x="200" y="342" 
                  fontSize="10" 
                  fill={activeNode === 'GUARDRAIL_VETO' ? '#fff' : '#b4c6ef'} 
                  fontWeight={activeNode === 'GUARDRAIL_VETO' ? 'bold' : 'normal'} 
                  textAnchor="middle" 
                  fontFamily="monospace"
                >
                  GUARDRAIL_VETO
                </text>
              </g>

              {/* DB_ROW_LIMIT */}
              <g className="cursor-pointer group/node" onClick={() => setActiveNode('DB_ROW_LIMIT')}>
                <circle 
                  cx="100" cy="240" r="9" 
                  fill={activeNode === 'DB_ROW_LIMIT' ? '#a855f7' : '#030712'} 
                  stroke={activeNode === 'DB_ROW_LIMIT' ? '#fff' : '#a855f7'} 
                  strokeWidth="2" 
                  className="transition-all duration-200 group-hover/node:scale-115" 
                />
                <text 
                  x="85" y="244" 
                  fontSize="9.5" 
                  fill={activeNode === 'DB_ROW_LIMIT' ? '#fff' : '#a1a1aa'} 
                  fontWeight={activeNode === 'DB_ROW_LIMIT' ? 'bold' : 'normal'} 
                  textAnchor="end" 
                  fontFamily="monospace"
                >
                  DB_ROW_LIMIT
                </text>
              </g>

              {/* ENTRA_CRED */}
              <g className="cursor-pointer group/node" onClick={() => setActiveNode('ENTRA_CRED')}>
                <circle 
                  cx="100" cy="120" r="10" 
                  fill={activeNode === 'ENTRA_CRED' ? '#0078D4' : '#030712'} 
                  stroke={activeNode === 'ENTRA_CRED' ? '#fff' : '#0078D4'} 
                  strokeWidth="2" 
                  className="transition-all duration-200 group-hover/node:scale-115" 
                />
                <text 
                  x="85" y="123" 
                  fontSize="9.5" 
                  fill={activeNode === 'ENTRA_CRED' ? '#fff' : '#a1a1aa'} 
                  fontWeight={activeNode === 'ENTRA_CRED' ? 'bold' : 'normal'} 
                  textAnchor="end" 
                  fontFamily="monospace"
                >
                  ENTRA_CRED
                </text>
              </g>

              {/* Central Core pulse: BASTION_CORE */}
              <g className="cursor-pointer group/node" onClick={() => setActiveNode('BASTION_CORE')}>
                <circle cx="200" cy="200" r="22" fill="#6366f1" className="animate-ping opacity-15" />
                <circle 
                  cx="200" cy="200" r="16" 
                  fill={activeNode === 'BASTION_CORE' ? '#4f46e5' : '#1e1b4b'} 
                  stroke={activeNode === 'BASTION_CORE' ? '#fff' : '#818cf8'} 
                  strokeWidth="2.5" 
                  className="transition-all duration-200 group-hover/node:scale-110" 
                />
                <text 
                  x="200" y="228" 
                  fontSize="11" 
                  fill="#fff" 
                  fontWeight="black" 
                  textAnchor="middle" 
                  fontFamily="monospace"
                  className="tracking-wide"
                >
                  BASTION_CORE
                </text>
              </g>

            </svg>

          </div>

          <div className="w-full flex justify-between gap-4 mt-2">
            <button
              onClick={handleTestSimulation}
              disabled={simulationActive}
              className={`flex-1 py-2 rounded-xl text-[11px] font-bold font-mono transition-all flex items-center justify-center gap-1 border cursor-pointer ${
                simulationActive 
                  ? 'bg-rose-500/25 border-rose-500/40 text-rose-300 animate-pulse' 
                  : 'bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-white/20'
              }`}
            >
              {simulationActive ? '🔥 SIMULATING INJECTION...' : '👾 SIMULATE EXPLOIT VECTOR'}
            </button>
            
            <button
              onClick={() => { setThreatLevel(15); setActiveNode('BASTION_CORE'); }}
              className="px-3 bg-white/5 hover:bg-white/10 text-slate-300 rounded-xl border border-white/10 hover:border-white/20 flex items-center justify-center"
              title="Reset View"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Right Aspect: The Beautiful HUD Panel Details Card */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-5 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-white/5 p-6 rounded-2xl shadow-inner relative overflow-hidden">
          
          {/* Subtle line decoration based on active status */}
          <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${
            active.status === 'warning' ? 'from-amber-500 to-rose-500' : 'from-indigo-500 to-cyan-500'
          }`} />

          <div className="space-y-4">
            
            {/* Header / Brand label badge on selected node */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className={`px-2.5 py-1 rounded inline-flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase ${
                active.status === 'warning' 
                  ? 'bg-rose-500/10 border border-rose-500/20 text-rose-400' 
                  : 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-300'
              }`}>
                <Shield className="w-3 h-3 text-indigo-400" />
                {active.badge}
              </span>
              
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                <span>Threat Shielding index:</span>
                <span className="font-bold text-white bg-slate-900 border border-white/5 px-1.5 py-0.5 rounded">
                  {threatLevel}%
                </span>
              </div>
            </div>

            {/* Dynamic Card Name & Highlight */}
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                {active.name}
                {simulationActive && (
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping inline-block" />
                )}
              </h3>
              
              {/* WHAT IS THIS? ANSWER FOR INTENT */}
              <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block tracking-widest mb-1">
                  💡 What is this Component?
                </span>
                <p className="text-xs text-white font-light leading-relaxed">
                  {active.shortDesc}
                </p>
              </div>
            </div>

            {/* THE KEY BENEFITS EXPLAINER */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-indigo-300 font-bold uppercase block tracking-widest leading-none">
                🌟 Crucial Business & Legal Benefits
              </span>
              <p className="text-[12.5px] text-white leading-relaxed font-normal">
                {active.benefit}
              </p>
            </div>

            {/* Technical description block */}
            <p className="text-[11px] text-slate-400 leading-normal italic font-light pt-1.5 border-t border-white/5">
              &gt; Technical Intercept Method: {active.techDetails}
            </p>

          </div>

          {/* Core Sandbox Interactive Tools inside HUD */}
          <div className="space-y-4 pt-4 border-t border-white/5 select-none">
            
            {/* Live sandbox slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10.5px]">
                <span className="font-mono text-slate-300 font-bold flex items-center gap-1">
                  🔧 SIMULATE SYSTEM RISK LEVEL:
                </span>
                <span className={`font-mono font-black ${
                  threatLevel > 60 ? 'text-amber-400' : 'text-emerald-400'
                }`}>
                  {threatLevel}% risk margin
                </span>
              </div>
              
              <input 
                type="range" 
                min="10" 
                max="100" 
                value={threatLevel} 
                onChange={(e) => setThreatLevel(parseInt(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <p className="text-[10px] text-slate-400 font-mono italic">
                * Slide risk up to trigger warning parameters in the OP_LIMIT and GUARDRAIL nodes!
              </p>
            </div>

            {/* Static parameter display metrics block */}
            <div className="grid grid-cols-3 gap-3">
              {active.stats.map((st, i) => (
                <div key={i} className="bg-slate-900 border border-white/5 p-2 rounded-xl text-center">
                  <span className="block text-[8px] font-mono text-slate-400 uppercase tracking-wider">{st.label}</span>
                  <span className="block text-xs font-bold text-white mt-1 font-mono tracking-tight">{st.value}</span>
                </div>
              ))}
            </div>

            {/* Simulation Status Alerts */}
            {overrideActive && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl flex items-center gap-2.5 animate-bounce">
                <AlertTriangle className="w-5 h-5 text-rose-400 animate-pulse" />
                <div className="text-left leading-tight min-w-0 flex-1">
                  <strong className="text-[11px] font-mono uppercase block font-black">EXPLOIT VECTOR INTERCEPTED!</strong>
                  <p className="text-[10px] opacity-90 truncate leading-snug">Autonomous agent prompt payload contained illegal bypass. Guardrail Veto triggered.</p>
                </div>
              </div>
            )}

            {!overrideActive && threatLevel > 70 && (
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-300 rounded-xl flex items-center gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-400 animate-pulse" />
                <div className="text-left leading-tight">
                  <strong className="text-[11px] font-mono uppercase block">CRITICAL ALERT THRESHOLD</strong>
                  <p className="text-[9.5px] opacity-85 leading-snug">Simulated model drift exceeds 65%. Hard limits and filters are being fortified automatically.</p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
