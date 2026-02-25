import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
    Menu, X, Target, BarChart2, Weight, Bell, Droplets,
    User, Gift, Shield, MessageSquare, Settings, LogOut, Moon, Sun
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar, isDarkMode, toggleTheme, onLogout }) => {
    const navigate = useNavigate();
    const menuItems = [
        { icon: <Target size={20} />, label: 'Daily Goals', path: '/dailygoal' },
        { icon: <BarChart2 size={20} />, label: 'Weekly Summary', path: '/summary' },
        { icon: <Weight size={20} />, label: 'Weight Tracker', path: '/weight' },
        { icon: <Droplets size={20} />, label: 'Water Tracker', path: '/water' },
    ];

    const secondaryItems = [
        { icon: <User size={20} />, label: 'Account', path: '/account' },
        { icon: <Shield size={20} />, label: 'Terms & Privacy', path: '/legal' },
        { icon: <MessageSquare size={20} />, label: 'Feedback & Support', path: '/feedback' },
    ];

    const closeSidebarMobile = () => {
        if (window.innerWidth < 1024) toggleSidebar();
    };

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div className="sidebar-overlay" onClick={toggleSidebar}></div>
            )}

            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="logo" onClick={() => { navigate('/'); closeSidebarMobile(); }}>
                        <div className="logo-icon">
                            <Droplets className="primary-icon" />
                        </div>
                        <span className="logo-text">Fitway</span>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    <div className="nav-group">
                        {menuItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                                onClick={closeSidebarMobile}
                            >
                                <span className="item-icon">{item.icon}</span>
                                <span className="item-label">{item.label}</span>
                            </NavLink>
                        ))}
                    </div>

                    <div className="nav-divider"></div>

                    <div className="nav-group secondary-nav">
                        {secondaryItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                                onClick={closeSidebarMobile}
                            >
                                <span className="item-icon">{item.icon}</span>
                                <span className="item-label">{item.label}</span>
                            </NavLink>
                        ))}
                    </div>

                    <div className="logout-section">
                        <button className="nav-item theme-toggle" onClick={toggleTheme}>
                            <span className="item-icon">{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}</span>
                            <span className="item-label">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                        </button>
                        <button className="nav-item logout" onClick={onLogout}>
                            <span className="item-icon"><LogOut size={20} /></span>
                            <span className="item-label">Logout</span>
                        </button>
                    </div>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
