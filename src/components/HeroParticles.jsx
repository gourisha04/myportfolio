import React, { useEffect, useRef } from 'react';

/**
 * Abstract Connected Lines background:
 * - Thin, elegant curved lines connecting small nodes using quadratic curves
 * - Muted blue (#7189E8) and lavender (#A8B8F2) colors matching the Soft Midnight Blue palette
 * - Subdued, low-opacity aesthetic so content remains front and center
 * - Slow, organic floating motion
 * - High-DPI crisp rendering and responsive resize handling
 */
export default function HeroParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Responsive sizing with Device Pixel Ratio for crisp thin curves
    const setupCanvas = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.scale(dpr, dpr);
    };

    setupCanvas();

    const handleResize = () => {
      setupCanvas();
      reinitNodes();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Node count adapted to screen size for a visibly rich network
    const getNodeCount = () => {
      if (width < 640) return 30;
      if (width < 1024) return 46;
      return 62;
    };

    let nodes = [];
    const connectionDistance = width < 640 ? 135 : 180;
    const mouseRadius = 150;

    const mouse = {
      x: null,
      y: null,
      targetX: null,
      targetY: null,
    };

    // Visible, rich tones matching the Soft Midnight Blue theme on light canvas
    const nodePalette = [
      { fill: 'rgba(84, 110, 207, 0.85)', line: 'rgba(84, 110, 207, ' },   // Deep Accent #546ECF
      { fill: 'rgba(113, 137, 232, 0.9)', line: 'rgba(113, 137, 232, ' },  // Primary Accent #7189E8
      { fill: 'rgba(92, 107, 168, 0.8)', line: 'rgba(92, 107, 168, ' },   // Slate Lavender #5C6BA8
    ];

    class Node {
      constructor(id) {
        this.id = id;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Slow, graceful drift velocity
        this.vx = (Math.random() - 0.5) * 0.36;
        this.vy = (Math.random() - 0.5) * 0.36;
        // Visible, distinct node radius
        this.radius = Math.random() * 1.2 + 1.8;
        // Harmonic motion phase offset
        this.phase = Math.random() * Math.PI * 2;
        this.phaseSpeed = 0.0008 + Math.random() * 0.0006;
        this.theme = nodePalette[id % nodePalette.length];
      }

      update(time) {
        // Slow natural drift + subtle undulating harmonic wave
        const waveX = Math.cos(time * this.phaseSpeed + this.phase) * 0.14;
        const waveY = Math.sin(time * this.phaseSpeed + this.phase) * 0.14;

        this.x += this.vx + waveX;
        this.y += this.vy + waveY;

        // Wrap around margins smoothly
        const margin = 20;
        if (this.x < -margin) this.x = width + margin;
        if (this.x > width + margin) this.x = -margin;
        if (this.y < -margin) this.y = height + margin;
        if (this.y > height + margin) this.y = -margin;

        // Smooth mouse deflection
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius && dist > 0) {
            const force = (mouseRadius - dist) / mouseRadius;
            const dirX = dx / dist;
            const dirY = dy / dist;
            this.x -= dirX * force * 1.1;
            this.y -= dirY * force * 1.1;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.theme.fill;
        ctx.fill();
      }
    }

    const reinitNodes = () => {
      const count = getNodeCount();
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push(new Node(i));
      }
    };

    reinitNodes();

    const parent = canvas.parentElement;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = null;
      mouse.targetY = null;
    };

    parent.addEventListener('mousemove', handleMouseMove, { passive: true });
    parent.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    // Animation Loop
    let lastTime = 0;
    const animate = (time) => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        // Smooth mouse position easing
        if (mouse.targetX !== null && mouse.targetY !== null) {
          if (mouse.x === null) {
            mouse.x = mouse.targetX;
            mouse.y = mouse.targetY;
          } else {
            mouse.x += (mouse.targetX - mouse.x) * 0.1;
            mouse.y += (mouse.targetY - mouse.y) * 0.1;
          }
        } else {
          mouse.x = null;
          mouse.y = null;
        }

        const len = nodes.length;

        // 1. Draw elegant, thin curved lines between close nodes
        for (let i = 0; i < len; i++) {
          const n1 = nodes[i];

          for (let j = i + 1; j < len; j++) {
            const n2 = nodes[j];
            const dx = n2.x - n1.x;
            const dy = n2.y - n1.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
              // Normalized distance factor: close = distinct, far = gentle fade
              const proximity = 1 - dist / connectionDistance;
              // Clearly visible line opacity (up to 0.58)
              const alpha = (proximity * 0.58).toFixed(3);

              // Calculate midpoint
              const midX = (n1.x + n2.x) * 0.5;
              const midY = (n1.y + n2.y) * 0.5;

              // Perpendicular unit vector
              const normX = -dy / dist;
              const normY = dx / dist;

              // Gentle harmonic curvature offset that slowly breathes over time
              const curvePhase = time * 0.0006 + (n1.id + n2.id) * 0.6;
              const curveAmplitude = Math.sin(curvePhase) * (dist * 0.09);
              const cpX = midX + normX * curveAmplitude;
              const cpY = midY + normY * curveAmplitude;

              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.quadraticCurveTo(cpX, cpY, n2.x, n2.y);
              ctx.strokeStyle = `${n1.theme.line}${alpha})`;
              ctx.lineWidth = 1.15;
              ctx.stroke();
            }
          }

          // Subtle interactive connection to pointer
          if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - n1.x;
            const dy = mouse.y - n1.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
              const alpha = ((1 - dist / connectionDistance) * 0.65).toFixed(3);
              const midX = (n1.x + mouse.x) * 0.5;
              const midY = (n1.y + mouse.y) * 0.5;
              const normX = -(mouse.y - n1.y) / dist;
              const normY = (mouse.x - n1.x) / dist;
              const curveAmplitude = Math.sin(time * 0.001 + n1.id) * 10;

              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.quadraticCurveTo(
                midX + normX * curveAmplitude,
                midY + normY * curveAmplitude,
                mouse.x,
                mouse.y
              );
              ctx.strokeStyle = `rgba(84, 110, 207, ${alpha})`;
              ctx.lineWidth = 1.25;
              ctx.stroke();
            }
          }

          // Update node positions and draw nodes
          n1.update(time);
          n1.draw();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-95"
      style={{
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
      }}
      aria-hidden="true"
    />
  );
}
