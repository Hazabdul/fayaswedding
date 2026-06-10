import React, { useState, useEffect } from 'react';
// Import the consolidated premium wedding invitation template
import KeralaWeddingTemplate from '../AllTemplates';
import TriredPage from './TriredPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#invitation');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#invitation');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {currentPath === '#trired' ? <TriredPage /> : <KeralaWeddingTemplate />}
      
      <a 
        href={currentPath === '#trired' ? '#invitation' : '#trired'} 
        className="weddinginvites-sticky-pill" 
        aria-label={currentPath === '#trired' ? "Back to Wedding Invitation" : "Visit Wedding Invites by Trired Global"}
      >
        <span className="sticky-ripple"></span>
        <span className="sticky-ripple delay-1"></span>
        <svg viewBox="0 0 120 100" width="34" height="28" style={{ display: 'block', position: 'relative', zIndex: 2 }}>
          <defs>
            <linearGradient id="gold-grad-sticky" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ead6ad" />
              <stop offset="50%" stopColor="#c79b3b" />
              <stop offset="100%" stopColor="#8f6723" />
            </linearGradient>
          </defs>
          {/* Background trace pathway */}
          <path 
            d="M 12 18 L 27 18 L 47 82 L 32 82 L 12 18 L 32 82 L 47 82 C 52 45, 64 22, 64 16 C 64 10, 56 10, 56 16 C 56 22, 68 45, 73 82 L 88 82 L 108 18 L 93 18 L 73 82 L 88 82" 
            fill="none" 
            stroke="rgba(199, 155, 59, 0.18)" 
            strokeWidth="12" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Animated golden snake tracer */}
          <path 
            d="M 12 18 L 27 18 L 47 82 L 32 82 L 12 18 L 32 82 L 47 82 C 52 45, 64 22, 64 16 C 64 10, 56 10, 56 16 C 56 22, 68 45, 73 82 L 88 82 L 108 18 L 93 18 L 73 82 L 88 82" 
            fill="none" 
            stroke="url(#gold-grad-sticky)" 
            strokeWidth="12" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            pathLength="100"
            className="sticky-w-snake"
          />
        </svg>
      </a>
    </>
  );
}
