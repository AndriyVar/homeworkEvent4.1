'use strict'

const color = document.querySelectorAll('.color__item');
const text = document.querySelector('.text');

color.forEach(elem => {
    let col = elem.getAttribute('data-color');
    elem.style.backgroundColor = col;
    elem.addEventListener('click', function(e) {
        let bgColor = e.target.getAttribute('data-color');
        text.style.color = bgColor;
    })
})

