const body = document.querySelector('body');
const menuBtn = document.querySelector('button.menu-btn');
const menuCloseBtn = document.querySelector('button.menu-close-btn');
const navWrapper = document.querySelector('div.nav-wrapper');
const interactiveElementsOutsideNavWrapper = [document.querySelector('a.read-more-link'), ...document.querySelectorAll('a.attribution-link'), menuBtn];

if(window.innerWidth > '900'){
    navWrapper.removeAttribute('inert')
    navWrapper.removeAttribute('aria-hidden')
}

function showNav(){
    /**
     * WHAT TO DO WHEN button.menu-btn IS CLICKED:
     * 
     * aria-expanded = true on button.menu-btn
     * aria-hidden = false on div.nav-wrapper
     * remove "hidden" class from div.nav-wrapper
     * add "no-scroll" class on body
     * add "inert" attribute to interactive elements outside div.nav-wrapper
     * remove "inert" attribute from div.nav-wrapper
     * set focus to menuCloseBtn
     */

    menuBtn.ariaExpanded = 'true';
    navWrapper.ariaHidden = 'false';
    navWrapper.classList.remove('hidden');
    body.classList.add('no-scroll');
    interactiveElementsOutsideNavWrapper.forEach(element => element.setAttribute('inert', ''));
    navWrapper.removeAttribute('inert');
    menuCloseBtn.focus();
}

function hideNav(){
    /**
     * WHAT TO DO WHEN button.menu-close-btn IS CLICKED:
     * 
     * aria-expanded = false on button.menu-btn
     * aria-hidden = true on div.nav-wrapper
     * add "hidden" class on div.nav-wrapper
     * remove "no-scroll" class on body
     * add "inert" attribute to div.nav-wrapper
     * remove "inert" attribute from interactive elements outside div.nav-wrapper
     */
    
    menuBtn.ariaExpanded = 'false';
    navWrapper.ariaHidden = 'true';
    navWrapper.classList.add('hidden');
    body.classList.remove('no-scroll');
    interactiveElementsOutsideNavWrapper.forEach(element => element.removeAttribute('inert'));
    navWrapper.setAttribute('inert', '');
}

menuBtn.addEventListener('click', showNav);
menuCloseBtn.addEventListener('click', hideNav);

// hide nav when user taps outside the nav bar
document.querySelector('.backdrop').addEventListener('click', hideNav);
