-- Database schema for Social Media Dashboard
-- This schema is ready for backend integration

-- Social Media Accounts Table
CREATE TABLE IF NOT EXISTS social_media_accounts (
    id VARCHAR(255) PRIMARY KEY,
    platform ENUM('facebook', 'twitter', 'instagram', 'youtube') NOT NULL,
    username VARCHAR(255) NOT NULL,
    followers INT NOT NULL DEFAULT 0,
    followers_change INT NOT NULL DEFAULT 0,
    followers_change_percent DECIMAL(5, 2) NOT NULL DEFAULT 0.00,
    is_positive BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_platform (platform),
    INDEX idx_username (username)
);

-- Overview Metrics Table
CREATE TABLE IF NOT EXISTS overview_metrics (
    id VARCHAR(255) PRIMARY KEY,
    platform ENUM('facebook', 'twitter', 'instagram', 'youtube') NOT NULL,
    metric_type ENUM('pageViews', 'likes', 'profileViews', 'retweets', 'totalViews') NOT NULL,
    label VARCHAR(255) NOT NULL,
    value INT NOT NULL DEFAULT 0,
    change_value INT NOT NULL DEFAULT 0,
    change_percent DECIMAL(5, 2) NOT NULL DEFAULT 0.00,
    is_positive BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_platform (platform),
    INDEX idx_metric_type (metric_type)
);

-- Historical Data Table (for analytics and trends)
CREATE TABLE IF NOT EXISTS historical_data (
    id VARCHAR(255) PRIMARY KEY,
    account_id VARCHAR(255),
    metric_id VARCHAR(255),
    value INT NOT NULL,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (account_id) REFERENCES social_media_accounts(id) ON DELETE CASCADE,
    FOREIGN KEY (metric_id) REFERENCES overview_metrics(id) ON DELETE CASCADE,
    INDEX idx_account (account_id),
    INDEX idx_metric (metric_id),
    INDEX idx_recorded_at (recorded_at)
);

-- User Settings Table (for theme preferences, etc.)
CREATE TABLE IF NOT EXISTS user_settings (
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    theme ENUM('light', 'dark') DEFAULT 'light',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY unique_user (user_id)
);
