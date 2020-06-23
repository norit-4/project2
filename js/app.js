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
const navBarElement = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the li & a element
function createElement(id, name) {
  const lstes = document.createElement('li');
  lstes.className = 'aClassName';
  //here the <a> link
  const linkElement = document.createElement('a');
  //here the new elment tack the attributes
  linkElement.textContent = name;
  linkElement.href = '#' + id;
  //append all element to navbar
  lstes.appendChild(linkElement);
  navBarElement.appendChild(lstes);
  document.querySelector('.navbar__menu').appendChild(navBarElement);
}
// create navbar
function createNavBar() {
  sections.forEach((section) => {
    createElement(section.id, section.dataset.nav);
  });
}
createNavBar();

// Scroll to anchor ID using scrollTO event

document.querySelectorAll('a [href^="#"').forEach(function (anchors) {
  anchors.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

/**
 * End Main Functions
 * Begin Events
 *
 */
// Add & remove class 'active'

function activeClass() {
  sections.forEach((section) =>
    window.addEventListener('scroll', function () {
      if (section.getBoundingClientRect().top + 190 < window.innerHeight) {
        section.classList.add('your-active-class');
      } else {
        section.classList.remove('your-active-class');
      }
    })
  );
}
activeClass();
