import React from 'react';
import './OverviewCard.css';

function OverviewCard({ data, darkMode }) {
  const { platform, metric, value, change, isPositive } = data;

  const formatNumber = (num) => {
    if (num >= 10000) {
      return (num / 1000).toFixed(0) + 'k';
    }
    return num.toLocaleString();
  };

  return (
    <div className={`overview-card ${darkMode ? 'dark' : 'light'}`}>
      <div className="overview-header">
        <span className="metric-name">{metric}</span>
        <span className={`platform-icon-small platform-${platform}`}></span>
      </div>
      <div className="overview-stats">
        <h3 className="stat-value">{formatNumber(value)}</h3>
        <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
          <span className="arrow">{isPositive ? '▲' : '▼'}</span>
          <span className="change-value">{change}%</span>
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
