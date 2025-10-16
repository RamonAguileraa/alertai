import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../libs/utils';

const LoadingSpinner = ({ 
  size = 'default',
  className,
  ...props 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    default: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  return (
    <motion.div
      className={cn(
        "inline-block border-2 border-gray-300 border-t-primary-500 rounded-full",
        sizeClasses[size],
        className
      )}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
      {...props}
    />
  );
};

export { LoadingSpinner };
