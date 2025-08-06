import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';

const LiquidGlassCard = ({ children, className = '', ...props }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Create glass reflection element
    const reflection = document.createElement('div');
    reflection.className = 'glass-reflection';
    reflection.style.cssText = `
      position: absolute;
      top: 0;
      left: -50%;
      width: 30%;
      height: 100%;
      background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.6) 30%, 
        rgba(255, 255, 255, 0.8) 50%, 
        rgba(255, 255, 255, 0.6) 70%, 
        transparent 100%);
      transform: translateX(-100%) skewX(-15deg);
      opacity: 0;
      transition: all 0.6s ease;
      pointer-events: none;
      z-index: 3;
    `;

    card.appendChild(reflection);

    const handleMouseEnter = () => {
      reflection.style.animation = 'glassReflection 1.2s ease-out';
    };

    const handleMouseLeave = () => {
      reflection.style.animation = '';
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      if (reflection.parentNode) {
        reflection.parentNode.removeChild(reflection);
      }
    };
  }, []);

  return (
    <Box
      ref={cardRef}
      className={`liquid-glass-card ${className}`}
      {...props}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        ...props.sx
      }}
    >
      {children}
    </Box>
  );
};

export default LiquidGlassCard; 