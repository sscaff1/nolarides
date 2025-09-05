"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useState, useEffect } from "react";

interface MapComponentProps {
  location: string;
  rideName: string;
}

// Default coordinates for New Orleans (fallback)
const DEFAULT_COORDS: [number, number] = [29.9511, -90.0715];

// Function to geocode an address to coordinates using Google Geocoding API
async function geocodeAddress(address: string): Promise<[number, number]> {
  try {
    // Use Google Geocoding API (requires API key)
    const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    console.log("GOOGLE_API_KEY", GOOGLE_API_KEY);
    console.log("address", address);
    if (GOOGLE_API_KEY) {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GOOGLE_API_KEY}`,
      );
      const data = await response.json();
      console.log("data", data);
      if (data.status === "OK" && data.results && data.results.length > 0) {
        const location = data.results[0].geometry.location;
        return [location.lat, location.lng];
      }
    }

    // Fallback to OpenStreetMap's Nominatim geocoding service (free)
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1&addressdetails=1`,
    );
    const data = await response.json();

    if (data && data.length > 0) {
      return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    }
  } catch (error) {
    console.warn("Geocoding failed for:", address, error);
  }

  // Fallback to default New Orleans coordinates
  return DEFAULT_COORDS;
}

export default function MapComponent({
  location,
  rideName,
}: MapComponentProps) {
  const [coords, setCoords] = useState<[number, number]>(DEFAULT_COORDS);
  const [isLoading, setIsLoading] = useState(true);

  // Geocode the location when component mounts or location changes
  useEffect(() => {
    const getCoordinates = async () => {
      setIsLoading(true);

      // Always geocode the address to get accurate coordinates
      console.log("Geocoding address:", location);
      const newCoords = await geocodeAddress(location);
      console.log("Geocoded coordinates:", newCoords);
      setCoords(newCoords);
      setIsLoading(false);
    };

    getCoordinates();
  }, [location]);

  // Use Leaflet's default icon to avoid encoding issues
  const bikeIcon = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  // Show loading state while geocoding
  if (isLoading) {
    return (
      <div className="relative rounded-lg overflow-hidden border border-slate-600 h-40">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl mb-2 animate-pulse">🗺️</div>
            <div className="text-sm text-slate-300">Finding location...</div>
          </div>
        </div>

        {/* Map overlay with location info */}
        <div className="absolute top-2 left-2 bg-slate-800/90 text-slate-200 text-xs px-2 py-1 rounded border border-slate-600 backdrop-blur-sm">
          📍 {rideName}
        </div>

        <div className="absolute bottom-2 right-2 bg-slate-800/90 text-slate-200 text-xs px-2 py-1 rounded border border-slate-600 backdrop-blur-sm">
          🚴‍♂️ Start Point
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden border border-slate-600 h-40">
      <MapContainer
        center={coords}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords} icon={bikeIcon}>
          <Popup>
            <div className="text-center">
              <div className="font-bold text-slate-800 mb-1">{rideName}</div>
              <div className="text-sm text-slate-600 mb-2">
                🚴‍♂️ Start Location
              </div>
              <div className="text-xs text-slate-500">{location}</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Map overlay with location info */}
      <div className="absolute top-2 left-2 bg-slate-800/90 text-slate-200 text-xs px-2 py-1 rounded border border-slate-600 backdrop-blur-sm">
        📍 {rideName}
      </div>

      <div className="absolute bottom-2 right-2 bg-slate-800/90 text-slate-200 text-xs px-2 py-1 rounded border border-slate-600 backdrop-blur-sm">
        🚴‍♂️ Start Point
      </div>
    </div>
  );
}
