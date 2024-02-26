const button = document.querySelectorAll('.button')
const body = document.querySelector('body')
// console.log(body);
button.forEach( function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'green'){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
    })
} );