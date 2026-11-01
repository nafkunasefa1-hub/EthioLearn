import React, { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  colorScheme: 'emerald' | 'amber' | 'cyan' | 'violet' | 'gold';
  phase: number;
  floatSpeed: number;
  label?: string;
  depth: number; // 0 = background, 1 = mid, 2 = foreground
  mass: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  color: string;
}

interface InteractiveFloatingBubblesCanvasProps {
  className?: string;
}

export const InteractiveFloatingBubblesCanvas: React.FC<InteractiveFloatingBubblesCanvasProps> = ({
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Color definitions for glass bubbles
    const colorPalettes = {
      emerald: {
        glow: 'rgba(16, 185, 129, 0.45)',
        rim: 'rgba(52, 211, 153, 0.75)',
        fillStart: 'rgba(16, 185, 129, 0.22)',
        fillEnd: 'rgba(5, 150, 105, 0.04)',
        highlight: 'rgba(255, 255, 255, 0.85)',
        text: 'rgba(167, 243, 208, 0.95)'
      },
      amber: {
        glow: 'rgba(245, 158, 11, 0.45)',
        rim: 'rgba(251, 191, 36, 0.75)',
        fillStart: 'rgba(245, 158, 11, 0.22)',
        fillEnd: 'rgba(217, 119, 6, 0.04)',
        highlight: 'rgba(255, 255, 255, 0.85)',
        text: 'rgba(253, 230, 138, 0.95)'
      },
      cyan: {
        glow: 'rgba(6, 182, 212, 0.45)',
        rim: 'rgba(34, 211, 238, 0.75)',
        fillStart: 'rgba(6, 182, 212, 0.22)',
        fillEnd: 'rgba(8, 145, 178, 0.04)',
        highlight: 'rgba(255, 255, 255, 0.85)',
        text: 'rgba(165, 243, 252, 0.95)'
      },
      violet: {
        glow: 'rgba(139, 92, 246, 0.45)',
        rim: 'rgba(167, 139, 250, 0.75)',
        fillStart: 'rgba(139, 92, 246, 0.22)',
        fillEnd: 'rgba(124, 58, 237, 0.04)',
        highlight: 'rgba(255, 255, 255, 0.85)',
        text: 'rgba(221, 214, 254, 0.95)'
      },
      gold: {
        glow: 'rgba(234, 179, 8, 0.5)',
        rim: 'rgba(250, 204, 21, 0.8)',
        fillStart: 'rgba(234, 179, 8, 0.25)',
        fillEnd: 'rgba(202, 138, 4, 0.05)',
        highlight: 'rgba(255, 255, 255, 0.9)',
        text: 'rgba(254, 240, 138, 0.95)'
      }
    };

    const bubbleLabels = [
      'EUEE 2018',
      'Calculus',
      'Physics',
      'Chemistry',
      'Biology',
      '275K AI Pool',
      '585/600 Top Record',
      'Telebirr',
      'Grade 12',
      'KaTeX Math'
    ];

    const schemes: ('emerald' | 'amber' | 'cyan' | 'violet' | 'gold')[] = [
      'emerald',
      'amber',
      'cyan',
      'violet',
      'gold'
    ];

    // Determine bubble count based on screen width
    const isMobile = width < 768;
    const bubbleCount = isMobile ? 18 : 34;

    const bubbles: Bubble[] = Array.from({ length: bubbleCount }, (_, i) => {
      const depth = i < 8 ? 2 : i < 20 ? 1 : 0; // 2=foreground, 1=midground, 0=background
      const baseRadius = depth === 2 
        ? Math.random() * 26 + 32 
        : depth === 1 
        ? Math.random() * 16 + 18 
        : Math.random() * 10 + 10;

      const hasLabel = depth >= 1 && i < bubbleLabels.length;

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (depth === 2 ? 0.45 : 0.3),
        vy: -0.2 - Math.random() * (depth === 2 ? 0.4 : 0.25),
        baseRadius,
        radius: baseRadius,
        colorScheme: schemes[i % schemes.length],
        phase: Math.random() * Math.PI * 2,
        floatSpeed: 0.012 + Math.random() * 0.018,
        label: hasLabel ? bubbleLabels[i % bubbleLabels.length] : undefined,
        depth,
        mass: baseRadius * 0.1
      };
    });

    const ripples: Ripple[] = [];
    const sparks: Spark[] = [];

    // Mouse & Touch Interaction
    const mouse = { x: -2000, y: -2000, active: false };

    const updatePointer = (clientX: number, clientY: number) => {
      mouse.x = clientX;
      mouse.y = clientY;
      mouse.active = true;
    };

    const onMouseMove = (e: MouseEvent) => {
      updatePointer(e.clientX, e.clientY);
    };

    const triggerRippleAndBurst = (x: number, y: number) => {
      // 1. Add expanding glass water ripple
      ripples.push({
        x,
        y,
        radius: 12,
        maxRadius: Math.min(width, height) * 0.42,
        alpha: 0.85,
        speed: 5.5
      });

      // 2. Add micro-shimmer spark burst
      const sparkColors = ['#34d399', '#fbbf24', '#38bdf8', '#c084fc', '#ffffff'];
      for (let i = 0; i < 16; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.8 + 1.2;
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          size: Math.random() * 2.8 + 1.2,
          color: sparkColors[Math.floor(Math.random() * sparkColors.length)]
        });
      }

      // 3. Impart physical impulse to nearby bubbles
      for (const b of bubbles) {
        const dx = b.x - x;
        const dy = b.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 260 && dist > 1) {
          const force = (1 - dist / 260) * 4.5;
          b.vx += (dx / dist) * force;
          b.vy += (dy / dist) * force;
        }
      }
    };

    const onClick = (e: MouseEvent) => {
      triggerRippleAndBurst(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const t = e.touches[0];
        updatePointer(t.clientX, t.clientY);
        triggerRippleAndBurst(t.clientX, t.clientY);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('click', onClick, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // --- 1. RIPPLE PASS ---
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.alpha -= 0.014;

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(52, 211, 153, ${r.alpha * 0.45})`;
        ctx.lineWidth = 1.8;
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 10;
        ctx.stroke();

        // Secondary subtle inner echo wave
        if (r.radius > 20) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius * 0.72, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(245, 158, 11, ${r.alpha * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        ctx.restore();
      }

      // --- 2. MICRO-SHIMMER SPARKS PASS ---
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.95;
        s.vy *= 0.95;
        s.alpha -= 0.022;

        if (s.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      // --- 3. CONNECTING LINES BETWEEN NEARBY BUBBLES ---
      ctx.lineWidth = 0.8;
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const dx = bubbles[i].x - bubbles[j].x;
          const dy = bubbles[i].y - bubbles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxLinkDist = isMobile ? 85 : 125;

          if (dist < maxLinkDist) {
            const alpha = (1 - dist / maxLinkDist) * 0.16;
            ctx.beginPath();
            ctx.moveTo(bubbles[i].x, bubbles[i].y);
            ctx.lineTo(bubbles[j].x, bubbles[j].y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // --- 4. BUBBLE BODIES & GLASS REFLECTIONS ---
      for (const b of bubbles) {
        // Organic sinusoidal floating
        b.phase += b.floatSpeed;
        const bob = Math.sin(b.phase + time) * 0.8;

        // Apply velocities with damping
        b.x += b.vx;
        b.y += b.vy + bob;
        b.vx *= 0.985;
        b.vy *= 0.985;

        // Gentle upward drift re-entry
        if (b.y < -b.radius * 2) {
          b.y = height + b.radius + Math.random() * 40;
          b.x = Math.random() * width;
        }
        if (b.x < -b.radius * 2) b.x = width + b.radius;
        if (b.x > width + b.radius * 2) b.x = -b.radius;

        // Cursor Repulsion Field
        if (mouse.active) {
          const mdx = b.x - mouse.x;
          const mdy = b.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          const repulsionRadius = b.radius + (isMobile ? 80 : 130);

          if (mdist < repulsionRadius && mdist > 1) {
            const repelFactor = (1 - mdist / repulsionRadius) * (1.8 / b.mass);
            b.vx += (mdx / mdist) * repelFactor;
            b.vy += (mdy / mdist) * repelFactor;
          }
        }

        const pal = colorPalettes[b.colorScheme];

        ctx.save();

        // 1. Outer Translucent Shadow & Glow
        ctx.shadowColor = pal.glow;
        ctx.shadowBlur = b.depth === 2 ? 18 : b.depth === 1 ? 10 : 5;

        // 2. Spherical Glass Gradient Fill
        const grad = ctx.createRadialGradient(
          b.x - b.radius * 0.28,
          b.y - b.radius * 0.28,
          b.radius * 0.08,
          b.x,
          b.y,
          b.radius
        );
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
        grad.addColorStop(0.35, pal.fillStart);
        grad.addColorStop(0.85, pal.fillEnd);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0.05)');

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // 3. Delicate Glass Refraction Rim
        ctx.strokeStyle = pal.rim;
        ctx.lineWidth = b.depth === 2 ? 1.6 : 1.0;
        ctx.stroke();

        // 4. Specular Curved Highlight Arc (Top-Left Reflection)
        const hlX = b.x - b.radius * 0.35;
        const hlY = b.y - b.radius * 0.35;
        const hlR = b.radius * 0.32;

        ctx.beginPath();
        ctx.ellipse(hlX, hlY, hlR, hlR * 0.55, -Math.PI / 4, 0, Math.PI * 2);
        ctx.fillStyle = pal.highlight;
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 6;
        ctx.fill();

        // 5. Subtle Bottom-Right Internal Caustic Light
        const bcX = b.x + b.radius * 0.3;
        const bcY = b.y + b.radius * 0.3;
        ctx.beginPath();
        ctx.arc(bcX, bcY, b.radius * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = pal.glow;
        ctx.fill();

        // 6. Academic Tag Label inside prominent bubbles
        if (b.label && b.radius >= 26) {
          ctx.shadowBlur = 0;
          ctx.font = `600 ${Math.max(9, Math.floor(b.radius * 0.24))}px system-ui, -apple-system, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = pal.text;
          ctx.fillText(b.label, b.x, b.y + b.radius * 0.1);
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchstart', onTouchStart);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
};
