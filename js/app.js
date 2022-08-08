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
  a.href = `#section${sectionsCount}`;
  a.innerHTML = section.dataset.nav;
  li.appendChild(a);
  ul.appendChild(li);
  sectionsCount++;
});

// Global variable after creating the nav dynamically
const links = document.querySelectorAll("#menu li a");

// Scrolling to the correct section when the link is clicked
links.forEach((link) => {
  link.addEventListener("click", () => {
    const Id = link.getAttribute("href");
    const section = document.querySelector(Id);
    section.scrollIntoView({ behavior: "smooth" });
    removeAllLinksStates();
    link.classList.add("active");
  });
});

// Setting sections as active on scroll event
let isScrolling;
window.addEventListener("scroll", (e) => {
  sections.forEach((section) => {
    const sectionLocation = section.getBoundingClientRect().top;
    if (sectionLocation <= 100 && sectionLocation >= 0) {
      // Remove all active links when scrolling
      removeAllLinksStates();
      removeAllSectionsStates();
      // Add the active state to the corresponding section
      const link = document.querySelector(`a[href='#${section.id}']`);
      link.classList.add("active");
      section.classList.add("active");
    }
  });
  const headerLocation = header.getBoundingClientRect().top;
  if (headerLocation > -250) {
    removeAllLinksStates();
    removeAllSectionsStates();
  }
  // Clear The timeout and remove the class throughout the scroll
  window.clearTimeout(isScrolling);
  nav.classList.remove("scrolling");

  // if the user stops scrolling for more than 1s && is scrolling from top to bottom
  // then add the class scrolling
  isScrolling = setTimeout(function () {
    // this condition is to prevent the class to be added when the user is scrolling from bottom to top
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
