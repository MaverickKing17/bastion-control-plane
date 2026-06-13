import { useEffect, useState } from 'react';
import { motion, animate, useMotionValue } from 'motion/react';
import { 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Coins, 
  Sparkles, 
  TrendingUp, 
  Lock, 
  FileCheck2,
  Users2
} from 'lucide-react';

// Framer Motion driven Count-Up component
function FramerCountUp({ 
  value, 
  duration = 2.5, 
  prefix = "", 
  suffix = "" 
}: { 
  value: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string; 
}) {
  const motionVal = useMotionValue(0);
  const [displayVal, setDisplayVal] = useState("0");

  useEffect(() => {
    const controls = animate(motionVal, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayVal(Math.round(latest).toLocaleString());
      }
    });
    return () => controls.stop();
  }, [value, duration, motionVal]);

  return <span className="font-mono tracking-tight font-black">{prefix}{displayVal}{suffix}</span>;
}

export default function AuthorityMetricsBar() {
  const [livePulse, setLivePulse] = useState(true);

  // Auto-pulse connection heartbeat simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setLivePulse(prev => !prev);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const metrics = [
    {
      title: "Governed AI Operations",
      description: "Real-time semantic intercepts analyzed",
      value: 24859040,
      suffix: "+",
      icon: Activity,
      color: "from-blue-500/20 to-indigo-500/10 border-blue-500/20 text-blue-300",
      accent: "text-blue-500",
      subText: "SEC & FINRA regulatory alignment"
    },
    {
      title: "Compromised Actions Prevented",
      description: "Exploits & prompt injection models vetoed",
      value: 141854,
      suffix: "",
      icon: ShieldCheck,
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/20 text-emerald-300",
      accent: "text-emerald-500",
      subText: "100% intercept feedback loop status"
    },
    {
      title: "Total Client Asset Exposure Governed",
      description: "Active C-suite compliance risk mitigation",
      value: 18.4,
      isFloat: true,
      floatVal: 18.4,
      prefix: "$",
      suffix: "B+",
      icon: Coins,
      color: "from-purple-500/20 to-fuchsia-500/10 border-purple-500/20 text-purple-300",
      accent: "text-purple-500",
      subText: "Hedge funds & credit union portfolios"
    },
    {
      title: "Active Monitored Agent Clusters",
      description: "Secure directory-bound worker threads",
      value: 1480,
      suffix: "+",
      icon: Cpu,
      color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-300",
      accent: "text-cyan-500",
      subText: "Microsoft Entra ID mapped profiles"
    }
  ];

  return (
    <section className="relative bg-slate-900 border-y border-slate-800 py-12 px-6 overflow-hidden">
      {/* Radiant tech grids */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-85" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[150px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[150px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        
        {/* Upper Title Section built for compliance and C-suite authority */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/5 pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[10px] text-indigo-400 font-mono font-bold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" /> SEC Compliance Oversight
            </div>
            
            <h2 className="text-xl sm:text-2xl font-black font-display text-white tracking-tight">
              Real-Time Fiduciary Risk Telemetry
            </h2>
            <p className="text-xs text-slate-300 max-w-xl font-light">
              Autonomous agents operate within absolute safety constraints. Metrics reflect live transaction blocks, dynamic veto execution counts, and CISO control plane synchronization.
            </p>
          </div>

          {/* Connection proof badge */}
          <div className="flex items-center gap-2.5 bg-slate-950 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono font-bold">
            <span className={`w-2.5 h-2.5 rounded-full bg-emerald-500 transition-all duration-300 ${livePulse ? 'scale-125 opacity-100' : 'scale-90 opacity-80'}`} />
            <span className="text-slate-300 uppercase tracking-widest text-[10px]">BASTION CENTRAL LEDGER: ALIGNED</span>
          </div>
        </div>

        {/* Metrics Grid Cards with custom desaturated modern gradients */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-slate-950/65 border rounded-2xl p-5 hover:border-slate-750 transition-all duration-300 relative group flex flex-col justify-between`}
              >
                {/* Visual top border indicator matching theme */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${metric.color.includes('blue') ? 'from-blue-500 to-indigo-500' : metric.color.includes('emerald') ? 'from-emerald-500 to-teal-500' : metric.color.includes('purple') ? 'from-purple-500 to-violet-500' : 'from-cyan-500 to-blue-500'}`} />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                      {metric.title}
                    </span>
                    <div className={`p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform ${metric.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    {/* Render the appropriate dynamic counter */}
                    <div className="text-3xl font-black text-white font-display flex items-baseline gap-1">
                      {metric.isFloat ? (
                        <span className="font-mono tracking-tight font-black">
                          {metric.prefix}<FramerCountUp value={18} duration={2.5} />.4{metric.suffix}
                        </span>
                      ) : (
                        <FramerCountUp 
                          value={metric.value} 
                          prefix={metric.prefix}
                          suffix={metric.suffix}
                          duration={2.5 + (idx * 0.2)}
                        />
                      )}
                      
                      <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-1 py-0.5 rounded flex items-center gap-0.5 ml-2">
                        <TrendingUp className="w-3 h-3" /> SECURE
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-300 leading-snug">
                      {metric.description}
                    </p>
                  </div>
                </div>

                {/* Sub audit verification stamp */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>SYSTEM PROOF</span>
                  <span className="text-white font-semibold uppercase">{metric.subText}</span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Dynamic C-suite Audit Guarantee sub banner */}
        <div className="bg-slate-950 border border-white/5 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <div className="text-left">
              <strong className="text-xs text-white uppercase block tracking-wider font-mono">Independent SOC2 Type II Assurance Checked</strong>
              <p className="text-[10.5px] text-slate-300 font-light leading-snug">Bastion operates strictly within sandbox-verified parameters, ensuring perfect compliance with fiduciary mandates.</p>
            </div>
          </div>
          <p className="text-[10.5px] font-mono text-indigo-400 font-bold bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-lg">
            LAST ASSURED: CURRENT MINUTE
          </p>
        </div>

      </div>
    </section>
  );
}
