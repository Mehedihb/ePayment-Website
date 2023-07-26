/********************
header
********************/
// Function to handle scroll event and toggle class 'fixed' for .header-1
const handleScrollHeader1 = () => {
    const header1 = document.querySelector('.headerScroll');
    if (window.scrollY > 50) {
      header1.classList.add('fixed');
    } else {
      header1.classList.remove('fixed');
    }
  };
  
  // Add event listeners for scroll events
  window.addEventListener('scroll', handleScrollHeader1);
  





      // Start Category Sidebar Area
      var categorySidebar = document.querySelector('.category-sidebar');
      var categoryToggle = document.querySelectorAll('.category-menu , .category-menu-mobile');
      var categoryClose = document.querySelector('.categoryClose-btn')
      categoryToggle.forEach( (node) => {
        node.addEventListener('click', () => {
          categorySidebar.classList.toggle('show-hide');
        })
      })
      categoryClose.addEventListener("click", ()=>{
        categorySidebar.classList.remove('show-hide');
      })
    // End Category Sidebar Area















































