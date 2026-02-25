import React from 'react';
import { Flame, PieChart } from 'lucide-react';
import './SummaryCards.css';

const SummaryCards = ({ selectedDate }) => {
    return (
        <div className="summary-container">
            <div className="summary-card calories">
                <div className="card-header">
                    <div className="icon-wrapper orange">
                        <Flame size={18} fill="currentColor" />
                    </div>
                    <span className="card-title">Calories</span>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <span className="stat-value">0</span>
                        <span className="stat-label">Food</span>
                    </div>
                    <div className="stat">
                        <span className="stat-value">0</span>
                        <span className="stat-label">Exercise</span>
                    </div>
                    <div className="stat main">
                        <span className="stat-value">1500</span>
                        <span className="stat-label">Remaining</span>
                    </div>
                </div>
            </div>

            <div className="summary-card macros">
                <div className="card-header">
                    <div className="icon-wrapper pink">
                        <PieChart size={18} fill="currentColor" />
                    </div>
                    <span className="card-title">Macros</span>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <span className="stat-value">0/188</span>
                        <span className="stat-label">Carbs (g)</span>
                    </div>
                    <div className="stat">
                        <span className="stat-value">0/94</span>
                        <span className="stat-label">Protein (g)</span>
                    </div>
                    <div className="stat">
                        <span className="stat-value">0/42</span>
                        <span className="stat-label">Fat (g)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummaryCards;
