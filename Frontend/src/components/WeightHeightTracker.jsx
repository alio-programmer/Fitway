import React, { useState } from 'react';
import { Weight, Ruler, Plus, History } from 'lucide-react';
import './WeightHeightTracker.css';

const WeightHeightTracker = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('175');
    const [logs, setLogs] = useState([
        { date: 'Feb 24, 2026', weight: 70.5, height: 175 },
        { date: 'Feb 20, 2026', weight: 71.2, height: 175 },
        { date: 'Feb 15, 2026', weight: 72.0, height: 175 },
    ]);

    const handleAddLog = (e) => {
        e.preventDefault();
        if (!weight) return;
        const newLog = {
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            weight: parseFloat(weight),
            height: parseFloat(height)
        };
        setLogs([newLog, ...logs]);
        setWeight('');
    };

    return (
        <div className="weight-height-tracker">
            <h1 className="page-title">Body Metrics</h1>

            <div className="tracker-grid">
                <section className="input-section">
                    <div className="stat-card">
                        <div className="card-header">
                            <Weight className="icon text-blue" size={24} />
                            <h3>Add Weekly Record</h3>
                        </div>
                        <form onSubmit={handleAddLog} className="metric-form">
                            <div className="input-group">
                                <label>Weight (kg)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    placeholder="00.0"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <label>Height (cm)</label>
                                <input
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                />
                            </div>
                            <div className="input-helper">Press Enter to save record</div>
                        </form>
                    </div>

                    <div className="last-recorded-grid">
                        <div className="last-stat-card weight">
                            <span className="label">Last Weight</span>
                            <div className="value-container">
                                <span className="value">{logs[0]?.weight || '--'}</span>
                                <span className="unit">kg</span>
                            </div>
                        </div>
                        <div className="last-stat-card height">
                            <span className="label">Last Height</span>
                            <div className="value-container">
                                <span className="value">{logs[0]?.height || '--'}</span>
                                <span className="unit">cm</span>
                            </div>
                        </div>
                    </div>

                    <div className="summary-banner bmi">
                        <div className="summary-item">
                            <span className="label">Current BMI</span>
                            <span className="value">22.9</span>
                            <span className="sub">Healthy</span>
                        </div>
                    </div>
                </section>

                <section className="history-section">
                    <div className="stat-card">
                        <div className="card-header">
                            <History className="icon text-gray" size={24} />
                            <h3>History</h3>
                        </div>
                        <div className="log-list">
                            {logs.map((log, index) => (
                                <div key={index} className="log-item">
                                    <div className="log-info">
                                        <span className="log-date">{log.date}</span>
                                        <span className="log-stats">{log.weight} kg • {log.height} cm</span>
                                    </div>
                                    <div className="log-diff">
                                        {index < logs.length - 1 ? (
                                            <span className={log.weight <= logs[index + 1].weight ? 'down' : 'up'}>
                                                {log.weight <= logs[index + 1].weight ? '' : '+'}{Math.abs(log.weight - logs[index + 1].weight).toFixed(1)} kg
                                            </span>
                                        ) : <span>Initial</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default WeightHeightTracker;
