// Define Global Variables
const sections = document.querySelectorAll(".section");
const ul = document.querySelector("#menu");
let sectionsCount = 1;
const header = document.querySelector(".header");

// build the nav dynamically based on the number of sections
sections.forEach((section) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#section${sectionsCount}`;
  a.innerHTML = section.dataset.nav;
  li.appendChild(a);
  ul.appendChild(li);
  sectionsCount++;
});

const links = document.querySelectorAll("#menu li a");

// Scroll to the correct section when the link is clicked
links.forEach((link) => {
  link.addEventListener("click", () => {
    const Id = link.getAttribute("href");
    const section = document.querySelector(Id);
    section.scrollIntoView({ behavior: "smooth" });
    removeAllLinksStates();
    link.classList.add("active");
  });
});

// Set sections as active on scroll event
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
  const section2 = document.querySelector("#section2");
  console.log(section2.getBoundingClientRect().top);
});
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

function showMenu() {
  const menu = document.querySelector(".nav");
  const bars = document.querySelector(".menu-bar");
  menu.classList.toggle("active");
  bars.classList.toggle("active");
}

// onscroll = function () {
//   let scrollPosition = document.documentElement.scrollTop;
//   sections.forEach((section) => {
//     if (
//       scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
//       scrollPosition <
//         section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
//     ) {
//       let currentId = section.attributes.id.value;
//       removeAllActiveClasses();
//       addActiveClass(currentId);
//     }
//   });
// };

// let removeAllActiveClasses = function () {
//   document.querySelectorAll("nav a").forEach((el) => {
//     el.classList.remove("active");
//   });
// };

// let addActiveClass = function (id) {
//   // console.log(id);
//   let selector = `nav a[href="#${id}"]`;
//   document.querySelector(selector).classList.add("active");
// };

// let navLinks = document.querySelectorAll("nav a");

// navLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     let currentId = e.target.attributes.href.value;
//     let section = document.querySelector(currentId);
//     let sectionPos = section.offsetTop;
//     // section.scrollIntoView({
//     //   behavior: "smooth",
//     // });

//     window.scroll({
//       top: sectionPos,
//       behavior: "smooth",
//     });
//   });
// });
