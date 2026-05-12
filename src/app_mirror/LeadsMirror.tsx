import React from 'react';
import { Search, Filter, Plus, MoreVertical, Download, User } from 'lucide-react';

const LeadsMirror = () => {
  const dummyLeads = [
    { name: 'Sarah Jenkins', source: 'WhatsApp', quality: 'Hot', status: 'Booked', time: '2m ago' },
    { name: 'Michael Ross', source: 'Instagram', quality: 'Warm', status: 'Following Up', time: '15m ago' },
    { name: 'Harvey Specter', source: 'Facebook', quality: 'Hot', status: 'New', time: '1h ago' },
    { name: 'Rachel Zane', source: 'WhatsApp', quality: 'Cold', status: 'Interested', time: '3h ago' },
    { name: 'Jessica Pearson', source: 'Direct', quality: 'Hot', status: 'Booked', time: '5h ago' },
    { name: 'Louis Litt', source: 'Instagram', quality: 'Warm', status: 'New', time: '8h ago' },
    { name: 'Donna Paulsen', source: 'WhatsApp', quality: 'Hot', status: 'Booked', time: '12h ago' },
    { name: 'Robert Zane', source: 'Facebook', quality: 'Cold', status: 'Archived', time: '1d ago' },
  ];

  return (
    <div className="leads-mirror">
      {/* Header */}
      <div className="leads-header">
        <div className="title-group">
          <h1>Leads</h1>
          <p>Manage and track your automated pipeline</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary"><Download size={14} /> Export</button>
          <button className="btn-primary"><Plus size={14} /> Add Lead</button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="filters-bar">
        <div className="search-box">
          <Search size={16} />
          <input type="text" placeholder="Search leads..." />
        </div>
        <div className="filter-group">
          <button className="filter-btn"><Filter size={14} /> Filters</button>
          <div className="view-toggle">
            <span className="active">All</span>
            <span>New</span>
            <span>Qualified</span>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Lead Name</th>
              <th>Source</th>
              <th>Quality</th>
              <th>Status</th>
              <th>Last Active</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dummyLeads.map((lead, i) => (
              <tr key={i}>
                <td className="lead-cell">
                  <div className="avatar"><User size={14} /></div>
                  <span>{lead.name}</span>
                </td>
                <td>{lead.source}</td>
                <td>
                  <span className={`tag quality ${lead.quality.toLowerCase()}`}>{lead.quality}</span>
                </td>
                <td>
                  <span className="status-indicator">{lead.status}</span>
                </td>
                <td className="time-cell">{lead.time}</td>
                <td className="action-cell">
                  <MoreVertical size={16} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .leads-mirror {
          display: flex;
          flex-direction: column;
          gap: 24px;
          color: var(--text-main);
          font-family: 'Inter', sans-serif;
        }

        .leads-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .title-group h1 { font-size: 24px; margin: 0; }
        .title-group p { font-size: 14px; color: var(--text-dim); margin: 4px 0 0 0; }

        .header-actions { display: flex; gap: 12px; }
        .btn-primary { background: var(--primary); color: white; border: none; padding: 8px 16px; border-radius: 10px; font-weight: 600; display: flex; align-items: center; gap: 8px; cursor: pointer; }
        .btn-secondary { background: var(--bg-panel); color: var(--text-main); border: 1px solid var(--border-subtle); padding: 8px 16px; border-radius: 10px; font-weight: 600; display: flex; align-items: center; gap: 8px; cursor: pointer; }

        .filters-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .search-box {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--bg-deep);
          border: 1px solid var(--border-subtle);
          padding: 10px 16px;
          border-radius: 12px;
          color: var(--text-dim);
        }
        .search-box input { background: transparent; border: none; color: white; outline: none; flex: 1; font-size: 14px; }

        .filter-group { display: flex; gap: 12px; align-items: center; }
        .filter-btn { background: var(--bg-panel); color: var(--text-main); border: 1px solid var(--border-subtle); padding: 10px 16px; border-radius: 12px; font-weight: 600; display: flex; align-items: center; gap: 8px; cursor: pointer; }

        .view-toggle { display: flex; background: var(--bg-deep); border-radius: 100px; padding: 4px; border: 1px solid var(--border-subtle); }
        .view-toggle span { padding: 6px 16px; border-radius: 100px; font-size: 13px; cursor: pointer; color: var(--text-dim); transition: all 0.2s; }
        .view-toggle span.active { background: var(--primary); color: white; }

        .table-container {
          background: var(--bg-panel);
          border: 1px solid var(--border-subtle);
          border-radius: 20px;
          overflow: hidden;
        }

        .custom-table { width: 100%; border-collapse: collapse; text-align: left; }
        .custom-table th { padding: 16px 24px; font-size: 12px; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--border-subtle); }
        .custom-table td { padding: 16px 24px; border-bottom: 1px solid var(--border-subtle); font-size: 14px; }
        .custom-table tr:last-child td { border-bottom: none; }

        .lead-cell { display: flex; align-items: center; gap: 12px; font-weight: 600; }
        .avatar { width: 32px; height: 32px; border-radius: 50%; background: var(--primary); display: flex; align-items: center; justifyContent: center; opacity: 0.8; }

        .tag.quality { padding: 4px 10px; border-radius: 100px; font-size: 11px; font-weight: 700; }
        .tag.hot { background: rgba(239, 68, 68, 0.1); color: var(--accent-red); }
        .tag.warm { background: rgba(245, 158, 11, 0.1); color: var(--accent-yellow); }
        .tag.cold { background: rgba(100, 116, 139, 0.1); color: var(--text-dim); }

        .status-indicator { color: var(--text-muted); font-weight: 500; }
        .time-cell { color: var(--text-dim); font-size: 13px; }
        .action-cell { color: var(--text-dim); cursor: pointer; }
      `}</style>
    </div>
  );
};

export default LeadsMirror;
