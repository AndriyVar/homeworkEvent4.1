'use strict'

const minus = document.querySelector('.counter__minus');
const plus = document.querySelector('.counter__plus');
const val = document.querySelector('.counter__value');

let c = +val.textContent;

plus.addEventListener('click', function() {
    val.textContent = ++c;
});

minus.addEventListener('click', function() {
    val.textContent = --c;
})




