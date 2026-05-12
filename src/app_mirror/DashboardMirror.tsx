'use client';

import { useState, useEffect } from 'react';
import {
  Users,
  UserCheck,
  CalendarCheck,
  Clock,
  TrendingUp,
  Activity,
  ChevronRight,
  ArrowRight,
  Zap,
  Bot,
  RefreshCw,
  ShieldCheck,
  Calendar
} from 'lucide-react';

const DashboardMirror = () => {
  const isMobile = false; // Mocking desktop view for the mockup
  
  const stats = {
    total_leads: 1245,
    qualified_leads: 582,
    booked_leads: 218,
    followups_pending: 14
  };

  const intelligence = {
    high_intent: 12,
    medium_intent: 48,
    low_intent: 156,
    qualified: 582,
    unqualified: 24,
    needs_followup: 14
  };

  const leads = [
    { id: 1, name: 'Sarah Jenkins', phone: '+91 98765 43210', stage: 'BOOKED', source: 'WhatsApp', last_activity_at: new Date().toISOString() },
    { id: 2, name: 'Mike Ross', phone: '+91 91234 56789', stage: 'QUALIFIED', source: 'Instagram', last_activity_at: new Date().toISOString() },
    { id: 3, name: 'Harvey Specter', phone: '+91 90000 11111', stage: 'NEW', source: 'Facebook', last_activity_at: new Date().toISOString() }
  ];

  const notifications = [
    { id: 1, message: 'Auditor detected high intent for Sarah J.', timestamp: new Date(), type: 'success' },
    { id: 2, message: 'Sentry responded to a new lead.', timestamp: new Date(), type: 'info' },
    { id: 3, message: 'Meeting scheduled with Mike Ross.', timestamp: new Date(), type: 'success' }
  ];

  const metrics = {
    total: 1245,
    qualified: 582,
    booked: 218,
    followup: 14
  };

  const funnelStages = [
    { label: 'New Leads', count: 645, color: 'var(--primary)' },
    { label: 'Qualified', count: 582, color: 'var(--accent-yellow)' },
    { label: 'Booked', count: 218, color: 'var(--accent-green)' }
  ];

  const cardStyle = {
    backgroundColor: 'var(--bg-panel)',
    borderRadius: '12px',
    padding: '16px',
    border: '1px solid var(--border-subtle)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  };

  return (
    <div className="app-theme-mirror animate-fade" style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      
      {/* Header Area */}
      <div className="flex-responsive">
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>Intelligence Dashboard</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '11px', marginTop: '2px' }}>Real-time analysis of your lead automation funnel.</p>
        </div>
      </div>

      {/* AI Hub */}
      <div style={{
        padding: '20px 24px',
        backgroundColor: 'rgba(99, 102, 241, 0.08)',
        borderRadius: '20px',
        border: '1px solid rgba(99, 102, 241, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(99, 102, 241, 0.2)' }}>
            <Bot size={22} />
          </div>
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-main)', margin: 0, letterSpacing: '-0.01em' }}>AI Intelligence Hub</h4>
            <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '2px 0 0 0' }}>Smart insights based on pipeline activity.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
           <div style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '11px', fontWeight: '700', color: 'var(--accent-red)' }}>Hot Intent: 12</div>
           <div style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '11px', fontWeight: '700', color: 'var(--accent-green)' }}>Recently Active: 48</div>
        </div>
      </div>

      {/* Funnel Section */}
      <div style={{...cardStyle, padding: '20px'}}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-main)' }}>{metrics.total}</div>
            <div style={{ width: '1px', height: '20px', background: 'var(--border-subtle)' }} />
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-muted)' }}>Conversion Funnel</div>
        </div>
        
        <div style={{ display: 'flex', height: '40px', borderRadius: '10px', overflow: 'hidden', background: 'var(--bg-deep)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ width: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: '11px', color: 'white', fontWeight: '600' }}>New (645)</div>
            <div style={{ width: '30%', background: 'var(--accent-yellow)', display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: '11px', color: 'white', fontWeight: '600' }}>Qual (582)</div>
            <div style={{ width: '20%', background: 'var(--accent-green)', display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: '11px', color: 'white', fontWeight: '600' }}>Booked (218)</div>
        </div>
      </div>

      {/* Quality Matrix */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
         {[
             { label: 'Hot', count: 12, color: 'var(--accent-red)', bg: 'rgba(239, 68, 68, 0.08)' },
             { label: 'Warm', count: 48, color: 'var(--accent-yellow)', bg: 'rgba(245, 158, 11, 0.08)' },
             { label: 'Cold', count: 156, color: 'var(--text-dim)', bg: 'rgba(100, 116, 139, 0.08)' }
         ].map(s => (
             <div key={s.label} style={{ padding: '16px', background: s.bg, borderRadius: '16px', border: `1px solid ${s.color}15`, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontSize: '24px', fontWeight: '700', color: s.color }}>{s.count}</div>
                <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)' }}>{s.label} Quality</div>
             </div>
         ))}
      </div>

      {/* Two Column Bottom Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '16px' }}>
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Activity size={16} className="text-primary" />
                <h3 style={{ fontSize: '13px', fontWeight: '500' }}>Recent Interactions</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {leads.map(l => (
                    <div key={l.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px', background: 'var(--bg-hover)', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--bg-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>{l.name[0]}</div>
                            <div>
                                <div style={{ fontSize: '11px', fontWeight: '600' }}>{l.name}</div>
                                <div style={{ fontSize: '9px', color: 'var(--text-dim)' }}>{l.stage}</div>
                            </div>
                        </div>
                        <ChevronRight size={12} style={{ color: 'var(--text-dim)' }} />
                    </div>
                ))}
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Clock size={16} className="text-primary" />
                <h3 style={{ fontSize: '13px', fontWeight: '500' }}>Timeline</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '7px', top: '5px', bottom: '5px', width: '1px', background: 'var(--border-subtle)' }} />
                {notifications.map(n => (
                    <div key={n.id} style={{ display: 'flex', gap: '12px', position: 'relative', zIndex: 1 }}>
                        <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--bg-panel)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: n.type === 'success' ? 'var(--accent-green)' : 'var(--primary)' }} />
                        </div>
                        <div style={{ fontSize: '10px', color: 'var(--text-main)', lineHeight: '1.4' }}>{n.message}</div>
                    </div>
                ))}
            </div>
          </div>
      </div>

    </div>
  );
};

export default DashboardMirror;
