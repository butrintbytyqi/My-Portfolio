import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children, direction = 'up', delay = 0, duration = 0.5 }) => {
  // Define animation variants based on direction
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'down':
        return {
          hidden: { y: -50, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'left':
        return {
          hidden: { x: 50, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case 'right':
        return {
          hidden: { x: -50, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case 'scale':
        return {
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1 }
        };
      case 'rotate':
        return {
          hidden: { rotate: -5, opacity: 0, scale: 0.95 },
          visible: { rotate: 0, opacity: 1, scale: 1 }
        };
      case 'glitch':
        return {
          hidden: { opacity: 0, x: 0 },
          visible: (i) => ({
            opacity: 1,
            transition: {
              delay: i * 0.05,
              type: 'spring',
              damping: 12,
              stiffness: 100,
              opacity: { duration: 0.2 },
              x: {
                duration: 0.3,
                repeat: 2,
                repeatType: 'mirror',
                ease: [0.25, 0.1, 0.25, 1.0]
              }
            }
          })
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  const variants = getVariants();
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0] // Custom cubic bezier for a more natural feel
      }}
      custom={delay}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
