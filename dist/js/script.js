// navbar fixed
window.onscroll = function ( ) {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    const totop = document.querySelector('#to-top');

    if (window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
        totop.classList.remove('hidden');
        totop.classList.add('flex');
    } else 
    {
        header.classList.remove('navbar-fixed');
        totop.classList.remove('flex');
        totop.classList.add('hidden');
    }    
};


// hamburger
const hamburger = document.querySelector('#hamburger');
;
hamburger.addEventListener('click', function() 
{
    hamburger.classList.toggle('hamburger-active');
});

// navmenu
const navmenu = document.querySelector('#nav-menu');
const hamburger1 = document.querySelector('#hamburger');
hamburger1.addEventListener('click', function() 
{
    navmenu.classList.toggle('hidden');
});

// klik di luar hamburger
window.addEventListener('click', function (e){
    if(e.target != hamburger && e.targer != navmenu){
        hamburger.classList.remove('hamburger-active');
        navmenu.classList.add('hidden')
    }
});

// darkmode toggle
const darktoggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darktoggle.addEventListener('click', function(){
    if (darktoggle.checked) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
})
