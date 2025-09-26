import type { Ride } from "@/data/rides";
import RidesDisplay from "@/components/RidesDisplay";

// Simulate async data fetching - replace with database call later
async function getRides(): Promise<Ride[]> {
  // Import the rides data
  const { default: rides } = await import("@/data/rides");
  return rides;
}


async function Home() {
  // Fetch rides data asynchronously
  const rides = await getRides();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative container mx-auto px-4 py-6">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
            NOLA Cycling
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-4">
            Discover group cycling rides in New Orleans
          </p>
          <a
            href="https://www.strava.com/clubs/1760398"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-orange-500/25 group/strava"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-label="Strava logo">
              <title>Strava</title>
              <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.599h4.172L10.463 0l-7.02 13.828h4.169"/>
            </svg>
            <span>Join NOLA Cycling on Strava</span>
            <span className="group-hover/strava:translate-x-1 transition-transform">→</span>
          </a>
        </header>

        {/* Rides Display with Filtering */}
        <RidesDisplay rides={rides} />

        {/* Footer */}
        <footer className="mt-20 text-center text-slate-400">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
            <span className="text-sm font-medium">Built for the New Orleans cycling community</span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
          </div>
          <p className="text-sm">🚴‍♀️ Ride safe, ride together</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
