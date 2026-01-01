"use client";

import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { X, Check } from "lucide-react";

// Make sure this is in your .env file!
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_API_KEY || "";

export default function TrailMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const originRef = useRef<[number, number] | null>(null);
  const destinationRef = useRef<[number, number] | null>(null);

  const [panelOpen, setPanelOpen] = useState(false);
  const [selectedPOI, setSelectedPOI] = useState<any>({
    name: "",
    coords: null,
  });
  const [isSettingDestination, setIsSettingDestination] = useState(false);
  const [isSettingStart, setIsSettingStart] = useState(false);
  const [travelMode, setTravelMode] = useState("driving-car");
  const [originName, setOriginName] = useState("");

  // Refs for callbacks
  const selectionRef = useRef(false);
  const pointTypeRef = useRef("");

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12", // Standard Mapbox style
      center: [72.8777, 19.076],
      zoom: 10,
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken || "",
      mapboxgl: mapboxgl as any,
      marker: false,
      placeholder: "Search for places",
    });

    geocoder.on("result", (e) => {
      const center = e.result.center as [number, number];
      if (selectionRef.current) {
        originRef.current = center;
        setOriginName(e.result.place_name);
        console.log("Origin set via Search: ", center);
      }
    });

    map.current.addControl(geocoder, "top-left");
    map.current.addControl(new mapboxgl.NavigationControl(), "bottom-left");

    map.current.on("load", async () => {
      if (!map.current) return;
      try {
        // UPDATED API ROUTE HERE
        const res = await fetch("/api/locations");
        const locations = await res.json();

        const geojsonData: any = {
          type: "FeatureCollection",
          features: locations.map((loc: any, index: number) => {
            const [lat, lon] = loc.coords.split(",").map(Number);
            return {
              type: "Feature",
              id: index,
              properties: {
                title: loc.locationname,
                description: `<strong>${loc.locationname}</strong><p>${loc.statename}</p>`,
              },
              geometry: { type: "Point", coordinates: [lon, lat] },
            };
          }),
        };

        map.current.addSource("places", { type: "geojson", data: geojsonData });
        map.current.addLayer({
          id: "places",
          type: "circle",
          source: "places",
          paint: {
            "circle-color": "#4264fb",
            "circle-radius": 6,
            "circle-stroke-width": 2,
            "circle-stroke-color": "#ffffff",
          },
        });

        // Click Handling
        map.current.on("click", "places", (e) => {
          if (!e.features?.[0]) return;
          // @ts-ignore
          const coordinates = e.features[0].geometry.coordinates.slice();
          const title = e.features[0].properties?.title;

          setSelectedPOI({ name: title, coords: coordinates });
          setPanelOpen(true);

          if (selectionRef.current && pointTypeRef.current === "destination") {
            destinationRef.current = coordinates;
            setIsSettingDestination(false);
            selectionRef.current = false;
          }
        });

        // Mouse Cursor
        map.current.on("mouseenter", "places", () => {
          if (map.current) map.current.getCanvas().style.cursor = "pointer";
        });
        map.current.on("mouseleave", "places", () => {
          if (map.current) map.current.getCanvas().style.cursor = "";
        });
      } catch (err) {
        console.error("Failed to load locations", err);
      }
    });
  }, []);

  const getRoute = async () => {
    if (!originRef.current || !destinationRef.current || !map.current) return;

    try {
      // UPDATED API ROUTE HERE
      const res = await fetch("/api/route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          coordinates: [originRef.current, destinationRef.current],
          mode: travelMode,
        }),
      });
      const data = await res.json();

      // Handle Route Layer
      if (map.current.getSource("route")) {
        (map.current.getSource("route") as mapboxgl.GeoJSONSource).setData(
          data
        );
      } else {
        map.current.addSource("route", { type: "geojson", data: data });
        map.current.addLayer({
          id: "route",
          type: "line",
          source: "route",
          layout: { "line-join": "round", "line-cap": "round" },
          paint: { "line-color": "#ff5733", "line-width": 4 },
        });
      }
    } catch (err) {
      console.error("Route error:", err);
    }
  };

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="w-full h-full" />

      {/* Side Panel UI - Same as your old code, simplified classes */}
      {panelOpen && (
        <div className="absolute top-0 right-0 h-full w-80 bg-white shadow-2xl z-20 p-4 transition-transform">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl">{selectedPOI.name}</h2>
            <button onClick={() => setPanelOpen(false)}>
              <X />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                const toggled = !isSettingDestination;
                setIsSettingDestination(toggled);
                selectionRef.current = toggled;
                pointTypeRef.current = toggled ? "destination" : "";
                if (toggled && selectedPOI.coords)
                  destinationRef.current = selectedPOI.coords;
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded text-white ${
                isSettingDestination ? "bg-red-500" : "bg-violet-600"
              }`}
            >
              <Check size={16} />{" "}
              {isSettingDestination ? "Cancel" : "Set as Destination"}
            </button>

            <button
              onClick={() => {
                const toggled = !isSettingStart;
                setIsSettingStart(toggled);
                selectionRef.current = toggled;
              }}
              className={`px-4 py-2 rounded text-white ${
                isSettingStart ? "bg-red-500" : "bg-violet-600"
              }`}
            >
              Set Starting Point
            </button>

            {isSettingStart && (
              <div className="bg-gray-100 p-2 rounded">
                <p className="text-sm mb-2">
                  {originName || "Search or click map to select origin"}
                </p>
                <button
                  onClick={getRoute}
                  className="w-full bg-blue-600 text-white py-1 rounded"
                >
                  Get Route
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
