import { writeFile } from "node:fs/promises";
import { articles as englishArticles } from "../src/data/articles-en.js";
import { articles as chineseArticles } from "../src/data/articles-zh.js";

const SITE_URL = "https://feministarchivejournal.org";

const pages = [
  ["", "en", "1.0"],
  ["zh", "zh-CN", "1.0"],
  ["en/magazine", "en", "0.9"],
  ["zh/magazine", "zh-CN", "0.9"],
  ["en/magazine/june-issue", "en", "0.9"],
  ["zh/magazine/june-issue", "zh-CN", "0.9"],
  ["en/archive", "en", "0.8"],
  ["zh/archive", "zh-CN", "0.8"],
  ["en/writing", "en", "0.8"],
  ["zh/writing", "zh-CN", "0.8"],
  ["en/reviews", "en", "0.8"],
  ["zh/reviews", "zh-CN", "0.8"],
  ["en/reading-room", "en", "0.7"],
  ["zh/reading-room", "zh-CN", "0.7"],
  ["en/contact", "en", "0.6"],
  ["zh/contact", "zh-CN", "0.6"],
  ["en/newsletter", "en", "0.6"],
  ["zh/newsletter", "zh-CN", "0.6"],
  ["en/submissions/guidelines", "en", "0.6"],
  ["zh/submissions/guidelines", "zh-CN", "0.6"],
];

function loc(path) {
  return `${SITE_URL}/${path}`.replace(/\/$/, "/");
}

function urlEntry(path, priority, lastmod = "2026-06-08") {
  return `  <url>
    <loc>${loc(path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const pageEntries = pages.map(([path, , priority]) => urlEntry(path, priority));

const articleEntries = [
  ...englishArticles
    .filter((article) => !article.hidden)
    .map((article) => urlEntry(`en/articles/${article.id}`, "0.8")),
  ...chineseArticles
    .filter((article) => !article.hidden)
    .map((article) => urlEntry(`zh/articles/${article.id}`, "0.8")),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...pageEntries, ...articleEntries].join("\n")}
</urlset>
`;

await writeFile("public/sitemap.xml", sitemap);
