// Larger illustrated scenes for category tiles and hero panels.
// Original artwork — no third-party imagery, no brand marks.

import { useId } from "react";

const INK = "#0F1115";

const Wrap = ({ children, bg, className, id }) => (
  <svg viewBox="0 0 320 200" className={`h-full w-full ${className ?? ""}`} role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#BFE3F5" />
        <stop offset="1" stopColor="#F6F1E4" />
      </linearGradient>
      <clipPath id={`half-${id}`}><path d="M0 0h190l-60 200H0z" /></clipPath>
    </defs>
    <rect width="320" height="200" fill={bg} />
    {children}
  </svg>
);

const scenes = {
  interior: ({ tone = "#17A398", id }) => (
    <Wrap bg="#F2E8D8" id={id}>
      <rect x="0" y="0" width="150" height="150" fill={tone} />
      <rect x="0" y="0" width="150" height="150" fill="#fff" opacity=".06" />
      <rect x="0" y="150" width="320" height="50" fill="#C8B594" />
      <rect x="0" y="146" width="320" height="6" fill="#fff" opacity=".55" />
      {/* roller stroke edge */}
      <rect x="146" y="0" width="8" height="150" fill={tone} opacity=".55" />
      <g transform="translate(118 56)">
        <rect x="0" y="0" width="54" height="16" rx="6" fill="#E9E5DA" stroke={INK} strokeOpacity=".15" />
        <rect x="6" y="0" width="14" height="16" fill={tone} opacity=".9" />
        <path d="M54 8h14v22h-10" fill="none" stroke="#8A9099" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="56" y="28" width="6" height="34" rx="3" fill="#F2A900" />
      </g>
      {/* window */}
      <rect x="208" y="28" width="82" height="92" rx="4" fill="#fff" />
      <rect x="214" y="34" width="70" height="80" fill="#CFE8F5" />
      <path d="M249 34v80M214 74h70" stroke="#fff" strokeWidth="4" />
      <path d="M208 120l-40 30h96l26-30z" fill="#FFF3B0" opacity=".45" />
      {/* sofa */}
      <rect x="190" y="112" width="112" height="42" rx="10" fill="#4C5BD4" />
      <rect x="182" y="124" width="22" height="30" rx="8" fill="#3F4CB8" />
      <rect x="290" y="124" width="22" height="30" rx="8" fill="#3F4CB8" />
      <rect x="204" y="118" width="40" height="22" rx="7" fill="#5C6BE0" />
      <rect x="250" y="118" width="40" height="22" rx="7" fill="#5C6BE0" />
      <rect x="196" y="152" width="6" height="8" fill={INK} />
      <rect x="292" y="152" width="6" height="8" fill={INK} />
      {/* lamp + plant */}
      <path d="M40 150v-46" stroke={INK} strokeWidth="3" />
      <path d="M26 104l14-26 14 26z" fill="#F2A900" />
      <ellipse cx="40" cy="152" rx="14" ry="4" fill={INK} opacity=".2" />
    </Wrap>
  ),

  exterior: ({ tone = "#E8B04B", id }) => (
    <Wrap bg={`url(#sky-${id})`} id={id}>
      <rect width="320" height="200" fill={`url(#sky-${id})`} />
      <circle cx="270" cy="38" r="20" fill="#FFD84D" />
      <g fill="#fff" opacity=".9">
        <ellipse cx="70" cy="34" rx="30" ry="9" /><ellipse cx="92" cy="28" rx="20" ry="9" />
      </g>
      <rect x="0" y="160" width="320" height="40" fill="#8FB58A" />
      {/* house: unpainted right side, painted left via clip */}
      <g>
        <rect x="70" y="86" width="190" height="78" fill="#D9D5CB" />
        <g clipPath={`url(#half-${id})`}><rect x="70" y="86" width="190" height="78" fill={tone} /></g>
        <path d="M60 90l35-38h130l35 38z" fill="#3B3F47" />
        <path d="M95 52h130l-8 8H103z" fill="#fff" opacity=".15" />
        {[92, 134, 200, 232].map((x) => (
          <g key={x}>
            <rect x={x} y="108" width="22" height="26" rx="2" fill="#fff" />
            <rect x={x + 3} y="111" width="16" height="20" fill="#9CCBE6" />
          </g>
        ))}
        <rect x="163" y="120" width="26" height="44" rx="3" fill="#5A3E2B" />
        <circle cx="184" cy="144" r="1.8" fill="#F2A900" />
        <rect x="70" y="160" width="190" height="6" fill="#000" opacity=".1" />
      </g>
      {/* brush */}
      <g transform="translate(118 62) rotate(-25)">
        <rect x="0" y="0" width="30" height="16" rx="2" fill={tone} />
        <rect x="0" y="14" width="30" height="5" fill="#C9CDD3" />
        <rect x="10" y="18" width="10" height="34" rx="4" fill="#2B2F36" />
      </g>
      <circle cx="292" cy="150" r="16" fill="#5C9A62" /><rect x="290" y="150" width="4" height="16" fill="#6B4A2F" />
    </Wrap>
  ),

  waterproof: ({ tone = "#2E86AB", id }) => (
    <Wrap bg="#DCEBF3" id={id}>
      <ellipse cx="90" cy="34" rx="46" ry="14" fill="#fff" /><ellipse cx="128" cy="30" rx="30" ry="12" fill="#fff" />
      <ellipse cx="240" cy="42" rx="40" ry="12" fill="#fff" opacity=".85" />
      {[40, 72, 104, 136, 168, 200, 232, 264, 296].map((x, i) => (
        <path key={x} d={`M${x} ${58 + (i % 3) * 8}l-5 16`} stroke={tone} strokeWidth="3" strokeLinecap="round" opacity=".7" />
      ))}
      {/* shield arc */}
      <path d="M20 118Q160 40 300 118" fill="none" stroke={tone} strokeWidth="6" strokeLinecap="round" opacity=".9" />
      <path d="M20 118Q160 40 300 118" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" />
      {/* slab layers */}
      <rect x="0" y="118" width="320" height="14" fill="#E9E5DA" />
      <rect x="0" y="132" width="320" height="10" fill={tone} />
      <rect x="0" y="142" width="320" height="58" fill="#A9A79F" />
      <path d="M0 160h320M0 178h320" stroke="#fff" strokeOpacity=".25" strokeWidth="2" />
      <g transform="translate(232 92)">
        <path d="M12 0c8 12 12 18 12 24a12 12 0 0 1-24 0c0-6 4-12 12-24z" fill={tone} />
        <path d="M8 26a6 6 0 0 0 5 5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".7" />
      </g>
    </Wrap>
  ),

  texture: ({ tone = "#B98B73", id }) => (
    <Wrap bg="#E9DFD2" id={id}>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${16 + i * 76} 24)`}>
          <rect width="68" height="152" rx="8" fill={["#D8C3AE", "#C9B29A", "#B8A08A", "#A99180"][i]} />
          {[0, 1, 2, 3, 4, 5, 6].map((r) => (
            <path key={r} d={i % 2 ? `M6 ${18 + r * 20}q14-12 28 0t28 0` : `M6 ${18 + r * 20}c10-9 16 9 28 0s18 9 28 0`} fill="none" stroke="#000" strokeOpacity=".16" strokeWidth="2.2" strokeLinecap="round" />
          ))}
          <rect width="68" height="152" rx="8" fill="#fff" opacity={0.05 * i} />
        </g>
      ))}
      <circle cx="286" cy="34" r="6" fill={tone} />
    </Wrap>
  ),

  wood: ({ tone = "#A0522D", id }) => (
    <Wrap bg="#F0E4D3" id={id}>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(0 ${10 + i * 37})`}>
          <rect width="320" height="34" fill={["#B7693A", "#A85F33", "#C27846", "#AD6437", "#BC7040"][i]} />
          <path d={`M0 ${9 + (i % 2) * 6}q60-8 120 0t120 0t80 0M0 ${23 - (i % 2) * 4}q50 8 110 0t110 0t100 0`} fill="none" stroke="#000" strokeOpacity=".16" strokeWidth="1.6" />
          <rect y="32" width="320" height="2" fill="#000" opacity=".2" />
        </g>
      ))}
      <path d="M-20 200L120 0h60L40 200z" fill="#fff" opacity=".13" />
      <path d="M150 200L290 0h20L170 200z" fill="#fff" opacity=".08" />
      <g transform="translate(232 128) rotate(-20)"><rect width="34" height="14" rx="2" fill={tone} /><rect y="12" width="34" height="5" fill="#C9CDD3" /><rect x="11" y="16" width="12" height="36" rx="4" fill="#2B2F36" /></g>
    </Wrap>
  ),

  enamel: ({ tone = "#1F3A93", id }) => (
    <Wrap bg="#E3E6EB" id={id}>
      <rect x="58" y="20" width="204" height="170" rx="6" fill={tone} />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (<rect key={i} x={74 + i * 26} y="34" width="12" height="142" rx="3" fill="#000" opacity=".22" />))}
      <rect x="58" y="20" width="204" height="170" rx="6" fill="none" stroke="#000" strokeOpacity=".3" strokeWidth="4" />
      <path d="M58 20h60L58 110z" fill="#fff" opacity=".18" />
      <path d="M150 190L262 78v40L190 190z" fill="#fff" opacity=".12" />
      <circle cx="238" cy="110" r="7" fill="#F2A900" />
      <rect x="0" y="186" width="320" height="14" fill="#000" opacity=".1" />
    </Wrap>
  ),

  primer: ({ tone = "#7C8DA6", id }) => (
    <Wrap bg="#F4F1EA" id={id}>
      <rect x="0" y="0" width="320" height="150" fill="#ECE8DF" />
      <rect x="0" y="0" width="188" height="150" fill="#fff" />
      <rect x="182" y="0" width="12" height="150" fill="#fff" opacity=".6" />
      <rect x="0" y="150" width="320" height="50" fill="#C9C2B4" />
      <g transform="translate(206 70)"><rect width="66" height="60" rx="8" fill={tone} /><rect x="8" y="14" width="50" height="6" rx="3" fill="#fff" opacity=".9" /><rect x="8" y="26" width="34" height="5" rx="2.5" fill="#fff" opacity=".6" /><rect x="-4" y="-10" width="74" height="14" rx="6" fill="#C9CDD3" /></g>
      <g transform="translate(96 62)"><rect width="52" height="16" rx="6" fill="#F1EFE9" stroke={INK} strokeOpacity=".15" /><path d="M52 8h14v20h-10" fill="none" stroke="#8A9099" strokeWidth="3" strokeLinecap="round" /><rect x="56" y="26" width="6" height="34" rx="3" fill="#2B2F36" /></g>
    </Wrap>
  ),

  putty: ({ tone = "#8E9AAF", id }) => (
    <Wrap bg="#F1EEE7" id={id}>
      <rect x="0" y="0" width="320" height="200" fill="#EAE6DC" />
      <path d="M0 0h320v70Q160 96 0 70z" fill="#F7F5F0" />
      <path d="M0 70Q160 96 320 70v50Q160 146 0 120z" fill="#E1DDD2" />
      <g transform="translate(112 74) rotate(-14)"><rect width="128" height="30" rx="4" fill="#C9CDD3" /><rect x="0" y="0" width="128" height="8" rx="4" fill="#fff" opacity=".5" /><rect x="52" y="26" width="24" height="46" rx="8" fill="#2B2F36" /></g>
      <ellipse cx="100" cy="164" rx="46" ry="14" fill={tone} opacity=".35" /><ellipse cx="100" cy="156" rx="40" ry="12" fill="#F7F5F0" />
    </Wrap>
  ),

  cement: ({ tone = "#6B7280", id }) => (
    <Wrap bg="#E8E6DF" id={id}>
      <rect x="0" y="168" width="320" height="32" fill="#BDB8AA" />
      {[0, 1, 2, 3, 4].map((r) => [0, 1, 2, 3, 4, 5].map((c) => (
        <rect key={`${r}-${c}`} x={-20 + c * 62 + (r % 2) * 31} y={16 + r * 26} width="58" height="22" rx="2" fill="#CDBFA9" opacity=".7" />
      )))}
      <g transform="translate(96 42)">
        <ellipse cx="64" cy="126" rx="70" ry="8" fill="#000" opacity=".15" />
        <path d="M6 14c30-9 86-9 116 0l8 10-4 92c-38 12-92 12-124 0l-4-92z" fill="#F4F1EA" />
        <rect x="2" y="48" width="124" height="44" fill={tone} /><rect x="20" y="58" width="70" height="8" rx="4" fill="#fff" opacity=".93" /><rect x="20" y="73" width="46" height="5" rx="2.5" fill="#fff" opacity=".6" />
      </g>
    </Wrap>
  ),

  tile: ({ tone = "#00A6CE", id }) => (
    <Wrap bg="#EDEBE4" id={id}>
      {[0, 1, 2, 3, 4].map((r) => [0, 1, 2, 3, 4, 5].map((c) => (
        <rect key={`${r}-${c}`} x={10 + c * 52} y={14 + r * 38} width="48" height="34" rx="2" fill={(r + c) % 2 ? "#F7F5F0" : "#DCE7EA"} stroke="#000" strokeOpacity=".06" />
      )))}
      <g transform="translate(90 96) rotate(-12)"><path d="M0 0h130v16H0z" fill="#C9CDD3" /><path d="M0 16h130v10l-6 0-4-8-8 8-8-8-8 8-8-8-8 8-8-8-8 8-8-8-8 8-8-8-8 8-8-8-8 8-8-8z" fill={tone} opacity=".9" /><rect x="50" y="-34" width="30" height="38" rx="8" fill="#2B2F36" /></g>
    </Wrap>
  ),

  chemical: ({ tone = "#E1251B", id }) => (
    <Wrap bg="#EBE7E0" id={id}>
      <rect x="0" y="164" width="320" height="36" fill="#B9B4A6" />
      {[[70, 56], [148, 40], [226, 62]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <ellipse cx="34" cy={104 - (i === 1 ? -8 : 0)} rx="38" ry="6" fill="#000" opacity=".14" />
          <path d={`M0 12h68v${84 + (i === 1 ? 14 : 0)}a34 6 0 0 1-68 0z`} fill="#F4F1EA" />
          <ellipse cx="34" cy="12" rx="34" ry="7" fill="#D4D7DC" />
          <rect x="0" y="40" width="68" height="32" fill={i === 1 ? "#17A398" : tone} /><rect x="10" y="48" width="36" height="5" rx="2.5" fill="#fff" opacity=".9" /><rect x="10" y="58" width="24" height="4" rx="2" fill="#fff" opacity=".6" />
        </g>
      ))}
    </Wrap>
  ),

  adhesive: ({ tone = "#1F3A93", id }) => (
    <Wrap bg="#E9ECF4" id={id}>
      <rect x="40" y="128" width="100" height="26" rx="3" fill="#C9CDD3" /><rect x="180" y="128" width="100" height="26" rx="3" fill="#C9CDD3" />
      <rect x="132" y="120" width="56" height="12" rx="3" fill={tone} opacity=".9" />
      <g transform="translate(70 30) rotate(8)"><rect width="150" height="34" rx="10" fill="#F4F1EA" /><rect x="34" width="70" height="34" fill={tone} /><rect x="44" y="9" width="44" height="5" rx="2.5" fill="#fff" opacity=".92" /><rect x="44" y="19" width="28" height="4" rx="2" fill="#fff" opacity=".6" /><path d="M150 8h14l8 4v12l-8 4h-14z" fill="#C9CDD3" /></g>
      <path d="M146 100q6 10 0 16" fill="none" stroke={tone} strokeWidth="3" strokeLinecap="round" />
    </Wrap>
  ),

  building: ({ tone = "#F0B400", id }) => (
    <Wrap bg="#E6EDF3" id={id}>
      <rect x="0" y="170" width="320" height="30" fill="#B9B4A6" />
      <rect x="64" y="52" width="130" height="118" fill="#D9D5CB" />
      {[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => (<rect key={`${r}${c}`} x={78 + c * 30} y={66 + r * 34} width="18" height="22" fill="#9CCBE6" />)))}
      <rect x="64" y="44" width="130" height="10" fill={INK} />
      <path d="M210 170V30h8v140M210 30l70 16M280 46v26" stroke={tone} strokeWidth="5" fill="none" strokeLinejoin="round" />
      <path d="M210 30h-40" stroke={tone} strokeWidth="5" />
      <rect x="272" y="72" width="16" height="12" fill={INK} />
      {[0, 1, 2, 3].map((i) => (<rect key={i} x={224 + (i % 2) * 34} y={140 - Math.floor(i / 2) * 14} width="30" height="12" fill="#C77B58" />))}
    </Wrap>
  ),
};

export default function SceneArt({ name = "interior", tone, className }) {
  const uid = useId().replace(/:/g, "");
  const Scene = scenes[name] ?? scenes.interior;
  return <Scene tone={tone} id={`${name}${uid}`} className={className} />;
}
