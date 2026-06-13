import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GitFork, 
  MapPin, 
  User, 
  ShieldCheck, 
  Paperclip, 
  Activity, 
  TrendingUp, 
  AlertTriangle,
  FolderLock,
  Boxes,
  Lock
} from 'lucide-react';

type GraphSubView = 'RELATIONSHIPS' | 'RISK_PROPAGATION' | 'OWNERSHIP' | 'TRUST_DEPS';

export default function GovernanceGraphExplanation() {
  const [activeSubView, setActiveSubView] = useState<GraphSubView>('RELATIONSHIPS');

  const nodesToMap = [
    { title: "AI Agents", desc: "Autonomous reasoning instances executing workflow code.", icon: Boxes },
    { title: "Human Owners", desc: "Direct employee security profiles linked from Entra ID.", icon: User },
    { title: "Permissions", desc: "Granular capability tokens restricting database access.", icon: ShieldCheck },
    { title: "Certifications", desc: "Cryptographic state validation certificates.", icon: Lock },
    { title: "Enterprise Applications", desc: "Downstream systems like ServiceNow, Jira, and databases.", icon: FolderLock },
    { title: "Evidence Packages", desc: "Immutable SHA completion ledger records.", icon: Paperclip },
    { title: "Governance Cases", desc: "Active drift alerts or compliance breaches flags.", icon: AlertTriangle }
  ];

  return (
    <section id="governance-graph-section" className="bg-[#071524] border-y border-slate-800 py-24 px-6 relative overflow-hidden">
      {/* Radiant glow points */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,120,212,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-60" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[150px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full text-[10px] text-sky-400 font-mono font-bold uppercase tracking-wider">
              <GitFork className="w-3.5 h-3.5 text-[#0078D4]" /> Flagship Capability
            </div>
            
            <h2 className="text-xl sm:text-2xl font-mono text-slate-400 uppercase tracking-widest leading-none">
              Governance Graph
            </h2>
            <h3 className="font-display font-black text-3xl sm:text-4.5xl text-white tracking-tight leading-none mt-1">
              The Enterprise Relationship Layer
            </h3>
            
            <p className="text-sm md:text-base text-slate-300 max-w-xl font-light pt-2">
              Bastion continuously maps real-time relationships, computing drift ratings and risk exposure limits dynamically outside model environments.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#0078D4]/10 border border-[#0078D4]/20 px-3 py-1.5 rounded-lg text-[9.5px] font-mono font-bold text-sky-305 tracking-wider">
            <span>DENSE TOPOLOGY GENERATION: ENGAGED</span>
          </div>
        </div>

        {/* 2-Column Split: Interactive schematic & node definitions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Topology Viewer (Col Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#0b1d33]/90 border-2 border-yellow-400/90 shadow-[0_0_30px_rgba(234,179,8,0.25),0_12px_45px_rgba(0,0,0,0.6)] hover:border-yellow-300 hover:shadow-[0_0_45px_rgba(234,179,8,0.45),0_12px_45px_rgba(0,0,0,0.6)] p-6 rounded-3xl relative transition-all duration-300">
            <div className="absolute top-4 right-4 text-[9px] font-mono text-slate-400 tracking-wider">
              GRAPH VIEWER v2.0.1
            </div>

            {/* View Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 select-none bg-slate-900/60 p-1.5 rounded-2xl border border-white/5">
              {[
                { id: 'RELATIONSHIPS', label: 'Relationships' },
                { id: 'RISK_PROPAGATION', label: 'Risk Propagation' },
                { id: 'OWNERSHIP', label: 'Ownership' },
                { id: 'TRUST_DEPS', label: 'Trust Deps' }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveSubView(btn.id as GraphSubView)}
                  className={`py-2 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider text-center transition-all cursor-pointer ${
                    activeSubView === btn.id
                      ? 'bg-yellow-500 text-slate-950 font-black shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Render Custom SVG Topology based on selected view */}
            <div className="relative w-full aspect-video bg-[#071524] border border-white/10 rounded-2xl flex items-center justify-center p-4 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

              {/* Dynamic Overlay Graphic */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSubView}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex flex-col items-center justify-center relative"
                >
                  {activeSubView === 'RELATIONSHIPS' && (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      {/* Relationship Node Graph Visual */}
                      <svg viewBox="0 0 400 200" className="w-full max-w-[340px] h-full overflow-visible">
                        {/* Connecting lines */}
                        <path d="M 200,30 L 100,100 M 200,30 L 300,100 M 100,100 L 200,170 M 300,100 L 200,170 M 200,30 L 200,170" stroke="#0078D4" strokeWidth="1.5" className="opacity-60" />
                        <line x1="100" y1="100" x2="300" y2="100" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" />
                        
                        {/* Nodes */}
                        <circle cx="200" cy="30" r="14" fill="#0078D4" stroke="#fff" strokeWidth="2" className="animate-pulse" />
                        <text x="200" y="34" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">H</text>
                        <text x="200" y="12" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">HUMAN OWNER</text>

                        <circle cx="100" cy="100" r="14" fill="#0c1b30" stroke="#0078D4" strokeWidth="2" />
                        <text x="100" y="104" fill="#0078D4" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">A</text>
                        <text x="50" y="103" fill="#cbd5e1" fontSize="8" fontFamily="monospace" textAnchor="middle">AI AGENT</text>

                        <circle cx="300" cy="100" r="14" fill="#0c1b30" stroke="#0078D4" strokeWidth="2" />
                        <text x="300" y="104" fill="#0078D4" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">P</text>
                        <text x="350" y="103" fill="#cbd5e1" fontSize="8" fontFamily="monospace" textAnchor="middle">PERMISSION</text>

                        <circle cx="200" cy="170" r="14" fill="#1e1b4b" stroke="#3b82f6" strokeWidth="2" />
                        <text x="200" y="174" fill="#60a5fa" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">E</text>
                        <text x="200" y="192" fill="#cbd5e1" fontSize="8" fontFamily="monospace" textAnchor="middle">EVIDENCE RECORD</text>
                      </svg>
                      <span className="text-[10px] font-mono text-slate-300 mt-2">Active Continuous Relationship Mapping Panel</span>
                    </div>
                  )}

                  {activeSubView === 'RISK_PROPAGATION' && (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      {/* Risk propagation chains */}
                      <svg viewBox="0 0 400 200" className="w-full max-w-[340px] h-full overflow-visible">
                        <path d="M 50,100 L 150,100" stroke="#f43f5e" strokeWidth="2.5" className="animate-pulse" />
                        <path d="M 150,100 L 250,100" stroke="#f59e0b" strokeWidth="2.5" />
                        <path d="M 250,100 L 350,100" stroke="#10b981" strokeWidth="2" />

                        {/* Nodes */}
                        <circle cx="50" cy="100" r="12" fill="#f43f5e" stroke="#fff" strokeWidth="1.5" />
                        <text x="50" y="125" fill="#f43f5e" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ROGUE EXPLOIT</text>

                        <circle cx="150" cy="100" r="12" fill="#f59e0b" stroke="#fff" strokeWidth="1.5" />
                        <text x="150" y="125" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">AGENT STATE</text>

                        <circle cx="250" cy="100" r="12" fill="#10b981" stroke="#fff" strokeWidth="1.5" />
                        <text x="250" y="125" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ISOLATION BUFFER</text>

                        <circle cx="350" cy="100" r="12" fill="#0078D4" stroke="#fff" strokeWidth="1.5" />
                        <text x="350" y="125" fill="#0078D4" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">SECURE DATABASE</text>
                      </svg>
                      <span className="text-[10px] font-mono text-rose-400 mt-2 uppercase font-bold animate-pulse">⚡ Risk Intercepted Prior to Downstream Mutation</span>
                    </div>
                  )}

                  {activeSubView === 'OWNERSHIP' && (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      {/* Ownership audit visual */}
                      <svg viewBox="0 0 400 200" className="w-full max-w-[340px] h-full overflow-visible">
                        <line x1="200" y1="40" x2="200" y2="140" stroke="#0078D4" strokeWidth="2" />
                        
                        <circle cx="200" cy="40" r="16" fill="#0078D4" stroke="#fff" strokeWidth="2" />
                        <text x="200" y="44" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">CISO</text>
                        <text x="200" y="18" fill="#fff" fontSize="8.5" fontWeight="bold" textAnchor="middle">ENTRA PROXY PROFILE: KINGNARMER</text>

                        <circle cx="200" cy="140" r="16" fill="#0d1b2a" stroke="#10b981" strokeWidth="2" />
                        <text x="200" y="144" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">AGENT</text>
                        <text x="200" y="171" fill="#cbd5e1" fontSize="8" textAnchor="middle">Active Session Bind Key</text>
                      </svg>
                      <span className="text-[10px] font-mono text-emerald-400 mt-2 uppercase font-bold">100% Owner Verified Session Handshake</span>
                    </div>
                  )}

                  {activeSubView === 'TRUST_DEPS' && (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      {/* Trust dependencies network */}
                      <svg viewBox="0 0 400 200" className="w-full max-w-[340px] h-full overflow-visible">
                        <line x1="100" y1="50" x2="300" y2="50" stroke="#0078D4" strokeWidth="1.5" />
                        <line x1="100" y1="50" x2="200" y2="150" stroke="#0078D4" strokeWidth="1.5" />
                        <line x1="300" y1="50" x2="200" y2="150" stroke="#0078D4" strokeWidth="1.5" />

                        <circle cx="100" cy="50" r="12" fill="#0078D4" stroke="#fff" strokeWidth="1.5" />
                        <text x="100" y="72" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">AZURE OPENAI</text>

                        <circle cx="300" cy="50" r="12" fill="#0078D4" stroke="#fff" strokeWidth="1.5" />
                        <text x="300" y="72" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">SERVICENOW</text>

                        <circle cx="200" cy="150" r="12" fill="#10b981" stroke="#fff" strokeWidth="1.5" />
                        <text x="200" y="174" fill="#10b981" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">BASTION CORE</text>
                      </svg>
                      <span className="text-[10px] font-mono text-slate-300 mt-2">Continuous Multi-Tenant Gateway Trust Assurance</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

            </div>

            {/* View explanation based on selected view */}
            <div className="mt-4 p-4 bg-slate-900 rounded-2xl border border-white/5 space-y-1">
              <span className="text-[9px] font-mono text-sky-400 font-bold uppercase tracking-widest block">
                {activeSubView === 'RELATIONSHIPS' && "Continuous Map Description"}
                {activeSubView === 'RISK_PROPAGATION' && "Risk Mitigation Protocols"}
                {activeSubView === 'OWNERSHIP' && "Entra Profile Mapping"}
                {activeSubView === 'TRUST_DEPS' && "Ecosystem Bind Mechanics"}
              </span>
              <p className="text-xs text-white leading-relaxed font-light">
                {activeSubView === 'RELATIONSHIPS' && "Displays multi-hop tracking pathways connecting human managers, certifications, and active model execution gates."}
                {activeSubView === 'RISK_PROPAGATION' && "Proactively tracks model reasoning logic drift. When threat level thresholds exceed boundary levels, downstream APIs are isolated instantly."}
                {activeSubView === 'OWNERSHIP' && "Establishes a cryptographically signed employee ownership proxy record. Ensures no autonomous system executes commands outside its manager's explicit IAM permissions."}
                {activeSubView === 'TRUST_DEPS' && "Maps downstream file structures, database row limits, and transaction gateways to keep system state safe from unguided agent queries."}
              </p>
            </div>

          </div>

          {/* Right Column: Node definitions (Col Span 5) */}
          <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-between">
            
            <div className="bg-[#0b1d33]/90 p-4 rounded-3xl border-2 border-yellow-400/90 shadow-[0_0_30px_rgba(234,179,8,0.25),0_12px_45px_rgba(0,0,0,0.6)] hover:border-yellow-300 hover:shadow-[0_0_45px_rgba(234,179,8,0.45),0_12px_45px_rgba(0,0,0,0.6)] space-y-4 transition-all duration-300">
              <span className="text-[10px] font-mono text-yellow-400 uppercase tracking-widest font-black block">
                CONTINUOUSLY ACCUMULATED RELATIONSHIP DATA
              </span>
              
              <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1.5 scrollbar-thin">
                {nodesToMap.map((node, i) => {
                  const NodeIcon = node.icon;
                  return (
                    <div key={i} className="flex gap-3 p-3 bg-[#071524] rounded-xl border border-white/10 hover:border-yellow-500/50 hover:bg-slate-900 transition-all">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white flex-shrink-0 animate-pulse">
                        <NodeIcon className="w-4 h-4 text-yellow-400" />
                      </div>
                      <div className="space-y-0.5">
                        <strong className="text-xs font-mono text-white block uppercase tracking-wider font-extrabold">{node.title}</strong>
                        <p className="text-[11px] text-slate-200 leading-relaxed font-light">
                          {node.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Visual banner for flagship claim */}
            <div className="p-5 rounded-3xl bg-gradient-to-r from-sky-950/50 to-teal-950/50 border border-sky-500/10 space-y-2">
              <span className="text-[9.5px] font-mono text-sky-400 font-bold block uppercase tracking-wider">
                🛡️ Categorical Breakthrough
              </span>
              <p className="text-[11.5px] text-slate-200 leading-relaxed font-normal">
                Bastion is the first platform to transition AI security from simple firewalls into an interactive relationship model. By defining the topology of who owns, authorizes, and signs each agent action, we provide perfect clarity.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
