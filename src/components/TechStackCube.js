import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';

const TechStackCube = ({ technologies = [] }) => {
  const theme = useTheme();
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  // Group technologies into 6 categories for cube faces
  const groupedTech = {
    frontend: technologies.filter(tech => 
      ['React', 'JavaScript', 'HTML', 'CSS', 'TypeScript', 'Vue', 'Angular'].includes(tech)
    ).slice(0, 6),
    backend: technologies.filter(tech => 
      ['Node.js', 'Express', 'Python', 'Django', 'Flask', 'PHP', 'Java', 'C#'].includes(tech)
    ).slice(0, 6),
    database: technologies.filter(tech => 
      ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Redis', 'SQLite'].includes(tech)
    ).slice(0, 6),
    devops: technologies.filter(tech => 
      ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'CI/CD', 'Jenkins'].includes(tech)
    ).slice(0, 6),
    tools: technologies.filter(tech => 
      ['Git', 'GitHub', 'VS Code', 'Webpack', 'Babel', 'npm', 'yarn'].includes(tech)
    ).slice(0, 6),
    other: technologies.filter(tech => 
      !['React', 'JavaScript', 'HTML', 'CSS', 'TypeScript', 'Vue', 'Angular',
        'Node.js', 'Express', 'Python', 'Django', 'Flask', 'PHP', 'Java', 'C#',
        'MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Redis', 'SQLite',
        'Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'CI/CD', 'Jenkins',
        'Git', 'GitHub', 'VS Code', 'Webpack', 'Babel', 'npm', 'yarn'].includes(tech)
    ).slice(0, 6)
  };

  // Ensure we have 6 items per face, fill with empty strings if needed
  Object.keys(groupedTech).forEach(key => {
    while (groupedTech[key].length < 6) {
      groupedTech[key].push('');
    }
  });

  // Auto-rotation effect
  useEffect(() => {
    let interval;
    
    if (!isHovered) {
      let rotationX = 0;
      let rotationY = 0;
      
      interval = setInterval(() => {
        rotationY += 1;
        if (rotationY >= 360) rotationY = 0;
        
        controls.start({
          rotateX: rotationX,
          rotateY: rotationY,
          transition: { duration: 0.1, ease: "linear" }
        });
      }, 100);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, controls]);

  const cubeFaces = [
    { name: 'Front', color: '#ff7edb', technologies: groupedTech.frontend, rotateX: 0, rotateY: 0, category: 'Frontend' },
    { name: 'Back', color: '#00ffc8', technologies: groupedTech.backend, rotateX: 0, rotateY: 180, category: 'Backend' },
    { name: 'Right', color: '#ffcc00', technologies: groupedTech.devops, rotateX: 0, rotateY: 90, category: 'DevOps' },
    { name: 'Left', color: '#7928ca', technologies: groupedTech.database, rotateX: 0, rotateY: -90, category: 'Database' },
    { name: 'Top', color: '#ff4ecd', technologies: groupedTech.tools, rotateX: 90, rotateY: 0, category: 'Tools' },
    { name: 'Bottom', color: '#00b8ff', technologies: groupedTech.other, rotateX: -90, rotateY: 0, category: 'Other' }
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        perspective: '1200px',
        my: 4
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={controls}
        initial={{ rotateX: 0, rotateY: 0 }}
        whileHover={{ scale: 1.05 }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={0.1}
        style={{
          width: '200px',
          height: '200px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          cursor: 'grab'
        }}
      >
        {cubeFaces.map((face, index) => (
          <Box
            key={face.name}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: `rgba(26, 31, 46, 0.8)`,
              border: `2px solid ${face.color}`,
              borderRadius: '12px',
              boxShadow: `0 0 15px ${face.color}`,
              transform: `rotateX(${face.rotateX}deg) rotateY(${face.rotateY}deg) translateZ(100px)`,
              backfaceVisibility: 'hidden',
              transition: 'box-shadow 0.3s ease',
              '&:hover': {
                boxShadow: `0 0 25px ${face.color}`
              }
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                color: face.color,
                textShadow: `0 0 5px ${face.color}`,
                mb: 1,
                fontWeight: 'bold'
              }}
            >
              {face.category}
            </Typography>
            
            <Box 
              sx={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 1,
                width: '80%'
              }}
            >
              {face.technologies.map((tech, i) => (
                <Typography
                  key={i}
                  variant="body2"
                  sx={{
                    color: tech ? theme.palette.text.primary : 'transparent',
                    textAlign: 'center',
                    fontSize: '0.75rem',
                    padding: '4px',
                    borderRadius: '4px',
                    background: tech ? `rgba(${parseInt(face.color.slice(1, 3), 16)}, ${parseInt(face.color.slice(3, 5), 16)}, ${parseInt(face.color.slice(5, 7), 16)}, 0.1)` : 'transparent',
                    border: tech ? `1px solid ${face.color}` : 'none',
                    textShadow: tech ? `0 0 2px ${face.color}` : 'none'
                  }}
                >
                  {tech || '.'}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </motion.div>
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
          Drag to rotate • Click to interact
        </Typography>
      </Box>
    </Box>
  );
};

export default TechStackCube;
