"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useRouter } from "next/navigation";
import SpaceshipModel from "@/components/features/home/SpaceshipMdl";

export default function Home() {
  const router = useRouter();
  const [zoom, setZoom] = useState(false);

  const handleEnter = () => {
    setZoom(true);
    // Wait for animation then navigate
    setTimeout(() => {
      router.push("/map/state/Maharashtra"); // New Route!
    }, 1500);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* UI Overlay */}
      <div
        className={`absolute z-10 inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
          zoom ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1 className="text-6xl font-bold text-white mb-8 tracking-tighter">
          TRAVMATE
        </h1>
        <button
          onClick={handleEnter}
          className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/30 backdrop-blur-sm transition-all"
        >
          Enter Experience
        </button>
      </div>

      {/* 3D Scene */}
      <div
        className={`w-full h-full transition-transform duration-1500 ease-in-out ${
          zoom ? "scale-[3]" : "scale-100"
        }`}
      >
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <SpaceshipModel scale={[0.5, 0.5, 0.5]} />
            <Environment preset="city" />
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
