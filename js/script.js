/*| Get Started |*/

'use strict';

// grab everything we need

const landingMobileBtn = document.querySelector('button.landing-mobile-menu-button');
const landingMobileMenu = document.querySelector('.landing-mobile-menu');

landingMobileBtn.addEventListener('click', () => {
    landingMobileMenu.classList.toggle('hidden');
});
