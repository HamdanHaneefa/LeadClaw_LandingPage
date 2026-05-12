import React from 'react';
import { Bell, MessageSquare, Bot, Zap, Clock, Shield } from 'lucide-react';

const NotificationsMirror = () => {
  const events = [
    { type: 'AI_REPLY', title: 'Sentry responded to Sarah Jenkins', time: '2m ago', desc: 'Sarah asked about pricing. AI sent the strategy guide.', icon: <Bot size={16} />, color: 'var(--primary)' },
    { type: 'LEAD_HOT', title: 'High Intent detected: Michael Ross', time: '15m ago', desc: 'AI Auditor flagged Michael as "Hot Quality" based on sentiment.', icon: <Zap size={16} />, color: 'var(--accent-red)' },
    { type: 'WHATSAPP', title: 'New WhatsApp Lead Captured', time: '1h ago', desc: 'Lead "Harvey Specter" added from Facebook Ad Campaign.', icon: <MessageSquare size={16} />, color: 'var(--accent-green)' },
    { type: 'SECURITY', title: 'System Security Audit Complete', time: '3h ago', desc: 'All automated workflows verified. No anomalies detected.', icon: <Shield size={16} />, color: 'var(--text-dim)' },
    { type: 'AI_REPLY', title: 'Sentry responded to Rachel Zane', time: '5h ago', desc: 'Automated follow-up sent after 2 hours of inactivity.', icon: <Bot size={16} />, color: 'var(--primary)' },
  ];

  return (
    <div className="notifications-mirror">
      <div className="notif-header">
        <h1>Notifications</h1>
        <button className="mark-read">Mark all as read</button>
      </div>

      <div className="notif-list">
        {events.map((event, i) => (
          <div key={i} className="notif-item">
            <div className="notif-icon" style={{ backgroundColor: `${event.color}15`, color: event.color }}>
              {event.icon}
            </div>
            <div className="notif-content">
              <div className="notif-title-row">
                <strong>{event.title}</strong>
                <span className="time"><Clock size={12} /> {event.time}</span>
              </div>
              <p>{event.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .notifications-mirror { display: flex; flex-direction: column; gap: 24px; color: var(--text-main); font-family: 'Inter', sans-serif; }
        .notif-header { display: flex; justify-content: space-between; align-items: center; }
        .notif-header h1 { font-size: 24px; margin: 0; }
        .mark-read { background: transparent; border: none; color: var(--primary); font-size: 13px; font-weight: 600; cursor: pointer; }

        .notif-list { display: flex; flex-direction: column; background: var(--bg-panel); border: 1px solid var(--border-subtle); border-radius: 20px; overflow: hidden; }
        .notif-item { padding: 20px 24px; border-bottom: 1px solid var(--border-subtle); display: flex; gap: 16px; transition: background 0.2s; cursor: pointer; }
        .notif-item:hover { background: rgba(255,255,255,0.02); }
        .notif-item:last-child { border-bottom: none; }

        .notif-icon { width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justifyContent: center; flex-shrink: 0; }
        .notif-content { flex: 1; display: flex; flex-direction: column; gap: 4px; }
        .notif-title-row { display: flex; justify-content: space-between; align-items: center; }
        .notif-title-row strong { font-size: 15px; }
        .time { font-size: 11px; color: var(--text-dim); display: flex; align-items: center; gap: 4px; }
        .notif-content p { font-size: 13px; color: var(--text-dim); margin: 0; line-height: 1.5; }
      `}</style>
    </div>
  );
};

export default NotificationsMirror;
