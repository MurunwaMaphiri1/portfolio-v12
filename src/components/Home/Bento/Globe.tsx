"use client"
import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

interface GlobeProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Globe({ width = 400, height = 400, className = '' }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<any>(null);
  
  const lat = -25.73134;
  const lng = 28.21837;

  const locationToAngles = (lat: number, lng: number): [number, number] => [
    Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2),
    (lat * Math.PI) / 180,
  ];

  const [phi, theta] = locationToAngles(lat, lng);

  // Tilt the globe upwards by adjusting the theta (vertical angle)
  const tiltedTheta = theta - 0.25; // Adjust this value to control the tilt (-0.2 tilts upwards)

  useEffect(() => {
    if (!canvasRef.current) return;

    let isDragging = false;
    let lastX = 0;
    let currentPhi = phi;
    let velocity = 0;

    const canvas = canvasRef.current;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 800,
      height: 800,
      phi: currentPhi,
      theta: tiltedTheta, // Use the tilted angle
      dark: 1,
      diffuse: 0.8,
      mapSamples: 16000,
      mapBrightness: 2,
      baseColor: [0.8, 0.8, 0.8],
      markerColor: [1, 0.5, 1],
      glowColor: [0.5, 0.5, 0.5],
      scale: 1.05,
      markers: [{ location: [lat, lng], size: 0.1 }],
      onRender: (state) => {
        state.phi = currentPhi;
        state.theta = tiltedTheta; // Keep the tilted angle
        currentPhi += velocity;
        velocity *= 0.95;
      },
    });

    globeRef.current = globe;

    // Mouse event handlers
    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastX = e.clientX;
      canvas.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
      isDragging = false;
      canvas.style.cursor = 'grab';
    };

    const handleMouseLeave = () => {
      isDragging = false;
      canvas.style.cursor = 'grab';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const delta = e.clientX - lastX;
      lastX = e.clientX;
      currentPhi += delta * 0.005; // controls rotation speed
      velocity = delta * 0.0005; // inertia when released
    };

    // Touch event handlers
    const handleTouchStart = (e: TouchEvent) => {
      isDragging = true;
      lastX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !e.touches[0]) return;
      const delta = e.touches[0].clientX - lastX;
      lastX = e.touches[0].clientX;
      currentPhi += delta * 0.005;
      velocity = delta * 0.0005;
    };

    // Add event listeners
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('touchmove', handleTouchMove);

    // Cleanup
    return () => {
      globe.destroy();
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, [lat, lng, phi, tiltedTheta]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={800}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: '50%',
        cursor: 'grab',
        transition: 'opacity 1s ease',
      }}
      className={className}
    />
  );
}