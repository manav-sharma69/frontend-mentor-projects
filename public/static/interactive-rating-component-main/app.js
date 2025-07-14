
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('dialog').show();
    document.querySelector('form').style.display = 'none'; 
    document.querySelector('.rating').textContent = document.querySelector('input:checked').value;
})
