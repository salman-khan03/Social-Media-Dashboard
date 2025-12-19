# Quick Start Guide

## 🚀 Getting Started

1. **Navigate to the project directory:**
   ```bash
   cd social-media-dashboard
   ```

2. **Install dependencies (if not already done):**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ✨ Features to Try

- **Theme Toggle**: Click the toggle button in the header to switch between light and dark modes
- **Hover Effects**: Hover over any card to see smooth animations
- **Responsive Design**: Resize your browser or view on mobile to see the responsive layout
- **Platform Cards**: View follower counts and changes for each social media platform
- **Overview Metrics**: Check today's performance metrics across all platforms

## 🎨 What Makes This Better

Compared to the reference site, this dashboard includes:

1. **Better Animations**: Smooth hover effects and transitions
2. **Modern Icons**: SVG icons for each platform instead of simple colored bars
3. **Enhanced Typography**: Better font hierarchy and spacing
4. **Improved Dark Mode**: More polished dark theme with better contrast
5. **Type Safety**: Full TypeScript support for better development experience
6. **Database Ready**: Complete SQL schema for easy backend integration
7. **Better Responsive Design**: Optimized for all screen sizes
8. **Loading States**: Professional loading spinner while data loads

## 🔌 Next Steps for Backend Integration

1. Set up your database using `lib/database-schema.sql`
2. Create API routes in `app/api/` directory
3. Replace `getMockDashboardData()` in `app/page.tsx` with API calls
4. Add authentication if needed
5. Set up real-time updates (WebSockets or polling)

## 📝 Example API Integration

```typescript
// In app/page.tsx, replace the useEffect:
useEffect(() => {
  fetch('/api/dashboard')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.error('Error fetching data:', err));
}, []);
```

Enjoy your new dashboard! 🎉
