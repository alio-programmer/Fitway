import React, { useState, useEffect } from 'react';
import { Flame, Droplets, Target, BarChart2, CheckCircle, ArrowRight, Shield, Zap, Moon, Sun } from 'lucide-react';
import './LandingPage.css';

const CountUp = ({ end, duration = 2000, decimals = 0, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;

            if (progress < 1) {
                const currentCount = Math.min(progress * end, end);
                setCount(currentCount);
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return (
        <span>
            {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
            {suffix}
        </span>
    );
};

const LandingPage = ({ onGetStarted, isDarkMode, toggleTheme }) => {
    return (
        <div className="landing-page">
            <nav className="landing-nav">
                <div className="logo">
                    <div className="logo-icon">
                        <Droplets size={24} />
                    </div>
                    <span className="logo-text">Fitway</span>
                </div>
                <div className="nav-actions">
                    <button className="icon-button theme-toggle-btn" onClick={toggleTheme}>
                        {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
                    </button>
                    <button className="nav-login-btn" onClick={onGetStarted}>Sign In</button>
                </div>
            </nav>

            <header className="hero-section">
                <div className="hero-content">
                    <div className="badge animate-fade-up delay-1">✨ New: AI Food Tracking</div>
                    <h1 className="animate-fade-up delay-2">Track your journey to a <span className="text-gradient">healthier you.</span></h1>
                    <p className="animate-fade-up delay-3">The all-in-one fitness companion. Track calories, water, weight, and goals with a premium experience designed for your progress.</p>
                    <div className="hero-actions animate-fade-up delay-4">
                        <button className="primary-btn" onClick={onGetStarted}>
                            Get Started Free
                            <ArrowRight size={20} />
                        </button>
                    </div>
                    <div className="hero-stats animate-fade-up delay-5">
                        <div className="stat-item">
                            <strong>
                                <CountUp end={10000} duration={1500} suffix="+" />
                            </strong>
                            <span>Active Users</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <strong>
                                <CountUp end={4.9} duration={1500} decimals={1} suffix="/5" />
                            </strong>
                            <span>App Rating</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image-container">
                    <div className="mockup-card calorie-card">
                        <div className="card-header">
                            <Flame size={18} className="text-orange" />
                            <span>Calories</span>
                        </div>
                        <div className="card-val">1,240 <span className="unit">kcal</span></div>
                        <div className="card-graph">
                            <div className="bar" style={{ height: '60%' }}></div>
                            <div className="bar" style={{ height: '80%' }}></div>
                            <div className="bar" style={{ height: '40%' }}></div>
                            <div className="bar active" style={{ height: '90%' }}></div>
                        </div>
                    </div>
                    <div className="mockup-card water-card">
                        <div className="card-header">
                            <Droplets size={18} className="text-blue" />
                            <span>Water</span>
                        </div>
                        <div className="card-val">8/12 <span className="unit">cups</span></div>
                        <div className="water-bubbles">
                            <div className="bubble"></div>
                            <div className="bubble"></div>
                            <div className="bubble"></div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="features-section">
                <div className="section-header">
                    <h2>Everything you need <br /> to stay on track.</h2>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon bg-orange">
                            <Target size={24} />
                        </div>
                        <h3>Daily Goals</h3>
                        <p>Set and crush your daily nutrition and activity targets with real-time feedback.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon bg-blue">
                            <Droplets size={24} />
                        </div>
                        <h3>Hydration Pro</h3>
                        <p>Smart reminders and an intuitive tracker to keep you hydrated throughout the day.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon bg-purple">
                            <BarChart2 size={24} />
                        </div>
                        <h3>Weekly Insights</h3>
                        <p>Deep dive into your progress with beautiful charts and meaningful health summaries.</p>
                    </div>

                </div>
            </section>

            <footer className="landing-footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">
                            <div className="logo-icon small">
                                <Droplets size={16} />
                            </div>
                            <span className="logo-text">Fitway</span>
                        </div>
                        <p>Building the future of personal fitness tracking.</p>
                    </div>
                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Product</h4>
                            <span>Features</span>
                            <span>Pricing</span>
                            <span>Support</span>
                        </div>
                        <div className="link-group">
                            <h4>Legal</h4>
                            <span>Privacy</span>
                            <span>Terms</span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2026 Fitway Inc. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
