// Original flat illustrations used wherever a real product photo is not
// available. They are deliberately generic (no brand marks or lookalike
// packaging) — a real pack shot dropped into src/assets/products/ replaces
// them automatically (see lib/images.js).

const PALETTES = {
  "interior-paints": ["#E4572E", "#F2A900", "#EF8FA0", "#5FA98B", "#4C5BD4", "#7B5EA7"],
  "exterior-paints": ["#2E86AB", "#17A398", "#E4572E", "#F2A900", "#8B6F47"],
  primers: ["#7C8DA6", "#9AA5B5", "#6B7F99"],
  "wall-putty": ["#8E9AAF", "#A3A9B5"],
  enamels: ["#C0392B", "#1F3A93", "#2B2F36"],
  "wood-finishes": ["#A0522D", "#8B5A2B", "#C68B59"],
  waterproofing: ["#2E86AB", "#1B6CA8", "#17A398"],
  "specialty-coatings": ["#B98B73", "#9A8C7A", "#C2A98B"],
  cement: ["#6B7280"],
  "white-cement": ["#1E9AD6"],
  "tile-adhesives": ["#00A6CE"],
  "construction-chemicals": ["#E1251B"],
  adhesives: ["#1F3A93"],
  "building-solutions": ["#F0B400"],
};

const KIND = {
  "interior-paints": "can", "exterior-paints": "can", primers: "can", enamels: "can",
  "wood-finishes": "can", waterproofing: "can", "specialty-coatings": "can",
  "wall-putty": "bag", cement: "bag", "white-cement": "bag", "tile-adhesives": "bag",
  "construction-chemicals": "drum", adhesives: "tube", "building-solutions": "drum",
};

const hash = (s) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
const pickTone = (category, seed = "") => {
  const list = PALETTES[category] ?? PALETTES["interior-paints"];
  return list[hash(seed || category) % list.length];
};

function Can({ c }) {
  return (
    <g>
      <ellipse cx="100" cy="126" rx="44" ry="6" fill="#000" opacity=".12" />
      <path d="M64 50C64 14 136 14 136 50" fill="none" stroke="#8A9099" strokeWidth="3" strokeLinecap="round" />
      <path d="M62 54h76l-6 66a4 4 0 0 1-4 3.6H72a4 4 0 0 1-4-3.6z" fill="#EFEDE6" />
      <path d="M62 54h14l-3 69H72a4 4 0 0 1-4-3.6z" fill="#000" opacity=".06" />
      <rect x="60" y="72" width="80" height="34" fill={c} />
      <rect x="60" y="72" width="80" height="34" fill="#fff" opacity=".08" />
      <rect x="74" y="80" width="46" height="5" rx="2.5" fill="#fff" opacity=".92" />
      <rect x="74" y="90" width="30" height="3.5" rx="1.75" fill="#fff" opacity=".65" />
      <rect x="74" y="97" width="20" height="3.5" rx="1.75" fill="#fff" opacity=".45" />
      <rect x="55" y="44" width="90" height="12" rx="5" fill="#C9CDD3" />
      <rect x="55" y="44" width="90" height="4" rx="2" fill="#fff" opacity=".55" />
      <path d="M78 56v9a4 4 0 0 0 8 0v-9zM112 56v6a3 3 0 0 0 6 0v-6z" fill={c} />
    </g>
  );
}

function Bag({ c }) {
  return (
    <g>
      <ellipse cx="100" cy="128" rx="52" ry="6" fill="#000" opacity=".12" />
      <path d="M52 40c16-6 80-6 96 0l6 8-3 70c-24 8-78 8-102 0l-3-70z" fill="#EFEDE6" />
      <path d="M52 40c16-6 80-6 96 0l6 8c-34-7-74-7-108 0z" fill="#000" opacity=".07" />
      <path d="M46 48c34 7 74 7 108 0" fill="none" stroke="#000" strokeOpacity=".12" strokeWidth="1.5" />
      <rect x="49" y="66" width="102" height="36" fill={c} />
      <rect x="49" y="66" width="102" height="36" fill="#fff" opacity=".08" />
      <rect x="66" y="75" width="56" height="6" rx="3" fill="#fff" opacity=".93" />
      <rect x="66" y="86" width="36" height="4" rx="2" fill="#fff" opacity=".65" />
      <rect x="66" y="93" width="24" height="4" rx="2" fill="#fff" opacity=".45" />
      <path d="M50 108h100l-2 8c-24 8-72 8-96 0z" fill="#000" opacity=".05" />
    </g>
  );
}

function Drum({ c }) {
  return (
    <g>
      <ellipse cx="100" cy="128" rx="40" ry="6" fill="#000" opacity=".12" />
      <path d="M64 40h72v82a36 6 0 0 1-72 0z" fill="#EFEDE6" />
      <ellipse cx="100" cy="40" rx="36" ry="7" fill="#D4D7DC" />
      <ellipse cx="100" cy="39" rx="28" ry="4.5" fill="#B9BEC6" />
      <rect x="64" y="64" width="72" height="32" fill={c} />
      <rect x="64" y="64" width="72" height="32" fill="#fff" opacity=".08" />
      <rect x="76" y="72" width="40" height="5" rx="2.5" fill="#fff" opacity=".92" />
      <rect x="76" y="82" width="26" height="3.5" rx="1.75" fill="#fff" opacity=".65" />
      <path d="M64 52h72M64 108h72" stroke="#000" strokeOpacity=".1" strokeWidth="2" />
    </g>
  );
}

function Tube({ c }) {
  return (
    <g transform="rotate(-18 100 78)">
      <ellipse cx="100" cy="128" rx="60" ry="5" fill="#000" opacity=".1" transform="rotate(18 100 78)" />
      <rect x="44" y="60" width="96" height="36" rx="10" fill="#EFEDE6" />
      <rect x="44" y="60" width="96" height="10" rx="5" fill="#fff" opacity=".6" />
      <rect x="66" y="60" width="52" height="36" fill={c} />
      <rect x="74" y="70" width="34" height="5" rx="2.5" fill="#fff" opacity=".92" />
      <rect x="74" y="80" width="22" height="4" rx="2" fill="#fff" opacity=".6" />
      <path d="M140 68h14l8 4v12l-8 4h-14z" fill="#C9CDD3" />
      <rect x="162" y="73" width="10" height="10" rx="3" fill={c} />
      <path d="M44 62l-8 6v24l8 6z" fill="#D4D7DC" />
    </g>
  );
}

const KINDS = { can: Can, bag: Bag, drum: Drum, tube: Tube };

export default function ProductArt({ category, seed, color, className = "" }) {
  const c = color ?? pickTone(category, seed);
  const Shape = KINDS[KIND[category] ?? "can"];
  return (
    <svg viewBox="0 0 200 150" className={`h-full w-full ${className}`} role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      {/* <rect width="200" height="150" fill={c} opacity=".13" />
      <circle cx="158" cy="34" r="46" fill={c} opacity=".13" />
      <circle cx="36" cy="128" r="30" fill={c} opacity=".1" /> */}
      <g opacity=".9">
        {[0, 1, 2].map((i) => (
          <rect key={i} x={14 + i * 12} y="14" width="9" height="9" rx="2" fill={c} opacity={0.85 - i * 0.22} />
        ))}
      </g>
      <Shape c={c} />
    </svg>
  );
}
