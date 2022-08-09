// The Global Variables
const sections = document.querySelectorAll(".section");
const ul = document.querySelector("#menu");
let sectionsCount = 1;
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const topBtn = document.querySelector("#top-btn");
// building the nav dynamically based on the number of sections
sections.forEach((section) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.innerHTML = section.dataset.nav;
  a.dataset.sectionId = section.id;
  li.appendChild(a);
  ul.appendChild(li);
  sectionsCount++;
  // Scrolling into the section when the nav is clicked
  a.addEventListener("click", (e) => {
    e.preventDefault();
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* On scroll event add active states to the section and the nav,
 and only show the to top button scrolls down the page */
let isScrolling;
window.addEventListener("scroll", (e) => {
  // Add the active states when a section is in the viewport
  sections.forEach((section) => {
    const sectionLocation = section.getBoundingClientRect().top;
    if (sectionLocation <= 100 && sectionLocation >= 0) {
      const link = document.querySelector(`[data-section-id="${section.id}"]`);
      removeAllLinksStates();
      removeAllSectionsStates();
      link.classList.add("active");
      section.classList.add("active");
    }
  });
  // Remove the active states when the hero section is in the viewport
  const headerLocation = header.getBoundingClientRect().top;
  if (headerLocation > -250) {
    removeAllLinksStates();
    removeAllSectionsStates();
  }
  // Hide the navbar after 1 second when the user stops scrolling
  window.clearTimeout(isScrolling);
  nav.classList.remove("scrolling");
  isScrolling = setTimeout(function () {
    if (this.oldScroll < this.scrollY) {
      nav.classList.add("scrolling");
    }
    this.oldScroll = this.scrollY;
  }, 1000);

  // Showing the top button when the user scrolls down
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
});

// Helper functions to remove all active states
const links = document.querySelectorAll("#menu li a");
let removeAllLinksStates = function () {
  links.forEach((link) => {
    link.classList.remove("active");
  });
};
let removeAllSectionsStates = function () {
  sections.forEach((section) => {
    section.classList.remove("active");
  });
};

// Showing a menu on mobile view when the hamburger is clicked
function showMenu() {
  const bars = document.querySelector(".menu-bar");
  nav.classList.toggle("active");
  bars.classList.toggle("active");
}

// Scrolling to the top of the page when the top button is clicked
function scrollBtn() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
