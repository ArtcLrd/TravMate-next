"use client";

import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/navigation";

// Ensure your .env has NEXT_PUBLIC_MAP_API_KEY
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_API_KEY || "";

interface BaseMapProps {
  center: [number, number]; // [Longitude, Latitude]
  zoom: number;
  interactive?: boolean;
}

export default function BaseMap({
  center,
  zoom,
  interactive = true,
}: BaseMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      // You can switch this to your Maptiler style URL if you prefer
      style: "mapbox://styles/mapbox/dark-v11",
      center: center,
      zoom: zoom,
      projection: { name: "globe" }, // Cool 3D globe effect
    });

    map.current.on("style.load", () => {
      map.current?.setFog({
        color: "rgb(186, 210, 235)", // Lower atmosphere
        "high-color": "rgb(36, 92, 223)", // Upper atmosphere
        "horizon-blend": 0.02, // Atmosphere thickness
        "space-color": "rgb(11, 11, 25)", // Background color
        "star-intensity": 0.6, // Background star brightness
      });
    });

    // Cleanup on unmount
    return () => map.current?.remove();
  }, [center, zoom]);

  return <div ref={mapContainer} className="w-full h-full" />;
}
