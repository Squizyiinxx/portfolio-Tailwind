const humburger = document.getElementById('humburger');
const navLink = document.getElementById('nav-links');

humburger.addEventListener('click', function(){
    humburger.classList.toggle('hamburger-active')  
    navLink.classList.toggle('hidden');

});

window.onscroll = function () {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    let nav = window.pageYOffset > fixNav ? header.classList.add("navbar-fixed") : header.classList.remove("navbar-fixed");
}
