import { articles as englishArticles } from "../src/data/articles-en.js";
import { articles as chineseArticles } from "../src/data/articles-zh.js";

const SITE_NAME = "Feminist Archive";
const DEFAULT_TITLE = "Feminist Archive | Feminist theory, essays, reviews, and archives";
const DEFAULT_DESCRIPTION =
  "Feminist Archive is an independent platform for feminist theory, essays, reviews, archival writing, reading guides, and public feminist scholarship.";
const DEFAULT_IMAGE = "/images/barbie-cover3.jpg";

const PAGE_META = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  "/en": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  "/zh": {
    title: "Feminist Archive | 女性主义档案",
    description:
      "Feminist Archive 是一个独立女性主义理论、文章、书评与档案写作平台。",
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
  "/en/archive": {
    title: "Archive | Feminist Archive",
    description: "Browse essays, reviews, and archival writing from Feminist Archive.",
  },
  "/zh/archive": {
    title: "归档 | Feminist Archive",
    description: "浏览 Feminist Archive 的中文文章、书评与档案写作。",
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
    .replace(/\s+/g, " ")
    .replace(/<[^>]*>/g, "")
    .trim();
}

function absoluteUrl(origin, value = "") {
  if (!value) return `${origin}${DEFAULT_IMAGE}`;
  if (/^https?:\/\//i.test(value)) return value;
  return `${origin}${value.startsWith("/") ? value : `/${value}`}`;
}

function findArticle(language, articleId) {
  const preferredArticles = language === "zh" ? chineseArticles : englishArticles;
  const fallbackArticles = language === "zh" ? englishArticles : chineseArticles;

  return (
    preferredArticles.find((article) => article.id === articleId) ||
    fallbackArticles.find((article) => article.id === articleId)
  );
}

function getMeta(url) {
  const segments = url.pathname.split("/").filter(Boolean);
  const language = segments[0] === "zh" ? "zh" : "en";

  if (segments[1] === "articles" && segments[2]) {
    const article = findArticle(language, decodeURIComponent(segments[2]));

    if (article) {
      return {
        type: "article",
        title: `${article.title} | ${SITE_NAME}`,
        description: stripText(article.excerpt || article.subtitle || article.title),
        image: article.image || DEFAULT_IMAGE,
        url: url.toString(),
      };
    }
  }

  const pageMeta = PAGE_META[url.pathname.replace(/\/$/, "") || "/"];

  return {
    type: "website",
    title: pageMeta?.title || DEFAULT_TITLE,
    description: pageMeta?.description || DEFAULT_DESCRIPTION,
    image: DEFAULT_IMAGE,
    url: url.toString(),
  };
}

function replaceMeta(html, attrName, attrValue, replacement) {
  const pattern = new RegExp(
    `<meta(?=[^>]*\\b${attrName}="${attrValue}")[^>]*>`,
    "i"
  );

  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace("</head>", `    ${replacement}\n  </head>`);
}

function injectMeta(html, meta, origin) {
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const pageUrl = escapeHtml(meta.url);
  const imageUrl = escapeHtml(absoluteUrl(origin, meta.image));
  let nextHtml = html.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);

  nextHtml = nextHtml.replace(
    /<link rel="canonical" href="[^"]+"\s*\/?>/i,
    `<link rel="canonical" href="${pageUrl}" />`
  );
  nextHtml = replaceMeta(
    nextHtml,
    "name",
    "description",
    `<meta name="description" content="${description}" />`
  );
  nextHtml = replaceMeta(
    nextHtml,
    "property",
    "og:type",
    `<meta property="og:type" content="${escapeHtml(meta.type)}" />`
  );
  nextHtml = replaceMeta(
    nextHtml,
    "property",
    "og:title",
    `<meta property="og:title" content="${title}" />`
  );
  nextHtml = replaceMeta(
    nextHtml,
    "property",
    "og:description",
    `<meta property="og:description" content="${description}" />`
  );
  nextHtml = replaceMeta(
    nextHtml,
    "property",
    "og:url",
    `<meta property="og:url" content="${pageUrl}" />`
  );
  nextHtml = replaceMeta(
    nextHtml,
    "property",
    "og:image",
    `<meta property="og:image" content="${imageUrl}" />`
  );
  nextHtml = replaceMeta(
    nextHtml,
    "name",
    "twitter:title",
    `<meta name="twitter:title" content="${title}" />`
  );
  nextHtml = replaceMeta(
    nextHtml,
    "name",
    "twitter:description",
    `<meta name="twitter:description" content="${description}" />`
  );
  nextHtml = replaceMeta(
    nextHtml,
    "name",
    "twitter:image",
    `<meta name="twitter:image" content="${imageUrl}" />`
  );

  return nextHtml;
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const acceptsHtml = request.headers.get("accept")?.includes("text/html");
  const hasFileExtension = /\.[a-z0-9]+$/i.test(url.pathname);

  if (hasFileExtension && !acceptsHtml) {
    return env.ASSETS.fetch(request);
  }

  const indexUrl = new URL("/", url);
  const response = await env.ASSETS.fetch(indexUrl);
  const html = await response.text();
  const meta = getMeta(url);
  const body = injectMeta(html, meta, url.origin);

  return new Response(body, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
      "cache-control": "public, max-age=300",
    },
  });
}
