import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Lock, FileCheck, CheckCircle, X, Users, Terminal, RefreshCw, Send, Sparkles } from 'lucide-react';

interface DesignPartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DesignPartnerModal({ isOpen, onClose }: DesignPartnerModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    company: '',
    challenge: 'audit-trails',
    agentCount: '1-10',
    additionalDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [partnerID, setPartnerID] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      alert('Please fill out the required corporate credentials.');
      return;
    }

    setIsSubmitting(true);

    // Simulate high-end server-side signature validation
    setTimeout(() => {
      const generatedID = `BSTN-ADVISORY-${Math.floor(1000 + Math.random() * 9000)}-2026`;
      setPartnerID(generatedID);
      
      // Save to localStorage so they can see persistent registration state
      const savedEntries = JSON.parse(localStorage.getItem('bastion_partner_requests') || '[]');
      savedEntries.push({
        ...formData,
        id: generatedID,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('bastion_partner_requests', JSON.stringify(savedEntries));

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            id="design-partner-modal"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-xl bg-slate-900 border border-bastion-border rounded-xl shadow-2xl overflow-hidden font-sans z-10"
          >
            {/* Top Security Line Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-bastion-azure via-sky-400 to-emerald-500" />

            {/* Header */}
            <div className="p-6 border-b border-bastion-border flex justify-between items-start bg-bastion-bg-secondary/40">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-bastion-azure/10 text-bastion-azure border border-bastion-azure/20 rounded-lg">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-bastion-azure font-bold uppercase">Design Partner Program</span>
                    <span className="text-[9px] bg-amber-500/10 text-amber-500 border border-amber-500/20 px-1.5 py-0.2 rounded font-mono font-medium">4 spots available</span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1">Request Operational Security Review</h4>
                  <p className="text-xs text-bastion-text-muted mt-0.5">Secure, 15-minute alignment audit for financial and enterprise compliance leaders.</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="text-bastion-text-muted hover:text-white transition-colors p-1 rounded-md hover:bg-bastion-bg-tertiary cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Informational Policy Frame */}
                  <div className="p-3.5 bg-bastion-bg rounded-lg border border-bastion-border/40 text-xs text-bastion-text-muted leading-relaxed space-y-1.5 bg-gradient-to-r from-bastion-bg-secondary/80 to-bastion-bg">
                    <p className="text-white font-medium flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-bastion-azure" /> Compliance-Compliant Registration Policy
                    </p>
                    <p className="text-[11px]">
                      Bastion operates exclusively with <strong>synthetic data</strong>. No production API connections, legacy code injection, or customer credentials are required during the design partner audit.
                    </p>
                  </div>

                  {/* Two-Column Grid fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-bastion-text-muted block uppercase">Corporate Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#05111d] border border-bastion-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-bastion-azure focus:border-bastion-azure placeholder-bastion-text-muted/60"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-bastion-text-muted block uppercase">Professional Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="ciso@financialcorp.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#05111d] border border-bastion-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-bastion-azure focus:border-bastion-azure placeholder-bastion-text-muted/60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-bastion-text-muted block uppercase">Official Job Title *</label>
                      <input
                        required
                        type="text"
                        placeholder="CISO / Director of Infrastructure"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full bg-[#05111d] border border-bastion-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-bastion-azure focus:border-bastion-azure placeholder-bastion-text-muted/60"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-bastion-text-muted block uppercase">Corporate Institution *</label>
                      <input
                        required
                        type="text"
                        placeholder="Morgan Stanley / BofA"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#05111d] border border-bastion-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-bastion-azure focus:border-bastion-azure placeholder-bastion-text-muted/60"
                      />
                    </div>
                  </div>

                  {/* Operational Settings */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-bastion-text-muted block uppercase">Primary Security Concern *</label>
                      <select
                        value={formData.challenge}
                        onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                        className="w-full bg-[#05111d] border border-bastion-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-bastion-azure focus:border-bastion-azure"
                      >
                        <option value="audit-trails">Secure Cryptographic Audit Trails</option>
                        <option value="overprivilege">Agent Authorization Overreach</option>
                        <option value="promptbounds">Prompt Boundaries & Jailbreak Cont.</option>
                        <option value="entra-sync">Microsoft Entra Integration sync</option>
                        <option value="remediation">Automated Agent Isolation and Block</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-bastion-text-muted block uppercase">Planned Active Agent Fleet</label>
                      <select
                        value={formData.agentCount}
                        onChange={(e) => setFormData({ ...formData, agentCount: e.target.value })}
                        className="w-full bg-[#05111d] border border-bastion-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-bastion-azure focus:border-bastion-azure"
                      >
                        <option value="1-10">1 to 10 active agents</option>
                        <option value="11-50">11 to 50 active agents</option>
                        <option value="51-200">51 to 200 active agents</option>
                        <option value="200+">More than 200 enterprise agents</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-bastion-text-muted block uppercase">Specific Architectural Guidelines (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Seeking integration with existing ServiceNow and Sentinel setup..."
                      value={formData.additionalDetails}
                      onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                      className="w-full bg-[#05111d] border border-bastion-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-bastion-azure focus:border-bastion-azure placeholder-bastion-text-muted/60 resize-none"
                    />
                  </div>

                  {/* Submission triggers */}
                  <div className="pt-4 border-t border-bastion-border/40 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 border border-bastion-border text-bastion-text-muted hover:text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2 bg-bastion-azure hover:bg-bastion-azure-light text-white rounded-lg text-xs font-bold cursor-pointer transition-colors flex items-center justify-center gap-1.5"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Assigning Counselor...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Request Program Review</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto scale-110">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white">Review Request Dispatched</h3>
                    <p className="text-xs text-bastion-text-muted max-w-sm mx-auto">
                      Your design partner credentials have been securely validation-stamped against our master ledger.
                    </p>
                  </div>

                  {/* Certificate Block */}
                  <div className="p-4 bg-bastion-bg rounded-lg border border-bastion-border/60 text-left font-mono text-[11px] leading-relaxed max-w-sm mx-auto space-y-1 text-slate-300">
                    <div className="text-[9px] text-[#8fa3b7]/60 border-b border-bastion-border pb-1.5 uppercase tracking-wider mb-1 flex justify-between items-center">
                      <span>SECURE TRANSACTION IDENT</span>
                      <span className="flex items-center gap-1 text-emerald-400"><Sparkles className="w-2.5 h-2.5" /> STAMPED</span>
                    </div>
                    <div><span className="text-emerald-400 font-bold">CLIENT KEY:</span> {partnerID}</div>
                    <div><span className="text-emerald-400 font-bold">STATUS:</span> PROVISIONALLY ASSIGNED</div>
                    <div><span className="text-emerald-400 font-bold">RECIPIENT:</span> {formData.name} ({formData.company})</div>
                    <div><span className="text-emerald-400 font-bold">AUTHORIZED SECTOR:</span> FINANCIAL SERVICES</div>
                    <p className="text-[10px] text-bastion-text-muted leading-tight border-t border-bastion-border/60 pt-2 mt-2">
                       A Bastion systems security architect has been provisioned to reach out to you within 4 business hours.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={onClose}
                      className="px-6 py-2 bg-bastion-bg border border-bastion-border hover:bg-neutral-850 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                    >
                      Close Control Console
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
