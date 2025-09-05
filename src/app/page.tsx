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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 shadow-xl">
            <span className="text-2xl">🚴‍♂️</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            NOLA Rides
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Discover group cycling rides in New Orleans
          </p>
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
