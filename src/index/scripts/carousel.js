require('./vendor/jquery-ui.js');
 
function initCarousel(args) {
    const default_params = {
        parentNodeSelector: '.carusel-wrapper',
        itemSelector: '.carusel-wrapper__item',
        btnLeftSelector: '.carusel-btn__left',
        btnRightSelector: '.carusel-btn__right',
        animationSpeed: 400
    };
    const params = Object.assign(default_params, args);

    const carouselNode = document.querySelector(params.parentNodeSelector);
    const buttonLeft = carouselNode.querySelector(params.btnLeftSelector);
    const buttonRight = carouselNode.querySelector(params.btnRightSelector);
    let items = Array.from(carouselNode.querySelectorAll(params.itemSelector));

    items.forEach((item, i) => {
        items[i] = $(item)
    });
    
    function slideLeft() {
        items.forEach((item, index) => {
            if (index != 0) {
                item.switchClass(`carusel-foto__${index}`, `carusel-foto__${index - 1}`, params.animationSpeed);
            }
        });
        items[0].switchClass('carusel-foto__0', `carusel-foto__${items.length-1}`, params.animationSpeed);
        items.push(items.shift());
    };

    function slideRight() {
        items.forEach((item, index) => {
            if (index != items.length - 1) {
                item.switchClass(`carusel-foto__${index}`, `carusel-foto__${index + 1}`, params.animationSpeed);
            }
        });
        items[items.length-1].switchClass(`carusel-foto__${items.length-1}`, 'carusel-foto__0', params.animationSpeed);
        items.unshift(items.pop());
    };
    buttonLeft.addEventListener('click', slideLeft);
    buttonRight.addEventListener('click', slideRight);
}

export { initCarousel }