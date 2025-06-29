// Toggle Class Active
const navbarnav = document.querySelector('.navbar-nav');

// ketika Hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarnav.classList.toggle('active');
};

// Klik diluar sidebar untuk menghilangkan nav
const Hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click',function (e){
    if(!Hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});