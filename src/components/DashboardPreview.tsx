'use client';

import { useState } from 'react';
import {
  Users,
  Activity,
  ChevronRight,
  Zap,
  Bot,
  Calendar,
  Bell,
  Settings,
  LayoutDashboard,
  User,
  Sun,
  Moon,
  Phone,
  Mail,
  Send
} from 'lucide-react';

const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const basePath = (isProd && isGitHubPages) ? '/Lead-Claw_Landing_Page' : '';
const logoSrc = `${basePath}/logo.svg`;

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [theme, setTheme] = useState('dark');
  const [selectedLead, setSelectedLead] = useState<number | null>(null);
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [aiMode, setAiMode] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true
  });

  const mockLeads = [
    { id: 1, name: 'Sarah Johnson', phone: '+1 234 567 8900', email: 'sarah@example.com', stage: 'QUALIFIED', quality: 'HOT', source: 'Instagram', lastActivity: '2 min ago', messages: 12 },
    { id: 2, name: 'Michael Chen', phone: '+1 234 567 8901', email: 'michael@example.com', stage: 'NEW', quality: 'WARM', source: 'WhatsApp', lastActivity: '15 min ago', messages: 5 },
    { id: 3, name: 'Emma Davis', phone: '+1 234 567 8902', email: 'emma@example.com', stage: 'BOOKED', quality: 'HOT', source: 'Facebook', lastActivity: '1 hour ago', messages: 18 },
    { id: 4, name: 'James Wilson', phone: '+1 234 567 8903', email: 'james@example.com', stage: 'QUALIFIED', quality: 'WARM', source: 'Direct', lastActivity: '3 hours ago', messages: 8 },
    { id: 5, name: 'Lisa Anderson', phone: '+1 234 567 8904', email: 'lisa@example.com', stage: 'NEW', quality: 'COLD', source: 'WhatsApp', lastActivity: '5 hours ago', messages: 3 },
  ];

  const mockBookings = [
    { id: 1, name: 'Sarah Johnson', date: '2024-05-20', time: '10:00 AM', status: 'Confirmed', type: 'Consultation' },
    { id: 2, name: 'Emma Davis', date: '2024-05-21', time: '2:00 PM', status: 'Confirmed', type: 'Demo' },
    { id: 3, name: 'James Wilson', date: '2024-05-22', time: '11:30 AM', status: 'Pending', type: 'Follow-up' },
  ];

  const stats = { total: 247, qualified: 89, booked: 34, followup: 12 };
  const funnelStages = [
    { label: 'New Leads', count: 124, color: '#6366f1', width: 50 },
    { label: 'Qualified', count: 89, color: '#f59e0b', width: 36 },
    { label: 'Booked', count: 34, color: '#10b981', width: 14 }
  ];

  const navItems = [
    { id: 'Dashboard', label: 'Dashboard', icon: <LayoutDashboard size={16} /> },
    { id: 'Leads', label: 'Leads', icon: <Users size={16} /> },
    { id: 'Bookings', label: 'Bookings', icon: <Calendar size={16} /> },
    { id: 'Notifications', label: 'Notifications', icon: <Bell size={16} /> },
    { id: 'Settings', label: 'Settings', icon: <Settings size={16} /> },
  ];

  const renderContent = () => {
    if (activeTab === 'Leads') {
      return (
        <div style={{ display: 'flex', gap: '20px', height: '100%' }}>
          <div style={{ flex: selectedLead ? '0 0 45%' : '1', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '500', color: theme === 'dark' ? '#f3f4f6' : '#0f172a' }}>All Leads</h2>
              <button onClick={() => setShowAddLeadModal(true)} style={{ padding: '8px 16px', backgroundColor: '#6366f1', color: 'white', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>+ Add Lead</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
              {mockLeads.map(lead => (
                <div key={lead.id} onClick={() => setSelectedLead(lead.id)} style={{ padding: '16px', backgroundColor: selectedLead === lead.id ? (theme === 'dark' ? '#2d2d2d' : '#f8fafc') : (theme === 'dark' ? '#212121' : '#ffffff'), borderRadius: '12px', border: `1px solid ${selectedLead === lead.id ? '#6366f1' : (theme === 'dark' ? '#2d2d2d' : '#e2e8f0')}`, cursor: 'pointer', transition: 'all 0.2s ease' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: theme === 'dark' ? '#f3f4f6' : '#0f172a', marginBottom: '4px' }}>{lead.name}</div>
                      <div style={{ fontSize: '11px', color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>{lead.phone}</div>
                    </div>
                    <span style={{ padding: '4px 10px', borderRadius: '6px', fontSize: '10px', fontWeight: '600', backgroundColor: lead.stage === 'BOOKED' ? 'rgba(16, 185, 129, 0.15)' : lead.stage === 'QUALIFIED' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(99, 102, 241, 0.15)', color: lead.stage === 'BOOKED' ? '#10b981' : lead.stage === 'QUALIFIED' ? '#f59e0b' : '#6366f1' }}>{lead.stage}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', fontSize: '11px', color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                    <span>📱 {lead.source}</span>
                    <span>💬 {lead.messages} msgs</span>
                    <span>🕐 {lead.lastActivity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {selectedLead && (() => {
            const lead = mockLeads.find(l => l.id === selectedLead);
            if (!lead) return null;
            return (
              <div style={{ flex: '0 0 55%', backgroundColor: theme === 'dark' ? '#212121' : '#ffffff', borderRadius: '12px', border: `1px solid ${theme === 'dark' ? '#2d2d2d' : '#e2e8f0'}`, padding: '20px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '20px', paddingBottom: '16px', borderBottom: `1px solid ${theme === 'dark' ? '#2d2d2d' : '#e2e8f0'}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '600', color: theme === 'dark' ? '#f3f4f6' : '#0f172a', marginBottom: '8px' }}>{lead.name}</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={14} /><span>{lead.phone}</span></div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={14} /><span>{lead.email}</span></div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setAiMode(prev => ({ ...prev, [lead.id]: !prev[lead.id] }))}
                      style={{ 
                        padding: '6px 12px', 
                        backgroundColor: aiMode[lead.id] ? '#10b981' : '#ef4444', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '6px', 
                        fontSize: '11px', 
                        fontWeight: '600', 
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {aiMode[lead.id] ? (
                        <>
                          <Bot size={14} />
                          AI Mode
                        </>
                      ) : (
                        <>
                          <User size={14} />
                          Manual
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <div style={{ flex: 1, marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ alignSelf: 'flex-start', maxWidth: '75%', padding: '10px 14px', backgroundColor: theme === 'dark' ? '#2d2d2d' : '#f8fafc', borderRadius: '12px', borderBottomLeftRadius: '4px' }}>
                    <div style={{ fontSize: '12px', color: theme === 'dark' ? '#f3f4f6' : '#0f172a' }}>Hi! I'm interested in your services. Can you tell me more?</div>
                    <div style={{ fontSize: '10px', color: theme === 'dark' ? '#64748b' : '#94a3b8', marginTop: '4px' }}>2 min ago</div>
                  </div>
                  <div style={{ alignSelf: 'flex-end', maxWidth: '75%', padding: '10px 14px', backgroundColor: '#6366f1', borderRadius: '12px', borderBottomRightRadius: '4px' }}>
                    <div style={{ fontSize: '12px', color: 'white' }}>Hello! I'd be happy to help. We offer comprehensive lead automation solutions.</div>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>1 min ago</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input type="text" placeholder="Type a message..." style={{ flex: 1, padding: '10px 14px', backgroundColor: theme === 'dark' ? '#2d2d2d' : '#f8fafc', border: `1px solid ${theme === 'dark' ? '#2d2d2d' : '#e2e8f0'}`, borderRadius: '8px', fontSize: '13px', color: theme === 'dark' ? '#f3f4f6' : '#0f172a', outline: 'none' }} />
                  <button style={{ padding: '10px 16px', backgroundColor: '#6366f1', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Send size={16} /></button>
                </div>
              </div>
            );
          })()}
        </div>
      );
    }

    if (activeTab === 'Bookings') {
      return (
        <div>
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '500', color: theme === 'dark' ? '#f3f4f6' : '#0f172a', marginBottom: '4px' }}>Bookings</h2>
            <p style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b', fontSize: '13px' }}>Manage your scheduled appointments</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {mockBookings.map(booking => (
              <div key={booking.id} style={{ padding: '20px', backgroundColor: theme === 'dark' ? '#212121' : '#ffffff', borderRadius: '12px', border: `1px solid ${theme === 'dark' ? '#2d2d2d' : '#e2e8f0'}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: theme === 'dark' ? '#2d2d2d' : '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1' }}><Calendar size={20} /></div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: theme === 'dark' ? '#f3f4f6' : '#0f172a', marginBottom: '4px' }}>{booking.name}</div>
                    <div style={{ fontSize: '12px', color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>{booking.type} • {booking.date} at {booking.time}</div>
                  </div>
                </div>
                <span style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '11px', fontWeight: '600', backgroundColor: booking.status === 'Confirmed' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)', color: booking.status === 'Confirmed' ? '#10b981' : '#f59e0b' }}>{booking.status}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeTab === 'Settings') {
      return (
        <div>
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '500', color: theme === 'dark' ? '#f3f4f6' : '#0f172a', marginBottom: '4px' }}>Settings</h2>
            <p style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b', fontSize: '13px' }}>Configure your CRM preferences</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { title: 'WhatsApp Integration', desc: 'Connect your WhatsApp Business account', status: 'Connected' },
              { title: 'AI Response Settings', desc: 'Configure automated response behavior', status: 'Active' },
              { title: 'Calendar Sync', desc: 'Sync with Google Calendar', status: 'Enabled' },
              { title: 'Notification Preferences', desc: 'Manage email and push notifications', status: 'Configured' },
            ].map((setting, idx) => (
              <div key={idx} style={{ padding: '20px', backgroundColor: theme === 'dark' ? '#212121' : '#ffffff', borderRadius: '12px', border: `1px solid ${theme === 'dark' ? '#2d2d2d' : '#e2e8f0'}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: theme === 'dark' ? '#f3f4f6' : '#0f172a', marginBottom: '4px' }}>{setting.title}</div>
                  <div style={{ fontSize: '12px', color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>{setting.desc}</div>
                </div>
                <span style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '11px', fontWeight: '600', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>{setting.status}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '500', color: theme === 'dark' ? '#f3f4f6' : '#0f172a', marginBottom: '4px' }}>Intelligence Dashboard</h2>
          <p style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b', fontSize: '13px' }}>Real-time analysis of your lead automation funnel.</p>
        </div>
        <div style={{ padding: '16px 20px', backgroundColor: 'rgba(99, 102, 241, 0.08)', borderRadius: '16px', border: '1px solid rgba(99, 102, 241, 0.15)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#6366f1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)' }}><Bot size={18} /></div>
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '13px', fontWeight: '500', color: theme === 'dark' ? '#f3f4f6' : '#0f172a', margin: '0 0 2px 0' }}>AI Intelligence Hub</h4>
            <p style={{ fontSize: '11px', color: theme === 'dark' ? '#94a3b8' : '#64748b', margin: 0 }}>Smart insights based on your current pipeline activity.</p>
          </div>
        </div>
        <div style={{ backgroundColor: theme === 'dark' ? '#212121' : '#ffffff', borderRadius: '12px', padding: '20px', border: `1px solid ${theme === 'dark' ? '#2d2d2d' : '#e2e8f0'}`, marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '500', color: theme === 'dark' ? '#f3f4f6' : '#0f172a', lineHeight: '1' }}>{stats.total}</div>
              <div style={{ fontSize: '10px', color: theme === 'dark' ? '#94a3b8' : '#64748b', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>Total Leads</div>
            </div>
            <div style={{ width: '1px', height: '32px', backgroundColor: theme === 'dark' ? '#2d2d2d' : '#e2e8f0' }}></div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '500', color: theme === 'dark' ? '#f3f4f6' : '#0f172a', marginBottom: '2px' }}>Conversion Funnel</h3>
              <p style={{ fontSize: '11px', color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>Overview of lead progression</p>
            </div>
          </div>
          <div style={{ display: 'flex', height: '40px', borderRadius: '10px', overflow: 'hidden', backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f1f5f9', marginBottom: '16px' }}>
            {funnelStages.map((stage) => (
              <div key={stage.label} style={{ width: `${stage.width}%`, height: '100%', backgroundColor: stage.color, display: 'flex', alignItems: 'center', padding: '0 12px', color: 'white', fontSize: '11px', fontWeight: '600', cursor: 'pointer', transition: 'filter 0.2s' }}>{stage.label} ({stage.count})</div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {funnelStages.map(stage => (
              <div key={stage.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: stage.color }}></div>
                <div>
                  <div style={{ fontSize: '10px', color: theme === 'dark' ? '#94a3b8' : '#64748b', marginBottom: '2px' }}>{stage.label}</div>
                  <div style={{ fontSize: '16px', fontWeight: '500', color: theme === 'dark' ? '#f3f4f6' : '#0f172a' }}>{stage.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ backgroundColor: theme === 'dark' ? '#212121' : '#ffffff', borderRadius: '12px', padding: '20px', border: `1px solid ${theme === 'dark' ? '#2d2d2d' : '#e2e8f0'}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Activity size={16} style={{ color: '#6366f1' }} />
            <h3 style={{ fontSize: '14px', fontWeight: '500', color: theme === 'dark' ? '#f3f4f6' : '#0f172a' }}>Recent Interactions</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {mockLeads.slice(0, 4).map(lead => (
              <div key={lead.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', backgroundColor: theme === 'dark' ? '#2d2d2d' : '#f8fafc', borderRadius: '10px', border: `1px solid ${theme === 'dark' ? '#2d2d2d' : '#e2e8f0'}`, cursor: 'pointer', transition: 'all 0.2s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '12px', color: theme === 'dark' ? '#9ca3af' : '#64748b' }}>{lead.name[0]}</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: theme === 'dark' ? '#f3f4f6' : '#0f172a' }}>{lead.name}</div>
                    <div style={{ fontSize: '11px', color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>{lead.stage} • {lead.source}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ fontSize: '10px', color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>{lead.lastActivity}</div>
                  <ChevronRight size={12} style={{ color: theme === 'dark' ? '#64748b' : '#94a3b8' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div style={{ width: '100%', height: '750px', backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f1f5f9', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', display: 'flex', position: 'relative' }}>
        <div style={{ width: '240px', backgroundColor: theme === 'dark' ? '#212121' : '#ffffff', borderRight: `1px solid ${theme === 'dark' ? '#2d2d2d' : '#e2e8f0'}`, display: 'flex', flexDirection: 'column', padding: '24px 12px' }}>
          <div style={{ padding: '8px 12px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={logoSrc} alt="Logo" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
            <span style={{ fontWeight: '600', fontSize: '16px', color: theme === 'dark' ? '#f3f4f6' : '#0f172a' }}>Lead Claw</span>
          </div>
          <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navItems.map(item => (
              <button key={item.id} onClick={() => setActiveTab(item.id)} style={{ textAlign: 'left', padding: '10px 16px', borderRadius: '10px', backgroundColor: activeTab === item.id ? (theme === 'dark' ? '#2d2d2d' : '#f8fafc') : 'transparent', color: activeTab === item.id ? (theme === 'dark' ? '#f3f4f6' : '#0f172a') : (theme === 'dark' ? '#9ca3af' : '#64748b'), border: 'none', fontSize: '13px', fontWeight: activeTab === item.id ? '600' : '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', transition: 'all 0.2s ease' }}>
                <span style={{ color: activeTab === item.id ? '#6366f1' : 'inherit' }}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          <div style={{ padding: '12px', borderTop: `1px solid ${theme === 'dark' ? '#2d2d2d' : '#e2e8f0'}`, display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: theme === 'dark' ? '#2d2d2d' : '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme === 'dark' ? '#9ca3af' : '#64748b' }}><User size={16} /></div>
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <div style={{ fontSize: '12px', fontWeight: '600', color: theme === 'dark' ? '#f3f4f6' : '#0f172a' }}>Demo User</div>
              <div style={{ fontSize: '10px', color: theme === 'dark' ? '#64748b' : '#94a3b8' }}>demo@leadclaw.ai</div>
            </div>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} style={{ background: theme === 'dark' ? '#2d2d2d' : '#f8fafc', border: 'none', cursor: 'pointer', width: '24px', height: '24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme === 'dark' ? '#9ca3af' : '#64748b' }}>{theme === 'dark' ? <Sun size={12} /> : <Moon size={12} />}</button>
          </div>
        </div>
        <div style={{ flex: 1, overflow: 'hidden', padding: '32px', backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f1f5f9' }}>
          <div style={{ height: '100%', overflowY: 'auto', paddingRight: '8px', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="hide-scrollbar">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Add Lead Modal */}
      {showAddLeadModal && (
        <div 
          onClick={(e) => e.target === e.currentTarget && setShowAddLeadModal(false)}
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'rgba(0, 0, 0, 0.6)', 
            backdropFilter: 'blur(8px)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            zIndex: 1000,
            animation: 'fadeIn 0.2s ease'
          }}
        >
          <div style={{ 
            width: '400px', 
            backgroundColor: theme === 'dark' ? '#212121' : '#ffffff', 
            borderRadius: '16px', 
            padding: '28px', 
            border: `1px solid ${theme === 'dark' ? '#2d2d2d' : '#e2e8f0'}`,
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            animation: 'slideUp 0.3s ease'
          }}>
            <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '600', color: theme === 'dark' ? '#f3f4f6' : '#0f172a' }}>Create New Lead</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: '500', color: theme === 'dark' ? '#9ca3af' : '#64748b', marginBottom: '6px', display: 'block' }}>Phone Number *</label>
                <input 
                  type="text" 
                  placeholder="919876543210" 
                  style={{ 
                    width: '100%', 
                    padding: '10px 12px', 
                    borderRadius: '8px', 
                    border: `1px solid ${theme === 'dark' ? '#2d2d2d' : '#e2e8f0'}`, 
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f8fafc', 
                    color: theme === 'dark' ? '#f3f4f6' : '#0f172a', 
                    fontSize: '13px',
                    outline: 'none'
                  }} 
                />
              </div>
              <div>
                <label style={{ fontSize: '12px', fontWeight: '500', color: theme === 'dark' ? '#9ca3af' : '#64748b', marginBottom: '6px', display: 'block' }}>Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  style={{ 
                    width: '100%', 
                    padding: '10px 12px', 
                    borderRadius: '8px', 
                    border: `1px solid ${theme === 'dark' ? '#2d2d2d' : '#e2e8f0'}`, 
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f8fafc', 
                    color: theme === 'dark' ? '#f3f4f6' : '#0f172a', 
                    fontSize: '13px',
                    outline: 'none'
                  }} 
                />
              </div>
              <div>
                <label style={{ fontSize: '12px', fontWeight: '500', color: theme === 'dark' ? '#9ca3af' : '#64748b', marginBottom: '6px', display: 'block' }}>Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  style={{ 
                    width: '100%', 
                    padding: '10px 12px', 
                    borderRadius: '8px', 
                    border: `1px solid ${theme === 'dark' ? '#2d2d2d' : '#e2e8f0'}`, 
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f8fafc', 
                    color: theme === 'dark' ? '#f3f4f6' : '#0f172a', 
                    fontSize: '13px',
                    outline: 'none'
                  }} 
                />
              </div>
              <div>
                <label style={{ fontSize: '12px', fontWeight: '500', color: theme === 'dark' ? '#9ca3af' : '#64748b', marginBottom: '6px', display: 'block' }}>Campaign (Optional)</label>
                <input 
                  type="text" 
                  placeholder="Summer Sale 2024" 
                  style={{ 
                    width: '100%', 
                    padding: '10px 12px', 
                    borderRadius: '8px', 
                    border: `1px solid ${theme === 'dark' ? '#2d2d2d' : '#e2e8f0'}`, 
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f8fafc', 
                    color: theme === 'dark' ? '#f3f4f6' : '#0f172a', 
                    fontSize: '13px',
                    outline: 'none'
                  }} 
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f8fafc', borderRadius: '8px' }}>
                <input type="checkbox" defaultChecked style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
                <span style={{ fontSize: '12px', color: theme === 'dark' ? '#9ca3af' : '#64748b' }}>Send automated greeting</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <button 
                  onClick={() => setShowAddLeadModal(false)}
                  style={{ 
                    flex: 1, 
                    padding: '10px', 
                    borderRadius: '8px', 
                    backgroundColor: '#6366f1', 
                    color: 'white', 
                    border: 'none', 
                    fontWeight: '600', 
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Create Lead
                </button>
                <button 
                  onClick={() => setShowAddLeadModal(false)}
                  style={{ 
                    flex: 1, 
                    padding: '10px', 
                    borderRadius: '8px', 
                    backgroundColor: 'transparent', 
                    border: `1px solid ${theme === 'dark' ? '#2d2d2d' : '#e2e8f0'}`, 
                    color: theme === 'dark' ? '#9ca3af' : '#64748b', 
                    fontWeight: '600', 
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardPreview;
