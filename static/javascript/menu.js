
$('#xyz').click(toggleMenu);
$('.filter').click(hideMenu);

function toggleMenu() {
    const menuIcon = $('#xyz');
    if (menuIcon.hasClass('x-icon')) {
        hideMenu();
    } else {
       showMenu();
    }
}

function showMenu() {
    const menuIcon = $('#xyz');
    const menu = $('.menu-container');
    const filter = $('.filter');

    menuIcon.addClass('x-icon');
    filter.show();
    menu.animate({'margin-left':'0'}, 350);
}

function hideMenu() {
    const menuIcon = $('#xyz');
    const menu = $('.menu-container');
    const filter = $('.filter');

     menuIcon.removeClass('x-icon');
     filter.hide();
     menu.animate({'margin-left':'25vw'},350)
}



