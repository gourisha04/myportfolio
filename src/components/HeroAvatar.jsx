import React, { useState, useRef } from 'react';

export default function HeroAvatar() {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 10; // Max 10 deg tilt
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransform({ rotateX, rotateY, scale: 1.03 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center p-4 sm:p-6"
      style={{ perspective: '1000px' }}
    >
      {/* Ambient background glow */}
      <div
        className="absolute w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-burnt/25 via-burnt/10 to-transparent blur-3xl -z-10 pointer-events-none transition-transform duration-700"
        style={{
          transform: isHovered ? 'scale(1.15)' : 'scale(1)',
        }}
      />

      {/* Outer decorative glowing ring */}
      <div
        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2.5 sm:p-3 bg-gradient-to-b from-burnt/40 via-ivory-300 to-burnt/20 shadow-2xl transition-all duration-300 ease-out"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(232, 117, 69, 0.25), 0 0 40px rgba(232, 117, 69, 0.15)'
            : '0 20px 40px -15px rgba(23, 23, 23, 0.12)',
        }}
      >
        {/* Inner container with soft backdrop and border */}
        <div className="w-full h-full rounded-full bg-gradient-to-b from-white to-ivory-100 border-2 border-white/80 overflow-hidden flex items-center justify-center relative shadow-inner">
          
          {/* Subtle background circle pattern */}
          <div className="absolute inset-0 bg-radial-gradient from-burnt/5 to-transparent pointer-events-none" />

          {/* 3D Cartoon Avatar */}
          <img
            src="/avatar.png"
            alt="Gourisha Rathore — 3D Developer Avatar"
            className="w-[90%] h-[90%] object-contain object-bottom drop-shadow-xl select-none pointer-events-none transition-transform duration-500 ease-out"
            style={{
              transform: isHovered ? 'scale(1.05) translateY(-4px)' : 'scale(1)',
            }}
            loading="eager"
            draggable="false"
          />

          {/* Bottom subtle gradient vignette */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-burnt/15 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
