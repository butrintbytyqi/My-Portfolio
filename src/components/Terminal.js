import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';

const Terminal = ({ commands = [], autoType = true, typingSpeed = 50, prompt = '>', title = 'terminal' }) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (!autoType || commands.length === 0) return;

    const typeChar = () => {
      if (currentLine >= commands.length) return;

      const command = commands[currentLine];
      
      if (currentChar < command.command.length) {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (!newLines[currentLine]) {
            newLines[currentLine] = { command: '', output: command.output, type: command.type || 'command' };
          }
          newLines[currentLine].command = command.command.substring(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar(prev => prev + 1);
      } else {
        // Command fully typed, move to next line after a delay
        setTimeout(() => {
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }, 500);
      }
    };

    const timer = setTimeout(typeChar, typingSpeed);
    return () => clearTimeout(timer);
  }, [commands, currentLine, currentChar, autoType, typingSpeed]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedLines]);

  // If not auto-typing, display all commands at once
  useEffect(() => {
    if (!autoType) {
      setDisplayedLines(commands.map(cmd => ({ 
        command: cmd.command, 
        output: cmd.output,
        type: cmd.type || 'command'
      })));
    }
  }, [commands, autoType]);

  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Box className="terminal-header">
        <Box className="terminal-dots">
          <Box className="terminal-dot red"></Box>
          <Box className="terminal-dot yellow"></Box>
          <Box className="terminal-dot green"></Box>
        </Box>
        <Box className="terminal-title">{title}</Box>
      </Box>
      <Box 
        className="terminal-body" 
        ref={terminalRef}
        sx={{ 
          maxHeight: '400px', 
          overflowY: 'auto',
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.9rem',
          lineHeight: '1.5'
        }}
      >
        {displayedLines.map((line, index) => (
          <Box key={index}>
            <Box className="terminal-line">
              <Typography component="span" className="terminal-prompt">{prompt}</Typography>
              <Typography 
                component="span" 
                className="terminal-command"
                sx={{ 
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}
              >
                {line.command}
              </Typography>
            </Box>
            {line.output && (
              <Box className="terminal-output" sx={{ whiteSpace: 'pre-wrap', mb: 2 }}>
                {line.output}
              </Box>
            )}
          </Box>
        ))}
        {autoType && currentLine < commands.length && (
          <Box className="terminal-line">
            <Typography component="span" className="terminal-prompt">{prompt}</Typography>
            <Typography 
              component="span" 
              className="terminal-command"
              sx={{ whiteSpace: 'pre-wrap' }}
            >
              {displayedLines[currentLine]?.command || ''}
            </Typography>
            <Typography 
              component="span" 
              sx={{ 
                animation: 'blink-caret 0.75s step-end infinite',
                borderRight: '2px solid',
                borderColor: 'primary.main',
                height: '1rem',
                display: 'inline-block',
                ml: 0.5
              }}
            >
              &nbsp;
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Terminal;
