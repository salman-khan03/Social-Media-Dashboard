import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SocialCard from './components/SocialCard';
import OverviewCard from './components/OverviewCard';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const socialData = [
    {
      platform: 'facebook',
      username: '@nathanf',
      followers: 1987,
      followersLabel: 'Followers',
      change: 12,
      isPositive: true,
      color: '#178FF5'
    },
    {
      platform: 'twitter',
      username: '@nathanf',
      followers: 1044,
      followersLabel: 'Followers',
      change: 99,
      isPositive: true,
      color: '#1DA1F2'
    },
    {
      platform: 'instagram',
      username: '@realnathanf',
      followers: 11734,
      followersLabel: 'Followers',
      change: 1099,
      isPositive: true,
      color: '#DC2743'
    },
    {
      platform: 'youtube',
      username: 'Nathan F.',
      followers: 8239,
      followersLabel: 'Subscribers',
      change: 144,
      isPositive: false,
      color: '#C4032B'
    }
  ];

  const overviewData = [
    { platform: 'facebook', metric: 'Page Views', value: 87, change: 3, isPositive: true },
    { platform: 'facebook', metric: 'Likes', value: 52, change: 2, isPositive: false },
    { platform: 'instagram', metric: 'Likes', value: 5462, change: 2257, isPositive: true },
    { platform: 'instagram', metric: 'Profile Views', value: 52308, change: 1375, isPositive: true },
    { platform: 'twitter', metric: 'Retweets', value: 117, change: 303, isPositive: true },
    { platform: 'twitter', metric: 'Likes', value: 507, change: 553, isPositive: true },
    { platform: 'youtube', metric: 'Likes', value: 107, change: 19, isPositive: false },
    { platform: 'youtube', metric: 'Total Views', value: 1407, change: 12, isPositive: false }
  ];

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <div className="container">
        <div className="cards-grid">
          {socialData.map((data) => (
            <SocialCard key={`${data.platform}-${data.username}`} data={data} darkMode={darkMode} />
          ))}
        </div>
        <h2 className="overview-title">Overview - Today</h2>
        <div className="overview-grid">
          {overviewData.map((data) => (
            <OverviewCard key={`${data.platform}-${data.metric}`} data={data} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
