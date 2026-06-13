import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Activity, 
  Users, 
  FileCheck, 
  GitBranch, 
  AlertTriangle, 
  Cpu, 
  Key, 
  Database, 
  Play, 
  RefreshCw, 
  ArrowRight, 
  Clock, 
  Search, 
  Settings, 
  Send,
  Zap,
  CheckCircle2,
  Lock,
  XCircle,
  FileText,
  User,
  ExternalLink
} from 'lucide-react';
import { Agent, ThreatCase, EvidenceBlock, AuditLog } from '../types';

export default function DashboardDemo() {
  const [activeTab, setActiveTab] = useState<'command' | 'registry' | 'graph' | 'scores' | 'cases' | 'evidence'>('command');
  
  // Interactive Simulation States
  const [agents, setAgents] = useState<Agent[]>([
    {
      id: 'AGT-401',
      name: 'FiduciaryTrader-Beta-4',
      role: 'Portfolio Rebalancing',
      owner: 'algo-trading-desk',
      status: 'ACTIVE',
      trustScore: 94,
      authorizations: ['Execute Order', 'Read Client Ledger', 'Call Azure OpenAI'],
      lastActivity: '2026-06-13 10:25:12',
      systemPromptHash: 'sha256:8f4c9c...',
      category: 'Trading'
    },
    {
      id: 'AGT-208',
      name: 'LendingAgent-Alpha-9',
      role: 'Commercial Credit Risk Evaluation',
      owner: 'risk-modelling-group',
      status: 'ACTIVE',
      trustScore: 88,
      authorizations: ['Read Credit Bureau', 'Post Loan Approval Recommendation', 'Access Purview Catalog'],
      lastActivity: '2026-06-13 10:24:55',
      systemPromptHash: 'sha256:2d1a55...',
      category: 'Operations'
    },
    {
      id: 'AGT-992',
      name: 'AdvisoryAgent-Gamma-3',
      role: 'High-Net-Worth Advisory Support',
      owner: 'hnw-wealth-mgmt',
      status: 'WARNING',
      trustScore: 56,
      authorizations: ['Read Client Portfolio', 'Draft Recommendation Emails', 'Access Core CRM'],
      lastActivity: '2026-06-13 10:27:01',
      systemPromptHash: 'sha256:ef3209...',
      category: 'Advisory'
    },
    {
      id: 'AGT-102',
      name: 'RetailSupportBot-Epic-12',
      role: 'Retail Credit Dispute Resolver',
      owner: 'retail-banking',
      status: 'COMPROMISED',
      trustScore: 23,
      authorizations: ['Database Mutation', 'Issue Statement Refund', 'Direct System API Access'],
      lastActivity: '2026-06-13 10:28:15',
      systemPromptHash: 'sha256:b1e360...',
      category: 'Customer Support'
    }
  ]);

  const [cases, setCases] = useState<ThreatCase[]>([
    {
      id: 'CAS-1021',
      title: 'Unusual Data Access Pattern Detected',
      category: 'Data Egress',
      severity: 'HIGH',
      agentId: 'AGT-102',
      agentName: 'RetailSupportBot-Epic-12',
      timestamp: '2026-06-13 10:28:15',
      status: 'OPEN',
      description: 'Agent requested customer account records outside authorization scope, executing multiple fast database mutations and seeking direct export endpoints.'
    },
    {
      id: 'CAS-1000',
      title: 'Cognitive Drift & Policy Boundary Overreach',
      category: 'Prompt Injection',
      severity: 'MEDIUM',
      agentId: 'AGT-992',
      agentName: 'AdvisoryAgent-Gamma-3',
      timestamp: '2026-06-13 10:27:01',
      status: 'OPEN',
      description: 'Simulated prompt analysis shows Agent trying to advise clients on unapproved currency derivatives, yielding high risk for corporate fiduciary liability.'
    }
  ]);

  const [evidenceBlocks, setEvidenceBlocks] = useState<EvidenceBlock[]>([
    {
      blockNumber: 48921,
      timestamp: '2026-06-13 10:15:30',
      agentId: 'AGT-401',
      action: 'Execute Portfolio Buy Order [Ref: B-4902]',
      hash: '0000a12e8fbcd32901a88bb3e87fb168',
      previousHash: '000032fdcf82bb9002ab11cdfe02e88a',
      signature: 'ed25519:7fac83cf821bf90',
      status: 'VALIDATED'
    },
    {
      blockNumber: 48922,
      timestamp: '2026-06-13 10:20:12',
      agentId: 'AGT-208',
      action: 'Authorized Bureau Access [Ref: L-8092]',
      hash: '0000cfbd12a9bcfe0de9213fb382ce43',
      previousHash: '0000a12e8fbcd32901a88bb3e87fb168',
      signature: 'ed25519:92a7cedfa1bc932',
      status: 'VALIDATED'
    }
  ]);

  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([
    { id: '1', timestamp: '10:28:15', source: 'Sentinel-Gateway', event: 'Audit Event logged for GT-102', status: 'ALERT' },
    { id: '2', timestamp: '10:27:50', source: 'Bastion-Entra-Link', event: 'Certificated check OK for GT-401', status: 'OK' },
    { id: '3', timestamp: '10:27:01', source: 'Bastion-Audit-Engine', event: 'Threshold Violation: GT-992 score dropped below 60', status: 'ALERT' },
    { id: '4', timestamp: '10:26:40', source: 'ServiceNow-Sync', event: 'Asset synchronization complete', status: 'OK' }
  ]);

  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(agents[0]);
  const [governanceSelectedNode, setGovernanceSelectedNode] = useState<string>('agent');
  const [demoTerminalLogs, setDemoTerminalLogs] = useState<string[]>([
    'System initialization successful.',
    'Monitoring 1,248 active agents across Microsoft Entra ID context.',
    'Risk thresholds active. Trust Index calibrated.'
  ]);

  // Calculations for interactive state
  const metrics = useMemo(() => {
    const openCount = cases.filter(c => c.status !== 'RESOLVED').length;
    const highRiskCount = agents.filter(a => a.status === 'COMPROMISED' || a.status === 'WARNING').length;
    const avgScore = Math.round(agents.reduce((acc, current) => acc + current.trustScore, 0) / agents.length);
    
    return {
      openCases: openCount + 35, // Simulated offset + current live cases
      highRiskAgents: highRiskCount + 21, 
      avgTrustScore: avgScore,
      totalAgents: 1248,
      certifications: 892
    };
  }, [agents, cases]);

  const handleRemediate = (caseId: string, agentId: string) => {
    // Add console logs
    setDemoTerminalLogs(prev => [
      ...prev,
      `[COMMAND TRIGGERED] Initiating automated incident response for case ${caseId}.`,
      `[BASTION ACTIVE RED] Revoking Entra ID tokens and blocking Azure OpenAI gateway for Agent [${agentId}]...`,
      `[COMPLETED] Agent isolated successfully. Session revoked. Policy block enabled.`
    ]);

    // Update agent status inside simulator
    setAgents(prev => prev.map(a => {
      if (a.id === agentId) {
        return { ...a, status: 'ISOLATED', trustScore: 99 }; // trust score goes up after isolation/re-indexing
      }
      return a;
    }));

    // Update case status
    setCases(prev => prev.map(c => {
      if (c.id === caseId) {
        return { ...c, status: 'RESOLVED' };
      }
      return c;
    }));

    // Append to audit logs
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    setAuditLogs(prev => [
      { id: Date.now().toString(), timestamp: timeStr, source: 'Bastion-Enforcement', event: `Isolate event complete for Agent ${agentId}. Secure baseline restored.`, status: 'AUDITED' },
      ...prev
    ]);

    // Append evidence block
    const maxNum = Math.max(...evidenceBlocks.map(e => e.blockNumber));
    const nextBlock: EvidenceBlock = {
      blockNumber: maxNum + 1,
      timestamp: `2026-06-13 ${timeStr}`,
      agentId: agentId,
      action: `Automated Remediation Case ${caseId} - Revoke Entra authorization`,
      hash: Math.random().toString(16).substring(2, 18) + '8e8fabcd',
      previousHash: evidenceBlocks[evidenceBlocks.length - 1]?.hash || '0000cfbd12a9bcfe0de9213fb382ce43',
      signature: 'bastion-sig:3a89e92ad9bf3ed',
      status: 'VALIDATED'
    };
    setEvidenceBlocks(prev => [...prev, nextBlock]);
  };

  const handleAddEvidence = () => {
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    const maxNum = Math.max(...evidenceBlocks.map(e => e.blockNumber));
    const newBlock: EvidenceBlock = {
      blockNumber: maxNum + 1,
      timestamp: `2026-06-13 ${timeStr}`,
      agentId: 'AGT-401',
      action: 'Manual Proof of Alignment - Certified baseline evaluation',
      hash: '0000' + Math.random().toString(16).substring(2, 14) + 'fcdb8a',
      previousHash: evidenceBlocks[evidenceBlocks.length - 1].hash,
      signature: 'bastion-manual-sig:' + Math.random().toString(36).substring(4, 15),
      status: 'VALIDATED'
    };

    setEvidenceBlocks(prev => [...prev, newBlock]);
    setAuditLogs(prev => [
      { id: Date.now().toString(), timestamp: timeStr, source: 'Governance-Proof', event: `Appended Certified Evidence Block #${newBlock.blockNumber}`, status: 'OK' },
      ...prev
    ]);
  };

  return (
    <div id="interactive-dashboard" className="w-full bg-bastion-bg-secondary rounded-xl border border-bastion-border shadow-2xl overflow-hidden font-sans radar-sweep">
      
      {/* Dashboard Top Navigation & Status Bar */}
      <div className="border-b border-bastion-border px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-bastion-bg/60 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-wider text-bastion-text-muted">SYSTEM STATUS:</span>
              <span className="text-xs font-mono font-medium text-emerald-400">ACTIVE COMPLIANCE PLANE</span>
            </div>
            <h3 className="text-sm font-semibold text-white mt-0.5">Control Center Emulator</h3>
          </div>
        </div>

        {/* Console Navigation tabs */}
        <div className="flex flex-wrap gap-1 bg-bastion-bg p-1 rounded-lg border border-bastion-border">
          {[
            { id: 'command', label: 'Command Center', icon: ShieldsIcon },
            { id: 'registry', label: 'Agent Registry', icon: Users },
            { id: 'graph', label: 'Governance Graph', icon: GitBranch },
            { id: 'scores', label: 'Trust Scores', icon: Activity },
            { id: 'cases', label: 'Case Management', icon: AlertTriangle },
            { id: 'evidence', label: 'Evidence Vault', icon: FileCheck }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-all ${
                  isActive 
                    ? 'bg-bastion-azure text-white shadow-md' 
                    : 'text-bastion-text-muted hover:text-white hover:bg-bastion-bg-tertiary'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {tab.id === 'cases' && cases.filter(c => c.status === 'OPEN').length > 0 && (
                  <span className="bg-rose-500 text-[10px] text-white font-bold h-4 px-1.5 rounded-full flex items-center justify-center animate-pulse">
                    {cases.filter(c => c.status === 'OPEN').length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Panel Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[520px] bg-[#071321]/40">
        
        {/* Left Side: Stats and Interactive Log Console */}
        <div className="lg:col-span-1 border-r border-bastion-border p-5 flex flex-col justify-between bg-bastion-bg-secondary/40">
          <div className="space-y-5">
            <div>
              <p className="text-[10px] font-mono tracking-widest text-bastion-azure font-bold uppercase mb-1">CONSOLIDATED METRICS</p>
              <h4 className="text-xs text-bastion-text-muted">Real-time status calculated natively.</h4>
            </div>

            {/* Quick Metrics Stack */}
            <div className="space-y-3">
              
              <div className="p-3 bg-bastion-bg rounded-lg border border-bastion-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-bastion-text-muted uppercase">Total Agents</span>
                  <p className="text-lg font-bold text-white font-display mt-0.5">{metrics.totalAgents.toLocaleString()}</p>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-900/30">+12%</span>
              </div>

              <div className="p-3 bg-bastion-bg rounded-lg border border-bastion-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-bastion-text-muted uppercase">High-Risk Agents</span>
                  <p className={`text-lg font-bold font-display mt-0.5 ${metrics.highRiskAgents <= 21 ? 'text-yellow-400' : 'text-rose-400'}`}>
                    {metrics.highRiskAgents}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-rose-400 bg-rose-950/40 px-1.5 py-0.5 rounded border border-rose-900/30">+8</span>
              </div>

              <div className="p-3 bg-bastion-bg rounded-lg border border-bastion-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-bastion-text-muted uppercase">Certifications</span>
                  <p className="text-lg font-bold text-white font-display mt-0.5">{metrics.certifications}</p>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-900/30">+18%</span>
              </div>

              <div className="p-3 bg-bastion-bg rounded-lg border border-bastion-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-bastion-text-muted uppercase">Open Incidents</span>
                  <p className={`text-lg font-bold font-display mt-0.5 ${cases.filter(c => c.status === 'OPEN').length > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {cases.filter(c => c.status === 'OPEN').length}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-bastion-text-muted font-light">Realtime</span>
              </div>

              <div className="p-3 bg-bastion-bg rounded-lg border border-bastion-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-bastion-text-muted uppercase">Averaged Trust Score</span>
                  <p className="text-lg font-bold text-emerald-400 font-display mt-0.5">{metrics.avgTrustScore}/100</p>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-emerald-500/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Console Output Logging */}
          <div className="mt-6 border-t border-bastion-border pt-4">
            <span className="text-[10px] font-mono tracking-wider text-bastion-text-muted uppercase block mb-2">Live Compliance Telemetry</span>
            <div className="bg-black/40 rounded-lg p-3 font-mono text-[10px] leading-relaxed h-32 overflow-y-auto space-y-1.5 border border-bastion-border text-bastion-text-muted">
              {demoTerminalLogs.map((log, i) => (
                <div key={i} className={`${log.startsWith('[BASTION') ? 'text-rose-400' : log.startsWith('[COMMAND') ? 'text-yellow-400' : 'text-bastion-text-muted'}`}>
                  &gt; {log}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Center/Right Dynamic Panels based on active tab */}
        <div className="lg:col-span-3 p-6 flex flex-col justify-between">
          
          <AnimatePresence mode="wait">
            
            {/* TAB: COMMAND CENTER (Default High-Level Overview) */}
            {activeTab === 'command' && (
              <motion.div 
                key="command"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6 w-full"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-semibold text-white">System Command Center</h4>
                    <p className="text-xs text-bastion-text-muted">Unified control plane aggregating trust posture and cognitive security logs.</p>
                  </div>
                  <span className="text-[10px] bg-bastion-azure/10 text-bastion-azure border border-bastion-azure/20 px-2.5 py-1 rounded font-mono font-medium">
                    Financial Guardrails Active
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Governance Graph Preview */}
                  <div className="bg-bastion-bg rounded-lg border border-bastion-border p-4 flex flex-col justify-between h-64">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-white">Cognitive Governance Graph</span>
                      <button onClick={() => setActiveTab('graph')} className="text-[10px] text-bastion-azure hover:underline flex items-center gap-1 cursor-pointer">
                        Expand Graph <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="flex-1 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-radial from-bastion-azure/5 to-transparent pointer-events-none" />
                      
                      {/* Live aesthetic network map */}
                      <svg viewBox="0 0 400 200" className="w-full max-w-[320px] h-full">
                        {/* Lines */}
                        <line x1="200" y1="100" x2="100" y2="60" stroke="#0078D4" strokeWidth="1.5" strokeDasharray="3 3" />
                        <line x1="200" y1="100" x2="300" y2="60" stroke="#0078D4" strokeWidth="2" className="animate-pulse" />
                        <line x1="200" y1="100" x2="110" y2="150" stroke="#f43f5e" strokeWidth="2.5" />
                        <line x1="200" y1="100" x2="290" y2="150" stroke="#10b981" strokeWidth="1.5" />

                        {/* LLM Gateway */}
                        <circle cx="100" cy="60" r="14" fill="#0b1e32" stroke="#0078D4" strokeWidth="1.5" />
                        <text x="100" y="64" fontSize="8" fill="#fff" textAnchor="middle" fontFamily="monospace">LLM</text>
                        <text x="100" y="42" fontSize="8" fill="#8fa3b7" textAnchor="middle">Azure OpenAI</text>

                        {/* Core DB */}
                        <circle cx="300" cy="60" r="14" fill="#0b1e32" stroke="#0078D4" strokeWidth="1.5" />
                        <text x="300" y="64" fontSize="8" fill="#fff" textAnchor="middle" fontFamily="monospace">DB</text>
                        <text x="300" y="42" fontSize="8" fill="#8fa3b7" textAnchor="middle">Customer Ledger</text>

                        {/* Rogue Access */}
                        <circle cx="110" cy="150" r="14" fill="#1e1824" stroke="#f43f5e" strokeWidth="1.5" className="animate-pulse" />
                        <text x="110" y="154" fontSize="8" fill="#f43f5e" textAnchor="middle" fontFamily="monospace">MUT</text>
                        <text x="110" y="174" fontSize="8" fill="#f43f5e" textAnchor="middle">Rogue API Mutation</text>

                        {/* Safe Integration */}
                        <circle cx="290" cy="150" r="14" fill="#0b1e32" stroke="#10b981" strokeWidth="1.5" />
                        <text x="290" y="154" fontSize="8" fill="#10b981" textAnchor="middle" fontFamily="monospace">API</text>
                        <text x="290" y="174" fontSize="8" fill="#8fa3b7" textAnchor="middle">ServiceNow CRM</text>

                        {/* Central Agent Server */}
                        <circle cx="200" cy="100" r="19" fill="#0078D4" stroke="#fff" strokeWidth="1.5" />
                        <text x="200" y="103" fontSize="9" fill="#fff" textAnchor="middle" fontWeight="bold">AGENT</text>
                        <text x="200" y="130" fontSize="8" fill="#fff" textAnchor="middle" fontWeight="bold">AGT-102 (Compromised)</text>
                      </svg>
                    </div>

                    <p className="text-[10px] text-bastion-text-muted text-center italic">
                      Live visualization illustrates GT-102 attempting unapproved database mutations.
                    </p>
                  </div>

                  {/* Incident Triage (Case Management) */}
                  <div className="bg-bastion-bg rounded-lg border border-bastion-border p-4 flex flex-col justify-between h-64">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-white">Active Security Cases</span>
                      <span className="text-[10px] text-rose-400 bg-rose-500/10 border border-rose-500/20 px-1.5 py-0.5 rounded font-mono">
                        Requires CISO Action
                      </span>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                      {cases.map(item => (
                        <div key={item.id} className={`p-2.5 rounded border text-xs ${
                          item.status === 'RESOLVED' 
                            ? 'bg-emerald-950/20 border-emerald-900/30' 
                            : item.severity === 'HIGH' 
                              ? 'bg-rose-950/20 border-rose-900/40' 
                              : 'bg-yellow-950/20 border-yellow-900/40'
                        }`}>
                          <div className="flex justify-between items-center">
                            <span className="font-mono font-bold text-white">{item.id}: {item.title}</span>
                            <span className={`text-[9px] px-1 rounded font-mono ${
                              item.status === 'RESOLVED' 
                                ? 'bg-emerald-900/40 text-emerald-300' 
                                : item.severity === 'HIGH' 
                                  ? 'bg-rose-900/40 text-rose-300' 
                                  : 'bg-yellow-950 text-yellow-300'
                            }`}>{item.status}</span>
                          </div>
                          <p className="text-[10.5px] text-bastion-text-muted mt-1 leading-snug">{item.description}</p>
                          
                          {item.status === 'OPEN' && (
                            <button
                              onClick={() => handleRemediate(item.id, item.agentId)}
                              className="mt-2 w-full bg-rose-600 hover:bg-rose-700 text-white font-mono text-[10px] font-bold py-1 px-2 rounded flex items-center justify-center gap-1 cursor-pointer transition-colors"
                            >
                              <Shield className="w-3 h-3" /> Isolate Agent & Revoke Access
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Live Audit Log Stream */}
                <div className="bg-bastion-bg rounded-lg border border-bastion-border p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-white">Unified Compliance Audit Trail</span>
                    <span className="text-[10px] text-bastion-text-muted font-mono">Continuous Stream</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-bastion-border text-bastion-text-muted">
                          <th className="pb-2 font-mono text-[10px]">TIME</th>
                          <th className="pb-2 font-mono text-[10px]">SOURCE</th>
                          <th className="pb-2 font-mono text-[10px]">COMPLIANCE EVENT</th>
                          <th className="pb-2 font-mono text-[10px]">STATUS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-bastion-border/40 font-mono">
                        {auditLogs.map(log => (
                          <tr key={log.id} className="hover:bg-bastion-bg-secondary/40">
                            <td className="py-2 text-[10px] text-bastion-text-muted">{log.timestamp}</td>
                            <td className="py-2 text-[10px] text-bastion-azure font-medium">{log.source}</td>
                            <td className="py-2 text-[11px] text-white">{log.event}</td>
                            <td className="py-2">
                              <span className={`text-[9px] px-1 rounded ${
                                log.status === 'OK' 
                                  ? 'bg-emerald-950 text-emerald-400' 
                                  : log.status === 'AUDITED'
                                    ? 'bg-sky-950 text-sky-400'
                                    : 'bg-rose-950 text-rose-400 animate-pulse'
                              }`}>
                                {log.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </motion.div>
            )}

            {/* TAB: AGENT REGISTRY */}
            {activeTab === 'registry' && (
              <motion.div 
                key="registry"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6 w-full"
              >
                <div>
                  <h4 className="text-base font-semibold text-white">Autonomous Agent Registry</h4>
                  <p className="text-xs text-bastion-text-muted">Central directory registering all runtime agents, authorized system boundaries, and active system prompts.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Left Column: Filterable List */}
                  <div className="md:col-span-2 bg-bastion-bg rounded-lg border border-bastion-border p-4 space-y-4">
                    <div className="flex items-center bg-bastion-bg-secondary border border-bastion-border px-3 py-1.5 rounded-lg">
                      <Search className="w-4 h-4 text-bastion-text-muted mr-2" />
                      <input 
                        type="text" 
                        placeholder="Filter agents by name, tag, or Entra credential..." 
                        className="bg-transparent border-none text-xs text-white focus:outline-none w-full placeholder-bastion-text-muted"
                      />
                    </div>

                    <div className="space-y-2">
                      {agents.map(agent => (
                        <div 
                          key={agent.id}
                          onClick={() => setSelectedAgent(agent)}
                          className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                            selectedAgent?.id === agent.id 
                              ? 'bg-bastion-bg-secondary border-bastion-azure' 
                              : 'bg-bastion-bg-secondary/40 border-bastion-border hover:border-bastion-border-hover'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              agent.status === 'COMPROMISED' 
                                ? 'bg-rose-500/10 text-rose-400' 
                                : agent.status === 'WARNING'
                                  ? 'bg-yellow-500/10 text-yellow-400'
                                  : agent.status === 'ISOLATED'
                                    ? 'bg-sky-500/10 text-sky-400'
                                    : 'bg-emerald-500/10 text-emerald-400'
                            }`}>
                              <Cpu className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-white">{agent.name}</span>
                                <span className="text-[9px] font-mono bg-bastion-bg-tertiary px-1 py-0.2 rounded text-bastion-text-muted">{agent.id}</span>
                              </div>
                              <span className="text-[10px] text-bastion-text-muted font-mono">Owner: {agent.owner}</span>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded block mb-1 ${
                              agent.status === 'COMPROMISED' 
                                ? 'bg-rose-950 text-rose-400' 
                                : agent.status === 'WARNING'
                                  ? 'bg-yellow-950 text-yellow-400'
                                  : agent.status === 'ISOLATED'
                                    ? 'bg-sky-950/60 text-sky-300 border border-sky-900/40'
                                    : 'bg-emerald-950 text-emerald-400'
                            }`}>
                              {agent.status}
                            </span>
                            <span className="text-xs font-mono text-bastion-text-muted">Trust Score: <strong className={agent.trustScore > 80 ? 'text-emerald-400' : agent.trustScore > 50 ? 'text-yellow-400' : 'text-rose-400'}>{agent.trustScore}</strong></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Detailed Inspector Card */}
                  <div className="md:col-span-1 bg-bastion-bg rounded-lg border border-bastion-border p-5 flex flex-col justify-between">
                    {selectedAgent ? (
                      <div className="space-y-4">
                        <div className="border-b border-bastion-border pb-3">
                          <span className="text-[9px] font-mono text-bastion-azure tracking-widest uppercase block mb-1">AGENT SPECIFICATION</span>
                          <h5 className="text-sm font-semibold text-white">{selectedAgent.name}</h5>
                          <p className="text-xs text-bastion-text-muted mt-0.5">{selectedAgent.role}</p>
                        </div>

                        <div className="space-y-3 text-xs">
                          <div>
                            <span className="text-bastion-text-muted block text-[10px] font-mono">AUTHORIZATION PROFILE:</span>
                            <div className="flex flex-wrap gap-1.5 mt-1.5">
                              {selectedAgent.authorizations.map((auth, idx) => (
                                <span key={idx} className="bg-bastion-bg-secondary border border-bastion-border text-white text-[9px] px-2 py-0.5 rounded font-mono flex items-center gap-1">
                                  <Lock className="w-2.5 h-2.5 text-bastion-azure" /> {auth}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3 py-2 border-y border-bastion-border/40">
                            <div>
                              <span className="text-bastion-text-muted text-[10px] font-mono block">CATEGORY:</span>
                              <span className="text-white text-xs font-medium">{selectedAgent.category}</span>
                            </div>
                            <div>
                              <span className="text-bastion-text-muted text-[10px] font-mono block">RUNNING ENTRA IDENTITY:</span>
                              <span className="text-white text-xs font-mono">id-{selectedAgent.id.toLowerCase()}-e</span>
                            </div>
                          </div>

                          <div>
                            <span className="text-bastion-text-muted block text-[10px] font-mono">SYSTEM PROMPT SIGNATURE:</span>
                            <code className="block bg-black/40 border border-bastion-border rounded p-2 text-[10px] text-emerald-400 truncate mt-1">
                              {selectedAgent.systemPromptHash}
                            </code>
                          </div>

                          <div>
                            <span className="text-bastion-text-muted block text-[10px] font-mono">CALCULATED AUDIT RATIO:</span>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex-1 bg-bastion-bg-secondary h-2 rounded overflow-hidden border border-bastion-border">
                                <div 
                                  className={`h-full rounded ${selectedAgent.trustScore > 80 ? 'bg-emerald-500' : selectedAgent.trustScore > 50 ? 'bg-yellow-500' : 'bg-rose-500'}`} 
                                  style={{ width: `${selectedAgent.trustScore}%` }} 
                                />
                              </div>
                              <span className="font-mono font-bold text-white">{selectedAgent.trustScore}%</span>
                            </div>
                          </div>
                        </div>

                        {selectedAgent.status === 'COMPROMISED' && (
                          <div className="pt-2">
                            <button
                              onClick={() => handleRemediate('CAS-1021', selectedAgent.id)}
                              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-mono text-[11px] font-bold py-2 px-3 rounded flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                            >
                              <Shield className="w-3.5 h-3.5" /> Isolate & Remediate Now
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-xs text-bastion-text-muted italic text-center my-auto">Select an agent to inspect credentials.</p>
                    )}
                  </div>

                </div>
              </motion.div>
            )}

            {/* TAB: GOVERNANCE GRAPH */}
            {activeTab === 'graph' && (
              <motion.div 
                key="graph"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6 w-full"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-semibold text-white">Cognitive Governance Graph Map</h4>
                    <p className="text-xs text-bastion-text-muted">Deconstructs agent interactions, evaluating system prompt inputs, data pipelines, integrations, and compliance nodes.</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] text-white bg-emerald-950 border border-emerald-900 px-2 py-0.5 rounded font-mono">
                      No Anomalies Isolated
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-bastion-bg rounded-lg border border-bastion-border p-6 h-[340px]">
                  
                  {/* Map Visual (Active Interactive Panel) */}
                  <div className="md:col-span-3 flex items-center justify-center border border-bastion-border/40 rounded-lg bg-black/20 relative">
                    <div className="absolute top-3 left-3 text-[10px] font-mono text-bastion-text-muted flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> Interactive Graph Model
                    </div>
                    
                    <svg viewBox="0 0 500 240" className="w-full h-full p-4">
                      {/* Connection paths */}
                      <g stroke="#0078D4" strokeWidth="1.5">
                        <path d="M 80,120 Q 160,50 250,120" fill="none" strokeDasharray="4,4" className="animate-[dash_20s_linear_infinite]" />
                        <path d="M 80,120 Q 160,190 250,120" fill="none" />
                        <path d="M 250,120 L 370,50" fill="none" stroke={governanceSelectedNode === 'entra' ? '#0078D4' : '#112942'} strokeWidth="2" />
                        <path d="M 250,120 L 370,120" fill="none" stroke={governanceSelectedNode === 'llm' ? '#0078D4' : '#112942'} strokeWidth="2" />
                        <path d="M 250,120 L 370,190" fill="none" stroke={governanceSelectedNode === 'tools' ? '#0078D4' : '#112942'} strokeWidth="2" />
                      </g>

                      {/* Left: Input Origin Trigger */}
                      <g cursor="pointer" onClick={() => setGovernanceSelectedNode('trigger')}>
                        <circle cx="80" cy="120" r="22" fill="#0b1e32" stroke="#0078D4" strokeWidth="2" />
                        <User className="w-5 h-5 text-bastion-azure-light" x="70" y="110" />
                        <text x="80" y="155" fontSize="9" fill="#fff" textAnchor="middle">Human Call</text>
                      </g>

                      {/* Central Node: Autonomous Agent under compliance */}
                      <g cursor="pointer" onClick={() => setGovernanceSelectedNode('agent')}>
                        <circle cx="250" cy="120" r="30" fill="#0078D4" stroke="#fff" strokeWidth="2" />
                        <Cpu className="w-7 h-7 text-white" x="236.5" y="106.5" />
                        <text x="250" y="165" fontSize="10" fill="#fff" fontWeight="bold" textAnchor="middle">Autonomous Agent</text>
                        <text x="250" y="177" fontSize="8" fill="#8fa3b7" textAnchor="middle">AGT-208: Active Certification</text>
                      </g>

                      {/* Right: Microsoft Entra Identity */}
                      <g cursor="pointer" onClick={() => setGovernanceSelectedNode('entra')}>
                        <circle cx="370" cy="50" r="20" fill="#0b1e32" stroke={governanceSelectedNode === 'entra' ? '#0078D4' : 'rgba(255,255,255,0.1)'} strokeWidth="2" />
                        <Key className="w-5 h-5 text-sky-400" x="360" y="40" />
                        <text x="402" y="53" fontSize="9" fill="#fff" textAnchor="start">Authentication (Entra)</text>
                      </g>

                      {/* Right Detail: Certified LLM Gateway */}
                      <g cursor="pointer" onClick={() => setGovernanceSelectedNode('llm')}>
                        <circle cx="370" cy="120" r="20" fill="#0b1e32" stroke={governanceSelectedNode === 'llm' ? '#0078D4' : 'rgba(255,255,255,0.1)'} strokeWidth="2" />
                        <Shield className="w-5 h-5 text-amber-400" x="360" y="110" />
                        <text x="402" y="123" fontSize="9" fill="#fff" textAnchor="start">LLM Security Vault</text>
                      </g>

                      {/* Right Detail: Databases and Integrations (ServiceNow, CRM) */}
                      <g cursor="pointer" onClick={() => setGovernanceSelectedNode('tools')}>
                        <circle cx="370" cy="190" r="20" fill="#0b1e32" stroke={governanceSelectedNode === 'tools' ? '#0078D4' : 'rgba(255,255,255,0.1)'} strokeWidth="2" />
                        <Database className="w-5 h-5 text-emerald-400" x="360" y="180" />
                        <text x="402" y="193" fontSize="9" fill="#fff" textAnchor="start">Ledger Datastore</text>
                      </g>

                    </svg>
                  </div>

                  {/* Graph Metadata Inspector */}
                  <div className="md:col-span-1 border border-bastion-border bg-bastion-bg-secondary p-4 rounded-lg flex flex-col justify-between text-xs">
                    <div>
                      <span className="text-[9px] font-mono text-bastion-azure tracking-wider uppercase block mb-1">NODE INSPECTOR</span>
                      
                      {governanceSelectedNode === 'agent' && (
                        <div className="space-y-2">
                          <h5 className="font-semibold text-white">Central Agent Controller</h5>
                          <p className="text-bastion-text-muted text-[11px] leading-relaxed">Runs under continuous control metrics. Bastion monitors intermediate inputs, validating whether prompt weights align with system authorization parameters before transmission.</p>
                          <div className="p-2 bg-black/20 rounded font-mono text-[10px] text-emerald-400 border border-bastion-border">
                            AUTH STATE: EXCLUSIVE<br />
                            SESSION SECURE: YES
                          </div>
                        </div>
                      )}

                      {governanceSelectedNode === 'trigger' && (
                        <div className="space-y-2">
                          <h5 className="font-semibold text-white">Human Prompt Gateway</h5>
                          <p className="text-bastion-text-muted text-[11px] leading-relaxed">The original trigger interface. Inputs are automatically parsed to filter adversarial attacks and prompt-injection vectors *before* they configure the agent's memory bank.</p>
                        </div>
                      )}

                      {governanceSelectedNode === 'entra' && (
                        <div className="space-y-2">
                          <h5 className="font-semibold text-white">Microsoft Entra Sync</h5>
                          <p className="text-bastion-text-muted text-[11px] leading-relaxed">Binds Microsoft Entra identity directly to the cognitive entity. Revoking credentials instantly results in immediate agent isolation across all servers.</p>
                        </div>
                      )}

                      {governanceSelectedNode === 'llm' && (
                        <div className="space-y-2">
                          <h5 className="font-semibold text-white">LLM Firewall Interceptor</h5>
                          <p className="text-bastion-text-muted text-[11px] leading-relaxed">Inspects raw token completions and vectors returned from Azure OpenAI. Blocked completions are vetoed instantly before hitting internal data servers.</p>
                        </div>
                      )}

                      {governanceSelectedNode === 'tools' && (
                        <div className="space-y-2">
                          <h5 className="font-semibold text-white">Authorized Datastore</h5>
                          <p className="text-bastion-text-muted text-[11px] leading-relaxed">Direct read/write ledgers. Contains deep constraints to block bulk data exfiltration, ensuring strict database row permissions match the agent's identity.</p>
                        </div>
                      )}
                    </div>

                    <p className="text-[10px] text-bastion-text-muted pt-2 border-t border-bastion-border/40 mt-2">
                      Click nodes in the map diagram to query the live enterprise topology.
                    </p>
                  </div>

                </div>
              </motion.div>
            )}

            {/* TAB: TRUST SCORES */}
            {activeTab === 'scores' && (
              <motion.div 
                key="scores"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6 w-full"
              >
                <div>
                  <h4 className="text-base font-semibold text-white">Cognitive Trust Engineering</h4>
                  <p className="text-xs text-bastion-text-muted">Scientific risk monitoring based on compliance alignment, security behavior, and system call boundaries.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Trust Score Breakdown Metrics */}
                  <div className="p-4 bg-bastion-bg rounded-lg border border-bastion-border space-y-4">
                    <span className="text-[10px] font-mono text-bastion-azure tracking-widest uppercase block border-b border-bastion-border pb-2">RISK EVALUATION DEVIATIONS</span>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between font-mono text-xs mb-1">
                          <span className="text-bastion-text-muted">Prompt-Injection Resistance</span>
                          <span className="text-emerald-400 font-bold">98%</span>
                        </div>
                        <div className="h-1.5 bg-bastion-bg-secondary rounded overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: '98%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between font-mono text-xs mb-1">
                          <span className="text-bastion-text-muted">Hallucination & Drift Control</span>
                          <span className="text-yellow-400 font-bold">74%</span>
                        </div>
                        <div className="h-1.5 bg-bastion-bg-secondary rounded overflow-hidden">
                          <div className="h-full bg-yellow-500" style={{ width: '74%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between font-mono text-xs mb-1">
                          <span className="text-bastion-text-muted">Entra Privilege Guardrail Align</span>
                          <span className="text-emerald-400 font-bold">91%</span>
                        </div>
                        <div className="h-1.5 bg-bastion-bg-secondary rounded overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: '91%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between font-mono text-xs mb-1">
                          <span className="text-bastion-text-muted">Excessive Session Execution</span>
                          <span className="text-rose-400 font-bold">88% Flag Rate</span>
                        </div>
                        <div className="h-1.5 bg-bastion-bg-secondary rounded overflow-hidden">
                          <div className="h-full bg-rose-500" style={{ width: '88%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust Score Analysis Graphs */}
                  <div className="md:col-span-2 bg-bastion-bg rounded-lg border border-bastion-border p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-white block">Trust Tendency Scale (7-Day Period)</span>
                      <p className="text-[11px] text-bastion-text-muted">Continuous calculations of agent behaviors, graphing cognitive alignment and safety metrics.</p>
                    </div>

                    {/* Simple aesthetic canvas line chart */}
                    <div className="h-44 flex items-end justify-between px-2 pt-6 relative">
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        <div className="border-b border-bastion-border/40 w-full h-0" />
                        <div className="border-b border-bastion-border/40 w-full h-0" />
                        <div className="border-b border-bastion-border/40 w-full h-0" />
                      </div>

                      {/* Mock Chart Columns */}
                      {[
                        { day: 'Mon', score: 81 },
                        { day: 'Tue', score: 79 },
                        { day: 'Wed', score: 85 },
                        { day: 'Thu', score: 82 },
                        { day: 'Fri', score: 73 },
                        { day: 'Sat', score: 84 },
                        { day: 'Sun (Live)', score: 87 }
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 z-10">
                          <span className="text-[10px] font-mono text-emerald-400 font-bold">{item.score}</span>
                          <div className="w-8 bg-gradient-to-t from-bastion-azure/10 to-bastion-azure border border-bastion-azure/30 rounded-t" style={{ height: `${item.score * 1.2}px` }} />
                          <span className="text-[9px] font-mono text-bastion-text-muted">{item.day}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-[10px] text-bastion-text-muted italic text-center mt-3">
                      Calibrated based on 10,249 validated transactions and 12 live compliance actions.
                    </p>
                  </div>

                </div>
              </motion.div>
            )}

            {/* TAB: CASE MANAGEMENT */}
            {activeTab === 'cases' && (
              <motion.div 
                key="cases"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6 w-full"
              >
                <div>
                  <h4 className="text-base font-semibold text-white">Active Compliance Investigations</h4>
                  <p className="text-xs text-bastion-text-muted font-normal">Investigate active cognitive violations, policy overrides, and initiate quick, enterprise-grade mitigation sequences.</p>
                </div>

                <div className="space-y-4 rounded-lg bg-bastion-bg border border-bastion-border p-4">
                  {cases.length === 0 ? (
                    <div className="text-center py-10">
                      <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                      <h5 className="font-semibold text-white">Zero Active Hot Cases</h5>
                      <p className="text-xs text-bastion-text-muted mt-1 max-w-sm mx-auto">All registered agents currently conform to active compliance standards and organizational trust parameters.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cases.map((incident, idx) => (
                        <div key={incident.id} className="p-4 rounded-lg border border-bastion-border bg-bastion-bg-secondary/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div className="space-y-1.5 flex-1">
                            <div className="flex items-center gap-2.5">
                              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                                incident.severity === 'HIGH' ? 'bg-rose-950 text-rose-400' : 'bg-yellow-950 text-yellow-400'
                              }`}>
                                {incident.severity} RISK
                              </span>
                              <span className="text-xs font-mono font-bold text-white mb-0.5">{incident.id}</span>
                              <span className="text-xs text-bastion-text-muted">Incident Logged: {incident.timestamp}</span>
                            </div>
                            <h5 className="text-sm font-semibold text-white">{incident.title}</h5>
                            <p className="text-xs text-bastion-text-muted">{incident.description}</p>
                            <div className="flex gap-4 pt-1 font-mono text-[10px] text-bastion-text-muted">
                              <span>Target Agent: <strong className="text-white">{incident.agentName}</strong> ({incident.agentId})</span>
                              <span>Category: <strong className="text-white">{incident.category}</strong></span>
                            </div>
                          </div>

                          <div className="flex-shrink-0">
                            {incident.status === 'OPEN' ? (
                              <button
                                onClick={() => handleRemediate(incident.id, incident.agentId)}
                                className="bg-rose-600 hover:bg-rose-700 text-white font-mono text-xs font-bold py-2 px-4 rounded-lg flex items-center gap-1.5 cursor-pointer transition-all border border-rose-500/30"
                              >
                                <Shield className="w-4 h-4" /> Isolate Agent
                              </button>
                            ) : (
                              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold py-2 px-3 bg-emerald-950/40 border border-emerald-900/30 rounded-lg">
                                <CheckCircle2 className="w-4 h-4" /> COMPLIANCE RESTORED
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* TAB: EVIDENCE VAULT */}
            {activeTab === 'evidence' && (
              <motion.div 
                key="evidence"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6 w-full"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-semibold text-white">Cryptographic Evidence Vault</h4>
                    <p className="text-xs text-bastion-text-muted font-normal">Tamper-proof audit logs cryptographically validating agent decision boundaries and alignment proofs for regulatory compliance.</p>
                  </div>
                  <button
                    onClick={handleAddEvidence}
                    className="bg-bastion-azure hover:bg-bastion-azure-light text-white font-mono text-[11px] font-bold py-1.5 px-3 rounded-lg flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <Zap className="w-3.5 h-3.5 text-yellow-300" /> Append Manual Alignment Block
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Evidence Blocks Stack */}
                  <div className="md:col-span-2 bg-bastion-bg rounded-lg border border-bastion-border p-4 space-y-3">
                    <span className="text-[10px] font-mono text-bastion-text-muted block uppercase border-b border-bastion-border pb-2">Cryptographic Log Chain</span>
                    
                    <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                      {evidenceBlocks.map((block, i) => (
                        <div key={i} className="p-3 bg-bastion-bg-secondary/40 border border-bastion-border/60 rounded-lg flex justify-between items-center text-xs">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-white">BLOCK #{block.blockNumber}</span>
                              <span className="text-[9px] bg-emerald-950 text-emerald-400 font-mono px-1 rounded">{block.status}</span>
                            </div>
                            <p className="text-[11px] text-white">Action: {block.action}</p>
                            <div className="flex gap-4 font-mono text-[9px] text-bastion-text-muted">
                              <span>Agent: {block.agentId}</span>
                              <span>Hash: {block.hash}</span>
                            </div>
                          </div>
                          
                          <div className="text-right font-mono text-[9px] text-bastion-text-muted">
                            <span className="block">{block.timestamp}</span>
                            <span className="block text-[8px] text-bastion-azure/80 mt-1">{block.signature}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vault Cryptographic Certificate Summary */}
                  <div className="p-4 bg-bastion-bg rounded-lg border border-bastion-border text-xs flex flex-col justify-between">
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono text-bastion-azure uppercase block tracking-wider">HARDENED PROOF INTEGRITY</span>
                      <h5 className="font-semibold text-white">SHA-256 Ledger State</h5>
                      <p className="text-bastion-text-muted text-[11px] leading-relaxed">
                        Every action completed by external or internal autonomous executors is parsed, hashed, and cryptographically committed. This maintains continuous audit-ready state compliance for SOC2, DORA, and financial system regulations.
                      </p>
                      <div className="p-2.5 bg-black/40 border border-bastion-border rounded text-[10px] text-amber-400 font-mono leading-tight space-y-0.5">
                        <div className="truncate">LEDGER ROOT: b92a83ff9281a8f9cd</div>
                        <div>RECORDS VALIDATED: 10,249</div>
                        <div>SYSTEM DRIFT DETECTED: 0.00%</div>
                      </div>
                    </div>

                    <p className="text-[9px] text-bastion-text-muted leading-relaxed pt-2 border-t border-bastion-border/40 mt-3">
                      Integrates cryptographically with Microsoft Sentinel and Purview to prevent audit log fabrication.
                    </p>
                  </div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>
          
          {/* Bottom Interactive Trigger Area */}
          <div className="mt-5 border-t border-bastion-border pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs bg-bastion-bg-secondary/20 p-3 rounded-lg">
            <div>
              <p className="text-white font-medium flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-bastion-azure-light" /> Live Demo Simulator Controls
              </p>
              <p className="text-[11px] text-bastion-text-muted">Click options in the tab navigation above to simulate SOC2 audits, analyze the compliance map, or revoke compromised API credentials.</p>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => {
                  // Simulate an inject attack trigger
                  setAuditLogs(prev => [
                    { id: Date.now().toString(), timestamp: new Date().toTimeString().split(' ')[0], source: 'Adversary-Simulator', event: 'Simulated prompt boundary override triggered context analysis.', status: 'ALERT' },
                    ...prev
                  ]);
                  setDemoTerminalLogs(prev => [
                    ...prev,
                    `[SIMULATION WARNING] Injected adversarial token injection into customer portal support bot.`,
                    `[BASTION ACTIVE RED] Alert issued: anomaly detected on RetailSupportBot-Epic-12.`
                  ]);
                  setAgents(prev => prev.map(a => {
                    if (a.id === 'AGT-102') {
                      return { ...a, status: 'COMPROMISED', trustScore: 12 };
                    }
                    return a;
                  }));
                  // re-open case if resolved
                  setCases(prev => {
                    if (prev.some(c => c.id === 'CAS-1021' && c.status === 'OPEN')) return prev;
                    return [
                      {
                        id: 'CAS-1021',
                        title: 'Unusual Data Access Pattern Detected',
                        category: 'Data Egress',
                        severity: 'HIGH',
                        agentId: 'AGT-102',
                        agentName: 'RetailSupportBot-Epic-12',
                        timestamp: '2026-06-13 10:28:15',
                        status: 'OPEN',
                        description: 'Agent requested customer account records outside authorization scope, executing multiple fast database mutations and seeking direct export endpoints.'
                      },
                      ...prev.filter(c => c.id !== 'CAS-1021')
                    ];
                  });
                }}
                className="bg-bastion-bg hover:bg-rose-950/40 text-rose-400 hover:text-rose-300 font-mono text-[10.5px] font-bold py-1.5 px-3 rounded border border-rose-900/40 hover:border-rose-900/60 cursor-pointer transition-all flex items-center gap-1"
              >
                <AlertTriangle className="w-3.5 h-3.5" /> Inject Simulated Threat
              </button>
              
              <button
                onClick={() => {
                  // Restore baseline state
                  setAgents(prev => prev.map(a => {
                    if (a.id === 'AGT-102') return { ...a, status: 'ACTIVE', trustScore: 89 };
                    if (a.id === 'AGT-992') return { ...a, status: 'ACTIVE', trustScore: 91 };
                    return a;
                  }));
                  setCases([]);
                  setAuditLogs(prev => [
                    { id: Date.now().toString(), timestamp: new Date().toTimeString().split(' ')[0], source: 'Bastion-System', event: 'Simulator reset. Healthy corporate compliance baseline restored.', status: 'OK' },
                    ...prev
                  ]);
                  setDemoTerminalLogs([
                    'System compliance status reset.',
                    'Monitoring 1,248 active agents across Microsoft Entra ID context.',
                    'All trust indices calibrated at healthy baseline.'
                  ]);
                }}
                className="bg-bastion-bg hover:bg-bastion-bg-tertiary text-bastion-text-muted hover:text-white font-mono text-[10.5px] font-bold py-1.5 px-2.5 rounded border border-bastion-border cursor-pointer transition-all"
                title="Reset Simulation Baseline"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

// Custom wrapper for local fallback of Shields icon
function ShieldsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z" />
      <path d="M12 22V2" />
    </svg>
  );
}
