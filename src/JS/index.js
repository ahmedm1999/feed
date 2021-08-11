
// left side menu 

const close_mob_left_menu = () => {
    menu_[0].classList.remove('showSideNav');
    menu_[0].classList.add('closeSideNav');
    setTimeout(() => {
        menu_[0].classList.remove('closeSideNav');
        menu_conteiner[0].style.display = 'none';
        window.overflowY = 'scroll';
    }, 400)

}

const open_menu_btn = document.querySelectorAll('#open_left_side_menu');
const close_menu_btn = document.querySelectorAll('#close-menu-btn');
const menu_ = document.getElementsByClassName('mob-left-menu-content');
const menu_conteiner = document.querySelectorAll('#mob-left-menu-container');
const navbar = document.getElementsByClassName('nav_bar_lg');


for (let index = 0; index < open_menu_btn.length; index++) {
    open_menu_btn[index].addEventListener('click', () => {
        menu_[0].classList.add('showSideNav');
        menu_conteiner[0].style.display = 'flex';
        window.overflowY = 'hidden';
    });
}


close_menu_btn[0].addEventListener('click', close_mob_left_menu);


// Dark/Light Mode toggler script 

var theme_toggler = document.querySelectorAll('img[data-name=theme]');

Array.from(theme_toggler).map(toggler => {
    toggler.addEventListener('click', function () {
        console.log('tog')
        if (toggler.getAttribute('data-check') === 'checked') {
            trans('../../assets/sun.svg')
            document.documentElement.setAttribute('data-theme', 'dark');
            toggler.setAttribute('data-check', 'un');
        } else {
            trans('../../assets/night-mode.svg')
            document.documentElement.setAttribute('data-theme', 'light');
            toggler.setAttribute('data-check', 'checked');
        }
        return 0;
    })
})


let trans = (img) => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000);
    for (let i = 0; i < theme_toggler.length; i++) {
        theme_toggler[i].setAttribute('src', img);
    }
}

// Resizing procces ...

const makeResp = () => {
    document.documentElement.setAttribute('data-screen', 'res-mob');
}

if (window.innerWidth <= 767) {
    makeResp();
    close_mob_left_menu();
}
let screen_size = 0
window.addEventListener('resize', () => {
    screen_size = window.innerWidth;
    if (screen_size <= 767) {
        makeResp();
    } else {
        document.documentElement.setAttribute('data-screen', 'big');
    }
    if (screen_size >= 767) {
        close_mob_left_menu();
    }
});
