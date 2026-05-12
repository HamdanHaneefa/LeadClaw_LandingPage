import React from 'react';
import { CheckCircle2, Circle, Clock, Tag, Plus, Filter } from 'lucide-react';

const TodoMirror = () => {
  const tasks = [
    { title: 'Follow up with Sarah Jenkins re: Strategy Call', priority: 'High', due: 'Today', done: false },
    { title: 'Review AI Auditor logs for yesterday', priority: 'Medium', due: 'Today', done: true },
    { title: 'Prepare lead report for weekly sync', priority: 'High', due: 'Tomorrow', done: false },
    { title: 'Send onboarding links to 3 new signups', priority: 'Medium', due: 'Tomorrow', done: false },
    { title: 'Optimize Instagram lead capture workflow', priority: 'Low', due: 'In 2 days', done: false },
    { title: 'Update CRM template for Facebook ads', priority: 'Medium', due: 'Next week', done: false },
  ];

  return (
    <div className="todo-mirror">
      <div className="todo-header">
        <div className="title-group">
          <h1>To-Do List</h1>
          <p>Organize your daily sales activities</p>
        </div>
        <button className="btn-primary"><Plus size={14} /> New Task</button>
      </div>

      <div className="todo-stats">
        <div className="stat-card">
          <span className="label">In Progress</span>
          <span className="value">4</span>
        </div>
        <div className="stat-card">
          <span className="label">Completed Today</span>
          <span className="value">12</span>
        </div>
        <div className="stat-card">
          <span className="label">Overdue</span>
          <span className="value text-red">0</span>
        </div>
      </div>

      <div className="task-list">
        <div className="list-filters">
          <div className="active-filter">All Tasks</div>
          <div>Pending</div>
          <div>Completed</div>
          <div className="spacer"></div>
          <button className="filter-btn"><Filter size={14} /> Filter</button>
        </div>

        <div className="tasks-container">
          {tasks.map((task, i) => (
            <div key={i} className={`task-item ${task.done ? 'done' : ''}`}>
              <div className="checkbox">
                {task.done ? <CheckCircle2 size={20} className="text-green" /> : <Circle size={20} />}
              </div>
              <div className="task-content">
                <span className="task-title">{task.title}</span>
                <div className="task-meta">
                  <span className={`priority-tag ${task.priority.toLowerCase()}`}>{task.priority}</span>
                  <span className="due-date"><Clock size={12} /> {task.due}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .todo-mirror { display: flex; flex-direction: column; gap: 24px; color: var(--text-main); font-family: 'Inter', sans-serif; }
        .todo-header { display: flex; justify-content: space-between; align-items: flex-start; }
        .title-group h1 { font-size: 24px; margin: 0; }
        .title-group p { font-size: 14px; color: var(--text-dim); margin: 4px 0 0 0; }
        .btn-primary { background: var(--primary); color: white; border: none; padding: 10px 20px; border-radius: 10px; font-weight: 600; display: flex; align-items: center; gap: 8px; cursor: pointer; }

        .todo-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .stat-card { background: var(--bg-panel); border: 1px solid var(--border-subtle); padding: 16px; border-radius: 16px; display: flex; flex-direction: column; gap: 4px; }
        .stat-card .label { font-size: 12px; color: var(--text-dim); font-weight: 600; }
        .stat-card .value { font-size: 20px; font-weight: 700; }
        .text-red { color: var(--accent-red); }

        .task-list { background: var(--bg-panel); border: 1px solid var(--border-subtle); border-radius: 20px; overflow: hidden; }
        .list-filters { padding: 16px 24px; border-bottom: 1px solid var(--border-subtle); display: flex; gap: 24px; align-items: center; font-size: 14px; font-weight: 600; color: var(--text-dim); }
        .active-filter { color: var(--primary); border-bottom: 2px solid var(--primary); padding-bottom: 16px; margin-bottom: -17px; }
        .spacer { flex: 1; }
        .filter-btn { background: transparent; border: 1px solid var(--border-subtle); color: var(--text-main); padding: 6px 12px; border-radius: 8px; display: flex; align-items: center; gap: 6px; font-size: 12px; cursor: pointer; }

        .tasks-container { display: flex; flex-direction: column; }
        .task-item { padding: 20px 24px; border-bottom: 1px solid var(--border-subtle); display: flex; gap: 16px; align-items: flex-start; transition: background 0.2s; }
        .task-item:hover { background: rgba(255,255,255,0.02); }
        .task-item.done { opacity: 0.6; }
        .task-item.done .task-title { text-decoration: line-through; color: var(--text-dim); }

        .checkbox { color: var(--text-dim); cursor: pointer; margin-top: 2px; }
        .text-green { color: var(--accent-green); }

        .task-content { display: flex; flex-direction: column; gap: 6px; }
        .task-title { font-size: 15px; font-weight: 600; }
        .task-meta { display: flex; gap: 12px; align-items: center; }

        .priority-tag { font-size: 10px; font-weight: 800; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; }
        .priority-tag.high { background: rgba(239, 68, 68, 0.1); color: var(--accent-red); }
        .priority-tag.medium { background: rgba(245, 158, 11, 0.1); color: var(--accent-yellow); }
        .priority-tag.low { background: rgba(99, 102, 241, 0.1); color: var(--primary); }

        .due-date { font-size: 11px; color: var(--text-dim); display: flex; align-items: center; gap: 4px; }
      `}</style>
    </div>
  );
};

export default TodoMirror;
