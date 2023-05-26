const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar-list');
const navbarR = document.querySelector('.navbar-responsive');
const overlay = document.querySelector('.overlay');
const iconClose = document.querySelector('.icon-close');
const menuToggle = document.querySelector('#menu-toggle');


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

// Ejecutar la función cuando se carga la página y cuando se redimensiona la ventana
window.addEventListener('load', verificarTamañoPantalla);
window.addEventListener('resize', verificarTamañoPantalla);
menuToggle.addEventListener('click', showMenu);
overlay.addEventListener('click', hiddenMenu);
iconClose.addEventListener('click', hiddenMenu);

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

// Detectar si es un dispositivo móvil y el sistema operativo
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

// Ajustar el tamaño del viewport
function adjustViewportHeight() {
  var vh = window.innerHeight;

  // Si es un dispositivo móvil y es iOS, restar la altura de la barra de navegación
  if (isMobile && isIOS) {
    vh -= (window.outerHeight - window.innerHeight);
  }

  // Establecer la altura en CSS personalizado
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

// Ejecutar la función de ajuste inicialmente y en caso de cambio de tamaño de ventana
adjustViewportHeight();
window.addEventListener('resize', adjustViewportHeight)
window.addEventListener('scroll', adjustViewportHeight);



