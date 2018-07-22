$('.version-tab').click(toggleVersionTab);
$('.purple-button-rent').click(showRentalContainer);
$('.exit-icon').click(hideRentalContainer);
$('.filter-level-two').click(hideRentalContainer);
$('.rental-period').click(rentalPeriodToggle);
$('.rental-period-container').hide();

function rentalPeriodToggle() {
    const rentalPeriod = $(this);
    const rentalText = $(this).find('>');
    if (!rentalPeriod.hasClass('rental-period--selected')) {
        const otherPeriods = $('.rental-period');
        const otherText = $('.rental-period-text');
        otherPeriods.removeClass('rental-period--selected');
        otherText.removeClass('rental-period-text--selected');
        rentalPeriod.addClass('rental-period--selected');
        rentalText.addClass('rental-period-text--selected');
    }

}

function showRentalContainer() {
    const rentalPeriodContainer = $('.rental-period-container');
    const filter = $('.filter-level-two');
    rentalPeriodContainer.fadeIn();
    filter.fadeIn();

}

function hideRentalContainer() {
    $('.rental-period-container').fadeOut();
    $('.filter-level-two').fadeOut();

}

function toggleVersionTab() {
    const versionTab = $(this);
    if (!versionTab.hasClass('version-tab--active')) {
        const otherTabs = $('.version-tab');
        otherTabs.removeClass('version-tab--active');
        versionTab.addClass('version-tab--active');
    }
}

// Add to Cart //

// Binding //
$('.purple-button-add-to-cart').click(addRentalToCart);

function addRentalToCart() {
    const rentalElement = $('.rental-period--selected');
    const period = rentalElement.find('.period').text();
    const rentalExtra = rentalElement.find('.price').text();
    JSONtoCart();
    shoppingCart.products.push('testing 1 2 3');
    cartToJSON();






}





