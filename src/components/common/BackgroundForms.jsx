import React from 'react';

/**
 * Subtle decorative background shapes for white/light sections.
 * Uses primary and accent colors with gradients so they are visible and blend together.
 */
export default function BackgroundForms({ variant = 'circles' }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {variant === 'circles' && (
        <>
          {/* Large ring — top right */}
          <div className="absolute -top-44 -right-44 w-[500px] h-[500px] rounded-full border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/5" />
          {/* Medium ring — bottom left */}
          <div className="absolute -bottom-36 -left-36 w-[380px] h-[380px] rounded-full border-2 border-accent/20 bg-gradient-to-tr from-accent/10 to-primary/5" />
          {/* Small ring — middle left */}
          <div className="absolute top-1/3 -left-14 w-52 h-52 rounded-full border border-primary/30 bg-gradient-to-r from-primary/5 to-accent/10" />
          {/* Dot cluster — upper left */}
          <div className="absolute top-[14%] left-[7%] w-3 h-3 rounded-full bg-gradient-to-br from-primary/50 to-accent/40" />
          <div className="absolute top-[21%] left-[12%] w-2 h-2 rounded-full bg-gradient-to-br from-accent/50 to-primary/40" />
          <div className="absolute top-[17%] left-[17%] w-1.5 h-1.5 rounded-full bg-primary/40" />
          {/* Dot cluster — lower right */}
          <div className="absolute bottom-[18%] right-[7%] w-3 h-3 rounded-full bg-gradient-to-tl from-accent/50 to-primary/40" />
          <div className="absolute bottom-[26%] right-[12%] w-2 h-2 rounded-full bg-gradient-to-br from-primary/40 to-accent/30" />
          {/* Single accent dot */}
          <div className="absolute top-[65%] left-[42%] w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary/40 to-accent/40" />
        </>
      )}

      {variant === 'diamonds' && (
        <>
          {/* Circle ring — top right */}
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full border-2 border-accent/25 bg-gradient-to-bl from-accent/10 to-transparent" />
          {/* Diamond pair — upper right area */}
          <div className="absolute top-[11%] right-[19%] w-14 h-14 border-2 border-primary/30 bg-gradient-to-tr from-primary/10 to-accent/10 rotate-45" />
          <div className="absolute top-[10%] right-[18%] w-8 h-8 border border-accent/40 bg-gradient-to-br from-accent/20 to-transparent rotate-45" />
          {/* Diamond — lower left */}
          <div className="absolute bottom-[14%] left-[7%] w-20 h-20 border-2 border-primary/25 bg-gradient-to-tl from-primary/10 to-accent/5 rotate-45" />
          {/* Small filled diamonds */}
          <div className="absolute bottom-[37%] right-[6%] w-3.5 h-3.5 bg-gradient-to-br from-primary/50 to-accent/40 rotate-45" />
          <div className="absolute top-[44%] left-[5%] w-2.5 h-2.5 bg-gradient-to-tr from-accent/50 to-primary/40 rotate-45" />
          {/* Accent dots */}
          <div className="absolute bottom-[58%] left-[22%] w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary/40 to-accent/40" />
          <div className="absolute top-[70%] right-[21%] w-2 h-2 rounded-full bg-accent/40" />
          {/* Small ring — bottom area */}
          <div className="absolute -bottom-14 -left-14 w-[240px] h-[240px] rounded-full border border-primary/30 bg-gradient-to-tr from-primary/10 to-transparent" />
        </>
      )}

      {variant === 'scattered' && (
        <>
          {/* Large rings */}
          <div className="absolute -top-36 -right-36 w-[440px] h-[440px] rounded-full border-2 border-primary/30 bg-gradient-to-b from-primary/10 to-accent/5" />
          <div className="absolute -bottom-28 -left-28 w-[340px] h-[340px] rounded-full border-2 border-accent/25 bg-gradient-to-t from-accent/10 to-primary/5" />
          {/* Small ring — right center */}
          <div className="absolute top-1/2 right-[2%] w-36 h-36 rounded-full border border-primary/40 bg-gradient-to-l from-primary/10 to-accent/10" />
          {/* Scattered dots */}
          <div className="absolute top-[11%] left-[9%] w-3 h-3 rounded-full bg-gradient-to-br from-primary/60 to-accent/40" />
          <div className="absolute top-[19%] left-[24%] w-2 h-2 rounded-full bg-gradient-to-tr from-accent/50 to-primary/30" />
          <div className="absolute top-[7%] left-[54%] w-2.5 h-2.5 rounded-full bg-gradient-to-bl from-primary/50 to-accent/50" />
          <div className="absolute top-[33%] left-[4%] w-1.5 h-1.5 rounded-full bg-primary/40" />
          <div className="absolute bottom-[24%] right-[11%] w-3 h-3 rounded-full bg-gradient-to-br from-accent/50 to-primary/50" />
          <div className="absolute bottom-[14%] right-[27%] w-2 h-2 rounded-full bg-gradient-to-r from-primary/40 to-accent/30" />
          <div className="absolute bottom-[38%] left-[17%] w-2.5 h-2.5 rounded-full bg-gradient-to-t from-accent/40 to-primary/40" />
          <div className="absolute top-[64%] right-[39%] w-2 h-2 rounded-full bg-primary/30" />
          {/* Small diamond accent */}
          <div className="absolute top-[25%] right-[18%] w-4 h-4 border border-accent/40 bg-gradient-to-br from-accent/20 to-primary/10 rotate-45" />
        </>
      )}

      {variant === 'minimal' && (
        <>
          {/* Two very large, very faint rings on opposite corners */}
          <div className="absolute -top-60 -right-60 w-[640px] h-[640px] rounded-full border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="absolute -bottom-48 -left-48 w-[520px] h-[520px] rounded-full border-2 border-accent/15 bg-gradient-to-tl from-accent/5 to-primary/5" />
          {/* Tiny accent dots on the sides */}
          <div className="absolute top-[38%] right-[3%] w-2.5 h-2.5 rounded-full bg-gradient-to-b from-primary/40 to-accent/30" />
          <div className="absolute top-[52%] right-[5%] w-2 h-2 rounded-full bg-gradient-to-t from-accent/40 to-primary/30" />
          <div className="absolute bottom-[38%] left-[3%] w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary/40 to-accent/30" />
          <div className="absolute bottom-[52%] left-[5%] w-2 h-2 rounded-full bg-gradient-to-l from-accent/40 to-primary/30" />
        </>
      )}
    </div>
  );
}
