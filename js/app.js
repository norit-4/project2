/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
// navigation global var
const navBar = document.getElementById('navbar__list');
// sections global var
const navBarElement = document.querySelectorAll('section');

// building  the navigation

const createNav = () => {
  let navli = '';
  // looping over all sections
  navBarElement.forEach((section) => {
    const secID = section.id;
    const secDataNav = section.dataset.nav;

    navli += `<li><a class="menu__link" href="#${secID}">${secDataNav}</a></li>`;
  });
  // append all elements to the navigation
  navBar.innerHTML = navli;
};

createNav();

// Add class 'active' to section when near top of viewport
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActivity = (section) => {
  section.classList.remove('your-active-class');
  section.style.cssText =
    'background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)';
  sectionid = section.id.slice(7, 8) - 1;
  navBar.childNodes[sectionid].style.cssText = 'background-color:white;';
};
// adding the active class
const addActivity = (conditional, section) => {
  if (conditional) {
    section.classList.add('your-active-class');
    section.style.cssText = 'background-color: #c0c0c0;';
    sectionId = section.id.slice(7, 8) - 1;
    navBar.childNodes[sectionid].style.cssText = 'background-color: #c0c0c0;';
  }
};

//implementating the actual function

const secActivity = () => {
  navBarElement.forEach((section) => {
    const elementOffset = offset(section);

    inviewport = () => elementOffset < 140 && elementOffset >= -140;

    removeActivity(section);
    addActivity(inviewport(), section);
  });
};

window.addEventListener('scroll', secActivity);

// Scroll to anchor ID using scrollTO event

const scroll = () => {
  const linkS = document.querySelectorAll('.navbar__menu a');
  linkS.forEach((link) => {
    link.addEventListener('click', () => {
      for (i = 0; i < sections; i++) {
        navBarElement[i].addEventListener('click', sectionScroll(link));
      }
    });
  });
};

scroll();

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
