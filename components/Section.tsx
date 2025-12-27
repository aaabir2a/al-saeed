import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
}

export default function Section({
  children,
  id,
  className = '',
  background = 'white',
  padding = 'lg'
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-neutral-50/80',
    primary: 'bg-gradient-to-br from-primary-50 via-white to-primary-100/50',
    dark: 'bg-neutral-900 text-white'
  };

  const paddings = {
    sm: 'py-16 md:py-20',
    md: 'py-20 md:py-28',
    lg: 'py-24 md:py-36'
  };

  return (
    <section id={id} className={`${backgrounds[background]} ${paddings[padding]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}