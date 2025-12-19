// Database schema types for social media dashboard

export type Platform = 'facebook' | 'twitter' | 'instagram' | 'youtube';

export interface SocialMediaAccount {
  id: string;
  platform: Platform;
  username: string;
  followers: number;
  followersChange: number;
  followersChangePercent: number;
  isPositive: boolean;
}

export interface OverviewMetric {
  id: string;
  platform: Platform;
  metricType: 'pageViews' | 'likes' | 'profileViews' | 'retweets' | 'totalViews';
  label: string;
  value: number;
  change: number;
  changePercent: number;
  isPositive: boolean;
}

export interface DashboardData {
  totalFollowers: number;
  accounts: SocialMediaAccount[];
  overviewMetrics: OverviewMetric[];
}
