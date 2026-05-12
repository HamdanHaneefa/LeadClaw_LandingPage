import React from 'react';
import { Calendar, Clock, Video, User, ChevronRight, MoreHorizontal } from 'lucide-react';

const BookingsMirror = () => {
  const bookings = [
    { name: 'Sarah Jenkins', type: 'Strategy Call', time: '10:00 AM', date: 'Today', status: 'Confirmed' },
    { name: 'Jessica Pearson', type: 'Onboarding', time: '2:30 PM', date: 'Today', status: 'Confirmed' },
    { name: 'Michael Ross', type: 'Follow-up', time: '9:15 AM', date: 'Tomorrow', status: 'Pending' },
    { name: 'Harvey Specter', type: 'Strategy Call', time: '11:45 AM', date: 'Tomorrow', status: 'Confirmed' },
    { name: 'Rachel Zane', type: 'Demo Session', time: '4:00 PM', date: 'Oct 24', status: 'Confirmed' },
  ];

  return (
    <div className="bookings-mirror">
      <div className="bookings-header">
        <div className="title-group">
          <h1>Strategy Calls</h1>
          <p>Upcoming appointments and demo sessions</p>
        </div>
        <div className="header-controls">
          <button className="calendar-btn active"><Calendar size={16} /> List View</button>
          <button className="calendar-btn">Month</button>
        </div>
      </div>

      <div className="bookings-grid">
        <div className="main-feed">
          <div className="date-separator">Today — Oct 22</div>
          {bookings.filter(b => b.date === 'Today').map((booking, i) => (
            <div key={i} className="booking-card">
              <div className="time-strip">
                <Clock size={14} />
                <span>{booking.time}</span>
              </div>
              <div className="booking-main">
                <div className="lead-info">
                  <div className="mini-avatar">{booking.name[0]}</div>
                  <div className="text-info">
                    <strong>{booking.name}</strong>
                    <span>{booking.type}</span>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="btn-join"><Video size={14} /> Join Meeting</button>
                  <MoreHorizontal size={20} className="text-dim" />
                </div>
              </div>
            </div>
          ))}

          <div className="date-separator">Tomorrow — Oct 23</div>
          {bookings.filter(b => b.date === 'Tomorrow').map((booking, i) => (
            <div key={i} className="booking-card secondary">
              <div className="time-strip">
                <Clock size={14} />
                <span>{booking.time}</span>
              </div>
              <div className="booking-main">
                <div className="lead-info">
                  <div className="mini-avatar gray">{booking.name[0]}</div>
                  <div className="text-info">
                    <strong>{booking.name}</strong>
                    <span>{booking.type}</span>
                  </div>
                </div>
                <div className="card-actions">
                  <span className="status-badge">{booking.status}</span>
                  <ChevronRight size={20} className="text-dim" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="side-calendar">
          <div className="mini-calendar">
             {/* Simplified Calendar UI */}
             <div className="cal-header">October 2026</div>
             <div className="cal-grid">
                {[...Array(31)].map((_, i) => (
                    <div key={i} className={`cal-day ${i + 1 === 22 ? 'active' : ''} ${[10, 15, 23, 24].includes(i+1) ? 'has-event' : ''}`}>
                        {i + 1}
                    </div>
                ))}
             </div>
          </div>
          <div className="summary-card">
            <h4>Weekly Summary</h4>
            <div className="summary-item">
                <span>Total Calls</span>
                <strong>24</strong>
            </div>
            <div className="summary-item">
                <span>Completed</span>
                <strong>18</strong>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bookings-mirror { display: flex; flex-direction: column; gap: 24px; color: var(--text-main); font-family: 'Inter', sans-serif; }
        .bookings-header { display: flex; justify-content: space-between; align-items: flex-start; }
        .title-group h1 { font-size: 24px; margin: 0; }
        .title-group p { font-size: 14px; color: var(--text-dim); margin: 4px 0 0 0; }

        .header-controls { display: flex; background: var(--bg-deep); padding: 4px; border-radius: 10px; border: 1px solid var(--border-subtle); }
        .calendar-btn { padding: 6px 12px; border-radius: 8px; border: none; background: transparent; color: var(--text-dim); font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 8px; cursor: pointer; }
        .calendar-btn.active { background: var(--bg-panel); color: white; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }

        .bookings-grid { display: grid; grid-template-columns: 1fr 280px; gap: 24px; }
        .date-separator { font-size: 12px; font-weight: 700; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; margin-top: 8px; }

        .booking-card { background: var(--bg-panel); border: 1px solid var(--border-subtle); border-radius: 20px; margin-bottom: 12px; display: flex; overflow: hidden; transition: transform 0.2s; }
        .booking-card:hover { transform: translateY(-2px); border-color: var(--primary); }
        .time-strip { width: 100px; padding: 24px 16px; background: rgba(99, 102, 241, 0.05); border-right: 1px solid var(--border-subtle); display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; color: var(--primary); }
        .booking-main { flex: 1; padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; }

        .lead-info { display: flex; align-items: center; gap: 16px; }
        .mini-avatar { width: 40px; height: 40px; border-radius: 12px; background: var(--primary); color: white; display: flex; align-items: center; justifyContent: center; font-weight: 700; }
        .mini-avatar.gray { background: var(--bg-deep); color: var(--text-dim); }
        .text-info { display: flex; flex-direction: column; gap: 2px; }
        .text-info strong { font-size: 16px; }
        .text-info span { font-size: 13px; color: var(--text-dim); }

        .card-actions { display: flex; align-items: center; gap: 16px; }
        .btn-join { background: var(--primary); color: white; border: none; padding: 8px 16px; border-radius: 10px; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 8px; cursor: pointer; }
        .status-badge { font-size: 11px; font-weight: 700; color: var(--accent-green); background: rgba(34, 197, 94, 0.1); padding: 4px 10px; border-radius: 100px; }
        .text-dim { color: var(--text-dim); }

        .mini-calendar { background: var(--bg-panel); border: 1px solid var(--border-subtle); border-radius: 20px; padding: 20px; margin-bottom: 24px; }
        .cal-header { font-size: 14px; font-weight: 700; text-align: center; margin-bottom: 16px; }
        .cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
        .cal-day { aspect-ratio: 1; display: flex; align-items: center; justifyContent: center; font-size: 11px; color: var(--text-dim); border-radius: 6px; cursor: pointer; }
        .cal-day:hover { background: var(--bg-deep); }
        .cal-day.active { background: var(--primary); color: white; font-weight: 700; }
        .cal-day.has-event::after { content: ''; width: 4px; height: 4px; background: var(--primary); border-radius: 50%; position: absolute; margin-top: 14px; }

        .summary-card { background: var(--bg-panel); border: 1px solid var(--border-subtle); border-radius: 20px; padding: 20px; }
        .summary-card h4 { font-size: 13px; font-weight: 700; color: var(--text-dim); margin: 0 0 16px 0; text-transform: uppercase; }
        .summary-item { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; }
        .summary-item strong { color: var(--primary); }
      `}</style>
    </div>
  );
};

export default BookingsMirror;
