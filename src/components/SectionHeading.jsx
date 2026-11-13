import React from 'react';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'left',
  theme = 'light' // 'light' or 'dark'
}) {
  const isDark = theme === 'dark';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'
      }`}
    >
      {/* Category / Index Tag */}
      {tag && (
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`font-mono text-xs uppercase tracking-ultra font-semibold ${
              isDark ? 'text-burnt' : 'text-burnt'
            }`}
          >
            {tag}
          </span>
          <div
            className={`h-px flex-1 max-w-[40px] ${
              isDark ? 'bg-charcoal-50' : 'bg-ink-border'
            }`}
          />
        </div>
      )}

      {/* Main Heading */}
      <h2
        className={`font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] ${
          isDark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>

      {/* Subtitle / Context description */}
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-ink-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
