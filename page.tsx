'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import PlatformCard from '@/components/PlatformCard';
import OverviewCard from '@/components/OverviewCard';
import { getMockDashboardData } from '@/lib/mockData';
import { DashboardData } from '@/types';

export default function Home() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    // Simulate API call - in production, this would fetch from your backend
    const dashboardData = getMockDashboardData();
    setData(dashboardData);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 dark:border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto transition-all duration-300 animate-fade-in">
      <Header totalFollowers={data.totalFollowers} />
      
      {/* Platform Cards Section */}
      <section className="mb-12 animate-slide-in-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.accounts.map((account, index) => (
            <div key={account.id} className={`stagger-${index + 1}`}>
              <PlatformCard account={account} />
            </div>
          ))}
        </div>
      </section>

      {/* Overview Section */}
      <section className="animate-slide-in-left">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-8 animate-fade-in">
          Overview - Today
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.overviewMetrics.map((metric, index) => (
            <div key={metric.id} className={`stagger-${index + 1}`}>
              <OverviewCard metric={metric} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
