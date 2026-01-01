"use client";
import BaseMap from "@/components/features/map/BaseMap";

export default function IndiaMap() {
  return (
    <BaseMap
      center={[78.9629, 20.5937]} // Center of India
      zoom={4}
    />
  );
}
