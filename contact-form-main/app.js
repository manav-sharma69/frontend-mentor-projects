const form = document.querySelector('form');
const errorBoxes = document.querySelectorAll('.error');

function showErrorMsg(errorType, inputField){
    let errorBox = 
    inputField !== 'queryType' ? 
    document.querySelector(`#${inputField}`).parentElement.lastElementChild : 
    document.querySelector('fieldset').lastElementChild;
    
    let erroBoxScrReader = errorBox.previousElementSibling;

    let errorMsg = ``;
    let errorMsgScrReader = ``;

    if(errorType === 'empty'){
        if(inputField == 'queryType'){
            errorMsg = `Please select a query type`;
            errorMsgScrReader = errorMsg;
        }
        else if(inputField == 'consentCheckbox'){
            errorBox = document.querySelector('#consentCheckbox').parentElement.parentElement.lastElementChild;
            erroBoxScrReader = errorBox.previousElementSibling;
            errorMsg = `To submit this form, please consent to being contacted`;
            errorMsgScrReader = errorMsg;
        }
        else{
            errorMsg = `This field is required`;
            let label = errorBox.parentElement.firstElementChild;
            errorMsgScrReader = `${label.textContent} is required.`.replace('*', '');
        }

        errorBox.textContent = errorMsg;
        erroBoxScrReader.textContent = errorMsgScrReader;
    }
    if(errorType === 'incorrect-email-format'){
        errorMsg = `Please enter a valid email address`;
        errorMsgScrReader = errorMsg;
        errorBox.textContent = errorMsg;
        erroBoxScrReader.textContent = errorMsgScrReader;
    }
}

function validateEmail(redColor){
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const email = document.querySelector('#email');
    const emailValue = email.value;
    const isValid = regex.test(emailValue);
    if(!isValid) {
        email.style.borderColor = redColor; // sets red border
        email.addEventListener('focus', () => {
            email.style.outline = `.1px solid ${redColor}`; // sets red outline
        })
        email.addEventListener('focus', () => {
            email.style.outline = `none`; // sets red outline
        })
        showErrorMsg('incorrect-email-format', 'email');
    }
    return isValid;
}

function setFocus(){
    // go through all the span.error elements' textContent 
    // this function is depends on the else block inside the for loop of handleValidation() function
    for(let errorBox of errorBoxes){
        if(errorBox.textContent !== ''){
            if(errorBox.parentElement == document.querySelector('fieldset')){
                document.querySelector('#general-enq').focus();
            }
            else if(errorBox.parentElement.classList.contains('checkbox-parent')){
                document.querySelector('#consentCheckbox').focus();
            }
            else errorBox.previousElementSibling.previousElementSibling.focus(); 
            break;
        }
    }
}

function handleValidation(data){
    const formData = [...data];
    let inputsValid = true;
    let redColor = getComputedStyle(document.body).getPropertyValue('--red');

    for(let field of formData){
        if(field[1] == ''){ // show error messages for empty input fields
            // if input element is not queryType & consentCheckbox, put border around the element
            if(field[0] !== `queryType` && field[0] !== `consentCheckbox`){ 
                let ele = document.querySelector(`#${field[0]}`);
                ele.style.borderColor = redColor;
                ele.addEventListener('focus', () => {
                    ele.style.outline = `.1px solid ${redColor}`; // sets red outline
                })
                ele.addEventListener('blur', () => {
                    ele.style.outline = `none`;
                })
            }
            showErrorMsg('empty', field[0]);
            inputsValid = false;
        }
        else if(field[0] === 'email' && field[1] !== ''){
            inputsValid = validateEmail(redColor);
        }
        else inputsValid = true;
        
        if(inputsValid){ // if there's no error, then remove the error message & related styling
            let errorBox = 
                field[0] !== 'queryType' ? 
                document.querySelector(`#${field[0]}`).parentElement.lastElementChild : 
                document.querySelector('fieldset').lastElementChild;
            
            let erroBoxScrReader = errorBox.previousElementSibling;
            
            if (field[0] === 'consentCheckbox'){
                errorBox = document.querySelector('#consentCheckbox').parentElement.parentElement.lastElementChild;
                erroBoxScrReader = errorBox.previousElementSibling;
            }
            errorBox.textContent = '';
            erroBoxScrReader.textContent = '';

            if(field[0] !== `queryType` && field[0] !== `consentCheckbox`){ 
                let ele = document.querySelector(`#${field[0]}`);
                ele.style.borderColor = getComputedStyle(document.body).getPropertyValue('--grey-500');
                // ele.style.outline = `none`; // removes outline
            }
        }
    }

    setFocus(); // set focus on the first invalid input field 

    return inputsValid;
}

function displayFlash(){
    const flashMsg = document.querySelector('.flash-msg');
    flashMsg.classList.add('display-flash-msg');
    setTimeout(() => {
        flashMsg.classList.remove('display-flash-msg');
    }, 8000);
}

form.addEventListener('submit', e => {
    const data = new FormData(form);
    // if radio btn or checkbox is not selected, append their values as empty strings (this helps handleValidation function)
    if(data.get('queryType') === null) data.append('queryType', '');
    if(data.get('consentCheckbox') === null) data.append('consentCheckbox', '');

    e.preventDefault();

    const inputsValid = handleValidation(data); // will validate all inputs and also throw relevant errors, if any
    if(inputsValid) displayFlash(); // displays the success flash message
})

// add focus to radio input element when their parent (div.box-style) is clicked
const boxStyleDivs = document.querySelectorAll('div.box-style');

boxStyleDivs.forEach(boxStyleDiv => {
    boxStyleDiv.addEventListener('click', () => {
        const radioInput = boxStyleDiv.firstElementChild;
        radioInput.checked = radioInput.checked == true ? true : true;
    })
})