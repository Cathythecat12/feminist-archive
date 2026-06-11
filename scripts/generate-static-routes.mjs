import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { articles as englishArticles } from "../src/data/articles-en.js";
import { articles as chineseArticles } from "../src/data/articles-zh.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const distDir = join(rootDir, "dist");
const siteUrl = "https://feministarchivejournal.org";
const siteName = "Feminist Archive";
const defaultImage = "/images/barbie-cover3.jpg";
const defaultDescription =
  "Feminist Archive is an independent platform for feminist theory, essays, reviews, archival writing, reading guides, and public feminist scholarship.";

const pageMeta = {
  "/en": {
    title: "Feminist Archive | Feminist theory, essays, reviews, and archives",
    description: defaultDescription,
  },
  "/zh": {
    title: "Feminist Archive | 女性主义档案",
    description: "Feminist Archive 是一个独立女性主义理论、文章、书评与档案写作平台。",
  },
  "/en/archive-house": {
    title: "Archive House | Feminist Archive",
    description: "Enter the imagined rooms of Feminist Archive.",
  },
  "/zh/archive-house": {
    title: "Archive House | Feminist Archive",
    description: "进入 Feminist Archive 想象中的公共档案馆。",
  },
  "/en/archive": {
    title: "Archive | Feminist Archive",
    description: "Browse essays, reviews, and archival writing from Feminist Archive.",
  },
  "/zh/archive": {
    title: "归档 | Feminist Archive",
    description: "浏览 Feminist Archive 的中文文章、书评与档案写作。",
  },
  "/en/writing": {
    title: "Writing | Feminist Archive",
    description:
      "Critical essays that move between memory, power, everyday life, and feminist thought.",
  },
  "/zh/writing": {
    title: "写作 | Feminist Archive",
    description: "批判、记忆与经验之间，带来思考的女性主义写作。",
  },
  "/en/reviews": {
    title: "Reviews / Guides | Feminist Archive",
    description:
      "Guides and reviews for classic books, theoretical texts, and key feminist concepts.",
  },
  "/zh/reviews": {
    title: "书评与导读 | Feminist Archive",
    description: "对经典书籍、思想文本与关键概念的导读和书评。",
  },
  "/en/contact": {
    title: "Contact | Feminist Archive",
    description: "Contact Feminist Archive for editorial enquiries, submissions, collaboration, and support.",
  },
  "/zh/contact": {
    title: "联系 | Feminist Archive",
    description: "联系 Feminist Archive，进行投稿、合作、编辑来信与支持。",
  },
  "/en/magazine": {
    title: "Magazine | Feminist Archive",
    description: "Essays, reviews, and monthly issues from Feminist Archive.",
  },
  "/zh/magazine": {
    title: "杂志 | Feminist Archive",
    description: "Feminist Archive 的中文杂志页、六月期刊、文章与书评。",
  },
  "/en/magazine/june-issue": {
    title: "June Issue | Feminist Archive",
    description: "The June monthly issue from Feminist Archive.",
  },
  "/zh/magazine/june-issue": {
    title: "六月期刊 | Feminist Archive",
    description: "Feminist Archive 中文六月期刊。",
  },
  "/en/news": {
    title: "News | Feminist Archive",
    description: "Editorial notices, plans, and project updates from Feminist Archive.",
  },
  "/zh/news": {
    title: "新闻 | Feminist Archive",
    description: "Feminist Archive 的编辑公告、计划与项目更新。",
  },
  "/en/summer-update": {
    title: "Summer Update | Feminist Archive",
    description: "A note on the ongoing rebuilding and refinement of the Feminist Archive website.",
  },
  "/zh/summer-update": {
    title: "夏日更新 | Feminist Archive",
    description: "关于 Feminist Archive 网站正在重新优化与建设的说明。",
  },
  "/en/newsletter": {
    title: "Newsletter | Feminist Archive",
    description: "Subscribe to editorial letters, essays, archive notes, and reading recommendations.",
  },
  "/zh/newsletter": {
    title: "通讯 | Feminist Archive",
    description: "订阅 Feminist Archive 的编辑通讯、文章、档案笔记与阅读推荐。",
  },
  "/en/newsletter/privacy": {
    title: "Newsletter Privacy | Feminist Archive",
    description: "How Feminist Archive uses newsletter email addresses.",
  },
  "/zh/newsletter/privacy": {
    title: "通讯隐私 | Feminist Archive",
    description: "Feminist Archive 如何使用通讯订阅邮箱。",
  },
  "/en/our-story": {
    title: "Our Story | Feminist Archive",
    description: "The story of how Feminist Archive began and continues to grow.",
  },
  "/zh/our-story": {
    title: "我们的故事 | Feminist Archive",
    description: "Feminist Archive 如何开始，以及它如何继续生长。",
  },
  "/en/how-we-edit": {
    title: "How We Edit | Feminist Archive",
    description: "A quiet editorial room for reading, revising, arranging, and preserving texts.",
  },
  "/zh/how-we-edit": {
    title: "我们如何编辑 | Feminist Archive",
    description: "关于 Feminist Archive 如何阅读、修改、排版与保存文本。",
  },
  "/en/reading-room": {
    title: "Reading Room | Feminist Archive",
    description: "A public reading room for feminist books, guides, and study paths.",
  },
  "/zh/reading-room": {
    title: "阅读室 | Feminist Archive",
    description: "Feminist Archive 为读者准备的女性主义公共阅读室。",
  },
  "/en/reading-room/guides": {
    title: "Reading Guides | Feminist Archive",
    description: "Guides and study paths from the Feminist Archive Reading Room.",
  },
  "/zh/reading-room/guides": {
    title: "阅读导读 | Feminist Archive",
    description: "Feminist Archive 阅读室的导读与学习路径。",
  },
  "/en/submissions/new": {
    title: "Submit Writing | Feminist Archive",
    description: "Submit essays, fragments, translations, reviews, lecture texts, and archival notes.",
  },
  "/zh/submissions/new": {
    title: "投稿 | Feminist Archive",
    description: "向 Feminist Archive 投稿文章、理论片段、翻译、书评、讲稿与档案笔记。",
  },
  "/en/submissions/guidelines": {
    title: "Submission Guidelines | Feminist Archive",
    description: "Submission guidelines for Feminist Archive.",
  },
  "/zh/submissions/guidelines": {
    title: "投稿标准 | Feminist Archive",
    description: "Feminist Archive 的投稿标准与编辑说明。",
  },
  "/en/submissions/covers": {
    title: "Cover Submissions | Feminist Archive",
    description: "Submit cover images, drawings, and visual materials for Feminist Archive.",
  },
  "/zh/submissions/covers": {
    title: "封面投稿 | Feminist Archive",
    description: "向 Feminist Archive 投稿封面图、绘画与视觉素材。",
  },
  "/en/support": {
    title: "Support Feminist Archive",
    description: "Support the continuation of Feminist Archive.",
  },
  "/zh/support": {
    title: "支持 Feminist Archive",
    description: "支持 Feminist Archive 的继续建设。",
  },
};

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function stripText(value = "") {
  return String(value)
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function absoluteUrl(value = "") {
  return new URL(value || defaultImage, siteUrl).toString();
}

function replaceMeta(html, attrName, attrValue, replacement) {
  const pattern = new RegExp(
    `<meta(?=[^>]*\\b${attrName}="${attrValue}")[^>]*>`,
    "i"
  );

  if (pattern.test(html)) return html.replace(pattern, replacement);

  return html.replace("</head>", `    ${replacement}\n  </head>`);
}

function upsertHeadTag(html, pattern, replacement) {
  if (pattern.test(html)) return html.replace(pattern, replacement);

  return html.replace("</head>", `    ${replacement}\n  </head>`);
}

function applyMeta(template, meta, path) {
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description || defaultDescription);
  const pageUrl = escapeHtml(`${siteUrl}${path}`);
  const imageUrl = escapeHtml(absoluteUrl(meta.image));
  const locale = path.startsWith("/zh") ? "zh_CN" : "en_US";
  let html = template
    .replace(/<html lang="[^"]*">/i, `<html lang="${path.startsWith("/zh") ? "zh-CN" : "en"}">`)
    .replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);

  html = upsertHeadTag(
    html,
    /<link rel="canonical" href="[^"]+"\s*\/?>/i,
    `<link rel="canonical" href="${pageUrl}" />`
  );
  html = replaceMeta(html, "name", "description", `<meta name="description" content="${description}" />`);
  html = replaceMeta(html, "property", "og:type", `<meta property="og:type" content="${escapeHtml(meta.type || "website")}" />`);
  html = replaceMeta(html, "property", "og:locale", `<meta property="og:locale" content="${locale}" />`);
  html = replaceMeta(html, "property", "og:site_name", `<meta property="og:site_name" content="${siteName}" />`);
  html = replaceMeta(html, "property", "og:title", `<meta property="og:title" content="${title}" />`);
  html = replaceMeta(html, "property", "og:description", `<meta property="og:description" content="${description}" />`);
  html = replaceMeta(html, "property", "og:url", `<meta property="og:url" content="${pageUrl}" />`);
  html = replaceMeta(html, "property", "og:image", `<meta property="og:image" content="${imageUrl}" />`);
  html = replaceMeta(html, "name", "twitter:card", `<meta name="twitter:card" content="summary_large_image" />`);
  html = replaceMeta(html, "name", "twitter:title", `<meta name="twitter:title" content="${title}" />`);
  html = replaceMeta(html, "name", "twitter:description", `<meta name="twitter:description" content="${description}" />`);
  html = replaceMeta(html, "name", "twitter:image", `<meta name="twitter:image" content="${imageUrl}" />`);

  html = upsertHeadTag(
    html,
    /<meta property="og:image:secure_url" content="[^"]*"\s*\/?>/i,
    `<meta property="og:image:secure_url" content="${imageUrl}" />`
  );
  html = upsertHeadTag(
    html,
    /<meta property="og:image:alt" content="[^"]*"\s*\/?>/i,
    `<meta property="og:image:alt" content="${title}" />`
  );

  return html;
}

async function writeRoute(template, path, meta) {
  const outputPath = join(distDir, path.replace(/^\//, ""), "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, applyMeta(template, meta, path), "utf8");
}

const template = await readFile(join(distDir, "index.html"), "utf8");

for (const [path, meta] of Object.entries(pageMeta)) {
  await writeRoute(template, path, {
    type: "website",
    image: defaultImage,
    ...meta,
  });
}

for (const article of englishArticles) {
  await writeRoute(template, `/en/articles/${article.id}`, {
    type: "article",
    title: `${article.title} | ${siteName}`,
    description: stripText(article.excerpt || article.subtitle || article.title),
    image: article.image || defaultImage,
  });
}

for (const article of chineseArticles) {
  await writeRoute(template, `/zh/articles/${article.id}`, {
    type: "article",
    title: `${article.title} | ${siteName}`,
    description: stripText(article.excerpt || article.subtitle || article.title),
    image: article.image || defaultImage,
  });
}

console.log("Generated static route HTML for pages and articles.");
