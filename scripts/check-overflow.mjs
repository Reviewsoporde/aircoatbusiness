import puppeteer from "puppeteer-core";

const edgePaths = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
];
const { existsSync } = await import("fs");
const executablePath = edgePaths.find((p) => existsSync(p));

const browser = await puppeteer.launch({ executablePath, headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.goto(process.argv[2] ?? "http://localhost:3199/", {
  waitUntil: "networkidle0",
});

const result = await page.evaluate(() => {
  const doc = document.documentElement;
  const overflow = doc.scrollWidth - doc.clientWidth;
  const wide = [];
  if (overflow > 0) {
    for (const el of document.querySelectorAll("*")) {
      const r = el.getBoundingClientRect();
      if (r.right > doc.clientWidth + 1 || r.left < -1) {
        wide.push({
          tag: el.tagName,
          cls: (el.className?.baseVal ?? el.className ?? "").toString().slice(0, 90),
          left: Math.round(r.left),
          right: Math.round(r.right),
          w: Math.round(r.width),
        });
      }
    }
  }
  return { clientWidth: doc.clientWidth, scrollWidth: doc.scrollWidth, overflow, wide: wide.slice(0, 25) };
});

console.log(JSON.stringify(result, null, 1));
const shot = process.argv[3];
if (shot) {
  await page.screenshot({ path: shot, fullPage: false });
}
await browser.close();
