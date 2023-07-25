
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
