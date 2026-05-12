'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  MessageSquare,
  Bot,
  Calendar,
  CheckCircle2,
  Zap,
  Globe,
  ShieldCheck,
  TrendingUp,
  LayoutDashboard,
  Users,
  Send,
  MoreVertical,
  Search,
  Settings,
  HelpCircle
} from 'lucide-react';
import DashboardMirror from '@/app_mirror/DashboardMirror';
import SidebarMirror from '@/app_mirror/SidebarMirror';
import LeadsMirror from '@/app_mirror/LeadsMirror';
import TodoMirror from '@/app_mirror/TodoMirror';
import BookingsMirror from '@/app_mirror/BookingsMirror';
import NotificationsMirror from '@/app_mirror/NotificationsMirror';
import SettingsMirror from '@/app_mirror/SettingsMirror';
import '@/app_mirror/theme.css';

export default function WorkflowMockup() {
  const [view, setView] = useState('Dashboard');

  const renderViewContent = () => {
    switch(view) {
      case 'Dashboard': return <DashboardMirror />;
      case 'Leads': return <LeadsMirror />;
      case 'To-Do List': return <TodoMirror />;
      case 'Bookings': return <BookingsMirror />;
      case 'Notifications': return <NotificationsMirror />;
      case 'Settings': return <SettingsMirror />;
      default: return (
        <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-dim)' }}>
          <h2 style={{ color: 'var(--text-main)', marginBottom: '12px' }}>{view} View</h2>
          <p>This is a high-fidelity preview of the Lead Claw {view} interface.</p>
          <div style={{ marginTop: '24px', padding: '40px', border: '2px dashed var(--border-subtle)', borderRadius: '20px' }}>
            Pixel-perfect {view} components mirrored from production.
          </div>
        </div>
      );
    }
  };

  return (
    <div className="premium-workflow">
      <div className="engine-window glass">
        {/* macOS Title Bar */}
        <div className="window-header">
          <div className="traffic-lights">
            <div className="light red" />
            <div className="light yellow" />
            <div className="light green" />
          </div>
          <div className="window-title">Lead Claw CRM — Production Preview</div>
        </div>

        <div className="engine-layout">
          {/* ─── REAL SIDEBAR MIRROR ─── */}
          <SidebarMirror activeTab={view} setActiveTab={setView} />

          {/* ─── MAIN CONTENT AREA ─── */}
          <div className="engine-viewport app-theme-mirror">
            <AnimatePresence mode="wait">
                <motion.div
                    key={view}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="view-container"
                >
                    {renderViewContent()}
                </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .premium-workflow {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          font-family: 'Outfit', sans-serif;
        }

        .engine-window {
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 50px 100px rgba(0, 0, 0, 0.6);
          background: rgba(10, 10, 12, 0.95);
        }

        .window-header {
          height: 44px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          padding: 0 16px;
          position: relative;
        }

        .traffic-lights {
          display: flex;
          gap: 8px;
          z-index: 2;
        }

        .light {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .light.red { background: #ff5f56; }
        .light.yellow { background: #ffbd2e; }
        .light.green { background: #27c93f; }

        .window-title {
          position: absolute;
          width: 100%;
          left: 0;
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .engine-layout {
          display: flex;
          height: 620px;
        }

        /* ─── SIDEBAR REMOVED FROM HERE ─── */

        /* ─── NAV ITEMS REMOVED ─── */

        /* ─── VIEWPORT ─── */
        .engine-viewport {
          flex: 1;
          padding: 24px;
          position: relative;
          background: #050505;
          overflow: hidden;
        }

        .view-container {
          width: 153.84%; /* Compacting for the scale(0.65) */
          height: 153.84%;
          transform: scale(0.65);
          transform-origin: top left;
          position: absolute;
          top: 0;
          left: 0;
        }

        /* ─── DASHBOARD VIEW ─── */
        .db-header-mini {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 24px;
        }

        .db-header-mini h3 { font-size: 18px; color: white; margin: 0; }
        .ai-status { display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 700; color: #22c55e; }

        .pulse-dot { width: 6px; height: 6px; border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }

        .db-grid-mini { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
        .mini-card { padding: 16px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); }
        .mini-card p { font-size: 11px; color: rgba(255,255,255,0.3); margin-bottom: 4px; }
        .mini-card strong { font-size: 20px; color: white; }

        .funnel-section-mini { padding: 20px; border-radius: 16px; margin-bottom: 24px; }
        .section-head { font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.5); margin-bottom: 12px; }
        .mini-funnel-bar { height: 8px; background: rgba(0,0,0,0.3); border-radius: 4px; overflow: hidden; }
        .bar-fill { height: 100%; border-radius: 4px; }

        /* ─── LEADS VIEW ─── */
        .leads-header-mini { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .search-bar-mini { padding: 8px 16px; border-radius: 100px; font-size: 12px; color: rgba(255,255,255,0.3); display: flex; align-items: center; gap: 8px; flex: 1; max-width: 240px; }
        .mini-btn { padding: 8px 16px; border-radius: 8px; font-size: 11px; font-weight: 700; color: white; border: none; }

        .leads-table-mini { border-radius: 16px; overflow: hidden; }
        .lead-row-mini { padding: 14px 20px; border-bottom: 1px solid rgba(255,255,255,0.03); display: flex; align-items: center; gap: 16px; }
        .lead-row-mini:last-child { border-bottom: none; }
        .mini-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,0.05); }
        .lead-name-group { flex: 1; display: flex; flex-direction: column; gap: 2px; }
        .lead-name-group strong { font-size: 13px; color: white; }
        .lead-name-group span { font-size: 10px; color: rgba(255,255,255,0.3); }

        .stage-tag-mini { padding: 4px 10px; border-radius: 100px; font-size: 9px; font-weight: 800; }
        .stage-tag-mini.booked { background: rgba(34, 197, 94, 0.1); color: #22c55e; }
        .stage-tag-mini.qualified { background: rgba(234, 179, 8, 0.1); color: #eab308; }
        .stage-tag-mini.new { background: rgba(99, 102, 241, 0.1); color: var(--primary); }

        .floating-shadow {
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1) !important;
        }

        .text-primary { color: var(--primary); }
        .text-dim { color: rgba(255,255,255,0.3); }
      `}</style>
    </div>
  );
}
