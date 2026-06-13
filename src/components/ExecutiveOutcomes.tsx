import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  Map, 
  Database, 
  CheckCircle2, 
  Award, 
  Clock, 
  Activity, 
  Eye, 
  Lock,
  Presentation
} from 'lucide-react';

export default function ExecutiveOutcomes() {
  const cards = [
    {
      title: "Regulatory Exposure Reduction",
      metric: "-94% Exposure Ratio",
      businessValue: "Protects millions in security violations and saves thousands in mitigation hours by locking down drift parameters dynamically.",
      outcome: "Autonomous sessions execute safely inside approved guardrail limits, leaving zero room for rogue transactions or unauthorized actions.",
      icon: ShieldAlert,
      tag: "COMPLIANCE SAFETY",
      colorClass: "from-rose-500/15 via-rose-500/5 to-transparent border-rose-500/20 text-rose-300 pointer-events-none"
    },
    {
      title: "Ownership Visibility",
      metric: "100% Absolute Mapping",
      businessValue: "Links every autonomous AI asset profile directly to a verified human owner via Microsoft Entra ID integration.",
      outcome: "Eliminates legal & compliance ambiguity. Instantly audit who authorized, owns, and controls any active LLM agent execution pipeline.",
      icon: Eye,
      tag: "IDENTITY ALIGNMENT",
      colorClass: "from-blue-500/15 via-blue-500/5 to-transparent border-blue-500/20 text-blue-300 pointer-events-none"
    },
    {
      title: "Evidence Readiness",
      metric: "Instant Cryptographic Proof",
      businessValue: "Produces fully compiled, SEC 17a-4 compliant transaction log archives and token traces on-demand with zero legal overhead.",
      outcome: "Complete relief from regulatory panic. All prompt logs and completion steps are cryptographically signed and archived instantly.",
      icon: Database,
      tag: "IMMUTABLE AUDITS",
      colorClass: "from-purple-500/15 via-purple-500/5 to-transparent border-purple-500/20 text-purple-300 pointer-events-none"
    },
    {
      title: "AI Trust Coverage",
      metric: "99.99% Alignment Rate",
      businessValue: "Secures models against adversarial prompt injections, malicious bypass attempts, and cognitive drift vulnerabilities.",
      outcome: "Guarantees secure system execution even during high risk scenarios, establishing robust operational barriers.",
      icon: Award,
      tag: "ALIGNMENT RATINGS",
      colorClass: "from-[#0078D4]/15 via-[#0078D4]/5 to-transparent border-[#0078D4]/20 text-sky-305 pointer-events-none"
    },
    {
      title: "Audit Preparation Time",
      metric: "< 4.5 Minutes Compilation",
      businessValue: "Saves massive internal developer and audit-team resources by automating raw file discovery and connection logs generation.",
      outcome: "Board-level compliance summaries and detailed threat history traces are constructed instantly at the click of a button.",
      icon: Clock,
      tag: "OPERATIONAL SPEED",
      colorClass: "from-teal-500/15 via-teal-500/5 to-transparent border-teal-500/20 text-teal-300 pointer-events-none"
    },
    {
      title: "Executive Risk Transparency",
      metric: "Real-Time Board Presentation",
      businessValue: "Grants C-suite stakeholders a simple, desaturated view of current model risk profiles, drift indexes, and action logs.",
      outcome: "Provides absolute board-level confidence, translating technical server telemetry into clear business security guidelines.",
      icon: Presentation,
      tag: "C-SUITE HUD",
      colorClass: "from-amber-500/15 via-amber-500/5 to-transparent border-amber-500/20 text-amber-300 pointer-events-none"
    }
  ];

  return (
    <section id="executive-outcomes-section" className="bg-[#071524] border-y border-slate-800 py-24 px-6 relative overflow-hidden">
      {/* Decorative corporate grid backdrops */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,120,212,0.08)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-70" />
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[150px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header containing C-suite targeted copy */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-[10px] text-teal-300 font-mono font-bold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5 text-teal-400" /> Executive Board Visibility
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4.5xl text-white tracking-tight leading-none">
              Executive Outcomes
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-xl font-light">
              Fiduciary metrics designed for institutional trust. Translate complex agent operations into quantifiable corporate risk containment.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-950 border border-white/10 px-3 py-1.5 rounded-lg text-[9px] font-mono font-bold text-slate-400 tracking-wider">
            <span>AUDITED INITIATIVES: CURRENT SEMESTER</span>
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`bg-slate-950/70 border rounded-2xl p-6 flex flex-col justify-between h-[360px] relative overflow-hidden hover:border-slate-700 transition-all duration-300 group`}
              >
                {/* Visual top bar of glowing color gradient */}
                <div className={`absolute top-0 left-0 w-full h-[2.5px] bg-gradient-to-r ${
                  idx === 0 ? 'from-rose-500 to-amber-500' :
                  idx === 1 ? 'from-blue-500 to-cyan-500' :
                  idx === 2 ? 'from-purple-500 to-fuchsia-500' :
                  idx === 3 ? 'from-indigo-500 to-sky-500' :
                  idx === 4 ? 'from-teal-500 to-emerald-500' :
                  'from-amber-500 to-yellow-500'
                }`} />

                {/* Sub corner glow on card hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-indigo-500/0 hover:to-indigo-500/5 transition-all duration-300 pointer-events-none" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest bg-slate-900 border border-white/5 px-2.5 py-1 rounded">
                      {card.tag}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white shadow-inner group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-bold font-display text-white tracking-tight group-hover:text-sky-300 transition-colors">
                      {card.title}
                    </h3>
                    
                    {/* Big Bold Core Metric */}
                    <p className="text-2xl sm:text-3.5xl font-black font-display text-white tracking-tight font-mono">
                      {card.metric}
                    </p>
                  </div>
                </div>

                {/* businessValue and outcome segments */}
                <div className="space-y-4 pt-4 border-t border-white/5 mt-auto">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-slate-400 font-extrabold uppercase block tracking-wider">
                      Business Value:
                    </span>
                    <p className="text-[11.5px] text-slate-205 leading-relaxed font-light">
                      {card.businessValue}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-sky-400 font-extrabold uppercase block tracking-wider">
                      Executive Board Outcome:
                    </span>
                    <p className="text-[11px] text-sky-300 leading-snug italic font-normal">
                      &gt; {card.outcome}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Board compliance summary banner */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-white/5 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 text-left">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <p className="text-[11.5px] text-slate-300 font-light leading-relaxed">
              Every executive outcome is continuously evaluated and verified before external reporting arrays can compile. No manual audits needed.
            </p>
          </div>
          <span className="text-[10px] font-mono text-[#0078D4] font-bold bg-[#0078D4]/10 border border-[#0078D4]/20 px-3 py-1 rounded-lg">
            BOARD PRIVACY ENFORCED
          </span>
        </div>

      </div>
    </section>
  );
}
