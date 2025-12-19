import { DashboardData, SocialMediaAccount, OverviewMetric } from '@/types';

// Mock data for social media dashboard
export const mockAccounts: SocialMediaAccount[] = [
  {
    id: '1',
    platform: 'facebook',
    username: '@nathanf',
    followers: 1987,
    followersChange: 12,
    followersChangePercent: 0.6,
    isPositive: true,
  },
  {
    id: '2',
    platform: 'twitter',
    username: '@nathanf',
    followers: 1044,
    followersChange: 99,
    followersChangePercent: 10.5,
    isPositive: true,
  },
  {
    id: '3',
    platform: 'instagram',
    username: '@nathanf',
    followers: 11000,
    followersChange: 1099,
    followersChangePercent: 11.1,
    isPositive: true,
  },
  {
    id: '4',
    platform: 'youtube',
    username: '@nathanf',
    followers: 8239,
    followersChange: -144,
    followersChangePercent: -1.7,
    isPositive: false,
  },
];

export const mockOverviewMetrics: OverviewMetric[] = [
  {
    id: '1',
    platform: 'facebook',
    metricType: 'pageViews',
    label: 'Page Views',
    value: 87,
    change: 3,
    changePercent: 3.0,
    isPositive: true,
  },
  {
    id: '2',
    platform: 'facebook',
    metricType: 'likes',
    label: 'Likes',
    value: 52,
    change: -2,
    changePercent: -2.0,
    isPositive: false,
  },
  {
    id: '3',
    platform: 'instagram',
    metricType: 'likes',
    label: 'Likes',
    value: 5462,
    change: 2257,
    changePercent: 70.4,
    isPositive: true,
  },
  {
    id: '4',
    platform: 'instagram',
    metricType: 'profileViews',
    label: 'Profile Views',
    value: 52000,
    change: 1375,
    changePercent: 1375.0,
    isPositive: true,
  },
  {
    id: '5',
    platform: 'twitter',
    metricType: 'retweets',
    label: 'Retweets',
    value: 117,
    change: 303,
    changePercent: 303.0,
    isPositive: true,
  },
  {
    id: '6',
    platform: 'twitter',
    metricType: 'likes',
    label: 'Likes',
    value: 507,
    change: 553,
    changePercent: 553.0,
    isPositive: true,
  },
  {
    id: '7',
    platform: 'youtube',
    metricType: 'likes',
    label: 'Likes',
    value: 107,
    change: -19,
    changePercent: -19.0,
    isPositive: false,
  },
  {
    id: '8',
    platform: 'youtube',
    metricType: 'totalViews',
    label: 'Total Views',
    value: 1407,
    change: -12,
    changePercent: -12.0,
    isPositive: false,
  },
];

export const getMockDashboardData = (): DashboardData => {
  const totalFollowers = mockAccounts.reduce((sum, account) => sum + account.followers, 0);
  
  return {
    totalFollowers,
    accounts: mockAccounts,
    overviewMetrics: mockOverviewMetrics,
  };
};
