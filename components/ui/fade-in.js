"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../libs/utils';

const FadeIn = ({ 
  children, 
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 20,
  ...props 
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    }
  };

  // Renderizar sin animación en el servidor
  if (!isMounted) {
    return (
      <div className={cn("", className)} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ 
        duration,
        delay,
        ease: "easeOut"
      }}
      className={cn("", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export { FadeIn };
