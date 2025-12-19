'use client';

import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

interface HeaderProps {
  totalFollowers?: number;
}

export default function Header({ totalFollowers = 23004 }: HeaderProps) {
  const { theme } = useTheme();

  return (
    <header className="mb-12 animate-fade-in relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
      
      <div className="glass-effect rounded-3xl p-8 shadow-2xl glow-effect border border-white/20 dark:border-indigo-500/30 relative overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 animate-pulse"></div>
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left section with title and stats */}
          <div className="flex-1 space-y-4 animate-slide-in-left">
            {/* Main title with icon */}
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h1 
                  className="text-4xl sm:text-5xl font-black tracking-tight"
                  style={{
                    background: 'linear-gradient(to right, #2563eb, #9333ea, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Social Media Dashboard
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">
                  Real-time analytics & insights
                </p>
              </div>
            </div>

            {/* Stats section */}
            <div className="flex flex-wrap gap-6">
              <div className="glass-effect rounded-xl p-4 border border-white/20 dark:border-indigo-500/20 min-w-[200px]">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-1">
                  Total Followers
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                    {totalFollowers.toLocaleString()}
                  </span>
                  <span className="text-green-500 text-sm font-semibold flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    12%
                  </span>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-4 border border-white/20 dark:border-indigo-500/20">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-1">
                  Active Platforms
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                    4
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">connected</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right section with theme toggle */}
          <div className="flex flex-col items-center gap-4 animate-fade-in">
            <div className="glass-effect rounded-xl p-4 border border-white/20 dark:border-indigo-500/20">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-700 dark:text-gray-300 font-semibold whitespace-nowrap">
                  {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </span>
                <ThemeToggle />
              </div>
            </div>
            
            {/* Status indicator */}
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 dark:bg-green-500/20 rounded-full border border-green-500/30">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-green-600 dark:text-green-400">Live</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
