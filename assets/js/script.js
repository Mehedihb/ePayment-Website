
// JavaScript to handle the custom select behavior
document.addEventListener("DOMContentLoaded", function () {
  var customSelect = document.querySelector(".custom-select");
  var selectedOption = customSelect.querySelector(".select-selected");
  var dropdownItems = customSelect.querySelector(".select-items").children;

  selectedOption.addEventListener("click", function () {
    var selectItems = this.nextElementSibling;
    selectItems.style.display = selectItems.style.display === "block" ? "none" : "block";
  });

  for (var i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener("click", function () {
      selectedOption.textContent = this.textContent;
      selectedOption.click();
    });
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   var customSelect = document.querySelector(".custom-select");
//   var selectedOption = customSelect.querySelector(".select-selected");
//   var dropdownItems = customSelect.querySelector(".select-items").children;

//   selectedOption.addEventListener("click", function () {
//     var selectItems = this.nextElementSibling;
//     selectItems.style.display = selectItems.style.display === "block" ? "none" : "block";
//     selectedOption.classList.add("clickedColor"); // Add the .clickedColor class to selectedOption
//   });

//   for (var i = 0; i < dropdownItems.length; i++) {
//     dropdownItems[i].addEventListener("click", function () {
//       selectedOption.textContent = this.textContent;
//       selectedOption.click();
//     });
//   }
// });



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











































