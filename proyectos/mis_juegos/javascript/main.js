document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news' , { delay: 300});
ScrollReveal().reveal('.section-banner' , { delay: 300});
ScrollReveal().reveal('.news2' , { delay: 300});
ScrollReveal().reveal('.section2-banner' , { delay: 300});