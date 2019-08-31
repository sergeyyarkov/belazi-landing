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
});
// Questions Tooltip
const links = document.querySelectorAll('.wrap-questions__item a');
links.forEach((link) => {
    link.addEventListener('click', () => {
        const contentTollTip = link.parentNode.parentNode.querySelector('.question-content');
        const contentTollTipClose = link.parentNode.parentNode.querySelector('.tooltip-close');
        contentTollTipClose.addEventListener('click', () => {
            contentTollTip.style.display = 'none';
            contentTollTip.classList.remove('fade');
        });
        contentTollTip.classList.add('fade');
        contentTollTip.style.display = 'block';
    });
});