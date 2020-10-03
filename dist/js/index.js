window.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('.menu'),
        menuItems = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active')
        menu.classList.toggle('menu_active')
    });
    menuItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active')
            menu.classList.toggle('menu_active')
        })
    })
    // header btns
    $('.subheader_btn, .promo_btn').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    });
    // mailer
    $('form').submit(function (e) {
        e.preventDefault();/* отключаем перезагрузку страницы */
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
})