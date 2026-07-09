import { useEffect, useMemo, useRef } from "react";
import { articles as englishArticles } from "../data/articles-en";

const NORMAL_MAP_SETTINGS = {
  ambient: 0.06,
  revealAmbient: 0.19,
  direction: 135,
  intensity: 0.4,
  specular: 1.1,
  metallic: 0.85,
  brushSize: 0.085,
  brushSoftness: 0.16,
  sweepAmount: 0.8,
  edgeSoftness: 0.25,
  introDuration: 4.7,
  topperOpacity: 0.85,
  topperContrast: 1,
};

const TEXTURE_PATHS = {
  relief: "/assets/deep-reading-effect/relief.png",
  normal: "/assets/deep-reading-effect/normal.png",
  topper: "/assets/deep-reading-effect/topper.jpg",
  revealMask: "/assets/deep-reading-effect/reveal-mask.png",
};

function DeepReadingNormalMap() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", {
      alpha: true,
      antialias: true,
      depth: false,
      powerPreference: "high-performance",
      premultipliedAlpha: false,
    });

    if (!gl) return undefined;

    const vertexSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;

      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentSource = `
      precision highp float;

      varying vec2 v_uv;
      uniform vec2 u_resolution;
      uniform vec2 u_pointer;
      uniform float u_time;
      uniform float u_intro;
      uniform sampler2D u_baseTexture;
      uniform sampler2D u_normalTexture;
      uniform sampler2D u_topperTexture;
      uniform sampler2D u_revealMaskTexture;

      void main() {
        vec2 uv = vec2(v_uv.x, 1.0 - v_uv.y);
        vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
        vec2 center = (uv - 0.5) * aspect;

        vec3 baseColor = texture2D(u_baseTexture, uv).rgb;
        vec3 topperColor = texture2D(u_topperTexture, uv).rgb;
        vec3 normalSample = texture2D(u_normalTexture, uv).rgb;
        vec3 normal = normalize(normalSample * 2.0 - 1.0);
        normal.y *= -1.0;
        float revealMask = texture2D(u_revealMaskTexture, uv).r;

        float direction = radians(135.0);
        vec3 lightDir = normalize(vec3(cos(direction) * 0.7, sin(direction) * 0.7, 1.5));
        vec2 pointer = u_pointer;
        vec2 pointerDelta = (uv - pointer) * aspect;
        vec2 scatterAxis = normalize(vec2(0.92, 0.28));
        vec2 scatterCross = vec2(-scatterAxis.y, scatterAxis.x);
        float coreBrush = 1.0 - smoothstep(0.035, 0.18, length(pointerDelta * vec2(0.72, 1.28)));
        float softBrush = 1.0 - smoothstep(0.08, 0.44, length(pointerDelta * vec2(0.58, 1.08)));
        float diagonalScatter = 1.0 - smoothstep(
          0.0,
          0.42,
          abs(dot(pointerDelta, scatterAxis)) + abs(dot(pointerDelta, scatterCross)) * 1.85
        );

        float diffuse = max(dot(normal, lightDir), 0.0);
        vec3 viewDir = vec3(0.0, 0.0, 1.0);
        vec3 halfDir = normalize(lightDir + viewDir);
        float specular = pow(max(dot(normal, halfDir), 0.0), 58.0) * 1.1;

        float introSweep = smoothstep(-0.28, 1.0, u_intro - (1.0 - uv.y) * 0.8);
        float maskReveal = smoothstep(0.0, 0.25, introSweep + revealMask * 0.8);
        float baseReveal = mix(0.19, 1.0, maskReveal);
        float revealEdge = smoothstep(0.66, 0.91, introSweep + revealMask * 0.8)
          - smoothstep(0.91, 1.08, introSweep + revealMask * 0.8);

        vec3 contrastedTopper = clamp((topperColor - 0.5) * 1.0 + 0.5, 0.0, 1.0);
        vec3 materialColor = mix(baseColor, contrastedTopper, 0.09 * 0.85);
        vec3 silverTint = vec3(0.88, 0.88, 0.86);
        materialColor = mix(materialColor, silverTint, 0.06 * 0.85);

        float light = baseReveal * (0.86 + diffuse * 0.18);
        vec3 color = materialColor * light;
        color += vec3(1.0) * specular * 0.12;
        color += vec3(1.0) * revealEdge * 0.08;

        float maskWhite = smoothstep(0.52, 0.82, revealMask);
        float textureBreak = smoothstep(
          0.16,
          0.9,
          length(normal.xy) * 0.9 + dot(baseColor, vec3(0.299, 0.587, 0.114)) * 0.14
        );
        float brush = clamp(
          max(coreBrush * 0.78, max(softBrush * 0.38, diagonalScatter * 0.48)) *
          (0.72 + textureBreak * 0.28),
          0.0,
          1.0
        );
        float raisedDetail = clamp(length(normal.xy) * 1.5 + diffuse * 0.42, 0.0, 1.0);
        float raisedGold = smoothstep(0.24, 0.78, raisedDetail);
        float goldMix = brush * maskWhite * raisedGold;
        vec3 goldShadow = vec3(0.62, 0.50, 0.30);
        vec3 goldMid = vec3(0.92, 0.78, 0.48);
        vec3 goldLight = vec3(1.0, 0.9, 0.62);
        vec3 goldColor = mix(goldShadow, goldMid, 0.46 + diffuse * 0.38);
        goldColor = mix(goldColor, goldLight, raisedGold * 0.22 + specular * 0.2);
        goldColor += vec3(1.0, 0.88, 0.56) * specular * 0.14;
        color = mix(color, goldColor, goldMix);
        color = pow(color, vec3(1.0 / 1.02));

        float vignette = smoothstep(1.24, 0.22, length(center));
        float frameFade = smoothstep(0.0, 0.04, uv.x) * smoothstep(0.0, 0.04, uv.y)
          * smoothstep(0.0, 0.04, 1.0 - uv.x) * smoothstep(0.0, 0.04, 1.0 - uv.y);
        float alpha = mix(0.82, 1.0, vignette) * frameFade;
        gl_FragColor = vec4(color, alpha);
      }
    `;

    const compileShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Deep Reading WebGL shader error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSource);

    if (!vertexShader || !fragmentShader) return undefined;

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Deep Reading WebGL program error:", gl.getProgramInfoLog(program));
      return undefined;
    }

    const loadImage = (src) =>
      new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error(`Deep Reading texture failed to load: ${src}`));
        image.src = src;
      });

    const createTexture = (image, unit) => {
      const texture = gl.createTexture();
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        image
      );
      return texture;
    };

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const position = gl.getAttribLocation(program, "a_position");
    const resolution = gl.getUniformLocation(program, "u_resolution");
    const pointerUniform = gl.getUniformLocation(program, "u_pointer");
    const timeUniform = gl.getUniformLocation(program, "u_time");
    const introUniform = gl.getUniformLocation(program, "u_intro");
    const baseTextureUniform = gl.getUniformLocation(program, "u_baseTexture");
    const normalTextureUniform = gl.getUniformLocation(program, "u_normalTexture");
    const topperTextureUniform = gl.getUniformLocation(program, "u_topperTexture");
    const revealMaskTextureUniform = gl.getUniformLocation(program, "u_revealMaskTexture");
    const pointer = { x: -1.0, y: -1.0 };
    const targetPointer = { x: -1.0, y: -1.0 };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let start = performance.now();
    let disposed = false;
    let textures = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const width = Math.max(1, Math.floor(rect.width * dpr));
      const height = Math.max(1, Math.floor(rect.height * dpr));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    const render = (now) => {
      resize();
      pointer.x += (targetPointer.x - pointer.x) * 0.08;
      pointer.y += (targetPointer.y - pointer.y) * 0.08;

      const elapsed = (now - start) / 1000;
      const intro = Math.min(1.25, elapsed / NORMAL_MAP_SETTINGS.introDuration);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.enableVertexAttribArray(position);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform2f(pointerUniform, pointer.x, pointer.y);
      gl.uniform1f(timeUniform, reduceMotion ? 1.6 : elapsed);
      gl.uniform1f(introUniform, reduceMotion ? 1.25 : intro);
      gl.uniform1i(baseTextureUniform, 0);
      gl.uniform1i(normalTextureUniform, 1);
      gl.uniform1i(topperTextureUniform, 2);
      gl.uniform1i(revealMaskTextureUniform, 3);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      if (!reduceMotion) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const handlePointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      targetPointer.x = (event.clientX - rect.left) / rect.width;
      targetPointer.y = 1 - (event.clientY - rect.top) / rect.height;
    };

    const handlePointerLeave = () => {
      targetPointer.x = -1.0;
      targetPointer.y = -1.0;
    };

    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("resize", resize);

    Promise.all([
      loadImage(TEXTURE_PATHS.relief),
      loadImage(TEXTURE_PATHS.normal),
      loadImage(TEXTURE_PATHS.topper),
      loadImage(TEXTURE_PATHS.revealMask),
    ])
      .then(([reliefImage, normalImage, topperImage, revealMaskImage]) => {
        if (disposed) return;

        const expectedSize = `${reliefImage.naturalWidth}×${reliefImage.naturalHeight}`;
        const normalSize = `${normalImage.naturalWidth}×${normalImage.naturalHeight}`;
        const revealMaskSize = `${revealMaskImage.naturalWidth}×${revealMaskImage.naturalHeight}`;

        if (normalSize !== expectedSize || revealMaskSize !== expectedSize) {
          console.warn(
            "Deep Reading texture size mismatch:",
            {
              relief: expectedSize,
              normal: normalSize,
              topper: `${topperImage.naturalWidth}×${topperImage.naturalHeight}`,
              revealMask: revealMaskSize,
            }
          );
        }

        textures = [
          createTexture(reliefImage, 0),
          createTexture(normalImage, 1),
          createTexture(topperImage, 2),
          createTexture(revealMaskImage, 3),
        ];
        start = performance.now();
        frame = window.requestAnimationFrame(render);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", resize);
      textures.forEach((texture) => gl.deleteTexture(texture));
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return (
    <div className="deep-reading-normal-map" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}

const DEEP_READING_ARTICLE_IDS = [
  "how-origins-are-made",
  "sexual-liberationism-erotic-nihilism",
  "pansexualism-freudian-psychoanalysis",
];

function DeepReadingPage({ language, onBack, setCurrentPage, onOpenArticle }) {
  const zh = language === "zh";
  const featuredArticles = useMemo(
    () =>
      DEEP_READING_ARTICLE_IDS
        .map((id) => englishArticles.find((article) => article.id === id))
        .filter(Boolean),
    []
  );

  const openArticle = (article, event) => {
    if (!onOpenArticle) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    onOpenArticle(article);
  };

  return (
    <div className="deep-reading-page">
      <header className="reading-room-header deep-reading-header">
        <button onClick={onBack}>← {zh ? "返回" : "Back"}</button>

        <div className="reading-room-logo" onClick={() => setCurrentPage("main")}>
          Feminist Archive
          <span>{zh ? "深度阅读" : "deep reading"}</span>
        </div>

        <button onClick={() => setCurrentPage("magazine")}>
          {zh ? "杂志" : "Magazine"}
        </button>
      </header>

      <main className="deep-reading-main">
        <section className="deep-reading-hero-panel" aria-labelledby="deep-reading-title">
          <div className="deep-reading-title-stack">
            <div className="reading-room-kicker">
              {zh ? "DEEP READING / 深度阅读" : "DEEP READING"}
            </div>

            <h1 id="deep-reading-title">Deep Reading</h1>
          </div>

          <div className="deep-reading-hero-copy">
            <p className="deep-reading-lede">
              For readers who already have some familiarity with feminist theory and would
              like to explore ideas in greater depth.
            </p>

            <p>
              At Feminist Archive, we believe feminist thought should remain open to
              everyone who wishes to engage with it. Alongside our Deep Reading essays, we
              also publish reading guides, introductions, and accessible articles designed
              for new readers and those beginning their journey.
            </p>

            <button
              className="deep-reading-guides-link"
              onClick={() => setCurrentPage("reading-room")}
            >
              Explore our Reading Guides →
            </button>
          </div>
        </section>

        <section className="deep-reading-relief-stage" aria-label="Deep Reading relief artwork">
          <DeepReadingNormalMap />
        </section>

        <section className="deep-reading-articles" aria-labelledby="deep-reading-articles-title">
          <div className="deep-reading-section-top">
            <span>{zh ? "已上线文章" : "Now Reading"}</span>
            <h2 id="deep-reading-articles-title">
              {zh ? "进入深层理论结构的文章。" : "Three routes into difficult structures."}
            </h2>
          </div>

          <div className="deep-reading-card-grid">
            {featuredArticles.map((article, index) => (
              <a
                className="deep-reading-article-card"
                href={`/en/articles/${article.id}`}
                key={article.id}
                onClick={(event) => openArticle(article, event)}
                style={{ "--card-index": index }}
              >
                <div className="deep-reading-article-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div
                  className="deep-reading-card-image"
                  style={{ backgroundImage: `url(${article.image})` }}
                />

                <div className="deep-reading-card-body">
                  <span>{article.category}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <small>
                    {article.date}
                    {article.readTime ? ` · ${article.readTime}` : ""}
                  </small>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default DeepReadingPage;
