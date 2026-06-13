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
  Play,
  Pause,
  RefreshCw,
  Compass,
  Radio,
  Eye,
  ShieldAlert,
  Fingerprint
} from 'lucide-react';

interface ThreatNode {
  id: string;
  city: string;
  country: string;
  x: number; // percentage width
  y: number; // percentage height
  ip: string;
  threatsToday: number;
  activeStatus: 'SECURE' | 'MITIGATING' | 'DEFLECTING' | 'ISOLATING';
  threatLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
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
  const [simulatedLoad, setSimulatedLoad] = useState<number>(31);
  const [inspectedTokens, setInspectedTokens] = useState<number>(148715963);
  const [deflectionsToday, setDeflectionsToday] = useState<number>(8555);
  const [activeScenario, setActiveScenario] = useState<string>('Standard Monitor');
  const [radarDegree, setRadarDegree] = useState<number>(0);
  
  const [sparklineData, setSparklineData] = useState<number[]>([
    25, 28, 22, 35, 42, 38, 45, 52, 48, 62, 55, 68, 70, 64, 58, 60, 65, 78, 85, 90
  ]);

  const [nodes, setNodes] = useState<ThreatNode[]>([
    {
      id: 'node-1',
      city: 'San Francisco',
      country: 'USA',
      x: 15,
      y: 35,
      ip: '107.151.22.84',
      threatsToday: 1845,
      activeStatus: 'DEFLECTING',
      threatLevel: 'HIGH',
      recentThreatType: 'Direct Prompt Injection Overdrive',
      lastVetoTime: '0.8ms'
    },
    {
      id: 'node-2',
      city: 'New York',
      country: 'USA',
      x: 28,
      y: 34,
      ip: '184.22.140.109',
      threatsToday: 912,
      activeStatus: 'SECURE',
      threatLevel: 'MEDIUM',
      recentThreatType: 'PII Leakage Containment',
      lastVetoTime: '1.2ms'
    },
    {
      id: 'node-3',
      city: 'London',
      country: 'UK',
      x: 48,
      y: 26,
      ip: '82.165.12.24',
      threatsToday: 1245,
      activeStatus: 'DEFLECTING',
      threatLevel: 'HIGH',
      recentThreatType: 'Hierarchical Agent Boundary Slip',
      lastVetoTime: '0.4ms'
    },
    {
      id: 'node-4',
      city: 'Frankfurt',
      country: 'Germany',
      x: 52,
      y: 28,
      ip: '46.12.254.19',
      threatsToday: 620,
      activeStatus: 'SECURE',
      threatLevel: 'LOW',
      recentThreatType: 'System Credential Extraction Attempt',
      lastVetoTime: '1.4ms'
    },
    {
      id: 'node-5',
      city: 'Tokyo',
      country: 'Japan',
      x: 82,
      y: 36,
      ip: '122.211.5.83',
      threatsToday: 1530,
      activeStatus: 'ISOLATING',
      threatLevel: 'CRITICAL',
      recentThreatType: 'Infinite Recursive Cognitive Execution Loop',
      lastVetoTime: '0.6ms'
    },
    {
      id: 'node-6',
      city: 'Singapore',
      country: 'Singapore',
      x: 74,
      y: 58,
      ip: '210.14.99.141',
      threatsToday: 822,
      activeStatus: 'DEFLECTING',
      threatLevel: 'HIGH',
      recentThreatType: 'Unauthorized CloudSQL Read Hijack',
      lastVetoTime: '1.1ms'
    },
    {
      id: 'node-7',
      city: 'Sydney',
      country: 'Australia',
      x: 88,
      y: 78,
      ip: '101.167.24.12',
      threatsToday: 412,
      activeStatus: 'SECURE',
      threatLevel: 'LOW',
      recentThreatType: 'Model State Drift Anomaly',
      lastVetoTime: '2.4ms'
    },
    {
      id: 'node-8',
      city: 'São Paulo',
      country: 'Brazil',
      x: 36,
      y: 72,
      ip: '177.200.41.9',
      threatsToday: 518,
      activeStatus: 'DEFLECTING',
      threatLevel: 'MEDIUM',
      recentThreatType: 'Toxic Response Serialization Attempt',
      lastVetoTime: '1.5ms'
    }
  ]);

  const [logs, setLogs] = useState<LogEntry[]>([
    { id: '1', time: '11:15:20', node: 'Tokyo', threatType: 'Infinite loop threshold hit', status: 'VETOED', severity: 'CRITICAL', latency: '0.6ms' },
    { id: '2', time: '11:14:55', node: 'Sydney', threatType: 'Credential boundary violation', status: 'VETOED', severity: 'HIGH', latency: '2.4ms' },
    { id: '3', time: '11:14:12', node: 'London', threatType: 'PII Leakage blocked', status: 'CONTAINED', severity: 'HIGH', latency: '1.4ms' },
    { id: '4', time: '11:13:48', node: 'Singapore', threatType: 'Credential boundary violation', status: 'VETOED', severity: 'HIGH', latency: '1.6ms' },
    { id: '5', time: '11:12:02', node: 'San Francisco', threatType: 'Adversarial Prompt Injection', status: 'DEFLECTED', severity: 'CRITICAL', latency: '0.8ms' }
  ]);

  // Handle ticking radar degree
  useEffect(() => {
    const interval = setInterval(() => {
      setRadarDegree(prev => (prev + 3) % 360);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  // Handle active telemetry simulation ticking
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (simulationActive) {
      interval = setInterval(() => {
        // Safe, fluid statistics tick
        setInspectedTokens(prev => prev + Math.floor(Math.random() * 6400) + 1800);
        
        const deflectionAddedChance = Math.random() > 0.45;
        if (deflectionAddedChance) {
          setDeflectionsToday(prev => prev + 1);
        }

        // Random log injection with genuine-looking security payloads
        if (Math.random() > 0.65) {
          const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
          const threatClasses = [
            'Indirect Prompt Hijacking',
            'SSRF Node Boundary Probe',
            'Credential Boundary Slip',
            'System Prompt Leak Prevented',
            'Autonomous Loop Chain Halting',
            'SQL Mutation Containment Event'
          ];
          const severityPool = ['MEDIUM', 'HIGH', 'CRITICAL'] as const;
          const statusPool = ['VETOED', 'CONTAINED', 'DEFLECTED'] as const;
          
          const now = new Date();
          const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
          
          const nextLog: LogEntry = {
            id: Date.now().toString(),
            time: timeStr,
            node: randomNode.city,
            threatType: threatClasses[Math.floor(Math.random() * threatClasses.length)],
            status: statusPool[Math.floor(Math.random() * statusPool.length)],
            severity: severityPool[Math.floor(Math.random() * severityPool.length)],
            latency: `${(Math.random() * 1.8 + 0.2).toFixed(1)}ms`
          };

          setLogs(prev => [nextLog, ...prev.slice(0, 5)]);

          // Increment that node's counter
          setNodes(prev => prev.map(n => {
            if (n.city === randomNode.city) {
              const prevThreats = n.threatsToday + 1;
              const nextLevel = prevThreats > 1500 ? 'HIGH' : (prevThreats > 800 ? 'MEDIUM' : 'LOW');
              return {
                ...n,
                threatsToday: prevThreats,
                threatLevel: (n.id === 'node-5' ? 'CRITICAL' : nextLevel) as any,
                lastVetoTime: `${(Math.random() * 1.5 + 0.2).toFixed(1)}ms`
              };
            }
            return n;
          }));
        }

        // Rolling sparkline frequency
        setSparklineData(prev => {
          const next = [...prev.slice(1)];
          const variation = Math.floor(Math.random() * 18) - 8;
          const updated = Math.max(10, Math.min(95, prev[prev.length - 1] + variation));
          next.push(updated);
          return next;
        });

      }, 1400);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [simulationActive, nodes]);

  // Core visual Scenario triggers to impress C-suite
  const triggerScenario = (scenarioName: string) => {
    setActiveScenario(scenarioName);
    
    if (scenarioName === 'Prompt Injection Lockout') {
      setSimulatedLoad(88);
      // Spike all statistics
      setDeflectionsToday(prev => prev + 12);
      // Alter node levels to high/critical
      setNodes(prev => prev.map(n => ({
        ...n,
        threatLevel: (n.id === 'node-1' || n.id === 'node-3' || n.id === 'node-5') ? 'CRITICAL' : 'HIGH',
        activeStatus: 'DEFLECTING',
        lastVetoTime: '0.2ms'
      })));

      const emergencyLog: LogEntry = {
        id: `scen-${Date.now()}`,
        time: 'SPIKE ENGAGED',
        node: 'San Francisco',
        threatType: 'DDoS LLM Token Poisoning Deflected',
        status: 'EMERGENCY VETO',
        severity: 'CRITICAL',
        latency: '0.1ms'
      };
      setLogs(prev => [emergencyLog, ...prev.slice(0, 5)]);

    } else if (scenarioName === 'PII Exfiltration Veto') {
      setSimulatedLoad(62);
      setDeflectionsToday(prev => prev + 4);
      setNodes(prev => prev.map(n => {
        if (n.id === 'node-2' || n.id === 'node-4') {
          return {
            ...n,
            threatLevel: 'HIGH',
            activeStatus: 'ISOLATING',
            recentThreatType: 'PII Leak Block: SSA Security Guard',
            lastVetoTime: '0.5ms'
          };
        }
        return n;
      }));
      const piiLog: LogEntry = {
        id: `scen-${Date.now()}`,
        time: 'MITIGATION',
        node: 'New York',
        threatType: 'Customer SSN Regex Leak Mitigated',
        status: 'CONTAINED',
        severity: 'HIGH',
        latency: '0.4ms'
      };
      setLogs(prev => [piiLog, ...prev.slice(0, 5)]);

    } else if (scenarioName === 'Recursive Loop Storm') {
      setSimulatedLoad(94);
      setNodes(prev => prev.map(n => ({
        ...n,
        threatLevel: 'CRITICAL',
        activeStatus: 'ISOLATING'
      })));
      const loopLog: LogEntry = {
        id: `scen-${Date.now()}`,
        time: 'LOOP STORM',
        node: 'Tokyo',
        threatType: 'Circular Agent Message Cascade Halted',
        status: 'LOOP TERMINATED',
        severity: 'CRITICAL',
        latency: '0.3ms'
      };
      setLogs(prev => [loopLog, ...prev.slice(0, 5)]);
    } else {
      // Restore standard configuration
      setSimulatedLoad(31);
      setNodes(prev => prev.map((n, i) => {
        const statuses = ['DEFLECTING', 'SECURE', 'DEFLECTING', 'SECURE', 'ISOLATING', 'DEFLECTING', 'SECURE', 'DEFLECTING'];
        const levels = ['HIGH', 'MEDIUM', 'HIGH', 'LOW', 'CRITICAL', 'HIGH', 'LOW', 'MEDIUM'];
        return {
          ...n,
          threatLevel: levels[i] as any,
          activeStatus: statuses[i] as any
        };
      }));
    }

    // Smooth recovery delay
    setTimeout(() => {
      setSimulatedLoad(prev => Math.max(30, Math.floor(prev * 0.7)));
    }, 4000);
  };

  const filteredNodes = nodes.filter(node => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'CRITICAL') return node.threatLevel === 'HIGH' || node.threatLevel === 'CRITICAL';
    if (activeFilter === 'DEFLECTING') return node.activeStatus === 'DEFLECTING' || node.activeStatus === 'ISOLATING';
    return true;
  });
  const selectedNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];
  return (
    <section className="bg-gradient-to-b from-[#0a051d] via-[#05020a] to-[#010005] text-slate-100 rounded-2xl border border-purple-500/20 p-6 lg:p-8 relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] space-y-8">
      {/* Hyper-dense glowing backdrop overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(147,51,234,0.15)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-60 z-0" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Futuristic Header with High Tech Coordinates */}
      <div className="relative z-10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 pb-6 border-b border-purple-500/20">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-[10px] font-mono font-bold text-purple-300 tracking-wider uppercase">
              <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              GLOBAL INTRUSION DEFLECTION MATRIX
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 tracking-widest hidden sm:inline">
              SECURE_PLANE_V4.92 // PORT 3000 // CONSOLE_MODE
            </span>
          </div>
          
          <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-white tracking-tight leading-none">
            Real-Time Edge Agent Safeguards
          </h3>
          <p className="text-[13px] text-purple-200/70 max-w-3xl font-normal leading-relaxed">
            Interactive visual control telemetry tracking cognitive model drift, recursive loop traps, and instant local prompt injection deflections at global CDN point-of-presence validation rings.
          </p>
        </div>

        {/* Dynamic simulator switches and state feeds */}
        <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
          {/* Pause/Play toggle */}
          <button
            onClick={() => setSimulationActive(!simulationActive)}
            className={`px-3 py-1.5 rounded-lg border text-[11px] font-mono font-bold transition-all flex items-center gap-1.5 ${
              simulationActive 
                ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25' 
                : 'bg-amber-500/15 text-amber-300 border-amber-500/30 hover:bg-amber-500/25'
            }`}
          >
            {simulationActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-amber-300 animate-ping" />}
            {simulationActive ? 'SYSTEM ACTIVE' : 'SYSTEM PAUSED'}
          </button>

          {/* Quick Scenario Picker */}
          <div className="flex items-center gap-1.5 bg-slate-950/60 p-1 rounded-lg border border-purple-500/20">
            {[
              { name: 'Standard', key: 'Standard Monitor' },
              { name: 'Prompt Spike', key: 'Prompt Injection Lockout' },
              { name: 'PII Exfil', key: 'PII Exfiltration Veto' },
              { name: 'Loop Storm', key: 'Recursive Loop Storm' }
            ].map((scen) => (
              <button
                key={scen.key}
                onClick={() => triggerScenario(scen.key)}
                className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold transition-all ${
                  activeScenario === scen.key
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 font-extrabold text-white shadow-[0_0_12px_rgba(6,182,212,0.4)] border-purple-500/30'
                    : 'text-purple-200/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {scen.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cybernetic telemetry display cards */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Dynamic Tokens Inspected card */}
        <div className="bg-slate-950/60 border border-purple-500/20 rounded-xl p-4 flex items-center justify-between hover:border-cyan-400/50 hover:bg-slate-900/40 transition-all relative overflow-hidden group shadow-md backdrop-blur-md">
          <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-wider text-purple-300/70 uppercase font-semibold block">Total Inspected Tokens</span>
            <p className="text-xl md:text-2xl font-black font-mono tracking-tight text-white select-all">
              {inspectedTokens.toLocaleString()}
            </p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-cyan-950/50 border border-cyan-800/50 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
            <Cpu className="w-5 h-5" />
          </div>
        </div>

        {/* Dynamic Deflections card */}
        <div className="bg-slate-950/60 border border-purple-500/20 rounded-xl p-4 flex items-center justify-between hover:border-[#10b981]/50 hover:bg-slate-900/40 transition-all relative overflow-hidden group shadow-md backdrop-blur-md">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#10b981]" />
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-wider text-purple-300/70 uppercase font-semibold block">Deflections Today</span>
            <p className="text-xl md:text-2xl font-black font-mono tracking-tight text-[#10b981] select-all">
              {deflectionsToday.toLocaleString()}
            </p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-emerald-950/50 border border-emerald-800/50 flex items-center justify-center text-[#10b981] group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <Shield className="w-5 h-5 animate-pulse" />
          </div>
        </div>

        {/* Average Latency card */}
        <div className="bg-slate-950/60 border border-purple-500/20 rounded-xl p-4 flex items-center justify-between hover:border-pink-400/50 hover:bg-slate-900/40 transition-all relative overflow-hidden group shadow-md backdrop-blur-md">
          <div className="absolute top-0 left-0 w-1 h-full bg-pink-500" />
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-wider text-purple-300/70 uppercase font-semibold block">Veto Latency Core</span>
            <p className="text-xl md:text-2xl font-black font-mono tracking-tight text-white">
              0.8ms <span className="text-xs text-pink-400 font-medium tracking-normal align-middle">avg</span>
            </p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-pink-950/50 border border-pink-800/50 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
            <Activity className="w-5 h-5" />
          </div>
        </div>

        {/* Simulated Load progress bar */}
        <div className="bg-slate-950/60 border border-purple-500/20 rounded-xl p-4 flex items-center justify-between hover:border-indigo-400/50 hover:bg-slate-900/40 transition-all relative overflow-hidden shadow-md backdrop-blur-md">
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
          <div className="space-y-2 w-full">
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-purple-300/70 uppercase font-semibold">Active Threat Load</span>
              <span className={`font-bold ${simulatedLoad > 75 ? 'text-rose-400 animate-pulse' : 'text-cyan-400'}`}>{simulatedLoad}%</span>
            </div>
            <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
              <div 
                className={`h-full transition-all duration-700 rounded-full bg-gradient-to-r ${
                  simulatedLoad > 75 ? 'from-amber-400 to-rose-500' : 'from-cyan-500 to-indigo-500'
                }`} 
                style={{ width: `${simulatedLoad}%` }} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main split dashboard section */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left column: Feed stream with premium scrolling & Spark Graph */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
          <div className="bg-slate-950/60 border border-purple-500/20 rounded-xl p-4 space-y-4 flex flex-col flex-1 shadow-md backdrop-blur-md">
            <div className="flex items-center justify-between pb-2 border-b border-purple-500/20">
              <span className="text-[10px] font-mono tracking-wider text-purple-200 uppercase font-bold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> 
                System Deflection Feed
              </span>
              <div className="flex gap-1">
                {['ALL', 'CRITICAL', 'DEFLECTING'].map((filt) => (
                  <button
                    key={filt}
                    onClick={() => setActiveFilter(filt)}
                    className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold transition-all ${
                      activeFilter === filt 
                        ? 'bg-cyan-500 text-slate-950 font-black shadow-[0_0_10px_rgba(6,182,212,0.4)]' 
                        : 'text-purple-300/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {filt}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Live logs slider stack */}
            <div className="space-y-2.5 overflow-hidden flex-1 overflow-y-auto max-h-[295px] pr-1 scrollbar-thin scrollbar-thumb-purple-900">
              <AnimatePresence initial={false}>
                {logs.map((log) => {
                  const nodeInstance = nodes.find(n => n.city === log.node);
                  return (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.25 }}
                      onClick={() => {
                        if (nodeInstance) setSelectedNodeId(nodeInstance.id);
                      }}
                      className="p-3 rounded-lg bg-[#0c0822]/60 border border-purple-950 hover:bg-[#120a2f]/70 hover:border-cyan-500/40 text-[11.5px] flex justify-between items-center group/log cursor-pointer transition-all shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                    >
                      <div className="space-y-1.5 truncate max-w-[76%]">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-mono text-purple-300/50 font-medium">{log.time}</span>
                          <span className="font-mono font-bold text-cyan-400 select-all truncate uppercase">{log.node} NODE</span>
                        </div>
                        <p className="text-purple-100 font-normal truncate group-hover/log:text-white transition-colors">
                          {log.threatType}
                        </p>
                      </div>

                      <div className="text-right flex flex-col items-end gap-1 flex-shrink-0">
                        <span className={`px-2 py-0.5 rounded-md text-[8px] font-mono font-black ${
                          log.severity === 'CRITICAL' 
                            ? 'bg-rose-500/25 text-rose-300 border border-rose-500/40 animate-pulse' 
                            : log.severity === 'HIGH'
                            ? 'bg-purple-500/25 text-[#c7d2fe] border border-purple-500/40'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        }`}>
                          {log.severity}
                        </span>
                        <span className="text-[9px] font-mono text-purple-300/70">{log.latency}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Spark telemetry graph segment */}
          <div className="bg-slate-950/60 border border-purple-500/20 rounded-xl p-4 space-y-3 shadow-md backdrop-blur-md">
            <div className="flex justify-between items-center text-[10px] font-mono text-purple-300 uppercase">
              <span className="font-bold flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> 
                DEVIATION TELEMETRY SCAN
              </span>
              <span className="text-emerald-400 font-bold select-all">88.58% INLINE CONFORMITY</span>
            </div>

            {/* Telemetry spark graphs */}
            <div className="h-14 w-full flex items-end gap-[4px] pt-3 px-1 border-b border-purple-500/20">
              {sparklineData.map((val, id) => (
                <div key={id} className="flex-1 flex flex-col justify-end h-full">
                  <div 
                    className={`rounded-sm w-full transition-all duration-300 ${
                      val > 75 
                        ? 'bg-gradient-to-t from-rose-500/50 to-rose-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]' 
                        : val > 45 
                        ? 'bg-gradient-to-t from-indigo-500/50 to-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.3)]' 
                        : 'bg-gradient-to-t from-cyan-500/50 to-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                    }`}
                    style={{ height: `${val}%` }}
                    title={`Slot ${id}: ${val} metrics`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle column: Premium map center with cyber grid overlay & coordinates (lg:col-span-8) */}
        <div className="lg:col-span-8 bg-slate-950/60 border border-purple-500/20 rounded-xl p-5 flex flex-col justify-between relative min-h-[440px] shadow-2xl backdrop-blur-md">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-purple-300 font-mono pb-3 border-b border-purple-500/20 gap-2">
            <span className="flex items-center gap-1.5"><Compass className="w-3.5 h-3.5 text-cyan-400" /> BASTION CONTROL PLANE COORDINATION SCANNER</span>
            <span className="text-[10px] text-purple-300 font-bold uppercase tracking-widest bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
              {nodes.length} GLOBAL GATEWAYS LIVE
            </span>
          </div>

          {/* High resolution cybernetic grid vectors representation */}
          <div className="relative w-full h-[280px] md:h-[320px] flex items-center justify-center my-4 overflow-hidden rounded-lg border border-purple-950/40 bg-[#04010b] select-none">
            {/* Cyber compass / grid coordinate backing lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.15)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-80" />
            
            {/* Concentric target lines */}
            <div className="absolute w-[450px] h-[450px] border border-purple-500/10 rounded-full opacity-60 pointer-events-none" />
            <div className="absolute w-[300px] h-[300px] border border-indigo-500/15 rounded-full opacity-50 pointer-events-none" />
            <div className="absolute w-[150px] h-[150px] border border-cyan-500/10 rounded-full opacity-40 pointer-events-none" />

            {/* Sweep radar line using simulated state angle */}
            <div 
              className="absolute w-[380px] h-0 border-t border-cyan-400/20 origin-center z-10 opacity-40 pointer-events-none"
              style={{ transform: `rotate(${radarDegree}deg)` }}
            />

            {/* Interactive World map matrix */}
            <svg className="absolute inset-0 w-full h-full text-purple-600 opacity-25 z-0 animate-fade-in" viewBox="0 0 1000 450" fill="currentColor">
              {/* Complex Digital Dotted representation of world continents */}
              {/* North America */}
              <rect x="80" y="80" width="140" height="120" rx="40" className="opacity-10" />
              <circle cx="120" cy="110" r="14" />
              <circle cx="150" cy="130" r="28" />
              <circle cx="190" cy="170" r="24" />
              <circle cx="210" cy="190" r="15" />
              <circle cx="90" cy="140" r="12" />
              <circle cx="230" cy="150" r="10" />
              {/* South America */}
              <rect x="300" y="260" width="110" height="150" rx="30" className="opacity-15" />
              <circle cx="330" cy="290" r="18" />
              <circle cx="340" cy="330" r="28" />
              <circle cx="360" cy="370" r="15" />
              <circle cx="380" cy="400" r="8" />
              {/* Europe & Africa */}
              <rect x="440" y="100" width="150" height="260" rx="45" className="opacity-15" />
              <circle cx="480" cy="130" r="22" />
              <circle cx="510" cy="160" r="30" />
              <circle cx="520" cy="220" r="20" />
              <circle cx="530" cy="290" r="28" />
              <circle cx="550" cy="340" r="15" />
              {/* Asia & Australia */}
              <rect x="680" y="100" width="220" height="310" rx="55" className="opacity-10" />
              <circle cx="710" cy="140" r="22" />
              <circle cx="750" cy="160" r="32" />
              <circle cx="810" cy="200" r="38" />
              <circle cx="770" cy="250" r="18" />
              <circle cx="830" cy="330" r="24" />
              <circle cx="850" cy="360" r="18" />
              <circle cx="870" cy="390" r="12" />
 
              {/* Scanning visual matrix links between dynamic node entities */}
              {nodes.map((node, index) => {
                const targetNode = nodes[(index + 1) % nodes.length];
                const x1 = (node.x / 100) * 1000;
                const y1 = (node.y / 100) * 450;
                const x2 = (targetNode.x / 100) * 1000;
                const y2 = (targetNode.y / 100) * 450;
                return (
                  <g key={`cyber-line-${node.id}`} className="opacity-45">
                    <line 
                      x1={x1} y1={y1} x2={x2} y2={y2} 
                      stroke="#a78bfa" strokeWidth="1" 
                      strokeDasharray="4,6" 
                    />
                    <circle cx={x1} cy={y1} r="1.5" fill="#a78bfa" />
                  </g>
                );
              })}
            </svg>

            {/* Render node targets on high fidelity coordinates */}
            {filteredNodes.map((node) => {
              const isSelected = node.id === selectedNodeId;
              const isUrgent = node.activeStatus === 'ISOLATING' || node.threatLevel === 'CRITICAL';
              const isMitigating = node.activeStatus === 'DEFLECTING';
              
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                >
                  {/* Outer laser radar concentric scan rings */}
                  <span className={`absolute inset-0 rounded-full w-10 h-10 -left-3.5 -top-3.5 block animate-ping opacity-35 ${
                    isUrgent ? 'bg-rose-500' : isMitigating ? 'bg-cyan-400' : 'bg-purple-500'
                  }`} />
                  
                  {/* Glowing halo outline */}
                  <span className={`absolute inset-0 rounded-full w-6 h-6 -left-1.5 -top-1.5 block ${
                    isUrgent ? 'bg-rose-500/20' : isMitigating ? 'bg-cyan-500/20' : 'bg-purple-500/20'
                  } ${isSelected ? 'scale-125 border border-cyan-400/40' : 'group-hover:scale-110'} transition-all`} />

                  {/* Node solid beacon core */}
                  <div className={`w-3.5 h-3.5 rounded-full border-2 border-slate-950 relative z-30 transition-all ${
                    isUrgent ? 'bg-rose-500 animate-pulse' : isMitigating ? 'bg-cyan-400' : 'bg-purple-500'
                  } ${isSelected ? 'scale-125 shadow-[0_0_15px_rgba(6,182,212,0.85)]' : 'group-hover:scale-115'}`} />

                  {/* Mini-indicator tags projecting coordinate stats on hover */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-950 border border-purple-800 px-2 py-0.5 rounded text-[9px] font-mono tracking-tight text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 shadow-xl z-50">
                    <span className="font-extrabold">{node.city}</span> ({node.threatLevel})
                  </div>
                </div>
              );
            })}
          </div>

          {/* Focused Node Console readout overlay */}
          <div className="bg-gradient-to-r from-[#120831] to-[#04010d] border border-purple-500/30 rounded-xl p-4.5 relative z-20 flex flex-col md:flex-row justify-between gap-5 items-stretch shadow-[0_0_20px_rgba(139,92,246,0.15)] relative overflow-hidden">
            {/* Visual tech indicator corner */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-500" />
            
            <div className="space-y-3 max-w-xl md:pl-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-13px font-bold text-white font-display uppercase tracking-wide flex items-center gap-1">
                  <Fingerprint className="w-4 h-4 text-cyan-400" />
                  {selectedNode.city} Edge Gateway
                </span>
                
                <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-black border uppercase tracking-wider ${
                  selectedNode.activeStatus === 'ISOLATING'
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/30 animate-pulse'
                    : selectedNode.activeStatus === 'DEFLECTING'
                    ? 'bg-indigo-500/20 text-[#a5b4fc] border-indigo-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                }`}>
                  {selectedNode.activeStatus}
                </span>

                <span className="text-[10px] font-mono text-purple-300/60">
                  REF_LOC: {selectedNode.x}°N / {selectedNode.y}°W
                </span>
              </div>

              {/* Advanced detailed diagnostic fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 text-[11px] font-mono text-purple-100/90 gap-x-6 gap-y-1.5">
                <div className="flex justify-between sm:justify-start gap-2">
                  <span className="text-purple-300/50">IP ADDRESS:</span>
                  <span className="text-white select-all font-semibold">{selectedNode.ip}</span>
                </div>
                <div className="flex justify-between sm:justify-start gap-2">
                  <span className="text-purple-300/50">RISK CLASS:</span>
                  <span className={`font-black uppercase ${
                    selectedNode.threatLevel === 'CRITICAL' ? 'text-rose-400 animate-pulse' : selectedNode.threatLevel === 'HIGH' ? 'text-purple-300 font-extrabold' : 'text-emerald-400'
                  }`}>{selectedNode.threatLevel} STATUS</span>
                </div>
                <div className="flex justify-between sm:justify-start gap-2 col-span-1 sm:col-span-2">
                  <span className="text-purple-300/50">LAST CONTAINED ATTACK:</span>
                  <span className="text-white font-normal truncate max-w-xs">{selectedNode.recentThreatType}</span>
                </div>
                <div className="flex justify-between sm:justify-start gap-2">
                  <span className="text-purple-300/50">VETO INLINE TIME:</span>
                  <span className="text-cyan-400 font-extrabold">{selectedNode.lastVetoTime}</span>
                </div>
              </div>
            </div>

            {/* Quick action buttons / Deflections summary indicators */}
            <div className="flex flex-row md:flex-col justify-between items-end border-t md:border-t-0 md:border-l border-purple-500/20 pt-4.5 md:pt-0 md:pl-5 self-stretch text-right min-w-[150px] flex-shrink-0 gap-3">
              <div className="text-left md:text-right">
                <span className="text-[9px] font-mono text-purple-300/50 uppercase tracking-wider block">NODE DEFLECTIONS</span>
                <span className="text-2xl font-black font-mono text-white leading-none">
                  {selectedNode.threatsToday.toLocaleString()}
                </span>
              </div>
              
              <button 
                onClick={() => {
                  const currIdx = nodes.findIndex(n => n.id === selectedNodeId);
                  const nextNode = nodes[(currIdx + 1) % nodes.length];
                  setSelectedNodeId(nextNode.id);
                }}
                className="text-[10px] font-mono font-black text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 hover:underline self-end"
              >
                NEXT GATEWAY &gt;
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Futuristic Compliance Assurance Panel */}
      <div className="bg-[#0d0724] border border-purple-500/20 rounded-xl p-4 text-center flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono shadow-md">
        <div className="flex items-center gap-2 text-purple-200/90">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 animate-pulse" />
          <span>Fiduciary compliance audits confirmed. Real-time active deflection rings enforced across 8 global nodes.</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 text-[10px] text-purple-200/90">
          <span className="bg-black/40 px-2 py-0.5 rounded border border-purple-500/30">PII ANONYMIZER: PASS</span>
          <span>•</span>
          <span className="bg-black/40 px-2 py-0.5 rounded border border-purple-500/30">LATENCY SLOS: &lt;4ms</span>
          <span>•</span>
          <span className="bg-black/40 px-2 py-0.5 rounded border border-purple-500/30">ZERO LOG RETENTION</span>
        </div>
      </div>

    </section>
  );
}
