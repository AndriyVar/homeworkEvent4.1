'use strict'

const btn = document.querySelector('.button');
const list = document.querySelector('.block__list');

const randomColor = function() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');

    const colorHex = `#${redHex}${greenHex}${blueHex}`;

    return colorHex;
}

btn.addEventListener('click', function() {
    const block = `
    <div class="list__item" style="background-color:${randomColor()}"></div>
    `;
    list.insertAdjacentHTML('beforeend', block)
})

