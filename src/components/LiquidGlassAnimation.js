import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

const LiquidGlassAnimation = ({ children, delay = 0, duration = 0.6 }) => {
  const glassVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      filter: 'blur(10px)',
      background: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      background: 'rgba(255, 255, 255, 0.1)',
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        background: {
          duration: duration * 1.5,
          delay: delay + 0.2,
        }
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={glassVariants}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Glass overlay with reflection effect */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '20px',
          zIndex: 1,
          pointerEvents: 'none',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
            animation: 'liquidReflection 3s ease-in-out infinite',
            animationDelay: `${delay}s`,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            animation: 'liquidGlow 4s ease-in-out infinite alternate',
            animationDelay: `${delay + 0.5}s`,
          }
        }}
      />
      
      {/* Content wrapper */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.3)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
          }
        }}
      >
        {children}
      </Box>
    </motion.div>
  );
};

export default LiquidGlassAnimation; 