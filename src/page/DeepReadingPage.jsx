import { useEffect, useRef } from "react";

const NORMAL_MAP_SETTINGS = {
  introDuration: 4.7,
};

const TEXTURE_PATHS = {
  relief: "/assets/deep-reading-effect/relief.jpg",
  normal: "/assets/deep-reading-effect/normal.jpg",
  mask: "/assets/deep-reading-effect/mask.png",
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
      uniform sampler2D u_maskTexture;

      void main() {
        vec2 uv = v_uv;
        vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
        vec2 center = (uv - 0.5) * aspect;

        vec3 baseColor = texture2D(u_baseTexture, uv).rgb;
        vec3 normalSample = texture2D(u_normalTexture, uv).rgb;
        vec3 normal = normalize(normalSample * 2.0 - 1.0);
        normal.y *= -1.0;
        float maskValue = texture2D(u_maskTexture, uv).r;

        float direction = radians(135.0);
        vec3 lightDir = normalize(vec3(cos(direction) * 0.7, sin(direction) * 0.7, 1.5));
        vec2 pointer = u_pointer;
        float pointerDistance = length((uv - pointer) * aspect);
        float brush = 1.0 - smoothstep(0.085, 0.245, pointerDistance);
        vec3 pointerLight = normalize(vec3((pointer - uv) * aspect, 0.34));

        float diffuse = max(dot(normal, lightDir), 0.0);
        float cursorDiffuse = max(dot(normal, pointerLight), 0.0) * brush;
        vec3 viewDir = vec3(0.0, 0.0, 1.0);
        vec3 halfDir = normalize(lightDir + viewDir);
        float specular = pow(max(dot(normal, halfDir), 0.0), 46.0) * 1.1;
        float cursorSpec = pow(max(dot(normal, normalize(pointerLight + viewDir)), 0.0), 34.0) * brush * 1.35;

        float introSweep = smoothstep(-0.28, 1.0, u_intro - (1.0 - uv.y) * 0.8);
        float edge = smoothstep(0.0, 0.25, introSweep + maskValue * 0.8);
        float reveal = mix(0.19, 1.0, edge);
        float alpha = smoothstep(0.08, 0.96, introSweep + maskValue * 0.9);

        vec3 litBase = baseColor * (0.55 + diffuse * 0.42);
        vec3 color = litBase * (0.06 + reveal * 0.94);
        color += vec3(1.0) * (specular + cursorSpec) * 0.55;
        color += vec3(0.95, 0.98, 1.0) * cursorDiffuse * 0.32;
        color = mix(color, vec3(0.95, 0.95, 0.92), 0.08 * 0.85);
        color = pow(color, vec3(1.0 / 1.08));

        float vignette = smoothstep(1.2, 0.18, length(center));
        alpha *= mix(0.86, 1.0, vignette);
        gl_FragColor = vec4(color, alpha * 0.86);
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
    const maskTextureUniform = gl.getUniformLocation(program, "u_maskTexture");
    const pointer = { x: 0.62, y: 0.58 };
    const targetPointer = { x: 0.62, y: 0.58 };
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
      gl.uniform1i(maskTextureUniform, 2);
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
      targetPointer.x = 0.62;
      targetPointer.y = 0.58;
    };

    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("resize", resize);

    Promise.all([
      loadImage(TEXTURE_PATHS.relief),
      loadImage(TEXTURE_PATHS.normal),
      loadImage(TEXTURE_PATHS.mask),
    ])
      .then(([reliefImage, normalImage, maskImage]) => {
        if (disposed) return;

        const expectedSize = `${reliefImage.naturalWidth}×${reliefImage.naturalHeight}`;
        const normalSize = `${normalImage.naturalWidth}×${normalImage.naturalHeight}`;
        const maskSize = `${maskImage.naturalWidth}×${maskImage.naturalHeight}`;

        if (normalSize !== expectedSize || maskSize !== expectedSize) {
          console.warn(
            "Deep Reading texture size mismatch:",
            { relief: expectedSize, normal: normalSize, mask: maskSize }
          );
        }

        textures = [
          createTexture(reliefImage, 0),
          createTexture(normalImage, 1),
          createTexture(maskImage, 2),
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

function DeepReadingPage({ language, onBack, setCurrentPage }) {
  const zh = language === "zh";

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
        <DeepReadingNormalMap />

        <section className="deep-reading-hero">
          <div className="reading-room-kicker">
            {zh ? "DEEP READING / 深度阅读" : "DEEP READING"}
          </div>

          <h1>{zh ? "为已经进入理论深处的读者。" : "For readers already inside the work of theory."}</h1>

          <p>
            {zh
              ? "这个页面将为已经熟悉一些女性主义理论、并希望更深入探索思想的读者准备。"
              : "For readers who already have some familiarity with feminist theory and would like to explore ideas in greater depth."}
          </p>
        </section>

        <section className="deep-reading-note">
          <span>{zh ? "页面建设中" : "Page in preparation"}</span>
          <p>
            {zh
              ? "这里已经先建立为独立页面。具体栏目、阅读路径与文本结构会在下一步继续补充。"
              : "This section has been created as a standalone page. Its columns, reading paths, and text structure can be added next."}
          </p>
        </section>
      </main>
    </div>
  );
}

export default DeepReadingPage;
