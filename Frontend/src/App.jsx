import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CalendarRow from './components/CalendarRow';
import SummaryCards from './components/SummaryCards';
import WaterTracker from './components/WaterTracker';
import FullCalendar from './components/FullCalendar';
import WeeklySummary from './components/WeeklySummary';
import WeightHeightTracker from './components/WeightHeightTracker';
import WaterPage from './components/WaterPage';
import AccountPage from './components/AccountPage';
import TermsPrivacyPage from './components/TermsPrivacyPage';
import FeedbackPage from './components/FeedbackPage';
import LandingPage from './components/LandingPage';
import { Menu, Zap, Share2, ChevronDown, Bookmark, Image as ImageIcon, Camera, Moon, Sun } from 'lucide-react';
import './App.css';

import { useNavigate } from 'react-router-dom';

function AppContent({ isLoggedIn, setIsLoggedIn, isDarkMode, toggleTheme }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 1, 25)); // Feb 25, 2026
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const formatDate = (date) => {
    const today = new Date(2026, 1, 25);
    if (date.toDateString() === today.toDateString()) return 'Today';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const isTrackingPage = ['/dailygoal', '/summary', '/weight', '/water'].includes(location.pathname);
  const isLandingPage = location.pathname === '/';

  const handleGetStarted = () => {
    setIsLoggedIn(true);
    navigate('/dailygoal');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {!isLandingPage && (
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          onLogout={handleLogout}
        />
      )}

      {isCalendarOpen && (
        <FullCalendar
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
          onClose={() => setIsCalendarOpen(false)}
        />
      )}

      <main className={`main-content ${isLandingPage ? 'landing-page-main' : ''}`}>
        {!isLandingPage && (
          <header className="dashboard-header">
            <div className="header-left">
              <button className="icon-button hamburger-menu" onClick={toggleSidebar}>
                <Menu size={24} />
              </button>
              {isTrackingPage && (
                <div className="date-selector" onClick={() => setIsCalendarOpen(true)}>
                  <span className="current-date">{formatDate(selectedDate)}</span>
                  <ChevronDown size={20} className="dropdown-icon" />
                </div>
              )}
            </div>

            <div className="header-right">
              <div className="streak-badge">
                <Zap size={20} fill="#FFCC00" color="#FFCC00" />
                <span className="streak-count">0</span>
              </div>
              <div className="header-actions">
                <button className="icon-button" onClick={toggleTheme}>
                  {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
                <button className="icon-button">
                  <Share2 size={24} />
                </button>
                <button className="nav-login-btn small" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </header>
        )}

        <section className={`dashboard-body ${!isTrackingPage ? 'full-page' : ''}`}>
          <Routes>
            <Route path="/" element={<LandingPage onGetStarted={handleGetStarted} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
            <Route path="/dailygoal" element={
              isLoggedIn ? (
                <>
                  <CalendarRow selectedDate={selectedDate} onDateChange={setSelectedDate} />
                  <SummaryCards selectedDate={selectedDate} />
                  <WaterTracker selectedDate={selectedDate} />
                </>
              ) : <Navigate to="/" />
            } />
            <Route path="/summary" element={isLoggedIn ? <WeeklySummary selectedDate={selectedDate} /> : <Navigate to="/" />} />
            <Route path="/weight" element={isLoggedIn ? <WeightHeightTracker /> : <Navigate to="/" />} />
            <Route path="/water" element={isLoggedIn ? <WaterPage /> : <Navigate to="/" />} />
            <Route path="/account" element={isLoggedIn ? <AccountPage /> : <Navigate to="/" />} />
            <Route path="/legal" element={isLoggedIn ? <TermsPrivacyPage /> : <Navigate to="/" />} />
            <Route path="/feedback" element={isLoggedIn ? <FeedbackPage /> : <Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </section>

        {isLoggedIn && isTrackingPage && (
          <div className="bottom-input-bar">
            <input
              type="text"
              placeholder="Track calories here !"
              className="chat-input"
            />
            <div className="input-actions">
              <button className="action-btn"><ImageIcon size={20} /></button>
              <button className="action-btn"><Camera size={20} /></button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <Router>
      <AppContent
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
    </Router>
  );
}

export default App;
