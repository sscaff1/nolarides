"use client";

import { Suspense, useCallback, useState } from "react";
import FilterControls from "@/components/FilterControls";
import RideCard from "@/components/RideCard";
import type { Ride } from "@/data/rides";

interface RidesDisplayProps {
  rides: Ride[];
}

// Sort rides by day of the week starting with Monday
const sortRidesByWeekday = (rides: Ride[]) => {
  const weekdayOrder = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return rides.toSorted((a, b) => {
    const aFirstDay = a.weekdays[0];
    const bFirstDay = b.weekdays[0];

    const aIndex = weekdayOrder.indexOf(aFirstDay);
    const bIndex = weekdayOrder.indexOf(bFirstDay);

    return aIndex - bIndex;
  });
};

export default function RidesDisplay({ rides }: RidesDisplayProps) {
  const [filteredRides, setFilteredRides] = useState<Ride[]>(rides);
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = useCallback((newFilteredRides: Ride[]) => {
    setFilteredRides(newFilteredRides);
  }, []);

  const sortedRides = sortRidesByWeekday(filteredRides);

  return (
    <>
      {/* Filter Toggle Button */}
      <div className="mb-6">
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className="inline-flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-slate-200 px-4 py-2 rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-200"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${showFilters ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-label="Toggle filters"
          >
            <title>Toggle filters</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>Filters</span>
          {filteredRides.length !== rides.length && (
            <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
              {filteredRides.length}
            </span>
          )}
        </button>
      </div>

      {/* Filter Controls */}
      {showFilters && (
        <Suspense
          fallback={
            <div className="animate-pulse bg-slate-800 h-20 rounded-xl mb-8 border border-slate-700"></div>
          }
        >
          <div className="mb-8">
            <FilterControls rides={rides} onFilterChange={handleFilterChange} />
          </div>
        </Suspense>
      )}

      {/* Rides Grid */}
      <main className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        <Suspense
          fallback={
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
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
          {sortedRides.map((ride: Ride) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </Suspense>
      </main>
    </>
  );
}
