import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ClipboardCheck, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  FileSearch, 
  HelpCircle, 
  ChevronRight, 
  RotateCcw, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface GovernanceReadinessAssessmentProps {
  onRequestReview: () => void;
}

export default function GovernanceReadinessAssessment({ onRequestReview }: GovernanceReadinessAssessmentProps) {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]); // 2 = Yes, 1 = Partial, 0 = No
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const questions = [
    {
      id: 1,
      text: "Do all AI agents have owners?",
      desc: "Are active autonomous models operating on your networks registered, mapped, and linked directly back to a verified employee corporate profile?",
      relevance: "Fails standard compliance bounds if multi-agent workflows execute without a responsible corporate identity profile link."
    },
    {
      id: 2,
      text: "Do all AI agents have certifications?",
      desc: "Is there a systemic alignment and security guardrail audit program on your prompts and model limits before deploying to production?",
      relevance: "Uncertified agents run a high risk of memory drift and adversarial prompt hacking, breaching organizational safety policies."
    },
    {
      id: 3,
      text: "Can evidence be produced on demand?",
      desc: "Can your security team immediately construct court-ready, cryptographically sealed transaction history log briefs for external SEC audits?",
      relevance: "Failing to compile detailed token traces under strict deadlines creates high exposure to severe fiduciary regulatory file audits."
    },
    {
      id: 4,
      text: "Can permissions be reviewed?",
      desc: "Do you have full read-only visibility over exactly which core business files and databases are accessed by active agent processes?",
      relevance: "Blind database row reads and writes trigger silent, catastrophic systemic leaks that normal network firewalls completely overlook."
    },
    {
      id: 5,
      text: "Can regulatory exposure be measured?",
      desc: "Does your executive board review active telemetry, tracking agent drift indexes and compliance override ratios dynamically?",
      relevance: "Without board visibility and clear indices, legal stakeholders lack baseline data to calculate potential compliance liabilities."
    }
  ];

  const handleAnswer = (points: number) => {
    const updatedAnswers = [...answers, points];
    setAnswers(updatedAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const calculateScore = () => {
    // Total possible points: 5 questions * 2 points = 10 points
    const totalPoints = answers.reduce((sum, item) => sum + item, 0);
    return Math.round((totalPoints / 10) * 100);
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  const score = calculateScore();

  return (
    <section id="ai-readiness-assessment-section" className="bg-[#071524] border-y border-slate-800 py-24 px-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,120,212,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50" />
      <div className="absolute bottom-[-100px] left-[5%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0078D4]/10 border border-[#0078D4]/20 rounded-full text-[10px] text-sky-305 font-mono font-bold uppercase tracking-wider">
            <ClipboardCheck className="w-3.5 h-3.5 text-[#0078D4]" /> Self-Service Auditing Panel
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4.5xl text-white tracking-tight leading-none text-center">
            AI Governance Readiness Assessment
          </h2>
          <p className="text-sm text-slate-350 max-w-xl mx-auto font-light leading-relaxed">
            Conduct a quick, 5-question interactive evaluation of your current enterprise posture to calculate your compliance coverage and exposure risk index.
          </p>
        </div>

        {/* Assessment Card Grid */}
        <div className="bg-slate-950 border border-white/5 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0078D4] via-indigo-500 to-teal-500" />
          
          <AnimatePresence mode="wait">
            {!isCompleted ? (
              <motion.div
                key="assessment-questions"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Progress indicators */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-[10.5px] font-mono text-sky-450 uppercase tracking-widest font-bold">
                    Executive Audit Quiz
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-900 border border-white/5 px-2.5 py-1 rounded">
                    QUESTION {currentQuestion + 1} OF {questions.length}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#0078D4] to-teal-400 transition-all duration-300" 
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>

                {/* Question Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight leading-none">
                    {questions[currentQuestion].text}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-205 leading-relaxed font-light">
                    {questions[currentQuestion].desc}
                  </p>
                </div>

                {/* Multi-tier Answer buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <button
                    onClick={() => handleAnswer(2)}
                    className="p-4 rounded-xl bg-slate-900 hover:bg-sky-950/40 border border-white/5 hover:border-[#0078D4] transition-all cursor-pointer text-left group"
                  >
                    <span className="text-emerald-400 font-mono text-[10.5px] font-bold block uppercase tracking-wider mb-1">
                      YES (Fully)
                    </span>
                    <p className="text-[11.5px] text-slate-300 leading-snug font-light">
                      This capability is integrated, fully automated, and actively monitored.
                    </p>
                  </button>

                  <button
                    onClick={() => handleAnswer(1)}
                    className="p-4 rounded-xl bg-slate-900 hover:bg-slate-905 border border-white/5 hover:border-teal-500 transition-all cursor-pointer text-left group"
                  >
                    <span className="text-amber-400 font-mono text-[10.5px] font-bold block uppercase tracking-wider mb-1">
                      PARTIAL (Ad-Hoc)
                    </span>
                    <p className="text-[11.5px] text-slate-300 leading-snug font-light">
                      We have manual guidelines but lack systemic logs or automatic checks.
                    </p>
                  </button>

                  <button
                    onClick={() => handleAnswer(0)}
                    className="p-4 rounded-xl bg-slate-900 hover:bg-rose-950/20 border border-white/5 hover:border-rose-500 transition-all cursor-pointer text-left group"
                  >
                    <span className="text-rose-400 font-mono text-[10.5px] font-bold block uppercase tracking-wider mb-1">
                      NO (Absent)
                    </span>
                    <p className="text-[11.5px] text-slate-300 leading-snug font-light">
                      No active logs, identity maps, or compliance validation exists right now.
                    </p>
                  </button>
                </div>

                {/* Relevance metadata box */}
                <div className="p-4 rounded-xl bg-slate-900 border border-white/5 text-[11px] text-slate-400 leading-relaxed font-light italic">
                  <strong>💡 Risk Relevance:</strong> {questions[currentQuestion].relevance}
                </div>

              </motion.div>
            ) : (
              <motion.div
                key="assessment-results"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-8 text-center"
              >
                <div className="flex items-center justify-between border-b border-[#0078D4]/20 pb-4 text-left">
                  <span className="text-[10.5px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                    Postural Assessment Results
                  </span>
                  <span className="text-[9.5px] font-mono text-slate-400">
                    CALCULATED: TIMESTAMP SECURE_MEMBER_DEK
                  </span>
                </div>

                {/* Dynamic Radial Score indicator */}
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center relative w-36 h-36 rounded-full bg-slate-900 border border-white/10 shadow-inner">
                    {/* SVG Radial circle */}
                    <svg className="absolute w-full h-full transform -rotate-90">
                      <circle cx="72" cy="72" r="64" stroke="rgba(255,255,255,0.02)" strokeWidth="6" fill="transparent" />
                      <circle 
                        cx="72" cy="72" r="64" 
                        stroke={score >= 80 ? "#10b981" : score >= 50 ? "#f59e0b" : "#f43f5e"} 
                        strokeWidth="6.5" 
                        fill="transparent" 
                        strokeDasharray={402}
                        strokeDashoffset={402 - (402 * score) / 100}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                    </svg>
                    
                    <div className="space-y-0.5">
                      <span className="text-3.5xl font-black text-white font-mono leading-none">
                        {score}%
                      </span>
                      <p className="text-[9px] text-[#8fa3b7] font-mono tracking-wider uppercase font-bold">
                        READINESS
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5 max-w-xl mx-auto">
                    <h3 className="text-lg font-bold font-display text-white">
                      {score >= 80 ? "Substantial Operational Security Posture" :
                       score >= 50 ? "Moderate Regulatory Risk Identified" :
                       "Vulnerable Compliance & Oversight Posture"}
                    </h3>
                    <p className="text-xs text-slate-355 leading-relaxed font-light">
                      {score >= 80 ? "Your organization possesses structured guidelines, yet continuous automated verification is still required to guarantee 100% SEC audit defense." :
                       score >= 50 ? "You have established basic risk mitigations. However, the lack of cryptographically sealed prompt evidence registers significant exposure spots during formal board evaluations." :
                       "Your systems are currently blind to autonomous model actions. The lack of verified owners and alignment checks creates critical legal & financial compliance liabilities."}
                    </p>
                  </div>
                </div>

                {/* Next Steps CTA block */}
                <div className="p-6 bg-slate-900 border border-white/5 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 text-left">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-teal-400 font-bold block uppercase tracking-wider">
                      📝 RECOMMENDED OUTCOME: ARCHITECTURE REVIEW
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      Establish a secure baseline with our lead engineers. We will review your trace layouts, token schemas, and custom database bindings safely using synthetic pilots.
                    </p>
                  </div>

                  <button
                    onClick={onRequestReview}
                    className="w-full md:w-auto px-5 py-3 rounded-lg bg-gradient-to-r from-[#0078D4] to-sky-505 hover:opacity-90 inline-flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-white uppercase tracking-wider cursor-pointer shadow-lg active:scale-98 transition-all"
                  >
                    Request Architecture Review <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Reset button row */}
                <div className="pt-2 flex justify-center">
                  <button 
                    onClick={resetAssessment}
                    className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-205 font-mono text-[10.5px] cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Retake Governance Self-Assessment
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
