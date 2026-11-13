import React from 'react';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'left',
  theme = 'light' // 'light' or 'dark'
}) {
  const isDark = theme === 'dark';
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
          <span
            className={`font-mono text-xs uppercase tracking-ultra font-semibold ${
              isDark ? 'text-burnt' : 'text-burnt'
            }`}
          >
            {tag}
          </span>
          <div
            className={`h-px max-w-[36px] w-full ${
              isDark ? 'bg-charcoal-50' : 'bg-ink-border'
            }`}
          />
        </div>
      )}

      {/* Main Heading */}
      <h2
        className={`font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-[1.18] ${
          isDark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>

      {/* Subtitle / Context description */}
      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-ink-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
