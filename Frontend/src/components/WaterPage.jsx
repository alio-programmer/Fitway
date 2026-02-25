import React, { useState } from 'react';
import { Droplets, Plus, Minus, Clock, Trophy } from 'lucide-react';
import './WaterPage.css';

const WaterPage = () => {
    const [cups, setCups] = useState(4);
    const target = 12; // Dedicated page reflects a more ambitious goal

    const cupLogs = [
        { time: '08:30 AM', amount: '1 Cup' },
        { time: '10:15 AM', amount: '1 Cup' },
        { time: '12:45 PM', amount: '2 Cups' },
    ];

    return (
        <div className="water-page">
            <h1 className="page-title">Hydration Tracker</h1>

            <div className="water-summary-grid">
                <div className="summary-card main-progress">
                    <div className="progress-circle">
                        <div className="inner-content">
                            <Droplets className="text-blue" size={48} fill="#007AFF" />
                            <span className="current-stat">{cups} / {target}</span>
                            <span className="unit">Cups today</span>
                        </div>
                        <svg className="svg-progress">
                            <circle cx="90" cy="90" r="80" />
                            <circle cx="90" cy="90" r="80" style={{ strokeDashoffset: Math.max(0, 502 - (502 * (cups / target))) }} />
                        </svg>
                    </div>
                    <div className="progress-controls">
                        <div className="control-buttons">
                            <button className="small-minus" onClick={() => setCups(Math.max(0, cups - 1))}>
                                <Minus size={24} />
                            </button>
                            <button className="big-plus" onClick={() => setCups(cups + 1)}>
                                <Plus size={32} />
                            </button>
                        </div>
                        <p>Total: {(cups * 0.25).toFixed(1)}L consumed</p>
                    </div>
                </div>

                <div className="sidebar-stats">
                    <div className="summary-card stat-mini">
                        <div className="card-header">
                            <Trophy className="text-yellow" size={20} />
                            <h3>Weekly Streak</h3>
                        </div>
                        <p className="big-val">5 Days</p>
                    </div>

                    <div className="summary-card log-card">
                        <div className="card-header">
                            <Clock className="text-gray" size={20} />
                            <h3>Today's Log</h3>
                        </div>
                        <div className="log-scroll">
                            {cupLogs.map((log, i) => (
                                <div key={i} className="log-entry">
                                    <span className="time">{log.time}</span>
                                    <span className="amount">{log.amount}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaterPage;
