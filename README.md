# Andrii Vynohradov

**Systems Architect & Lead Backend Engineer**  
Victoria, BC, Canada • [vynohradov.ca](https://vynohradov.ca) • [LinkedIn](https://linkedin.com/in/resonaura) • [Email](mailto:andrii.vynohradov@gmail.com) • [Credentials](https://certificates.vynohradov.ca)

I build low-latency real-time systems in C++, distributed backend architectures, and production AI agent runtimes. My background spans real-time digital signal processing, lock-free concurrency, high-throughput video streaming, and hardware automation protocols.

---

## Featured Systems & Engineering Work

### ResoStage
*Real-Time Live Performance DAW & Stage Lighting Sequencer (Private Codebase)*  
**Stack**: C++20, JUCE 9, Lock-Free Concurrency, Electron, React 19, Three.js, WebSockets, DMX-512, Art-Net, sACN

A live performance workstation designed for zero-dropout multitrack playback synchronized with automated lighting rigs.

- **Audio Engine**: Operates under a strict zero-heap-allocation policy in the audio callback. Utilizes precomputed 64-point Kaiser-windowed Sinc interpolation for pitch shifting and sample-accurate clock sync across 32+ tracks.
- **Lock-Free Concurrency**: Audio threads communicate with background workers through single-producer single-consumer (SPSC) ring buffers and atomic state flags, eliminating priority inversions and audio dropouts during disk read stalls.
- **Process Supervisor (Kaishaku)**: A native daemon monitors application processes over local IPC heartbeat channels. If the Electron UI crashes during a live show, the audio engine continues running uninterrupted while the supervisor relaunches the interface within 300 milliseconds.
- **Stage Lighting Engine**: Generates 60 Hz fixture control packets across DMX-512, Art-Net, and sACN (ANSI E1.31) over UDP, alongside a custom binary protocol driving networked ESP32 microcontrollers.
- **3D Visualizer**: Real-time WebGL stage visualizer in Three.js rendering moving heads, trusses, and beam geometry at 60 FPS.

### Indago AI Platform & Multi-Agent Runtime
*Lead AI Platform Engineer & Systems Architect (IndagoDev)*  
**Stack**: Node.js, NestJS, Python (FastAPI), vLLM, Ollama, LangGraph, Redis, PostgreSQL, MinIO, Docker

Architected the distributed infrastructure for multi-step autonomous agent execution and local model inference.

- Decomposed a legacy monolithic backend into event-driven NestJS microservices, supporting 1,000+ parallel AI agents while cutting p95 gateway latency from 450ms to 315ms under heavy load.
- Built a production Hybrid RAG pipeline combining pgvector similarity search with structured metadata pre-filtering, reducing token overhead by ~40%.
- Deployed a distributed bare-metal MinIO S3 storage cluster on Linux servers, eliminating 70% of cloud data storage and egress expenses.
- Implemented real-time WebSocket telemetry streaming with sub-100ms client updates for active user sessions.
- Provisioned sandboxed container execution environments with automated health checks and self-healing worker pools.

### Scrypted Tuya & Edge Video Systems
*High-Throughput Camera Bridge & Video Relays*  
**Stack**: C++, Node.js, NestJS, HeroUI, RTSP, WebRTC, H.264, FFmpeg, MQTT

High-performance video streaming bridges designed for local smart home networks and Home Assistant environments.

- **[scrypted-tuya](https://github.com/resonaura/scrypted-tuya)**: Standalone camera bridge that interfaces with Tuya and Smart Life hardware, converting proprietary WebRTC video streams into low-latency RTSP feeds without cloud dependencies.
- **[snappie](https://github.com/resonaura/snappie)**: Hardware-accelerated multi-camera RTSP snapshot server with zero-disk in-memory caching, supporting CUDA, VA-API, Intel QSV, and Apple VideoToolbox.
- **[aqara-g5pro-mqtt](https://github.com/resonaura/aqara-g5pro-mqtt)**: Universal MQTT and RTSP integration bridge for Home Assistant featuring bidirectional two-way audio talkback.

### Audio DSP Plugins & Hardware Instruments
*Real-Time Signal Processing & VST/AU Instruments*  
**Stack**: C++17/20, JUCE Framework, Elementary Audio, SIMD, Win32/macOS Audio APIs

- **[scratcher](https://github.com/resonaura/scratcher)**: Dual-deck vinyl scratch emulator audio plugin and standalone instrument built with JUCE 8 and C++17, featuring realistic turntable physics, time-stretching, and MIDI control surface mapping.
- **[flopster](https://github.com/resonaura/flopster)**: Software synthesizer (VST3, AU, Standalone) simulating retro floppy drive acoustics and mechanical stepping motors.
- **[resobox-core](https://github.com/resonaura/resobox-core)**: Low-latency audio processing firmware and engine built for a custom hardware guitar pedalboard.
- **[foxled](https://github.com/resonaura/foxled)**: Ambient backlighting workstation with low-latency NAudio WASAPI loopback capture, real-time FFT spectrum analysis, and serial Adalight streaming.

---

## Interactive & Web Applications

- **[KidCanvas](https://kidcanvas.skrinkaznan.com/)**: Collaborative real-time digital canvas platform for children and educators. Features instantaneous multi-user stroke synchronization over WebSockets, HTML5 Canvas rendering, and clean drawing tools.
- **Alchemy** ([portfolio](https://github.com/resonaura/portfolio)): Multi-model LLM workspace and Chrome extension interface coordinating prompt pipelines across OpenAI and Claude APIs.
- **UniVent** ([portfolio](https://github.com/resonaura/portfolio)): Cross-platform mobile event discovery application built with React Native, TypeScript, and native bridge modules for iOS and Android.
- **[Personal Portfolio](https://github.com/resonaura/portfolio)** ([vynohradov.ca](https://vynohradov.ca)): Interactive showcase website featuring custom Three.js GLSL fluid simulation shaders, iPadOS magnetic cursor physics, and responsive slide layouts.
- **[ResoMD](https://github.com/resonaura/resomd)**: Live split-pane markdown editor with block-level scroll synchronization, cloud autosave, and headless PDF export.

---

## Technical Competencies

- **Systems & Low-Latency**: C++20, JUCE 9, Lock-Free Concurrency, Zero-Allocation Real-Time Audio, DSP, Sinc Resampling, DMX-512, Art-Net, sACN (E1.31), MIDI, ESP32 UDP.
- **AI & Agent Systems**: Agent Orchestration, Hybrid RAG, Vector Search (pgvector), Local Inference (vLLM, Ollama), Model Quantization (GGUF, AWQ), LangGraph, Vercel AI SDK.
- **Backend & Cloud**: Node.js, NestJS, Python (FastAPI, Django), C# (.NET Core / ASP.NET), PostgreSQL, Redis, BullMQ, MinIO, Docker, Traefik, WireGuard.
- **Frontend & Platforms**: TypeScript, React, Next.js, React Native, Electron, Three.js (WebGL), Tailwind CSS, Vite.

---

## Education & Credentials

- **Fachinformatiker für Anwendungsentwicklung** (IHK-Certified Dual Vocational Program, Germany) — Completed ahead of schedule with honors; evaluated by WES as equivalent to a Canadian Applied Computer Science Diploma.
- **Undergraduate Studies in Computer Science & Engineering** (Prydniprovska State Academy of Civil Engineering and Architecture, Ukraine) — 2 years of full-time coursework in Data Structures, Algorithms, and Software Engineering.
- **Certifications**: [View verified credentials](https://certificates.vynohradov.ca).
