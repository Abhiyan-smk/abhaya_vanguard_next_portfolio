 "use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { useMemo, useRef } from "react";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}
import * as THREE from "three";

function InstancedNodes() {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const count = 850;

  const points = useMemo(() => {
    return Array.from({ length: count }, (_, index) => {
      const radius = 3.4 + Math.sin(index * 0.19) * 0.8;
      const angle = index * 0.29;
      return {
        x: Math.cos(angle) * radius + (seededRandom(index * 7 + 1) - 0.5) * 1.4,
        y: (seededRandom(index * 7 + 2) - 0.5) * 4.8,
        z: Math.sin(angle) * radius + (seededRandom(index * 7 + 3) - 0.5) * 1.4,
        s: 0.012 + seededRandom(index * 7 + 4) * 0.035,
        phase: seededRandom(index * 7 + 5) * Math.PI * 2
      };
    });
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!mesh.current) return;
    const time = clock.getElapsedTime();

    points.forEach((point, index) => {
      const inertiaX = pointer.x * 0.45;
      const inertiaY = pointer.y * 0.25;
      dummy.position.set(
        point.x + Math.sin(time * 0.55 + point.phase) * 0.08 + inertiaX,
        point.y + Math.cos(time * 0.45 + point.phase) * 0.08 + inertiaY,
        point.z + Math.sin(time * 0.22 + point.phase) * 0.14
      );
      const scale = point.s * (1 + Math.sin(time + point.phase) * 0.18);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(index, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
    mesh.current.rotation.y = time * 0.045;
    mesh.current.rotation.x = Math.sin(time * 0.15) * 0.05;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#f5c542" transparent opacity={0.52} />
    </instancedMesh>
  );
}

function GlassPlane() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        uniforms: {
          uTime: { value: 0 },
          uColorA: { value: new THREE.Color("#f5c542") },
          uColorB: { value: new THREE.Color("#ffffff") }
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec3 p = position;
            p.z += sin((p.x + p.y) * 2.8) * 0.08;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          precision highp float;
          varying vec2 vUv;
          uniform float uTime;
          uniform vec3 uColorA;
          uniform vec3 uColorB;

          float noise(vec2 p) {
            return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453123);
          }

          void main() {
            vec2 uv = vUv;
            float wave = sin((uv.x + uv.y + uTime * .12) * 10.0) * .5 + .5;
            float grain = noise(uv * 120.0 + uTime) * .055;
            vec3 color = mix(uColorA, uColorB, wave * .35 + grain);
            float alpha = smoothstep(.05, .55, wave) * .18;
            gl_FragColor = vec4(color, alpha);
          }
        `
      }),
    []
  );

  useFrame(({ clock }) => {
    material.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <Float speed={1.4} rotationIntensity={0.26} floatIntensity={0.36}>
      <mesh rotation={[0.8, -0.3, 0.1]} position={[1.6, 0.2, -1.8]} material={material}>
        <planeGeometry args={[5.6, 3.2, 64, 64]} />
      </mesh>
    </Float>
  );
}

export function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas dpr={[1, 1.7]} performance={{ min: 0.45 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={42} />
        <ambientLight intensity={1.2} />
        <InstancedNodes />
        <GlassPlane />
      </Canvas>
    </div>
  );
}
