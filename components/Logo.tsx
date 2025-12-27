import Image from 'next/image';
import { Building2 } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizes[size]} relative`}>
        {/* Replace with actual logo */}
        <div className={`${sizes[size]} bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-lg`}>
          <Building2 className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-6 h-6' : 'w-8 h-8'} text-white`} />
        </div>
      </div>
      {showText && (
        <div>
          <span className={`${textSizes[size]} font-bold text-neutral-900 font-display`}>
            Al Saeed
          </span>
          <p className="text-xs text-neutral-600 font-medium">Trading & Contracting</p>
        </div>
      )}
    </div>
  );
}