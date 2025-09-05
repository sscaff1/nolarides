import dynamic from "next/dynamic";

// Create a completely dynamic map component
const DynamicMap = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-40 relative rounded-lg overflow-hidden border border-slate-600">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl mb-2 animate-pulse">🗺️</div>
          <div className="text-sm text-slate-300">Loading Map...</div>
        </div>
      </div>
    </div>
  ),
});

interface RealMapProps {
  location: string;
  rideName: string;
  className?: string;
}

export default function RealMap({
  location,
  rideName,
  className = "h-48",
}: RealMapProps) {
  return (
    <div className={`relative ${className}`}>
      <DynamicMap location={location} rideName={rideName} />
    </div>
  );
}
