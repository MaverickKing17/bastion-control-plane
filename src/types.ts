export interface Agent {
  id: string;
  name: string;
  role: string;
  owner: string;
  status: 'ACTIVE' | 'ISOLATED' | 'COMPROMISED' | 'WARNING';
  trustScore: number;
  authorizations: string[];
  lastActivity: string;
  systemPromptHash: string;
  category: 'Advisory' | 'Trading' | 'Customer Support' | 'Operations';
}

export interface ThreatCase {
  id: string;
  title: string;
  category: 'Overprivilege' | 'Prompt Injection' | 'Data Egress' | 'Unauthorized Execution';
  severity: 'HIGH' | 'MEDIUM' | 'LOW';
  agentId: string;
  agentName: string;
  timestamp: string;
  status: 'OPEN' | 'ANALYSING' | 'RESOLVED';
  description: string;
}

export interface EvidenceBlock {
  blockNumber: number;
  timestamp: string;
  agentId: string;
  action: string;
  hash: string;
  previousHash: string;
  signature: string;
  status: 'VALIDATED' | 'PENDING';
}

export interface AuditLog {
  id: string;
  timestamp: string;
  source: string;
  event: string;
  status: 'OK' | 'AUDITED' | 'VETO' | 'ALERT';
}
