import type { Ride } from "@/data/rides";
import RealMap from "./RealMap";

interface RideCardProps {
  ride: Ride;
}

const getTimeOfDay = (time: string) => {
  const hour = parseInt(time.split(":")[0], 10);
  const isAM = time.includes("AM");
  const hour24 = isAM ? (hour === 12 ? 0 : hour) : hour === 12 ? 12 : hour + 12;
  return hour24 < 12 ? "morning" : "afternoon";
};

const getSpeedCategory = (avgSpeed: number) => {
  if (avgSpeed < 18) return "casual";
  if (avgSpeed < 24) return "moderate";
  return "fast";
};

const formatDuration = (minutes: number): { display: string; label: string } => {
  if (minutes < 60) {
    return { display: minutes.toString(), label: "Min" };
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (remainingMinutes === 0) {
    return { display: hours.toString(), label: "Hr" };
  }

  return { display: `${hours}:${remainingMinutes.toString().padStart(2, '0')}`, label: "Hr" };
};

export default function RideCard({ ride }: RideCardProps) {
  const timeOfDay = getTimeOfDay(ride.startTime);
  const speedCategory = getSpeedCategory(ride.averageSpeed);
  const duration = formatDuration(ride.duration);

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-slate-900/50 group">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Main Info */}
        <div className="flex-1 p-4">
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors mb-1">
                {ride.name}
              </h3>
              <p className="text-slate-300 text-sm leading-snug mb-2">
                {ride.description}
              </p>
            </div>
            <span className="text-xs text-slate-300 bg-slate-700/50 px-3 py-1 rounded-full border border-slate-600">
              {ride.occurrence}
            </span>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-2 mb-3">
            <div className="text-center p-1.5 bg-slate-700/30 rounded border border-slate-600/50">
              <div className="text-base font-bold text-blue-400">
                {ride.averageSpeed}
              </div>
              <div className="text-xs text-slate-400">Avg</div>
            </div>
            <div className="text-center p-1.5 bg-slate-700/30 rounded border border-slate-600/50">
              <div className="text-base font-bold text-green-400">
                {ride.distance}
              </div>
              <div className="text-xs text-slate-400">Mi</div>
            </div>
            <div className="text-center p-1.5 bg-slate-700/30 rounded border border-slate-600/50">
              <div className="text-base font-bold text-purple-400">
                {duration.display}
              </div>
              <div className="text-xs text-slate-400">{duration.label}</div>
            </div>
            <div className="text-center p-1.5 bg-slate-700/30 rounded border border-slate-600/50">
              <div className="text-base font-bold text-orange-400">
                {ride.maxSpeed}
              </div>
              <div className="text-xs text-slate-400">Max</div>
            </div>
          </div>

          {/* Schedule & Location */}
          <div className="flex items-center justify-between text-sm text-slate-300 mb-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <span className="text-blue-400 mr-1">📅</span>
                <span className="text-slate-400">
                  {ride.weekdays.join(", ")}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-orange-400 mr-1">🕐</span>
                <span className="text-slate-400">{ride.startTime}</span>
              </div>
            </div>
            <div className="flex items-center text-xs text-slate-400 max-w-xs truncate">
              <span className="text-green-400 mr-1">📍</span>
              <span className="truncate">{ride.startLocation}</span>
            </div>
          </div>

          {/* Tags and Strava Link */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  speedCategory === "casual"
                    ? "bg-green-500/20 text-green-300 border border-green-500/30"
                    : speedCategory === "moderate"
                      ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                      : "bg-red-500/20 text-red-300 border border-red-500/30"
                }`}
              >
                {speedCategory}
              </span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  timeOfDay === "morning"
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                }`}
              >
                {timeOfDay}
              </span>
            </div>
            <a
              href={ride.stravaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-1.5 px-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-orange-500/25 group/strava text-sm"
            >
              <span className="flex items-center gap-1.5">
                <span>🚴‍♂️</span>
                <span>Strava</span>
                <span className="group-hover/strava:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="lg:w-72 p-4 border-l border-slate-700">
          <div className="mb-1">
            <span className="text-xs font-medium text-slate-200">
              📍 Location
            </span>
          </div>
          <RealMap
            location={ride.startLocation}
            rideName={ride.name}
            className="h-32"
          />
        </div>
      </div>
    </div>
  );
}
