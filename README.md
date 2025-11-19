# 🌍 Climate Dashboard

Real-time climate data visualization dashboard built with Next.js and TypeScript.

## 📊 Features

- **Global Temperature Trends** - Track temperature anomalies over time
- **CO₂ Levels** - Monitor atmospheric carbon dioxide concentration
- **Sea Level Rise** - Visualize ocean level changes
- **Interactive Charts** - Beautiful data visualizations
- **Real-time Data** - Live updates from NASA and NOAA APIs
- **Responsive Design** - Works on all devices
- **Dark Mode** - Automatic theme switching

## 🚀 Tech Stack

- **Frontend:** Next.js 15, React 18, TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Chart.js, React-ChartJS-2
- **APIs:** NASA GISTEMP, NOAA Climate Data, OpenWeatherMap
- **Deployment:** Vercel

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/rajeswaran140/climate-dashboard.git
cd climate-dashboard

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 📚 Data Sources

- **NASA GISTEMP** - Global temperature data
- **NOAA** - Climate and ocean data
- **OpenWeatherMap** - Air quality and weather data

## 🎯 Roadmap to Open Source

### Phase 1: Foundation (COMPLETED ✅)
- [x] Project setup with Next.js 15 + TypeScript
- [x] Basic UI design with Tailwind CSS
- [x] Responsive layout and dark mode
- [x] API integration library (`lib/api.ts`)
- [x] AWS Amplify deployment configuration
- [x] Documentation and guides
- [x] GitHub repository (private)

### Phase 2: Backend Integration (COMPLETED ✅)
- [x] Django REST API backend created
- [x] API endpoints for temperature, CO2, sea level
- [x] TypeScript interfaces for all data types
- [x] CORS configuration
- [x] Environment variable setup
- [x] Deployment guides written

### Phase 3: Production Deployment (IN PROGRESS 🚧)
**Timeline: 1-2 weeks**
- [ ] Deploy Django backend to Linode
  - [ ] Set up Linode Ubuntu server
  - [ ] Configure PostgreSQL database
  - [ ] Get SSL certificate (Let's Encrypt)
  - [ ] Test all API endpoints
- [ ] Deploy Next.js frontend to AWS Amplify
  - [ ] Connect GitHub repository
  - [ ] Configure environment variables
  - [ ] Test build and deployment
- [ ] Integration testing
  - [ ] Verify API connectivity
  - [ ] Test CORS configuration
  - [ ] Check all data endpoints
  - [ ] Mobile responsiveness testing

### Phase 4: Testing & Quality Assurance (PENDING 📋)
**Timeline: 3-5 days**
- [ ] Comprehensive testing on production
  - [ ] API response times
  - [ ] Error handling
  - [ ] Edge cases
  - [ ] Browser compatibility (Chrome, Firefox, Safari)
  - [ ] Mobile devices (iOS, Android)
- [ ] Performance optimization
  - [ ] Page load speed
  - [ ] API caching verification
  - [ ] Chart rendering performance
- [ ] Documentation verification
  - [ ] Test deployment guides
  - [ ] Update with production URLs
  - [ ] Add screenshots

### Phase 5: Pre-Open Source Preparation (PENDING 🔒)
**Timeline: 2-3 days**
- [ ] Security audit
  - [ ] Scan git history for secrets
  - [ ] Verify no API keys in commits
  - [ ] Check .env files are gitignored
- [ ] Legal & licensing
  - [ ] Add MIT License file
  - [ ] Add CONTRIBUTING.md
  - [ ] Add CODE_OF_CONDUCT.md
  - [ ] Update copyright notices
- [ ] README enhancements
  - [ ] Add live demo link
  - [ ] Add screenshots/GIFs
  - [ ] Add badges (build status, license)
  - [ ] Improve setup instructions

### Phase 6: Go Open Source! (FUTURE 🌟)
**Timeline: 1 day**
- [ ] Make repository public on GitHub
- [ ] Announce on social media (LinkedIn, Twitter)
- [ ] Submit to directories (Product Hunt, Hacker News)
- [ ] Enable GitHub Issues
- [ ] Set up GitHub Sponsors
- [ ] Apply for NASA grants/funding

### Phase 7: Feature Development (FUTURE 🚀)
**Post-Open Source Enhancements:**
- [ ] Real-time data updates from NASA APIs
- [ ] Interactive chart features
  - [ ] Zoom and pan
  - [ ] Date range filtering
  - [ ] Multiple data overlays
- [ ] Historical data comparison tools
- [ ] Data export functionality (CSV, JSON, PNG)
- [ ] User preferences and saved views
- [ ] Additional climate metrics
  - [ ] Arctic ice extent
  - [ ] Ocean pH levels
  - [ ] Extreme weather events
- [ ] Mobile app (React Native)
- [ ] API documentation portal
- [ ] Multilingual support (i18n)

### Phase 8: Community & Growth (FUTURE 🌍)
**Building the Community:**
- [ ] Establish contribution guidelines
- [ ] Create issue templates
- [ ] Set up GitHub Discussions
- [ ] Regular community updates
- [ ] Partner with climate organizations
- [ ] Educational workshops/webinars
- [ ] Scientific paper collaborations

---

**Current Status:** Phase 3 - Production Deployment
**Next Milestone:** Deploy to Linode + AWS Amplify
**Target Open Source Date:** After successful production deployment and testing

## 👨‍💻 Developer

**Rajeswaran Thangarajah**
- Portfolio: [raj.it.com](https://raj.it.com)
- GitHub: [@rajeswaran140](https://github.com/rajeswaran140)
- LinkedIn: [/in/rajwaran](https://linkedin.com/in/rajwaran)

## 🚀 NASA Support & Funding

This project is **100% free and open source** with no revenue generation - built as a public service for climate education.

**Interested in supporting this project?**
- 📖 **[NASA Support Guide](./NASA_SUPPORT_GUIDE.md)** - Learn about NASA partnerships, grants, and funding opportunities
- 💰 **Sponsorship** - GitHub Sponsors coming soon
- 🤝 **Partnership** - Contact for university/NGO collaborations

**Free Hosting:** Powered by Vercel (FREE forever)
**Free Data:** NASA, NOAA, OpenWeatherMap APIs (all free)
**Total Cost:** $0/month to run globally

## 📚 Documentation

- **[Development Guide](./DEVELOPMENT_GUIDE.md)** - Complete build and deployment guide
- **[NASA Support Guide](./NASA_SUPPORT_GUIDE.md)** - Funding and partnership opportunities

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

**Ways to contribute:**
- 🐛 Report bugs and issues
- 💡 Suggest new features
- 📊 Add new data sources
- 🎨 Improve UI/UX
- 📖 Improve documentation
- 🌍 Translate to other languages

## 🌟 Project Goals

- ✅ Make NASA climate data accessible to everyone
- ✅ Raise awareness about climate change
- ✅ Provide free educational resources
- ✅ Build open-source community
- ✅ Support climate research and education

---

**Built with ❤️ for the global community**
**Powered by NASA data 🚀**
**Free forever 🌍**
