"use client";

import { useEffect, useMemo, useState } from "react";
import type { Ride, Weekday } from "@/data/rides";

type SpeedCategory = "casual" | "moderate" | "fast";
type TimeOfDay = "morning" | "afternoon";

interface FilterState {
  weekdays: Weekday[];
  speedCategories: SpeedCategory[];
  timeOfDay: TimeOfDay[];
}

interface FilterControlsProps {
  rides: Ride[];
  onFilterChange: (filteredRides: Ride[]) => void;
}

// Helper functions
const getTimeOfDay = (time: string): TimeOfDay => {
  const hour = parseInt(time.split(":")[0], 10);
  const isAM = time.includes("AM");
  const hour24 = isAM ? (hour === 12 ? 0 : hour) : hour === 12 ? 12 : hour + 12;
  return hour24 < 12 ? "morning" : "afternoon";
};

const getSpeedCategory = (avgSpeed: number): SpeedCategory => {
  if (avgSpeed < 18) return "casual";
  if (avgSpeed < 24) return "moderate";
  return "fast";
};

export default function FilterControls({
  rides,
  onFilterChange,
}: FilterControlsProps) {
  const [filters, setFilters] = useState<FilterState>({
    weekdays: [],
    speedCategories: [],
    timeOfDay: [],
  });

  // Filter rides based on current filter state
  const filteredRides = useMemo(
    () =>
      rides.filter((ride) => {
        let isVisible = true;

        // Filter by weekdays
        if (filters.weekdays.length > 0) {
          isVisible =
            isVisible &&
            ride.weekdays.some((day) => filters.weekdays.includes(day));
        }

        // Filter by speed categories
        if (filters.speedCategories.length > 0) {
          const speedCategory = getSpeedCategory(ride.averageSpeed);
          isVisible =
            isVisible && filters.speedCategories.includes(speedCategory);
        }

        // Filter by time of day
        if (filters.timeOfDay.length > 0) {
          const timeOfDay = getTimeOfDay(ride.startTime);
          isVisible = isVisible && filters.timeOfDay.includes(timeOfDay);
        }

        return isVisible;
      }),
    [rides, filters],
  );

  // Notify parent component of filtered rides
  useEffect(() => {
    onFilterChange(filteredRides);
  }, [filteredRides, onFilterChange]);

  const toggleFilter = (
    type: keyof FilterState,
    value: Weekday | SpeedCategory | TimeOfDay,
  ) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value as Weekday & SpeedCategory & TimeOfDay)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value as Weekday & SpeedCategory & TimeOfDay],
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      weekdays: [],
      speedCategories: [],
      timeOfDay: [],
    });
  };

  const weekdays: Weekday[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const speedCategories: SpeedCategory[] = ["casual", "moderate", "fast"];
  const timeOfDayOptions: TimeOfDay[] = ["morning", "afternoon"];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 mb-8 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-100 mb-4 md:mb-0">
          Filter Rides ({filteredRides.length} of {rides.length})
        </h2>
        <button
          type="button"
          onClick={clearAllFilters}
          className="text-sm text-slate-400 hover:text-slate-200 underline transition-colors"
        >
          Clear all filters
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Weekday Filter */}
        <div>
          <h3 className="font-medium text-slate-200 mb-4 flex items-center gap-2">
            <span className="text-blue-400">📅</span>
            Days of Week
          </h3>
          <div className="flex flex-wrap gap-2">
            {weekdays.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => toggleFilter("weekdays", day)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filters.weekdays.includes(day)
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600"
                }`}
              >
                {day.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>

        {/* Speed Filter */}
        <div>
          <h3 className="font-medium text-slate-200 mb-4 flex items-center gap-2">
            <span className="text-green-400">⚡</span>
            Pace
          </h3>
          <div className="flex flex-wrap gap-2">
            {speedCategories.map((speed) => (
              <button
                key={speed}
                type="button"
                onClick={() => toggleFilter("speedCategories", speed)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filters.speedCategories.includes(speed)
                    ? speed === "casual"
                      ? "bg-green-500 text-white shadow-lg shadow-green-500/25"
                      : speed === "moderate"
                        ? "bg-yellow-500 text-white shadow-lg shadow-yellow-500/25"
                        : "bg-red-500 text-white shadow-lg shadow-red-500/25"
                    : speed === "casual"
                      ? "bg-slate-700 text-green-300 hover:bg-slate-600 border border-slate-600"
                      : speed === "moderate"
                        ? "bg-slate-700 text-yellow-300 hover:bg-slate-600 border border-slate-600"
                        : "bg-slate-700 text-red-300 hover:bg-slate-600 border border-slate-600"
                }`}
              >
                {speed}
              </button>
            ))}
          </div>
        </div>

        {/* Time of Day Filter */}
        <div>
          <h3 className="font-medium text-slate-200 mb-4 flex items-center gap-2">
            <span className="text-orange-400">🌅</span>
            Time of Day
          </h3>
          <div className="flex flex-wrap gap-2">
            {timeOfDayOptions.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => toggleFilter("timeOfDay", time)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filters.timeOfDay.includes(time)
                    ? time === "morning"
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                    : time === "morning"
                      ? "bg-slate-700 text-blue-300 hover:bg-slate-600 border border-slate-600"
                      : "bg-slate-700 text-orange-300 hover:bg-slate-600 border border-slate-600"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
