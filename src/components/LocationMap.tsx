interface LocationMapProps {
  location: string;
  rideName: string;
}

export default function LocationMap({ location, rideName }: LocationMapProps) {
  return (
    <div className="relative">
      {/* Mini Map Preview */}
      <div className="relative h-32 bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden cursor-pointer group/map hover:border-slate-500 transition-all duration-200">
        {/* Map Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(148,163,184,0.2)_1px,transparent_0)] bg-[length:16px_16px] opacity-30"></div>
        </div>

        {/* Map Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl mb-2 group-hover/map:scale-110 transition-transform">
              🗺️
            </div>
            <div className="text-sm text-slate-300 font-medium">
              View Location
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Click to open in Maps
            </div>
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="absolute top-2 right-2 bg-slate-800/90 text-slate-300 text-xs px-2 py-1 rounded border border-slate-600 backdrop-blur-sm">
          📍 {rideName}
        </div>

        <div className="absolute bottom-2 left-2 bg-slate-800/90 text-slate-300 text-xs px-2 py-1 rounded border border-slate-600 backdrop-blur-sm">
          🚴‍♂️ Start Point
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover/map:opacity-100 transition-opacity duration-200"></div>
      </div>

      {/* Location Details */}
      <div className="mt-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span className="truncate">{location}</span>
        </div>
      </div>
    </div>
  );
}
