export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🌍 Climate Dashboard
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Real-time environmental data and climate metrics
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Temperature Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                Global Temperature
              </h3>
              <span className="text-3xl">🌡️</span>
            </div>
            <div className="text-4xl font-bold text-red-600 mb-2">
              +1.2°C
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Above pre-industrial levels
            </p>
          </div>

          {/* CO2 Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                CO₂ Levels
              </h3>
              <span className="text-3xl">💨</span>
            </div>
            <div className="text-4xl font-bold text-orange-600 mb-2">
              421 ppm
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Parts per million
            </p>
          </div>

          {/* Sea Level Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                Sea Level Rise
              </h3>
              <span className="text-3xl">🌊</span>
            </div>
            <div className="text-4xl font-bold text-blue-600 mb-2">
              +101mm
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Since 1993
            </p>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Temperature Trend
          </h2>
          <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded">
            <p className="text-gray-500 dark:text-gray-400">
              Chart will be added here
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 rounded">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            🚀 Project Status: In Development
          </h3>
          <p className="text-yellow-700 dark:text-yellow-300">
            This dashboard is being built to visualize real-time climate data from NASA and NOAA APIs.
            Charts, live data integration, and more features coming soon!
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>Data sources: NASA, NOAA, OpenWeatherMap</p>
          <p className="mt-2">
            Built by{" "}
            <a
              href="https://github.com/rajeswaran140"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Rajeswaran Thangarajah
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
