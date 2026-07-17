import React from 'react';

interface CollegeLogoProps {
  className?: string;
  onlyShield?: boolean;
  transparent?: boolean;
  variant?: 'white' | 'blue';
}

export default function CollegeLogo({ 
  className = 'w-6 h-6', 
  onlyShield = false, 
  transparent = false,
  variant = 'white'
}: CollegeLogoProps) {
  const fillColor = variant === 'blue' ? '#003d59' : '#ffffff';
  const rectColor = variant === 'blue' ? '#ffffff' : '#003d59';

  if (onlyShield) {
    return (
      <svg 
        viewBox="0 0 100 100" 
        className={className} 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer Shield Outline */}
        <path 
          d="M 12 12 L 88 23 L 88 77 L 50 93 L 12 77 Z" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="6" 
          strokeLinejoin="round" 
          strokeLinecap="round"
        />
        
        {/* Upper Castle Body with Crenellations and the 5 Embrasures (Holes) */}
        <path 
          d="M 23 54 L 19 44 L 19 34 L 23 34 L 23 28 L 27 28 L 27 34 L 31 34 L 31 28 L 35 28 L 35 34 L 39 34 L 39 38 L 43 38 L 43 24 L 57 24 L 57 38 L 61 38 L 61 34 L 65 34 L 65 28 L 69 28 L 69 34 L 73 34 L 73 28 L 77 28 L 77 34 L 81 34 L 81 44 L 77 54 Z 
             M 22 46 L 25 39 L 29 41 L 26 48 Z 
             M 35 43 L 37 36 L 41 37 L 39 44 Z 
             M 48 40 L 48 33 L 52 33 L 52 40 Z 
             M 61 44 L 59 37 L 63 36 L 65 43 Z 
             M 74 48 L 71 41 L 75 39 L 78 46 Z"
          fillRule="evenodd"
        />
        
        {/* Central Shield Base with the 3 Windows (Holes) */}
        <path 
          d="M 32 52 L 68 52 L 64 78 L 50 86 L 36 78 Z 
             M 41 58 L 45 58 L 45 66 L 41 66 Z 
             M 48 58 L 52 58 L 52 66 L 48 66 Z 
             M 55 58 L 59 58 L 59 66 L 55 66 Z"
          fillRule="evenodd"
        />
        
        {/* Left Leg */}
        <path d="M 23 54 L 21 72 L 25 73 L 27 54 Z" />
        
        {/* Right Leg */}
        <path d="M 77 54 L 79 72 L 75 73 L 73 54 Z" />
      </svg>
    );
  }

  // Entire Logo (Shield + Text "City College Dublin" lockup)
  return (
    <svg 
      viewBox="0 0 250 160" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {!transparent && (
        <rect width="250" height="160" fill={rectColor} />
      )}
      <g transform="translate(15, 30) scale(1.1)">
        {/* Outer Shield Outline */}
        <path 
          d="M 12 12 L 88 23 L 88 77 L 50 93 L 12 77 Z" 
          fill="none" 
          stroke={fillColor} 
          strokeWidth="6" 
          strokeLinejoin="round" 
          strokeLinecap="round"
        />
        
        {/* Upper Castle Body with Crenellations and the 5 Embrasures (Holes) */}
        <path 
          d="M 23 54 L 19 44 L 19 34 L 23 34 L 23 28 L 27 28 L 27 34 L 31 34 L 31 28 L 35 28 L 35 34 L 39 34 L 39 38 L 43 38 L 43 24 L 57 24 L 57 38 L 61 38 L 61 34 L 65 34 L 65 28 L 69 28 L 69 34 L 73 34 L 73 28 L 77 28 L 77 34 L 81 34 L 81 44 L 77 54 Z 
             M 22 46 L 25 39 L 29 41 L 26 48 Z 
             M 35 43 L 37 36 L 41 37 L 39 44 Z 
             M 48 40 L 48 33 L 52 33 L 52 40 Z 
             M 61 44 L 59 37 L 63 36 L 65 43 Z 
             M 74 48 L 71 41 L 75 39 L 78 46 Z"
          fill={fillColor}
          fillRule="evenodd"
        />
        
        {/* Central Shield Base with the 3 Windows (Holes) */}
        <path 
          d="M 32 52 L 68 52 L 64 78 L 50 86 L 36 78 Z 
             M 41 58 L 45 58 L 45 66 L 41 66 Z 
             M 48 58 L 52 58 L 52 66 L 48 66 Z 
             M 55 58 L 59 58 L 59 66 L 55 66 Z"
          fill={fillColor}
          fillRule="evenodd"
        />
        
        {/* Left Leg */}
        <path d="M 23 54 L 21 72 L 25 73 L 27 54 Z" fill={fillColor} />
        
        {/* Right Leg */}
        <path d="M 77 54 L 79 72 L 75 73 L 73 54 Z" fill={fillColor} />
      </g>

      {/* Typography: City College Dublin */}
      <text 
        x="125" 
        y="58" 
        fill={fillColor} 
        fontFamily="Inter, system-ui, -apple-system, sans-serif" 
        fontWeight="700" 
        fontSize="28"
        letterSpacing="-0.5"
      >
        City
      </text>
      <text 
        x="125" 
        y="92" 
        fill={fillColor} 
        fontFamily="Inter, system-ui, -apple-system, sans-serif" 
        fontWeight="700" 
        fontSize="28"
        letterSpacing="-0.5"
      >
        College
      </text>
      <text 
        x="125" 
        y="126" 
        fill={fillColor} 
        fontFamily="Inter, system-ui, -apple-system, sans-serif" 
        fontWeight="700" 
        fontSize="28"
        letterSpacing="-0.5"
      >
        Dublin
      </text>
    </svg>
  );
}
