import { useState } from "react";
import { submitWebsiteForm } from "../utils/formSubmit";

const MAX_IMAGE_SIZE = 3 * 1024 * 1024;

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function CoverSubmissionPage({ language, onBack, setCurrentPage }) {
  const zh = language === "zh";
  const [preview, setPreview] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    setStatus("");

    if (!selectedFile) {
      setFile(null);
      setPreview("");
      return;
    }

    if (!selectedFile.type.startsWith("image/")) {
      setFile(null);
      setPreview("");
      setStatus(zh ? "请上传图片文件。" : "Please upload an image file.");
      return;
    }

    if (selectedFile.size > MAX_IMAGE_SIZE) {
      setFile(null);
      setPreview("");
      setStatus(
        zh
          ? "图片请控制在 3MB 以内。你可以先压缩后再上传。"
          : "Please keep the image under 3MB. You may compress it before uploading."
      );
      return;
    }

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!file) {
      setStatus(zh ? "请先选择一张图片。" : "Please choose an image first.");
      return;
    }

    setIsSubmitting(true);
    setStatus(zh ? "正在发送..." : "Sending...");

    try {
      const fileData = await readFileAsDataUrl(file);

      await submitWebsiteForm({
        type: "Cover image submission",
        language,
        email: formData.get("email"),
        name: formData.get("name"),
        note: formData.get("note"),
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
        fileData,
      });

      form.reset();
      setFile(null);
      setPreview("");
      setStatus(
        zh
          ? "已经收到，谢谢你让 Feminist Archive 更美。我们会在选择后联系你。"
          : "Received. Thank you for helping Feminist Archive become more beautiful. We will contact you if your work is selected."
      );
    } catch {
      setStatus(
        zh
          ? "发送失败，请稍后再试，或写信至 editorial@feministarchivejournal.org。"
          : "Could not send. Please try again later, or email editorial@feministarchivejournal.org."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cover-submission-page">
      <header className="cover-submission-header">
        <button onClick={onBack}>← {zh ? "返回" : "Back"}</button>

        <div
          className="cover-submission-logo"
          onClick={() => setCurrentPage("magazine")}
        >
          Feminist Archive
          <span>{zh ? "封面照片投稿" : "cover image submissions"}</span>
        </div>

        <button onClick={() => setCurrentPage("contact-page")}>
          {zh ? "联系" : "Contact"}
        </button>
      </header>

      <main className="cover-submission-main">
        <section className="cover-submission-hero">
          <div className="cover-submission-copy">
            <h1>
              {zh
                ? "我们欢迎投稿封面照片！"
                : "We welcome cover image submissions!"}
            </h1>

            <p>
              {zh
                ? "由于版权问题和 Feminist Archive 的非盈利性质，Feminist Archive 的封面照片都是我们自己拍摄、绘画或电脑绘制的。"
                : "Because of copyright constraints and the non-profit nature of Feminist Archive, our cover images are photographed, drawn, or digitally made by us."}
            </p>

            <p>
              {zh
                ? "如果你想要支持 Feminist Archive 并让它更美，可以把你的作品传给我们！不用专业的摄影技术和设备，只要你认为适合我们网站，就欢迎投稿。我们会在选择后通知你，感谢你一起让这个公共空间继续生长。"
                : "If you would like to support Feminist Archive and make it more beautiful, you can send us your work. You do not need professional equipment or training; if you feel it belongs on the site, we would be glad to see it. We will contact you if it is selected."}
            </p>

          </div>
        </section>

        <section className="cover-submission-panel">
          <form onSubmit={handleSubmit}>
            <label className={preview ? "cover-upload-box has-preview" : "cover-upload-box"}>
              {preview ? (
                <img src={preview} alt="" />
              ) : (
                <span>
                  {zh
                    ? "点击上传封面图片"
                    : "Click to upload a cover image"}
                </span>
              )}
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </label>

            <div className="cover-submission-fields">
              <input
                name="email"
                type="email"
                required
                placeholder={zh ? "你的邮箱地址" : "Your email address"}
              />

              <input
                name="name"
                type="text"
                placeholder={zh ? "署名 / 名字（可选）" : "Name / credit (optional)"}
              />

              <textarea
                name="note"
                placeholder={
                  zh
                    ? "你可以简单写一下这张图、授权说明或希望如何署名。"
                    : "You may add a short note about the image, permission, or how you would like to be credited."
                }
              />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? zh
                    ? "发送中..."
                    : "Sending..."
                  : zh
                    ? "提交作品"
                    : "Submit image"}
              </button>

              {status && <p className="cover-submission-status">{status}</p>}
            </div>
          </form>
        </section>

        <section className="cover-submission-support">
          <div>
            <span>
              {zh ? "同样支持" : "Another way to help"}
            </span>
            <h2>
              {zh
                ? "同样，你也可以通过赞助的方式支持我们！"
                : "You can also support us through a donation."}
            </h2>
            <p>
              {zh
                ? "每一份赞助都会帮助 Feminist Archive 继续维护网站、整理档案、发布文章，并让这个公共空间保持开放。"
                : "Every contribution helps Feminist Archive maintain the site, preserve archives, publish writing, and keep this public space open."}
            </p>
          </div>

          <a
            href={
              zh
                ? "https://www.ifdian.net/a/FeministArchive"
                : "https://ko-fi.com/feministarchive"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {zh ? "前往爱发电支持" : "Support on Ko-fi"}
          </a>
        </section>
      </main>
    </div>
  );
}

export default CoverSubmissionPage;
