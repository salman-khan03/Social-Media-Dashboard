import React from 'react';
import './Header.css';

function Header({ darkMode, toggleTheme }) {
  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <div className="header-content">
        <div className="header-left">
          <h1 className="header-title">Social Media Dashboard</h1>
          <p className="header-subtitle">Total Followers: 23,004</p>
        </div>
        <div className="header-right">
          <label className="theme-toggle">
            <span className="toggle-label">Dark Mode</span>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleTheme}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;
