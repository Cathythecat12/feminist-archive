import { useEffect, useRef, useState } from "react";
import { submitWebsiteForm } from "../utils/formSubmit";

const floatingEnvelopes = Array.from({ length: 26 }, (_, index) => ({
  className: `envelope-${(index % 7) + 1}`,
  startX: [0.12, 0.73, 0.42, 0.88, 0.27, 0.58, 0.04, 0.66, 0.35, 0.8, 0.18, 0.52, 0.94][index % 13],
  delay: 120 + index * 145,
  drift: 0.78 + (index % 5) * 0.16,
  scale: 0.76 + (index % 6) * 0.08,
}));

const SHOW_NEWSLETTER_ARCHIVE = false;

function LegacyNewsletterPage({ language, onBack, setCurrentPage }) {
    const zh = language === "zh";
    const [status, setStatus] = useState("");
    const pageRef = useRef(null);
    const envelopeRefs = useRef([]);
  
    const pastLetters = [
      "Letter 01",
      "Letter 02",
      "Letter 03",
    ];

    useEffect(() => {
      const page = pageRef.current;
      if (!page) return undefined;

      const pointer = { active: false, x: 0, y: 0, px: 0, py: 0, vx: 0, vy: 0 };
      const states = floatingEnvelopes.map((envelope, index) => {
        const node = envelopeRefs.current[index];
        const width = (node?.offsetWidth || 120) * envelope.scale;
        const height = (node?.offsetHeight || 80) * envelope.scale;

        return {
          x: envelope.startX * Math.max(page.clientWidth - width, 1),
          y: -height - 130 - index * 22,
          vx: ((index % 4) - 1.5) * 16,
          vy: 35 + index * 1.6,
          angle: ((index * 31) % 44) - 22,
          av: index % 2 ? -18 : 16,
          width,
          height,
          scale: envelope.scale,
          delay: envelope.delay,
          drift: envelope.drift,
          visible: false,
        };
      });

      let frame;
      let previous = performance.now();
      const start = previous;

      const movePointer = (event) => {
        const rect = page.getBoundingClientRect();
        pointer.active = true;
        pointer.px = pointer.x;
        pointer.py = pointer.y;
        pointer.x = event.clientX - rect.left;
        pointer.y = event.clientY - rect.top + page.scrollTop;
        pointer.vx = pointer.x - pointer.px;
        pointer.vy = pointer.y - pointer.py;
      };

      const leavePointer = () => {
        pointer.active = false;
      };

      page.addEventListener("pointermove", movePointer);
      page.addEventListener("pointerleave", leavePointer);

      const tick = (now) => {
        const dt = Math.min((now - previous) / 1000, 0.033);
        previous = now;
        const elapsed = now - start;
        const pageWidth = page.clientWidth;
        const floorPadding = 42;
        const leftWall = 14;
        const rightInset = 14;

        for (let i = 0; i < states.length; i += 1) {
          const a = states[i];
          if (!a.visible) continue;

          for (let j = i + 1; j < states.length; j += 1) {
            const b = states[j];
            if (!b.visible) continue;

            const ax = a.x + a.width / 2;
            const ay = a.y + a.height / 2;
            const bx = b.x + b.width / 2;
            const by = b.y + b.height / 2;
            const minDistance = (Math.max(a.width, a.height) + Math.max(b.width, b.height)) * 0.36;
            const dx = bx - ax;
            const dy = by - ay;
            const distance = Math.hypot(dx, dy) || 1;

            if (distance < minDistance) {
              const nx = dx / distance;
              const ny = dy / distance;
              const overlap = minDistance - distance;
              const push = overlap * 0.52;
              const rvx = b.vx - a.vx;
              const rvy = b.vy - a.vy;
              const separatingVelocity = rvx * nx + rvy * ny;

              a.x -= nx * push;
              a.y -= ny * push * 0.55;
              b.x += nx * push;
              b.y += ny * push * 0.55;

              if (separatingVelocity < 0) {
                const impulse = -separatingVelocity * 0.28;
                a.vx -= nx * impulse;
                a.vy -= ny * impulse * 0.55;
                b.vx += nx * impulse;
                b.vy += ny * impulse * 0.55;
                a.av -= ny * impulse * 0.08;
                b.av += nx * impulse * 0.08;
              }
            }
          }
        }

        states.forEach((state, index) => {
          const node = envelopeRefs.current[index];
          if (!node || elapsed < state.delay) return;

          if (!state.visible) {
            state.visible = true;
            node.classList.add("is-falling");
          }

          state.width = (node.offsetWidth || state.width) * state.scale;
          state.height = (node.offsetHeight || state.height) * state.scale;

          const floor = Math.max(
            page.scrollHeight - state.height - floorPadding,
            window.innerHeight - state.height - floorPadding
          );
          const rightWall = Math.max(pageWidth - state.width - rightInset, leftWall);
          const airborne = state.y < floor - 2;

          if (airborne) {
            state.vy += 720 * dt;
            state.vx += Math.sin(now / 260 + index * 2.1) * 18 * state.drift * dt;
            state.av += Math.sin(now / 360 + index) * 18 * dt;
          } else {
            state.vy += 260 * dt;
          }

          state.vx *= airborne ? 0.996 : 0.84;
          state.vy *= 0.998;
          state.av *= airborne ? 0.992 : 0.82;

          if (pointer.active) {
            const cx = state.x + state.width / 2;
            const cy = state.y + state.height / 2;
            const dx = cx - pointer.x;
            const dy = cy - pointer.y;
            const distance = Math.hypot(dx, dy);
            const radius = Math.max(state.width, state.height) * 1.15;

            if (distance < radius) {
              const strength = (1 - distance / radius) ** 1.35;
              const nx = dx / (distance || 1);
              const ny = dy / (distance || 1);

              state.vx += nx * strength * 1200 * dt + pointer.vx * strength * 0.62;
              state.vy += ny * strength * 900 * dt + pointer.vy * strength * 0.42;
              state.av += (nx * pointer.vy - ny * pointer.vx) * strength * 0.34;
            }
          }

          state.x += state.vx * dt;
          state.y += state.vy * dt;
          state.angle += state.av * dt;

          if (state.x < leftWall) {
            state.x = leftWall;
            state.vx = Math.abs(state.vx) * 0.42;
            state.av *= -0.35;
          }

          if (state.x > rightWall) {
            state.x = rightWall;
            state.vx = -Math.abs(state.vx) * 0.42;
            state.av *= -0.35;
          }

          if (state.y > floor) {
            state.y = floor;
            if (Math.abs(state.vy) > 42) {
              state.vy *= -0.18;
              state.av += state.vx * 0.04;
            } else {
              state.vy = 0;
            }

            state.vx *= 0.76;
            state.av *= 0.74;
          }

          node.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) rotate(${state.angle}deg) scale(${state.scale})`;
        });

        frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);

      return () => {
        cancelAnimationFrame(frame);
        page.removeEventListener("pointermove", movePointer);
        page.removeEventListener("pointerleave", leavePointer);
      };
    }, []);
  
    return (
      <div className="fa-newsletter-page" ref={pageRef}>
        {floatingEnvelopes.map((envelope, index) => (
          <div
            className={`falling-envelope ${envelope.className}`}
            key={`${envelope.className}-${index}`}
            ref={(node) => {
              envelopeRefs.current[index] = node;
            }}
          >
            <span className="envelope-paper" />
          </div>
        ))}
        <header className="fa-newsletter-header">
          <button onClick={onBack}>← {zh ? "返回" : "Back"}</button>
  
          <div
            className="fa-newsletter-logo"
            onClick={() => setCurrentPage("magazine")}
          >
            Feminist Archive
          </div>
  
          <button onClick={() => setCurrentPage("donation-drive")}>
            {zh ? "捐助" : "Donate"}
          </button>
        </header>
  
        <main className="fa-newsletter-main">
          <section className="fa-newsletter-hero">
            <div className="fa-newsletter-kicker">
              {zh ? "编辑通讯" : "EDITORIAL LETTER"}
            </div>
  
            <h1>
              {zh ? "Stay with the archive." : "Stay with the archive."}
            </h1>
  
            <p>
              {zh
                ? "我们发送高质量的编辑通讯：新文章、档案片段、阅读路径与缓慢形成的思想。没有商业推销，没有无聊消息，也不会频繁轰炸你的邮箱。"
                : "We send high-quality editorial letters: new essays, archival fragments, reading paths, and slowly formed thoughts. No commercial promotion, no empty updates, and no inbox bombardment."}
            </p>
          </section>
  
          <section className="fa-newsletter-panel">
            <div className="fa-newsletter-panel-copy">
              <h2>{zh ? "订阅 Feminist Archive" : "Subscribe to Feminist Archive"}</h2>
              <p>
                {zh
                  ? "确认订阅后，即表示你同意接收 Feminist Archive 的邮件。你可以随时取消订阅。"
                  : "By subscribing, you agree to receive emails from Feminist Archive. You can unsubscribe at any time."}
              </p>
            </div>
  
            <form
              className="fa-newsletter-form"
              onSubmit={async (e) => {
                e.preventDefault();
                const email = e.target.email.value;

                setStatus(zh ? "正在订阅..." : "Subscribing...");

                try {
                  await submitWebsiteForm({
                    type: "Newsletter subscription",
                    email,
                    language,
                  });

                  setStatus(zh ? "订阅成功，谢谢。" : "Subscribed. Thank you.");
                  e.target.reset();
                } catch {
                  setStatus(
                    zh
                      ? "订阅失败，请稍后再试。"
                      : "Could not subscribe. Please try again later."
                  );
                }
              }}
            >
              <input
                name="email"
                type="email"
                placeholder={zh ? "你的邮箱地址" : "Your email address"}
                required
              />
  
              <button type="submit">
                {zh ? "订阅" : "Subscribe"}
              </button>
            </form>

            {status && <p className="newsletter-note">{status}</p>}
          </section>
  
          <section className="fa-newsletter-principles">
            <article>
              <span>01</span>
              <h3>{zh ? "不制造噪音" : "No noise"}</h3>
              <p>{zh ? "通讯不是广告，也不是空洞更新。" : "The newsletter is not advertising, nor an empty update."}</p>
            </article>
  
            <article>
              <span>02</span>
              <h3>{zh ? "不频繁打扰" : "No bombardment"}</h3>
              <p>{zh ? "我们宁愿少写，也不随便占用你的注意力。" : "We would rather write less than occupy your attention carelessly."}</p>
            </article>
  
            <article>
              <span>03</span>
              <h3>{zh ? "值得保存" : "Worth keeping"}</h3>
              <p>{zh ? "每封信都应当像一小份档案。" : "Each letter should feel like a small archival object."}</p>
            </article>
          </section>
  
          {SHOW_NEWSLETTER_ARCHIVE && (
            <section className="fa-newsletter-archive">
              <div className="fa-newsletter-kicker">
                {zh ? "历史通讯" : "PAST LETTERS"}
              </div>
    
              <h2>
                {zh
                  ? "之后这里会放置历史 newsletter 的图片。"
                  : "A visual archive of past letters will live here."}
              </h2>
    
              <div className="fa-newsletter-letter-grid">
                {pastLetters.map((letter) => (
                  <div className="fa-newsletter-letter-card" key={letter}>
                    <div className="letter-card-inner">
                      <span>{letter}</span>
                      <p>{zh ? "即将加入图片" : "Image coming soon"}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="fa-newsletter-privacy-note refined">
  <div className="privacy-note-copy">
    <span>{zh ? "读者隐私" : "Reader privacy"}</span>
    <p>
      {zh
        ? "你的邮箱只用于接收 Feminist Archive 的编辑通讯。你可以随时退出、更新，或要求我们删除。"
        : "Your email is used only for Feminist Archive editorial letters. You may leave, update, or ask us to delete it at any time."}
    </p>
  </div>

  <button
    className="privacy-note-link"
    onClick={() => setCurrentPage("newsletter-privacy")}
  >
    <span>{zh ? "阅读隐私说明" : "Read privacy note"}</span>
    <i>↗</i>
  </button>
</section>
        </main>
        <div className="fa-newsletter-envelope-landing" aria-hidden="true" />
      </div>
    );
  }
  
function NewsletterPage({ language, onBack, setCurrentPage }) {
  const zh = language === "zh";
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;

    setStatus(zh ? "正在订阅..." : "Subscribing...");

    try {
      await submitWebsiteForm({
        type: "Newsletter subscription",
        email,
        language,
        source: "newsletter-atelier-page",
      });

      setStatus(zh ? "订阅成功，谢谢。" : "Subscribed. Thank you.");
      event.currentTarget.reset();
    } catch {
      setStatus(zh ? "订阅失败，请稍后再试。" : "Could not subscribe. Please try again later.");
    }
  };

  return (
    <div className="newsletter-atelier-page">
      <header className="newsletter-atelier-header">
        <button type="button" onClick={onBack}>
          ← {zh ? "返回" : "Back"}
        </button>

        <button
          type="button"
          className="newsletter-atelier-brand"
          onClick={() => setCurrentPage("editorial-front")}
        >
          Feminist Archive
        </button>

        <button type="button" onClick={() => setCurrentPage("donation-drive")}>
          {zh ? "捐助" : "Donate"}
        </button>
      </header>

      <main className="newsletter-atelier-main">
        <section className="newsletter-atelier-hero" aria-labelledby="newsletter-atelier-title">
          <div className="newsletter-atelier-copy">
            <p className="newsletter-atelier-kicker">
              {zh ? "编辑通讯" : "Editorial Letter"}
            </p>

            <h1 id="newsletter-atelier-title">
              {zh ? "Stay with the archive." : "Stay with the archive."}
            </h1>

            <span className="newsletter-atelier-rule" aria-hidden="true" />

            <p className="newsletter-atelier-lede">
              {zh
                ? "我们发送高质量的编辑通讯：新文章、档案片段、阅读路径与缓慢形成的思想。没有商业推销，没有空洞更新，也不会频繁轰炸你的邮箱。"
                : "We send high-quality editorial letters: new essays, archival fragments, reading paths, and slowly formed thoughts. No commercial promotion, no empty updates, and no inbox bombardment."}
            </p>

            <form className="newsletter-atelier-form" onSubmit={handleSubmit}>
              <input
                name="email"
                type="email"
                placeholder={zh ? "你的邮箱地址" : "Your email address"}
                required
              />
              <button type="submit">{zh ? "订阅" : "Subscribe"}</button>
            </form>

            <p className="newsletter-atelier-privacy">
              {status ||
                (zh
                  ? "我们尊重你的隐私。你可以随时取消订阅。"
                  : "We respect your privacy. You can unsubscribe at any time.")}
            </p>

            <blockquote>
              {zh
                ? "“档案不是储存之地，而是一种记忆与抵抗的实践。”"
                : "“The archive is not a place of storage, but a practice of remembrance and resistance.”"}
            </blockquote>
          </div>

          <figure className="newsletter-atelier-image">
            <img src="/images/newsletter-archive-table.png" alt="" />
          </figure>

          <div className="newsletter-atelier-seal" aria-hidden="true">
            <span>FA</span>
            <small>The right is our common heritage.</small>
          </div>
        </section>

        <section className="newsletter-atelier-letter" aria-labelledby="newsletter-atelier-letter-title">
          <p className="newsletter-atelier-kicker">
            {zh ? "为什么写信" : "Why the letter matters"}
          </p>

          <h2 id="newsletter-atelier-letter-title">
            {zh ? "A slower way to stay close." : "A slower way to stay close."}
          </h2>

          <span className="newsletter-atelier-rule" aria-hidden="true" />

          <div className="newsletter-atelier-letter-grid">
            <p>
              {zh
                ? "通讯不是广告位，也不是为了填满收件箱的更新。它应该像一份可保存的小型档案：把文章、阅读线索、编辑笔记和仍在形成的思想放在一起。"
                : "The newsletter is not an advertising slot, nor a stream of updates designed to fill an inbox. It should feel like a small archival object: essays, reading paths, editorial notes, and thoughts still taking shape, gathered with care."}
            </p>

            <p>
              {zh
                ? "我们宁愿少写，也不随便占用你的注意力。每封信都应当为阅读留下空间，为重新返回某个问题留下理由。"
                : "We would rather write less than occupy your attention carelessly. Each letter should leave room for reading, and give you a reason to return to a question again."}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default NewsletterPage;
