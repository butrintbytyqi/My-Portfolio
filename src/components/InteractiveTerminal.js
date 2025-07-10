import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const InteractiveTerminal = ({ commands = [], initialDelay = 1000 }) => {
  const theme = useTheme();
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedOutput, setDisplayedOutput] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const terminalRef = useRef(null);

  // Typing effect for commands
  useEffect(() => {
    if (currentCommandIndex >= commands.length) return;
    
    const startTyping = () => {
      setIsTyping(true);
      const typeNextChar = () => {
        if (currentCharIndex < commands[currentCommandIndex].text.length) {
          setCurrentCharIndex(prev => prev + 1);
        } else {
          setIsTyping(false);
          // Show output after command is fully typed
          setTimeout(() => {
            setDisplayedOutput(prev => [
              ...prev, 
              { 
                id: `output-${currentCommandIndex}`,
                text: commands[currentCommandIndex].output,
                type: 'output'
              }
            ]);
            
            // Move to next command after a delay
            setTimeout(() => {
              setCurrentCommandIndex(prev => prev + 1);
              setCurrentCharIndex(0);
            }, 1000);
          }, 500);
        }
      };
      
      const typingInterval = setInterval(typeNextChar, 50);
      return () => clearInterval(typingInterval);
    };
    
    // Initial delay before starting to type
    const delay = currentCommandIndex === 0 ? initialDelay : 500;
    const timer = setTimeout(startTyping, delay);
    
    return () => clearTimeout(timer);
  }, [currentCommandIndex, currentCharIndex, commands, initialDelay]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedOutput, currentCharIndex]);

  return (
    <motion.div
      initial={{ perspective: 1000, rotateX: 20, rotateY: -10 }}
      whileHover={{ rotateX: 0, rotateY: 0, transition: { duration: 0.5 } }}
      style={{ 
        transformStyle: 'preserve-3d',
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto'
      }}
    >
      <Box 
        sx={{
          position: 'relative',
          width: '100%',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 126, 219, 0.5)',
          transform: 'translateZ(0)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, rgba(255, 126, 219, 0.1), rgba(0, 255, 200, 0.1))',
            pointerEvents: 'none',
            zIndex: 1
          }
        }}
      >
        {/* Terminal Header */}
        <Box 
          className="terminal-header"
          sx={{
            position: 'relative',
            zIndex: 2
          }}
        >
          <Box className="terminal-dots">
            <Box className="terminal-dot red"></Box>
            <Box className="terminal-dot yellow"></Box>
            <Box className="terminal-dot green"></Box>
          </Box>
          <Box className="terminal-title">butrint@portfolio ~ </Box>
        </Box>
        
        {/* Terminal Body */}
        <Box 
          className="terminal-body"
          ref={terminalRef}
          sx={{
            height: '350px',
            overflowY: 'auto',
            position: 'relative',
            zIndex: 2,
            p: 2,
            fontFamily: '"Fira Code", monospace',
            fontSize: '0.9rem',
            lineHeight: 1.6,
            '&::-webkit-scrollbar': {
              width: '8px'
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(0, 0, 0, 0.1)'
            },
            '&::-webkit-scrollbar-thumb': {
              background: theme.palette.primary.main,
              borderRadius: '4px'
            }
          }}
        >
          {/* Display previous commands and outputs */}
          {displayedOutput.map((item, index) => (
            <Box key={item.id} sx={{ mb: 1.5 }}>
              {item.type === 'command' && (
                <Box sx={{ display: 'flex' }}>
                  <Typography 
                    component="span" 
                    sx={{ 
                      color: theme.palette.primary.main, 
                      mr: 1, 
                      fontWeight: 'bold' 
                    }}
                  >
                    &gt;
                  </Typography>
                  <Typography 
                    component="span" 
                    sx={{ 
                      color: theme.palette.secondary.main,
                      fontFamily: '"Fira Code", monospace'
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              )}
              {item.type === 'output' && (
                <Box 
                  sx={{ 
                    pl: 3, 
                    color: theme.palette.text.primary,
                    whiteSpace: 'pre-wrap',
                    fontFamily: '"Fira Code", monospace'
                  }}
                >
                  {item.text}
                </Box>
              )}
            </Box>
          ))}
          
          {/* Current command being typed */}
          {currentCommandIndex < commands.length && (
            <Box sx={{ display: 'flex' }}>
              <Typography 
                component="span" 
                sx={{ 
                  color: theme.palette.primary.main, 
                  mr: 1, 
                  fontWeight: 'bold' 
                }}
              >
                &gt;
              </Typography>
              <Typography 
                component="span" 
                sx={{ 
                  color: theme.palette.secondary.main,
                  fontFamily: '"Fira Code", monospace'
                }}
              >
                {commands[currentCommandIndex].text.substring(0, currentCharIndex)}
                {isTyping && cursorVisible && (
                  <Box 
                    component="span" 
                    sx={{ 
                      borderRight: `2px solid ${theme.palette.primary.main}`,
                      ml: '1px',
                      animation: 'blink 1s step-end infinite'
                    }}
                  >
                    &nbsp;
                  </Box>
                )}
              </Typography>
            </Box>
          )}
          
          {/* When all commands are finished, show a blinking cursor */}
          {currentCommandIndex >= commands.length && (
            <Box sx={{ display: 'flex' }}>
              <Typography 
                component="span" 
                sx={{ 
                  color: theme.palette.primary.main, 
                  mr: 1, 
                  fontWeight: 'bold' 
                }}
              >
                &gt;
              </Typography>
              {cursorVisible && (
                <Box 
                  component="span" 
                  sx={{ 
                    borderRight: `2px solid ${theme.palette.primary.main}`,
                    height: '1.2em',
                    display: 'inline-block'
                  }}
                >
                  &nbsp;
                </Box>
              )}
            </Box>
          )}
        </Box>
        
        {/* Reflection effect */}
        <Box 
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '40%',
            background: 'linear-gradient(to bottom, rgba(26, 31, 46, 0) 0%, rgba(26, 31, 46, 0.3) 100%)',
            transform: 'rotateX(180deg)',
            opacity: 0.4,
            filter: 'blur(2px)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
        
        {/* Scan line effect */}
        <Box 
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.05) 50%)',
            backgroundSize: '100% 4px',
            pointerEvents: 'none',
            zIndex: 2,
            opacity: 0.15
          }}
        />
        
        {/* Glitch effect */}
        <Box 
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'transparent',
            pointerEvents: 'none',
            zIndex: 3,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '2px',
              background: theme.palette.primary.main,
              opacity: 0.7,
              animation: 'glitch-scan 3s linear infinite'
            }
          }}
        />
      </Box>
    </motion.div>
  );
};

export default InteractiveTerminal;
