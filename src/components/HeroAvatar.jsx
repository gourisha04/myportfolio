import React, { useState, useRef } from 'react';

export default function HeroAvatar() {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    // Only apply tilt on non-touch devices
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTransform({ rotateX, rotateY, scale: 1.025 });
  };

  const handleMouseEnter = () => setIsHovered(true);
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
      className="relative flex items-center justify-center p-2 sm:p-4 lg:p-6 w-full max-w-[320px] sm:max-w-none mx-auto"
      style={{ perspective: '1000px' }}
    >
      {/* Ambient background glow in soft lavender-blue */}
      <div
        className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-[#7189E8]/20 via-[#A8B8F2]/20 to-transparent blur-2xl sm:blur-3xl -z-10 pointer-events-none transition-transform duration-700"
        style={{
          transform: isHovered ? 'scale(1.15)' : 'scale(1)',
        }}
      />

      {/* Outer circular glowing frame - responsive sizing */}
      <div
        className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 sm:p-3 bg-gradient-to-b from-[#A8B8F2]/50 via-[#F8FAFD] to-[#7189E8]/30 shadow-xl transition-all duration-300 ease-out border border-[#A8B8F2]/50"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(113, 137, 232, 0.25), 0 0 35px rgba(168, 184, 242, 0.3)'
            : '0 15px 35px -10px rgba(36, 51, 77, 0.12)',
        }}
      >
        {/* Inner container */}
        <div className="w-full h-full rounded-full bg-[#F8FAFD] border-2 border-[#A8B8F2]/30 overflow-hidden flex items-center justify-center relative shadow-inner">
          <img
            src="/avatar.png"
            alt="Gourisha Rathore — Friendly Waving Avatar"
            className="w-full h-full object-cover object-center select-none pointer-events-none transition-transform duration-500 ease-out"
            style={{
              transform: isHovered ? 'scale(1.04)' : 'scale(1)',
            }}
            loading="eager"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
