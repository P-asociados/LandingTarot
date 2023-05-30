// Elementos del DOM
const openBtn = document.querySelector('.blantershow-chat');
const closeBtn = document.querySelector('.close-chat');
const popup = document.getElementById('whatsapp-chat');
const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar-list');
const navbarR = document.querySelector('.navbar-responsive');
const overlay = document.querySelector('.overlay');
const iconClose = document.querySelector('.icon-close');
const menuToggle = document.querySelector('#menu-toggle');
const aboutMeText = document.querySelector('.about-me-info')

const animationObj2 = () => {
    let chat1 = document.querySelector('.chat-1')
    let chat2 = document.querySelector('.chat-2')
    let chat3 = document.querySelector('.chat-3')
    let positionChat = chat1.getBoundingClientRect().top;
    let sizeScreenChat = window.innerHeight/3;
    if (chat1 < sizeScreenChat) {
        chat1.style.animation = 'fade 1,5s ease out forwards'
    }
}

const animationObj = () => {
    let positionObj = aboutMeText.getBoundingClientRect().top;
    let sizeScreen = window.innerHeight/1.5;
    console.log(sizeScreen);
    if (positionObj < sizeScreen) {
        aboutMeText.style.animation = 'fade 1.5s ease-out forwards'
    }
}

// Enviar mensaje por WhataApp
const sendMensaje = () => {
	var a = document.getElementById("chat-input")
    if ("" != a.value) {
        var b = document.getElementById("get-number").innerHTML,
        c = document.getElementById("chat-input").value, 
        d = "https://web.whatsapp.com/send", 
        e = b,  
        f = "&text=" + c
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
        var d = "whatsapp://send";  
        var g = d + "?phone=" + e + f;  
        window.open(g, "_blank");
    }
}

// Abrir chat
const showChat = () => {
    popup.classList.remove('hidden');
    popup.style.animationName = 'showPopup';
}

// Cerrar chat
const hideChat = () => {
    popup.style.animationName = 'hidePopup';
    popup.addEventListener('animationend', function() {
        popup.classList.add('hidden');
        popup.style.animationName = '';
    }, { once: true });
}

const showMenu = () => {
    navbarR.style.display = "flex"
    overlay.style.display = 'block';
}

const hiddenMenu = () =>  {
    navbarR.style.display = "none"
    overlay.style.display = 'none';
}

// Función para verificar el tamaño de la pantalla y realizar acciones correspondientes
const verificarTamañoPantalla = () => {
    var anchoPantalla = window.innerWidth;

    if (anchoPantalla < 1024) {
        // Acciones para dispositivos móviles
        navbar.style.display = "none"
        overlay.style.display = "none"
        navbarR.style.display = "none"
    } else {
      // Acciones para escritorio
      // ...
        navbar.style.display = "flex"
        navbarR.style.display = "none"
    }
}

// Scroll
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar")
    let btnNavbar = document.querySelector(".btn-navbar-list")
    let scrollPos = window.scrollY

    if (scrollPos > 39) {
        navbar.style.backgroundColor = "var(--violet)"
        navbar.style.transition = "background-color 0.3s ease-in-out"
        btnNavbar.classList.remove("button-violet")
        btnNavbar.classList.add("button-white")
        btnNavbar.style.transition = "all 0.3s ease-in-out"
    }
    else {
        navbar.style.backgroundColor = "transparent"
        navbar.style.transition = "background-color 0.3s ease-in-out"
        btnNavbar.classList.remove("button-white")
        btnNavbar.classList.add("button-violet")
        btnNavbar.style.transition = "all 0.3s ease-in-out"
    }
});  


const init = () => {
    window.addEventListener('resize', adjustViewportHeight)
    window.addEventListener('scroll', adjustViewportHeight);
    window.addEventListener('load', verificarTamañoPantalla);
    window.addEventListener('resize', verificarTamañoPantalla);
    menuToggle.addEventListener('click', showMenu);
    overlay.addEventListener('click', hiddenMenu);
    iconClose.addEventListener('click', hiddenMenu);
    // openBtn.addEventListener('click', showChat);
    // closeBtn.addEventListener('click', hideChat);
    window.addEventListener('scroll', animationObj)
    window.addEventListener('scroll', animationObj2)
}

init()
