$('.slider').click(howItWorksToggle);

function howItWorksToggle() {
    const btnSell = $('.slider-button-sell');
    const btnRent = $('.slider-button-rent');
    const rentBoxes = $('.box-rent');
    const sellBoxes = $('.box-sell');

    if (btnRent.hasClass('slider-button--active')) {
        btnRent.removeClass('slider-button--active');
        btnSell.addClass('slider-button--active');

        rentBoxes.addClass('box--hidden');
        sellBoxes.removeClass('box--hidden');
    } else {
        btnSell.removeClass('slider-button--active');
        btnRent.addClass('slider-button--active');

        sellBoxes.addClass('box--hidden');
        rentBoxes.removeClass('box--hidden');
    }
}