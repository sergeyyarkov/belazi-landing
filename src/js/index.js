$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    mouseDrag: false,
    navText: ["<img src='./src/img/main-stock/left-arrow.png' alt='#'>", "<img src='./src/img/main-stock/right-arrow.png' alt='#'>"],
    responsive: {
        0: {
            items: 1
        },
        370: {
            items: 2
        },
        600: {
            items: 2
        },
        700: {
            items: 3
        },
        1000: {
            items: 3,
            nav: true
        }
    }
})