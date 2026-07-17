import React from 'react';

interface CollegeLogoProps {
  className?: string;
  onlyShield?: boolean;
  transparent?: boolean;
  variant?: 'white' | 'blue';
}

export default function CollegeLogo({
  className = 'h-10 w-auto',
}: CollegeLogoProps) {
  return (
    <img
      src="/favicon.png"
      alt="City College Dublin Library"
      className={className}
    />
  );
}
