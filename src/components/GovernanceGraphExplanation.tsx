import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GitFork, 
  User, 
  ShieldCheck, 
  Lock, 
  FolderLock, 
  Paperclip, 
  AlertTriangle,
  Play,
  RotateCcw,
  Cpu,
  Database,
  Network,
  TrendingUp,
  AlertOctagon,
  Layers,
  FileSignature,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ShieldAlert,
  BarChart3,
  Users,
  Search,
  BookOpen
} from 'lucide-react';

type GraphSubView = 'EXECUTIVE' | 'TECHNICAL';

interface SimulatedScenario {
  id: string;
  name: string;
  trigger: string;
  impactScore: number;
  status: 'SAFE' | 'QUARANTINED' | 'CRITICAL' | 'COMPLIANT';
  cascadeEffects: string[];
  autoAction: string;
}

export default function GovernanceGraphExplanation() {
  const [activeSubView, setActiveSubView] = useState<GraphSubView>('TECHNICAL');
  const [selectedScenario, setSelectedScenario] = useState<string>('cert-expire');
  const [searchFilter, setSearchFilter] = useState<string>('');

  // 1. Enterprise Relationship Layer Analytics Metrics
  const analyticsMetrics = [
    { label: "Governed Entities", value: "2,847", sub: "Enterprise components" },
    { label: "Active Agents", value: "312", sub: "Decentralized executors" },
    { label: "Human Owners", value: "517", sub: "Entra ID Profiles mapped" },
    { label: "Relationships Mapped", value: "14,821", sub: "Continuous active connections" },
    { label: "Compliance Links", value: "4,120", sub: "Regulatory bindings" },
    { label: "Evidence Packages", value: "9,382", sub: "Immutable Coseal records" },
    { label: "Risk Paths Managed", value: "287", sub: "Underwriter pathways" },
    { label: "Ownership Gaps", value: "11", sub: "Requires attention", warning: true }
  ];

  // 2. High-Density SVG Nodes Definition (approx 60 nodes grouped in clusters for visual density)
  const nodeClusters = useMemo(() => {
    const clusters = [
      { id: 'identity', color: '#0078D4', count: 12, label: 'Identity' }, // Azure Blue
      { id: 'agent', color: '#06b6d4', count: 10, label: 'AI Layer' },     // Cyan
      { id: 'system', color: '#a855f7', count: 12, label: 'Systems' },    // Purple
      { id: 'governance', color: '#f59e0b', count: 12, label: 'Evidence' },// Amber
      { id: 'regulatory', color: '#ef4444', count: 8, label: 'Controls' }   // Red
    ];

    // Generate deterministic coordinates for dense clusters
    const nodes: { id: string; x: number; y: number; cluster: string; color: string; label: string; size: number }[] = [];
    let idCounter = 1;

    clusters.forEach((c) => {
      // Base center coordinates for visual layout
      let centerX = 200;
      let centerY = 120;
      if (c.id === 'identity') { centerX = 80; centerY = 70; }
      if (c.id === 'agent') { centerX = 190; centerY = 110; }
      if (c.id === 'system') { centerX = 320; centerY = 80; }
      if (c.id === 'governance') { centerX = 120; centerY = 170; }
      if (c.id === 'regulatory') { centerX = 290; centerY = 160; }

      for (let i = 0; i < c.count; i++) {
        const radius = 25 + Math.random() * 30;
        const angle = (i / c.count) * 2 * Math.PI + (Math.random() * 0.4);
        const x = Math.round(centerX + radius * Math.cos(angle));
        const y = Math.round(centerY + radius * Math.sin(angle));
        
        let label = `${c.label} #${idCounter}`;
        // Give specific real prominent labels to certain nodes
        if (c.id === 'identity' && i === 0) label = "CRO Profile";
        if (c.id === 'identity' && i === 1) label = "VP Credit Risk";
        if (c.id === 'identity' && i === 2) label = "Entra SecGroup";
        if (c.id === 'agent' && i === 0) label = "UnderwriterGPT";
        if (c.id === 'agent' && i === 1) label = "ClaimsCopilot";
        if (c.id === 'agent' && i === 2) label = "TreasuryBot";
        if (c.id === 'system' && i === 0) label = "Core Banking API";
        if (c.id === 'system' && i === 1) label = "ServiceNow Core";
        if (c.id === 'governance' && i === 0) label = "Evidence Vault #82";
        if (c.id === 'governance' && i === 1) label = "Audit Ledger";
        if (c.id === 'regulatory' && i === 0) label = "OSFI E-21 Control";
        if (c.id === 'regulatory' && i === 1) label = "PIPEDA Ob.";

        nodes.push({
          id: `node-${idCounter++}`,
          x: Math.max(15, Math.min(385, x)),
          y: Math.max(15, Math.min(185, y)),
          cluster: c.id,
          color: c.color,
          label,
          size: label.includes(' ') ? 4 : 2
        });
      }
    });

    // Generate connecting lines (edges) between adjacent nodes and clusters
    const edges: { from: string; to: string; isRiskPath?: boolean; isHighlight?: boolean; color?: string }[] = [];
    
    // Add natural cluster links
    nodes.forEach((node, idx) => {
      // Connect to next 2 nodes in same cluster
      for (let offset = 1; offset <= 2; offset++) {
        const target = nodes[(idx + offset) % nodes.length];
        if (target.cluster === node.cluster) {
          edges.push({ from: node.id, to: target.id });
        }
      }

      // Inter-cluster handshakes
      if (idx % 4 === 0) {
        const targetIdx = (idx + 15) % nodes.length;
        edges.push({ 
          from: node.id, 
          to: nodes[targetIdx].id,
          isHighlight: true,
          color: '#0078D4'
        });
      }
    });

    // Mark explicit Risk Propagation path: 
    // Compromised Identity -> AI Governance Group -> UnderwriterGPT -> Credit Decision API -> Customer Database -> PIPEDA Violation
    const riskChainIds = ['node-1', 'node-4', 'node-13', 'node-23', 'node-26', 'node-46'];
    for (let j = 0; j < riskChainIds.length - 1; j++) {
      edges.push({
        from: riskChainIds[j],
        to: riskChainIds[j+1],
        isRiskPath: true,
        color: '#ef4444' // Crimson color for danger chain
      });
    }

    return { nodes, edges, riskChainIds };
  }, []);

  // 3. Simulated Scenarios
  const scenarios: SimulatedScenario[] = [
    {
      id: 'cert-expire',
      name: 'Agent Certification Expired',
      trigger: 'UnderwriterGPT authorization keys validation window has passed without re-sign.',
      impactScore: 18,
      status: 'QUARANTINED',
      cascadeEffects: [
        'Cognitive Signal blocks token dispatch.',
        'Downstream Credit Decision API access revoked in real-time.',
        'Sentinel webhook fired under security policy alert #729.'
      ],
      autoAction: 'AUTO-SUSPEND agent session and isolate active database bindings.'
    },
    {
      id: 'owner-leave',
      name: 'Manager / Human Owner Leaves Company',
      trigger: 'CRO / VP security profile deactivated or changed in Microsoft Entra.',
      impactScore: 65,
      status: 'QUARANTINED',
      cascadeEffects: [
        'Governance Graph flags 4 unowned active executors.',
        'Continuous trust score drops: 94% -> 42% on target subnet.',
        'Temporary proxy lock applied to TreasuryBot access token.'
      ],
      autoAction: 'PROMPT human assignment delegation pipeline in Governance portal.'
    },
    {
      id: 'trust-drop',
      name: 'Agent Trust Rating Drops Below threshold',
      trigger: 'SupportAI model input hallucination or outlier vector pattern detected.',
      impactScore: 78,
      status: 'CRITICAL',
      cascadeEffects: [
        'Prompt filter intercepts multi-hop outbound network call.',
        'System integrity score degraded to RED hazard indicator.',
        'Immutable state proof snapshot stored in compliance Evidence Vault.'
      ],
      autoAction: 'ROTATE decryption keys and spin up secure sandboxed twin simulation.'
    },
    {
      id: 'prompt-inject',
      name: 'Continuous Prompt Injection Attempt',
      trigger: 'System registers repetitive malicious system bypass prompt overrides.',
      impactScore: 92,
      status: 'CRITICAL',
      cascadeEffects: [
        'Intercept layer triggers physical port shutdown on localized gateway.',
        'Full metadata exposure log sent to Microsoft Sentinel pipeline.',
        'Active case file compiled in Bastion Case Management system.'
      ],
      autoAction: 'REVOKE executing service principal credentials instantly.'
    },
    {
      id: 'priv-role',
      name: 'Privileged Role Access Activated',
      trigger: 'Compliance officer requests direct debug intervention inside Production environment.',
      impactScore: 10,
      status: 'COMPLIANT',
      cascadeEffects: [
        'Time-bound (20m) secure Session Handshake generated.',
        'Requires second signature on ledger.',
        'Full audit recording streams directly to SEC-compliant evidence records.'
      ],
      autoAction: 'LOG session start / end audit trails with cryptographic validation keys.'
    }
  ];

  const activeScenarioObj = scenarios.find(s => s.id === selectedScenario) || scenarios[0];

  // Filter nodes for Search capability
  const filteredNodes = useMemo(() => {
    if (!searchFilter) return nodeClusters.nodes;
    return nodeClusters.nodes.filter(n => n.label.toLowerCase().includes(searchFilter.toLowerCase()));
  }, [searchFilter, nodeClusters]);

  return (
    <section id="governance-graph-section" className="bg-[#071524] border-y-2 border-yellow-400/80 py-24 px-6 relative overflow-hidden">
      
      {/* Visual background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,120,212,0.06)_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none opacity-80" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[300px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[300px] bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* TOP LEVEL INTRO — BASTION ENTERPRISE STORY */}
        <div className="border-b border-white/10 pb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/15 border border-yellow-500/40 rounded-full text-[10px] text-yellow-400 font-mono font-bold uppercase tracking-wider animate-pulse">
              <Sparkles className="w-3 h-3" /> INSTITUTIONAL CONTROL PLANE
            </span>
            <span className="text-[10px] bg-slate-900 text-slate-400 border border-white/5 py-1 px-2.5 rounded font-mono">
              COMPLIANT PLATFORM V2.4.0
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs sm:text-sm font-mono text-sky-400 uppercase tracking-widest font-extrabold block">
                Continuous Governance Mesh
              </span>
              <h2 className="font-display font-black text-3.5xl sm:text-5.5xl text-white tracking-tight leading-none">
                The Enterprise Relationship Layer
              </h2>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light font-sans">
                Bastion continuously maps ownership, trust, permissions, compliance obligations, evidence, and risk across autonomous AI agents.
              </p>
            </div>
            
            <div className="lg:col-span-5 bg-slate-950/70 p-5 rounded-2xl border border-white/10 space-y-3">
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                &ldquo;Most organizations know they have AI agents. Few know <strong className="text-white">who owns them</strong>, what they can access, what regulations apply, what evidence exists, and how risk spreads across the enterprise.&rdquo;
              </p>
              <div className="text-[11px] font-mono text-yellow-400 flex items-center gap-1">
                <CheckCircle2 className="w-4.5 h-4.5" /> Bastion provides a continuously updated governance graph that transforms AI oversight into a measurable operational discipline.
              </div>
            </div>
          </div>
        </div>

        {/* RELATIONSHIP ANALYTICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {analyticsMetrics.map((met, idx) => (
            <div 
              key={idx} 
              className={`p-4 bg-slate-950/80 border ${met.warning ? 'border-amber-500/40 hover:border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.1)]' : 'border-white/5 hover:border-sky-500/30'} rounded-2xl transition-all duration-300 shadow-md group`}
            >
              <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider block font-bold transition-colors group-hover:text-white">
                {met.label}
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className={`text-2xl sm:text-3.5xl font-mono font-black tracking-tight ${met.warning ? 'text-amber-400 font-extrabold animate-pulse' : 'text-white'}`}>
                  {met.value}
                </span>
                {met.warning && (
                  <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 uppercase font-black tracking-widest animate-pulse">
                    ACTION NEEDED
                  </span>
                )}
              </div>
              <span className="text-[10px] text-slate-400 block mt-0.5 font-light">
                {met.sub}
              </span>
            </div>
          ))}
        </div>

        {/* CORE INTERACTIVE SYSTEM CENTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* THE TOPOLOGY MAP PANEL (Col Span 7) */}
          <div className="lg:col-span-7 bg-[#0b1d33]/90 border-2 border-yellow-400/80 shadow-[0_0_35px_rgba(234,179,8,0.2),0_12px_45px_rgba(0,0,0,0.6)] rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden group">
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <Network className="w-4 h-4 text-yellow-400 animate-spin" />
                  <h4 className="text-xs uppercase font-mono font-bold text-white tracking-widest">
                    Enterprise Topology Viewer
                  </h4>
                </div>
                <p className="text-[10px] text-slate-400 font-mono">
                  {activeSubView === 'TECHNICAL' ? 'TECHNICAL MODEL (50-100 Clustered Nodes Mapped)' : 'EXECUTIVE VIEW (Layer Overlay)'}
                </p>
              </div>

              {/* View toggle (Executive vs Technical) */}
              <div className="flex items-center bg-slate-900 border border-white/10 rounded-xl p-1 select-none">
                <button
                  onClick={() => setActiveSubView('EXECUTIVE')}
                  className={`px-3 py-1.5 rounded-lg text-[9.5px] font-mono font-black uppercase tracking-wider transition-all cursor-pointer ${
                    activeSubView === 'EXECUTIVE'
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                      : 'text-slate-400 hover:text-slate-205'
                  }`}
                >
                  Executive View
                </button>
                <button
                  onClick={() => setActiveSubView('TECHNICAL')}
                  className={`px-3 py-1.5 rounded-lg text-[9.5px] font-mono font-black uppercase tracking-wider transition-all cursor-pointer ${
                    activeSubView === 'TECHNICAL'
                      ? 'bg-yellow-500 text-slate-950 font-black shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Technical View
                </button>
              </div>
            </div>

            {/* SEARCH BOX */}
            <div className="mb-4 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-3 w-3 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search specific Nodes (e.g. CRO, Treasury, OSFI, Underwriter)..."
                className="block w-full pl-8 pr-3 py-1.5 bg-slate-950 border border-white/15 rounded-xl text-xs text-white placeholder-slate-450 focus:outline-none focus:border-yellow-400 font-mono transition-all"
              />
              {searchFilter && (
                <button 
                  onClick={() => setSearchFilter('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[10px] text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* DENSE GRAPH VISUALIZATION FRAME */}
            <div className="relative w-full aspect-video bg-[#071524] border border-white/15 rounded-2xl flex items-center justify-center p-2 overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.012)_1.3px,transparent_1.3px)] bg-[size:12px_12px] pointer-events-none" />
              
              {/* Complex SVG layout representing dense clusters */}
              <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
                {/* 1. Base edge rendering */}
                {nodeClusters.edges.map((edge, i) => {
                  const fromNode = nodeClusters.nodes.find(n => n.id === edge.from);
                  const toNode = nodeClusters.nodes.find(n => n.id === edge.to);
                  if (!fromNode || !toNode) return null;

                  // Simplify graph on EXECUTIVE VIEW to keep it clear
                  if (activeSubView === 'EXECUTIVE') {
                    // Only draw links between prominent nodes
                    const isProminentLink = fromNode.size > 2 && toNode.size > 2;
                    if (!isProminentLink) return null;
                  }

                  const isFiltered = searchFilter && 
                    !(fromNode.label.toLowerCase().includes(searchFilter.toLowerCase()) || 
                      toNode.label.toLowerCase().includes(searchFilter.toLowerCase()));

                  return (
                    <line
                      key={`edge-${i}`}
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke={edge.isRiskPath ? '#f43f5e' : (edge.color || '#3b82f6')}
                      strokeWidth={edge.isRiskPath ? 2 : (edge.isHighlight ? 0.8 : 0.2)}
                      strokeDasharray={edge.isRiskPath ? '3 2' : undefined}
                      className={`${edge.isRiskPath ? 'animate-pulse' : ''}`}
                      opacity={isFiltered ? 0.05 : (edge.isRiskPath ? 0.9 : 0.25)}
                    />
                  );
                })}

                {/* 2. Critical Risk Path highlighted animated conduit */}
                {activeSubView === 'TECHNICAL' && (
                  <path 
                    d="M 80,70 L 190,110 L 320,80 L 120,170" 
                    fill="none" 
                    stroke="#ef4444" 
                    strokeWidth="1" 
                    strokeDasharray="4 4" 
                    className="opacity-50 animate-pulse"
                  />
                )}

                {/* 3. Node rendering */}
                {filteredNodes.map((node) => {
                  const isProminent = node.size > 2;
                  
                  // In EXECUTIVE view, hide small dense background nodes for high executive readability
                  if (activeSubView === 'EXECUTIVE' && !isProminent) {
                    return null;
                  }

                  const isMatched = searchFilter && node.label.toLowerCase().includes(searchFilter.toLowerCase());

                  return (
                    <g key={node.id} className="cursor-pointer group/node">
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isProminent ? 6 : 2.5}
                        fill={node.color}
                        stroke={isMatched ? '#eab308' : '#071524'}
                        strokeWidth={isMatched ? 2 : (isProminent ? 1.5 : 0.5)}
                        className={`transition-all duration-350 ${isProminent ? 'animate-pulse' : ''}`}
                      />
                      {/* Interactive ring highlight around filtered node */}
                      {isMatched && (
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={12}
                          fill="none"
                          stroke="#eab308"
                          strokeWidth="1.5"
                          strokeDasharray="2 2"
                          className="animate-spin"
                        />
                      )}
                      
                      {/* Labels for prominent nodes or matched nodes */}
                      {(isProminent || isMatched || activeSubView === 'EXECUTIVE') && (
                        <g>
                          <rect
                            x={node.x - 30}
                            y={node.y - (isProminent ? 18 : 14)}
                            width={60}
                            height={10}
                            rx={2}
                            fill="#071524"
                            stroke={node.color}
                            strokeWidth={0.5}
                            opacity={0.85}
                          />
                          <text
                            x={node.x}
                            y={node.y - (isProminent ? 11 : 7)}
                            fill="#ffffff"
                            fontSize="5.5"
                            fontFamily="monospace"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            {node.label.substring(0, 15)}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}

                {/* 4. Legend indicator directly in canvas */}
                <g transform="translate(10, 180)" className="opacity-90 select-none">
                  <rect width="180" height="15" rx="3" fill="#071524" stroke="white" strokeWidth="0.1" />
                  <circle cx="10" cy="7.5" r="3" fill="#0078D4" />
                  <text x="16" y="10" fill="#cbd5e1" fontSize="5.5" fontFamily="monospace">Identity</text>
                  
                  <circle cx="45" cy="7.5" r="3" fill="#06b6d4" />
                  <text x="51" y="10" fill="#cbd5e1" fontSize="5.5" fontFamily="monospace">AI Layer</text>
                  
                  <circle cx="80" cy="7.5" r="3" fill="#a855f7" />
                  <text x="86" y="10" fill="#cbd5e1" fontSize="5.5" fontFamily="monospace">Systems</text>

                  <circle cx="115" cy="7.5" r="3" fill="#f59e0b" />
                  <text x="121" y="10" fill="#cbd5e1" fontSize="5.5" fontFamily="monospace">Evidence</text>

                  <circle cx="150" cy="7.5" r="3" fill="#ef4444" />
                  <text x="156" y="10" fill="#cbd5e1" fontSize="5.5" fontFamily="monospace">Critical Risk</text>
                </g>
              </svg>
            </div>

            {/* BOTTOM MAP FEEDBACK */}
            <div className="mt-4 p-4 bg-slate-900 rounded-2xl border border-white/5 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  Security Topology Ledger
                </span>
                <span className="text-[9px] font-mono text-slate-450">
                  REFRESHED: <strong className="text-emerald-400">0.02s ago</strong>
                </span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-light">
                {activeSubView === 'TECHNICAL' 
                  ? "Interactive relationship intelligence engine tracks operational nodes. Displays direct integrations across ServiceNow, Entra ID, proprietary databases, and certified agent runtimes." 
                  : "Simplification overlay enabled: displaying core human oversight pipelines, active certified autonomous executors, and identified active compliance/regulatory risk pathways."}
              </p>
            </div>
          </div>

          {/* RISK PROPAGATION ENGINE & IMPACT SIMULATOR (Col Span 5) */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between gap-6">
            
            {/* PANEL 1: RISK PROPAGATION PATH EXPLORER */}
            <div className="bg-slate-950/80 p-5 rounded-3xl border border-white/10 space-y-4 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-550/10 text-red-400 border-l border-b border-red-550/20 px-3 py-1 text-[9px] font-mono uppercase tracking-widest font-bold">
                Live Pathway Analysis
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-rose-450 font-bold">
                  <AlertOctagon className="w-4 h-4 text-rose-505 animate-pulse" />
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white">
                    Risk Path Explorer
                  </h4>
                </div>
                <p className="text-[10px] text-slate-400 font-mono">
                  Identified Multi-hop Vulnerability Thread In Progress
                </p>
              </div>

              {/* Cascade Path Nodes */}
              <div className="space-y-2">
                {[
                  { title: "Compromised Identity", type: "Identity Access", color: "text-sky-450", bg: "bg-sky-505/10", border: 'border-sky-505/30' },
                  { title: "AI Governance Group", type: "Entra Context", color: "text-cyan-450", bg: "bg-cyan-505/10", border: 'border-cyan-505/30' },
                  { title: "UnderwriterGPT", type: "Cognitive Executor", color: "text-yellow-450", bg: "bg-yellow-505/10", border: 'border-yellow-505/30' },
                  { title: "Credit Decision API", type: "Downstream Asset", color: "text-purple-450", bg: "bg-purple-505/10", border: 'border-purple-505/30' },
                  { title: "Customer Database", type: "Enterprise Storage", color: "text-amber-450", bg: "bg-amber-505/10", border: 'border-amber-505/30' },
                  { title: "PIPEDA Exposure Violation", type: "Regulatory Penalty", color: "text-rose-450", bg: "bg-rose-505/20", border: 'border-rose-505/40', isEnd: true }
                ].map((step, idx) => (
                  <div key={idx} className="relative">
                    {/* Connection lines between steps */}
                    {idx < 5 && (
                      <div className="absolute left-[13px] top-[26px] h-3.5 w-[1.5px] bg-gradient-to-b from-rose-505 to-rose-405 z-0" />
                    )}
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="w-7 h-7 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-[10.5px] font-mono text-white font-bold">
                        {idx + 1}
                      </div>
                      <div className={`flex-1 flex items-center justify-between p-2 rounded-xl bg-slate-950 border ${step.border} ${step.isEnd ? 'shadow-[0_0_15px_rgba(244,63,94,0.15)]' : ''}`}>
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-white font-bold block">{step.title}</span>
                          <span className="text-[8px] text-slate-400 font-mono uppercase block">{step.type}</span>
                        </div>
                        {step.isEnd && (
                          <div className="text-[8.5px] font-mono font-black text-rose-400 uppercase bg-rose-550/15 border border-rose-550/30 px-1.5 py-0.5 rounded animate-bounce">
                            EXPOSING
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Path Metrics Box */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 bg-slate-900/50 p-3 rounded-2xl">
                <div className="text-center">
                  <span className="text-[8px] font-mono text-slate-400 uppercase block">Potential Impact</span>
                  <span className="text-sm font-mono font-black text-white">$3.8M</span>
                </div>
                <div className="text-center border-x border-white/10">
                  <span className="text-[8px] font-mono text-slate-400 uppercase block">Affected Records</span>
                  <span className="text-sm font-mono font-black text-white">152,000</span>
                </div>
                <div className="text-center">
                  <span className="text-[8px] font-mono text-slate-400 uppercase block">Risk Score</span>
                  <span className="text-sm font-mono font-black text-red-400 animate-pulse">92 / 100</span>
                </div>
              </div>
            </div>

            {/* PANEL 2: GOVERNANCE IMPACT SIMULATOR */}
            <div className="bg-slate-950/80 p-5 rounded-3xl border border-white/10 space-y-4 shadow-2xl relative">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-yellow-400 font-bold">
                  <Cpu className="w-4 h-4" />
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white">
                    Governance Impact Simulator
                  </h4>
                </div>
                <p className="text-[10px] text-slate-400 font-mono">
                  Simulate downstream effects of system failures & state mutations
                </p>
              </div>

              {/* Scenario selector tabs */}
              <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-1.5">
                {[
                  { id: 'cert-expire', label: 'Cert. Expire' },
                  { id: 'owner-leave', label: 'Owner Leaves' },
                  { id: 'trust-drop', label: 'Trust Drop' },
                  { id: 'prompt-inject', label: 'Prompt Inj.' },
                  { id: 'priv-role', label: 'Priv. Role' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedScenario(s.id)}
                    className={`p-1.5 rounded-lg text-[9px] font-mono uppercase text-center font-bold tracking-tight transition-all cursor-pointer ${
                      selectedScenario === s.id
                        ? 'bg-yellow-500 text-slate-950 font-black shadow-md shadow-yellow-500/20'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-white/5'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Detailed Live Scenario Assessment */}
              <div className="bg-[#071524] p-4 rounded-2xl border border-white/10 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    System State Impact Assessment
                  </span>
                  <span className={`text-[8.5px] font-mono font-black uppercase px-2 py-0.5 rounded ${
                    activeScenarioObj.status === 'QUARANTINED' ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30' :
                    activeScenarioObj.status === 'CRITICAL' ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30 animate-pulse' :
                    'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    {activeScenarioObj.status}
                  </span>
                </div>

                <div className="space-y-1 bg-slate-950/40 p-2.5 rounded-xl border border-white/5">
                  <span className="text-[8.5px] font-mono text-slate-400 uppercase tracking-widest block font-bold">EVENT DEFINITION</span>
                  <p className="text-xs text-white leading-relaxed font-light">
                    {activeScenarioObj.trigger}
                  </p>
                </div>

                {/* Simulated Cascades */}
                <div className="space-y-1.5">
                  <span className="text-[8.5px] font-mono text-yellow-405 uppercase tracking-widest block font-bold">CASCADING EFFECTS</span>
                  <div className="space-y-1">
                    {activeScenarioObj.cascadeEffects.map((effect, idx) => (
                      <div key={idx} className="flex gap-1.5 text-xs text-slate-350 font-light items-start">
                        <ChevronRight className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{effect}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Auto Action Taken */}
                <div className="pt-2 border-t border-white/5 space-y-0.5">
                  <span className="text-[8px] font-mono text-red-405 block uppercase font-bold tracking-wider">Automated Sentinel Reaction:</span>
                  <p className="text-xs text-white font-mono leading-relaxed font-semibold bg-slate-950 p-2 rounded-xl border border-white/10">
                    &gt; {activeScenarioObj.autoAction}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* BOTTOM DOUBLE-PANEL ROW: BOARD REPORTING VIEW & CORE DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* BOARD REPORTING & EXECUTIVE COVERAGE EXPOSURE CONTROL (Col Span 7) */}
          <div className="lg:col-span-7 bg-[#0b1d33]/90 border-2 border-yellow-400/80 shadow-[0_0_35px_rgba(234,179,8,0.2),0_12px_45px_rgba(0,0,0,0.6)] rounded-3xl p-6 relative flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div className="flex items-center gap-1.5 text-sky-400 font-bold">
                  <BarChart3 className="w-4 h-4 text-sky-505" />
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white">
                    Board Reporting View // Executive Exposure
                  </h4>
                </div>
                <span className="text-[9.5px] font-mono text-slate-400 uppercase tracking-widest bg-slate-900 border border-white/10 px-2 py-0.5 rounded inline-block">
                  C-SUITE ALIGNMENT REPORT
                </span>
              </div>

              {/* Precise Grid Board Coverage KPIs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { title: "Governed Agents", score: "100%", desc: "Continuous mapping active", color: "text-emerald-400" },
                  { title: "High-Risk Relationships", score: "3 Prioritized", desc: "Critical pathways mapped", color: "text-amber-400" },
                  { title: "Open Governance Cases", score: "2 Pending", desc: "No critical breach", color: "text-cyan-400" },
                  { title: "Compliance Coverage", score: "98.4%", desc: "Active system alignment", color: "text-emerald-400" },
                  { title: "Ownership Gaps Identified", score: "11 Mapped", desc: "Action required", color: "text-amber-400" },
                  { title: "Evidence Completeness", score: "99.1%", desc: "Cryptographic verification", color: "text-emerald-400" }
                ].map((kpi, idx) => (
                  <div key={idx} className="p-3 bg-slate-900 rounded-xl border border-white/10 hover:border-yellow-500/50 transition-all">
                    <span className="text-[9px] uppercase font-mono text-slate-400 tracking-wider block font-bold">{kpi.title}</span>
                    <strong className={`text-lg sm:text-xl font-mono block mt-1 ${kpi.color}`}>{kpi.score}</strong>
                    <span className="text-[10px] text-slate-300 block font-normal mt-0.5 leading-relaxed">{kpi.desc}</span>
                  </div>
                ))}
              </div>

              {/* Trust distribution metrics bar visual */}
              <div className="bg-[#071524] p-4 rounded-2xl border border-white/10 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white font-bold">ENTERPRISE TRUST DISTRIBUTION RATING</span>
                  <span className="text-emerald-400 font-black">94.2% OPTIMAL</span>
                </div>
                {/* Horizontal layered gauge */}
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden flex">
                  <div className="h-full bg-emerald-500" style={{ width: '85%' }} />
                  <div className="h-full bg-yellow-500" style={{ width: '10%' }} />
                  <div className="h-full bg-red-500 animate-pulse" style={{ width: '5%' }} />
                </div>
                <div className="flex justify-between text-[8px] font-mono text-slate-400">
                  <span>OPTIMAL COMPLIANCE (85%)</span>
                  <span>TEMPORARY OVERRIDE (10%)</span>
                  <span>SUSPENDED ACTIONS (5%)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-[10px] font-mono text-slate-400 mt-4 uppercase">
              // Sec Compliance Standard Verification: SEC-Level Evidence Package Proofs Activated.
            </div>
          </div>

          {/* RIGHT SIDEBAR: GRAPH CONTEXT EXPLANATION & VALUE DETAILS (Col Span 5) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0b1d33]/90 to-[#071524] border-2 border-yellow-400/80 shadow-[0_0_35px_rgba(234,179,8,0.2),0_12px_45px_rgba(0,0,0,0.6)] rounded-3xl p-6 flex flex-col justify-between">
            <div className="space-y-5">
              <span className="text-[10px] font-mono text-yellow-400 uppercase tracking-widest font-black block">
                Bastion System Architecture
              </span>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-slate-900 rounded-lg text-yellow-400 animate-pulse">
                    <BookOpen className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-mono uppercase tracking-wider text-white font-black">
                      AI CONTROL PLANE FOR AUTONOMOUS AGENTS
                    </h5>
                    <p className="text-[10px] text-slate-400 font-mono">Not a basic dashboard. A true operational discipline.</p>
                  </div>
                </div>

                <p className="text-xs text-slate-200 leading-relaxed font-light">
                  Bastion constructs a secure under-layer outside of the underlying models. By continuously mapping relationships, the control plane calculates structural security gaps rather than relying on LLM self-reporting:
                </p>

                <div className="space-y-2">
                  {[
                    { title: "Identity Layer Integration", desc: "Mappping VP Risk Profiles, Governance Leads and Azure Entra Security Groups securely." },
                    { title: "AI Agent Oversight", desc: "Monitoring TreasuryBot, PayrollAgent and active UnderwriterGPT workflows." },
                    { title: "Enterprise Integrations", desc: "Securing downstream channels such as ServiceNow workflows and Sentinel." },
                    { title: "Regulatory Mapping", desc: "Compliance verification against SOC 2, OSFI E-21 and PIPEDA guidelines." }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex gap-2.5 p-2 bg-[#071524] rounded-xl border border-white/5 hover:border-yellow-500/30 transition-all">
                      <ChevronRight className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div className="space-y-0.5">
                        <strong className="text-xs text-white font-mono block">{feat.title}</strong>
                        <p className="text-[10px] text-slate-300 leading-normal font-light">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-[10px] font-mono text-yellow-400 font-black mt-4 uppercase">
              &gt; Bastion is the system of record for corporate AI trust.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
