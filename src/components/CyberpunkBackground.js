import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';

const CyberpunkBackground = ({ opacity = 0.15 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let gridSize = 40;
    let time = 0;

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Colors
    const primaryColor = '#ff7edb';
    const secondaryColor = '#00ffc8';
    const tertiaryColor = '#ffcc00';

    // Draw grid
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        
        // Pulse effect
        const pulseY = Math.sin(time * 0.001 + y * 0.01) * 0.5 + 0.5;
        ctx.strokeStyle = `rgba(255, 126, 219, ${0.05 + pulseY * 0.1})`;
        
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Draw vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        
        // Pulse effect
        const pulseX = Math.sin(time * 0.001 + x * 0.01) * 0.5 + 0.5;
        ctx.strokeStyle = `rgba(0, 255, 200, ${0.05 + pulseX * 0.1})`;
        
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw moving horizontal line (scan effect)
      const scanY = (time * 0.5) % canvas.height;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw glowing points at intersections
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow((canvas.width / 2) - x, 2) + 
            Math.pow((canvas.height / 2) - y, 2)
          );
          
          const pulse = Math.sin(time * 0.002 + distance * 0.01) * 0.5 + 0.5;
          
          if (pulse > 0.7) {
            ctx.beginPath();
            ctx.arc(x, y, pulse * 3, 0, Math.PI * 2);
            ctx.fillStyle = secondaryColor;
            ctx.fill();
          }
        }
      }

      // Draw random data points
      if (Math.random() > 0.95) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        
        ctx.beginPath();
        ctx.arc(x, y, Math.random() * 3 + 1, 0, Math.PI * 2);
        ctx.fillStyle = tertiaryColor;
        ctx.fill();
      }

      // Draw diagonal pulse lines
      const numLines = 5;
      for (let i = 0; i < numLines; i++) {
        const offset = (time * 0.5 + i * 1000) % (canvas.width + canvas.height);
        const startX = Math.max(0, offset - canvas.height);
        const startY = Math.min(canvas.height, offset);
        const endX = Math.min(canvas.width, offset);
        const endY = Math.max(0, offset - canvas.width);
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = `rgba(255, 204, 0, ${0.1 + Math.sin(time * 0.001 + i) * 0.05})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      time += 16; // Approximately 60fps
      animationFrameId = window.requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [opacity]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: opacity,
        pointerEvents: 'none'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
    </Box>
  );
};

export default CyberpunkBackground;
