# 🚀 Development Guide - Climate Dashboard

## ✅ Project Setup Complete!

Your climate dashboard is ready to develop. VS Code should now be open with the project.

---

## 📂 Project Structure

```
climate-dashboard/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page (dashboard)
│   └── globals.css         # Global styles with Tailwind
├── components/             # React components (create here)
├── lib/                    # Utility functions and API calls
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## 🏃 Running the Project

### Start Development Server:
```bash
npm run dev
```
Then open: **http://localhost:3000**

### Other Commands:
```bash
npm run build       # Build for production
npm start           # Run production build
npm run lint        # Lint code
```

---

## 🎨 What's Already Built

✅ **Basic Dashboard UI**
- Header with title
- 3 Metric cards (Temperature, CO2, Sea Level)
- Chart placeholder
- Responsive design with Tailwind CSS
- Dark mode support

✅ **Tech Stack Configured**
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Chart.js ready to use
- ESLint for code quality

---

## 🔥 Next Steps to Build

### Step 1: Add Temperature Chart (Easy)
Create: `components/TemperatureChart.tsx`

```typescript
'use client';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function TemperatureChart() {
  const data = {
    labels: ['1950', '1970', '1990', '2010', '2024'],
    datasets: [
      {
        label: 'Global Temperature Anomaly (°C)',
        data: [-0.2, 0.0, 0.3, 0.7, 1.2],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Global Temperature Trend',
      },
    },
  };

  return <Line options={options} data={data} />;
}
```

Then update `app/page.tsx`:
```typescript
import { TemperatureChart } from '@/components/TemperatureChart';

// Replace the chart placeholder div with:
<TemperatureChart />
```

### Step 2: Get Free API Keys

**NASA API (Free):**
1. Go to: https://api.nasa.gov/
2. Enter your details
3. Get instant API key
4. Copy to `.env.local`

**OpenWeatherMap (Free):**
1. Go to: https://openweathermap.org/api
2. Sign up for free account
3. Get API key
4. Copy to `.env.local`

Create `.env.local`:
```env
NEXT_PUBLIC_NASA_API_KEY=your_key_here
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_key_here
```

### Step 3: Fetch Real Data

Create: `lib/api.ts`

```typescript
export async function getNASATemperature() {
  const response = await fetch(
    `https://api.nasa.gov/planetary/temperature?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
  );
  return response.json();
}

export async function getCO2Data() {
  const response = await fetch(
    'https://global-warming.org/api/co2-api'
  );
  return response.json();
}
```

Then use in your components:
```typescript
const [data, setData] = useState(null);

useEffect(() => {
  getNASATemperature().then(setData);
}, []);
```

### Step 4: Add More Features

**Easy Additions:**
- [ ] Add more chart types (bar, pie, doughnut)
- [ ] Create separate pages for each metric
- [ ] Add loading states
- [ ] Add error handling
- [ ] Improve mobile responsiveness

**Medium Additions:**
- [ ] Real-time data updates
- [ ] Historical data comparisons
- [ ] Interactive tooltips
- [ ] Export charts as images
- [ ] Share functionality

**Advanced Additions:**
- [ ] User preferences/settings
- [ ] Data filtering by date range
- [ ] Multiple locations/regions
- [ ] Predictive models
- [ ] Email alerts

---

## 🎓 Learning Resources

**Next.js:**
- https://nextjs.org/docs
- https://nextjs.org/learn

**TypeScript:**
- https://www.typescriptlang.org/docs/

**Chart.js:**
- https://www.chartjs.org/docs/latest/
- https://react-chartjs-2.js.org/

**Tailwind CSS:**
- https://tailwindcss.com/docs

**Climate APIs:**
- NASA: https://api.nasa.gov/
- NOAA: https://www.ncdc.noaa.gov/cdo-web/webservices/v2
- Global Warming API: https://global-warming.org/

---

## 🐛 Common Issues & Solutions

### Port 3000 already in use?
```bash
# Kill the process
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Module not found errors?
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors?
```bash
# Restart TypeScript server in VS Code
Ctrl+Shift+P → "TypeScript: Restart TS Server"
```

### Chart not displaying?
- Make sure to use 'use client' directive
- Register Chart.js components
- Check browser console for errors

---

## 📊 Git Workflow

```bash
# Create new feature
git checkout -b feature/temperature-chart

# Make changes, then commit
git add .
git commit -m "feat: add temperature chart component"

# Push to GitHub
git push origin feature/temperature-chart

# Merge to main when ready
git checkout master
git merge feature/temperature-chart
git push origin master
```

---

## 🚀 Deployment

### Deploy to Vercel (Free):

1. **Go to:** https://vercel.com
2. **Sign in with GitHub**
3. **Import repository:** `climate-dashboard`
4. **Add environment variables** (API keys)
5. **Deploy!**

Your dashboard will be live at: `https://climate-dashboard-username.vercel.app`

---

## 💡 Pro Tips

1. **Use TypeScript strictly** - It catches bugs early
2. **Component structure** - Keep components small and focused
3. **API calls** - Always handle loading and error states
4. **Performance** - Use React.memo for heavy components
5. **Testing** - Test on different devices and browsers
6. **Git commits** - Make small, frequent commits
7. **Documentation** - Comment complex logic

---

## 🎯 Quick Wins for Portfolio

1. **Make it beautiful** - Polish the UI design
2. **Add screenshots** - Update README with images
3. **Live demo** - Deploy to Vercel
4. **Write about it** - Blog post explaining your approach
5. **Share it** - LinkedIn, Twitter, dev.to
6. **Pin it** - Add to your GitHub pinned repos

---

## 📞 Need Help?

**VS Code Shortcuts:**
- `Ctrl+P` - Quick file open
- `Ctrl+Shift+P` - Command palette
- `Ctrl+`` - Toggle terminal
- `Ctrl+B` - Toggle sidebar
- `Alt+Up/Down` - Move line up/down

**React DevTools:**
- Install React DevTools extension
- Inspect component props and state
- Debug performance

**Resources:**
- Next.js Discord: https://discord.gg/nextjs
- Stack Overflow: Tag questions with `next.js` `typescript`
- GitHub Issues: For specific problems

---

## ✨ Your Project Status

**Repository:** https://github.com/rajeswaran140/climate-dashboard

**Current Status:**
✅ Project initialized
✅ Dependencies installed
✅ Basic UI created
✅ Git repository connected
✅ Ready for development

**Next Action:**
1. Run `npm run dev` in terminal
2. Open http://localhost:3000
3. Start building features!

---

Happy coding! 🌍💻

Built by Rajeswaran Thangarajah
