import React from 'react';
import './SocialCard.css';

function SocialCard({ data, darkMode }) {
  const { platform, username, followers, followersLabel, change, isPositive, color } = data;

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className={`social-card ${darkMode ? 'dark' : 'light'}`}>
      <div className="card-border" style={{ backgroundColor: color }}></div>
      <div className="card-content">
        <div className="card-header">
          <span className={`platform-icon platform-${platform}`}></span>
          <span className="username">{username}</span>
        </div>
        <div className="followers-count">
          <h2 className="count">{formatNumber(followers)}</h2>
          <p className="followers-label">{followersLabel}</p>
        </div>
        <div className={`change ${isPositive ? 'positive' : 'negative'}`}>
          <span className="arrow">{isPositive ? '▲' : '▼'}</span>
          <span className="change-value">{change} Today</span>
        </div>
      </div>
    </div>
  );
}

export default SocialCard;
