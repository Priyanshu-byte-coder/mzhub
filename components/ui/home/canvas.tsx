// ---------- Types & helpers ----------

interface OscOptions {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
}

interface LineOptions {
  spring?: number;
}

interface Position {
  x: number;
  y: number;
}

interface TrailConfig {
  debug: boolean;
  friction: number;
  trails: number;
  size: number;
  dampening: number;
  tension: number;
}

// Extend the canvas context with custom props we use
interface TrailContext extends CanvasRenderingContext2D {
  running: boolean;
  frame: number;
}

// ---------- Oscillator (was function n) ----------

function Oscillator(this: any, opts?: OscOptions) {
  this.init(opts || {});
}

Oscillator.prototype = {
  init: function (opts: OscOptions) {
    this.phase = opts.phase ?? 0;
    this.offset = opts.offset ?? 0;
    this.frequency = opts.frequency ?? 0.001;
    this.amplitude = opts.amplitude ?? 1;
    this._value = 0;
  },
  update: function () {
    this.phase += this.frequency;
    this._value = this.offset + Math.sin(this.phase) * this.amplitude;
    return this._value;
  },
  value: function () {
    return this._value;
  },
};

// ---------- Node & Line ----------

function Node(this: any) {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
}

function Line(this: any, opts?: LineOptions) {
  this.init(opts || {});
}

Line.prototype = {
  init: function (opts: LineOptions) {
    // default spring value if not provided
    const baseSpring = opts.spring ?? 0.45;

    this.spring = baseSpring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];

    for (let i = 0; i < E.size; i++) {
      const node = new (Node as any)();
      node.x = pos.x;
      node.y = pos.y;
      this.nodes.push(node);
    }
  },
  update: function () {
    let spring = this.spring;
    let node = this.nodes[0];

    node.vx += (pos.x - node.x) * spring;
    node.vy += (pos.y - node.y) * spring;

    for (let i = 0, len = this.nodes.length; i < len; i++) {
      node = this.nodes[i];

      if (i > 0) {
        const prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * E.dampening;
        node.vy += prev.vy * E.dampening;
      }

      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;

      spring *= E.tension;
    }
  },
  draw: function () {
    if (!ctx) return;

    let node = this.nodes[0];
    let x = node.x;
    let y = node.y;

    ctx.beginPath();
    ctx.moveTo(x, y);

    let i = 1;
    const last = this.nodes.length - 2;

    for (; i < last; i++) {
      const curr = this.nodes[i];
      const next = this.nodes[i + 1];

      x = 0.5 * (curr.x + next.x);
      y = 0.5 * (curr.y + next.y);

      ctx.quadraticCurveTo(curr.x, curr.y, x, y);
    }

    const curr = this.nodes[i];
    const next = this.nodes[i + 1];

    ctx.quadraticCurveTo(curr.x, curr.y, next.x, next.y);
    ctx.stroke();
    ctx.closePath();
  },
};

// ---------- Globals ----------

let ctx: TrailContext | null = null;
let osc: any; // instance of Oscillator
const pos: Position = { x: 0, y: 0 };
let lines: any[] = [];

const E: TrailConfig = {
  debug: true,
  friction: 0.5,
  trails: 80,
  size: 50,
  dampening: 0.025,
  tension: 0.99,
};

// ---------- Event handlers ----------

function onMousemove(e: MouseEvent | TouchEvent) {
  function createLines() {
    lines = [];
    for (let i = 0; i < E.trails; i++) {
      lines.push(
        new (Line as any)({
          spring: 0.45 + (i / E.trails) * 0.025,
        }),
      );
    }
  }

  function handleMove(ev: MouseEvent | TouchEvent) {
    if (ev instanceof MouseEvent) {
      pos.x = ev.clientX;
      pos.y = ev.clientY;
    } else if (ev.touches.length === 1) {
      pos.x = ev.touches[0].pageX;
      pos.y = ev.touches[0].pageY;
    }
    // Don't prevent default to allow scrolling
  }

  function handleTouchStart(ev: TouchEvent) {
    if (ev.touches.length === 1) {
      pos.x = ev.touches[0].pageX;
      pos.y = ev.touches[0].pageY;
    }
  }

  document.removeEventListener("mousemove", onMousemove);
  document.removeEventListener("touchstart", onMousemove);
  
  document.addEventListener("mousemove", handleMove);
  document.addEventListener("touchmove", handleMove, { passive: true });
  document.addEventListener("touchstart", handleTouchStart, { passive: true });
  
  handleMove(e);
  createLines();
  render();
}

// ---------- Render loop & resize ----------

function render() {
  if (!ctx || !ctx.running) return;

  ctx.globalCompositeOperation = "source-over";
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.globalCompositeOperation = "lighter";
  ctx.strokeStyle = `hsla(${Math.round(osc.update())},100%,50%,0.025)`;
  ctx.lineWidth = 10;

  // Only render if lines array is initialized and has elements
  if (lines.length > 0) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line && typeof line.update === 'function') {
        line.update();
        line.draw();
      }
    }
  }

  ctx.frame++;
  window.requestAnimationFrame(render);
}

function resizeCanvas() {
  if (!ctx) return;
  const canvas = ctx.canvas;
  const parent = canvas.parentElement;
  const width = parent?.clientWidth ?? window.innerWidth;
  const height = parent?.clientHeight ?? window.innerHeight;

  canvas.width = width;
  canvas.height = height;
  canvas.style.width = "100%";
  canvas.style.height = "100%";
}

// ---------- Public entry ----------

export const renderCanvas = (): void => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
  if (!canvas) return;

  const context = canvas.getContext("2d") as TrailContext | null;
  if (!context) return;

  ctx = context;
  ctx.running = true;
  ctx.frame = 1;

  osc = new (Oscillator as any)({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });

  document.addEventListener("mousemove", onMousemove);
  document.addEventListener("touchstart", onMousemove);
  
  document.body.addEventListener("orientationchange", resizeCanvas);
  window.addEventListener("resize", resizeCanvas);

  window.addEventListener("focus", () => {
    if (ctx && !ctx.running) {
      ctx.running = true;
      render();
    }
  });

  window.addEventListener("blur", () => {
    if (ctx) ctx.running = false;
  });

  resizeCanvas();
};