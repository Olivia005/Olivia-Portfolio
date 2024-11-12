var typed = new Typed("#text", {
    strings: ["Frontend Developer", "Web Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*==========================TOGGLE ICON NAVBAR=================================*/


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
/*==========================SCROLL SECTION ACTIVE LINK=================================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



jQuery(document).ready(function($) {
    $('.marquee_text').marquee({
        direction: 'left',
        duration: 20000,
        gap: 0,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
    });
    });















// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach.apply(Links => {
//                 Links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' +id + ']').classList.add('active');
//             });
//         };
//     });







    /*=============================STICKY NAVBAR=================================*/

  let header=document.querySelector('header');{
 header.classList.toggle('sticky', window.scrollY > 100);

  /*=============================remove toggle icon and navbar=============================*/

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

/*=============================SCROLL REVEAL=============================*/

ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.container,.row,.contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-text', { origin:'right' });
/*-----------------------------------------------------------------------------------------------*/





/*unic1.onclick = function(){
    let uunic1 = document.getElementById('unic1');
    uunic1.style.color="#0ef";
    uunic1.style.backgroundColor="#1a1a1c";
    uunic1.style.border="1px solid rgb(30, 32, 32)";
    uunic1.style.padding="8px";
    uunic1.style.borderRadius="8px";

    let uunic2 = document.getElementById('unic2');
    uunic2.style.color="white";
    uunic2.style.backgroundColor="transparent";
    uunic2.style.border="none";
    uunic2.style.padding="0px";
    uunic2.style.borderRadius="0px";

    let uunic3 = document.getElementById('unic3');
    uunic3.style.color="white";
    uunic3.style.backgroundColor="transparent";
    uunic3.style.border="none";
    uunic3.style.padding="0px";
    uunic3.style.borderRadius="0px";

    let uunic4 = document.getElementById('unic4');
    uunic4.style.color="white";
    uunic4.style.backgroundColor="transparent";
    uunic4.style.border="none";
    uunic4.style.padding="0px";
    uunic4.style.borderRadius="0px";

    let uunic5 = document.getElementById('unic5');
    uunic5.style.color="white";
    uunic5.style.backgroundColor="transparent";
    uunic5.style.border="none";
    uunic5.style.padding="0px";
    uunic5.style.borderRadius="0px";

    let uunic6 = document.getElementById('unic6');
    uunic6.style.color="white";
    uunic6.style.backgroundColor="transparent";
    uunic6.style.border="none";
    uunic6.style.padding="0px";
    uunic6.style.borderRadius="0px";

    
}

unic2.onclick = function(){
    let uunic1 = document.getElementById('unic1');
    uunic1.style.color="white";
    uunic1.style.backgroundColor="transparent";
    uunic1.style.border="none";
    uunic1.style.padding="0px";
    uunic1.style.borderRadius="0px";

    let uunic2 = document.getElementById('unic2');
    uunic2.style.color="#0ef";
    uunic2.style.backgroundColor="#1a1a1c";
    uunic2.style.border="1px solid rgb(30, 32, 32)";
    uunic2.style.padding="8px";
    uunic2.style.borderRadius="8px";

    let uunic3 = document.getElementById('unic3');
    uunic3.style.color="white";
    uunic3.style.backgroundColor="transparent";
    uunic3.style.border="none";
    uunic3.style.padding="0px";
    uunic3.style.borderRadius="0px";

    let uunic4 = document.getElementById('unic4');
    uunic4.style.color="white";
    uunic4.style.backgroundColor="transparent";
    uunic4.style.border="none";
    uunic4.style.padding="0px";
    uunic4.style.borderRadius="0px";

    let uunic5 = document.getElementById('unic5');
    uunic5.style.color="white";
    uunic5.style.backgroundColor="transparent";
    uunic5.style.border="none";
    uunic5.style.padding="0px";
    uunic5.style.borderRadius="0px";

    let uunic6 = document.getElementById('unic6');
    uunic6.style.color="white";
    uunic6.style.backgroundColor="transparent";
    uunic6.style.border="none";
    uunic6.style.padding="0px";
    uunic6.style.borderRadius="0px";
    
}
unic3.onclick = function(){
    let uunic1 = document.getElementById('unic1');
    uunic1.style.color="white";
    uunic1.style.backgroundColor="transparent";
    uunic1.style.border="none";
    uunic1.style.padding="0px";
    uunic1.style.borderRadius="0px";


    let uunic2 = document.getElementById('unic2');
    uunic2.style.color="white";
    uunic2.style.backgroundColor="transparent";
    uunic2.style.border="none";
    uunic2.style.padding="0px";
    uunic2.style.borderRadius="0px";


    let uunic3 = document.getElementById('unic3');
    uunic3.style.color="#0ef"; 
    uunic3.style.backgroundColor="#1a1a1c";
    uunic3.style.border="1px solid rgb(30, 32, 32)";
    uunic3.style.padding="8px";
    uunic3.style.borderRadius="8px";

    let uunic4 = document.getElementById('unic4');
    uunic4.style.color="white";
    uunic4.style.backgroundColor="transparent";
    uunic4.style.border="none";
    uunic4.style.padding="0px";
    uunic4.style.borderRadius="0px";


    let uunic5 = document.getElementById('unic5');
    uunic5.style.color="white";
    uunic5.style.backgroundColor="transparent";
    uunic5.style.border="none";
    uunic5.style.padding="0px";
    uunic5.style.borderRadius="0px";


    let uunic6 = document.getElementById('unic6');
    uunic6.style.color="white";
    uunic6.style.backgroundColor="transparent";
    uunic6.style.border="none";
    uunic6.style.padding="0px";
    uunic6.style.borderRadius="0px";


    
}
unic4.onclick = function(){
    let uunic1 = document.getElementById('unic1');
    uunic1.style.color="white";
    uunic1.style.backgroundColor="transparent";
    uunic1.style.border="none";
    uunic1.style.padding="0px";
    uunic1.style.borderRadius="0px";


    let uunic2 = document.getElementById('unic2');
    uunic2.style.color="white";
    uunic2.style.backgroundColor="transparent";
    uunic2.style.border="none";
    uunic2.style.padding="0px";
    uunic2.style.borderRadius="0px";


    let uunic3 = document.getElementById('unic3');
    uunic3.style.color="white";
    uunic3.style.backgroundColor="transparent";
    uunic3.style.border="none";
    uunic3.style.padding="0px";
    uunic3.style.borderRadius="0px";


    let uunic4 = document.getElementById('unic4');
    uunic4.style.color="#0ef";
    uunic4.style.backgroundColor="#1a1a1c";
    uunic4.style.border="1px solid rgb(30, 32, 32)";
    uunic4.style.padding="8px";
    uunic4.style.borderRadius="8px";

    let uunic5 = document.getElementById('unic5');
    uunic5.style.color="white";
    uunic5.style.backgroundColor="transparent";
    uunic5.style.border="none";
    uunic5.style.padding="0px";
    uunic5.style.borderRadius="0px";


    let uunic6 = document.getElementById('unic6');
    uunic6.style.color="white";
    uunic6.style.backgroundColor="transparent";
    uunic6.style.border="none";
    uunic6.style.padding="0px";
    uunic6.style.borderRadius="0px";

    
}
unic5.onclick = function(){
    let uunic1 = document.getElementById('unic1');
    uunic1.style.color="white";
    uunic1.style.backgroundColor="transparent";
    uunic1.style.border="none";
    uunic1.style.padding="0px";
    uunic1.style.borderRadius="0px";
    

    let uunic2 = document.getElementById('unic2');
    uunic2.style.color="white";
    uunic2.style.backgroundColor="transparent";
    uunic2.style.border="none";
    uunic2.style.padding="0px";
    uunic2.style.borderRadius="0px";

    let uunic3 = document.getElementById('unic3');
    uunic3.style.color="white";
    uunic3.style.backgroundColor="transparent";
    uunic3.style.border="none";
    uunic3.style.padding="0px";
    uunic3.style.borderRadius="0px";

    let uunic4 = document.getElementById('unic4');
    uunic4.style.color="white";
    uunic4.style.backgroundColor="transparent";
    uunic4.style.border="none";
    uunic4.style.padding="0px";
    uunic4.style.borderRadius="0px";

    let uunic5 = document.getElementById('unic5');
    uunic5.style.color="#0ef";
    uunic5.style.backgroundColor="#1a1a1c";
    uunic5.style.border="1px solid rgb(30, 32, 32)";
    uunic5.style.padding="8px";
    uunic5.style.borderRadius="8px";

    let uunic6 = document.getElementById('unic6');
    uunic6.style.color="white";
    uunic6.style.backgroundColor="transparent";
    uunic6.style.border="none";
    uunic6.style.padding="0px";
    uunic6.style.borderRadius="0px";
    
}
unic6.onclick = function(){
    let uunic1 = document.getElementById('unic1');
    uunic1.style.color="white";
    uunic1.style.backgroundColor="transparent";
    uunic1.style.border="none";
    uunic1.style.padding="0px";
    uunic1.style.borderRadius="0px";

    let uunic2 = document.getElementById('unic2');
    uunic2.style.color="white";
    uunic2.style.backgroundColor="transparent";
    uunic2.style.border="none";
    uunic2.style.padding="0px";
    uunic2.style.borderRadius="0px";

    let uunic3 = document.getElementById('unic3');
    uunic3.style.color="white";
    uunic3.style.backgroundColor="transparent";
    uunic3.style.border="none";
    uunic3.style.padding="0px";
    uunic3.style.borderRadius="0px";

    let uunic4 = document.getElementById('unic4');
    uunic4.style.color="white";
    uunic4.style.backgroundColor="transparent";
    uunic4.style.border="none";
    uunic4.style.padding="0px";
    uunic4.style.borderRadius="0px";

    let uunic5 = document.getElementById('unic5');
    uunic5.style.color="white";
    uunic5.style.backgroundColor="transparent";
    uunic5.style.border="none";
    uunic5.style.padding="0px";
    uunic5.style.borderRadius="0px";

    let uunic6 = document.getElementById('unic6');
    uunic6.style.color="#0ef";
    uunic6.style.backgroundColor="#1a1a1c";
    uunic6.style.border="1px solid rgb(30, 32, 32)";
    uunic6.style.padding="8px";
    uunic6.style.borderRadius="8px";

    
}*/





