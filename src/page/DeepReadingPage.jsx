import { useEffect, useRef } from "react";

const NORMAL_MAP_SETTINGS = {
  shrinkSpeed: 0.58,
  dissolveScale: 2,
  dissolveAmount: 0.7,
  swirlStrength: 0.05,
  swirlScale: 1.5,
  swirlSpeed: 1.35,
  grainAmount: 0.3,
  grainScale: 13.5,
  brushSize: 0.085,
  brushSoftness: 0.16,
  noiseScale: 8,
  noiseSpeed: 0.5,
  ambient: 0.06,
  revealAmbient: 0.19,
  direction: 135,
  intensity: 0.4,
  specular: 1.1,
  radius: 1.5,
  metallic: 0.85,
  sweepAmount: 0.8,
  cloudScale: 0.5,
  edgeSoftness: 0.25,
  introDuration: 4.7,
  topperOpacity: 0.85,
  topperContrast: 1,
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

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 5; i++) {
          value += amplitude * noise(p);
          p = mat2(1.62, 1.16, -1.16, 1.62) * p;
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 uv = v_uv;
        vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
        vec2 center = (uv - 0.5) * aspect;

        float angle = atan(center.y, center.x);
        float radius = length(center);
        float swirl = sin(angle * 1.5 + u_time * 1.35 + radius * 8.0) * 0.05;
        vec2 warped = uv + vec2(cos(angle), sin(angle)) * swirl * (1.0 - smoothstep(0.1, 1.5, radius));

        float cloud = fbm(warped * 8.0 + vec2(u_time * 0.05, -u_time * 0.04));
        float dissolve = fbm(warped * 2.0 + cloud * 0.5);
        float grain = noise(warped * 13.5 + u_time * 0.5);
        float height = cloud * 0.62 + dissolve * 0.24 + grain * 0.14;

        float eps = 0.0025;
        float hx = fbm((warped + vec2(eps, 0.0)) * 8.0);
        float hy = fbm((warped + vec2(0.0, eps)) * 8.0);
        vec3 normal = normalize(vec3((height - hx) * 5.5, (height - hy) * 5.5, 1.0));

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
        float edge = smoothstep(0.0, 0.25, introSweep);
        float reveal = mix(0.19, 1.0, edge);
        float alpha = smoothstep(0.26, 0.96, introSweep + dissolve * 0.7);

        vec3 base = vec3(0.72, 0.73, 0.72);
        vec3 shadow = vec3(0.18, 0.19, 0.18);
        vec3 silver = mix(shadow, base, 0.35 + diffuse * 0.4 + height * 0.3);
        vec3 color = silver * (0.06 + reveal * 0.78);
        color += vec3(1.0) * (specular + cursorSpec) * 0.85;
        color += vec3(0.8, 0.86, 0.88) * cursorDiffuse * 0.4;
        color = mix(color, vec3(0.95, 0.95, 0.92), 0.08 * 0.85);
        color = pow(color, vec3(1.0 / 1.08));

        float vignette = smoothstep(1.2, 0.18, length(center));
        alpha *= mix(0.72, 1.0, vignette);
        gl_FragColor = vec4(color, alpha * 0.86);
      }
    `;

    const compileShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
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
      return undefined;
    }

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
    const pointer = { x: 0.62, y: 0.58 };
    const targetPointer = { x: 0.62, y: 0.58 };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let start = performance.now();

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
    frame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frame);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", resize);
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

        <section className="deep-reading-placeholder">
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
