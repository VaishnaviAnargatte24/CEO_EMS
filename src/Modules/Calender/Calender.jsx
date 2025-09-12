import React, { useState } from 'react';
import '../../Modules/Calender/Calender.css';
import Sidebar from "../../Components/SideBar/SideBar";
import Header from "../../Components/Header/Header";

const Calendar = () => {
  // State to manage the active view: 'day', 'week', or 'month'
  const [currentView, setCurrentView] = useState('day'); 

  // --- Day View Content ---
  const DayView = () => (
    <div className="calendar-content day-view">
      <div className="time-column">
        <div className="time-slot">10:00 AM</div>
        <div className="time-slot">11:00 AM</div>
        <div className="time-slot">12:00 PM</div>
        <div className="time-slot">01:00 PM</div>
        <div className="time-slot">02:00 PM</div>
        <div className="time-slot">03:00 PM</div>
        <div className="time-slot">04:00 PM</div>
      </div>
      <div className="event-column">
        <div className="day-header">11 March 2025</div>
        {/* Events are positioned using 'top' and 'height' based on time/duration */}
        <div className="event-slot meeting parent-meeting-purple" style={{ top: '0', height: '100px' }}>
          <div className="event-time">10:00 AM</div>
          <div className="event-title">Parents Meeting</div>
        </div>
        <div className="event-slot meeting parent-meeting-green" style={{ top: '240px', height: '100px' }}>
          <div className="event-time">02:00 PM</div>
          <div className="event-title">Parents Meeting</div>
        </div>
      </div>
    </div>
  );

  // --- Week View Content ---
  const WeekView = () => (
    <div className="calendar-content week-view">
      <div className="week-header-row">
        <div className="week-header">5 March, 2025 - 11 March 2025</div>
      </div>
      <div className="week-grid">
        <div className="time-column-week">
          <div className="time-slot-week">10:00 AM</div>
          <div className="time-slot-week">11:00 AM</div>
          <div className="time-slot-week">12:00 PM</div>
          <div className="time-slot-week">01:00 PM</div>
          <div className="time-slot-week">02:00 PM</div>
          <div className="time-slot-week">03:00 PM</div>
          <div className="time-slot-week">04:00 PM</div>
        </div>
        
        <div className="week-day-columns">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
            <div key={day} className="week-day-cell">
              <div className="week-day-name">{day}</div>
              {/* Conditional Events for Week View */}
              {day === 'Monday' && (
                <div className="event-slot-week parent-meeting-purple" style={{ top: '0px', height: '100px' }}>
                  <div className="event-time">10:00 AM</div>
                  <div className="event-title">Parents Meeting</div>
                </div>
              )}
              {day === 'Friday' && (
                <div className="event-slot-week parent-meeting-green" style={{ top: '240px', height: '100px' }}>
                  <div className="event-time">10:00 AM</div>
                  <div className="event-title">Parents Meeting</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // --- Month View Content ---
  const MonthView = () => (
    <div className="calendar-content month-view">
        <div className="month-grid">
            <div className="month-day-name">Monday</div>
            <div className="month-day-name">Tuesday</div>
            <div className="month-day-name">Wednesday</div>
            <div className="month-day-name">Thursday</div>
            <div className="month-day-name">Friday</div>
            <div className="month-day-name">Saturday</div>
            <div className="month-day-name">Sunday</div>
            
            {/* Loop for 35 days (5 weeks) - simplified rendering */}
            {Array.from({ length: 35 }).map((_, index) => {
                const date = index + 1;
                // Offset start to align '1' on a Saturday/Sunday for March 2025
                let dayNumber = date - 1; 

                // Event mapping for month view (approximated dates from image)
                const events = {
                    4: { color: 'purple', title: 'Parents Meeting' },
                    10: { color: 'orange', title: 'Parents Meeting' },
                    20: { color: 'blue', title: 'Parents Meeting' },
                };

                return (
                    <div key={index} className={`month-day-cell ${dayNumber < 1 || dayNumber > 31 ? 'outside-month' : ''}`}>
                        <div className="month-date">{dayNumber < 1 || dayNumber > 31 ? '' : dayNumber}</div>
                        {events[dayNumber] && (
                            <div className={`event-month-view parent-meeting-${events[dayNumber].color}`}>
                                {events[dayNumber].title}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    </div>
  );
  
  // --- Main Render ---
  return (
    <div className="calendar-container">
    <Header/>
      <div className="calendar-header">
        <div className="navigation">
          <span className="arrow">←</span>
          <h2 className="current-display">{currentView === 'day' ? 'March, 2025' : currentView === 'week' ? 'March, 2025' : 'March, 2025'}</h2>
          <span className="arrow">→</span>
        </div>
        <div className="view-switcher">
          <button 
            className={`view-button ${currentView === 'day' ? 'active' : ''}`}
            onClick={() => setCurrentView('day')}
          >
            Day
          </button>
          <button 
            className={`view-button ${currentView === 'week' ? 'active' : ''}`}
            onClick={() => setCurrentView('week')}
          >
            Week
          </button>
          <button 
            className={`view-button ${currentView === 'month' ? 'active' : ''}`}
            onClick={() => setCurrentView('month')}
          >
            Month
          </button>
        </div>
      </div>
      
      {/* Conditionally render the selected view */}
      {currentView === 'day' && <DayView />}
      {currentView === 'week' && <WeekView />}
      {currentView === 'month' && <MonthView />}
      
    </div>
  );
};

export default Calendar;