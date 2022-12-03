function validaNumericos(event) {
    return event.charCode >= 48 && event.charCode <= 57;
}



// // Movil
// const open__menu = document.getElementById("open__menu");
// const close__menu = document.getElementById("close__menu");
// const menu__movil = document.getElementById("menu__movil");
// const nav__movil = document.getElementById("nav__movil");
// const container = document.getElementById("container");
// const home = document.getElementById("home");
// const quien__soy = document.getElementById("quien__soy");
// const proyecto = document.getElementById("proyecto");
// const contacto = document.getElementById("contacto");

// open__menu.addEventListener("click", function(e) {
//     e.preventDefault();
//     open__menu.classList.add("active");
//     // nav__movil.classList.add("opacity-25");
//     // container.classList.add("opacity-25");
//     menu__movil.classList.remove('d-none');
// });

// close__menu.addEventListener("click", function(e) {
//     e.preventDefault();
//     open__menu.classList.remove("active");
//     menu__movil.classList.add('d-none');
//     // nav__movil.classList.remove("opacity-25");
//     // container.classList.remove("opacity-25");
// });

// quien__soy.addEventListener("click", function() {
//     open__menu.classList.remove("active");
//     menu__movil.classList.add('d-none');
//     // nav__movil.classList.remove("opacity-25");
//     // container.classList.remove("opacity-25");
// })

// proyecto.addEventListener("click", function() {
//     open__menu.classList.remove("active");
//     menu__movil.classList.add('d-none');
//     // nav__movil.classList.remove("opacity-25");
//     // container.classList.remove("opacity-25");
// })

// contacto.addEventListener("click", function() {
//     open__menu.classList.remove("active");
//     menu__movil.classList.add('d-none');
//     // nav__movil.classList.remove("opacity-25");
//     // container.classList.remove("opacity-25");
// });

// const cambiar__idioma = document.getElementById("cambiar__idioma");
// const cambiar__idioma__arg = document.getElementById("cambiar__idioma_arg");

// cambiar__idioma.addEventListener("click", (e) => {
//     e.preventDefault();
//     cambiar__idioma.classList.add('d-none');
//     cambiar__idioma__arg.classList.remove('d-none');
// });

// cambiar__idioma__arg.addEventListener("click", (e) => {
//     e.preventDefault();
//     cambiar__idioma.classList.remove('d-none');
//     cambiar__idioma__arg.classList.add('d-none');
// })

// const cambiar__idioma__movil = document.getElementById("cambiar__idioma__movil");
// const cambiar__idioma__movil__arg = document.getElementById("cambiar__idioma__movil__arg");

// cambiar__idioma__movil.addEventListener("click", (e) => {
//     e.preventDefault();
//     cambiar__idioma__movil.classList.add('d-none');
//     cambiar__idioma__movil__arg.classList.remove('d-none');
// });

// cambiar__idioma__movil__arg.addEventListener("click", (e) => {
//     e.preventDefault();
//     cambiar__idioma__movil.classList.remove('d-none');
//     cambiar__idioma__movil__arg.classList.add('d-none');
// })

$(document).ready(function() { irArriba(); });

function irArriba() {
    $('.ir-arriba').hide();
    $('.ir-arriba').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }) /*, 1000 */
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.ir-arriba').fadeIn();
        } else {
            $('.ir-arriba').fadeOut();
        }
    });
}