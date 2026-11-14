import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroBackground3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    // Renderer with alpha for transparent ivory background
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // ─────────────────────────────────────────────────────────────
    // Lighting — Warm ivory, peach, champagne and terracotta tones
    // ─────────────────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xfff7f0, 1.8);
    scene.add(ambientLight);

    // Key light (warm champagne top-left)
    const keyLight = new THREE.DirectionalLight(0xffebd9, 2.2);
    keyLight.position.set(-3.5, 4.0, 3.5);
    scene.add(keyLight);

    // Fill light (warm peach right)
    const fillLight = new THREE.DirectionalLight(0xf7d3c0, 1.6);
    fillLight.position.set(4.0, -1.0, 2.5);
    scene.add(fillLight);

    // Soft rim/bounce light (terracotta accent)
    const bounceLight = new THREE.PointLight(0xe87545, 1.2, 12);
    bounceLight.position.set(0.2, -1.8, 1.5);
    scene.add(bounceLight);

    // ─────────────────────────────────────────────────────────────
    // Materials
    // ─────────────────────────────────────────────────────────────
    // Metallic Champagne-Gold
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xdeb896,
      metalness: 0.88,
      roughness: 0.18,
      envMapIntensity: 1.2
    });

    // Translucent Frosted Glass / Crystal (Peach/Ivory tint)
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfff0e6,
      metalness: 0.05,
      roughness: 0.18,
      transmission: 0.82,
      thickness: 0.6,
      ior: 1.48,
      transparent: true,
      opacity: 0.72,
      side: THREE.DoubleSide
    });

    // Soft Translucent Silk Waves (Champagne-Peach)
    const waveMaterial1 = new THREE.MeshPhysicalMaterial({
      color: 0xf6dbcf,
      metalness: 0.08,
      roughness: 0.32,
      transmission: 0.55,
      thickness: 0.4,
      transparent: true,
      opacity: 0.75,
      side: THREE.DoubleSide
    });

    const waveMaterial2 = new THREE.MeshPhysicalMaterial({
      color: 0xf4cbb8,
      metalness: 0.12,
      roughness: 0.28,
      transmission: 0.45,
      thickness: 0.3,
      transparent: true,
      opacity: 0.68,
      side: THREE.DoubleSide
    });

    // ─────────────────────────────────────────────────────────────
    // 1. Soft, Flowing 3D Waves / Silk Ribbons
    // ─────────────────────────────────────────────────────────────
    // Primary graceful flowing wave sweeping from top-right down to center-left
    const ribbonGroup = new THREE.Group();

    function createFlowingRibbon(curvePoints, width, segments, material) {
      const curve = new THREE.CatmullRomCurve3(curvePoints);
      const geom = new THREE.BufferGeometry();
      const positions = [];
      const normals = [];
      const uvs = [];
      const indices = [];

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const pt = curve.getPoint(t);
        const tangent = curve.getTangent(t);
        
        // Compute up and binormal
        const up = new THREE.Vector3(0, 0, 1);
        const normal = new THREE.Vector3().crossVectors(tangent, up).normalize();
        
        // Undulate width slightly along the ribbon
        const w = width * (0.8 + 0.4 * Math.sin(t * Math.PI));
        
        // Two vertices across the ribbon width
        const v1 = new THREE.Vector3().copy(pt).addScaledVector(normal, w);
        const v2 = new THREE.Vector3().copy(pt).addScaledVector(normal, -w);
        
        positions.push(v1.x, v1.y, v1.z);
        positions.push(v2.x, v2.y, v2.z);
        
        normals.push(0, 0, 1, 0, 0, 1);
        uvs.push(t, 0, t, 1);

        if (i < segments) {
          const a = i * 2;
          const b = a + 1;
          const c = a + 2;
          const d = a + 3;
          indices.push(a, b, c);
          indices.push(b, d, c);
        }
      }

      geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geom.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
      geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geom.setIndex(indices);
      geom.computeVertexNormals();

      return new THREE.Mesh(geom, material);
    }

    // Ribbon 1: Sweeps from right edge behind photo card through bottom
    const ribbonPoints1 = [
      new THREE.Vector3(3.6, 2.2, -0.7),
      new THREE.Vector3(2.6, 1.2, -0.4),
      new THREE.Vector3(1.6, 0.3, -0.2),
      new THREE.Vector3(0.6, -0.5, -0.1),
      new THREE.Vector3(-0.8, -1.0, -0.3),
      new THREE.Vector3(-2.4, -1.3, -0.6),
      new THREE.Vector3(-3.8, -1.5, -0.9)
    ];
    const ribbon1 = createFlowingRibbon(ribbonPoints1, 0.45, 90, waveMaterial1);
    ribbonGroup.add(ribbon1);

    // Ribbon 2: Secondary overlapping subtle wave for layered depth
    const ribbonPoints2 = [
      new THREE.Vector3(3.8, 1.6, -0.9),
      new THREE.Vector3(2.2, 0.7, -0.5),
      new THREE.Vector3(1.1, -0.3, -0.3),
      new THREE.Vector3(-0.2, -0.9, -0.4),
      new THREE.Vector3(-1.8, -1.2, -0.7),
      new THREE.Vector3(-3.4, -1.4, -1.1)
    ];
    const ribbon2 = createFlowingRibbon(ribbonPoints2, 0.35, 75, waveMaterial2);
    ribbonGroup.add(ribbon2);

    scene.add(ribbonGroup);

    // ─────────────────────────────────────────────────────────────
    // 2. Small Metallic Champagne-Gold Spheres
    // ─────────────────────────────────────────────────────────────
    const sphereGeom = new THREE.SphereGeometry(1, 48, 48);

    // Sphere 1: Top-Left (as seen in reference)
    const sphereTopLeft = new THREE.Mesh(sphereGeom, goldMaterial);
    sphereTopLeft.scale.setScalar(0.18);
    sphereTopLeft.position.set(-2.8, 1.35, 0.2);
    scene.add(sphereTopLeft);

    // Sphere 2: Bottom-Center (as seen in reference)
    const sphereBottomCenter = new THREE.Mesh(sphereGeom, goldMaterial);
    sphereBottomCenter.scale.setScalar(0.13);
    sphereBottomCenter.position.set(0.3, -1.5, 0.1);
    scene.add(sphereBottomCenter);

    // ─────────────────────────────────────────────────────────────
    // 3. Minimal Floating 3D Ring (Torus) on Right
    // ─────────────────────────────────────────────────────────────
    const torusGeom = new THREE.TorusGeometry(0.34, 0.08, 32, 64);
    const torusRing = new THREE.Mesh(torusGeom, goldMaterial);
    torusRing.position.set(3.05, 0.25, 0.1);
    torusRing.rotation.set(0.65, 0.55, 0.25);
    scene.add(torusRing);

    // ─────────────────────────────────────────────────────────────
    // 4. Translucent Frosted Glass Cube at Bottom-Right
    // ─────────────────────────────────────────────────────────────
    const boxGeom = new THREE.BoxGeometry(0.44, 0.44, 0.44);
    const glassCube = new THREE.Mesh(boxGeom, glassMaterial);
    glassCube.position.set(2.85, -1.4, 0.2);
    glassCube.rotation.set(0.72, 0.65, 0.38);
    scene.add(glassCube);

    // ─────────────────────────────────────────────────────────────
    // 5. Minimal Center Ring Accent
    // ─────────────────────────────────────────────────────────────
    const centerTorusGeom = new THREE.TorusGeometry(0.11, 0.022, 24, 48);
    const terracottaMat = new THREE.MeshStandardMaterial({
      color: 0xe87545,
      metalness: 0.6,
      roughness: 0.3
    });
    const centerRing = new THREE.Mesh(centerTorusGeom, terracottaMat);
    centerRing.position.set(0.55, -0.1, 0.05);
    centerRing.rotation.set(0.4, 0.3, 0.1);
    scene.add(centerRing);

    // ─────────────────────────────────────────────────────────────
    // Mouse Parallax & Animation Loop
    // ─────────────────────────────────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      targetMouseX = (x - 0.5) * 2; // -1 to 1
      targetMouseY = (y - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      if (!prefersReducedMotion) {
        // Slow floating & breathing for waves
        ribbon1.position.y = Math.sin(elapsed * 0.55) * 0.06;
        ribbon1.position.z = Math.cos(elapsed * 0.45) * 0.05;
        ribbon2.position.y = Math.sin(elapsed * 0.6 + 1.2) * 0.05;

        // Spheres gentle floating
        sphereTopLeft.position.y = 1.35 + Math.sin(elapsed * 0.8) * 0.05;
        sphereTopLeft.position.x = -2.8 + Math.cos(elapsed * 0.6) * 0.03;
        sphereTopLeft.rotation.y = elapsed * 0.15;

        sphereBottomCenter.position.y = -1.5 + Math.sin(elapsed * 0.9 + 2.0) * 0.04;
        sphereBottomCenter.position.x = 0.3 + Math.cos(elapsed * 0.7) * 0.03;

        // Torus Ring slow elegant 3D rotation
        torusRing.rotation.x = 0.65 + Math.sin(elapsed * 0.4) * 0.12;
        torusRing.rotation.y = 0.55 + elapsed * 0.22;
        torusRing.position.y = 0.25 + Math.sin(elapsed * 0.7 + 0.5) * 0.06;

        // Glass Cube slow isometric tumbling
        glassCube.rotation.x = 0.72 + elapsed * 0.18;
        glassCube.rotation.y = 0.65 + elapsed * 0.14;
        glassCube.position.y = -1.4 + Math.sin(elapsed * 0.75 + 1.5) * 0.05;

        // Center ring gentle spin
        centerRing.rotation.z = elapsed * 0.25;
        centerRing.position.y = -0.1 + Math.sin(elapsed * 0.65) * 0.03;

        // Parallax camera movement
        camera.position.x = mouseX * 0.25;
        camera.position.y = -mouseY * 0.18;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    // ─────────────────────────────────────────────────────────────
    // Responsive Resize Handler
    // ─────────────────────────────────────────────────────────────
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;

      // Adjust camera distance for mobile vs desktop so objects frame nicely
      if (width < 640) {
        camera.position.z = 6.8;
      } else if (width < 1024) {
        camera.position.z = 5.8;
      } else {
        camera.position.z = 5.2;
      }

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Initial resize trigger
    handleResize();

    // ─────────────────────────────────────────────────────────────
    // Cleanup
    // ─────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();

      // Dispose Three.js resources
      [ribbon1, ribbon2, sphereTopLeft, sphereBottomCenter, torusRing, glassCube, centerRing].forEach((mesh) => {
        if (mesh.geometry) mesh.geometry.dispose();
      });

      [goldMaterial, glassMaterial, waveMaterial1, waveMaterial2, terracottaMat].forEach((mat) => {
        mat.dispose();
      });

      renderer.dispose();

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    />
  );
}
