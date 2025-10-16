"use client";

import { useState, useEffect } from 'react';

const DynamicImport = ({ children, fallback = null }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return fallback;
  }

  return children;
};

export default DynamicImport;

