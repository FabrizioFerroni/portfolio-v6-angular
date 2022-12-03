const btns =
    $("#header .nav__navbar .nav__links");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",
        function() {
            const current = document
                .getElementsByClassName("active");

            current[0].className = current[0]
                .className.replace(" active", "");

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

            $('.nav__navbar a.active')
                .removeClass('active');

            $('.nav__navbar a').eq(i)
                .addClass('active');
        }
    });
}).scroll();