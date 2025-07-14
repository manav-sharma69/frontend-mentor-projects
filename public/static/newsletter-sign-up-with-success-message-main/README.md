# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/screenshot.jpg);

### Links

- Solution URL: [GitHub Repo](https://github.com/manav-sharma69/frontend-mentor-projects/tree/main/newsletter-sign-up-with-success-message-main)
- Live Site URL: [GitHub Pages](https://manav-sharma69.github.io/frontend-mentor-projects/newsletter-sign-up-with-success-message-main/index.html)

## My process

- started with HTML, learned about `<dialog>` element
- wrote the markup
- started styling
- add JS to make dialog box and overall page interactive
- styled dialog box
- added validation
- struggled with adding gradient box shadow to buttons on hover (solution still not perfect)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- learned about `<dialog>` element and how it behaves
- learned about custom client side form validation (can still add more complexities to make validation stricter)
- how to select parent element via CSS (use `:has()` pseudo-class)

### Continued development

- keep on learning more about writing semantic markup
- practice more JS and forms

### Useful resources

- [<dialog> - The Dialog element (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#examples)
- [Client-side form validation (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Other than this, also lookup `input.validity` ([ValidityState (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState)).
- [Media Queries: How to target desktop, tablet, and mobile? (Stackoverflow)](https://stackoverflow.com/a/7354648/22045800) - Contains a list of useful viewport sizes
- [CSS3 Box-Shadow Linear Gradient? (Stackoverflow)](https://stackoverflow.com/a/62852138/22045800) - This was my final approach to adding gradient box shadow
- [Is there a CSS parent selector? (Stackoverflow)](https://stackoverflow.com/a/1014958/22045800)

## Author

- Frontend Mentor - [@manav-sharma69](https://www.frontendmentor.io/profile/manav-sharma69)