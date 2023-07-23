// Function to handle the 'load' event
const handleWindowLoad = () => {
    document.body.classList.add('loaded');
  };
  
  // Add event listener for the 'load' event
  window.addEventListener('load', handleWindowLoad);
  

/********************
header
********************/
// Function to handle scroll event and toggle class 'fixed' for .header-1
const handleScrollHeader1 = () => {
    const header1 = document.querySelector('.header-1');
    if (window.scrollY > 50) {
      header1.classList.add('fixed');
    } else {
      header1.classList.remove('fixed');
    }
  };
  
  // Add event listeners for scroll events
  window.addEventListener('scroll', handleScrollHeader1);
  



/********************
accordion
********************/
// Function to handle 'hide.bs.collapse' event
const handleHideCollapse = (e) => {
    const parentId = e.target.closest('.card').id;
    document.querySelectorAll(`#${parentId} > .card-header > h5`).forEach(h5 => {
      h5.classList.add('hidden');
    });
  };
  
  // Function to handle 'show.bs.collapse' event
  const handleShowCollapse = (e) => {
    const parentId = e.target.closest('.card').id;
    document.querySelectorAll(`#${parentId} > .card-header > h5`).forEach(h5 => {
      h5.classList.remove('hidden');
    });
  };
  
  // Add event listeners for 'hide.bs.collapse' and 'show.bs.collapse' events
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('hide.bs.collapse', handleHideCollapse);
    card.addEventListener('show.bs.collapse', handleShowCollapse);
  });
  



























































