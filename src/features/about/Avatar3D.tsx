"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useCursorPosition } from '@/hooks/useCursorPosition';

export function Avatar3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { x, y } = useCursorPosition();

  useEffect(() => {
    if (!containerRef.current) return;

    // Basic Three.js Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: containerRef.current!.querySelector('canvas')!,
      alpha: true,
      antialias: true
    });

    renderer.setSize(300, 300);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create a high-end "Robot/Avatar" using a group of shapes
    const avatarGroup = new THREE.Group();

    // Head
    const headGeo = new THREE.IcosahedronGeometry(1, 2);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      wireframe: true,
      emissive: 0xD4AF37,
      emissiveIntensity: 0.5
    });
    const head = new THREE.Mesh(headGeo, headMat);
    avatarGroup.add(head);

    // Core
    const coreGeo = new THREE.SphereGeometry(0.4, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff });
    const core = new THREE.Mesh(coreGeo, coreMat);
    avatarGroup.add(core);

    scene.add(avatarGroup);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);

      // Eye-tracking logic: rotate avatar towards cursor
      // x is -1 to 1, y is -1 to 1
      avatarGroup.rotation.y = x * 0.5;
      avatarGroup.rotation.x = -y * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, [x, y]);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center">
      <canvas className="w-full h-full" />
    </div>
  );
}
