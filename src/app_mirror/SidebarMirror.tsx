'use client';

import { 
  LayoutDashboard, 
  Bell, 
  Users, 
  Calendar, 
  CheckSquare, 
  StickyNote, 
  MessageSquare, 
  Settings, 
  User, 
  LogOut, 
  Sun,
  Moon
} from 'lucide-react';

interface SidebarMirrorProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SidebarMirror = ({ activeTab, setActiveTab }: SidebarMirrorProps) => {
  return (
    <aside className="app-theme-mirror panel-left-mirror">
      <div style={{ padding: '32px 24px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>L</div>
        <span style={{ fontWeight: '600', fontSize: '18px', color: 'var(--text-main)', letterSpacing: '-0.03em' }}>Lead Claw</span>
      </div>

      <nav style={{ flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {[
          {
            group: 'General',
            items: [
              { id: 'Dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
              { id: 'Notifications', label: 'Notifications', icon: <Bell size={18} /> },
            ]
          },
          {
            group: 'Sales & CRM',
            items: [
              { id: 'Leads', label: 'Leads', icon: <Users size={18} /> },
              { id: 'Bookings', label: 'Bookings', icon: <Calendar size={18} /> },
            ]
          },
          {
            group: 'Productivity',
            items: [
              { id: 'To-Do', label: 'To-Do List', icon: <CheckSquare size={18} /> },
            ]
          },
          {
            group: 'System',
            items: [
              { id: 'Templates', label: 'Templates', icon: <MessageSquare size={18} /> },
              { id: 'Settings', label: 'Settings', icon: <Settings size={18} /> },
            ]
          }
        ].map(section => (
          <div key={section.group} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '10px', fontWeight: '600', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0 16px', marginBottom: '8px', display: 'block' }}>
              {section.group}
            </span>
            {section.items.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`nav-item-mirror ${activeTab === item.id ? 'active' : ''}`}
              >
                <span className="icon" style={{ color: activeTab === item.id ? 'var(--primary)' : 'inherit' }}>{item.icon}</span>
                <span className="label">{item.label}</span>
              </button>
            ))}
          </div>
        ))}
      </nav>

      <div style={{ padding: '16px', borderTop: '1px solid var(--border-subtle)', marginTop: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '10px' }} className="user-profile-mirror">
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--bg-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={20} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <span style={{ fontSize: '13px', fontWeight: '600' }}>Admin User</span>
            <span style={{ fontSize: '11px', color: 'var(--text-dim)' }}>Pro Account</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 8px 4px 8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-green)', boxShadow: '0 0 8px var(--accent-green)' }} />
            <span style={{ fontSize: '10px', fontWeight: '600', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Operational</span>
          </div>
          <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'var(--bg-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sun size={14} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .panel-left-mirror {
          width: 180px;
          height: 100%;
          background-color: var(--bg-panel);
          border-right: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          overflow: hidden; /* No scrollbars in the mockup */
          transition: all 0.3s ease;
        }

        .nav-item-mirror {
          text-align: left;
          padding: 10px 16px;
          border-radius: 12px;
          background: transparent;
          color: var(--text-muted);
          border: none;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.2s ease;
          width: 100%;
        }

        .nav-item-mirror:hover {
          background-color: var(--bg-hover);
          color: var(--text-main);
        }

        .nav-item-mirror.active {
          background-color: var(--bg-hover);
          color: var(--text-main);
          font-weight: 600;
        }

        .nav-item-mirror .icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </aside>
  );
};

export default SidebarMirror;
