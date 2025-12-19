# Social Media Dashboard

A modern, responsive social media dashboard built with Next.js, React, and TypeScript. Track your social media metrics across multiple platforms with a beautiful dark/light theme toggle.

## ✨ Features

- 📊 **Real-time Metrics**: Track followers, likes, views, and engagement across platforms
- 🎨 **Dark/Light Theme**: Beautiful theme toggle with smooth transitions
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 🚀 **Modern UI**: Enhanced design with smooth animations and hover effects
- 💾 **Database Ready**: Complete SQL schema for backend integration
- 🎯 **TypeScript**: Full type safety throughout the application
- ⚡ **Next.js 16**: Built with the latest Next.js App Router

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **React**: 19.2.3
- **Icons**: Custom SVG icons for each platform

## 📦 Installation

1. Clone the repository:
```bash
cd social-media-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Schema

The project includes a complete SQL schema (`lib/database-schema.sql`) ready for backend integration:

- **social_media_accounts**: Store platform accounts and follower data
- **overview_metrics**: Track daily metrics (views, likes, retweets, etc.)
- **historical_data**: Store historical data for analytics and trends
- **user_settings**: User preferences including theme settings

## 📁 Project Structure

```
social-media-dashboard/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main dashboard page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Dashboard header with theme toggle
│   ├── PlatformCard.tsx   # Social media platform cards
│   ├── OverviewCard.tsx   # Today's overview metrics
│   └── ThemeToggle.tsx    # Theme switcher component
├── contexts/
│   └── ThemeContext.tsx    # Theme management context
├── lib/
│   ├── mockData.ts        # Mock data for development
│   └── database-schema.sql # Database schema
├── types/
│   └── index.ts           # TypeScript type definitions
└── public/                # Static assets
```

## 🎨 Customization

### Adding New Platforms

1. Add the platform to the `Platform` type in `types/index.ts`
2. Add platform configuration in `components/PlatformCard.tsx`
3. Add platform icon SVG
4. Update mock data in `lib/mockData.ts`

### Theme Colors

Edit the Tailwind classes in components to customize colors. The theme system automatically handles dark mode variants.

## 🔌 Backend Integration

When you're ready to connect a backend:

1. Set up your database using `lib/database-schema.sql`
2. Create API routes in `app/api/` directory
3. Replace mock data calls in `app/page.tsx` with API calls
4. Update the `getMockDashboardData()` function to fetch from your API

Example API route structure:
```
app/api/
├── accounts/
│   └── route.ts
└── metrics/
    └── route.ts
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Future Enhancements

- [ ] Real-time data updates
- [ ] Historical charts and analytics
- [ ] User authentication
- [ ] Multiple account support
- [ ] Export data functionality
- [ ] Custom date range selection
- [ ] Email notifications for significant changes

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Inspired by Frontend Mentor challenges and modern dashboard designs.
