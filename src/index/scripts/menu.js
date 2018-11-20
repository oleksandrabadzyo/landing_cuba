function mainMenu() {
    let menuItems = Array.from(document.querySelectorAll('.global-nav__item'));
    const activeClassName = 'global-nav__item_active';

    function onClick(index) {
        console.log('click ' + index);
        menuItems.forEach((item) => {
            item.classList.remove(activeClassName); 
        })
        menuItems[index].classList.add(activeClassName);
    };

    menuItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            onClick(index);
        })
    })

}

export { mainMenu };

