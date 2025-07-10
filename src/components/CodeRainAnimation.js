import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';

const CodeRainAnimation = ({ opacity = 0.15, speed = 1, density = 0.5 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Characters for the code rain
    const codeChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]()<>/\\|=+-*&^%$#@!~`';
    
    // Create code streams
    const columns = Math.floor(canvas.width / 20); // character width
    const drops = [];
    
    // Initialize drops at random positions
    for (let i = 0; i < columns * density; i++) {
      drops[i] = {
        x: Math.floor(Math.random() * columns) * 20,
        y: Math.floor(Math.random() * -canvas.height),
        length: Math.floor(Math.random() * 15) + 5,
        speed: (Math.random() * 0.5 + 0.5) * speed,
        chars: [],
        lastUpdate: 0,
        updateInterval: Math.floor(Math.random() * 10) + 5
      };
      
      // Generate random characters for this drop
      for (let j = 0; j < drops[i].length; j++) {
        drops[i].chars[j] = codeChars.charAt(Math.floor(Math.random() * codeChars.length));
      }
    }

    // Animation loop
    let frameCount = 0;
    const animate = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(10, 14, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      frameCount++;
      
      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        
        // Only update character every few frames for a more authentic matrix effect
        if (frameCount % drop.updateInterval === 0) {
          // Randomly change some characters in the stream
          for (let j = 0; j < drop.length; j++) {
            if (Math.random() > 0.9) {
              drop.chars[j] = codeChars.charAt(Math.floor(Math.random() * codeChars.length));
            }
          }
        }
        
        // Draw each character in the drop
        for (let j = 0; j < drop.length; j++) {
          // Calculate position
          const y = drop.y - j * 20;
          
          // Skip if out of canvas
          if (y < -20 || y > canvas.height) continue;
          
          // Determine character brightness (head is brightest)
          let alpha;
          if (j === 0) {
            // Head of the stream
            alpha = 1;
            ctx.font = 'bold 16px "Fira Code", monospace';
          } else {
            // Tail gets progressively dimmer
            alpha = 1 - (j / drop.length);
            ctx.font = '14px "Fira Code", monospace';
          }
          
          // Determine color based on position in stream
          let color;
          if (j === 0) {
            // Head is white or bright color
            color = `rgba(255, 255, 255, ${alpha})`;
          } else if (j < 3) {
            // First few characters are neon
            if (i % 3 === 0) {
              color = `rgba(255, 126, 219, ${alpha})`; // Pink
            } else if (i % 3 === 1) {
              color = `rgba(0, 255, 200, ${alpha})`; // Teal
            } else {
              color = `rgba(255, 204, 0, ${alpha})`; // Yellow
            }
          } else {
            // Rest of the stream is more muted
            if (i % 3 === 0) {
              color = `rgba(180, 90, 155, ${alpha})`; // Muted pink
            } else if (i % 3 === 1) {
              color = `rgba(0, 180, 140, ${alpha})`; // Muted teal
            } else {
              color = `rgba(180, 145, 0, ${alpha})`; // Muted yellow
            }
          }
          
          ctx.fillStyle = color;
          ctx.fillText(drop.chars[j], drop.x, y);
        }
        
        // Move the drop down
        drop.y += drop.speed;
        
        // Reset the drop when it reaches the bottom
        if (drop.y - (drop.length * 20) > canvas.height) {
          drop.y = Math.random() * -100;
          drop.length = Math.floor(Math.random() * 15) + 5;
          drop.x = Math.floor(Math.random() * columns) * 20;
          drop.speed = (Math.random() * 0.5 + 0.5) * speed;
          
          // Generate new random characters
          drop.chars = [];
          for (let j = 0; j < drop.length; j++) {
            drop.chars[j] = codeChars.charAt(Math.floor(Math.random() * codeChars.length));
          }
        }
      }
      
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [opacity, speed, density]);

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

export default CodeRainAnimation;
