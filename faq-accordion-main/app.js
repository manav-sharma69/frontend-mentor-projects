let details = document.querySelectorAll('details');

details.forEach(detail => {
    let summary = detail.firstElementChild;
    let img = summary.firstElementChild.firstElementChild;
    detail.addEventListener('toggle', (e) => {
        if(detail.open){
            img.src = `./assets/images/icon-minus.svg`;
        }
        else{
            img.src = `./assets/images/icon-plus.svg`
        }
    })
})