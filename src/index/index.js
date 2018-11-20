import { mainMenu } from './scripts/menu.js';
import { initCarousel } from './scripts/carousel.js';
import './index.scss';
 
mainMenu();

initCarousel({animationSpeed: 500});


// CURRENCY SELECT

const container = document.querySelector('.select');
const flag = document.querySelector('.select__flag');
const header = document.querySelector('.select__header');
const header_text = document.querySelector('.select__text');
const controls = document.querySelectorAll('.select__control');

for(let i = 0; i < controls.length; i++) {
    controls[i].onclick = selectOption;
}

function toggle () {
    if(container.classList.contains('select_opened')) {
        close();
    } else {
        open();
    }
}

function close () {
    container.classList.remove('select_opened');
}

function open () {
    container.classList.add('select_opened');
}

function selectOption () {
    console.log(this);
    const text = this.textContent;
    const flag_src = this.getElementsByTagName('img')[0].src;
    header_text.textContent = text;
    flag.src = flag_src;
    close();
}

header.onclick = toggle;

