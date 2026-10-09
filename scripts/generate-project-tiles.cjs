/* eslint-disable @typescript-eslint/no-require-imports */
// Generates branded neo-brutalist project tiles (1600x1000 webp) that fit the
// portfolio's design system. Re-run whenever a project has no real screenshot:
//   node scripts/generate-project-tiles.cjs
const sharp = require("sharp");
const path = require("path");

const INK = "#0f172a";
const SAND = "#faf8f2";
const OCEAN = "#0d9488";
const OCEAN_DARK = "#0f766e";
const OCEAN_SOFT = "#99f6e4";

const TILES = [
  {
    slug: "train-journey-tracker",
    title: "Train Journey Tracker",
    tags: "NEXT.JS // DRIZZLE // SHADCN",
  },
  {
    slug: "todo-list-app",
    title: "Todo List App",
    tags: "VANILLA JS // LOCAL STORAGE",
  },
  {
    slug: "snake-xp",
    title: "Snake XP",
    tags: "TYPESCRIPT // VITE // CANVAS",
  },
  {
    slug: "ucapan-digital",
    title: "Ucapan Digital",
    tags: "NEXT.JS // SUPABASE // MIDTRANS",
  },
];

function escapeXml(value) {
  return value.replace(/[<>&'"]/g, (c) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  })[c]);
}

function buildTile({ title, tags }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="${INK}" stroke-opacity="0.06"/>
    </pattern>
  </defs>

  <rect width="1200" height="750" fill="${SAND}"/>
  <rect width="1200" height="750" fill="url(#grid)"/>

  <circle cx="1060" cy="90" r="180" fill="${OCEAN_SOFT}" opacity="0.55"/>
  <circle cx="1180" cy="720" r="220" fill="${OCEAN}" opacity="0.12"/>
  <circle cx="60" cy="700" r="120" fill="${OCEAN}" opacity="0.10"/>

  <rect x="24" y="24" width="1152" height="702" fill="none" stroke="${INK}" stroke-width="6"/>

  <rect x="56" y="62" width="64" height="64" fill="${OCEAN}" stroke="${INK}" stroke-width="5" rx="14"/>
  <text x="150" y="94" font-family="Consolas,'JetBrains Mono',monospace" font-size="24" font-weight="700" fill="${INK}" letter-spacing="6">PROJECT</text>
  <text x="150" y="126" font-family="Consolas,'JetBrains Mono',monospace" font-size="22" font-weight="600" fill="${OCEAN_DARK}" letter-spacing="4">2026</text>

  <text x="56" y="430" font-family="'Segoe UI','Plus Jakarta Sans',sans-serif" font-size="88" font-weight="800" fill="${INK}">${escapeXml(title)}</text>

  <rect x="56" y="488" width="140" height="10" fill="${OCEAN}"/>
  <text x="56" y="584" font-family="Consolas,'JetBrains Mono',monospace" font-size="26" font-weight="700" fill="${INK}" letter-spacing="4">${escapeXml(tags)}</text>

  <line x1="56" y1="646" x2="1144" y2="646" stroke="${INK}" stroke-width="4" stroke-dasharray="10 8"/>
  <text x="56" y="690" font-family="Consolas,'JetBrains Mono',monospace" font-size="22" font-weight="600" fill="${INK}" letter-spacing="3">github.com/RakensaDwifa</text>
</svg>`;
}

async function main() {
  const outDir = path.join(__dirname, "..", "public", "projects");
  for (const tile of TILES) {
    const svg = Buffer.from(buildTile(tile));
    const file = path.join(outDir, `${tile.slug}.webp`);
    await sharp(svg)
      .resize(1200, 750)
      .webp({ quality: 85 })
      .toFile(file);
    console.log(`OK ${tile.slug}.webp -> ${file}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});