"use client";

import { useEffect, useRef, useState } from "react";
import { ZoomIn, ZoomOut, Zap, Cpu, Server, Globe, Sparkles, Orbit, Clock, ShieldAlert } from "lucide-react";

export default function KeyspaceZoomSimulator({ level = 1, onLevelChange }) {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const [currentZoom, setCurrentZoom] = useState(level);
  const [hoveredNode, setHoveredNode] = useState(null);
  
  // Animation coordinates/state
  const stateRef = useRef({
    zoom: level,
    time: 0,
    mouse: { x: 0, y: 0, active: false },
    particles: [],
  });

  // Keep track of target level change
  useEffect(() => {
    stateRef.current.zoom = level;
  }, [level]);

  // Handle mouse movement for interactive particles
  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    stateRef.current.mouse = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handleMouseLeave = () => {
    stateRef.current.mouse.active = false;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    // Set exact DPI resolution
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles once
    const particles = [];
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 400,
        size: Math.random() * 2 + 0.5,
        color: i % 2 === 0 ? "#007AFF" : "#FF3B30",
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.2 + 0.05,
        dist: Math.random() * 150 + 20,
      });
    }
    stateRef.current.particles = particles;

    // Loop
    const draw = () => {
      const state = stateRef.current;
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      const cx = width / 2;
      const cy = height / 2;
      
      // Smoothly interpolate current zoom towards target zoom
      const diff = state.zoom - currentZoom;
      let newZoom = currentZoom;
      if (Math.abs(diff) > 0.005) {
        newZoom += diff * 0.08; // smooth easing
        setCurrentZoom(newZoom);
      } else if (newZoom !== state.zoom) {
        newZoom = state.zoom;
        setCurrentZoom(newZoom);
      }

      state.time += 0.015;

      // Clear canvas
      ctx.fillStyle = "#0E0F12";
      ctx.fillRect(0, 0, width, height);

      // Draw futuristic cyber grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw interactive particle aura relative to cursor
      if (state.mouse.active) {
        ctx.beginPath();
        ctx.arc(state.mouse.x, state.mouse.y, 40, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 122, 255, 0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Powers of Ten Zoom rendering logic
      // We render all 8 zoom layers, scaling them relative to currentZoom.
      for (let i = 1; i <= 8; i++) {
        // Compute scale factor for this layer relative to current zoom
        const scale = Math.pow(7, i - newZoom);
        
        // Compute opacity
        let opacity = 0;
        if (scale > 0.01 && scale < 7) {
          if (scale < 0.2) {
            // Fade in as it expands
            opacity = (scale - 0.01) / 0.19;
          } else if (scale > 2) {
            // Fade out as it gets too large
            opacity = (7 - scale) / 5;
          } else {
            opacity = 1;
          }
        }
        
        if (opacity <= 0) continue;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(scale, scale);
        ctx.globalAlpha = opacity;

        // Render individual mathematical elements for each scale
        if (i === 1) {
          // LAYER 1: GPU Chip
          ctx.strokeStyle = "#FF3B30";
          ctx.lineWidth = 2 / scale;
          ctx.beginPath();
          ctx.rect(-30, -30, 60, 60);
          ctx.stroke();
          
          // Inner core
          ctx.fillStyle = "rgba(255, 59, 48, 0.2)";
          ctx.fillRect(-20, -20, 40, 40);

          ctx.fillStyle = "#FFCC00";
          ctx.font = "italic bold 6px monospace";
          ctx.fillText("GPU_RIG", -13, 2);

          // Spinning circuit beams
          ctx.strokeStyle = "#FFCC00";
          ctx.lineWidth = 1 / scale;
          ctx.beginPath();
          for (let j = 0; j < 4; j++) {
            const rot = state.time * 0.5 + (j * Math.PI) / 2;
            const rx = Math.cos(rot) * 42;
            const ry = Math.sin(rot) * 42;
            ctx.moveTo(Math.cos(rot) * 30, Math.sin(rot) * 30);
            ctx.lineTo(rx, ry);
          }
          ctx.stroke();
        } 
        else if (i === 2) {
          // LAYER 2: 4 Billion CPU/Google Server Array (Grid of dots)
          ctx.fillStyle = "#007AFF";
          const dots = 12;
          for (let r = -dots; r <= dots; r++) {
            for (let c = -dots; c <= dots; c++) {
              if (Math.abs(r) < 2 && Math.abs(c) < 2) continue; // Hollow center for inner zoom
              const dx = r * 8;
              const dy = c * 8;
              // Pulsing grid effect
              const pulse = Math.sin(state.time * 2 + (r + c) * 0.1) * 0.3 + 0.7;
              ctx.beginPath();
              ctx.arc(dx, dy, (1.2 * pulse) / scale, 0, Math.PI * 2);
              ctx.fill();
            }
          }
          // Server cabinet outline
          ctx.strokeStyle = "rgba(0, 122, 255, 0.4)";
          ctx.lineWidth = 1 / scale;
          ctx.strokeRect(-100, -100, 200, 200);
        }
        else if (i === 3) {
          // LAYER 3: Planet Earth Botnet (Rotating globe + network nodes)
          ctx.strokeStyle = "#34C759";
          ctx.lineWidth = 1.5 / scale;
          
          // Globe outline
          ctx.beginPath();
          ctx.arc(0, 0, 70, 0, Math.PI * 2);
          ctx.stroke();

          // Rotating longitude curves
          ctx.strokeStyle = "rgba(52, 199, 89, 0.3)";
          for (let j = 0; j < 4; j++) {
            const spin = Math.sin(state.time * 0.2 + (j * Math.PI) / 4);
            ctx.beginPath();
            ctx.ellipse(0, 0, 70, Math.abs(70 * spin), 0, 0, Math.PI * 2);
            ctx.stroke();
          }

          // Network Nodes on Earth surface
          ctx.fillStyle = "#34C759";
          for (let j = 0; j < 16; j++) {
            const rot = state.time * 0.1 + (j * Math.PI) / 8;
            const nx = Math.cos(rot) * 70;
            const ny = Math.sin(rot * 0.5) * 35;
            ctx.beginPath();
            ctx.arc(nx, ny, 2.5 / scale, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        else if (i === 4) {
          // LAYER 4: The Galactic Earths (Spiral galaxy)
          ctx.fillStyle = "#FFCC00";
          const stars = 80;
          for (let j = 0; j < stars; j++) {
            // Archimedian spiral formula: r = a + b * theta
            const theta = j * 0.3 + state.time * 0.4;
            const r = 5 + 1.8 * theta;
            if (r > 130) continue;
            
            // Double spiral arms
            const sx1 = Math.cos(theta) * r;
            const sy1 = Math.sin(theta) * r;
            const sx2 = -Math.cos(theta) * r;
            const sy2 = -Math.sin(theta) * r;
            
            ctx.beginPath();
            ctx.arc(sx1, sy1, 1.5 / scale, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(sx2, sy2, 1.5 / scale, 0, Math.PI * 2);
            ctx.fill();
          }
          // Bright core
          const corePulse = Math.sin(state.time * 3) * 2 + 10;
          ctx.fillStyle = "rgba(255, 204, 0, 0.5)";
          ctx.beginPath();
          ctx.arc(0, 0, corePulse / scale, 0, Math.PI * 2);
          ctx.fill();
        }
        else if (i === 5) {
          // LAYER 5: The Universe Supercomputer (Cosmic cluster of galaxies)
          ctx.fillStyle = "#AF52DE";
          // Render multiple miniature spiral galaxies
          for (let j = 0; j < 12; j++) {
            const rot = state.time * 0.05 + (j * Math.PI) / 6;
            const gx = Math.cos(rot) * 110;
            const gy = Math.sin(rot) * 110;
            
            // Draw mini core
            ctx.beginPath();
            ctx.arc(gx, gy, 4 / scale, 0, Math.PI * 2);
            ctx.fill();
            
            // Mini galaxy swirl
            ctx.strokeStyle = "rgba(175, 82, 222, 0.4)";
            ctx.lineWidth = 1 / scale;
            ctx.beginPath();
            ctx.arc(gx, gy, 15, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
        else if (i === 6) {
          // LAYER 6: Century Timeline (Ticking Clock face)
          ctx.strokeStyle = "#FF3B30";
          ctx.lineWidth = 2 / scale;
          
          // Outer dial
          ctx.beginPath();
          ctx.arc(0, 0, 90, 0, Math.PI * 2);
          ctx.stroke();

          // Tick marks
          ctx.strokeStyle = "rgba(255, 59, 48, 0.4)";
          for (let j = 0; j < 12; j++) {
            const rot = (j * Math.PI) / 6;
            ctx.beginPath();
            ctx.moveTo(Math.cos(rot) * 82, Math.sin(rot) * 82);
            ctx.lineTo(Math.cos(rot) * 90, Math.sin(rot) * 90);
            ctx.stroke();
          }

          // Rotating clock hands
          ctx.strokeStyle = "#FF3B30";
          ctx.lineWidth = 3 / scale;
          const secAngle = state.time * 1.5;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(secAngle) * 75, Math.sin(secAngle) * 75);
          ctx.stroke();

          ctx.strokeStyle = "#FFCC00";
          ctx.lineWidth = 4 / scale;
          const minAngle = state.time * 0.15;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(minAngle) * 55, Math.sin(minAngle) * 55);
          ctx.stroke();
        }
        else if (i === 7) {
          // LAYER 7: Cosmic Age Span (Dual Scale Hourglass)
          ctx.strokeStyle = "#FFCC00";
          ctx.lineWidth = 2.5 / scale;
          
          // Glass shape
          ctx.beginPath();
          ctx.moveTo(-45, -80);
          ctx.lineTo(45, -80);
          ctx.lineTo(5, 0);
          ctx.lineTo(45, 80);
          ctx.lineTo(-45, 80);
          ctx.lineTo(-5, 0);
          ctx.closePath();
          ctx.stroke();

          // Falling sand particles
          ctx.fillStyle = "#FFCC00";
          const sandParticles = 15;
          for (let j = 0; j < sandParticles; j++) {
            const sandY = ((state.time * 20 + j * 12) % 150) - 75;
            let sandX = 0;
            if (sandY < 0) {
              // Funnel in upper glass
              sandX = (Math.random() - 0.5) * (Math.abs(sandY) * 0.5);
            } else {
              // Pile in lower glass
              sandX = (Math.random() - 0.5) * (40 - sandY * 0.2);
            }
            ctx.beginPath();
            ctx.arc(sandX, sandY, 1.5 / scale, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        else if (i === 8) {
          // LAYER 8: Absolute Math Cryptographic Shield
          ctx.strokeStyle = "#34C759";
          ctx.lineWidth = 3 / scale;
          
          // Shield outline
          ctx.beginPath();
          ctx.moveTo(0, -90);
          ctx.bezierCurveTo(45, -90, 65, -70, 65, -30);
          ctx.bezierCurveTo(65, 20, 35, 65, 0, 90);
          ctx.bezierCurveTo(-35, 65, -65, 20, -65, -30);
          ctx.bezierCurveTo(-65, -70, -45, -90, 0, -90);
          ctx.closePath();
          ctx.stroke();

          // Glowing background
          ctx.fillStyle = "rgba(52, 199, 89, 0.08)";
          ctx.fill();

          // Key padlock inside
          ctx.strokeStyle = "#34C759";
          ctx.lineWidth = 2 / scale;
          ctx.beginPath();
          ctx.arc(0, -10, 16, Math.PI, 0);
          ctx.stroke();
          ctx.strokeRect(-22, -10, 44, 35);
          
          // Keyhole
          ctx.fillStyle = "#34C759";
          ctx.beginPath();
          ctx.arc(0, 5, 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillRect(-2, 5, 4, 12);
        }

        ctx.restore();
      }

      // Draw background space particles that drift constantly
      ctx.save();
      ctx.translate(cx, cy);
      state.particles.forEach((p) => {
        p.dist += p.speed * 0.5;
        if (p.dist > 300) p.dist = 20;
        
        // Rotate slowly
        p.angle += 0.002;
        const px = Math.cos(p.angle) * p.dist;
        const py = Math.sin(p.angle) * p.dist;

        // Apply mouse magnetic deflection
        let finalX = px;
        let finalY = py;
        if (state.mouse.active) {
          const mx = state.mouse.x - cx;
          const my = state.mouse.y - cy;
          const dx = px - mx;
          const dy = py - my;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 50) {
            // push particles away from cursor
            const force = (50 - d) / 50;
            finalX += (dx / d) * force * 15;
            finalY += (dy / d) * force * 15;
          }
        }

        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, 1 - p.dist / 300) * 0.4;
        ctx.beginPath();
        ctx.arc(finalX, finalY, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      requestRef.current = requestAnimationFrame(draw);
    };

    requestRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [currentZoom]);

  const levelDetails = [
    { label: "GPU Rig", desc: "4B hashes/sec", color: "#FF3B30", icon: Cpu },
    { label: "Cluster", desc: "4B GPU grids", color: "#007AFF", icon: Server },
    { label: "Planet", desc: "4B connected nodes", color: "#34C759", icon: Globe },
    { label: "Galaxy", desc: "4B solar worlds", color: "#FFCC00", icon: Orbit },
    { label: "Universe", desc: "4B galaxies net", color: "#AF52DE", icon: Sparkles },
    { label: "Century", desc: "4B calculation secs", color: "#FF3B30", icon: Clock },
    { label: "Cosmic", desc: "507B running yrs", color: "#FFCC00", icon: Orbit },
    { label: "Verdict", desc: "SHA-256 is absolute", color: "#34C759", icon: ShieldAlert },
  ];

  return (
    <div className="flex flex-col gap-3 w-full h-full justify-between">
      
      {/* Dynamic Range Zoom Slider */}
      <div className="p-3 border-2 border-black bg-black rounded-lg">
        <div className="flex justify-between items-center mb-1 text-[8px] font-mono text-gray-500 uppercase font-black">
          <span>Zoom Level Scale [10^x]</span>
          <span className="text-[#007AFF]">Current Factor: x{levelDetails[level - 1].desc}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            disabled={level <= 1}
            onClick={() => onLevelChange(level - 1)}
            className="p-1.5 border border-black bg-[#181922] text-gray-400 hover:text-white rounded disabled:opacity-20 cursor-pointer"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          
          <input
            type="range"
            min="1"
            max="8"
            value={level}
            onChange={(e) => onLevelChange(parseInt(e.target.value))}
            className="flex-1 accent-[#007AFF] h-1.5 rounded cursor-pointer"
          />

          <button 
            disabled={level >= 8}
            onClick={() => onLevelChange(level + 1)}
            className="p-1.5 border border-black bg-[#181922] text-gray-400 hover:text-white rounded disabled:opacity-20 cursor-pointer"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Canvas Node */}
      <div className="relative flex-1 w-full border-2 border-black rounded-lg overflow-hidden bg-black min-h-[220px]">
        <canvas
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="absolute top-0 left-0 w-full h-full cursor-crosshair block"
        />

        {/* Dynamic Zoom level legend indicator overlay */}
        <div className="absolute bottom-2 left-2 pointer-events-none p-2 bg-black/75 border border-gray-800 rounded font-mono text-[9px] text-gray-400 flex flex-col gap-0.5">
          <div className="text-[10px] font-black text-white flex items-center gap-1.5 uppercase">
            {(() => {
              const Icon = levelDetails[level - 1].icon;
              return <Icon className="w-3.5 h-3.5" style={{ color: levelDetails[level - 1].color }} />;
            })()}
            {levelDetails[level - 1].label}
          </div>
          <div>Scale Multiplier: {levelDetails[level - 1].desc}</div>
        </div>

        {/* Floating security notice */}
        <div className="absolute top-2 right-2 pointer-events-none px-2 py-0.5 bg-[rgba(255,59,48,0.15)] border border-[#FF3B30] text-[#FF3B30] rounded text-[8px] font-mono font-black uppercase animate-pulse">
          SIMULATION ACTIVE
        </div>
      </div>

      {/* Grid of Interactive Quick Selectors */}
      <div className="grid grid-cols-4 gap-1.5">
        {levelDetails.map((det, idx) => {
          const active = idx + 1 === level;
          const Icon = det.icon;
          return (
            <button
              key={idx}
              onClick={() => onLevelChange(idx + 1)}
              className={`p-1.5 border-2 border-black rounded text-center flex flex-col items-center justify-center transition-all cursor-pointer ${
                active 
                  ? "bg-black font-black shadow-[2px_2px_0px_#000]" 
                  : "bg-[#181922] text-gray-400 hover:text-white"
              }`}
              style={{ 
                borderColor: active ? det.color : "black",
                color: active ? det.color : ""
              }}
            >
              <Icon className="w-3.5 h-3.5 mb-0.5" />
              <span className="text-[7.5px] font-mono leading-none tracking-tighter uppercase truncate max-w-full">
                {det.label}
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
}
