// Elementos del DOM
const iconMenu = document.querySelector(".icon-menu")
const iconCloseMenu = document.querySelector(".icon-close")
const menu = document.querySelector('.menu-responsive');
const overlay = document.querySelector(".overlay")
const navbar = document.querySelector(".navbar")
const btnNavbar = document.querySelector(".btn-navbar-list")
const aboutMeText = document.querySelector('.about-me-info')
const boxes = document.querySelectorAll(".box")
const chats = document.querySelectorAll(".chat")

const animationBoxes = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Si el elemento es visible
        if (entry.isIntersecting) {
            // Agrega una clase para animar el elemento
            entry.target.classList.add('animate-boxes');
        } else {
            // Si el elemento ya no es visible, remueve la clase de animación
            entry.target.classList.remove('animate-boxes');
        }
    });
});
boxes.forEach((box) => animationBoxes.observe(box))

const animationChats = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Si el elemento es visible
        if (entry.isIntersecting) {
            // Agrega una clase para animar el elemento
            if (entry.target.classList.contains('chat-1')){
                entry.target.classList.add('animate-chat1');
            }
            if (entry.target.classList.contains('chat-2')){
                entry.target.classList.add('animate-chat2');
            } 
            if (entry.target.classList.contains('chat-3')){
                entry.target.classList.add('animate-chat3');
            } 
        } else {
            // Si el elemento ya no es visible, remueve la clase de animación
            entry.target.classList.remove('animate-chat1');
            entry.target.classList.remove('animate-chat2');
            entry.target.classList.remove('animate-chat3');
        }
    });
});
chats.forEach((chat) => animationChats.observe(chat))

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
