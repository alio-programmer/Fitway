import React from 'react';
import { Flame, Droplets, Trophy } from 'lucide-react';
import './WeeklySummary.css';

const WeeklySummary = () => {
    const weeklyStats = [
        { day: 'Mon', calories: 1200, water: 6 },
        { day: 'Tue', calories: 1450, water: 8 },
        { day: 'Wed', calories: 1100, water: 5 },
        { day: 'Thu', calories: 1550, water: 9 },
        { day: 'Fri', calories: 1300, water: 7 },
        { day: 'Sat', calories: 1600, water: 4 },
        { day: 'Sun', calories: 1400, water: 8 },
    ];

    const maxCalories = 2000;
    const avgCalories = Math.round(weeklyStats.reduce((acc, curr) => acc + curr.calories, 0) / 7);

    return (
        <div className="weekly-summary">
            <h1 className="summary-title">Weekly Summary</h1>

            <div className="summary-grid">
                <div className="summary-card main-stat">
                    <div className="card-header">
                        <Trophy className="icon text-yellow" size={24} />
                        <h3>Highlights</h3>
                    </div>
                    <p>You hit your goal on 5 out of 7 days!</p>
                </div>

                <div className="summary-card chart-card">
                    <div className="card-header">
                        <Flame className="icon text-orange" size={24} />
                        <h3>Calorie Intake</h3>
                    </div>
                    <div className="bar-chart">
                        {weeklyStats.map((item, index) => (
                            <div key={index} className="bar-wrapper">
                                <div className="bar" style={{ height: `${(item.calories / maxCalories) * 100}%` }}>
                                    <span className="bar-tooltip">{item.calories}</span>
                                </div>
                                <span className="bar-label">{item.day}</span>
                            </div>
                        ))}
                    </div>
                    <div className="avg-stat">Avg: {avgCalories} kcal</div>
                </div>

                <div className="summary-card mini-card">
                    <div className="card-header">
                        <Droplets className="icon text-blue" size={24} />
                        <h3>Avg Water</h3>
                    </div>
                    <div className="big-number">6.7 Cups</div>
                </div>
            </div>
        </div>
    );
};

export default WeeklySummary;
