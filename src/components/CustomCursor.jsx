import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop/mouse devices
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handlePointerChange = (e) => setIsFinePointer(e.matches);
    mediaQuery.addEventListener('change', handlePointerChange);

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, [data-cursor="pointer"]');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      mediaQuery.removeEventListener('change', handlePointerChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Smooth trailing ring animation loop
  useEffect(() => {
    if (!isFinePointer) return;
    let animationFrame;
    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2,
      }));
      animationFrame = requestAnimationFrame(followCursor);
    };
    animationFrame = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationFrame);
  }, [pos, isFinePointer]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <>
      {/* Tiny solid center dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-burnt rounded-full pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0) scale(${isHovered ? 0 : 1})`,
        }}
      />
      {/* Smooth outer follower ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out border ${
          isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 bg-burnt/15 border-burnt scale-110'
            : 'w-8 h-8 -ml-4 -mt-4 border-charcoal/40 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      />
    </>
  );
}
