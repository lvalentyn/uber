window.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('.menu'),
        menuItems = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active')
        menu.classList.toggle('menu_active')
    });
    menuItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active')
            menu.classList.toggle('menu_active')
        })
    })
})