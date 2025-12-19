'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Function to get initial theme
function getInitialTheme(): Theme {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      return savedTheme;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
}

// Function to apply theme to document
function applyTheme(theme: Theme) {
  if (typeof window !== 'undefined') {
    const root = document.documentElement;
    // Apply dark class to html element for Tailwind dark mode
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  // Apply theme when it changes
  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      // Apply theme immediately when toggling
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
