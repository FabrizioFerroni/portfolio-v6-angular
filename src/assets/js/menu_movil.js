const btns_movil =
    $("#header_movil .nav__navbar__movil .nav__links__movil");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",
        function() {
            const current = document
                .getElementsByClassName("active");

            current[0].className = current[0]
                .className.replace(" active", "");
            console.log(this.className);

            this.className += " active";
        });
}

/* Code for changing active
link on Scrolling */
$(window).scroll(function() {
    const distance = $(window).scrollTop();
    $('.page-section').each(function(i) {

        if ($(this).position().top <=
            distance + 250) {

            $('.nav__navbar__movil a.active')
                .removeClass('active');

            $('.nav__navbar__movil a').eq(i)
                .addClass('active');
        }
    });
}).scroll();

const togglemnu = document.getElementById("toggle-menu");
const nav = document.getElementById("nav");
const icon = document.getElementById("icon");
const icon_close = document.getElementById("icon-close");
const back_menu = document.getElementById("back_menu");
const home = document.getElementById("home");
const quien__soy = document.getElementById("quien__soy");
const proyecto = document.getElementById("proyecto");
const contacto = document.getElementById("contacto");

togglemnu.addEventListener('click', mostrar_menu);
back_menu.addEventListener('click', omenu);
home.addEventListener('click', omenu);
quien__soy.addEventListener('click', omenu);
proyecto.addEventListener('click', omenu);
contacto.addEventListener('click', omenu);

function mostrar_menu() {
    nav.classList.toggle('menu-movil--show');
    back_menu.classList.toggle('block');
    icon_close.classList.toggle('d-none');
    icon.classList.toggle('d-none');
}

function mmenu() {
    nav.classList.add('menu-movil--show');
    back_menu.classList.add('block');
}

function omenu() {
    nav.classList.remove('menu-movil--show');
    back_menu.classList.remove('block');
    icon_close.classList.add('d-none');
    icon.classList.remove('d-none');
}