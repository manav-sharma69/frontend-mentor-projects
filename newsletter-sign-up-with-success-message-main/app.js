/*
- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
*/

let signupForm = document.querySelector('[name="Sign-Up Form"]');
let picture = document.querySelector('picture');
let paddedBox = document.querySelector('.padded-box');
let input = document.querySelector('input');
let dialog = document.querySelector('dialog');
let dismissBtn = document.querySelector('.dismiss-btn');
let errorMsg = document.querySelector('.error-msg');

function isValid(){
  return input.validity.valid && input.value !== "";
}

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let emailId = input.value;
  let emailInDialog = document.querySelector('.bold');
  if(isValid()){
    emailInDialog.textContent = emailId;  
    dialog.show();
    picture.style.display = 'none';
    paddedBox.style.display = 'none';
    input.value = '';
  }
  else{

  }
})

dismissBtn.addEventListener('click', () => {
  picture.style.display = 'block';
  paddedBox.style.display = 'block';
})

input.addEventListener('input', (e) => {
  if(!isValid() && input.value === "") input.id = 'invalid';
  else if(!isValid()) errorMsg.style.display = 'inline';
  else errorMsg.style.display = 'none';
})

input.addEventListener('blur', () => {
  input.id = ''; errorMsg.style.display = 'none';
})