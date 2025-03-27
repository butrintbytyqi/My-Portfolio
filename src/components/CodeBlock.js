import React from 'react';
import { Box, Typography } from '@mui/material';

const CodeBlock = ({ code, language = 'javascript', showLineNumbers = true, maxHeight = '400px' }) => {
  // Split code into lines
  const codeLines = code.trim().split('\n');
  
  // Simple syntax highlighting function
  const highlightSyntax = (line, lang) => {
    if (lang === 'javascript' || lang === 'js' || lang === 'jsx') {
      // Keywords
      line = line.replace(
        /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|default|async|await|try|catch|throw|new|this)\b/g, 
        '<span class="code-keyword">$1</span>'
      );
      
      // Strings
      line = line.replace(
        /(["'`])(.*?)\1/g, 
        '<span class="code-string">$1$2$1</span>'
      );
      
      // Comments
      line = line.replace(
        /(\/\/.*$|\/\*[\s\S]*?\*\/)/g, 
        '<span class="code-comment">$1</span>'
      );
      
      // Functions
      line = line.replace(
        /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g, 
        '<span class="code-function">$1</span>('
      );
    } else if (lang === 'html' || lang === 'xml') {
      // Tags
      line = line.replace(
        /(&lt;[\/]?[a-zA-Z0-9]+)([^&]*?)(&gt;)/g, 
        '<span class="code-keyword">$1</span>$2<span class="code-keyword">$3</span>'
      );
      
      // Attributes
      line = line.replace(
        /\s([a-zA-Z0-9-]+)=["']/g, 
        ' <span class="code-function">$1</span>="'
      );
      
      // Strings
      line = line.replace(
        /(["'])(.*?)\1/g, 
        '<span class="code-string">$1$2$1</span>'
      );
    } else if (lang === 'css' || lang === 'scss') {
      // Selectors
      line = line.replace(
        /([.#][a-zA-Z0-9_-]+)/g, 
        '<span class="code-function">$1</span>'
      );
      
      // Properties
      line = line.replace(
        /\b([a-zA-Z-]+):/g, 
        '<span class="code-keyword">$1</span>:'
      );
      
      // Values
      line = line.replace(
        /:\s*([^;]+);/g, 
        ': <span class="code-string">$1</span>;'
      );
    }
    
    return line;
  };

  // Escape HTML characters
  const escapeHtml = (text) => {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  return (
    <Box 
      className="code-block" 
      data-language={language}
      sx={{ 
        maxHeight: maxHeight,
        overflowY: 'auto',
        fontFamily: '"Fira Code", monospace',
        fontSize: '0.9rem',
        lineHeight: '1.5'
      }}
    >
      {codeLines.map((line, index) => (
        <Box key={index} className="code-line">
          {showLineNumbers && (
            <Typography 
              component="span" 
              className="code-line-number"
            >
              {index + 1}
            </Typography>
          )}
          <Typography 
            component="span" 
            className="code-line-content"
            dangerouslySetInnerHTML={{ 
              __html: highlightSyntax(escapeHtml(line), language) 
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default CodeBlock;
