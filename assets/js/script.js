/********************
header
********************/
// Function to handle scroll event and toggle class 'fixed' for .header-1
const handleScrollHeader1 = () => {
    const header1 = document.querySelector('.header');
    if (window.scrollY > 50) {
      header1.classList.add('fixed');
    } else {
      header1.classList.remove('fixed');
    }
  };
  
  // Add event listeners for scroll events
  window.addEventListener('scroll', handleScrollHeader1);
  



























































