import { useState } from "react";
import { submitWebsiteForm } from "../utils/formSubmit";

function SubmissionPage({ language, onBack, setCurrentPage }) {
  const zh = language === "zh";
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="submission-studio-page">
      <header className="submission-studio-header">
        <button onClick={onBack}>← {zh ? "返回写作指导" : "Back to guide"}</button>

        <div
          className="submission-studio-logo"
          onClick={() => setCurrentPage("main")}
        >
          Feminist Archive
          <span>{zh ? "投稿工作室" : "submission studio"}</span>
        </div>

        <button onClick={() => setCurrentPage("reading-room")}>
          {zh ? "阅读室" : "Reading room"}
        </button>
      </header>

      <main className="submission-studio-main">
        <section className="submission-studio-hero">
          <div className="submission-studio-kicker">
            {zh ? "SUBMIT TO FEMINIST ARCHIVE / 投稿" : "SUBMIT TO FEMINIST ARCHIVE"}
          </div>

          <h1>{zh ? "把你的文章放进档案。" : "Place your writing in the archive."}</h1>

          <p>
            {zh
              ? "你可以把已经完成的文章、仍在形成中的论述、理论片段或批评性写作复制到这里。我们会人工阅读，并通过你留下的邮箱与你联系。"
              : "Paste a finished essay, a developing argument, a theoretical fragment, or a critical intervention here. We read manually and will contact you by email."}
          </p>
        </section>

        <section className="submission-studio-shell">
          <div className="submission-studio-side">
            <span>{zh ? "投稿前" : "Before submitting"}</span>
            <h2>{zh ? "请让文章保留自己的判断。" : "Let the piece keep its judgment."}</h2>
            <p>
              {zh
                ? "我们欢迎清晰、诚实、有思想密度的写作。无需把文章伪装成某种固定学术语气，但请尽量让论点、材料和语言互相支撑。"
                : "We welcome clear, honest writing with intellectual density. It does not need to mimic a fixed academic voice, but its claims, materials, and language should hold together."}
            </p>
          </div>

          {isSent ? (
            <div className="submission-studio-success">
              <span>{zh ? "已收到" : "Received"}</span>
              <h2>{zh ? "你的投稿已经送达。" : "Your submission has arrived."}</h2>
              <p>
                {zh
                  ? "谢谢你把文字交给 Feminist Archive。我们会认真阅读，并在有进一步编辑意见时通过邮箱联系你。"
                  : "Thank you for sending your work to Feminist Archive. We will read carefully and contact you by email if we have further editorial notes."}
              </p>
              <button onClick={() => setIsSent(false)}>
                {zh ? "继续提交另一篇" : "Submit another piece"}
              </button>
            </div>
          ) : (
            <form
              className="submission-studio-form"
              onSubmit={async (event) => {
                event.preventDefault();
                setError("");
                setIsSending(true);

                const formData = new FormData(event.currentTarget);
                const payload = {
                  type: zh ? "新投稿" : "New submission",
                  title: formData.get("title"),
                  author: formData.get("author"),
                  email: formData.get("email"),
                  keywords: formData.get("keywords"),
                  abstract: formData.get("abstract"),
                  content: formData.get("content"),
                  language,
                };

                try {
                  await submitWebsiteForm(payload);
                  setIsSent(true);
                  event.currentTarget.reset();
                } catch {
                  setError(
                    zh
                      ? "提交失败，请稍后再试，或手动发送至 submissions@feministarchivejournal.org。"
                      : "Submission failed. Please try again later, or email submissions@feministarchivejournal.org directly."
                  );
                } finally {
                  setIsSending(false);
                }
              }}
            >
              <div className="submission-studio-row">
                <label>
                  <span>{zh ? "标题" : "Title"}</span>
                  <input name="title" required placeholder={zh ? "文章标题" : "Essay title"} />
                </label>

                <label>
                  <span>{zh ? "作者 / 笔名" : "Author / pen name"}</span>
                  <input name="author" required placeholder={zh ? "你的名字或笔名" : "Your name or pen name"} />
                </label>
              </div>

              <div className="submission-studio-row">
                <label>
                  <span>{zh ? "邮箱" : "Email"}</span>
                  <input name="email" type="email" required placeholder="you@example.com" />
                </label>

                <label>
                  <span>{zh ? "关键词" : "Keywords"}</span>
                  <input name="keywords" placeholder={zh ? "女性主义、电影、劳动……" : "feminism, cinema, labour..."} />
                </label>
              </div>

              <label>
                <span>{zh ? "摘要 / 给编辑的话" : "Abstract / note to editor"}</span>
                <textarea
                  name="abstract"
                  rows="5"
                  placeholder={
                    zh
                      ? "这篇文章想处理什么问题？你希望编辑特别注意什么？"
                      : "What problem does this piece address? Is there anything you want the editor to notice?"
                  }
                />
              </label>

              <label>
                <span>{zh ? "正文" : "Body"}</span>
                <textarea
                  name="content"
                  rows="16"
                  required
                  placeholder={zh ? "请把正文粘贴在这里……" : "Paste your full text here..."}
                />
              </label>

              <button type="submit" disabled={isSending}>
                {isSending ? (zh ? "提交中……" : "Submitting...") : zh ? "提交给编辑部" : "Submit to editors"}
              </button>

              {error && <p className="submission-studio-error">{error}</p>}
            </form>
          )}
        </section>
      </main>
    </div>
  );
}

export default SubmissionPage;
