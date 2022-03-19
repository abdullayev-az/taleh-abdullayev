$('.carusel').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items:1,
            nav:false
        },
        400:{
            items:2,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        },
        1240:{
            items:4,
            nav:false
        },
    }
});


var typed = new Typed(".auto-text", {
    strings: ["Taleh Abdullayev", "Web Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
