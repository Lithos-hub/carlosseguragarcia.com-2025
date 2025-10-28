<template>
  <div class="BootOnboarding screen" @click="skip">
    <div class="terminal">
      <div class="header">
        <span class="dot red" />
        <span class="dot yellow" />
        <span class="dot green" />
        <span class="title">CYBER-OS // BOOT CONSOLE</span>
      </div>
      <div class="viewport" ref="viewportRef">
        <pre class="lines">
{{ renderedLines }}<span class="cursor" v-if="!done">█</span>
        </pre>
      </div>
      <div class="progress">
        <div class="bar" :style="{ width: percent + '%' }"></div>
        <div class="label">
          <span>{{ percent }}%</span>
          <span class="status">{{ status }}</span>
        </div>
      </div>
    </div>
    <button class="skip" @click.stop="skip">SALTAR ▷</button>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

type BootStep =
  | { type: "typed"; text: string; ms: number }
  | { type: "log"; text: string; ms: number }
  | { type: "progress"; label: string; from: number; to: number; ms: number };

const viewportRef = ref<HTMLElement | null>(null);
const lines = ref<string[]>([]);
const typingLine = ref<string>("");
const percent = ref<number>(0);
const status = ref<string>("BOOTING");
const done = ref<boolean>(false);
let cancelled = false;

const renderedLines = computed(() =>
  [...lines.value, typingLine.value].join("\n"),
);

const bootSteps: BootStep[] = [
  // Inicio del sistema
  { type: "typed", text: "[BOOT SEQUENCE INITIATED]", ms: 300 },
  { type: "log", text: "Verifying core BIOS firmware... [OK]", ms: 150 },
  {
    type: "log",
    text: "Initializing Neurolink Interface v4.7.21... [SUCCESS]",
    ms: 200,
  },
  { type: "log", text: "Decoding Neural Grid Patterns... [COMPLETE]", ms: 180 },
  { type: "log", text: "Loading Quantum Buffer Modules... [LOADED]", ms: 160 },
  {
    type: "log",
    text: "Establishing Synthex Protocol v2.3.9... [LINKED]",
    ms: 220,
  },
  { type: "log", text: "CyberDeck Firmware Checksum: [VALID]", ms: 140 },

  // Progreso inicial
  {
    type: "progress",
    label: "Core System Initialization",
    from: 0,
    to: 15,
    ms: 800,
  },

  // Acceso a memoria
  {
    type: "typed",
    text: "Accessing Memory Grid: Sector 045x-Delta...",
    ms: 400,
  },
  { type: "log", text: "[ONLINE]", ms: 100 },
  { type: "typed", text: "Authenticating User ID: ∞-01-AE...", ms: 350 },
  { type: "log", text: "[AUTHORIZED]", ms: 120 },

  // Escaneo del sistema
  { type: "typed", text: "SYSTEM SCAN INITIATED", ms: 300 },
  { type: "log", text: ">> BioFirewall Integrity... [SECURE]", ms: 150 },
  { type: "log", text: ">> Nanite Injection Channels... [STABLE]", ms: 160 },
  { type: "log", text: ">> Data Spike Resistance... [OPTIMAL]", ms: 140 },
  {
    type: "log",
    text: ">> Quantum Key Encryption (QKE) Status... [ACTIVE]",
    ms: 180,
  },

  // Progreso de escaneo
  {
    type: "progress",
    label: "System Security Scan",
    from: 15,
    to: 30,
    ms: 1000,
  },

  // Nodos de memoria
  { type: "typed", text: "Scanning Memory Nodes...", ms: 300 },
  { type: "log", text: ">> Node-01: [UNSTABLE - RECOVERING]", ms: 200 },
  { type: "log", text: ">> Node-02: [STABLE]", ms: 100 },
  { type: "log", text: ">> Node-03: [STABLE]", ms: 100 },
  { type: "log", text: ">> Node-04: [OFFLINE - REBOOTING]", ms: 150 },

  // Interfaces
  {
    type: "log",
    text: "Loading Retinal Overlay Interface... [ACTIVE]",
    ms: 180,
  },
  { type: "log", text: "Syncing Optical Implants... [SYNCHRONIZED]", ms: 160 },
  {
    type: "log",
    text: "Initializing Neural Uplink Control... [CONNECTED]",
    ms: 200,
  },
  { type: "log", text: "Spooling Data Threads... [100% SYNCHED]", ms: 180 },

  // Unidades de almacenamiento
  { type: "typed", text: "System Drives Detected:", ms: 250 },
  {
    type: "log",
    text: ">> DRIVE-01 [QUANTUM CORE STORAGE] [142.8 TB FREE]",
    ms: 200,
  },
  { type: "log", text: ">> DRIVE-02 [EXO-MEMORY ARRAY] [97% FULL]", ms: 180 },
  {
    type: "log",
    text: ">> DRIVE-03 [BLACK VAULT DATA LOCKER] [ENCRYPTED]",
    ms: 220,
  },

  // Progreso AI
  {
    type: "progress",
    label: "AI Companion Initialization",
    from: 45,
    to: 60,
    ms: 1400,
  },

  // Conexiones de red
  {
    type: "typed",
    text: "Establishing Secure Uplink with GridNet...",
    ms: 350,
  },
  { type: "log", text: "[CONNECTED]", ms: 120 },
  { type: "log", text: "Running Digital Cloak Protocol... [ENGAGED]", ms: 180 },

  // Subsistemas críticos
  { type: "typed", text: "Critical Subsystems Status:", ms: 250 },
  { type: "log", text: ">> ElectroPulse Deflectors... [ARMED]", ms: 150 },
  { type: "log", text: ">> Signal Nullification Grid... [ONLINE]", ms: 160 },
  { type: "log", text: ">> Cortex Drive - Synaptic Link... [STABLE]", ms: 180 },

  // Progreso subsistemas
  {
    type: "progress",
    label: "Critical Subsystems",
    from: 60,
    to: 75,
    ms: 1000,
  },

  // Paquetes de datos
  { type: "typed", text: "Retrieving Encrypted Data Packets...", ms: 300 },
  { type: "log", text: ">> Packet ID: #X89021 [DECRYPTED]", ms: 180 },
  { type: "log", text: ">> Packet ID: #F98471 [QUARANTINED]", ms: 160 },
  { type: "log", text: ">> Packet ID: #X22B90 [LOADED]", ms: 140 },

  // Interfaces neurales
  {
    type: "log",
    text: "Activating NeuroCommand Interface... [BOOTING]",
    ms: 200,
  },
  {
    type: "log",
    text: "Injecting Synaptic Signal Tracers... [MAPPED]",
    ms: 180,
  },
  {
    type: "log",
    text: "Spooling Memory Core Routines... [OPTIMIZED]",
    ms: 160,
  },

  // Estado de energía
  { type: "typed", text: "Checking Power Grid Stability...", ms: 300 },
  { type: "log", text: ">> Power Cell 01 [95% - OPERATIONAL]", ms: 150 },
  { type: "log", text: ">> Power Cell 02 [90% - OPERATIONAL]", ms: 150 },
  { type: "log", text: ">> Power Cell 03 [DISCONNECTED - OFFLINE]", ms: 180 },

  // Progreso final
  { type: "progress", label: "Final System Check", from: 75, to: 90, ms: 1200 },

  // Módulos finales
  {
    type: "log",
    text: "Loading Visual Augmentation Module... [ONLINE]",
    ms: 180,
  },
  {
    type: "log",
    text: "Initializing HoloDeck Environment... [SUCCESS]",
    ms: 200,
  },
  { type: "log", text: "DataSync Beacon Protocol... [LOCKED IN]", ms: 160 },
  { type: "log", text: "Uplink Node Status: [GREEN ZONE]", ms: 140 },

  // Macro de inicio
  { type: "typed", text: "EXECUTING STARTUP MACRO [LOKI-23-INIT]", ms: 350 },
  {
    type: "log",
    text: "Overclocking CyberNeural Pathways... [ENHANCED MODE ACTIVATED]",
    ms: 220,
  },
  { type: "log", text: "Virtual Cortex Defense Shield... [STANDBY]", ms: 180 },

  // Progreso final
  {
    type: "progress",
    label: "System Boot Complete",
    from: 90,
    to: 100,
    ms: 800,
  },

  // Finalización
  { type: "typed", text: "SYSTEM BOOT COMPLETE. WELCOME, USER.", ms: 400 },
  { type: "log", text: "[OK] All systems operational", ms: 200 },
  { type: "log", text: "[OK] Neural interfaces synchronized", ms: 180 },
  { type: "log", text: "[OK] Security protocols active", ms: 160 },
  { type: "log", text: "[OK] Ready for user interaction", ms: 200 },
];

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

async function runTyped(text: string, ms: number) {
  const delay = Math.max(1, Math.floor(ms / Math.max(1, text.length)));
  typingLine.value = "";
  for (let i = 0; i < text.length && !cancelled; i++) {
    typingLine.value += text[i];
    autoScroll();
    await sleep(delay);
  }
  lines.value.push(typingLine.value);
  typingLine.value = "";
}

async function runLog(text: string, ms: number) {
  lines.value.push(text);
  typingLine.value = "";
  autoScroll();
  await sleep(ms);
}

async function runProgress(
  label: string,
  from: number,
  to: number,
  ms: number,
) {
  const steps = Math.max(1, Math.floor(ms / 30));
  for (let i = 0; i <= steps && !cancelled; i++) {
    const t = i / steps;
    const value = Math.round(from + (to - from) * t);
    percent.value = value;
    status.value = label;
    if (i % 4 === 0) {
      setProgressLine(label, value);
    }
    await sleep(ms / steps);
  }
  commitProgressLine(label, to);
}

function setProgressLine(label: string, value: number) {
  const line = `${label} ... ${value}%`;
  if (
    lines.value.length === 0 ||
    !lines.value[lines.value.length - 1].startsWith(label)
  ) {
    lines.value.push(line);
  } else {
    lines.value[lines.value.length - 1] = line;
  }
  autoScroll();
}

function commitProgressLine(label: string, value: number) {
  const line = `${label} ... ${value}%`;
  if (
    lines.value.length === 0 ||
    !lines.value[lines.value.length - 1].startsWith(label)
  ) {
    lines.value.push(line);
  } else {
    lines.value[lines.value.length - 1] = line;
  }
}

function autoScroll() {
  if (!viewportRef.value) return;
  requestAnimationFrame(() => {
    if (!viewportRef.value) return;
    viewportRef.value.scrollTop = viewportRef.value.scrollHeight;
  });
}

function getTotalDurationMs() {
  return bootSteps.reduce((acc, step) => acc + (step as any).ms, 0);
}

async function runSequence() {
  const targetTotalMs = 10000; // ~10s
  const baseTotalMs = getTotalDurationMs();
  const scale = baseTotalMs > 0 ? targetTotalMs / baseTotalMs : 1;
  const speedFactor = 0.75; // reduce tiempos a 75%

  for (const step of bootSteps) {
    if (cancelled) break;
    const scaledMs = Math.max(1, Math.round(step.ms * speedFactor * scale));
    if (step.type === "typed") await runTyped(step.text, scaledMs);
    if (step.type === "log") await runLog(step.text, scaledMs);
    if (step.type === "progress")
      await runProgress(step.label, step.from, step.to, scaledMs);
  }
  status.value = "READY";
  done.value = true;
}

function skip() {
  if (done.value) return;
  cancelled = true;
  percent.value = 100;
  status.value = "READY";
  typingLine.value = "";
  lines.value.push("[OK] System ready");
  done.value = true;
}

function onKey(e: KeyboardEvent) {
  if (e.key.toLowerCase() === "escape" || e.key.toLowerCase() === "enter") {
    skip();
  }
}

onMounted(() => {
  window.addEventListener("keydown", onKey);
  runSequence();
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKey);
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables.scss" as *;

.BootOnboarding {
  @apply relative flex h-screen w-screen items-center justify-center bg-black text-left text-primary;

  &.screen::before {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      transparent 0 2px,
      rgba(0, 255, 120, 0.06) 2px 4px
    );
    mix-blend-mode: overlay;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.35) 70%
    );
    pointer-events: none;
  }
}

.terminal {
  @apply relative h-screen w-screen border border-secondary bg-black/50 backdrop-blur;
}

.header {
  @apply flex items-center gap-2 border-b border-secondary/40 px-3 py-2 text-xs uppercase tracking-wider text-secondary;
  background: linear-gradient(90deg, rgba(0, 255, 153, 0.08), transparent);
  .dot {
    @apply inline-block h-2 w-2 rounded-full opacity-70;
  }
  .red {
    background: #ff5f56;
  }
  .yellow {
    background: #ffbd2e;
  }
  .green {
    background: #27c93f;
  }
  .title {
    @apply ml-2 text-primary;
    filter: drop-shadow(0 0 2px rgba(0, 255, 153, 0.3));
    position: relative;
  }
  .title::after {
    content: "CYBER-OS // BOOT CONSOLE";
    position: absolute;
    left: 0;
    top: 0;
    color: rgba(0, 255, 153, 0.4);
    transform: translate(1px, 0);
    mix-blend-mode: screen;
    animation: glitchShift 2.2s infinite steps(12);
    pointer-events: none;
  }
}

.viewport {
  @apply h-[50vh] w-full overflow-auto p-4 lg:h-[60vh];
  font-size: 13px;
  line-height: 1.35;
}

.lines {
  white-space: pre-wrap;
}

.cursor {
  animation: cursorBlink 1s steps(2, start) infinite;
}

@keyframes cursorBlink {
  50% {
    opacity: 0;
  }
}

@keyframes glitchShift {
  0% {
    clip-path: inset(0 0 80% 0);
  }
  10% {
    clip-path: inset(10% 0 60% 0);
    transform: translate(-1px, 0);
  }
  20% {
    clip-path: inset(40% 0 30% 0);
    transform: translate(1px, 0);
  }
  30% {
    clip-path: inset(20% 0 50% 0);
    transform: translate(-1px, 0);
  }
  40% {
    clip-path: inset(60% 0 10% 0);
    transform: translate(1px, 0);
  }
  50% {
    clip-path: inset(0 0 80% 0);
    transform: translate(0, 0);
  }
  100% {
    clip-path: inset(0 0 80% 0);
  }
}

.progress {
  @apply relative flex items-center gap-3 border-t border-secondary/40 px-4 py-3 text-secondary/80;
  .bar {
    @apply h-1 w-full rounded bg-secondary/20;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: v-bind(percent + "%");
      background: linear-gradient(90deg, #00ffa3, #00e6ff);
      box-shadow: 0 0 10px rgba(0, 255, 153, 0.6);
    }
  }
  .label {
    @apply flex w-40 items-center justify-between text-xs;
  }
}

.skip {
  @apply fixed bottom-10 left-1/2 -translate-x-1/2 rounded border border-secondary/30 bg-black/60 px-3 py-1 text-xs text-secondary hover:bg-secondary/10;
}
</style>
