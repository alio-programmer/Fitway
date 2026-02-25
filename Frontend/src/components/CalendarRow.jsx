import React from 'react';
import './CalendarRow.css';

const CalendarRow = ({ selectedDate, onDateChange }) => {
    const days = [
        { day: 'Thu', date: new Date(2026, 1, 19) },
        { day: 'Fri', date: new Date(2026, 1, 20) },
        { day: 'Sat', date: new Date(2026, 1, 21) },
        { day: 'Sun', date: new Date(2026, 1, 22) },
        { day: 'Mon', date: new Date(2026, 1, 23) },
        { day: 'Tue', date: new Date(2026, 1, 24) },
        { day: 'Wed', date: new Date(2026, 1, 25) },
    ];

    return (
        <div className="calendar-row">
            {days.map((item, index) => {
                const isActive = item.date.toDateString() === selectedDate.toDateString();
                return (
                    <div
                        key={index}
                        className={`calendar-day ${isActive ? 'active' : ''}`}
                        onClick={() => onDateChange(item.date)}
                    >
                        <span className="day-name">{item.day}</span>
                        <span className="day-date">{item.date.getDate()}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default CalendarRow;
