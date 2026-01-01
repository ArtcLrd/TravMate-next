"use client";

import { useParams } from "next/navigation";
import IndiaMap from "@/components/countries/India";
import MahaMap from "@/components/states/Maharashtra";
import Link from "next/link";

export default function MapPage() {
  const params = useParams();
  // Ensure stateName is a string, handle generic/undefined cases
  const stateName =
    typeof params?.stateName === "string" ? params.stateName.toLowerCase() : "";

  // Simple Logic to switch maps
  const renderMap = () => {
    if (stateName === "maharashtra") {
      return <MahaMap />;
    }
    // Default to India map if route is just /map/india or unknown
    return <IndiaMap />;
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-zinc-950">
      {/* Navigation Overlay */}
      <div className="absolute top-4 left-4 z-50 flex gap-4">
        <Link
          href="/"
          className="px-4 py-2 bg-white/10 text-white rounded backdrop-blur hover:bg-white/20"
        >
          Home
        </Link>
        {stateName !== "india" && (
          <Link
            href="/map/india"
            className="px-4 py-2 bg-blue-600/20 text-blue-200 rounded backdrop-blur hover:bg-blue-600/40"
          >
            Back to India
          </Link>
        )}
        <Link
          href="/trail"
          className="px-4 py-2 bg-green-600/20 text-green-200 rounded backdrop-blur hover:bg-green-600/40"
        >
          Go to Trail
        </Link>
      </div>

      {/* The Map */}
      {renderMap()}
    </div>
  );
}
