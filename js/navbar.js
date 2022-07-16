const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

let menuIsOpen = false;

burger.addEventListener('click', () => {
    if (menuIsOpen === false) {
        menuIsOpen = true;
        menu.classList.add('open');
    } else {
        menuIsOpen = false;
        menu.classList.remove('open')
    }
})