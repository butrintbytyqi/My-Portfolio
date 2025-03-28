import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

// Simple component without Prism.js dependency
const CodeTypingAnimation = ({ 
  codeSnippets = [], 
  typingSpeed = 30,
  pauseBetweenSnippets = 2000,
  language = 'javascript'
}) => {
  const theme = useTheme();
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Typing effect
  useEffect(() => {
    if (!codeSnippets.length) return;
    
    const currentSnippet = codeSnippets[currentSnippetIndex];
    
    if (isTyping) {
      if (displayedCode.length < currentSnippet.length) {
        const timeout = setTimeout(() => {
          // Type the next character
          setDisplayedCode(currentSnippet.substring(0, displayedCode.length + 1));
          
          // Random typing speed variation for realism
          const randomVariation = Math.random() * 50 - 25; // -25 to +25ms
          return typingSpeed + randomVariation;
        }, typingSpeed);
        
        return () => clearTimeout(timeout);
      } else {
        // Finished typing current snippet
        setIsTyping(false);
        const timeout = setTimeout(() => {
          // Move to next snippet after pause
          setCurrentSnippetIndex((currentSnippetIndex + 1) % codeSnippets.length);
          setDisplayedCode('');
          setIsTyping(true);
        }, pauseBetweenSnippets);
        
        return () => clearTimeout(timeout);
      }
    }
  }, [codeSnippets, currentSnippetIndex, displayedCode, isTyping, typingSpeed, pauseBetweenSnippets]);
  
  // Simple syntax highlighting function
  const applySimpleSyntaxHighlighting = (code) => {
    const lines = code.split('\n');
    
    return lines.map((line, lineIndex) => {
      // Apply different styling to different parts of the code
      const highlightedLine = line
        .replace(/\/\/.*/g, '<span style="color: #6a9955;">$&</span>') // Comments
        .replace(/["'`].*?["'`]/g, '<span style="color: #ce9178;">$&</span>') // Strings
        .replace(/\b(const|let|var|function|class|return|if|else|for|while)\b/g, '<span style="color: #569cd6;">$&</span>') // Keywords
        .replace(/\b(true|false|null|undefined|this)\b/g, '<span style="color: #569cd6;">$&</span>') // Constants
        .replace(/\b(\d+)\b/g, '<span style="color: #b5cea8;">$&</span>'); // Numbers
      
      return (
        <div key={lineIndex} style={{ display: 'flex' }}>
          <span style={{ color: 'rgba(255, 255, 255, 0.3)', minWidth: '40px', textAlign: 'right', paddingRight: '16px' }}>
            {lineIndex + 1}
          </span>
          <span dangerouslySetInnerHTML={{ __html: highlightedLine }} />
        </div>
      );
    });
  };
  
  // Determine the file name and icon based on language
  const getFileDetails = () => {
    switch(language) {
      case 'javascript':
        return { name: 'script.js', icon: '📄' };
      case 'jsx':
        return { name: 'Component.jsx', icon: '⚛️' };
      case 'css':
        return { name: 'styles.css', icon: '🎨' };
      case 'python':
        return { name: 'main.py', icon: '🐍' };
      default:
        return { name: 'code.txt', icon: '📝' };
    }
  };
  
  const fileDetails = getFileDetails();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box 
        sx={{ 
          position: 'relative',
          backgroundColor: '#1a1f2e', 
          borderRadius: '8px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 126, 219, 0.5)',
          overflow: 'hidden',
          fontFamily: '"Fira Code", monospace',
          border: `1px solid ${theme.palette.divider}`,
          mb: 4
        }}
      >
        {/* Code editor header */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '8px 16px',
            borderBottom: `1px solid ${theme.palette.divider}`,
            backgroundColor: 'rgba(26, 31, 46, 0.8)',
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: theme.palette.text.secondary,
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>{fileDetails.icon}</span>
            <span>{fileDetails.name}</span>
          </Typography>
          
          <Box sx={{ display: 'flex', gap: '6px' }}>
            <Box 
              sx={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: '#ff5f56' 
              }} 
            />
            <Box 
              sx={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: '#ffbd2e' 
              }} 
            />
            <Box 
              sx={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: '#27c93f' 
              }} 
            />
          </Box>
        </Box>
        
        {/* Code content */}
        <Box 
          sx={{ 
            padding: '16px',
            overflowX: 'auto',
            position: 'relative',
            fontFamily: '"Fira Code", monospace',
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#d4d4d4',
            backgroundColor: '#1a1f2e'
          }}
        >
          <div>
            {applySimpleSyntaxHighlighting(displayedCode)}
            {cursorVisible && isTyping && (
              <span 
                style={{ 
                  display: 'inline-block',
                  width: '2px',
                  height: '1.2em',
                  backgroundColor: '#ff7edb',
                  verticalAlign: 'middle',
                  marginLeft: '2px',
                  boxShadow: '0 0 5px #ff7edb'
                }}
              />
            )}
          </div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default CodeTypingAnimation;
