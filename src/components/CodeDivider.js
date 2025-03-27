import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const CodeDivider = ({ text, color = 'primary' }) => {
  const theme = useTheme();
  
  // Determine color based on prop
  const getColor = () => {
    switch(color) {
      case 'primary':
        return theme.palette.primary.main;
      case 'secondary':
        return theme.palette.secondary.main;
      case 'yellow':
        return '#ffcc00';
      default:
        return color; // Use custom color if provided
    }
  };
  
  const dividerColor = getColor();
  
  // Animation variants
  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '100%',
      transition: { 
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  
  const bracketVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: 0.3,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  
  return (
    <Box 
      sx={{ 
        width: '100%',
        my: 6,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Box 
        sx={{ 
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: '800px',
          position: 'relative',
          mb: 1
        }}
      >
        <motion.div
          variants={bracketVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            fontSize: '24px',
            fontFamily: '"Fira Code", monospace',
            color: dividerColor,
            marginRight: '8px',
            fontWeight: 'bold',
            textShadow: `0 0 5px ${dividerColor}`
          }}
        >
          &lt;
        </motion.div>
        
        <Box sx={{ flex: 1, position: 'relative', height: '2px', mx: 1 }}>
          <Box 
            sx={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }}
          />
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              background: `linear-gradient(90deg, transparent, ${dividerColor}, transparent)`,
              boxShadow: `0 0 8px ${dividerColor}`
            }}
          />
        </Box>
        
        <motion.div
          variants={bracketVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            fontSize: '24px',
            fontFamily: '"Fira Code", monospace',
            color: dividerColor,
            marginLeft: '8px',
            fontWeight: 'bold',
            textShadow: `0 0 5px ${dividerColor}`
          }}
        >
          /&gt;
        </motion.div>
      </Box>
      
      {text && (
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography
            variant="body2"
            sx={{ 
              fontFamily: '"Fira Code", monospace',
              color: dividerColor,
              opacity: 0.8,
              textAlign: 'center',
              fontStyle: 'italic'
            }}
          >
            {text}
          </Typography>
        </motion.div>
      )}
      
      {/* Code dots decoration */}
      <Box 
        sx={{ 
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          height: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          zIndex: -1,
          opacity: 0.3,
          pointerEvents: 'none'
        }}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <Box 
            key={index}
            sx={{ 
              width: '2px',
              height: '2px',
              borderRadius: '50%',
              backgroundColor: dividerColor,
              boxShadow: `0 0 3px ${dividerColor}`,
              animation: `pulse-${index} 3s infinite`
            }}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CodeDivider;
