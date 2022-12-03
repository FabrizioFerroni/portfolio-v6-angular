const inputs = document.querySelectorAll(".fake_placeholder input");
const textarea = document.querySelectorAll(".fake_placeholder textarea");
const select = document.querySelectorAll(".fake_placeholder select");

inputs.forEach((input) => {
    //cuando entramos en el input
    input.onfocus = () => {
        //al elemento anterior (el span) le agregamos la clase que la reubica en top
        input.previousElementSibling.classList.add("reubicar");
        input.classList.remove("input__pl");
    };
    //cuando salimos del input
    input.onblur = () => {
        //si no hay texto, le quitamos la clase reubicar,
        //para que se superponga con el input
        if (input.value.trim().length === 0) {
            input.previousElementSibling.classList.remove("reubicar");
            input.classList.add("input__pl");
        } else {
            input.previousElementSibling.classList.add("reubicar");
        }
    };
});

textarea.forEach((textarea) => {
    //cuando entramos en el input
    textarea.onfocus = () => {
        //al elemento anterior (el span) le agregamos la clase que la reubica en top
        textarea.previousElementSibling.classList.add("reubicar");
        textarea.previousElementSibling.classList.remove("textarea");
        textarea.classList.remove("textarea__pl");
    };

    //cuando salimos del textarea
    textarea.onblur = () => {
        //si no hay texto, le quitamos la clase reubicar,
        //para que se superponga con el textarea
        if (textarea.value.trim().length === 0) {
            textarea.previousElementSibling.classList.remove("reubicar");
            textarea.previousElementSibling.classList.add("textarea");
            textarea.classList.add("textarea__pl");
        } else {
            textarea.previousElementSibling.classList.add("reubicar");
        }
    };
});

select.forEach((select) => {
    //cuando entramos en el input
    select.onfocus = () => {
        //al elemento anterior (el span) le agregamos la clase que la reubica en top
        select.previousElementSibling.classList.add("reubicar");
        select.classList.remove("select-pd");
    };

    //cuando salimos del select
    select.onblur = () => {
        //si no hay texto, le quitamos la clase reubicar,
        //para que se superponga con el select
        if (select.value.trim().length === 0) {
            select.previousElementSibling.classList.remove("reubicar");
            select.classList.add("select-pd");
        } else {
            select.previousElementSibling.classList.add("reubicar");
        }
    };
});

// const form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const nombre = document.getElementById("frm__nombre").value;
//     const email = document.getElementById("frm__email").value;
//     const telefono = document.getElementById("frm__telefono").value;
//     const asunto = document.getElementById("frm__asunto").value;
//     const mensaje = document.getElementById("frm__mensaje").value;

//     if (nombre != "" && email != "" && telefono != "" && asunto != "" && mensaje != "") {
//         const obj = {
//             nombre: nombre,
//             email: email,
//             telefono: telefono,
//             asunto: asunto,
//             mensaje: mensaje
//         }
//         console.log(obj);
//         swal.fire({
//             title: 'Gracias ' + nombre + ' 😁',
//             text: "Se envío con éxito tu mensaje",
//             icon: 'success',
//             showCancelButton: false,
//             confirmButtonColor: '#c42729',
//             cancelButtonColor: '#918181',
//             confirmButtonText: 'Aceptar',
//             cancelButtonText: 'Cancelar',
//             background: '#180000',
//             customClass: {
//                 cancelButton: 'outnone',
//                 confirmButton: 'outnone',
//             }
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 // form.reset();
//                 window.location.reload();

//             }
//         });
//     } else {
//         swal.fire({
//             title: "Atención 😣",
//             text: "Todos los campos son obligatorios",
//             icon: 'warning',
//             showCancelButton: false,
//             confirmButtonColor: '#c42729',
//             confirmButtonText: 'Aceptar',
//             background: '#180000',
//             customClass: {
//                 cancelButton: 'outnone',
//                 confirmButton: 'outnone',
//                 title: 'swal2-title',
//             }
//         });
//     }
// });

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 1,
//     grabCursor: true,
//     spaceBetween: 10,
//     autoHeight: true,

//     autoplay: {
//         delay: 10500,
//         disableOnInteraction: false,
//     },

//     breakpoints: {
//         640: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//         },
//         768: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//         },
//         1024: {
//             slidesPerView: 2,
//             spaceBetween: 0,
//         },
//         1280: {
//             slidesPerView: 2,
//             spaceBetween: 0,
//         },
//         1366: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//         },
//         1920: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//         }
//     },

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });

// function validaNumericos(event) {
//     return event.charCode >= 48 && event.charCode <= 57;
// }



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

const cambiar__idioma = document.getElementById("cambiar__idioma");
const cambiar__idioma__arg = document.getElementById("cambiar__idioma_arg");

cambiar__idioma.addEventListener("click", (e) => {
    e.preventDefault();
    cambiar__idioma.classList.add('d-none');
    cambiar__idioma__arg.classList.remove('d-none');
});

cambiar__idioma__arg.addEventListener("click", (e) => {
    e.preventDefault();
    cambiar__idioma.classList.remove('d-none');
    cambiar__idioma__arg.classList.add('d-none');
})

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

// $(document).ready(function() { irArriba(); });

// function irArriba() {
//     $('.ir-arriba').hide();
//     $('.ir-arriba').click(function() {
//         $('body,html').animate({
//             scrollTop: 0
//         }) /*, 1000 */
//     });
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 200) {
//             $('.ir-arriba').fadeIn();
//         } else {
//             $('.ir-arriba').fadeOut();
//         }
//     });
// }