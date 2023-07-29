// >>>>> Start Wizard Form Area
const navigateToFormStep = (stepNumber) => {
  // Hide all form steps
  document.querySelectorAll(".step-details").forEach((formStepElement) => {
    formStepElement.classList.add("d-none");
  });
  // Mark all form steps as unfinished
  document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
    formStepHeader.classList.add("form-stepper-unfinished");
    formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
  });
  // Show the current form step (as passed to the function).
  document.querySelector("#step-" + stepNumber).classList.remove("d-none");
  // Select the form step circle (progress bar).
  const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
  //Mark the current form step as active.
  formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
  formStepCircle.classList.add("form-stepper-active");
  /**
   * Loop through each form step circles.
   * This loop will continue up to the current step number.
   * Example: If the current step is 3,
   * then the loop will perform operations for step 1 and 2.
   */
  for (let index = 0; index < stepNumber; index++) {
    //Select the form step circle (progress bar).
    const formStepCircle = document.querySelector('li[step="' + index + '"]');
    // Check if the element exist. If yes, then proceed.
    if (formStepCircle) {
      // Mark the form step as completed.
      formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
      formStepCircle.classList.add("form-stepper-completed");
    }
  }
};
//Select all form navigation buttons, and loop through them.
document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
  // Add a click event listener to the button.
  formNavigationBtn.addEventListener("click", () => {
    // Get the value of the step.
    const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
    // Call the function to navigate to the target form step.
    navigateToFormStep(stepNumber);
  });
});
// <<<<< End Wizard Form Area

// >>>>> Start JavaScript to handle the custom select behavior
document.addEventListener("DOMContentLoaded", function () {
  const customSelects = document.querySelectorAll(".custom-select");

  customSelects.forEach(customSelect => {
    const selectedOption = customSelect.querySelector(".select-selected");
    const dropdownItems = customSelect.querySelectorAll(".select-items > div");

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
var categorySidebar = document.querySelector('.category-sidebar');
var categoryToggle = document.querySelectorAll('.category-menu , .category-menu-mobile');
var categoryClose = document.querySelector('.categoryClose-btn')
categoryToggle.forEach((node) => {
  node.addEventListener('click', () => {
    categorySidebar.classList.toggle('show-hide');
  })
})
categoryClose.addEventListener("click", () => {
  categorySidebar.classList.remove('show-hide');
})
// <<<<< End Category Sidebar Area
