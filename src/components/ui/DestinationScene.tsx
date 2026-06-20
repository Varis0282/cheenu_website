import { cn } from "@/lib/utils";

export type SceneKey = "desert" | "marina" | "bay" | "island" | "city" | "alps";

type Props = {
  scene: SceneKey;
  /** Unique suffix so SVG gradient ids never collide between instances. */
  uid: string;
  from?: string;
  via?: string;
  to?: string;
  accent?: string;
  className?: string;
  /** Hide the twinkling stars (e.g. for small thumbnails). */
  stars?: boolean;
};

/**
 * Illustrated, photo-free destination backdrops. Each scene is layered SVG
 * (sky gradient → glow → distant silhouettes → foreground) so it reads as a
 * premium editorial illustration rather than clip-art, and never 404s.
 */
export default function DestinationScene({
  scene,
  uid,
  from = "#0a1024",
  via = "#15356b",
  to = "#e0a92e",
  accent = "#f0b429",
  className,
  stars = true,
}: Props) {
  const sky = `sky-${uid}`;
  const glow = `glow-${uid}`;
  const water = `water-${uid}`;

  return (
    <svg
      viewBox="0 0 800 450"
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
      role="img"
      aria-hidden
    >
      <defs>
        <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="55%" stopColor={via} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
        <radialGradient id={glow} cx="50%" cy="78%" r="55%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.95" />
          <stop offset="45%" stopColor={accent} stopOpacity="0.25" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={water} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={to} stopOpacity="0.55" />
          <stop offset="100%" stopColor={from} stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="800" height="450" fill={`url(#${sky})`} />

      {/* Sun / moon glow */}
      <circle cx="560" cy="150" r="200" fill={`url(#${glow})`} />
      <circle cx="560" cy="150" r="46" fill={accent} opacity="0.9" className="animate-float-slow" />

      {/* Twinkling stars */}
      {stars && (
        <g fill="#ffffff">
          {[
            [80, 60], [150, 40], [220, 90], [300, 50], [380, 80],
            [470, 45], [120, 120], [680, 70], [720, 130], [40, 100],
          ].map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i % 3 === 0 ? 1.8 : 1.1}
              className="animate-twinkle"
              style={{ animationDelay: `${(i % 5) * 0.6}s` }}
            />
          ))}
        </g>
      )}

      {scene === "desert" && <Desert accent={accent} water={water} />}
      {scene === "marina" && <Marina accent={accent} water={water} />}
      {scene === "bay" && <Bay accent={accent} water={water} />}
      {scene === "island" && <Island accent={accent} water={water} />}
      {scene === "city" && <City accent={accent} water={water} />}
      {scene === "alps" && <Alps accent={accent} water={water} />}
    </svg>
  );
}

/* Each sub-scene draws silhouettes against the shared sky. `#081024` reads as
   a near-black foreground that works on every theme. */
const DARK = "#070d1f";
const DARK2 = "#0c1733";

function Desert({ accent, water }: { accent: string; water: string }) {
  return (
    <g>
      {/* far skyline */}
      <g fill={DARK2} opacity="0.85">
        <rect x="90" y="250" width="26" height="140" />
        <rect x="130" y="220" width="30" height="170" />
        <rect x="660" y="240" width="28" height="150" />
        <rect x="700" y="270" width="30" height="120" />
      </g>
      {/* Burj-Khalifa style spire + towers */}
      <g fill={DARK}>
        <polygon points="395,70 410,390 380,390" />
        <rect x="384" y="150" width="22" height="240" />
        <polygon points="300,180 320,390 280,390" />
        <rect x="286" y="230" width="28" height="160" />
        <polygon points="500,150 520,390 480,390" />
        <rect x="486" y="210" width="28" height="180" />
        <rect x="560" y="260" width="34" height="130" />
        <rect x="230" y="280" width="30" height="110" />
      </g>
      {/* window lights */}
      <g fill={accent} opacity="0.65">
        {[260, 300, 390, 500, 570].map((x, i) => (
          <rect key={i} x={x + 6} y={260 + (i % 3) * 18} width="3" height="6" />
        ))}
      </g>
      {/* dunes */}
      <path d="M0,360 Q200,320 400,360 T800,355 V450 H0 Z" fill={`url(#${water})`} />
      <path d="M0,400 Q260,360 520,400 T800,400 V450 H0 Z" fill={DARK} opacity="0.92" />
    </g>
  );
}

function Marina({ accent, water }: { accent: string; water: string }) {
  return (
    <g>
      {/* Marina Bay Sands: three towers + sky deck */}
      <g fill={DARK}>
        <rect x="300" y="190" width="22" height="200" />
        <rect x="380" y="190" width="22" height="200" />
        <rect x="460" y="190" width="22" height="200" />
        <path d="M285,190 Q391,150 497,190 L497,176 Q391,134 285,176 Z" />
      </g>
      {/* supertrees */}
      <g fill={DARK2}>
        {[150, 195, 600, 650].map((x, i) => (
          <g key={i}>
            <rect x={x} y={250} width="6" height="140" />
            <ellipse cx={x + 3} cy={248} rx="26" ry="16" opacity="0.9" />
          </g>
        ))}
      </g>
      {/* distant skyline */}
      <g fill={DARK2} opacity="0.8">
        <rect x="70" y="280" width="30" height="110" />
        <rect x="110" y="255" width="24" height="135" />
        <rect x="700" y="270" width="28" height="120" />
        <rect x="735" y="250" width="22" height="140" />
      </g>
      <g fill={accent} opacity="0.6">
        {[80, 120, 705, 740].map((x, i) => (
          <rect key={i} x={x + 6} y={290 + (i % 2) * 20} width="3" height="6" />
        ))}
      </g>
      <rect y="385" width="800" height="65" fill={`url(#${water})`} />
    </g>
  );
}

function Bay({ accent, water }: { accent: string; water: string }) {
  return (
    <g>
      {/* limestone karsts */}
      <g fill={DARK2} opacity="0.75">
        <path d="M40,330 Q70,200 110,330 Z" />
        <path d="M620,330 Q660,180 700,330 Z" />
      </g>
      <g fill={DARK}>
        <path d="M120,360 Q170,150 230,360 Z" />
        <path d="M300,360 Q345,210 390,360 Z" />
        <path d="M450,360 Q510,170 570,360 Z" />
        <path d="M650,360 Q690,230 730,360 Z" />
      </g>
      {/* junk boat with sails */}
      <g fill={DARK} transform="translate(350,320)">
        <path d="M-46,30 L46,30 L34,46 L-34,46 Z" />
        <path d="M-2,-34 L26,24 L-2,24 Z" fill={accent} opacity="0.85" />
        <path d="M2,-22 L-22,24 L2,24 Z" fill={accent} opacity="0.6" />
      </g>
      <rect y="356" width="800" height="94" fill={`url(#${water})`} />
      {/* water shimmer */}
      <g stroke={accent} strokeWidth="2" opacity="0.3" strokeLinecap="round">
        <line x1="120" y1="395" x2="200" y2="395" />
        <line x1="500" y1="415" x2="610" y2="415" />
        <line x1="260" y1="430" x2="330" y2="430" />
      </g>
    </g>
  );
}

function Island({ accent, water }: { accent: string; water: string }) {
  return (
    <g>
      {/* tiered meru temple */}
      <g fill={DARK}>
        {[0, 1, 2, 3, 4].map((i) => {
          const w = 130 - i * 22;
          const y = 320 - i * 38;
          return (
            <polygon
              key={i}
              points={`400,${y - 20} ${400 + w / 2},${y} ${400 - w / 2},${y}`}
            />
          );
        })}
        <rect x="384" y="320" width="32" height="70" />
      </g>
      {/* palms */}
      <g fill={DARK}>
        {[120, 690].map((x, i) => (
          <g key={i} transform={`translate(${x},250)`}>
            <path d="M4,0 q6,80 0,140 q-6,-60 0,-140" />
            {[-1, 1].map((s) => (
              <path
                key={s}
                d={`M4,4 q${s * 60},-26 ${s * 86},6 q${s * -50},-12 ${s * -86},10`}
                fill={DARK}
              />
            ))}
          </g>
        ))}
      </g>
      {/* distant hills */}
      <path d="M0,330 Q200,290 380,330 T800,320 V360 H0 Z" fill={DARK2} opacity="0.7" />
      {/* waves */}
      <rect y="360" width="800" height="90" fill={`url(#${water})`} />
      <g stroke={accent} strokeWidth="2.5" opacity="0.35" strokeLinecap="round" fill="none">
        <path d="M40,400 q30,-12 60,0 t60,0" />
        <path d="M520,420 q30,-12 60,0 t60,0" />
      </g>
    </g>
  );
}

function City({ accent, water }: { accent: string; water: string }) {
  return (
    <g>
      <g fill={DARK}>
        <rect x="120" y="240" width="40" height="150" />
        <rect x="180" y="200" width="34" height="190" />
        <rect x="230" y="270" width="40" height="120" />
        <polygon points="320,150 336,390 304,390" />
        <rect x="312" y="220" width="16" height="170" />
        <rect x="380" y="250" width="46" height="140" />
        <rect x="450" y="210" width="34" height="180" />
        <rect x="500" y="260" width="44" height="130" />
        <rect x="560" y="230" width="36" height="160" />
        <rect x="610" y="270" width="40" height="120" />
      </g>
      <g fill={accent} opacity="0.6">
        {[130, 190, 390, 460, 570].map((x, i) => (
          <rect key={i} x={x + 8} y={250 + (i % 3) * 22} width="4" height="7" />
        ))}
      </g>
      <rect y="385" width="800" height="65" fill={`url(#${water})`} />
    </g>
  );
}

function Alps({ accent, water }: { accent: string; water: string }) {
  return (
    <g>
      <g fill={DARK2} opacity="0.8">
        <polygon points="120,360 260,150 400,360" />
        <polygon points="430,360 560,180 690,360" />
      </g>
      <g fill={DARK}>
        <polygon points="0,380 180,180 360,380" />
        <polygon points="320,380 520,120 720,380" />
        <polygon points="600,380 740,210 800,380" />
      </g>
      {/* snow caps */}
      <g fill={accent} opacity="0.85">
        <polygon points="520,120 560,168 540,168 500,200 480,178" />
        <polygon points="180,180 210,218 195,216 165,238 152,216" />
      </g>
      <g fill={DARK} opacity="0.95">
        {[60, 110, 690, 740].map((x, i) => (
          <polygon key={i} points={`${x},390 ${x + 14},340 ${x + 28},390`} />
        ))}
      </g>
      <rect y="384" width="800" height="66" fill={`url(#${water})`} />
    </g>
  );
}
