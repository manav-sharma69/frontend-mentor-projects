# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/screenshot.jpg)

### Links

- Solution URL: [GitHub Repo](https://github.com/manav-sharma69/frontend-mentor-projects/tree/main/intro-component-with-signup-form-main)
- Live Site URL: [GitHub Pages](https://manav-sharma69.github.io/frontend-mentor-projects/intro-component-with-signup-form-main/index.html)

## My process
Process was researching the web and writing appropriate code.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS

### What I learned

Learned about: 
- UI styling
- DOM Manipulation
- drop shadow CSS effect

### Continued development

Need to practice:
- write shorter code (JS & CSS)
- using CSS units well 

### Useful Resources

- [drop-shadow() (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow) - Used this property to set 'shadow' on button, form wrapper and pricing block
- [Email validation regex (StackOverflow)](https://stackoverflow.com/a/46181/22045800) - Used the regex given in this solution to add email verification. **The default email validation doesn't care if top level domain (tld: .com, .edu, etc.) is present.**
- [Validating forms using JavaScript (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript) - Learned client side form validation via JS from here (especially the usage of `aria-live` attribute for dynamically changing elements)
- [ARIA live regions (MDN)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) - Read about `aria-live` attribute here.
- [Hidden content for better a11y (Go make things)](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) - Used the `.screen-reader` CSS class' style to hide the labels accessibly.

## Author

- Frontend Mentor - [@manav-sharma69](https://www.frontendmentor.io/profile/manav-sharma69)