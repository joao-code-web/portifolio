document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide1', {
        type: 'slide',
        rewind: true,
        autoplay: false, 
        interval: 5000,
        pagination: false,
        speed: 1000, 
        easing: 'ease-in-out', 
    }).mount();

    new Splide('#splide2', {
        type: 'slide',
        rewind: true,
        autoplay: false, 
        interval: 5000,
        pagination: false,
        speed: 1000, 
        easing: 'ease-in-out', 
    }).mount();
});
