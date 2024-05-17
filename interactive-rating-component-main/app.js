if(localStorage.getItem('ratingAdded') == null) localStorage.setItem('ratingAdded', 'false');
else{
    document.querySelector('.rating').textContent = localStorage.getItem('ratingAdded');
    document.querySelector('dialog').show();
    document.querySelector('form').style.display = 'none';  
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('dialog').show();
    document.querySelector('form').style.display = 'none'; 
    document.querySelector('.rating').textContent = document.querySelector('input:checked').value;
    localStorage.setItem('ratingAdded', `${document.querySelector('input:checked').value}`);
    console.log(localStorage.getItem('ratingAdded'));
})