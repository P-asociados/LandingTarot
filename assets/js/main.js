// Elementos del DOM
const iconMenu = document.querySelector(".icon-menu")
const iconCloseMenu = document.querySelector(".icon-close")
const menu = document.querySelector('.menu-responsive');
const overlay = document.querySelector(".overlay")
const navbar = document.querySelector(".navbar")
const btnNavbar = document.querySelector(".btn-navbar-list")
const aboutMeText = document.querySelector('.about-me-info')

// const animationObj2 = () => {
//     let chat1 = document.querySelector('.chat-1')
//     let chat2 = document.querySelector('.chat-2')
//     let chat3 = document.querySelector('.chat-3')
//     let positionChat = chat1.getBoundingClientRect().top;
//     let sizeScreenChat = window.innerHeight/3;
//     if (chat1 < sizeScreenChat) {
//         chat1.style.animation = 'fade 1,5s ease out forwards'
//     }
// }

const animationObj = () => {
    let positionObj = aboutMeText.getBoundingClientRect().top;
    let sizeScreen = window.innerHeight/1.5;
    console.log(sizeScreen);
    if (positionObj < sizeScreen) {
        aboutMeText.style.animation = 'fade 1.5s ease-out forwards'
    }
}

const toggleMenu = () => {
	menu.classList.toggle("open-menu");
    overlay.classList.toggle("show-overlay");
};

const closeOnScroll = () => {
    menu.classList.remove("open-menu");
	overlay.classList.remove("show-overlay");
};

const closeOnOverlayClick = () => {
    menu.classList.remove("open-menu");
	overlay.classList.remove("show-overlay");
};

// Función para verificar el tamaño de la pantalla y realizar acciones correspondientes
const verificarTamañoPantalla = () => {
    var anchoPantalla = window.innerWidth;

    if (anchoPantalla < 1024) {
        // Acciones para dispositivos móviles
        overlay.style.display = "none"
    } else {
      // Acciones para escritorio
      // ...
        overlay.style.display = "none"
    }
}

// Scroll
const scroll = () => {
    let scrollPos = window.scrollY
    if (scrollPos > 39) {
        navbar.classList.add("bg-violet")
        btnNavbar.classList.remove("button-violet")
        btnNavbar.classList.add("button-white")
    }
    else {
        navbar.classList.remove("bg-violet")
        btnNavbar.classList.remove("button-white")
        btnNavbar.classList.add("button-violet")
    }
}

const init = () => {
    // Clicks
    iconMenu.addEventListener('click', toggleMenu);
    iconCloseMenu.addEventListener("click", closeOnOverlayClick)
    overlay.addEventListener('click', closeOnOverlayClick)
    // Scrolls
    window.addEventListener("scroll", closeOnScroll);
    window.addEventListener("scroll", scroll)
    window.addEventListener('scroll', animationObj)
    window.addEventListener('scroll', animationObj2)
    /// Load
    window.addEventListener('load', verificarTamañoPantalla);
    // Resize
    window.addEventListener('resize', verificarTamañoPantalla);
}

init()
