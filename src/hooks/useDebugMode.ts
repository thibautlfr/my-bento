import { useState, useEffect } from 'react';

export function useDebugMode() {
  const [isDebug, setIsDebug] = useState(() => window.location.hash === '#debug');

  useEffect(() => {
    const handleHashChange = () => {
      setIsDebug(window.location.hash === '#debug');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return isDebug;
}
