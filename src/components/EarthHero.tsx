export const EarthHero = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full select-none pointer-events-none">
      {/* Outermost atmosphere glow — warm amber */}
      <div className="absolute w-[520px] h-[520px] rounded-full bg-primary/4 blur-3xl animate-pulse-glow" />

      {/* Secondary blue nebula glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[hsl(var(--brand-blue)/0.04)] blur-3xl translate-x-12 -translate-y-8" />

      {/* Orbit rings */}
      <div className="absolute w-[440px] h-[440px] rounded-full border border-primary/8 animate-spin-slow" />
      <div className="absolute w-[380px] h-[380px] rounded-full border border-[hsl(var(--brand-blue)/0.12)] animate-spin-reverse" />
      <div className="absolute w-[320px] h-[320px] rounded-full border border-[hsl(var(--brand-green)/0.08)] animate-spin-slow" style={{ animationDuration: '35s' }} />

      {/* Orbit dots */}
      <div className="absolute w-[440px] h-[440px] animate-spin-slow">
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
      </div>
      <div className="absolute w-[380px] h-[380px] animate-spin-reverse">
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-[hsl(var(--brand-blue))] shadow-[0_0_8px_hsl(var(--brand-blue))]" />
      </div>
      <div className="absolute w-[320px] h-[320px] animate-spin-slow" style={{ animationDuration: '35s' }}>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[hsl(var(--brand-green))] shadow-[0_0_6px_hsl(var(--brand-green))]" />
      </div>

      {/* Earth SVG */}
      <div className="animate-float relative w-72 h-72">
        {/* Atmosphere glow ring */}
        <div className="absolute inset-0 rounded-full bg-primary/8 blur-xl scale-110" />

        <svg
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_50px_hsl(var(--primary)/0.2)]"
        >
          <defs>
            <radialGradient id="earthBaseNew" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="hsl(220,50%,22%)" />
              <stop offset="40%" stopColor="hsl(220,45%,14%)" />
              <stop offset="100%" stopColor="hsl(230,50%,6%)" />
            </radialGradient>
            <radialGradient id="atmosphereGlowNew" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="hsl(var(--brand-blue))" stopOpacity="0.12" />
              <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0.04" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="specHighlight" cx="32%" cy="28%" r="40%">
              <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <clipPath id="earthClipNew">
              <circle cx="160" cy="160" r="150" />
            </clipPath>
          </defs>

          {/* Earth base */}
          <circle cx="160" cy="160" r="150" fill="url(#earthBaseNew)" />

          {/* Ocean & continents */}
          <g clipPath="url(#earthClipNew)">
            <ellipse cx="100" cy="140" rx="70" ry="50" fill="hsl(210,55%,18%)" opacity="0.7" />
            <ellipse cx="220" cy="180" rx="80" ry="45" fill="hsl(205,50%,16%)" opacity="0.6" />
            <ellipse cx="160" cy="260" rx="90" ry="40" fill="hsl(215,55%,14%)" opacity="0.5" />

            {/* Land masses */}
            <path d="M60 80 Q80 60 110 70 Q130 78 125 105 Q120 125 100 135 Q80 140 65 120 Q50 100 60 80Z"
              fill="hsl(150,30%,22%)" opacity="0.85" />
            <path d="M90 115 Q115 108 118 130 Q115 150 95 155 Q75 150 80 130Z"
              fill="hsl(150,25%,19%)" opacity="0.75" />
            <path d="M155 55 Q175 48 192 65 Q200 85 188 100 Q175 112 158 105 Q145 95 148 75Z"
              fill="hsl(145,25%,21%)" opacity="0.8" />
            <path d="M158 112 Q178 108 185 130 Q188 160 175 180 Q160 195 145 178 Q132 155 140 130Z"
              fill="hsl(140,22%,19%)" opacity="0.8" />
            <path d="M200 60 Q240 50 265 75 Q280 95 270 120 Q255 145 225 140 Q200 135 195 110 Q192 85 200 60Z"
              fill="hsl(142,28%,20%)" opacity="0.82" />
            <path d="M235 185 Q258 178 268 196 Q275 215 260 228 Q242 238 228 224 Q218 208 235 185Z"
              fill="hsl(28,35%,28%)" opacity="0.75" />
            <path d="M85 170 Q105 162 115 182 Q120 205 110 230 Q96 248 78 235 Q62 218 68 195 Q72 175 85 170Z"
              fill="hsl(145,25%,21%)" opacity="0.78" />

            {/* Ice caps */}
            <ellipse cx="160" cy="20" rx="55" ry="22" fill="hsl(210,30%,82%)" opacity="0.3" />
            <ellipse cx="160" cy="300" rx="65" ry="25" fill="hsl(210,30%,82%)" opacity="0.25" />

            {/* Cloud wisps */}
            <ellipse cx="100" cy="95" rx="45" ry="8" fill="white" opacity="0.06" transform="rotate(-15 100 95)" />
            <ellipse cx="200" cy="150" rx="50" ry="7" fill="white" opacity="0.05" transform="rotate(10 200 150)" />
            <ellipse cx="140" cy="220" rx="40" ry="6" fill="white" opacity="0.04" transform="rotate(-8 140 220)" />

            {/* Atmosphere overlay */}
            <circle cx="160" cy="160" r="150" fill="url(#atmosphereGlowNew)" />
            <circle cx="160" cy="160" r="150" fill="url(#specHighlight)" />

            {/* Subtle city lights */}
            <ellipse cx="258" cy="190" rx="20" ry="12" fill="hsl(var(--primary))" opacity="0.06" />
            <ellipse cx="72" cy="200" rx="18" ry="10" fill="hsl(var(--primary))" opacity="0.04" />
          </g>

          {/* Atmosphere rim — warm amber */}
          <circle cx="160" cy="160" r="150" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.15" />
          <circle cx="160" cy="160" r="146" fill="none" stroke="hsl(var(--brand-blue))" strokeWidth="6" opacity="0.05" />
        </svg>
      </div>
    </div>
  );
};
