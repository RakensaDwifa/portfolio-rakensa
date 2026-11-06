/* eslint-disable @typescript-eslint/no-require-imports */
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const TARGETS = [
  {
    slug: "hmtf",
    url: "https://hmtf-telkomuniv.vercel.app",
  },
  {
    slug: "mekflu",
    url: "https://mekanika-fluida-kelompok-a.vercel.app",
  },
  {
    slug: "wismaku",
    url: "https://wismaku-demo.vercel.app",
  },
  {
    slug: "train-journey-tracker",
    url: "https://train-journey-tracker.vercel.app",
  },
  {
    slug: "todo-list-app",
    url: "https://todo-list-app-jet-phi.vercel.app",
  },
  {
    slug: "snake-xp",
    url: "https://snake-x-nine.vercel.app",
  },
  {
    slug: "ucapan-digital",
    url: "https://ucapanpacar.vercel.app",
  },
];

async function main() {
  const tempDir = path.join(__dirname, "..", ".tmp-screenshots");
  const outDir = path.join(__dirname, "..", "public", "projects");

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  for (const target of TARGETS) {
    const tempPng = path.join(tempDir, `${target.slug}.png`);
    const finalWebp = path.join(outDir, `${target.slug}.webp`);

    console.log(`Capturing ${target.slug} from ${target.url}...`);
    try {
      execFileSync(
        CHROME_PATH,
        [
          "--headless=new",
          "--disable-gpu",
          "--hide-scrollbars",
          "--virtual-time-budget=6000",
          `--window-size=1600,1000`,
          `--screenshot=${tempPng}`,
          target.url,
        ],
        { stdio: "ignore" }
      );

      if (fs.existsSync(tempPng)) {
        await sharp(tempPng)
          .resize(1600, 1000, { fit: "cover", position: "top" })
          .webp({ quality: 90 })
          .toFile(finalWebp);

        console.log(`✓ Saved ${target.slug}.webp (${fs.statSync(finalWebp).size} bytes)`);
      } else {
        console.warn(`✗ Failed to generate png for ${target.slug}`);
      }
    } catch (err) {
      console.error(`✗ Error capturing ${target.slug}:`, err.message);
    }
  }

  // Cleanup temp dir
  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log("Done updating project screenshots!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
