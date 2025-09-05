"use client";

import { Suspense, useCallback, useState } from "react";
import FilterControls from "@/components/FilterControls";
import RideCard from "@/components/RideCard";
import type { Ride } from "@/data/rides";

interface RidesDisplayProps {
  rides: Ride[];
}

export default function RidesDisplay({ rides }: RidesDisplayProps) {
  const [filteredRides, setFilteredRides] = useState<Ride[]>(rides);

  const handleFilterChange = useCallback((newFilteredRides: Ride[]) => {
    setFilteredRides(newFilteredRides);
  }, []);

  return (
    <>
      {/* Filter Controls */}
      <Suspense
        fallback={
          <div className="animate-pulse bg-slate-800 h-20 rounded-xl mb-8 border border-slate-700"></div>
        }
      >
        <FilterControls rides={rides} onFilterChange={handleFilterChange} />
      </Suspense>

      {/* Rides Grid */}
      <main className="grid gap-8 grid-cols-1">
        <Suspense
          fallback={
            <div className="space-y-8">
              {Array.from({ length: 6 }, (_, i) => (
                <div
                  // biome-ignore lint/suspicious/noArrayIndexKey: It's ok here
                  key={`skeleton-ride-${i}`}
                  className="animate-pulse bg-slate-800 rounded-xl border border-slate-700 p-6"
                >
                  <div className="h-6 bg-slate-700 rounded mb-4"></div>
                  <div className="h-4 bg-slate-700 rounded mb-2"></div>
                  <div className="h-4 bg-slate-700 rounded mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-8 bg-slate-700 rounded w-20"></div>
                    <div className="h-8 bg-slate-700 rounded w-20"></div>
                  </div>
                </div>
              ))}
            </div>
          }
        >
          {filteredRides.map((ride: Ride) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </Suspense>
      </main>
    </>
  );
}
