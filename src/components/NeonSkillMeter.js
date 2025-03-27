import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';

const NeonSkillMeter = ({ skills = [], animated = true }) => {
  const theme = useTheme();
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start('visible');
        }
      },
      { threshold: 0.2 }
    );

    const currentElement = document.getElementById('skill-meter-container');
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [controls]);

  const barVariants = {
    hidden: { width: 0 },
    visible: (custom) => ({
      width: `${custom}%`,
      transition: { 
        duration: 1.5,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    })
  };

  const getColorForSkill = (index) => {
    const colors = [
      '#ff7edb', // Pink
      '#00ffc8', // Teal
      '#ffcc00', // Yellow
      '#7928ca', // Purple
      '#00b8ff', // Blue
    ];
    return colors[index % colors.length];
  };

  return (
    <Box 
      id="skill-meter-container"
      sx={{ 
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: 3,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(26, 31, 46, 0.5), rgba(26, 31, 46, 0.8))',
          borderRadius: 2,
          zIndex: -1
        }
      }}
    >
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 3, 
          textAlign: 'center',
          color: theme.palette.primary.main,
          textShadow: `0 0 10px ${theme.palette.primary.main}`,
          fontWeight: 'bold'
        }}
      >
        Technical Proficiency
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {skills.map((skill, index) => {
          const color = getColorForSkill(index);
          
          return (
            <Box key={skill.name} sx={{ width: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography 
                  sx={{ 
                    color: color,
                    textShadow: `0 0 5px ${color}`,
                    fontWeight: 500
                  }}
                >
                  {skill.name}
                </Typography>
                <Typography 
                  sx={{ 
                    color: theme.palette.text.secondary,
                    fontFamily: '"Fira Code", monospace'
                  }}
                >
                  {animated && inView ? `${skill.level}%` : '0%'}
                </Typography>
              </Box>
              
              <Box 
                sx={{ 
                  width: '100%', 
                  height: '12px', 
                  background: 'rgba(26, 31, 46, 0.6)',
                  borderRadius: '6px',
                  position: 'relative',
                  overflow: 'hidden',
                  border: `1px solid ${color}`,
                  boxShadow: `0 0 5px ${color}`
                }}
              >
                <motion.div
                  initial="hidden"
                  animate={animated ? controls : "visible"}
                  variants={barVariants}
                  custom={skill.level}
                  style={{
                    height: '100%',
                    borderRadius: '6px',
                    background: `linear-gradient(90deg, ${color}, ${color}aa)`,
                    boxShadow: `0 0 10px ${color}, 0 0 5px ${color}`,
                    position: 'relative'
                  }}
                />
                
                {/* Animated scanner effect */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '20px',
                    height: '100%',
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                    animation: 'scanner 2s ease-in-out infinite',
                    '@keyframes scanner': {
                      '0%': { transform: 'translateX(-20px)' },
                      '100%': { transform: `translateX(${skill.level}%)` }
                    }
                  }}
                />
                
                {/* Glitch particles */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <Box
                    key={i}
                    sx={{
                      position: 'absolute',
                      top: Math.random() * 10,
                      left: `${Math.random() * skill.level}%`,
                      width: '2px',
                      height: '2px',
                      borderRadius: '50%',
                      background: color,
                      boxShadow: `0 0 5px ${color}`,
                      animation: `particle-${i} ${1 + Math.random() * 2}s ease-in-out infinite`,
                      [`@keyframes particle-${i}`]: {
                        '0%, 100%': { opacity: 0 },
                        '50%': { opacity: 1 }
                      }
                    }}
                  />
                ))}
              </Box>
              
              {/* Skill level markers */}
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  mt: 0.5,
                  px: 1,
                  opacity: 0.7
                }}
              >
                {[0, 25, 50, 75, 100].map(mark => (
                  <Typography 
                    key={mark} 
                    variant="caption" 
                    sx={{ 
                      color: theme.palette.text.secondary,
                      fontFamily: '"Fira Code", monospace',
                      fontSize: '0.6rem'
                    }}
                  >
                    {mark}
                  </Typography>
                ))}
              </Box>
            </Box>
          );
        })}
      </Box>
      
      {/* Digital noise overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QUcCgYcGYX9vwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAEEklEQVRo3u2ZTUhUURTHf+/NjI5OOmFZUEIgRRiBRBTRh0Hm0CKIFhK1CdpEtCgiCFpEVLuWUbSQ+lhE0aYvCCOQhKhFH0QfVFSLyiIJLKdxppl5t8XzjjPNvHk6r5m3mAOXN+/de+7933PvPfec/4OAgICAgICAgP8LjuRvh4CdwDDQAUQi/AxQBfQBfcBLIA3MAdPOHOQMQlWpqlYb/Oc9ql5V1ePOXGXHIKpapKpHVXVCVTNZPDKjqhOqelRVi3LlkKOq2pfjM/tU9WiuHHJVVSdy7IwJVb2aK4cMJZPJRDKZTOTaIYlkMplIJpOJXDtkKJlMJpLJZCLXDrny9/IRVe0DyP7JfAMoB2qBFqAJqAQiwCJgHpgFvgGfgXfAa+A9MPMv3lG5hL+qGgGagF1AN9AJbM5S1SxwH3gGvASmRGTeT4f4EhFVrQB2A/uBPUBtjsOVBB4Bj4GnwIyILPjhEFHVWmAvcADoBkpybHwmAngKPAQeiMiXbGIvqkNUtQnoBw4CXUCxD4YvAiPAMPBYRKazUeR7RFS1ATgEHAY6fDJ8EXgBDAF3RWQqG0W+RURV64AjwBGg3UfDF4HnwC3gjoj8yEaRLxFR1TLgOHAK2OGz4YvAU+AG8EBEFrJR5DkiqloCnAROA+0FYvgicB+4DjwRkUw2ijxFRFWLgBPAWaClwAxfBEaAa8CIiKSzUeQ6Iqp6ADgHbCtQwxeBu8BVEXmTjSJXEVHVvcAFoLOADV8EHgGXRGQ8G0XWEVHVncBFoKeADV8ExoFLIvIiG0VWEVHVNuA8cKDADV8EHgAXReSdH4qcIqKqlcAZ4CSwxQHmgVngJ/ADSGGlkwpgPVAGlDrMgQngMnBbRH77ochpQVW1GDgFDABVDvpTwCPgGfASmBSRXw66y4F6oA3YBfQCnUCJg/5PwA3gmoj88EORa9I4AFwBmh30fQWGgNvAuIj8ydLwCNAA9AGngL0OOr8D14HrIjLnhyJXEekGrgFtDrpGgUvAIxFJe3z/euAkcBxoddD3EhgUkad+KHKNSCMwCOxz0PMAOCsiEz68fxNwFhh00PMeOCMiL/1Q5AqRMuACcMxBxyRwXERe+WyDA5wGLjvoSQHnRGTYD0WuEekHrjjoWAAGRGTIZxuKgEFgwEHPAnBJRG76ochtsTsGXMSW2XmxCFwQkRs+21AEXMGWCHqRAQZE5JYfilwj0oEt9/N6Xwa4KiKXfTa+GLgJHHfQc1lErvihyDUiNcAQsNtBx00ROeOz8aXAXaDPQc8tETnthyLXiJQDd4A9DjpuiUi/z8ZXAA+BLgc9wyLS74ci14iUYvsP+xx03BaRkz4bX4MtEex10DPsR9LIZtM1AowB7Q46hkRkwGfja7ElgL0OeoZFZNAPRQEBAQEBAQEBa5K/NC+X7KLZ+0oAAAAASUVORK5CYII=") repeat',
          opacity: 0.02,
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
    </Box>
  );
};

export default NeonSkillMeter;
