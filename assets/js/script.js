// >>>>> Start JavaScript to handle the custom select behavior
document.addEventListener("DOMContentLoaded", function () {
  const customSelects = document.querySelectorAll(".custom-select");

  customSelects.forEach(customSelect => {
    const selectedOption = customSelect.querySelector(".select-selected");
    const dropdownItems = customSelect.querySelectorAll(".select-items > div");
    const isDisabled = customSelect.classList.contains("disabled"); // Check for the 'disabled' class

    if (!isDisabled) {
      selectedOption.addEventListener("click", function () {
        const selectItems = this.nextElementSibling;
        selectItems.style.display = selectItems.style.display === "block" ? "none" : "block";
      });

      dropdownItems.forEach(item => {
        item.addEventListener("click", function () {
          selectedOption.textContent = this.textContent;
          selectedOption.click();
        });
      });
    }
  });
});

// <<<<< End JavaScript to handle the custom select behavior

// >>>>> Start Function to handle scroll event and toggle class 'fixed' for .headerScroll
const handleScrollHeader = () => {
  const header1 = document.querySelector('.headerScroll');
  if (window.scrollY > 50) {
    header1.classList.add('fixed');
  } else {
    header1.classList.remove('fixed');
  }
};
window.addEventListener('scroll', handleScrollHeader);
// <<<<< End Function to handle scroll event and toggle class 'fixed' for .headerScroll

// >>>>> Start Category Sidebar Area
var categorySidebar = document.querySelector('.menu-sidebar');
var categoryToggle = document.querySelectorAll('.mobile-hamburger');
var menuClose = document.querySelector('.menuClose-btn')
categoryToggle.forEach((node) => {
  node.addEventListener('click', () => {
    categorySidebar.classList.toggle('show-hide');
  })
})
menuClose.addEventListener("click", () => {
  categorySidebar.classList.remove('show-hide');
})
// <<<<< End Category Sidebar Area
