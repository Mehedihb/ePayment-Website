

(function () {
  var wizard = {
    formstate: 0,
    inactiveSections: [1, 2],
    setInactiveSections: function () {
      if (this.formstate === 0) {
        this.inactiveSections = [1, 2];
      } else if (this.formstate === 1) {
        this.inactiveSections = [0, 2];
      } else {
        this.inactiveSections = [0, 1];
      }
    },
    formsections: ['#aboutcont', '#addrescont', '#verifycont'],
    circlesections: ['.aboutblock .circulo', '.addressblock .circulo', '.verifyblock .circulo'],
    prevbtn: 'prevbtn',
    nextbtn: 'nextbtn',

    initiateForm: function () {
      var currsection = document.querySelector(this.formsections[this.formstate]);
      var inactiveSecta = document.querySelector(this.formsections[this.inactiveSections[0]]);
      var inactiveSectb = document.querySelector(this.formsections[this.inactiveSections[1]]);
      var currcircle = document.querySelector(this.circlesections[this.formstate]);

      var progressbar = document.querySelector('#progresswizard');
      var currsectionprogress = currsection.getAttribute('data-progress');

      progressbar.style.width = currsectionprogress;
      currsection.style.display = "block";
      inactiveSecta.style.display = "none";
      inactiveSectb.style.display = "none";

      if (this.formstate === 0) {
        document.getElementById(this.prevbtn).style.display = "none";
      } else {
        document.getElementById(this.prevbtn).style.display = "inline-block";
      }

      currcircle.classList.add("activecirculo");
      this.setInactiveCircles();

      if (this.formstate === 2) {
        document.querySelector("#nextbtn").style.display = "none";
        document.querySelector("#submitForm").style.display = "inline-block";
      } else {
        document.querySelector("#nextbtn").style.display = "inline-block";
        document.querySelector("#submitForm").style.display = "none";
      }
    },

    nextSection: function () {
      if (this.formstate < 2) {
        this.formstate++;
        this.setInactiveSections();
        wizard.initiateForm();
      }
    },

    prevSection: function () {
      if (this.formstate > 0) {
        this.formstate--;
        this.setInactiveSections();
        wizard.initiateForm();
      }
    },
  };

  wizard.initiateForm();
  document.getElementById(wizard.nextbtn).addEventListener("click", function () { wizard.nextSection(); });
  document.getElementById(wizard.prevbtn).addEventListener("click", function () { wizard.prevSection(); });
})();














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











































