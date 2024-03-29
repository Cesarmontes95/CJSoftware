/* MENU SHOW */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*TYPING*/

var typed = new Typed(".typing", {
    strings: ["César", "Catalyze"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/*----- ANIMATE -----*/
// OVERLAY
//gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
//gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
//gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});

// IMG
gsap.from('.home__img', {opacity: 0, duration: 1, delay: 1, x: 60})

// INFORMATION
gsap.from('.home__information', {opacity: 0, duration: 2, delay: 1.5, y: 25})
gsap.from('.anime-text', {opacity: 0, duration: 2, delay: 1.5, y: 25, ease:'expo.out', stagger: .3})

// NAV ITEM
gsap.from('.nav__logo', {opacity:0, duration: 2, delay: 2, y: 25, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 2, delay: 2, y: 25, ease:'expo.out', stagger: .2})

// SOCIAL
gsap.from('.home__social-icon', {opacity: 0, duration: 2, delay: 2, y: 25, ease:'expo.out', stagger: .2})
gsap.from('.home__social-insta', {opacity: 0, duration: 2, delay: 2, y: 25, ease:'expo.out', stagger: .2})
