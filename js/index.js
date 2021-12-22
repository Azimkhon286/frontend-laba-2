const clickx = document.getElementById('pencet');
const nav = document.getElementById('nav');
const header = document.getElementById('header');
const headerLogo = document.getElementById('header-logo')

clickx.addEventListener('click', function(){
    clickx.classList.toggle('Header__mobile-menu_opened');
    nav.classList.toggle('Header__nav-container_opened');
    header.classList.toggle('Header__layout_opened');
    headerLogo.classList.toggle('Header__logo');
});
