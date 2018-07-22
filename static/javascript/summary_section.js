var summarySectionModule = (function () {
    // Summary Section //
    const summaryCartContainer = $('.summary-cart-contents');
    const summaryCartLabels = $('.summary-header-labels');

    function updateSubTotal() {
        const subTotal = $('.summary-subtotal').find('.summary-cart-price');
        console.log(subTotal);
        subTotal.text('$'+testCart.getSubTotal())
    }

    function showPurchaseBtn() {
        $('.purple-button-next').addClass('hidden');
        $('.purple-button-purchase').removeClass('hidden');
    }

    function hidePurchaseBtn() {
        $('.purple-button-purchase').addClass('hidden');
        $('.purple-button-next').removeClass('hidden');
    }

    function showCartSection() {
        for (i = 0; i < testCart.products.length; i++) {
            const item = testCart.products[i];
            const title = item.book.title;
            const type = item.type;
            const qty = item.quantity;
            const itemTotal = item.book.purchasePrice * qty;
            const rowElement = $('<div class="summary-cart-row flex-container"></div>');
            rowElement.append('<p class="summary-cart-title">'+ title +'</p>');
            rowElement.append('<p class="summary-cart-qty">' + qty + '</p>');
            if (type === 'sell') {
                rowElement.append('<p class="summary-cart-price">$(' + itemTotal +')</p>')
            } else {
                rowElement.append('<p class="summary-cart-price">$'+ itemTotal + '</p>')
            }
            summaryCartContainer.prepend(rowElement);
        }
        updateSubTotal();
        showPurchaseBtn();
    }
    function showDeliverySummary() {
        delivery.element.animate({
            height: "21vw"
        });
        delivery.showSummary();
    }

    function showContactSummary() {
        contact.element.animate({
            height: "16vw"
        });
        contact.showSummary();

    }

    function showPaymentSummary() {
        payment.element.animate({
            height: "34vw"
        });
        payment.showSummary();
    }

    function displaySubContentSummary() {
        $('.header').css('height', '197vw');
        $('.a-graphic-background').css('min-height', '197vw');
        $('.header-wrapper').css('top', '-198vw');
        $('.summary-header').text('Cart');
        showDeliverySummary();
        showContactSummary();
        showPaymentSummary();
        showCartSection();
        summaryCartContainer.removeClass('hidden');
        summaryCartLabels.removeClass('hidden');
    }
    function removeSubContentSummary() {
        $('.header').css('height', '98vw');
        $('.a-graphic-background').css('min-height', '98vw');
        $('.header-wrapper').css('top', '-99vw');
        delivery.hideSummary();
        contact.hideSummary();
        payment.hideSummary();
        $('.summary-cart-contents').addClass('hidden');
        $('.summary-header-labels').addClass('hidden');
        removeCartElements();
        closeSections();
        removeSection(sections[2]);
        removeSection(sections[1]);
        removeSection(sections[0]);
        hidePurchaseBtn();
    }

    function removeCartElements() {
        $('.summary-cart-row').remove();
    }
    const summarySubSummary = new SubSection('Summary', displaySubContentSummary, removeSubContentSummary);
    const summarySubSections = [
        summarySubSummary
    ];

    return {
        SummarySection: new Section('Summary.', $('.summary-container'), summarySubSections)
    }
})();