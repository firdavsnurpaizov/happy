const burger = document.querySelector('.header-burger');
const menu = document.querySelector('.mobile');
const closeMenu = document.querySelector('.mobile-close');
const items = document.querySelectorAll('.mobile-navbar__item');

burger.addEventListener('click', function () {
    menu.style.opacity = 1;
    menu.style.visibility = "visible";
    menu.style.left = 0;
    document.body.style.overflowY = "hidden"
})


closeMenu.addEventListener('click', closemenu)

items.forEach(item => item.addEventListener('click', closemenu))


function closemenu() {
    menu.style.left = "100%";
    menu.style.opacity = 0;
    menu.style.visibility = "hidden";
    document.body.style.overflowY = "auto"
}
