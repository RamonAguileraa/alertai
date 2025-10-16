import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './button';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </motion.div>
    </Button>
  );
}
