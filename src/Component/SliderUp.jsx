import React, { useState, useEffect } from 'react';

const SliderUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-10 right-15 z-50
        text-gray-400 hover:text-black 
        text-4xl font-bold uppercase 
        transition-all duration-300 ease-out 
        cursor-pointer
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}
      `}
    >
      <i className="bi bi-arrow-up-square"></i>
    </button>
  );
};

export default SliderUp;