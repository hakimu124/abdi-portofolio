import React from 'react';

export function BentoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bento-card p-8 ${className}`}>
      {children}
    </div>
  );
}
