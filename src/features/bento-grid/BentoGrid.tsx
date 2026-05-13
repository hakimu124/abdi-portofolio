import React from 'react';

export function BentoGrid({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${className}`}>
      {children}
    </div>
  );
}

export function BentoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bento-card p-8 ${className}`}>
      {children}
    </div>
  );
}
