

'use strict';

let cartBox = document.querySelector ('.cartbox');
let headerCart = document.querySelector ('.header__cart');

headerCart.addEventListener ('click', function () {
    cartBox.classList.remove('hidden');
});