import React from 'react';
import { User, Shield, MessageSquare, Bot, Bell, Globe } from 'lucide-react';

const SettingsMirror = () => {
  const sections = [
    { title: 'AI Conversational Agent', icon: <Bot size={18} />, desc: 'Configure Sentry personality and knowledge base' },
    { title: 'WhatsApp Integration', icon: <MessageSquare size={18} />, desc: 'Manage API keys and automated greeting flows' },
    { title: 'Security & Privacy', icon: <Shield size={18} />, desc: 'Manage access logs and 2FA authentication' },
    { title: 'Notifications', icon: <Bell size={18} />, desc: 'Configure email and desktop alert preferences' },
    { title: 'Connected Channels', icon: <Globe size={18} />, desc: 'Manage Instagram, Facebook, and Webhooks' },
  ];

  return (
    <div className="settings-mirror">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your account and automation preferences</p>
      </div>

      <div className="settings-grid">
        <div className="sidebar-settings">
          <div className="s-nav-item active"><User size={16} /> Profile</div>
          <div className="s-nav-item"><MessageSquare size={16} /> Automation</div>
          <div className="s-nav-item"><Shield size={16} /> Security</div>
          <div className="s-nav-item"><Bell size={16} /> Notifications</div>
        </div>

        <div className="settings-content">
          <div className="profile-card">
             <div className="p-header">
                <div className="large-avatar">JD</div>
                <div className="p-info">
                    <h3>John Doe</h3>
                    <span>Enterprise Plan</span>
                </div>
                <button className="btn-edit">Edit Profile</button>
             </div>
          </div>

          <div className="settings-list">
            {sections.map((section, i) => (
              <div key={i} className="s-card">
                <div className="s-icon">{section.icon}</div>
                <div className="s-text">
                  <strong>{section.title}</strong>
                  <p>{section.desc}</p>
                </div>
                <div className="s-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .settings-mirror { display: flex; flex-direction: column; gap: 24px; color: var(--text-main); font-family: 'Inter', sans-serif; }
        .settings-header h1 { font-size: 24px; margin: 0; }
        .settings-header p { font-size: 14px; color: var(--text-dim); margin: 4px 0 0 0; }

        .settings-grid { display: grid; grid-template-columns: 200px 1fr; gap: 32px; }
        .sidebar-settings { display: flex; flex-direction: column; gap: 8px; }
        .s-nav-item { padding: 12px 16px; border-radius: 12px; font-size: 14px; font-weight: 600; color: var(--text-dim); cursor: pointer; display: flex; align-items: center; gap: 12px; transition: all 0.2s; }
        .s-nav-item:hover { background: rgba(255,255,255,0.03); color: white; }
        .s-nav-item.active { background: rgba(99, 102, 241, 0.1); color: var(--primary); }

        .settings-content { display: flex; flex-direction: column; gap: 24px; }
        .profile-card { background: var(--bg-panel); border: 1px solid var(--border-subtle); border-radius: 20px; padding: 24px; }
        .p-header { display: flex; align-items: center; gap: 20px; }
        .large-avatar { width: 64px; height: 64px; border-radius: 20px; background: var(--primary); display: flex; align-items: center; justifyContent: center; font-size: 24px; font-weight: 700; color: white; }
        .p-info h3 { font-size: 18px; margin: 0; }
        .p-info span { font-size: 14px; color: var(--text-dim); }
        .btn-edit { margin-left: auto; background: var(--bg-deep); border: 1px solid var(--border-subtle); color: white; padding: 8px 16px; border-radius: 10px; font-weight: 600; cursor: pointer; }

        .settings-list { display: flex; flex-direction: column; gap: 12px; }
        .s-card { background: var(--bg-panel); border: 1px solid var(--border-subtle); border-radius: 16px; padding: 20px; display: flex; align-items: center; gap: 20px; cursor: pointer; transition: all 0.2s; }
        .s-card:hover { border-color: var(--primary); transform: translateX(4px); }
        .s-icon { width: 44px; height: 44px; border-radius: 12px; background: var(--bg-deep); display: flex; align-items: center; justifyContent: center; color: var(--primary); }
        .s-text { flex: 1; }
        .s-text strong { font-size: 15px; display: block; margin-bottom: 2px; }
        .s-text p { font-size: 13px; color: var(--text-dim); margin: 0; }
        .s-arrow { color: var(--text-dim); font-size: 18px; }
      `}</style>
    </div>
  );
};

export default SettingsMirror;
