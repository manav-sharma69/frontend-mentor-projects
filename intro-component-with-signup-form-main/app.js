const allInputs = document.querySelectorAll('input');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  allInputs.forEach(input => {
    const label = input.parentElement;
    const errorBox = label.lastElementChild;
    const errorImg = errorBox.previousElementSibling;
    if(input.id == 'email' && input.value !== ''){
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(!regex.test(input.value)){
        input.classList.add('mis-input');
        errorImg.classList.remove('hidden');
        input.placeholder = '';
        errorBox.textContent = 'Looks like this is not an email';
      }
      else{
        input.classList.remove('mis-input');
        errorImg.classList.add('hidden');
        errorBox.textContent = '';
      }
    }
    else if(input.value !== '' && input.validity.valid){
      input.classList.remove('mis-input');
      errorImg.classList.add('hidden');
      errorBox.textContent = '';
    }
    else{
        input.classList.add('mis-input');
        errorImg.classList.remove('hidden');
        input.placeholder = '';
        errorBox.textContent = `${label.firstElementChild.textContent} cannot be empty`
    }
  })
})

allInputs.forEach(input => {
  const label = input.parentElement;
  const errorBox = label.lastElementChild;
  const errorImg = errorBox.previousElementSibling;
  input.addEventListener('focus', (e) => {
    input.classList.remove('mis-input');
    errorImg.classList.add('hidden');
    errorBox.textContent = '';
  })
})
