import React, { useState, useEffect } from 'react'

function useDarkMode() {
  const [darkMode, setdarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');

    if (savedMode === null) {
      setdarkMode(savedMode === 'dark')
      localStorage.setItem('mode', 'dark')
    } else if (savedMode === 'dark') {
      setdarkMode(savedMode === 'dark')
    } else {
      setdarkMode(false)
    }

  }, []);

  const toggleMode = () => {
    setdarkMode(!darkMode);
    darkMode ? localStorage.setItem('mode', 'light') : localStorage.setItem('mode', 'dark');
  }

  return [darkMode, toggleMode]
}

export default useDarkMode