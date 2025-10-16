import React from 'react';
import { Shield } from 'lucide-react';
import { cn } from '../../libs/utils';

const Logo = ({ className, size = 'default', showText = true, ...props }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'h-6 w-6';
      case 'lg':
        return 'h-12 w-12';
      case 'xl':
        return 'h-16 w-16';
      default:
        return 'h-8 w-8';
    }
  };

  const getTextSize = () => {
    switch (size) {
      case 'sm':
        return 'text-lg';
      case 'lg':
        return 'text-3xl';
      case 'xl':
        return 'text-4xl';
      default:
        return 'text-xl';
    }
  };

  return (
    <div className={cn("flex items-center space-x-2", className)} {...props}>
      <div className="relative">
        <Shield className={cn(getSizeClasses(), "text-primary-500")} />
        <div className="absolute inset-0 bg-primary-500 opacity-20 rounded-full blur-sm" />
      </div>
      {showText && (
        <span className={cn("font-bold text-gray-900", getTextSize())}>
          Klara POS
        </span>
      )}
    </div>
  );
};

export { Logo };
