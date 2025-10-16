import React from 'react';
import { Card } from './card';
import { motion } from 'framer-motion';
import { cn } from '../../libs/utils';

const AnimatedCard = ({ 
  children, 
  className, 
  delay = 0,
  duration = 0.5,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration,
        delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={cn("", className)}
      {...props}
    >
      <Card className="h-full">
        {children}
      </Card>
    </motion.div>
  );
};

export { AnimatedCard };
