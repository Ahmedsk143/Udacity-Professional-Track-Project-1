# Landing Page Project

This repo is a basic landing page with a minimial styles to practise some javascript DOM manipulation

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

# The most usefull function that controls the active state of the section in the viewport

```javascript
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
```

# Key Features

1. Dynamic navigation bar based on the number of sections
2. Highlighting the section that is being viwed while scrolling
3. Smooth scrolling to content
4. Responsive on all devices
5. Hamburger menu
