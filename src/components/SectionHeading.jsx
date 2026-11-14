import React from 'react';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'left'
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-8 sm:mb-10 ${
        isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'
      }`}
    >
      {/* Category / Index Tag */}
      {tag && (
        <div className={`flex items-center gap-3 mb-2.5 ${isCenter ? 'justify-center' : ''}`}>
          <span className="font-mono text-xs uppercase tracking-ultra font-semibold text-[#7189E8]">
            {tag}
          </span>
          <div className="h-px max-w-[36px] w-full bg-[#7189E8]/35" />
        </div>
      )}

      {/* Main Heading */}
      <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-[1.18] text-[#24334D]">
        {title}
      </h2>

      {/* Subtitle / Context description */}
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#687891]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
