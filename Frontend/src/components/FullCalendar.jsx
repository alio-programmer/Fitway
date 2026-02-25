import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './FullCalendar.css';

const FullCalendar = ({ selectedDate, onDateChange, onClose }) => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        days.push(null);
    }
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(new Date(year, month, i));
    }

    const handlePrevMonth = () => {
        onDateChange(new Date(year, month - 1, selectedDate.getDate()));
    };

    const handleNextMonth = () => {
        onDateChange(new Date(year, month + 1, selectedDate.getDate()));
    };

    return (
        <div className="calendar-overlay">
            <div className="calendar-modal">
                <header className="modal-header">
                    <div className="month-navigation">
                        <button onClick={handlePrevMonth} className="nav-btn"><ChevronLeft size={20} /></button>
                        <h2 className="month-title">{monthNames[month]} {year}</h2>
                        <button onClick={handleNextMonth} className="nav-btn"><ChevronRight size={20} /></button>
                    </div>
                    <button className="close-btn" onClick={onClose}><X size={24} /></button>
                </header>

                <div className="calendar-grid">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                        <div key={day} className="grid-header">{day}</div>
                    ))}
                    {days.map((date, index) => (
                        <div
                            key={index}
                            className={`grid-day ${date ? '' : 'empty'} ${date?.toDateString() === selectedDate.toDateString() ? 'selected' : ''}`}
                            onClick={() => date && (onDateChange(date), onClose())}
                        >
                            {date ? date.getDate() : ''}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FullCalendar;
