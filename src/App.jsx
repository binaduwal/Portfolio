import React, { useEffect, useState } from 'react'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer';

const App = () => {
   const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };
    useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [theme]);

  
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500 font-sans'>
      <LandingPage theme={theme} toggleTheme={toggleTheme} />
      <Footer/>
    </div>
  )
}

export default App
