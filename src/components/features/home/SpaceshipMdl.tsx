"use client";

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SpaceshipModel(props: any) {
  const group = useRef<THREE.Group>(null);

  // Load the model
  const { nodes, materials } = useGLTF("/spaceship.gltf") as any;

  // Debug: Log the actual node names to the console so you can see them
  useEffect(() => {
    console.log("GLTF Nodes found:", Object.keys(nodes));
    console.log("GLTF Materials found:", Object.keys(materials));
  }, [nodes, materials]);

  // Floating animation
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      group.current.position.y = Math.sin(t / 1.5) / 10;
      group.current.rotation.z = Math.sin(t / 2) / 20;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Instead of hardcoding "Cube005", we map through ALL nodes 
         and render anything that is a Mesh.
      */}
      {Object.entries(nodes).map(([name, node]: [string, any]) => {
        if (node.isMesh) {
          return (
            <mesh
              key={name}
              castShadow
              receiveShadow
              geometry={node.geometry}
              material={node.material}
            />
          );
        }
        return null;
      })}
    </group>
  );
}

// Preload to prevent lag
useGLTF.preload("/spaceship.gltf");
