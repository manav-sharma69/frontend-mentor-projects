const form = document.querySelector('form');
const input = document.querySelector('input');
const errorMsg = document.querySelector('.error-msg');
const errorImg = document.querySelector('.container-img-error');
const btn = document.querySelector('button');

function isInvalid(){
    return !(input.validity.valid) || input.value == "";
}

function containsErrorClasses(){
    if(input.classList.contains('invalid-entry')) return true;
    return false;
}

function removeErrorClasses(){
    input.classList.remove('invalid-entry');
    errorImg.classList.add('hidden');
    errorMsg.classList.add('hidden');
    errorMsg.setAttribute('aria-hidden', 'true');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(isInvalid()){
        input.classList.add('invalid-entry');
        errorImg.classList.remove('hidden');
        errorMsg.classList.remove('hidden');
        errorMsg.setAttribute('aria-hidden', 'false');
    }
    else{
        removeErrorClasses();
        input.value = '';
    }
})

input.addEventListener('blur', (e) => {
    if(containsErrorClasses()) removeErrorClasses();
})
        
btn.addEventListener('blur', (e) => {
    if(containsErrorClasses()) removeErrorClasses();
})