import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './WaterTracker.css';

const WaterTracker = ({ selectedDate }) => {
    const [data, setData] = useState({});
    const dateKey = selectedDate.toDateString();
    const cups = data[dateKey] || 0;
    const target = 8;

    const updateCups = (newVal) => {
        setData({ ...data, [dateKey]: Math.max(0, newVal) });
    };

    return (
        <div className="water-tracker-card">
            <div className="card-header">
                <span className="card-title">Water: {(cups * 0.25).toFixed(2)}L</span>
            </div>
            <div className="divider"></div>
            <div className="tracker-controls">
                <button
                    className="control-btn"
                    onClick={() => updateCups(cups - 1)}
                >
                    <Minus size={24} />
                </button>
                <div className="progress-display">
                    <span className="cups-count">{cups} Cups</span>
                    <span className="remaining-text">{Math.max(0, target - cups)} Cups Remaining</span>
                </div>
                <button
                    className="control-btn"
                    onClick={() => updateCups(cups + 1)}
                >
                    <Plus size={24} />
                </button>
            </div>
        </div>
    );
};

export default WaterTracker;
