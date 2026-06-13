import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Activity, 
  AlertTriangle, 
  Zap, 
  Globe, 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  Lock, 
  Server,
  TrendingUp,
  Sliders,
  Play
} from 'lucide-react';

interface ThreatNode {
  id: string;
  city: string;
  country: string;
  x: number; // percentage width
  y: number; // percentage height
  ip: string;
  threatsToday: number;
  activeStatus: 'SECURE' | 'MITIGATING' | 'DEFLECTING';
  threatLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  recentThreatType: string;
  lastVetoTime: string;
}

interface LogEntry {
  id: string;
  time: string;
  node: string;
  threatType: string;
  status: string;
  severity: 'MEDIUM' | 'HIGH' | 'CRITICAL';
  latency: string;
}

export default function ThreatHeatmap() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-1');
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [simulationActive, setSimulationActive] = useState<boolean>(true);
  const [simulatedLoad, setSimulatedLoad] = useState<number>(34); // current events scaling
  const [inspectedTokens, setInspectedTokens] = useState<number>(148293040);
  const [vetoedAttemptsState, setVetoedAttemptsState] = useState<number>(8492);
  const [sparklineData, setSparklineData] = useState<number[]>([12, 18, 14, 25, 22, 19, 31, 28, 35, 30]);

  const [nodes, setNodes] = useState<ThreatNode[]>([
    {
      id: 'node-1',
      city: 'San Francisco',
      country: 'USA',
      x: 18,
      y: 35,
      ip: '107.151.22.84',
      threatsToday: 1840,
      activeStatus: 'DEFLECTING',
      threatLevel: 'HIGH',
      recentThreatType: 'Adversarial Prompt Injection',
      lastVetoTime: '0.8ms ago'
    },
    {
      id: 'node-2',
      city: 'New York',
      country: 'USA',
      x: 32,
      y: 36,
      ip: '184.22.140.109',
      threatsToday: 912,
      activeStatus: 'SECURE',
      threatLevel: 'MEDIUM',
      recentThreatType: 'PII Leakage Containment',
      lastVetoTime: '1.2ms ago'
    },
    {
      id: 'node-3',
      city: 'London',
      country: 'UK',
      x: 48,
      y: 28,
      ip: '82.165.12.24',
      threatsToday: 1245,
      activeStatus: 'DEFLECTING',
      threatLevel: 'HIGH',
      recentThreatType: 'Recursive Agent Loop Veto',
      lastVetoTime: '0.4ms ago'
    },
    {
      id: 'node-4',
      city: 'Frankfurt',
      country: 'Germany',
      x: 52,
      y: 30,
      ip: '46.12.254.19',
      threatsToday: 620,
      activeStatus: 'SECURE',
      threatLevel: 'LOW',
      recentThreatType: 'Credential Boundary Leak',
      lastVetoTime: '1.4ms ago'
    },
    {
      id: 'node-5',
      city: 'Tokyo',
      country: 'Japan',
      x: 84,
      y: 38,
      ip: '122.211.5.83',
      threatsToday: 1530,
      activeStatus: 'MITIGATING',
      threatLevel: 'HIGH',
      recentThreatType: 'Systemic Prompt Override Attempt',
      lastVetoTime: '0.9ms ago'
    },
    {
      id: 'node-6',
      city: 'Singapore',
      country: 'Singapore',
      x: 76,
      y: 58,
      ip: '210.14.99.141',
      threatsToday: 822,
      activeStatus: 'SECURE',
      threatLevel: 'MEDIUM',
      recentThreatType: 'Unauthorized SQL Read Prevention',
      lastVetoTime: '1.1ms ago'
    },
    {
      id: 'node-7',
      city: 'Sydney',
      country: 'Australia',
      x: 89,
      y: 78,
      ip: '101.167.24.12',
      threatsToday: 412,
      activeStatus: 'SECURE',
      threatLevel: 'LOW',
      recentThreatType: 'LLM Model Drift Quarantined',
      lastVetoTime: '2.4ms ago'
    },
    {
      id: 'node-8',
      city: 'São Paulo',
      country: 'Brazil',
      x: 39,
      y: 72,
      ip: '177.200.41.9',
      threatsToday: 518,
      activeStatus: 'DEFLECTING',
      threatLevel: 'MEDIUM',
      recentThreatType: 'Toxic Output Boundary Execution',
      lastVetoTime: '1.5ms ago'
    }
  ]);

  const [logs, setLogs] = useState<LogEntry[]>([
    { id: '1', time: '10:59:12', node: 'San Francisco', threatType: 'Prompt Injection Overdrive', status: 'VETOED', severity: 'HIGH', latency: '0.8ms' },
    { id: '2', time: '10:59:04', node: 'Tokyo', threatType: 'Recursive Agent Loop', status: 'CONTAINED', severity: 'CRITICAL', latency: '1.1ms' },
    { id: '3', time: '10:58:51', node: 'London', threatType: 'GDPR PII Export Attempt', status: 'VETOED', severity: 'HIGH', latency: '0.4ms' },
    { id: '4', time: '10:58:34', node: 'Frankfurt', threatType: 'Database Mutation Drift', status: 'CALIBRATED', severity: 'MEDIUM', latency: '1.4ms' },
    { id: '5', time: '10:58:15', node: 'Singapore', threatType: 'System prompt extraction', status: 'VETOED', severity: 'HIGH', latency: '1.1ms' }
  ]);

  // Handle active telemetry ticking
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (simulationActive) {
      interval = setInterval(() => {
        // Increment global statistics gracefully
        setInspectedTokens(prev => prev + Math.floor(Math.random() * 4800) + 1200);
        if (Math.random() > 0.4) {
          setVetoedAttemptsState(prev => prev + 1);
        }

        // Randomly update threat count on a random node
        setNodes(prev => prev.map(node => {
          if (node.id === `node-${Math.floor(Math.random() * 8) + 1}`) {
            const extra = Math.random() > 0.7 ? 1 : 0;
            const updatedLevel = node.threatsToday + extra > 1500 ? 'HIGH' : (node.threatsToday + extra > 800 ? 'MEDIUM' : 'LOW');
            const statusPool: ('SECURE' | 'MITIGATING' | 'DEFLECTING')[] = ['SECURE', 'MITIGATING', 'DEFLECTING'];
            const randomStatus = statusPool[Math.floor(Math.random() * statusPool.length)];
            return {
              ...node,
              threatsToday: node.threatsToday + extra,
              threatLevel: updatedLevel as 'LOW' | 'MEDIUM' | 'HIGH',
              activeStatus: extra > 0 ? randomStatus : node.activeStatus,
              lastVetoTime: extra > 0 ? `${(Math.random() * 1.5 + 0.2).toFixed(1)}ms ago` : node.lastVetoTime
            };
          }
          return node;
        }));

        // Dynamically rotate sparklines
        setSparklineData(prev => {
          const next = [...prev.slice(1)];
          const delta = Math.floor(Math.random() * 20) - 9;
          const newVal = Math.max(8, Math.min(65, prev[prev.length - 1] + delta));
          next.push(newVal);
          return next;
        });

        // Push new rolling threat log
        if (Math.random() > 0.6) {
          const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
          const threatTypes = [
            'Indirect Prompt Injection',
            'Overprivileged API Call',
            'SSRF Vector via Agent',
            'PII Leakage blocked',
            'Infinite loop threshold hit',
            'Credential boundary violation'
          ];
          const severities = ['MEDIUM', 'HIGH', 'CRITICAL'] as const;
          const statusTypes = ['VETOED', 'CONTAINED', 'ISOLATED'] as const;
          
          const now = new Date();
          const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

          const newLog: LogEntry = {
            id: Date.now().toString(),
            time: timeString,
            node: randomNode.city,
            threatType: threatTypes[Math.floor(Math.random() * threatTypes.length)],
            status: statusTypes[Math.floor(Math.random() * statusTypes.length)],
            severity: severities[Math.floor(Math.random() * severities.length)],
            latency: `${(Math.random() * 1.6 + 0.3).toFixed(1)}ms`
          };

          setLogs(prev => [newLog, ...prev.slice(0, 5)]);
        }

      }, 1500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [simulationActive, nodes]);

  // Filter nodes for user views
  const filteredNodes = nodes.filter(node => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'CRITICAL') return node.threatLevel === 'HIGH';
    if (activeFilter === 'DEFLECTING') return node.activeStatus === 'DEFLECTING' || node.activeStatus === 'MITIGATING';
    return true;
  });

  const selectedNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];

  const triggerAttackSpike = () => {
    setSimulatedLoad(85);
    setSparklineData(prev => prev.map(v => Math.min(85, v + Math.floor(Math.random() * 35) + 15)));
    // Instantly add high risk logs
    const spikeNode = nodes[Math.floor(Math.random() * nodes.length)];
    const spikeLog: LogEntry = {
      id: `spike-${Date.now()}`,
      time: 'SPIKE ACTIVE',
      node: spikeNode.city,
      threatType: 'DDoS LLM Token Starvation Attempt',
      status: 'DEFLECTED',
      severity: 'CRITICAL',
      latency: '0.2ms'
    };
    setLogs(prev => [spikeLog, ...prev.slice(0, 5)]);

    setTimeout(() => {
      setSimulatedLoad(prev => Math.max(34, prev - 25));
    }, 4000);
  };

  return (
    <section className="bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 p-6 lg:p-8 relative overflow-hidden shadow-2xl space-y-8">
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(244,244,249,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(244,244,249,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-40 z-0" />
      
      {/* Corner Lights Decor */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-800">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono font-bold text-indigo-400 tracking-wider">
            <Globe className="w-3.5 h-3.5 text-indigo-400 animate-spin-slow" />
            LIVE SECURITY OBSERVATORIES
          </div>
          <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
            Real-time Global Threat Deflection Matrix
          </h3>
          <p className="text-xs text-slate-400 max-w-2xl font-light">
            An interactive live status model monitoring prompt injection deflection, PII leak containment, and cognitive execution drifts across our distributed edge validation endpoints.
          </p>
        </div>

        {/* Live Status indicator */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 font-bold">bastion engine ACTIVE</span>
          </div>
          <button 
            onClick={triggerAttackSpike}
            className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold font-mono transition-all flex items-center gap-1.5 shadow-lg shadow-indigo-600/15"
          >
            <Zap className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
            SIMULATE PEAK STRESS
          </button>
        </div>
      </div>

      {/* Top statistics banners */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-4 flex items-center justify-between shadow-inner">
          <div className="space-y-1.5">
            <span className="text-[9.5px] font-mono tracking-wider text-slate-400 uppercase font-semibold block">Total Inspected Tokens</span>
            <p className="text-lg md:text-xl font-bold font-mono tracking-tight text-white">{inspectedTokens.toLocaleString()}</p>
          </div>
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center text-indigo-400">
            <Cpu className="w-4 h-4" />
          </div>
        </div>

        <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-4 flex items-center justify-between shadow-inner">
          <div className="space-y-1.5">
            <span className="text-[9.5px] font-mono tracking-wider text-slate-400 uppercase font-semibold block">Deflections today</span>
            <p className="text-lg md:text-xl font-bold font-mono tracking-tight text-[#10b981]">{vetoedAttemptsState.toLocaleString()}</p>
          </div>
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center text-emerald-400">
            <Shield className="w-4 h-4" />
          </div>
        </div>

        <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-4 flex items-center justify-between shadow-inner">
          <div className="space-y-1.5">
            <span className="text-[9.5px] font-mono tracking-wider text-slate-400 uppercase font-semibold block">Veto Execution Latency</span>
            <p className="text-lg md:text-xl font-bold font-mono tracking-tight text-white">1.2ms <span className="text-[9px] text-slate-500">avg</span></p>
          </div>
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center text-indigo-400">
            <Activity className="w-4 h-4" />
          </div>
        </div>

        <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-4 flex items-center justify-between shadow-inner">
          <div className="space-y-1.5 w-full">
            <span className="text-[9.5px] font-mono tracking-wider text-slate-400 uppercase font-semibold block flex justify-between">
              <span>Real-time Host Load</span>
              <span className="text-indigo-400">{simulatedLoad}%</span>
            </span>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-indigo-500 h-full transition-all duration-500" 
                style={{ width: `${simulatedLoad}%` }} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main interactive segment Grid layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left column: Feed & Filters (lg:col-span-4) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
          <div className="bg-slate-950/50 border border-slate-800/70 rounded-xl p-4 space-y-4 flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" /> Live Prevention stream
              </span>
              <div className="flex gap-1">
                {['ALL', 'CRITICAL', 'DEFLECTING'].map((filt) => (
                  <button
                    key={filt}
                    onClick={() => setActiveFilter(filt)}
                    className={`px-1.5 py-0.5 rounded text-[8px] font-mono font-bold transition-all ${
                      activeFilter === filt 
                        ? 'bg-indigo-600/30 text-indigo-400 border border-indigo-500/30' 
                        : 'text-slate-500 border border-transparent hover:text-slate-350'
                    }`}
                  >
                    {filt}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Live logs stack */}
            <div className="space-y-2.5 overflow-hidden flex-1 overflow-y-auto max-h-[290px] pr-1">
              <AnimatePresence initial={false}>
                {logs.map((log) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.3 }}
                    className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-[11px] flex justify-between items-center group/log cursor-crosshair hover:bg-slate-900 transition-colors"
                  >
                    <div className="space-y-1 truncate max-w-[80%]">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-mono text-slate-500">{log.time}</span>
                        <span className="font-mono font-bold text-slate-300 truncate">{log.node} Node</span>
                      </div>
                      <p className="text-slate-400 font-light truncate group-hover/log:text-white transition-colors">{log.threatType}</p>
                    </div>

                    <div className="text-right flex flex-col items-end gap-1 flex-shrink-0">
                      <span className={`px-1.5 py-0.2 rounded text-[7.5px] font-mono font-bold ${
                        log.severity === 'CRITICAL' 
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' 
                          : log.severity === 'HIGH'
                          ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}>
                        {log.severity}
                      </span>
                      <span className="text-[8.5px] font-mono text-slate-500">{log.latency}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Quick diagnostics spark graph */}
          <div className="bg-slate-950/50 border border-slate-800/70 rounded-xl p-4 space-y-2.5">
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-slate-400 font-bold uppercase flex items-center gap-1">
                <Sliders className="w-3.5 h-3.5 text-emerald-400" /> DEVIATION FREQUENCY
              </span>
              <span className="text-[#10b981] font-bold">1.2ms Avg response</span>
            </div>

            {/* Sparkline Canvas rendering */}
            <div className="h-12 w-full flex items-end gap-[3px] pt-2">
              {sparklineData.map((val, id) => (
                <div key={id} className="flex-1 flex flex-col justify-end h-full">
                  <div 
                    className="bg-gradient-to-t from-indigo-650/40 to-indigo-400 rounded-sm w-full transition-all duration-300"
                    style={{ height: `${val}%` }}
                    title={`Metric slot ${id}: ${val} telemetry signals`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle column: Map & Coordinates (lg:col-span-8) */}
        <div className="lg:col-span-8 bg-slate-950/60 border border-slate-800/70 rounded-xl p-4 flex flex-col justify-between relative min-h-[380px]">
          
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-2 border-b border-slate-850">
            <span className="flex items-center gap-1.5"><Sliders className="w-3.5 h-3.5 text-indigo-400" /> BASTION CONTROL PLANE: COORDINATE PROJECTION</span>
            <span className="text-[10px] text-slate-500 uppercase">{filteredNodes.length} ACTIVE OPERATIONAL NODES SECURED</span>
          </div>

          {/* Global Abstract Grid Vector Coordinate stage */}
          <div className="relative w-full h-[260px] md:h-[300px] flex items-center justify-center my-4 select-none">
            {/* World grid background map SVG pattern representation */}
            <svg className="absolute inset-0 w-full h-full text-slate-800/25 opacity-40" viewBox="0 0 1000 450" fill="currentColor">
              {/* Abstract Dotted Continents Maps */}
              {/* North America */}
              <circle cx="150" cy="120" r="15" />
              <circle cx="180" cy="140" r="28" />
              <circle cx="210" cy="180" r="20" />
              <circle cx="110" cy="160" r="10" />
              {/* South America */}
              <circle cx="340" cy="300" r="18" />
              <circle cx="350" cy="340" r="25" />
              <circle cx="370" cy="380" r="12" />
              {/* Europe & Africa */}
              <circle cx="480" cy="150" r="22" />
              <circle cx="510" cy="170" r="30" />
              <circle cx="520" cy="240" r="20" />
              <circle cx="540" cy="310" r="28" />
              <circle cx="560" cy="360" r="15" />
              {/* Asia & Australia */}
              <circle cx="720" cy="160" r="25" />
              <circle cx="760" cy="180" r="35" />
              <circle cx="820" cy="210" r="40" />
              <circle cx="780" cy="260" r="15" />
              <circle cx="840" cy="350" r="22" />
              <circle cx="860" cy="380" r="18" />

              {/* Laser telemetries scanning paths */}
              {nodes.map((node, i) => {
                const targetNode = nodes[(i + 1) % nodes.length];
                const x1 = (node.x / 100) * 1000;
                const y1 = (node.y / 100) * 450;
                const x2 = (targetNode.x / 100) * 1000;
                const y2 = (targetNode.y / 100) * 450;
                return (
                  <g key={`path-${node.id}`} className="opacity-15">
                    <line 
                      x1={x1} y1={y1} x2={x2} y2={y2} 
                      stroke="#818cf8" strokeWidth="1" 
                      strokeDasharray="5,5" 
                    />
                  </g>
                );
              })}
            </svg>

            {/* Glowing interactive nodes points mapped onto percentage coordinates */}
            {filteredNodes.map((node) => {
              const isSelected = node.id === selectedNodeId;
              const isDeflecting = node.activeStatus === 'DEFLECTING' || node.activeStatus === 'MITIGATING';
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                >
                  {/* Outer pulsing ring */}
                  <span className={`absolute inset-0 rounded-full w-8 h-8 -left-2.5 -top-2.5 animate-ping opacity-25 ${
                    isDeflecting ? 'bg-indigo-400' : 'bg-emerald-400'
                  }`} />
                  
                  {/* Medium glowing outline */}
                  <span className={`absolute inset-0 rounded-full w-5 h-5 -left-1 -top-1 block ${
                    isDeflecting ? 'bg-indigo-500/30' : 'bg-emerald-500/30'
                  } ${isSelected ? 'scale-125' : 'group-hover:scale-110'} transition-all`} />

                  {/* Core pointer */}
                  <div className={`w-3 h-3 rounded-full border-2 border-white relative z-30 transition-transform ${
                    isDeflecting ? 'bg-indigo-600' : 'bg-emerald-500'
                  } ${isSelected ? 'scale-125 shadow-lg shadow-indigo-600/50' : 'group-hover:scale-110'}`} />

                  {/* Micro label card */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-950/90 border border-slate-800 px-1.5 py-0.5 rounded text-[8px] font-mono tracking-tight text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-all">
                    {node.city}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic focused diagnostics card overlay (Under map) */}
          <div className="bg-slate-950/60 border border-slate-850 rounded-xl p-4 relative z-20 flex flex-col md:flex-row justify-between gap-4 items-stretch shadow-lg">
            <div className="space-y-2 max-w-lg">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white font-display uppercase tracking-wider">{selectedNode.city} Edge Gateway</span>
                <span className={`px-1.5 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase leading-none ${
                  selectedNode.activeStatus === 'DEFLECTING' 
                    ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' 
                    : selectedNode.activeStatus === 'MITIGATING' 
                    ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20 animate-pulse'
                    : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                }`}>
                  {selectedNode.activeStatus}
                </span>
              </div>
              <div className="grid grid-cols-2 text-[10.5px] font-mono text-slate-400 gap-x-4 gap-y-1">
                <div>IP Address: <span className="text-white font-normal">{selectedNode.ip}</span></div>
                <div>Risk Index: <span className={`font-semibold ${
                  selectedNode.threatLevel === 'HIGH' ? 'text-rose-400' : selectedNode.threatLevel === 'MEDIUM' ? 'text-amber-400' : 'text-emerald-400'
                }`}>{selectedNode.threatLevel} LEVEL</span></div>
                <div>Recent Deflection: <span className="text-slate-300 font-normal">{selectedNode.recentThreatType}</span></div>
                <div>Latency of Veto: <span className="text-indigo-400 font-semibold">{selectedNode.lastVetoTime}</span></div>
              </div>
            </div>

            <div className="flex flex-row md:flex-col justify-between items-end border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 md:pl-4 self-stretch text-right min-w-[140px] flex-shrink-0">
              <div className="text-left md:text-right">
                <span className="text-[9px] font-mono text-slate-500 uppercase block">NODE DEFLECTIONS TODAY</span>
                <span className="text-lg font-black font-mono text-white leading-tight">{selectedNode.threatsToday.toLocaleString()}</span>
              </div>
              <button 
                onClick={() => {
                  setSelectedNodeId(nodes[(nodes.findIndex(n => n.id === selectedNodeId) + 1) % nodes.length].id);
                }}
                className="text-[9.5px] font-mono font-bold text-indigo-400 hover:text-indigo-300 cursor-pointer flex items-center gap-1 leading-none"
              >
                NEXT OBSERVATORY &gt;
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Footer Systemic Assurance Info block */}
      <div className="bg-slate-950/20 border border-slate-850/80 rounded-xl p-3.5 text-center flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-400">
          <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
          <span>Fiduciary Agent compliance validation confirmed. Real-time protection ring covering 8 global edge nodes.</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-slate-500">
          <span>PII ANONYMIZER: ON</span>
          <span>•</span>
          <span>VETO TIMEOUT LIMIT: 4ms</span>
          <span>•</span>
          <span>ZERO DATA PERSISTED</span>
        </div>
      </div>

    </section>
  );
}
