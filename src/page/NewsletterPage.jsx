import { useEffect, useRef, useState } from "react";
import { submitWebsiteForm } from "../utils/formSubmit";

const floatingEnvelopes = [
  { className: "envelope-1", startX: 0.64, delay: 100, drift: 0.7 },
  { className: "envelope-2", startX: 0.24, delay: 900, drift: 1.1 },
  { className: "envelope-3", startX: 0.8, delay: 1500, drift: 0.86 },
  { className: "envelope-4", startX: 0.48, delay: 2400, drift: 1.25 },
  { className: "envelope-5", startX: 0.09, delay: 1300, drift: 0.94 },
];

function NewsletterPage({ language, onBack, setCurrentPage }) {
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

      const pointer = { active: false, x: 0, y: 0, px: 0, py: 0 };
      const states = floatingEnvelopes.map((envelope, index) => {
        const node = envelopeRefs.current[index];
        const width = node?.offsetWidth || 120;
        const height = node?.offsetHeight || 80;

        return {
          x: envelope.startX * Math.max(page.clientWidth - width, 1),
          y: -height - 80 - index * 34,
          vx: 0,
          vy: 16 + index * 2.4,
          angle: index % 2 ? 12 : -14,
          av: index % 2 ? -5 : 4,
          width,
          height,
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
        const floorPadding = 32;

        states.forEach((state, index) => {
          const node = envelopeRefs.current[index];
          if (!node || elapsed < state.delay) return;

          if (!state.visible) {
            state.visible = true;
            node.classList.add("is-falling");
          }

          state.width = node.offsetWidth;
          state.height = node.offsetHeight;

          const floor = Math.max(
            page.scrollHeight - state.height - floorPadding,
            window.innerHeight - state.height - floorPadding
          );
          const leftWall = 16;
          const rightWall = Math.max(pageWidth - state.width - 16, leftWall);
          const slowFall = state.y < floor - 24;

          if (slowFall) {
            state.vy += 38 * dt;
            state.vx +=
              Math.sin(now / 1150 + index * 1.8) * 20 * state.drift * dt;
            state.av += Math.sin(now / 900 + index) * 7 * dt;
          } else {
            state.vy += 28 * dt;
          }

          state.vx *= slowFall ? 0.992 : 0.9;
          state.vy *= 0.995;
          state.av *= 0.985;

          if (pointer.active) {
            const cx = state.x + state.width / 2;
            const cy = state.y + state.height / 2;
            const dx = cx - pointer.x;
            const dy = cy - pointer.y;
            const distance = Math.hypot(dx, dy);
            const radius = Math.max(state.width, state.height) * 0.98;

            if (distance < radius) {
              const strength = (1 - distance / radius) ** 2;
              const nx = dx / (distance || 1);
              const ny = dy / (distance || 1);
              const pointerVx = pointer.x - pointer.px;
              const pointerVy = pointer.y - pointer.py;

              state.vx += nx * strength * 980 * dt + pointerVx * strength * 0.22;
              state.vy += ny * strength * 980 * dt + pointerVy * strength * 0.18;
              state.av += (nx * pointerVy - ny * pointerVx) * strength * 0.18;
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
            if (Math.abs(state.vy) > 22) {
              state.vy *= -0.24;
              state.av += state.vx * 0.04;
            } else {
              state.vy = 0;
            }

            state.vx *= 0.82;
            state.av *= 0.78;
          }

          node.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) rotate(${state.angle}deg)`;
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
            key={envelope.className}
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
      </div>
    );
  }
  
  export default NewsletterPage;
