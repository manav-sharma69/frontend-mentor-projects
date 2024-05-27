let btn = document.querySelector('button');
let form = document.querySelector('form');
let inputs = document.querySelectorAll('input');
let errorCount = 0;
let errorMessage = {};
let age;

function setMessage(error, id){
    if(error === 'empty'){
        errorMessage[id] = 'This field is required'
    }
    if(error === 'invalid'){
        errorMessage[id] = `Must be a valid ${id}`
    }
    if(error === 'invalidDate'){
        if(id === 'year'){
            errorMessage[id] = `Must be in the past`
        }
        else errorMessage[id] = `Must be a valid date`
    }
}

function displayMessage(){
    if(errorMessage['day'] === 'Must be a valid date'){
        document.querySelector('#day').nextElementSibling.textContent = errorMessage['day'];
        inputs.forEach(inputEle => {
            inputEle.nextElementSibling.classList.add('error');
            inputEle.classList.add('error');
            inputEle.previousElementSibling.classList.add('error');
        })
    }
    else {
        inputs.forEach(input => {
            let msgBox = input.nextElementSibling;
            if(errorMessage[input.id]){
                msgBox.textContent = errorMessage[input.id];
                msgBox.classList.add('error');
                input.classList.add('error');
                input.previousElementSibling.classList.add('error');
            }
            else{
                msgBox.textContent = '';
                msgBox.classList.remove('error');
                input.classList.remove('error');
                input.previousElementSibling.classList.remove('error');
            }
        })
    }
}

function isEmpty(id){
    if(document.querySelector(`#${id}`).value === '') return true;
    return false;
}

function validateValues(id){
    let value = document.querySelector(`#${id}`).value;
    let cond1, cond2;
    if(id == 'day'){
        cond1 = 1; 
        cond2 = 31;
    }
    else if(id == 'month'){
        cond1 = 1;
        cond2 = 12;
    }
    else{
        cond1 = 1901;
        cond2 = 2038
    }
    if(id === 'year'){
        if(value < cond1 || value > cond2){
            setMessage('invalid', id);
            errorCount++;
        }
        if(value > new Date().getFullYear()) setMessage('invalidDate', year.id);
    }
    if(value < cond1 || value > cond2){
        setMessage('invalid', id);
        errorCount++;
    }
}

function validInputs(){
    inputs.forEach(input => {
        if(isEmpty(input.id)){
            setMessage('empty', input.id);
            errorCount++;
        }
        else {
            validateValues(input.id);
        }
    })

    if(errorCount !== 0) return false;
    return true;
}

function checkDate(){
    let day = document.querySelector('#day');
    let month = document.querySelector('#month');
    let year = document.querySelector('#year');
    const monthArr = [31, year.value % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(day.value > monthArr[month.value-1]) setMessage('invalidDate', day.id);
}

function calculateAge(){
    let days = Number.parseInt(document.querySelector('#day').value);
    let months = Number.parseInt(document.querySelector('#month').value);
    let years = Number.parseInt(document.querySelector('#year').value);
    let currDay = new Date().getDate();
    let currMonth = new Date().getMonth() + 1;
    let currYear = new Date().getFullYear();

    years = currYear - years;
    if(currMonth < months){
        years--;
        currMonth += 12;
    }
    months = currMonth - months;
    if(currDay < days){
        months--;
        const monthArr = [31, document.querySelector('#year').value % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        console.log(monthArr[months], 'ajkf');
        currDay += monthArr[months];
    }
    days = currDay - days;

    return {days, months, years};
}

function displayAge(classVal){
    let i = 0;
    let id = setInterval(() => {
        let span = document.querySelector(`li.${classVal}`).firstElementChild; 
        span.textContent = i++;
        span.style.letterSpacing = 'unset';
        if(i > age[`${classVal}`]) clearInterval(id);
    }, 60);
}

form.addEventListener('submit', (event) => {
    btn.disabled = false;
    event.preventDefault();
    // if errorMessage's not empty, then clear it
    errorMessage = {};
    // check if any input is empty
    // if no input is empty, validate the inputs - like this:
        // - The day number is not between 1-31
        // - The month number is not between 1-12
        // - The year is in the future
    // if inputs are valid, validate date

    if(validInputs()) checkDate();
    displayMessage();

    let msgBoxes = document.querySelectorAll('.msg');
    let formHasNoError = true;
    for(let i = 0; i < msgBoxes.length; i++){
        if(msgBoxes[i].textContent != ''){
            formHasNoError = false;
        }
    }
    
    if(formHasNoError){
        age = calculateAge();
        let keys = Object.keys(age);
        for(let key of keys) displayAge(key);
        btn.disabled = true;
    }
})