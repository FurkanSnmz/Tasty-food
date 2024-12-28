import React, { useEffect } from 'react';

const ScrollTop = () => {
  useEffect(() => {
    const scrollTopButton = document.getElementById('scroll-top');
    
    const handleScrollTop = () => {
      if (window.scrollY >= 560) {
        scrollTopButton.classList.add('show-scroll');
      } else {
        scrollTopButton.classList.remove('show-scroll');
      }
    };
    
    window.addEventListener('scroll', handleScrollTop);
    
    return () => {
      window.removeEventListener('scroll', handleScrollTop);
    };
  }, []);

  return (
    <a href="#" className="scrolltop" id="scroll-top">
      <i className="bx bx-chevron-up scrolltop__icon"></i>
    </a>
  );
};

export default ScrollTop;