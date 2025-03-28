import React, { useState, useEffect, useCallback } from 'react';
import { Typography, Box } from '@mui/material';

const GlitchText = ({ 
  text, 
  variant = 'h2', 
  component = 'h2', 
  color = 'primary',
  intensity = 'medium',
  sx = {}
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  
  // Characters to use for glitch effect
  const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
  
  // Set intensity parameters
  let glitchProbability;
  let glitchDuration;
  let pauseDuration;
  
  switch (intensity) {
    case 'low':
      glitchProbability = 0.01;
      glitchDuration = 50;
      pauseDuration = 5000;
      break;
    case 'high':
      glitchProbability = 0.1;
      glitchDuration = 150;
      pauseDuration = 2000;
      break;
    case 'extreme':
      glitchProbability = 0.2;
      glitchDuration = 200;
      pauseDuration = 1000;
      break;
    case 'medium':
    default:
      glitchProbability = 0.05;
      glitchDuration = 100;
      pauseDuration = 3000;
  }
  
  // Function to create a glitched version of the text - wrapped in useCallback to prevent recreation on every render
  const glitchText = useCallback((originalText) => {
    return originalText.split('').map(char => {
      if (Math.random() < glitchProbability) {
        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
      }
      return char;
    }).join('');
  }, [glitchProbability]);
  
  // Effect to trigger glitch at random intervals
  useEffect(() => {
    let glitchInterval;
    let glitchTimeout;
    
    const startGlitching = () => {
      setIsGlitching(true);
      
      // Create rapid glitch effect
      let glitchCount = 0;
      const maxGlitches = 5;
      
      glitchInterval = setInterval(() => {
        if (glitchCount < maxGlitches) {
          setDisplayText(glitchText(text));
          glitchCount++;
        } else {
          clearInterval(glitchInterval);
          setDisplayText(text);
          setIsGlitching(false);
        }
      }, glitchDuration);
    };
    
    // Randomly trigger the glitch effect
    const triggerGlitch = () => {
      if (!isGlitching && Math.random() < 0.3) {
        startGlitching();
      }
      
      glitchTimeout = setTimeout(triggerGlitch, pauseDuration + Math.random() * 2000);
    };
    
    // Initial trigger
    glitchTimeout = setTimeout(triggerGlitch, pauseDuration);
    
    // Also trigger on hover
    const handleMouseMove = () => {
      if (!isGlitching && Math.random() < 0.1) {
        startGlitching();
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(glitchInterval);
      clearTimeout(glitchTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [text, isGlitching, glitchDuration, pauseDuration, glitchProbability, glitchText]);
  
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-block',
        ...sx
      }}
    >
      <Typography
        variant={variant}
        component={component}
        color={color}
        sx={{
          position: 'relative',
          display: 'inline-block',
          '&::before, &::after': {
            content: `"${displayText}"`,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: isGlitching ? 0.8 : 0
          },
          '&::before': {
            color: '#ff7edb',
            textShadow: '0.05em 0 0 rgba(255, 0, 0, 0.75)',
            animation: isGlitching ? 'glitch-anim-1 0.15s infinite alternate-reverse' : 'none',
            left: isGlitching ? '-2px' : 0
          },
          '&::after': {
            color: '#00ffc8',
            textShadow: '-0.05em 0 0 rgba(0, 255, 0, 0.75)',
            animation: isGlitching ? 'glitch-anim-2 0.15s infinite alternate-reverse' : 'none',
            left: isGlitching ? '2px' : 0
          },
          '@keyframes glitch-anim-1': {
            '0%': {
              clipPath: 'inset(20% 0 30% 0)',
            },
            '20%': {
              clipPath: 'inset(65% 0 13% 0)',
            },
            '40%': {
              clipPath: 'inset(43% 0 20% 0)',
            },
            '60%': {
              clipPath: 'inset(18% 0 69% 0)',
            },
            '80%': {
              clipPath: 'inset(75% 0 5% 0)',
            },
            '100%': {
              clipPath: 'inset(10% 0 60% 0)',
            },
          },
          '@keyframes glitch-anim-2': {
            '0%': {
              clipPath: 'inset(33% 0 33% 0)',
            },
            '20%': {
              clipPath: 'inset(24% 0 29% 0)',
            },
            '40%': {
              clipPath: 'inset(73% 0 7% 0)',
            },
            '60%': {
              clipPath: 'inset(34% 0 41% 0)',
            },
            '80%': {
              clipPath: 'inset(12% 0 69% 0)',
            },
            '100%': {
              clipPath: 'inset(38% 0 15% 0)',
            },
          }
        }}
      >
        {displayText}
      </Typography>
    </Box>
  );
};

export default GlitchText;
