import { useEffect, useMemo, useRef, useState } from "react";
import { Link2, List, Send } from "lucide-react";
import { articles as englishArticles } from "./data/articles-en";
import { articles as chineseArticles } from "./data/articles-zh";
import { articles as frenchArticles } from "./data/articles-fr";
import MonthlyThemePage from "./page/MonthlyThemePage";
import ArchivePage from "./page/ArchivePage";
import MagazinePage from "./page/MagazinePage";
import ContactPage from "./page/ContactPage";
import ArchiveHousePage from "./page/ArchiveHousePage";
import OurStoryPage from "./page/OurStoryPage";
import NewsletterPage from "./page/NewsletterPage";
import NewsletterPrivacyPage from "./page/NewsletterPrivacyPage";
import CoverSubmissionPage from "./page/CoverSubmissionPage";
import ParlourPage from "./page/ParlourPage";
import NewsPage from "./page/NewsPage";
import SubmissionGuidelinesPage from "./page/SubmissionGuidelinesPage";
import SubmissionPage from "./page/SubmissionPage";
import MonthlyThemePageZh from "./page/MonthlyThemePageZh";
import ReadingRoomPage from "./page/ReadingRoomPage";
import DeepReadingPage from "./page/DeepReadingPage";
import MagazineCategoryPage from "./page/MagazineCategoryPage";
import { submitWebsiteForm } from "./utils/formSubmit";
import HowWeEditPage from "./page/HowWeEditPage";
import MagazineMenuOverlay from "./components/MagazineMenuOverlay";
const HOME_ARCHIVE_LIMIT = 6;
// Temporarily hidden; switch to true when the Save the Elephant campaign should return to the homepage.
const SHOW_SAVE_THE_ELEPHANT_ON_HOME = false;
const IS_MAINTENANCE_MODE = import.meta.env.VITE_MAINTENANCE_MODE === "true";
const ARTICLE_GLOSSARY_TERMS = {
  "reproduction-is-labour": {
    zh: [
      {
        key: "marxist-feminism",
        term: "马克思主义女性主义",
        title: "马克思主义女性主义",
        text:
          "一种从资本主义、劳动分配与阶级结构出发的女性主义分析。它关注家务、照护、生育等再生产劳动如何被社会依赖，却常常被女性承担、被私人化、且不被工资和经济统计承认。",
      },
      {
        key: "caliban-and-the-witch",
        term: "《卡利班与女巫》",
        title: "《卡利班与女巫》",
        text: "我们对这本书有解读文章，点击这里查看！",
        actionLabel: "查看导读",
        targetPage: "caliban-guide",
      },
    ],
    en: [
      {
        key: "marxist-feminism",
        term: "Marxist feminist",
        title: "Marxist feminism",
        text:
          "A feminist approach that analyzes women’s oppression through capitalism, class relations, and the organization of labor. It pays particular attention to domestic work, care work, childbirth, and other forms of reproductive labor that sustain society but are often unpaid or made invisible.",
      },
    ],
  },
};

const PAGE_ROUTES = {
  "archive-house": "archive-house",
  "archive-page": "archive",
  "contact-page": "contact",
  "cover-submission": "submissions/covers",
  donate: "donate",
  "donation-drive": "support",
  guidelines: "guidelines",
  "how-we-edit": "how-we-edit",
  magazine: "magazine",
  "reviews-page": "reviews",
  "writing-page": "writing",
  "monthly-theme": "magazine/june-issue",
  "monthly-theme-zh": "magazine/june-issue",
  "news-page": "news",
  "newsletter-page": "newsletter",
  "newsletter-privacy": "newsletter/privacy",
  "our-story": "our-story",
  parlour: "parlour",
  "print-edition": "print",
  "reading-guides": "reading-room/guides",
  "caliban-guide": "reading-room/caliban-and-the-witch",
  "reading-room": "reading-room",
  "deep-reading": "deep-reading",
  "submission-guidelines": "submissions/guidelines",
  "submission-page": "submissions/new",
  "summer-update": "summer-update",
};

const ROUTE_PAGES = Object.entries(PAGE_ROUTES).reduce((routes, [page, route]) => {
  if (page !== "monthly-theme-zh") {
    routes[route] = page;
  }

  return routes;
}, {});

const getLanguageStorageKey = () => {
  if (typeof window === "undefined") return "fa-language";
  return `fa-language:${window.location.hostname || "local"}`;
};

const getInitialLanguage = () => {
  if (typeof window === "undefined") return "en";

  const hostname = window.location.hostname.toLowerCase();
  const pathname = window.location.pathname.toLowerCase();

  if (hostname.startsWith("zh.") || pathname === "/zh" || pathname.startsWith("/zh/")) {
    return "zh";
  }

  const isLocalPreview =
    hostname === "localhost" || hostname === "127.0.0.1" || hostname === "";

  if (isLocalPreview) {
    const savedLanguage = window.localStorage.getItem(getLanguageStorageKey());
    if (savedLanguage === "en" || savedLanguage === "zh") {
      return savedLanguage;
    }
  }

  return "en";
};

const text = {
  en: {
    siteName: "Feminist Archive",
    siteTagline: "A feminist platform for theory, essays, and archival writing.",
    navHome: "Home",
    navArchive: "Archive",
    navSubmit: "Submit",
    navContact: "Contact",
    navGuidelines: "Guidelines",
    navDonate: "Donate",

    heroEyebrow: "Independent feminist publication",
    heroTitle:
      "Essays, criticism, archives, and long-form writing for feminist intellectual life.",
    heroText:
      "An independent publication for theory, criticism, archival research, translations, and essays that refuse intellectual simplification.",
    heroSubmit: "Submit writing",
    heroBrowse: "Browse archive",

    themeLabel: "This month",
    themeIssueLabel: "Monthly Issue",
    themeTitle: "Archive of Refusal",
    themeText:
      "On dissent, memory, and the forms of life that resist easy incorporation.",

    aboutLabel: "About the platform",
    aboutTitle: "A magazine in form, an archive in structure.",
    aboutText:
      "The aim is not only to publish texts, but to organise them by theme, concept, and keyword, so that feminist writing remains searchable, reusable, and historically meaningful.",

    archiveLabel: "Archive",
    archiveTitle: "Search and browse",
    archivePlaceholder: "Search by title, author, concept, or keyword...",

    submitLabel: "Submit",
    submitTitle: "Editorial review before publication",
    submitText:
      "Submissions are reviewed manually. We welcome essays, theoretical fragments, interventions, translations, reviews, lecture texts, and archival notes. Please fill in the form on the right; it will be sent directly to the editors.",
    submitNote1: "Chinese preferred, bilingual work welcome",
    submitNote2: "Pen names and anonymous publication possible on request",
    submitNote3: "Editorial outcomes: accept / revision / decline",
    submitGuidelines: "Submission guidelines: please read here",

    formTitle: "Title",
    formAuthor: "Author / Pen name",
    formEmail: "Email",
    formKeywords: "Keywords / Tags",
    formAbstract: "Abstract / editorial note",
    formBody: "Paste your writing here...",
    formButton: "Submit",

    successTitle: "Submission received",
    successText1:
      "Your submission has been recorded. Please wait for editorial review.",
    successText2:
      "If your piece is accepted, or if there are points worth further revision and discussion, we will contact you.",
    successText3:
      "We are sorry that not every submission will receive a reply.",
    successText4:
      "To avoid delays and confusion in the review process, please do not submit the same piece repeatedly, though different submissions are always welcome.",

    contactLabel: "Contact",
    contactTitle: "Contact and support",
    contactText:
      "For editorial enquiries, submissions, collaboration, or support, please contact us through the addresses below.",
    donationLink: "Donation link",

    guidelinesTitle: "Submission Guidelines",
    guidelinesIntro:
      "We welcome writing that is theoretically grounded, conceptually rigorous, and attentive to contemporary social reality.",
    guidelines1:
      "Arguments should be clearly developed and supported. We welcome writing that has a definite line of thought and can sustain its claims.",
    guidelines2:
      "We especially welcome analysis that engages with contemporary social phenomena, history, and real conditions of life, rather than remaining purely abstract.",
    guidelines3:
      "When factual claims are made, they should be carefully verified and supported by accurate sources.",
    guidelines4:
      "For example, if a submission states that car safety testing has historically relied on male body models, this claim should be fact-checked and accompanied by a reliable source.",
    guidelines5:
      "We welcome essays, theoretical fragments, interventions, translations, reviews, lecture texts, and archival notes, provided that they are serious, readable, and intellectually responsible.",
    guidelines6:
      "Chinese submissions are especially welcome. Bilingual work is also welcome, and the platform may later support translation and parallel publication.",

    backToHome: "← Back to home",

    donateTitle: "Support us",
    donateText:
      "Feminist Archive is an independent project sustained by its readers. If you wish to support the continuation of this platform, you may do so through the following channels.",

    contactPageTitle: "Contact",
    contactPageIntro:
      "We are an independent platform for feminist writing and archiving. If you have any questions, please contact us through the addresses below.",
    contactGeneral: "General enquiries: editorial@feministarchivejournal.org",
    contactSubmission:
      "Submission enquiries: submissions@feministarchivejournal.org",
    contactCritique:
      "Criticism and suggestions: editorial@feministarchivejournal.org",
    contactNote1:
      "If you find factual errors in an article, or hold a different view, please contact the editorial address.",
    contactNote2:
      "If you have a systematic critique of an article, please submit it in the form of a serious written piece. If accepted, it may later be linked alongside the relevant article.",

    footerHome: "Home",
    footerArchive: "Archive",
    footerSubmit: "Submit",
    footerContact: "Contact",
  },

  zh: {
    siteName: "Feminist Archive",
    siteTagline: "一个女性主义理论、文章与档案写作平台。",
    navHome: "主页",
    navArchive: "归档",
    navSubmit: "投稿",
    navContact: "联系",
    navGuidelines: "投稿标准",
    navDonate: "捐助",

    heroEyebrow: "独立女性主义出版平台",
    heroTitle: "为可检索的女性主义公共写作而设的理论、文章与档案平台。",
    heroText:
      "Feminist Archive 既是一本杂志，也是一种知识平台：它容纳论文、批评性介入、研究型写作、翻译、证词与长篇思考。",
    heroSubmit: "我要投稿",
    heroBrowse: "浏览归档",

    themeLabel: "本月主题",
    themeIssueLabel: "本月期刊",
    themeTitle: "拒绝的档案",
    themeText: "关于抵抗、记忆，以及那些拒绝被轻易收编的生活形式。",

    aboutLabel: "关于平台",
    aboutTitle: "形式上是杂志，结构上是档案库。",
    aboutText:
      "这个平台的目标不只是发布文章，而是按主题、概念与关键词组织文本，使女性主义写作可以被检索、再利用，并在历史中留下痕迹。",

    archiveLabel: "归档",
    archiveTitle: "搜索与浏览",
    archivePlaceholder: "按标题、作者、概念或关键词搜索……",

    submitLabel: "投稿",
    submitTitle: "发表前人工审核",
    submitText:
      "所有投稿都将经过人工审核。我们欢迎论文、理论片段、批评性介入、翻译、书评、讲稿与档案性写作。请在右侧填写信息，提交后会直接发送给编辑部。",
    submitNote1: "同样欢迎英文写作，通过后会刊登在 Feminist Archive 英文版块",
    submitNote2: "可使用笔名，必要时可匿名发表",
    submitNote3: "编辑结果：接受 / 修改后重投 / 拒绝",
    submitGuidelines: "投稿标准请看这里",

    formTitle: "标题",
    formAuthor: "作者 / 笔名",
    formEmail: "邮箱",
    formKeywords: "关键词 / 标签",
    formAbstract: "摘要 / 给编辑的说明",
    formBody: "请把正文粘贴在这里……",
    formButton: "提交",

    successTitle: "投稿成功",
    successText1:
      "你的稿件已被记录。接下来请等待人工审核。收到自动回复的确认邮件即代表发送成功。",
    successText2:
      "如果稿件通过，或有值得进一步修改与讨论之处，我们会联系你。请耐心等待。",
    successText3:
      "为避免造成更久的审稿和记录混乱，请勿重复投稿，但欢迎投递不同文章。",
    successText4:
      "很抱歉，由于我们收到的投稿量较大，并非每一份投稿都会收到回复。",

    contactLabel: "联系",
    contactTitle: "联系与支持",
    contactText: "你可以通过以下邮箱联系编辑部，或支持平台继续运行。",
    donationLink: "捐助链接",

    guidelinesTitle: "投稿标准",
    guidelinesIntro:
      "我们欢迎立论清楚、概念严谨、并且能够面对现实社会问题的写作。",
    guidelines1:
      "文章应当有清晰的发展脉络与论证基础。我们欢迎有明确问题意识、能够支撑自身判断的写作。",
    guidelines2:
      "我们尤其欢迎与现实社会现象、历史处境与具体生活条件相结合的分析，而不只是停留在抽象概念层面。",
    guidelines3:
      "凡涉及事实性判断，都应认真核对，并尽量提供准确可靠的信息来源。",
    guidelines4:
      "例如：如果文章提出某一社会现象或历史事实，应尽量核实这一说法，并引用可靠来源。",
    guidelines5:
      "我们欢迎论文、理论片段、批评性介入、翻译、书评、讲稿与档案性文字，但它们都应当具有认真、可读且负责任的写作态度。",
    guidelines6:
      "我们欢迎双语写作。未来平台可进一步支持译文与平行发布。",

    backToHome: "← 返回主页",

    donateTitle: "支持我们",
    donateText:
      "Feminist Archive 是一个由读者支持的独立项目。如果你希望支持平台持续运作，可以通过以下方式。",

    contactPageTitle: "联系",
    contactPageIntro:
      "我们是一个独立的女性主义写作与档案平台。如有任何问题，请通过以下邮箱联系。",
    contactGeneral: "常规问题：editorial@feministarchivejournal.org",
    contactSubmission: "投稿问题：submissions@feministarchivejournal.org",
    contactCritique: "批评建议：editorial@feministarchivejournal.org",
    contactNote1:
      "如果在文章中发现事实错误，或有不同意见，请联系编辑邮箱。",
    contactNote2:
      "若对相关文章有系统性的观点批判，请同样以专业文章方式写作并发送；若通过审核，可连接在相关文章旁。",

    footerHome: "主页",
    footerArchive: "归档",
    footerSubmit: "投稿",
    footerContact: "联系",
  },
};

function MaintenancePage() {
  return (
    <main className="maintenance-page">
      <section className="maintenance-card">
        <div className="maintenance-label">FEMINIST ARCHIVE</div>

        <h1>Site under maintenance</h1>

        <p className="maintenance-intro">
          Feminist Archive is currently being prepared and refined.
        </p>

        <p>
          We are working on the full site and will return with a more complete
          platform for feminist writing, critical reflection, and archival work.
        </p>

        <p>
          For enquiries, submissions, or editorial matters, please contact us
          temporarily at:
        </p>

        <a
          className="maintenance-email"
          href="mailto:submissions@feministarchivejournal.org"
        >
          submissions@feministarchivejournal.org
        </a>

        <div className="maintenance-footer">
          Rigorous writing · Critical reflection · Archival work
        </div>
      </section>
    </main>
  );
}

function MainApp() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState("main");
  const [language, setLanguage] = useState(getInitialLanguage);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articleReturnPage, setArticleReturnPage] = useState("monthly-theme");
  const [readingProgress, setReadingProgress] = useState(0);
  const [donationType, setDonationType] = useState("monthly");
  const [donationAmount, setDonationAmount] = useState("10");
  const [donationEmail, setDonationEmail] = useState("");
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showArticleShare, setShowArticleShare] = useState(false);
  const [showArticleMenu, setShowArticleMenu] = useState(false);
  const [articleShareVisible, setArticleShareVisible] = useState(false);
  const [activeGlossaryKey, setActiveGlossaryKey] = useState("");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [isSubmittingArticle, setIsSubmittingArticle] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");
  const [donationEmailStatus, setDonationEmailStatus] = useState("");
  const [hasResolvedInitialUrl, setHasResolvedInitialUrl] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const toastTimerRef = useRef(null);

  const showToast = (message) => {
    if (!message) return;

    window.clearTimeout(toastTimerRef.current);
    setToastMessage(message);
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage("");
    }, 3200);
  };

  useEffect(() => {
    return () => window.clearTimeout(toastTimerRef.current);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(getLanguageStorageKey(), language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  useEffect(() => {
    const elements = document.querySelectorAll(".donation-reveal");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.25,
      }
    );
  
    elements.forEach((element) => observer.observe(element));
  
    return () => observer.disconnect();
  }, [currentPage]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setReadingProgress(progress);

      if (currentPage === "article-detail" && selectedArticle) {
        const articleBody = document.querySelector(".mag-article-body");

        if (articleBody) {
          const rect = articleBody.getBoundingClientRect();
          const hasEnteredArticle = rect.top < window.innerHeight * 0.62;
          const hasNotReachedEnd = rect.bottom > window.innerHeight * 0.38;

          setArticleShareVisible(hasEnteredArticle && hasNotReachedEnd);
        }
      } else {
        setArticleShareVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage, selectedArticle]);
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }, 0);
  
    return () => clearTimeout(timer);
  }, [currentPage, selectedArticle?.id]);

  const t = text[language] || text.en;

  const categories = ["All", "Writing", "Reviews", "Archive"];

  const currentArticles =
  language === "zh" ? chineseArticles : englishArticles;

  const visibleArticles = useMemo(
    () => currentArticles.filter((article) => !article.hidden),
    [currentArticles]
  );
	
const filteredArticles = useMemo(() => {
  return visibleArticles.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;

    const haystack = [
      article.title,
      article.author,
      article.category,
      article.excerpt,
      ...(article.tags || []),
    ]
      .join(" ")
      .toLowerCase();

    return matchesCategory && haystack.includes(search.toLowerCase());
  });
}, [search, activeCategory, visibleArticles]);

const homepageArchiveArticles = filteredArticles.slice(0, HOME_ARCHIVE_LIMIT);

  const hasChineseText = (value = "") => /[\u4e00-\u9fff]/.test(value);

  const getArticleLanguage = (article = selectedArticle) => {
    if (!article) return language;

    if (article.language === "fr") return "fr";
    if (article.language === "zh") return "zh";
    if (article.language === "en") return "en";

    return hasChineseText(`${article.title || ""} ${article.excerpt || ""}`)
      ? "zh"
      : "en";
  };

  const articleShareLanguage = getArticleLanguage(selectedArticle);
  const articleShareUsesChinese = articleShareLanguage === "zh";

  const navButtonStyle = {
    background: "none",
    border: "none",
    padding: 0,
    color: "inherit",
    cursor: "pointer",
    font: "inherit",
  };

  const footerButtonStyle = navButtonStyle;

  const routedPages = new Set([
    "main",
    "magazine",
    "monthly-theme",
    "monthly-theme-zh",
    "writing-page",
    "reviews-page",
    "archive-page",
    "archive-house",
    "reading-room",
    "deep-reading",
    "reading-guides",
    "caliban-guide",
    "contact-page",
    "newsletter-page",
    "newsletter-privacy",
    "cover-submission",
    "submission-guidelines",
    "submission-page",
    "summer-update",
    "news-page",
    "parlour",
    "our-story",
    "how-we-edit",
    "guidelines",
    "donate",
    "donation-drive",
    "print-edition",
  ]);

  const buildPageUrl = (page = currentPage, pageLanguage = language) => {
    if (typeof window === "undefined") return "";

    const route = PAGE_ROUTES[page] || "";
    const url = new URL(window.location.origin);

    if (!route && pageLanguage === "en") {
      url.pathname = "/";
      return url.toString();
    }

    const languagePrefix = pageLanguage === "zh" ? "zh" : "en";
    url.pathname = route ? `/${languagePrefix}/${route}` : `/${languagePrefix}`;

    return url.toString();
  };

  const syncPageUrl = (page = currentPage, pageLanguage = language) => {
    const url = buildPageUrl(page, pageLanguage);

    if (!url) return;

    window.history.replaceState({}, "", url);
  };

  const buildArticleUrl = (article, articleLanguage = getArticleLanguage(article)) => {
    if (typeof window === "undefined" || !article?.id) return "";

    const url = new URL(window.location.origin);
    const languagePrefix =
      articleLanguage === "zh" ? "zh" : articleLanguage === "fr" ? "fr" : "en";
    url.pathname = `/${languagePrefix}/articles/${article.id}`;
    return url.toString();
  };

  const syncArticleUrl = (article, articleLanguage = language) => {
    const url = buildArticleUrl(article, articleLanguage);

    if (!url) return;

    window.history.replaceState({}, "", url);
  };

  const openArticleFrom = (article, returnPage = currentPage) => {
    setSelectedArticle(article);
    setActiveGlossaryKey("");
    setArticleReturnPage(returnPage);
    setCurrentPage("article-detail");
    syncArticleUrl(article, getArticleLanguage(article));
  };

  const getArticleShareUrl = (article = selectedArticle) => {
    return buildArticleUrl(article);
  };

  const writeArticleLinkToClipboard = async () => {
    const url = getArticleShareUrl();

    if (!url) return false;

    return writeTextToClipboard(url);
  };

  const writeTextToClipboard = async (text) => {
    if (!text) return false;

    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    return true;
  };

  const renderArticleParagraphText = (text, blockIndex) => {
    const glossaryTerms =
      ARTICLE_GLOSSARY_TERMS[selectedArticle?.id]?.[language] || [];

    if (!glossaryTerms.length || typeof text !== "string") {
      return text;
    }

    const pieces = [];
    let cursor = 0;
    let matchIndex = 0;

    while (cursor < text.length) {
      const nextMatch = glossaryTerms
        .map((item) => ({
          term: item,
          index: text.indexOf(item.term, cursor),
        }))
        .filter((item) => item.index !== -1)
        .sort((a, b) => a.index - b.index || b.term.term.length - a.term.term.length)[0];

      if (!nextMatch) {
        pieces.push(text.slice(cursor));
        break;
      }

      if (nextMatch.index > cursor) {
        pieces.push(text.slice(cursor, nextMatch.index));
      }

      const term = nextMatch.term;
      const glossaryKey = `${selectedArticle.id}-${term.key}-${blockIndex}-${matchIndex}`;
      const isOpen = activeGlossaryKey === glossaryKey;

      pieces.push(
        <span className="article-glossary-anchor" key={glossaryKey}>
          <button
            className={`article-glossary-term ${isOpen ? "is-active" : ""}`}
            type="button"
            aria-expanded={isOpen}
            onClick={() => setActiveGlossaryKey(isOpen ? "" : glossaryKey)}
          >
            {term.term}
          </button>
          {isOpen && (
            <span className="article-glossary-popover" role="note">
              <span className="article-glossary-title">{term.title}</span>
              <span>{term.text}</span>
              {term.targetPage && (
                <button
                  className="article-glossary-action"
                  type="button"
                  onClick={() => {
                    setActiveGlossaryKey("");
                    setCurrentPage(term.targetPage);
                    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                  }}
                >
                  {term.actionLabel || (language === "zh" ? "查看" : "Open")}
                </button>
              )}
            </span>
          )}
        </span>
      );

      cursor = nextMatch.index + term.term.length;
      matchIndex += 1;
    }

    return pieces;
  };

  const getArticleShareText = (article = selectedArticle) => {
    const url = getArticleShareUrl(article);
    if (!article || !url) return "";

    return `${article.title}\n${url}`;
  };

  const copyArticleLink = async (
    message = articleShareUsesChinese ? "链接已复制" : "Article link copied."
  ) => {
    const copied = await writeArticleLinkToClipboard();

    if (!copied) return;

    showToast(message);
  };

  const shareSelectedArticle = async ({ fallbackToModal = true } = {}) => {
    if (!selectedArticle) return;

    const shareUrl = getArticleShareUrl();
    const shareData = {
      title: selectedArticle.title,
      text: selectedArticle.excerpt || selectedArticle.title,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error?.name === "AbortError") return;
      }
    }

    if (fallbackToModal) {
      setShowArticleShare(true);
      return;
    }

    await copyArticleLink(
      articleShareUsesChinese
        ? "当前浏览器不支持系统分享，文章链接已复制。"
        : "This browser does not support system sharing. Article link copied."
    );
  };

  const shareToXiaohongshu = async () => {
    window.open("https://www.xiaohongshu.com/explore", "_blank", "noopener,noreferrer");
    await copyArticleLink("链接已复制。小红书打开后可以直接粘贴分享。");
  };

  const shareToWechat = async () => {
    const copied = await writeArticleLinkToClipboard();

    if (copied) {
      showToast("链接已复制。微信打开后可以粘贴给朋友或朋友圈。");
    }

    window.open("weixin://", "_self");
  };

  const shareToInstagram = async () => {
    window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
    await writeTextToClipboard(getArticleShareText());
    showToast("Article title and link copied. Opening Instagram now; paste them into your post, story, or message.");
  };

  const copyAndOpenShareDestination = async ({ url, message }) => {
    window.open(url, "_blank", "noopener,noreferrer");
    await writeTextToClipboard(getArticleShareText());
    showToast(message);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hasResolvedInitialUrl) return;

    const params = new URLSearchParams(window.location.search);
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    const pathLanguage = ["en", "zh", "fr"].includes(pathSegments[0])
      ? pathSegments[0]
      : null;
    const routeSegments = pathLanguage ? pathSegments.slice(1) : pathSegments;
    const pathRoute = routeSegments.join("/");
    const pathArticleId =
      routeSegments[0] === "articles" && routeSegments[1]
        ? decodeURIComponent(routeSegments[1])
        : "";
    const articleId = params.get("article");
    const pageName = params.get("page");
    const urlLanguage = pathLanguage || params.get("lang");

    if (pathArticleId || articleId) {
      const resolvedArticleId = pathArticleId || articleId;
      const articlePool =
        pathLanguage === "fr"
          ? frenchArticles
          : pathLanguage === "zh"
            ? chineseArticles
            : pathLanguage === "en"
              ? englishArticles
              : currentArticles;
      const article =
        articlePool.find((entry) => entry.id === resolvedArticleId) ||
        frenchArticles.find((entry) => entry.id === resolvedArticleId) ||
        chineseArticles.find((entry) => entry.id === resolvedArticleId) ||
        englishArticles.find((entry) => entry.id === resolvedArticleId);

      if (article) {
        const articleLanguage =
          urlLanguage === "en" || urlLanguage === "zh" || urlLanguage === "fr"
            ? urlLanguage
            : getArticleLanguage(article);

        window.setTimeout(() => {
          if (articleLanguage !== "fr" && articleLanguage !== language) {
            setLanguage(articleLanguage);
          }
          setSelectedArticle(article);
          setArticleReturnPage("archive-page");
          setCurrentPage("article-detail");
          syncArticleUrl(article, articleLanguage);
          setHasResolvedInitialUrl(true);
        }, 0);
        return;
      }
    }

    const routedPathPage = ROUTE_PAGES[pathRoute];

    if (routedPathPage && routedPages.has(routedPathPage)) {
      window.setTimeout(() => {
        if ((urlLanguage === "en" || urlLanguage === "zh") && urlLanguage !== language) {
          setLanguage(urlLanguage);
        }
        setCurrentPage(routedPathPage);
        setHasResolvedInitialUrl(true);
      }, 0);
      return;
    }

    if ((pathLanguage === "en" || pathLanguage === "zh") && routeSegments.length === 0) {
      window.setTimeout(() => {
        if (pathLanguage !== language) {
          setLanguage(pathLanguage);
        }
        setCurrentPage("main");
        setHasResolvedInitialUrl(true);
      }, 0);
      return;
    }

    if (pageName && routedPages.has(pageName)) {
      window.setTimeout(() => {
        if ((urlLanguage === "en" || urlLanguage === "zh") && urlLanguage !== language) {
          setLanguage(urlLanguage);
        }
        setCurrentPage(pageName);
        setHasResolvedInitialUrl(true);
      }, 0);
      return;
    }

    window.setTimeout(() => setHasResolvedInitialUrl(true), 0);
  }, [currentArticles, language, hasResolvedInitialUrl]);

  useEffect(() => {
    if (!hasResolvedInitialUrl) return;

    if (currentPage === "article-detail" && selectedArticle) {
      syncArticleUrl(selectedArticle, getArticleLanguage(selectedArticle));
      return;
    }

    syncPageUrl(currentPage);
  }, [currentPage, selectedArticle?.id, language, hasResolvedInitialUrl]);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof document === "undefined" ||
      currentPage !== "article-detail" ||
      !selectedArticle?.image
    ) {
      return undefined;
    }

    const imageUrl = new URL(selectedArticle.image, window.location.origin).href;
    const existingPreload = Array.from(
      document.querySelectorAll('link[rel="preload"][as="image"]')
    ).some((entry) => entry.href === imageUrl);

    if (existingPreload) {
      return undefined;
    }

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = selectedArticle.image;
    link.fetchPriority = "high";
    link.dataset.faArticleImagePreload = selectedArticle.id || "article";
    document.head.appendChild(link);

    return () => {
      link.remove();
    };
  }, [currentPage, selectedArticle?.id, selectedArticle?.image]);

  const getArticleReturnLabel = () => {
    const returnLanguage = getArticleLanguage(selectedArticle);

    if (returnLanguage === "fr") {
      if (articleReturnPage === "reading-room") return "← SALLE DE LECTURE";
      if (articleReturnPage === "magazine") return "← MAGAZINE";
      if (articleReturnPage === "archive-page") return "← ARCHIVES";
      if (articleReturnPage === "main") return "← ACCUEIL";
      return "← NUMÉRO";
    }

    if (articleReturnPage === "reading-room") {
      return language === "zh" ? "← 阅读室" : "← READING ROOM";
    }

    if (articleReturnPage === "magazine") {
      return "← MAGAZINE";
    }

    if (articleReturnPage === "archive-page") {
      return language === "zh" ? "← 归档" : "← ARCHIVE";
    }

    if (articleReturnPage === "main") {
      return "← HOME";
    }

    return "← ISSUE";
  };

  function Header({ simple = false, hideLanguage = false }) {
    return (
      <header className="site-header">
        <div className="brand-block">
        <button
  className="site-name logo-button"
  onClick={() => setCurrentPage("archive-house")}
>
  {t.siteName}
</button>
          <div className="site-tagline">{t.siteTagline}</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: simple ? "row" : "column",
            gap: "14px",
            alignItems: "flex-end",
            flexWrap: "wrap",
          }}
        >
          {!simple && (
            <nav className="top-nav">
              <button
                style={navButtonStyle}
                onClick={() => setCurrentPage("main")}
              >
                {t.navHome}
              </button>
              <a href="#archive">{t.navArchive}</a>
              <a href="#submit">{t.navSubmit}</a>
              <button
                style={navButtonStyle}
                onClick={() => setCurrentPage("contact-page")}
              >
                {t.navContact}
              </button>
            </nav>
          )}
{!hideLanguage && (
  <div className="language-dropdown">
    <button
      className="language-trigger"
      onClick={() => setShowLanguageMenu(!showLanguageMenu)}
    >
      Language
    </button>

    {showLanguageMenu && (
      <div className="language-menu">
        <button
          onClick={() => {
            setLanguage("en");
            setShowLanguageMenu(false);
          }}
        >
          English
        </button>

        <button
          onClick={() => {
            setLanguage("zh");
            setShowLanguageMenu(false);
          }}
        >
          中文
        </button>
      </div>
    )}
  </div>
)}
        </div>
      </header>
    );
  }

  function renderGuidelinesPage() {
  
    return (
      <div className="site-shell">
        <Header simple />

        <main>
          <section className="archive-section" style={{ borderTop: "none" }}>
            <div className="section-heading">
              <div>
                <div className="section-label">{t.navGuidelines}</div>
                <h2>{t.guidelinesTitle}</h2>
              </div>
            </div>

            <div className="guidelines-editorial-page">
  <section className="guidelines-opening">
    <p>{t.guidelinesIntro}</p>
  </section>

  <section className="guidelines-principles">
    <div className="guideline-row">
      <span>01</span>
      <h3>Argument</h3>
      <p>{t.guidelines1}</p>
    </div>

    <div className="guideline-row">
      <span>02</span>
      <h3>Reality</h3>
      <p>{t.guidelines2}</p>
    </div>

    <div className="guideline-row">
      <span>03</span>
      <h3>Verification</h3>
      <p>{t.guidelines3}</p>
    </div>

    <div className="guideline-row">
      <span>04</span>
      <h3>Sources</h3>
      <p>{t.guidelines4}</p>
    </div>

    <div className="guideline-row">
      <span>05</span>
      <h3>Form</h3>
      <p>{t.guidelines5}</p>
    </div>

    <div className="guideline-row">
      <span>06</span>
      <h3>Language</h3>
      <p>{t.guidelines6}</p>
    </div>
  </section>

  <section className="guidelines-note">
    <p>
      Submissions are read manually. We value seriousness, clarity,
      intellectual responsibility, and writing that is willing to sustain
      its own claims.
    </p>
  </section>
  <section className="submission-deep-guidance">
  <div className="submission-deep-line"></div>

  <p>
    {language === "zh"
      ? "如果你希望获得更细致的写作指导、编辑建议与 Feminist Archive 的完整写作方法，可以进入我们的写作指南。"
      : "If you would like more detailed guidance on writing, editing, structure, and the editorial philosophy of Feminist Archive, you may enter our writing guide."}
  </p>

  <button
    className="submission-deep-button"
    onClick={() => setCurrentPage("submission-guidelines")}
  >
    {language === "zh"
      ? "进入写作指南"
      : "Enter the Writing Guide"}
  </button>
</section>
  <button
    className="contact-home-link"
    onClick={() => setCurrentPage("main")}
  >
    {t.backToHome}
  </button>
</div>
          </section>
        </main>
      </div>
    );
  }
  function renderDonatePage() {
    return (
      <div className="site-shell">
        <Header simple />
  
        <main>
          <section className="archive-section" style={{ borderTop: "none" }}>
            <div className="section-heading">
              <div>
                <div className="section-label">{t.navDonate}</div>
                <h2>{t.donateTitle}</h2>
              </div>
            </div>
  
            <div className="donation-editorial-layout">
              <div className="donation-editorial-copy">
                <div className="section-label">
                  {language === "zh" ? "读者支持" : "READER SUPPORTED"}
                </div>
  
                <h3>
                  {language === "zh"
                    ? "让女性主义写作保持公共开放。"
                    : "Keep feminist writing public."}
                </h3>
  
                <p>
                  {language === "zh"
                    ? "Feminist Archive 以缓慢、独立、非广告化的方式维持运行。"
                    : "Feminist Archive is sustained slowly, independently, and without institutional advertising."}
                </p>
  
                <p>
                  {language === "zh"
                    ? "我们坚持让文章、档案与编辑工作保持免费阅读，因为我们相信女性主义思想应当属于公共知识生活，而不应被隐藏在付费墙之后。"
                    : "We keep our essays, archives, and editorial work freely accessible because we believe feminist thought should remain part of public intellectual life, not hidden behind paywalls."}
                </p>
  
                <p>
                  {language === "zh"
                    ? "如果这个平台对你的阅读与思考有意义，你可以通过小额捐助支持它继续存在。"
                    : "If this platform matters to your reading life, you may help support its continuation."}
                </p>
              </div>
  
              <div className="donation-methods">
              {language === "zh" && (
  <a
    href="https://www.ifdian.net/a/FeministArchive"
    target="_blank"
    rel="noopener noreferrer"
    className="donation-link-card"
  >
    <span>爱发电</span>
    <em>适合中国读者支持</em>
  </a>
)}

                <a
                  href="https://buymeacoffee.com/feministarchive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donation-link-card"
                >
                  <span>Buy Me a Coffee</span>
                  <em>{language === "zh" ? "小额独立支持" : "Small independent support"}</em>
                </a>
  
                <a
                  href="https://ko-fi.com/feministarchive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donation-link-card"
                >
                  <span>Ko-fi</span>
                  <em>
                    {language === "zh"
                      ? "国际捐助通道"
                      : "Recommended: lower platform fees mean more of your support reaches us."}
                  </em>
                </a>
              </div>
            </div>
  
            <div className="donation-note">
              {language === "zh"
                ? "Feminist Archive 将继续保持免费阅读。捐助将用于网站维护、编辑工作、印刷实验与长篇女性主义出版。"
                : "Feminist Archive remains free to read. Donations support hosting, editorial work, print experiments, and long-form feminist publishing."}
            </div>
  
            <button
              className="contact-home-link"
              onClick={() => setCurrentPage("main")}
            >
              {language === "zh" ? "← 返回主页" : "← Back to home"}
            </button>
          </section>
        </main>
      </div>
    );
  }
  function renderDonationDrivePage() {
    return (

      <div className="donate-page-shell">
  
  <header className="donate-page-header">

<div className="donate-header-left">

  <button className="donate-menu-button">
    ☰
  </button>

  <button
    className="donate-header-link"
    onClick={() => setShowNewsletter(true)}
  >
    {language === "zh" ? "通讯" : "Newsletter"}
  </button>

  <button
    className="donate-header-link"
    onClick={() => setCurrentPage("donate")}
  >
    {language === "zh" ? "捐助" : "Donate"}
  </button>

</div>

<div
  className="donate-logo"
  onClick={() => setCurrentPage("main")}
>
  Feminist Archive

  <span>
    keep feminist writing public
  </span>
</div>

<button
  className="donate-signin"
  onClick={() => setCurrentPage("main")}
>
  {language === "zh" ? "返回" : "Back"}
</button>

</header>
  
        <main className="donate-page-main">
  
          <section className="donate-form-panel">
  
            <div className="donate-form-label">
  
              {language === "zh" ? "我想支持" : "I would like to donate"}
  
            </div>
  
            <div className="donate-tabs">
  
              <button
  
                className={donationType === "monthly" ? "active" : ""}
  
                onClick={() => setDonationType("monthly")}
  
              >
  
                {language === "zh" ? "每月" : "Monthly"}
  
              </button>
  
              <button
  
                className={donationType === "annually" ? "active" : ""}
  
                onClick={() => setDonationType("annually")}
  
              >
  
                {language === "zh" ? "每年" : "Annually"}
  
              </button>
  
              <button
  
                className={donationType === "one-time" ? "active" : ""}
  
                onClick={() => setDonationType("one-time")}
  
              >
  
                {language === "zh" ? "一次性" : "One time"}
  
              </button>
  
            </div>
  
            <div className="donate-form-label">
  
              {language === "zh" ? "选择金额" : "Select amount RMB"}
  
            </div>
  
            <div className="donate-amount-grid">
  
            {[
  language === "zh" ? "5" : "5",
  language === "zh" ? "10" : "10",
  language === "zh" ? "20" : "25",
].map((amount) => (
  
                <button
  
                  key={amount}
  
                  className={donationAmount === amount ? "active" : ""}
  
                  onClick={() => setDonationAmount(amount)}
  
                >
  
  {language === "zh" ? "¥" : "£"}{amount}
  
                  {donationType === "monthly" && language !== "zh" ? " per month" : ""}
  
                  {donationType === "monthly" && language === "zh" ? " / 月" : ""}
  
                </button>
  
              ))}
  
              <button
  
                className={donationAmount === "other" ? "active" : ""}
  
                onClick={() => setDonationAmount("other")}
  
              >
  
                {language === "zh" ? "其它" : "Other"}
  
              </button>
  
            </div>
  
            {donationAmount === "other" && (
  
              <input
  
                className="donate-input"
  
                placeholder={language === "zh" ? "输入金额" : "Enter amount"}
  
              />
  
            )}
  
  <div className="donate-form-label">

{language === "zh" ? "邮箱地址" : "Email address"}

</div>

<div className="donation-email-row">

<input
  className="donate-input"
  type="email"
  value={donationEmail}
  onChange={(e) => {
    setDonationEmail(e.target.value);
    setDonationEmailStatus("");
  }}
  placeholder={
    language === "zh"
      ? "输入邮箱地址"
      : "Enter email address"
  }
/>

<button
  className="donation-email-send"
  onClick={async () => {
    if (!donationEmail) return;

    setDonationEmailStatus(language === "zh" ? "正在发送..." : "Sending...");

    try {
      await submitWebsiteForm({
        type: "Donation email",
        email: donationEmail,
        donationType,
        amount: donationAmount,
        language,
      });

      setDonationEmailStatus(
        language === "zh"
          ? "已收到你的邮箱，谢谢。"
          : "Your email has been received. Thank you."
      );
    } catch {
      setDonationEmailStatus(
        language === "zh"
          ? "发送失败，请稍后再试。"
          : "Could not send. Please try again later."
      );
    }
  }}
>
  →
</button>

</div>

{donationEmailStatus && (
  <p className="donate-helper">{donationEmailStatus}</p>
)}

<p className="donate-helper">

  {language === "zh"

    ? "这是可选的。你将会收到 Feminist Archive 的捐助确认与感谢信件。"

    : "Optional. You will receive a donation confirmation and a letter of thanks from Feminist Archive."}

</p>
  
            <div className="donate-note-box">
  
              <strong>
  
                {language === "zh"
  
                  ? "你的捐助将支持 Feminist Archive。"
  
                  : "Your donation will support Feminist Archive."}
  
              </strong>
  
              <p>
  
                {language === "zh"
  
                  ? "捐助将用于网站维护、编辑工作、印刷实验与长篇女性主义出版。"
  
                  : "Donations support hosting, editorial work, print experiments, and long-form feminist publishing."}
  
              </p>
  
            </div>
  
            <a
  className="donate-submit"
  href={
    language === "zh"
      ? "https://www.ifdian.net/a/FeministArchive"
      : "https://ko-fi.com/feministarchive"
  }
  target="_blank"
  rel="noopener noreferrer"
>
  {language === "zh" ? "继续捐助" : "Continue donation"} →
</a>
  
          </section>
  
          <section className="donate-copy-panel">
  
            <h1>
  
              {language === "zh"
  
                ? "你的支持让 Feminist Archive 保持开放。"
  
                : "Your support keeps Feminist Archive open to everyone."}
  
            </h1>
  
            <p>
  
              {language === "zh"
  
                ? "Feminist Archive 是一个独立女性主义出版平台。我们不设置付费墙，也不依赖广告，而是通过读者支持来维持文章、档案、理论与长篇写作的公共可读性。"
  
                : "Feminist Archive is an independent feminist publication. We do not place our writing behind a paywall, and we do not rely on advertising. Reader support helps us keep essays, archives, theory and long-form writing publicly available."}
  
            </p>
  
            <p>
  
              {language === "zh"
  
                ? "无论金额多少，每一份支持都会帮助这个平台继续生长。"
  
                : "Whatever you can give, no matter how small, helps this platform continue to grow."}
  
            </p>
  
            <div className="donate-illustration">
  
              ✦
  
            </div>
  
          </section>

        </main>

        {showNewsletter && (
  <div
    className="newsletter-overlay"
    onClick={() => setShowNewsletter(false)}
  >
    <div
      className="newsletter-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="newsletter-close"
        onClick={() => setShowNewsletter(false)}
      >
        ×
      </button>

      <div className="newsletter-modal-label">
        {language === "zh" ? "通讯" : "NEWSLETTER"}
      </div>

      <h2>
        {language === "zh" ? "与档案保持联系。" : "Stay with the archive."}
      </h2>

      <p>
        {language === "zh"
          ? "接收 Feminist Archive 偶尔发送的编辑通讯、新文章、档案片段与阅读推荐。"
          : "Receive occasional editorial letters, newly published essays, archival fragments, and reading selections from Feminist Archive."}
      </p>

      <form
        className="newsletter-modal-form"
        onSubmit={async (e) => {
          e.preventDefault();

          const email = e.target.email.value;

          setNewsletterStatus(language === "zh" ? "正在订阅..." : "Subscribing...");

          try {
            await submitWebsiteForm({
              type: "Newsletter subscription",
              email,
              language,
            });

            setNewsletterStatus(
              language === "zh"
                ? "订阅成功，谢谢。"
                : "Subscribed. Thank you."
            );
            e.target.reset();
          } catch {
            setNewsletterStatus(
              language === "zh"
                ? "订阅失败，请稍后再试。"
                : "Could not subscribe. Please try again later."
            );
          }
        }}
      >
        <input
          name="email"
          type="email"
          placeholder={language === "zh" ? "你的邮箱地址" : "Your email address"}
          required
        />

        <button type="submit">
          {language === "zh" ? "订阅" : "Subscribe"}
        </button>
      </form>

      {newsletterStatus && (
        <div className="newsletter-modal-note">{newsletterStatus}</div>
      )}

      <div className="newsletter-modal-note">
        {language === "zh"
          ? "确认订阅后，即表示你同意接收 Feminist Archive 的邮件。你可以随时取消订阅。"
          : "By subscribing, you agree to receive emails from Feminist Archive. You can unsubscribe at any time."}
      </div>
    </div>
  </div>
)}
  
        
      </div>
    );
  }
  function renderContactPage() {
    return (
      <div className="site-shell">
        <Header simple hideLanguage />
  
        <main>
          <section className="archive-section" style={{ borderTop: "none" }}>
            <div className="section-heading">
              <div>
                <div className="section-label">{t.navContact}</div>
                <h2>{t.contactPageTitle}</h2>
              </div>
            </div>
  
            <div className="contact-editorial-page">
              <div className="contact-masthead-page">
                <section className="contact-masthead-intro">
                  <p>
                    {language === "zh"
                      ? "Feminist Archive 是一个独立女性主义出版平台，关注论文、档案写作、批评与长篇思想写作。我们缓慢出版、认真编辑，并欢迎严肃的来信与讨论。"
                      : "Feminist Archive is an independent publication for essays, archival writing, criticism, and long-form feminist thought. We publish slowly, edit carefully, and remain open to serious correspondence."}
                  </p>
                </section>
  
                <section className="contact-correspondence">
                  <div className="contact-row">
                    <div>
                      <span>{language === "zh" ? "编辑部" : "Editorial"}</span>
                      <h3>editorial@feministarchivejournal.org</h3>
                    </div>
  
                    <p>
                      {language === "zh"
                        ? "编辑问题、修正、合作、访谈与一般通信。"
                        : "Editorial questions, corrections, collaborations, interviews, and general correspondence."}
                    </p>
                  </div>
  
                  <div className="contact-row">
                    <div>
                      <span>{language === "zh" ? "投稿" : "Submissions"}</span>
                      <h3>submissions@feministarchivejournal.org</h3>
                    </div>
  
                    <p>
                      {language === "zh"
                        ? "论文、理论片段、翻译、档案文本、评论与批评性介入。"
                        : "Essays, theoretical fragments, translations, archive texts, reviews, and interventions."}
                    </p>
                  </div>
  
                  <div className="contact-row">
                    <div>
                      <span>{language === "zh" ? "一般问询" : "General"}</span>
                      <h3>general@feministarchivejournal.org</h3>
                    </div>
  
                    <p>
                      {language === "zh"
                        ? "一般问题、技术问题、newsletter 相关问题、读者支持与其他通信。"
                        : "General enquiries, technical issues, newsletter questions, reader support, and other correspondence."}
                    </p>
                  </div>
                </section>
  
                <section className="contact-publishing-model">
                  <div>
                    <span>
                      {language === "zh" ? "出版模式" : "Publishing model"}
                    </span>
                    <p>{language === "zh" ? "免费阅读" : "Free to read"}</p>
                  </div>
  
                  <div>
                    <span>
                      {language === "zh" ? "读者支持" : "Supported by readers"}
                    </span>
                    <p>{language === "zh" ? "无付费墙" : "No paywall"}</p>
                  </div>
  
                  <div>
                    <span>
                      {language === "zh"
                        ? "编辑原则"
                        : "Editorial principle"}
                    </span>
                    <p>
                      {language === "zh"
                        ? "缓慢、认真、公共"
                        : "Slow, careful, public"}
                    </p>
                  </div>
                </section>
  
                <section className="contact-protocol-note">
                  <p>
                    {language === "zh"
                      ? "我们欢迎严肃的不同意见。如果你的回应构成一篇具有实质论证的文章，我们鼓励你正式投稿。若被接受，相关回应可在之后连接至对应文章旁。"
                      : "Serious disagreements are welcome. If your response takes the form of a substantial argument, we encourage formal submission. Accepted responses may later be linked alongside the relevant article."}
                  </p>
                </section>
              </div>
  
              <div className="contact-editorial-protocol">
                <div className="section-label">
                  {language === "zh" ? "编辑说明" : "Editorial protocol"}
                </div>
  
                <p>
                  {language === "zh"
                    ? "如果你在文章中发现事实错误，或持有不同观点，请在来信中提供清晰的出处与语境。"
                    : "If you find factual errors in an article, or hold a different view, please write to us with clear references and context."}
                </p>
  
                <p>
                  {language === "zh"
                    ? "如果你对某篇文章有系统性的批评，我们鼓励你将其写成一篇严肃文章进行投稿。若被接受，它可在之后连接至相关文章旁。"
                    : "If you have a systematic critique of an article, we encourage you to submit it as a serious written piece. If accepted, it may later be linked alongside the relevant article."}
                </p>
              </div>
  
              <div className="contact-socials">
                <span>{language === "zh" ? "你也可以在这里找到我们" : "Find us elsewhere"}</span>
  
                <div className="contact-social-icons">
                  <a
                    href="https://x.com/FeministArchiv"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
  
                  <a
                    href="https://bsky.app/profile/feministarchive.bsky.social"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bluesky"
                  >
                    <span className="bluesky-icon">🦋</span>
                  </a>
  
                  <a
                    href="https://www.linkedin.com/in/feminist-archive-3b110b405"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
  
                  <a
                    href="https://www.instagram.com/feministarchivejournal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
  
              <button
                className="contact-home-link"
                onClick={() => setCurrentPage("main")}
              >
                {language === "zh" ? "← 返回主页" : "← Return to homepage"}
              </button>
            </div>
          </section>
        </main>
      </div>
    );
  }

  function renderPrintEditionPage() {
    return (
      <div className="site-shell">
        <Header simple />
  
        <main className="print-edition-page">
          <div className="section-label text-reveal">
            {language === "zh" ? "印刷出版" : "PRINT EDITION"}
          </div>
  
          <h1 className="print-edition-title text-reveal reveal-delay-1">
            {language === "zh"
              ? "Feminist Archive 正在准备第一本印刷出版物。"
              : "Feminist Archive is preparing its first print publication."}
          </h1>
  
          <p className="print-edition-intro text-reveal reveal-delay-2">
            {language === "zh"
              ? "我们正在筹备一本小型印刷集，收录 Feminist Archive 的文章、档案片段、视觉材料与精选写作。"
              : "We are currently developing a small printed volume that gathers essays, archival fragments, visual materials, and selected writing from Feminist Archive."}
          </p>
  
          <div className="print-edition-grid">
            <div className="text-reveal reveal-delay-3">
              <h3>{language === "zh" ? "为什么印刷？" : "Why print?"}</h3>
              <p>
                {language === "zh"
                  ? "有些写作值得被更慢地阅读、被物质性地保存，并在数字流通的速度之外继续存在。"
                  : "Some writing deserves slower reading, physical preservation, and a life beyond the speed of digital circulation."}
              </p>
            </div>
  
            <div className="text-reveal reveal-delay-4">
              <h3>{language === "zh" ? "给支持者" : "For supporters"}</h3>
              <p>
                {language === "zh"
                  ? "支持 Feminist Archive 的读者将优先收到印刷计划的进展更新，并在第一期开放时获得优先信息。"
                  : "Readers who support Feminist Archive will receive early updates and priority access when the first issue becomes available."}
              </p>
            </div>
  
            <div className="text-reveal reveal-delay-5">
              <h3>{language === "zh" ? "如何进行" : "How it works"}</h3>
              <p>
                {language === "zh"
                  ? "我们计划根据读者需求制作限量印刷版本，让生产规模保持可持续，也保持这个项目的独立性。"
                  : "We plan to release limited printed editions based on reader demand, keeping production sustainable and independent."}
              </p>
            </div>
          </div>
  
          <div className="print-edition-note text-reveal reveal-delay-6">
            {language === "zh"
              ? "这个项目仍然会保持线上免费阅读。印刷是一种额外的保存形式，而不是付费墙。"
              : "This project remains free to read online. Print exists as an additional form of preservation — not a paywall."}
          </div>
  
          <button
            className="button button-dark text-reveal reveal-delay-6"
            onClick={() => setCurrentPage("main")}
          >
            {language === "zh" ? "← 返回主页" : "← Back to home"}
          </button>
        </main>
      </div>
    );
  }
  

  function renderArticleDetail() {
    if (selectedArticle.id === "save-the-elephant") {
      return (
        <>
          <div
            className="reading-progress-bar"
            style={{ width: `${readingProgress}%` }}
          />
    
          <div className="urgent-report-shell">
            <header className="mag-article-header">
              <button
                className="issue-menu-button"
                onClick={() => setCurrentPage("main")}
              >
                ← HOME
              </button>
    
              <div
                className="mag-article-logo"
                onClick={() => setCurrentPage("main")}
              >
                Feminist Archive
              </div>
    
              <button
                className="issue-menu-button"
                onClick={() => setCurrentPage("main")}
              >
                CLOSE
              </button>
            </header>
    
            <section
              className="urgent-report-hero"
              style={{
                backgroundImage: `url(${selectedArticle.image || "/images/文章素材图4.png"})`,
              }}
            >
              <div className="urgent-report-overlay">
                <div className="urgent-report-label">LIVE DOSSIER / URGENT APPEAL</div>
    
                <h1>{selectedArticle.title}</h1>
    
                <p>{selectedArticle.excerpt}</p>
    
                <div className="urgent-report-meta">
                  <span>{selectedArticle.date}</span>
                  <span>Animal ethics</span>
                  <span>Developing record</span>
                </div>
              </div>
            </section>
    
            <main className="urgent-report-layout">
              <aside className="urgent-report-sidebar">
                <div className="urgent-status-box">
                  <span>Status</span>
                  <strong>Ongoing documentation</strong>
                </div>
    
                <div className="urgent-status-box">
                  <span>Region</span>
                  <strong>Nepal</strong>
                </div>
    
                <div className="urgent-status-box">
                  <span>Focus</span>
                  <strong>Captivity, exploitation, violence</strong>
                </div>
              </aside>
    
              <article className="urgent-report-body">
                <div className="urgent-report-kicker">FIELD NOTE</div>
    
                {(selectedArticle.contentBlocks || []).map((block, index) => {

if (block.type === "lead") {
  return (
    <p key={index} className="article-lead">
      {block.text}
    </p>
  );
}

if (block.type === "paragraph") {
  return (
    <p key={index}>
      {block.text}
    </p>
  );
}

if (block.type === "image") {
  return (
    <figure key={index} className="article-image-block">
      <img src={block.src} alt="" />

      <figcaption>
        {block.caption}
      </figcaption>
    </figure>
  );
}

if (block.type === "quote") {
  return (
    <blockquote key={index} className="article-pullquote">
      {block.text}
    </blockquote>
  );
}
if (block.type === "highlight") {
  return (
    <p
      key={index}
      className="article-highlight"
      style={{ "--article-highlight-color": block.color }}
    >
      {block.text}
    </p>
  );
}
if (block.type === "heading") {
  return (
    <h2
      key={index}
      className="article-section-heading"
    >
      {block.text}
    </h2>
  );
}
if (block.type === "statement") {
  return (
    <div
      key={index}
      className="article-statement"
    >
      {block.text}
    </div>
  );
}
return null;
})}
    
                <section className="urgent-report-callout">
                  <span>Why this matters</span>
                  <p>
                    Feminist Archive records this case as part of a broader concern
                    with institutional violence, silenced suffering, and forms of
                    life made invisible by tourism, profit, and inherited narratives.
                  </p>
                </section>
    
                <button
                  className="contact-home-link"
                  onClick={() => setCurrentPage("main")}
                >
                  ← Return to homepage
                </button>
              </article>
            </main>
          </div>
        </>
      );
    }
    if (!selectedArticle) {
      return (
        <>
          <div
            className="reading-progress-bar"
            style={{ width: `${readingProgress}%` }}
          />

          <div className="site-shell">
            <Header simple />
            <main>
              <section className="archive-section" style={{ borderTop: "none" }}>
                <button
                  className="button button-light"
                  onClick={() => setCurrentPage("main")}
                >
                  {t.backToHome}
                </button>
              </section>
            </main>
          </div>
        </>
      );
    }

    const recommendedArticles = (selectedArticle.recommendedArticleIds || [])
      .map((id) => currentArticles.find((article) => article.id === id))
      .filter(Boolean);
    const isImmersiveArticle = [
      "sexual-liberationism-erotic-nihilism",
      "sexual-liberationism-erotic-nihilism-zh",
      "pansexualism-freudian-psychoanalysis",
      "pansexualism-freud-vulgarized-zh",
    ].includes(selectedArticle.id);
    const showArticleNewsletterSignup = [
      "sexual-liberationism-erotic-nihilism",
      "sexual-liberationism-erotic-nihilism-zh",
    ].includes(selectedArticle.id);
    const articleUiLanguage = getArticleLanguage(selectedArticle);
    const articleUsesFrench = articleUiLanguage === "fr";
    const articleUsesChinese = articleUiLanguage === "zh";

    return (
      <>
        <div
          className="reading-progress-bar"
          style={{ width: `${readingProgress}%` }}
        />
{showArticleShare && (
  <div
    className="article-share-modal"
    onClick={() => setShowArticleShare(false)}
  >
    <div
      className="article-share-card"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="article-share-close"
        onClick={() => setShowArticleShare(false)}
      >
        ×
      </button>

      <div className="article-share-modal-label">
        {articleShareUsesChinese ? "转发 / 保存" : "SHARE / CIRCULATE"}
      </div>

      <h2>
        {articleShareUsesChinese
          ? "让这篇文章继续流动。"
          : "Let this essay continue its journey."}
      </h2>

      <p>
        {articleShareUsesChinese
          ? "欢迎自由转发、保存与引用此文。Feminist Archive 为公共阅读而存在。"
          : "You are warmly welcome to share, save, and quote this essay. Feminist Archive is built for public reading."}
      </p>

      {articleShareUsesChinese ? (
        <div className="article-share-icon-grid" aria-label="分享选项">
          <button
            className="article-share-icon-button xhs-share-button"
            type="button"
            onClick={shareToXiaohongshu}
          >
            <span className="article-share-logo xhs-share-logo" aria-hidden="true">
              <span>小</span>
            </span>
            <strong>小红书</strong>
            <em>复制链接并打开</em>
          </button>

          <button
            className="article-share-icon-button wechat-share-button"
            type="button"
            onClick={shareToWechat}
          >
            <span className="article-share-logo wechat-share-logo" aria-hidden="true">
              <i />
              <i />
            </span>
            <strong>微信</strong>
            <em>复制链接并唤起</em>
          </button>

          <button
            className="article-share-icon-button more-share-button"
            type="button"
            onClick={() => shareSelectedArticle({ fallbackToModal: false })}
          >
            <span className="article-share-logo more-share-logo" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <strong>其它</strong>
            <em>系统分享</em>
          </button>
        </div>
      ) : (
        <div className="article-share-icon-grid article-share-icon-grid-en" aria-label="Share options">
          <button
            className="article-share-icon-button x-share-button"
            type="button"
            onClick={() =>
              copyAndOpenShareDestination({
                url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  selectedArticle.title
                )}&url=${encodeURIComponent(getArticleShareUrl())}`,
                message:
                  "Article title and link copied. Opening X now; paste them if the preview card does not appear.",
              })
            }
          >
            <span className="article-share-logo x-share-logo" aria-hidden="true">
              <span aria-hidden="true">X</span>
            </span>
            <strong>X</strong>
            <em>Copy and open</em>
          </button>

          <button
            className="article-share-icon-button bluesky-share-button"
            type="button"
            onClick={() =>
              copyAndOpenShareDestination({
                url: `https://bsky.app/intent/compose?text=${encodeURIComponent(
                  `${selectedArticle.title} ${getArticleShareUrl()}`
                )}`,
                message:
                  "Article title and link copied. Opening Bluesky now; paste them if the composer does not load the card.",
              })
            }
          >
            <span className="article-share-logo bluesky-share-logo" aria-hidden="true">
              <svg className="bluesky-butterfly" viewBox="0 0 64 64" role="img" aria-hidden="true">
                <path
                  className="bluesky-wing bluesky-wing-left-top"
                  d="M31.5 31.7C25.6 19.8 18.3 9.2 10.6 8.2 3.6 7.2 4.8 22.7 7.1 30.1c2.2 7.2 9.7 10.1 19.8 6.4 3.4-1.2 4.9-2.9 4.6-4.8Z"
                />
                <path
                  className="bluesky-wing bluesky-wing-right-top"
                  d="M32.5 31.7c5.9-11.9 13.2-22.5 20.9-23.5 7-1 5.8 14.5 3.5 21.9-2.2 7.2-9.7 10.1-19.8 6.4-3.4-1.2-4.9-2.9-4.6-4.8Z"
                />
                <path
                  className="bluesky-wing bluesky-wing-left-bottom"
                  d="M31.1 34.5c-7.5 1.8-13.3 6.4-12.2 12.1 1.4 7.6 12.7 8.6 17.1.5 2.4-4.5.7-9.6-4.9-12.6Z"
                />
                <path
                  className="bluesky-wing bluesky-wing-right-bottom"
                  d="M32.9 34.5c7.5 1.8 13.3 6.4 12.2 12.1-1.4 7.6-12.7 8.6-17.1.5-2.4-4.5-.7-9.6 4.9-12.6Z"
                />
              </svg>
            </span>
            <strong>Bluesky</strong>
            <em>Copy and open</em>
          </button>

          <button
            className="article-share-icon-button instagram-share-button"
            type="button"
            onClick={shareToInstagram}
          >
            <span className="article-share-logo instagram-share-logo" aria-hidden="true">
              <i />
            </span>
            <strong>Instagram</strong>
            <em>Copy and open</em>
          </button>

          <button
            className="article-share-icon-button whatsapp-share-button"
            type="button"
            onClick={() =>
              copyAndOpenShareDestination({
                url: `https://wa.me/?text=${encodeURIComponent(
                  `${selectedArticle.title} ${getArticleShareUrl()}`
                )}`,
                message:
                  "Article title and link copied. Opening WhatsApp now; paste them if the share window does not appear.",
              })
            }
          >
            <span className="article-share-logo whatsapp-share-logo" aria-hidden="true">
              <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
                <path
                  className="whatsapp-chat-bubble"
                  d="M31.7 13.2c-10.4 0-18.8 7.7-18.8 17.3 0 3.5 1.1 6.8 3.1 9.5l-2.2 9.2 9.5-2.7c2.6 1.2 5.4 1.8 8.4 1.8 10.4 0 18.8-7.7 18.8-17.3S42.1 13.2 31.7 13.2Z"
                />
                <path
                  className="whatsapp-phone"
                  d="M25.3 23.9c.8-1.1 1.8-.9 2.6.2l1.6 2.4c.5.7.4 1.5-.3 2.2l-.9.9c1.4 2.5 3.4 4.5 6.1 5.9l1-.9c.7-.6 1.5-.7 2.2-.2l2.4 1.6c1.1.7 1.3 1.8.3 2.6-1.4 1.3-3.1 2.1-5.5 1.4-5.6-1.6-10.5-6.5-12.1-12.1-.6-2.2.4-3.8 2.6-4Z"
                />
              </svg>
            </span>
            <strong>WhatsApp</strong>
            <em>Copy and open</em>
          </button>

          <button
            className="article-share-icon-button facebook-share-button"
            type="button"
            onClick={() =>
              copyAndOpenShareDestination({
                url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  getArticleShareUrl()
                )}`,
                message:
                  "Article title and link copied. Opening Facebook now; paste them if the share window does not appear.",
              })
            }
          >
            <span className="article-share-logo facebook-share-logo" aria-hidden="true">
              <span aria-hidden="true">f</span>
            </span>
            <strong>Facebook</strong>
            <em>Copy and open</em>
          </button>

          <button
            className="article-share-icon-button more-share-button"
            type="button"
            onClick={() => shareSelectedArticle({ fallbackToModal: false })}
          >
            <span className="article-share-logo more-share-logo" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <strong>Other</strong>
            <em>System share</em>
          </button>
        </div>
      )}
    </div>
  </div>
)}
{showArticleMenu && (
  <MagazineMenuOverlay
    language={language}
    setCurrentPage={setCurrentPage}
    onClose={() => setShowArticleMenu(false)}
  />
)}
        <div className={`mag-article-shell article-${selectedArticle.id}`}>
          <header className="mag-article-header">
            <div className="mag-article-header-left">
              {selectedArticle.layout === "psyche" ? (
                <nav className="psyche-top-links" aria-label="Article navigation">
                  <button
                    className="psyche-menu-icon"
                    type="button"
                    onClick={() => setShowArticleMenu(true)}
                    aria-label={language === "zh" ? "打开菜单" : "Open menu"}
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                  <button type="button" onClick={() => setCurrentPage("newsletter-page")}>
                    {articleUsesFrench ? "Lettre" : "Newsletter"}
                  </button>
                  <button type="button" onClick={() => setCurrentPage("donate")}>
                    {articleUsesFrench ? "Soutenir" : "Donate"}
                  </button>
                </nav>
              ) : (
                <>
                  <nav
                    className="mag-article-socials"
                    aria-label="Feminist Archive social links"
                  >
                    <a
                      href="https://www.instagram.com/feministarchivejournal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="4" y="4" width="16" height="16" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17" cy="7" r="0.8" />
                      </svg>
                    </a>

                    <a
                      href="https://bsky.app/profile/feministarchive.bsky.social"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Bluesky"
                    >
                      <svg className="mag-social-bluesky" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 12.15c-1.06-2.06-3.18-5.02-5.38-6.6-1.54-1.1-2.66-.58-2.54 1.02.13 1.73 1.46 4.04 3.78 5.6 1.03.7 1.95 1.02 2.58 1.1-1.48.18-3.16.93-3.5 2.4-.36 1.56.86 3.18 2.48 3.18 1.22 0 2.22-.86 2.58-2.2.36 1.34 1.36 2.2 2.58 2.2 1.62 0 2.84-1.62 2.48-3.18-.34-1.47-2.02-2.22-3.5-2.4.63-.08 1.55-.4 2.58-1.1 2.32-1.56 3.65-3.87 3.78-5.6.12-1.6-.98-2.12-2.54-1.02-2.2 1.58-4.32 4.54-5.38 6.6Z" />
                      </svg>
                    </a>

                    <a
                      href="https://x.com/FeministArchiv"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X"
                    >
                      <svg className="mag-social-x" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4.8 4.8h4.15l4.05 5.35 4.78-5.35h1.95l-5.82 6.52 6.02 7.88h-4.16l-4.38-5.75-5.12 5.75H4.35l6.24-7.02L4.8 4.8Z" />
                      </svg>
                    </a>
                  </nav>

                  <button
                    className="issue-menu-button"
                    onClick={() =>
                      setCurrentPage(articleReturnPage || "monthly-theme")
                    }
                  >
                    {getArticleReturnLabel()}
                  </button>
                </>
              )}
            </div>

            <div
              className="mag-article-logo"
              onClick={() => setCurrentPage("main")}
            >
              Feminist Archive
            </div>

            {selectedArticle.layout !== "psyche" && (
              <button
                className="issue-menu-button mag-article-donate-button"
                onClick={() => setCurrentPage("donate")}
              >
                {articleUsesFrench ? "Soutenir" : "Donate"}
              </button>
            )}
          </header>

          <section
            className="mag-article-hero"
            style={
              selectedArticle.layout === "psyche"
                ? undefined
                : {
                    backgroundImage: `url(${selectedArticle.image || "/images/文章素材图4.png"})`,
                  }
            }
          >
            <div className="mag-article-hero-overlay">
              <div className="mag-article-kicker">
                {selectedArticle.category}
              </div>

              <h1>{selectedArticle.title}</h1>

              <p>{selectedArticle.excerpt}</p>
            </div>
            {selectedArticle.layout === "psyche" && (
              <div className="psyche-hero-image">
                <img
                  src={selectedArticle.image || "/images/文章素材图4.png"}
                  alt=""
                />
              </div>
            )}
            {selectedArticle.heroCaption && (
              <p className="mag-article-hero-caption">
                {selectedArticle.heroCaption}
              </p>
            )}
          </section>

          <button
            className={`article-floating-share ${
              articleShareVisible ? "is-visible" : ""
            }`}
            type="button"
            onClick={() => setShowArticleShare(true)}
            aria-hidden={!articleShareVisible}
            tabIndex={articleShareVisible ? 0 : -1}
          >
            <svg
              className="article-floating-share-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M21 3 10.5 13.5" />
              <path d="m21 3-6.8 19-3.7-8.5L2 9.8Z" />
            </svg>
            <span>{language === "zh" ? "分享" : "Share"}</span>
          </button>

          {selectedArticle.layout === "psyche" && selectedArticle.showKeyPoints && (
            <button
              className="psyche-keypoints-tab"
              type="button"
              onClick={() => {
                const target = document.querySelector(".psyche-keypoints-panel");
                target?.scrollIntoView({ block: "center", behavior: "smooth" });
              }}
            >
              <List size={22} strokeWidth={2.2} />
              <span>{language === "zh" ? "要点" : "Key points"}</span>
            </button>
          )}
          


          <main className="mag-article-layout">
          
  <aside className="mag-article-sidebar">
  {selectedArticle.layout === "psyche" && (
    <div className="psyche-article-actions">
      <div className="psyche-article-action-row">
        <button
          type="button"
          onClick={() =>
            copyArticleLink(
              language === "zh" ? "链接已复制。" : "Article link copied."
            )
          }
        >
          <Link2 size={18} strokeWidth={1.9} />
          <span>{language === "zh" ? "复制链接" : "Copy link"}</span>
        </button>
        <button
          type="button"
          onClick={() => setShowArticleShare(true)}
        >
          <Send size={18} strokeWidth={1.9} />
          <span>{language === "zh" ? "分享" : "Share"}</span>
        </button>
      </div>
      <button
        className="psyche-thoughts-button"
        type="button"
        onClick={() => setCurrentPage("contact-page")}
      >
        {language === "zh" ? "写信给编辑部" : "Write to the editors"}
      </button>
    </div>
  )}

  <p>
  {selectedArticle.sidebarText || (
    <>
      <strong>{selectedArticle.author}</strong> writes with Feminist Archive.
      This essay appears in the monthly issue <em>June Issue</em>.
    </>
  )}
</p>

    <div className="mag-article-info">
      <span>{selectedArticle.date}</span>
      <span>{selectedArticle.readTime || "Essay"}</span>
    </div>

    <div className="mag-article-tags">
      {(selectedArticle.tags || []).map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>

    <button
      className="mag-sidebar-button"
      onClick={() => setCurrentPage("monthly-theme")}
    >
      Return to issue
    </button>

    {selectedArticle.layout === "psyche" && selectedArticle.showKeyPoints && selectedArticle.keyPoints?.length > 0 && (
      <section className="psyche-keypoints-panel">
        <span>{language === "zh" ? "文章要点" : "Key points"}</span>
        <ul>
          {selectedArticle.keyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
    )}

  </aside>

  <article className="mag-article-body">
    <div className="mag-article-content">
      {selectedArticle.contentBlocks
        ? selectedArticle.contentBlocks.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <p key={index}>
                  {renderArticleParagraphText(block.text, index)}
                </p>
              );
            }

            if (block.type === "lead") {
              return (
                <p key={index} className="article-lead">
                  {block.text}
                </p>
              );
            }

            if (block.type === "heading") {
              return (
                <h2 key={index} className="article-section-heading">
                  {block.text}
                </h2>
              );
            }

            if (block.type === "statement") {
              return (
                <div key={index} className="article-statement">
                  {block.lines
                    ? block.lines.map((line, lineIndex) => (
                        <p key={lineIndex}>{line}</p>
                      ))
                    : block.text}
                </div>
              );
            }

            if (block.type === "quote") {
              return (
                <blockquote key={index} className="article-pullquote">
                  {block.text}
                </blockquote>
              );
            }

            if (block.type === "recommendations") {
              if (!recommendedArticles.length) return null;

              return (
                <section key={index} className="article-you-may-like">
                  <div className="article-you-may-like-label">
                    {block.title || (language === "zh" ? "你可能会喜欢" : "You may also like")}
                  </div>
                  <div className="article-you-may-like-grid">
                    {recommendedArticles.map((article) => (
                      <button
                        className="article-you-may-like-card"
                        key={article.id}
                        type="button"
                        onClick={() => openArticleFrom(article, articleReturnPage || "monthly-theme")}
                      >
                        <img src={article.image || "/images/文章素材图4.png"} alt="" />
                        <span>{article.category}</span>
                        <strong>{article.title}</strong>
                      </button>
                    ))}
                  </div>
                </section>
              );
            }

            if (block.type === "highlight") {
              return (
                <p
                  key={index}
                  className="article-highlight"
                  style={{ "--article-highlight-color": block.color }}
                >
                  {block.text}
                </p>
              );
            }

            if (block.type === "note") {
              return (
                <p key={index} className="article-inline-note">
                  {block.text}
                </p>
              );
            }

            if (block.type === "image") {
              return (
                <figure key={index} className="article-image-block">
                  <img src={block.src} alt="" />
                  {block.caption && <figcaption>{block.caption}</figcaption>}
                </figure>
              );
            }

            return null;
          })
        : (selectedArticle.content || "")
            .split("\n\n")
            .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    </div>

    {(selectedArticle.tags || []).some((tag) =>
      ["性别麻烦", "Gender Trouble"].includes(tag)
    ) && (
      <section className="article-related-reading">
        <button
          className="article-related-card"
          type="button"
          onClick={() => {
            setSelectedArticle(null);
            setCurrentPage("reading-guides");
          }}
        >
          <span className="article-related-label">
            {language === "zh" ? "相关阅读" : "Related reading"}
          </span>
          <span className="article-related-title">
            {language === "zh"
              ? "《性别麻烦》导读全集"
              : "Complete Gender Trouble Guide"}
          </span>
          <span className="article-related-desc">
            {language === "zh"
              ? "继续阅读 Feminist Archive 经典导读计划中的其它章节。"
              : "Continue reading the other chapters in the Feminist Archive classic guide programme."}
          </span>
        </button>
      </section>
    )}

  
    <footer className="article-endnote">
  <div>
    <span>{language === "zh" ? "发布者" : "Published by"}</span>
    <strong>
      {language === "zh"
        ? "Feminist Archive 编辑部"
        : "Feminist Archive Editorial"}
    </strong>
  </div>

  <p>
    {language === "zh"
      ? "Feminist Archive 是一个关注理论、档案写作与长篇女性主义思想的独立出版平台。"
      : "Feminist Archive is an independent publication for theory, archival writing, and long-form feminist thought."}
  </p>
</footer>
<section className="article-circulation">
  

  <div className="article-circulation-line bottom"></div>
</section>
<section className="article-support-block">
  <div className="article-support-copy">
    <div className="article-support-label">
      {language === "zh"
        ? "支持 FEMINIST ARCHIVE"
        : "SUPPORT FEMINIST ARCHIVE"}
    </div>

    <h2 className="support-reveal">
      {language === "zh"
        ? "让女性主义写作保持开放。"
        : "Keep feminist writing open."}
    </h2>

    <p className="support-reveal delay-1">
      {language === "zh"
        ? "Feminist Archive 是一个独立、非营利性的出版项目。我们希望文章、档案与编辑工作能够保持免费开放，因为严肃的女性主义思想应当继续属于公共阅读。"
        : "Feminist Archive is an independent, non-profit publication. We keep our essays, archives, and editorial work freely accessible because we believe serious feminist thought should remain open to the public."}
    </p>

    <p className="support-reveal delay-2">
      {language === "zh"
        ? "如果这个平台对你的阅读生活有意义，你可以通过一份小额捐助支持它继续存在。"
        : "If this platform matters to your reading life, you may support its continuation through a small donation."}
    </p>
  </div>

  <div className="article-support-actions">
    <a
      href="https://ko-fi.com/feministarchive"
      target="_blank"
      rel="noopener noreferrer"
    >
      {language === "zh" ? "通过 Ko-fi 支持" : "Support on Ko-fi"}
    </a>

    <a
      href="https://buymeacoffee.com/feministarchive"
      target="_blank"
      rel="noopener noreferrer"
    >
      {language === "zh" ? "通过 Buy Me a Coffee 支持" : "Buy Me a Coffee"}
    </a>

    <a
      href="https://www.ifdian.net/a/FeministArchive"
      target="_blank"
      rel="noopener noreferrer"
    >
      {language === "zh" ? "通过爱发电支持" : "Support on Afdian"}
    </a>
  </div>
</section>
{showArticleNewsletterSignup && (
  <section className="article-newsletter-block" aria-labelledby="article-newsletter-title">
    <div className="article-newsletter-copy">
      <div className="article-newsletter-label">
        {articleUsesChinese ? "NEWSLETTER / 通讯" : "NEWSLETTER"}
      </div>

      <h2 id="article-newsletter-title">
        {articleUsesChinese ? "加入我们的 Newsletter!" : "Join our Newsletter!"}
      </h2>

      <p>
        {articleUsesChinese
          ? "接收 Feminist Archive 的新文章、编辑通讯与阅读推荐。"
          : "Receive new essays, editorial letters, and reading recommendations from Feminist Archive."}
      </p>
    </div>

    <form
      className="article-newsletter-form"
      onSubmit={async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        setNewsletterStatus(articleUsesChinese ? "正在订阅..." : "Subscribing...");

        try {
          await submitWebsiteForm({
            type: "Newsletter subscription",
            email,
            language: articleUiLanguage,
            source: selectedArticle.id,
          });

          setNewsletterStatus(
            articleUsesChinese ? "订阅成功，谢谢。" : "Subscribed. Thank you."
          );
          e.target.reset();
        } catch {
          setNewsletterStatus(
            articleUsesChinese
              ? "订阅失败，请稍后再试。"
              : "Could not subscribe. Please try again later."
          );
        }
      }}
    >
      <input
        name="email"
        type="email"
        placeholder={articleUsesChinese ? "你的邮箱地址" : "Your email address"}
        required
      />

      <button type="submit">
        {articleUsesChinese ? "订阅" : "Subscribe"}
      </button>

      {newsletterStatus && (
        <div className="article-newsletter-note">{newsletterStatus}</div>
      )}
    </form>
  </section>
)}
  </article>
</main>
{(selectedArticle.layout === "psyche" || isImmersiveArticle) && (
  <footer className="psyche-article-footer">
    <div className="psyche-footer-brand">
      <div className="psyche-footer-logo">Feminist Archive</div>
      <p>
        {articleUsesFrench
          ? "Une revue indépendante pour la théorie, les archives et la pensée féministe au long cours"
          : articleUsesChinese
          ? "一个保持理论、档案与女性主义长篇写作开放的独立出版平台"
          : "An independent magazine for theory, archives, and long-form feminist thought"}
      </p>
      <nav className="psyche-footer-socials" aria-label="Feminist Archive social links">
        <a
          href="https://www.instagram.com/feministarchivejournal/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="4.5" y="4.5" width="15" height="15" rx="4.8" />
            <circle cx="12" cy="12" r="3.65" />
            <circle cx="16.65" cy="7.35" r="0.72" />
          </svg>
        </a>
        <a
          href="https://bsky.app/profile/feministarchive.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bluesky"
        >
          <svg className="psyche-social-butterfly" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 12.15c-1.06-2.06-3.18-5.02-5.38-6.6-1.54-1.1-2.66-.58-2.54 1.02.13 1.73 1.46 4.04 3.78 5.6 1.03.7 1.95 1.02 2.58 1.1-1.48.18-3.16.93-3.5 2.4-.36 1.56.86 3.18 2.48 3.18 1.22 0 2.22-.86 2.58-2.2.36 1.34 1.36 2.2 2.58 2.2 1.62 0 2.84-1.62 2.48-3.18-.34-1.47-2.02-2.22-3.5-2.4.63-.08 1.55-.4 2.58-1.1 2.32-1.56 3.65-3.87 3.78-5.6.12-1.6-.98-2.12-2.54-1.02-2.2 1.58-4.32 4.54-5.38 6.6Z" />
          </svg>
        </a>
        <a
          href="https://x.com/FeministArchiv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5.2 5.2 18.8 18.8" />
            <path d="M18.8 5.2 5.2 18.8" />
          </svg>
        </a>
      </nav>
    </div>

    <div className="psyche-footer-columns">
      <div>
        <h3>{articleUsesFrench ? "Rubriques" : articleUsesChinese ? "栏目" : "Sections"}</h3>
        <button type="button" onClick={() => setCurrentPage("magazine")}>
          {articleUsesFrench ? "Magazine" : articleUsesChinese ? "杂志" : "Magazine"}
        </button>
        <button type="button" onClick={() => setCurrentPage("archive-page")}>
          {articleUsesFrench ? "Archives" : articleUsesChinese ? "档案" : "Archive"}
        </button>
        <button type="button" onClick={() => setCurrentPage("reading-guides")}>
          {articleUsesFrench ? "Guides de lecture" : articleUsesChinese ? "阅读导读" : "Reading Guides"}
        </button>
      </div>
      <div>
        <h3>{articleUsesFrench ? "Soutenir" : articleUsesChinese ? "支持" : "Support"}</h3>
        <button type="button" onClick={() => setCurrentPage("newsletter-page")}>
          {articleUsesFrench ? "Lettre" : articleUsesChinese ? "通讯" : "Newsletter"}
        </button>
        <button type="button" onClick={() => setCurrentPage("donate")}>
          {articleUsesFrench ? "Don" : articleUsesChinese ? "捐助" : "Donate"}
        </button>
      </div>
      <div>
        <h3>{articleUsesFrench ? "À propos" : articleUsesChinese ? "关于" : "About"}</h3>
        <a
          className="psyche-footer-link"
          href={
            articleUsesChinese
              ? "https://feministarchivejournal.org/zh/our-story"
              : "https://feministarchivejournal.org/en/our-story"
          }
        >
          {articleUsesFrench ? "À propos" : articleUsesChinese ? "我们的故事" : "About"}
        </a>
        <button type="button" onClick={() => setCurrentPage("contact-page")}>
          {articleUsesFrench ? "Contact" : articleUsesChinese ? "联系" : "Contact"}
        </button>
      </div>
    </div>

    <div className="psyche-footer-bottom">
      <span>© Feminist Archive 2026</span>
    </div>
  </footer>
)}
        </div>
      </>
    );
  }

  function renderSummerUpdatePage() {
    const zh = language === "zh";
    const magazineLogo = zh ? "/images/杂志彩色logo.png" : "/images/Magzine彩色logo.png";
    const newsletterLogo = zh ? "/images/通讯彩色logo.png" : "/images/Newsletter彩色logo.png";

    return (
      <div className="summer-update-page">
        <header className="summer-update-header">
          <div className="summer-update-header-left">
            <button
              className={`summer-update-image-button ${zh ? "zh-magazine" : "en-magazine"}`}
              onClick={() => setCurrentPage("magazine")}
              aria-label={zh ? "杂志" : "Magazine"}
            >
              <img src={magazineLogo} alt="" />
            </button>
            <span>/</span>
            <button
              className={`summer-update-image-button ${zh ? "zh-newsletter" : "en-newsletter"}`}
              onClick={() => setCurrentPage("newsletter-page")}
              aria-label={zh ? "通讯" : "Newsletter"}
            >
              <img src={newsletterLogo} alt="" />
            </button>
          </div>

          <button
            className="summer-update-logo"
            type="button"
            onClick={() => setCurrentPage("main")}
            aria-label="Feminist Archive Summer Update"
          >
            <img
              src="/images/夏日更新logo.png"
              alt="Feminist Archive Summer Update"
              draggable={false}
            />
          </button>

          <button
            className="summer-update-back"
            onClick={() => setCurrentPage("main")}
            aria-label={zh ? "返回" : "Back"}
          >
            <img src="/images/Back彩色.png" alt="" />
          </button>
        </header>

        <main className="summer-update-main">
          <section className="summer-update-note">
            <div className="summer-update-palette" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="summer-update-kicker">
              {zh ? "FEMINIST ARCHIVE / 网站更新" : "FEMINIST ARCHIVE / SITE UPDATE"}
            </div>

            <div className="summer-update-title-scene">
              <h1>{zh ? "夏日更新" : "Summer Update"}</h1>
              <span className="summer-update-butterfly" aria-hidden="true">
                <span className="summer-update-butterfly-wing upper" />
                <span className="summer-update-butterfly-wing lower" />
                <span className="summer-update-butterfly-body" />
              </span>
            </div>

            <p>
              {zh
                ? "我们正在重新优化和建设我们的网站！为了在建设期间仍然保持公共阅读开放，我们保留了网站访问；因此，这段时间部分页面可能会显得未完成和缺失感，烦请谅解！敬请期待未来更好的页面！"
                : "We are currently refining and rebuilding our website! To keep the archive publicly readable while this work continues, we have kept the site open; during this period, some pages may feel unfinished or incomplete. Thank you for your understanding! Please stay tuned for a better version of the site!"}
            </p>
          </section>
        </main>

        <footer className="summer-update-footer">
          <div>
            <strong>Feminist Archive</strong>
            <span>
              {zh
                ? "独立女性主义写作、理论与档案平台"
                : "Independent feminist writing, theory, and archives"}
            </span>
          </div>
          <button
            className="summer-update-return-home"
            onClick={() => setCurrentPage("main")}
            aria-label={zh ? "回到首页" : "Return home"}
          >
            <img src="/images/ReturnHome彩色logo.png" alt="" />
          </button>
        </footer>
      </div>
    );
  }

  function renderHomePage() {
    return (
      <div className="site-shell">
        <Header />
        {SHOW_SAVE_THE_ELEPHANT_ON_HOME && (
        <section
  className="urgent-campaign-strip"
  onClick={() => {
    setSelectedArticle({
      id: "save-the-elephant",
      title:
        language === "zh"
          ? "拯救大象！"
          : "SAVE THE ELEPHANT!",
      category:
        language === "zh"
          ? "紧急呼吁 / 动物伦理"
          : "Urgent Appeal / Animal Ethics",
      author: "Feminist Archive",
      date: "May 2026",
      readTime: "6 min read",
      image: "/images/文章素材图4.png",
      excerpt:
        language === "zh"
          ? "关于尼泊尔一头母象正在遭受囚禁、剥削与暴力对待的紧急记录。"
          : "An urgent record concerning a female elephant in Nepal reportedly subjected to captivity, exploitation, and violence.",
      tags: ["animal ethics", "captivity", "violence", "urgent appeal"],
      content:
        language === "zh"
          ? `这是一篇紧急呼吁文章。

尼泊尔一头母象正在遭受长期囚禁、剥削与暴力对待。我们希望通过记录、传播与公共关注，使她的处境被更多人看见。

Feminist Archive 关注一切被制度化暴力掩盖的生命处境。动物的痛苦不应被旅游、商业利益或传统叙事所遮蔽。

更多资料正在整理中。`
          : `This is an urgent appeal.

A female elephant in Nepal is reportedly being subjected to captivity, exploitation, and violence. We hope to make her situation visible through documentation, circulation, and public attention.

Feminist Archive is concerned with forms of life whose suffering is hidden by institutional violence. The pain of animals should not be obscured by tourism, commercial interests, or inherited narratives.

Further materials are being gathered.`
    });

    setArticleReturnPage("main");
    setCurrentPage("article-detail");
  }}
>
  <span>URGENT APPEAL</span>
  <strong>SAVE THE ELEPHANT!</strong>
  <em>{language === "zh" ? "点击阅读紧急记录" : "Read the urgent appeal"}</em>
</section>
        )}
        <main>
          <section id="home" className="hero">
            <div className="hero-left">
              <div className="eyebrow">{t.heroEyebrow}</div>
              <h1 key={language} className="hero-title-enter">
  {t.heroTitle}
</h1>
              <p className="hero-text">{t.heroText}</p>

              <div className="hero-actions">
                <a className="button button-dark" href="#submit">
                  {t.heroSubmit}
                </a>
                <a className="button button-light" href="#archive">
                  {t.heroBrowse}
                </a>
              </div>
            </div>

            <aside className="hero-right">
  <button
    className="summer-update-card"
    type="button"
    onClick={() => setCurrentPage("summer-update")}
  >
    <span>{language === "zh" ? "网站建设中" : "Site in progress"}</span>
    <strong>
      {language === "zh" ? (
        <img
          className="summer-update-card-logo"
          src="/images/夏日更新彩色logo.png"
          alt="夏日更新"
        />
      ) : (
        "Summer Update"
      )}
    </strong>
  </button>

  <div
    className="theme-card"
    onClick={() => setCurrentPage("monthly-theme")}
  >
    <div className="theme-card-content">
      <div className="theme-issue-label">{t.themeIssueLabel}</div>
      <h2>{t.themeTitle}</h2>
      <p>{t.themeText}</p>
    </div>
  </div>

  <div className="hero-mini-grid">
    <div className="hero-mini-card">
      <span>{language === "zh" ? "编者按" : "Editorial"}</span>
      <h3>{language === "zh" ? "缓慢出版" : "On publishing slowly"}</h3>
      <p>
        {language === "zh"
          ? "我们拒绝算法驱动的更新节奏，选择以更长的时间阅读、编辑与保存女性主义写作。"
          : "Why we reject algorithmic speed and build slower feminist archives."}
      </p>
    </div>

    <div className="hero-mini-card">
      <span>{language === "zh" ? "档案笔记" : "Archive Note"}</span>
      <h3>{language === "zh" ? "被找回的历史" : "Recovered histories"}</h3>
      <p>
        {language === "zh"
          ? "重新整理被遗忘、被压制、被忽略的女性经验与思想记录。"
          : "Restoring forgotten texts, suppressed narratives, and lost records."}
      </p>
    </div>
  </div>
</aside>
          </section>

          <section className="section-intro">
            <div>
              <div className="section-label">{t.aboutLabel}</div>
              <h2>{t.aboutTitle}</h2>
            </div>
            <p>{t.aboutText}</p>
          </section>
          <section className="editorial-strip">
  <div className="editorial-strip-header">
    <span>{language === "zh" ? "推荐阅读" : "EDITORIAL HIGHLIGHTS"}</span>
    <button onClick={() => setCurrentPage("magazine")}>
      {language === "zh" ? "浏览全部 →" : "Browse all →"}
    </button>
  </div>

  <div className="editorial-strip-grid">
	    {visibleArticles.slice(0, 3).map((article) => (
      <article
        key={article.id}
        className="editorial-strip-card"
        onClick={() => openArticleFrom(article, "main")}
      >
        <div
          className="editorial-strip-image"
          style={{
            backgroundImage: `url(${article.image || "/images/文章素材图4.png"})`,
          }}
        />

        <div className="editorial-strip-meta">
          {article.category}
        </div>

        <h3>{article.title}</h3>

        <p>{article.excerpt}</p>

        <span className="editorial-strip-author">
          {article.author}
        </span>
      </article>
    ))}
  </div>
</section>
          <section id="archive" className="archive-section">
            <div className="section-heading">
              <div>
                <div className="section-label">{t.archiveLabel}</div>
                <h2>{t.archiveTitle}</h2>
              </div>
            </div>

            <div className="archive-tools">
              <input
                className="search-input"
                type="text"
                placeholder={t.archivePlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <div className="category-row">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={
                      activeCategory === category
                        ? "category-pill active"
                        : "category-pill"
                    }
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="article-grid">
              {homepageArchiveArticles.map((article) => (
                <article
                  key={article.id}
                  className="article-card"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    openArticleFrom(article, "main");
                  
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth"
                    });
                  }}
                >
                  <div className="article-meta">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </div>

                  <h3>{article.title}</h3>
                  <p className="article-author">By {article.author}</p>
                  <p className="article-excerpt">{article.excerpt}</p>

                  <div className="tag-row">
                    {(article.tags || []).map((tag) => (
                      <span key={tag} className="tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="archive-more">
  <button
    className="button button-light"
    onClick={() => setCurrentPage("archive-page")}
  >
    Browse full archive
  </button>
</div>
            
          </section>

          <section id="submit" className="submit-section">
            <div className="submit-left">
              <div className="section-label">{t.submitLabel}</div>
              <h2>{t.submitTitle}</h2>
              <p>{t.submitText}</p>

              <ul className="submission-notes">
                <li>{t.submitNote1}</li>
                <li>{t.submitNote2}</li>
                <li>{t.submitNote3}</li>
              </ul>

              <p style={{ marginTop: "18px", color: "var(--muted)" }}>
                <button
                  onClick={() => setCurrentPage("guidelines")}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "inherit",
                    textDecoration: "underline",
                    cursor: "pointer",
                    font: "inherit",
                  }}
                >
                  {t.submitGuidelines}
                </button>
              </p>
            </div>

            {isSubmitted ? (
              <div className="submit-form">
                <div className="section-label">{t.submitLabel}</div>
                <h2 style={{ marginTop: 0 }}>{t.successTitle}</h2>

                <div
                  style={{
                    marginTop: "12px",
                    display: "grid",
                    gap: "14px",
                    color: "var(--muted)",
                    lineHeight: 1.9,
                  }}
                >
                  <p style={{ margin: 0 }}>{t.successText1}</p>
                  <p style={{ margin: 0 }}>{t.successText2}</p>
                  <p style={{ margin: 0 }}>{t.successText3}</p>
                  <p style={{ margin: 0 }}>{t.successText4}</p>
                </div>

                <div style={{ marginTop: "22px" }}>
                  <button
                    type="button"
                    className="button button-dark"
                    onClick={() => setIsSubmitted(false)}
                  >
                    {language === "zh" ? "继续编辑" : "Edit again"}
                  </button>
                </div>
              </div>
            ) : (
              <form
                className="submit-form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSubmissionError("");
                  setIsSubmittingArticle(true);

                  const formData = new FormData(e.target);

                  const title = formData.get("title");
                  const author = formData.get("author");
                  const email = formData.get("email");
                  const keywords = formData.get("keywords");
                  const abstract = formData.get("abstract");
                  const content = formData.get("content");

                  try {
                    await submitWebsiteForm({
                      type: language === "zh" ? "新投稿" : "New submission",
                      title,
                      author,
                      email,
                      keywords,
                      abstract,
                      content,
                      language,
                    });

                    setIsSubmitted(true);
                    e.target.reset();
                  } catch {
                    setSubmissionError(
                      language === "zh"
                        ? "提交失败，请稍后再试，或手动发送至 submissions@feministarchivejournal.org。"
                        : "Submission failed. Please try again later, or email submissions@feministarchivejournal.org directly."
                    );
                  } finally {
                    setIsSubmittingArticle(false);
                  }
                }}
              >
                <div className="form-row">
                  <input name="title" type="text" placeholder={t.formTitle} />
                  <input name="author" type="text" placeholder={t.formAuthor} />
                </div>

                <div className="form-row">
                  <input name="email" type="email" placeholder={t.formEmail} />
                  <input
                    name="keywords"
                    type="text"
                    placeholder={t.formKeywords}
                  />
                </div>

                <textarea
                  name="abstract"
                  placeholder={t.formAbstract}
                  rows="5"
                />
                <textarea name="content" placeholder={t.formBody} rows="10" />

                <button type="submit" className="button button-dark">
                  {isSubmittingArticle
                    ? language === "zh"
                      ? "提交中..."
                      : "Submitting..."
                    : t.formButton}
                </button>

                {submissionError && (
                  <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                    {submissionError}
                  </p>
                )}
              </form>
            )}
          </section>

          <section id="contact" className="contact-section">
            <div>
              <div className="section-label">{t.contactLabel}</div>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>
            </div>

            <div className="contact-links">
              <a href="mailto:editorial@feministarchivejournal.org">
                editorial@feministarchivejournal.org
              </a>

              <a href="mailto:submissions@feministarchivejournal.org">
                submissions@feministarchivejournal.org
              </a>

              <button
                onClick={() => setCurrentPage("donate")}
                style={{
                  textAlign: "left",
                  padding: "14px 16px",
                  border: "1px solid var(--line)",
                  borderRadius: "18px",
                  background: "var(--paper)",
                  cursor: "pointer",
                  font: "inherit",
                }}
              >
                {t.donationLink}
              </button>

              <button
                onClick={() => setCurrentPage("guidelines")}
                style={{
                  textAlign: "left",
                  padding: "14px 16px",
                  border: "1px solid var(--line)",
                  borderRadius: "18px",
                  background: "var(--paper)",
                  cursor: "pointer",
                  font: "inherit",
                }}
              >
                {t.navGuidelines}
              </button>
            </div>
          </section>
        </main>
        <section className="home-donation-drive-full donation-reveal">
        <div className="home-donation-inner donation-reveal">
        <div className="home-donation-art donation-reveal-item delay-1">
      <img src="/images/donation-drive-cover.png" alt="" />
    </div>

    <div className="home-donation-copy donation-reveal-item delay-2">
      <div className="donation-brand">Feminist Archive</div>

      {/*
        Original editable text heading, kept for easy rollback:
        <h2>
          {language === "zh"
            ? "支持 Feminist Archive：让女性主义写作保持开放"
            : "Donate to Feminist Archive: keep feminist writing open"}
        </h2>
      */}
      <img
        className="donation-slogan-image"
        src={
          language === "zh"
            ? "/images/捐助标语手绘版中文.png?v=20260612-erased"
            : "/images/捐助标语手绘版英文.png"
        }
        alt={
          language === "zh"
            ? "支持 Feminist Archive：让女性主义写作保持开放"
            : "Donate to Feminist Archive: keep feminist writing open"
        }
      />

      <p>
        {language === "zh"
          ? "Feminist Archive 坚持免费阅读，提供文章、档案写作、理论与长篇女性主义思想。"
          : "Feminist Archive offers essays, archival writing, theory and long-form feminist thought, freely available to read."}
      </p>

      <p className="donation-strong">
        {language === "zh"
          ? "加入我们的读者支持计划，帮助这个独立出版平台继续存在。"
          : "Join our reader-supported drive and help us keep this independent publication free."}
      </p>
    </div>

    <div className="home-donation-panel donation-reveal-item delay-3">
    <button
  className={
    donationType === "monthly"
      ? "donation-choice active"
      : "donation-choice"
  }
  onClick={() => setDonationType("monthly")}
>
  <span className="choice-radio"></span>
  <strong>{language === "zh" ? "£10 / 月" : "£10 per month"}</strong>
  <em>{language === "zh" ? "推荐" : "RECOMMENDED"}</em>
</button>

<button
  className={
    donationType === "one-time"
      ? "donation-choice active"
      : "donation-choice"
  }
  onClick={() => setDonationType("one-time")}
>
  <span className="choice-radio"></span>
  <strong>{language === "zh" ? "一次性捐助" : "One time donation"}</strong>
</button>

<div className="donation-bottom-row">

<button
  className="donation-continue"
  onClick={() => setCurrentPage("donation-drive")}
>
  <span>{language === "zh" ? "继续" : "Continue"}</span>
  <span className="continue-arrow">→</span>
</button>


        <div className="donation-payment-icons">
          <span className="pay-icon paypal">P</span>
          <span className="pay-icon visa">VISA</span>
          <span className="pay-icon mastercard">
            <i></i>
            <b></b>
          </span>
          <span className="pay-icon amex">AMEX</span>
          <span className="pay-icon kofi" aria-label="Ko-fi">
            <svg viewBox="0 0 74 34" role="img" aria-hidden="true">
              <path d="M8 9h40c8 0 14 6 14 14s-6 14-14 14H29C17 37 8 28 8 16z" />
              <path d="M49 14h6c6 0 10 4 10 9s-4 9-10 9h-6" />
              <path d="M24 17c2-4 8-4 10 0 2-4 9-3 10 2 1 7-7 11-10 14-4-3-12-7-10-16z" />
            </svg>
          </span>
          <span className="pay-icon coffee" aria-label="Buy Me a Coffee">
            <svg viewBox="0 0 74 34" role="img" aria-hidden="true">
              <path d="M22 13h29l-3 18c-1 5-4 7-10 7h-4c-6 0-9-2-10-7z" />
              <path d="M18 8c8 2 28 2 36 0" />
              <path d="M21 4c7-2 24-2 31 0" />
              <path d="M19 8l-1 5c8 2 29 2 37 0l-1-5" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
        <section
  className="print-announcement-banner"
  onClick={() => setCurrentPage("print-edition")}
>
  <div className="print-announcement-label">
    PRINT ANNOUNCEMENT
  </div>

  <div className="print-announcement-text">
    <span>Feminist Archive is preparing its first printed publication</span>
    <em> supporters will receive early updates</em>
  </div>

  <div className="print-announcement-arrow">
    →
  </div>
</section>

        <footer className="site-footer">
          <div>© 2026 Feminist Archive</div>

          <div className="footer-links">
            <button
              style={footerButtonStyle}
              onClick={() => setCurrentPage("main")}
            >
              {t.footerHome}
            </button>
            <a href="#archive">{t.footerArchive}</a>
            <a href="#submit">{t.footerSubmit}</a>
            <button
              style={footerButtonStyle}
              onClick={() => setCurrentPage("contact-page")}
            >
              {t.footerContact}
            </button>
          </div>
        </footer>
      </div>
    );
  }

  const renderWithToast = (content) => (
    <>
      {content}
      <div
        className={`site-toast ${toastMessage ? "is-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toastMessage}
      </div>
    </>
  );

  if (currentPage === "magazine") {
    return renderWithToast(
      <MagazinePage
        language={language}
        onBack={() => setCurrentPage("main")}
        setCurrentPage={setCurrentPage}
        onOpenArticle={(article) => openArticleFrom(article, "magazine")}
      />
    );
  }
  if (currentPage === "writing-page" || currentPage === "reviews-page") {
    return renderWithToast(
      <MagazineCategoryPage
        language={language}
        type={currentPage === "writing-page" ? "writing" : "reviews"}
        onBack={() => setCurrentPage("magazine")}
        setCurrentPage={setCurrentPage}
        onOpenArticle={(article) => openArticleFrom(article, currentPage)}
      />
    );
  }
  if (currentPage === "monthly-theme-zh") {
    return renderWithToast(
      <MonthlyThemePageZh
        onBack={() => setCurrentPage("main")}
        onOpenArticle={(article) => openArticleFrom(article, "monthly-theme")}
        setLanguage={setLanguage}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  if (currentPage === "contact-page") {
    return renderWithToast(
      <ContactPage
        language={language}
        onBack={() => setCurrentPage("magazine")}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  if (currentPage === "archive-house") {
    return renderWithToast(
      <ArchiveHousePage
        language={language}
        onBack={() => setCurrentPage("main")}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  if (currentPage === "newsletter-page") {
    return renderWithToast(
      <NewsletterPage
        language={language}
        onBack={() => setCurrentPage("magazine")}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  if (currentPage === "newsletter-privacy") {
    return renderWithToast(
      <NewsletterPrivacyPage
        language={language}
        onBack={() => setCurrentPage("newsletter-page")}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  if (currentPage === "cover-submission") {
    return renderWithToast(
      <CoverSubmissionPage
        language={language}
        onBack={() => setCurrentPage("contact-page")}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  if (currentPage === "submission-guidelines") {
    return renderWithToast(
      <SubmissionGuidelinesPage
        language={language}
        onBack={() => setCurrentPage("main")}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  if (currentPage === "submission-page") {
    return renderWithToast(
      <SubmissionPage
        language={language}
        onBack={() => setCurrentPage("submission-guidelines")}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  if (currentPage === "news-page") {
    return renderWithToast(
      <NewsPage
        language={language}
        onBack={() => setCurrentPage("main")}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  if (currentPage === "parlour") {
    return renderWithToast(
      <ParlourPage
        language={language}
        onBack={() => setCurrentPage("magazine")}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  if (currentPage === "our-story") {
    return renderWithToast(
      <OurStoryPage
        language={language}
        onBack={() => setCurrentPage("archive-house")}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  if (currentPage === "how-we-edit") {
    return renderWithToast(
      <HowWeEditPage
        language={language}
        onBack={() => setCurrentPage("archive-house")}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  if (currentPage === "summer-update") {
    return renderWithToast(renderSummerUpdatePage());
  }
  if (currentPage === "reading-room") {
    return renderWithToast(
      <ReadingRoomPage
        language={language}
        onBack={() => setCurrentPage("archive-house")}
        onOpenArticle={(article) => openArticleFrom(article, "reading-room")}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  if (currentPage === "deep-reading") {
    return renderWithToast(
      <DeepReadingPage
        language={language}
        onBack={() => setCurrentPage("magazine")}
        onOpenArticle={(article) => openArticleFrom(article, "deep-reading")}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  if (currentPage === "reading-guides") {
    return renderWithToast(
      <ReadingRoomPage
        language={language}
        initialShowGuides
        onBack={() => setCurrentPage("reading-room")}
        onOpenArticle={(article) => openArticleFrom(article, "reading-room")}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  if (currentPage === "caliban-guide") {
    return renderWithToast(
      <ReadingRoomPage
        language={language}
        initialShowGuides
        initialGuideBookId="caliban-and-the-witch"
        onBack={() => setCurrentPage("reading-room")}
        onOpenArticle={(article) => openArticleFrom(article, "reading-room")}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  if (currentPage === "monthly-theme") {

    if (language === "zh") {
      return renderWithToast(
        <MonthlyThemePageZh
          setLanguage={setLanguage}
          onBack={() => setCurrentPage("main")}
          setCurrentPage={setCurrentPage}
          onOpenArticle={(article) => {
            openArticleFrom(article, "monthly-theme");
  
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      );
    }
  
    return renderWithToast(
      <MonthlyThemePage
        language={language}
        setLanguage={setLanguage}
        onBack={() => setCurrentPage("main")}
        setCurrentPage={setCurrentPage}
        onOpenArticle={(article) => {
          openArticleFrom(article, "monthly-theme");
  
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />
    );
  }

  if (currentPage === "article-detail") {
    return renderWithToast(renderArticleDetail());
  }

  if (currentPage === "guidelines") {
    return renderWithToast(renderGuidelinesPage());
  }

  if (currentPage === "donate") {
    return renderWithToast(renderDonatePage());
  }
  if (currentPage === "donation-drive") return renderWithToast(renderDonationDrivePage());
  if (currentPage === "contact-page") {
    return renderWithToast(renderContactPage());
  }

  if (currentPage === "print-edition") {
    return renderWithToast(renderPrintEditionPage());
  }

  if (currentPage === "archive-page") {
    return renderWithToast(
      <ArchivePage
  language={language}
  articles={currentArticles}
  onBack={() => setCurrentPage("main")}
  onOpenArticle={(article) => openArticleFrom(article, "archive-page")}
/>
    );
  }

  return renderWithToast(renderHomePage());
}

function App() {
  return IS_MAINTENANCE_MODE ? <MaintenancePage /> : <MainApp />;
}

export default App;



/* import "./index.css";

function App() {
  return (
    <main className="maintenance-page">
      <section className="maintenance-card">
        <div className="maintenance-label">FEMINIST ARCHIVE</div>

        <h1>Site under maintenance</h1>

        <p className="maintenance-intro">
          Feminist Archive is currently being prepared and refined.
        </p>

        <p>
          We are working on the full site and will return with a more complete
          platform for feminist writing, critical reflection, and archival work.
        </p>

        <p>
          For enquiries, submissions, or editorial matters, please contact us
          temporarily at:
        </p>

        <a className="maintenance-email" href="mailto:submissions@feministarchivejournal.org">
        submissions@feministarchivejournal.org
        </a>

        <div className="maintenance-footer">
          Rigorous writing · Critical reflection · Archival work
        </div>
      </section>
    </main>
  );
}

export default App;

*/
