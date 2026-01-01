"use client";
import BaseMap from "@/components/features/map/BaseMap";

export default function MahaMap() {
  return (
    <BaseMap
      center={[75.7139, 19.7515]} // Center of Maharashtra
      zoom={6.5}
    />
  );
}
