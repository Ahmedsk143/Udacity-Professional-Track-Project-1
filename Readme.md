- [Landing Page Project](#landing-page-project)
- [Technologies](#technologies)
- [Getting Started with Visual Studio Code](#getting-started-with-visual-studio-code)
- [Code snippet - The function of the scroll Event Listener](#code-snippet---the-function-of-the-scroll-event-listener)
- [Key Features](#key-features)
- [Dependencies](#dependencies)

# Landing Page Project

This repo is a basic landing page with minimial styles to practice some javascript DOM manipulation

# Technologies

- HTML5
- CSS3
- Javascript

# Getting Started with Visual Studio Code

```bash
 git clone [https](https://github.com/Ahmedsk143/Udacity-Professional-Track-Project-1.git)
 cd Udacity Professional Track Project 1
 code . --new-window.
```

# Code snippet - The function of the scroll Event Listener

```javascript
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
```

# Key Features

1. Dynamic navigation bar based on the number of sections
2. Highlighting the section that is being viewed while scrolling
3. Smooth scrolling to content
4. Responsive on all devices
5. Hamburger menu
6. Hiding fixed navigation bar while not scrolling
7. Added a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.

# Dependencies

- Font awesome library
