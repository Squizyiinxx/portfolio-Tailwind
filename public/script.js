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

window.addEventListener('click',function(e) {
   if(e.target != humburger && e.target != navLink){
    humburger.classList.remove("hamburger-active");
    navLink.classList.add('hidden')
   } 
});

const darkMode = document.getElementById('check');
const html = document.querySelector('html');

darkMode.addEventListener('click', function(){
   if(darkMode.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark'
   }else{
    html.classList.remove('dark');
    localStorage.theme = 'light';
   }
})


if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
   darkMode.checked = true;
} else {
  darkMode.checked = false;
}
 
