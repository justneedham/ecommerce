var paymentSectionModule = (function () {

    //Payment Selector//
    function PaymentType(name, showFunction, hideFunction, validate, values) {
        this.name = name;
        this.showDetail = showFunction;
        this.hideDetail = hideFunction;
        this.validate = validate;
        this.values = values;
    }

    function showCardDetail() {
        $('.card-info').removeClass('hidden');
        $('.billing-info').removeClass('hidden');
    }

    function hideCardDetail() {
        $('.card-info').addClass('hidden');
        $('.billing-info').addClass('hidden');
    }

    function showUsernameDetail() {
        $('.username-info').removeClass('hidden');
    }

    function hideUsernameDetail() {
        $('.username-info').addClass('hidden');
    }

    // Payment Type Validators //
    const cardFirstName = $('.card-first').find('input');
    const cardLastName = $('.card-last').find('input');
    const cardNumber = $('.card-number').find('input');
    const cardExpDate = $('.card-exp').find('input');
    const cardSecCode = $('.card-code').find('input');

    const billingStreet = $('.billing-street').find('input');
    const billingApt = $('.billing-apt').find('input');
    const billingCity = $('.billing-city').find('input');
    const billingState = $('.billing-state').find('input');
    const billingZip = $('.billing-zip').find('input');

    function cardDetailValidate() {
        const validators = [
            validateFirstName(),
            validateLastName(),
            validateCardNumber(),
            validateExpDate(),
            validateSecurityCode(),
            validateStreet(),
            validateApt(),
            validateCity(),
            validateState(),
            validateZip(),
        ];

        if (validators.every(allValid)) {
            this.isValid = true;
            return true;
        } else {
            this.isValid = false;
            return false;
        }
    }

    // Card Validation //
    function validateFirstName() {
        const validators = [
            isNotEmpty(cardFirstName)
        ];

        if (validators.every(allValid)) {
            valuesSubContentPayment.firstName = cardFirstName.val();
            return true;
        } else {
            return false;
        }
    }

    function validateLastName() {
        const validators = [
            isNotEmpty(cardLastName)
        ];

        if (validators.every(allValid)) {
            valuesSubContentPayment.lastName = cardLastName.val();
            return true;
        } else {
            return false
        }
    }

    function validateCardNumber() {
        const validators = [
            isNotEmpty(cardNumber)
        ];

        if (validators.every(allValid)) {
            valuesSubContentPayment.cardNumber = cardNumber.val();
            return true;
        } else {
            return false;
        }
    }

    function validateExpDate() {
        const validators = [
            isNotEmpty(cardExpDate)
        ];

        if (validators.every(allValid)) {
            valuesSubContentPayment.expDate = cardExpDate.val();
            return true;
        } else {
            return false;
        }
    }

    function validateSecurityCode() {
        const validators = [
            isNotEmpty(cardSecCode)
        ];

        if (validators.every(allValid)) {
            valuesSubContentPayment.securityCode = cardSecCode.val();
            return true;
        } else {
            return false;
        }
    }

    function validateStreet() {
        const validators = [
            isNotEmpty(billingStreet)
        ];

        if (validators.every(allValid)) {
            valuesSubContentPayment.street = billingStreet.val();
            return true;
        } else {
            return false;
        }
    }

    function validateApt() {
        const validators = [
            isNotEmpty(billingApt)
        ];

        if (validators.every(allValid)) {
            valuesSubContentPayment.apt = billingApt.val();
            return true;
        } else {
            return false;
        }
    }

    function validateCity() {
        const validators = [
            isNotEmpty(billingCity)
        ];

        if (validators.every(allValid)) {
            valuesSubContentPayment.city = billingCity.val();
            return true;
        } else {
            return false;
        }
    }

    function validateState() {
        const validators = [
            isNotEmpty(billingState)
        ];

        if (validators.every(allValid)) {
            valuesSubContentPayment.state = billingState.val();
            return true;
        } else {
            return false;
        }
    }

    function validateZip() {
        const validators = [
            isNotEmpty(billingZip)
        ];

        if (validators.every(allValid)) {
            valuesSubContentPayment.zip = billingZip.val();
            return true;
        } else {
            return false
        }
    }

    const usernameInput = $('.username-username').find('input');
    const passwordInput = $('.username-password').find('input');

    function usernameValidate() {
        const validators = [
            validateUsername(),
            validatePassword(),
        ];

        if (validators.every(allValid)) {
            this.isValid =  true;
            return true;
        } else {
            this.isValid = false;
            return false;
        }
    }

    function validateUsername() {
        const validators = [
            isNotEmpty(usernameInput)
        ];

        if (validators.every(allValid)) {
            valuesSubContentPayment.username = usernameInput.val();
            return true;
        } else {
            return false
        }
    }

    function validatePassword() {
        const validators = [
            isNotEmpty(passwordInput)
        ];

        if (validators.every(allValid)) {
            valuesSubContentPayment.password = passwordInput.val();
            return true;
        } else {
            return false;
        }
    }

    // Payment type data structure //
    const cardValues = {
        firstName: null,
        lastName: null,
        cardNumber: null,
        expDate: null,
        securityCode: null,
        street: null,
        apt: null,
        city: null,
        state: null,
        zip: null,
    };

    const usernameVales = {
        username: null,
        password: null,
    };

    const bitcoin = new PaymentType('Bitcoin', showUsernameDetail, hideUsernameDetail, usernameValidate, usernameVales);
    const mastercard = new PaymentType('Master Card', showCardDetail, hideCardDetail, cardDetailValidate, cardValues);
    const paypal = new PaymentType('Paypal', showUsernameDetail, hideUsernameDetail, usernameValidate, usernameVales);
    const squarecash = new PaymentType('Square', showUsernameDetail, hideUsernameDetail, usernameValidate, usernameVales);
    const venmo = new PaymentType('Venmo', showUsernameDetail, hideUsernameDetail, usernameValidate, usernameVales);
    const visa = new PaymentType('Visa', showCardDetail, hideCardDetail, cardDetailValidate, cardValues);

    const paymentTypes = [
        bitcoin,
        mastercard,
        paypal,
        squarecash,
        venmo,
        visa,
    ];

    function getCurrentPaymentNumber(spinnerElement) {
        const elementClasses = spinnerElement[0].className.split(' ');
        if (elementClasses.indexOf('bitcoin-logo') >= 0) {
            return 0;
        } else if (elementClasses.indexOf('mastercard-logo') >= 0) {
            return 1;
        } else if (elementClasses.indexOf('paypal-logo') >= 0) {
            return 2;
        } else if (elementClasses.indexOf('square-logo') >= 0) {
            return 3;
        } else if (elementClasses.indexOf('venmo-logo') >= 0) {
            return 4;
        } else if (elementClasses.indexOf('visa-logo') >= 0) {
            return 5;
        }
    }

    function showPaymentDetails(paymentType) {
        paymentType.showDetail();
    }

    function hidePaymentDetails(paymentType) {
        paymentType.hideDetail();
    }

    function togglePayment(event) {
        const spinnerLogos = $('.spinner-logo');
        const element = $(event.target);
        if (!element.hasClass('spinner-logo--selected')) {
            spinnerLogos.removeClass('spinner-logo--selected');
            element.addClass('spinner-logo--selected');
            hidePaymentDetails(paymentTypes[selectedPayment]);
            selectedPayment = getCurrentPaymentNumber(element);
            showPaymentDetails(paymentTypes[selectedPayment]);
        }
    }

    $('.spinner-logo').click(togglePayment);
    // End Payment Detail Selector///

    // Base Payment Functions //
    function displaySubContentPayment() {
        $('.payment-content-container').removeClass('hidden');
    }

    function removeSubContentPayment() {
        $('.payment-content-container').addClass('hidden');
    }

    function showSummary() {
        $('.payment-summary').removeClass('hidden');
    }

    function hideSummary() {
        $('.payment-summary').addClass('hidden');
    }

    // Input Binding //
    cardFirstName.click(removeInvalidLineInput);
    cardLastName.click(removeInvalidLineInput);
    cardNumber.click(removeInvalidLineInput);
    cardExpDate.click(removeInvalidLineInput);
    cardSecCode.click(removeInvalidLineInput);

    billingStreet.click(removeInvalidLineInput);
    billingApt.click(removeInvalidLineInput);
    billingCity.click(removeInvalidLineInput);
    billingState.click(removeInvalidLineInput);
    billingZip.click(removeInvalidLineInput);

    usernameInput.click(removeInvalidLineInput);
    passwordInput.click(removeInvalidLineInput);

    var selectedPayment = 0;
    const valuesSubContentPayment = paymentTypes[selectedPayment].values;
    showPaymentDetails(paymentTypes[selectedPayment]);

    function validateSubContentPayment() {
        if (paymentTypes[selectedPayment].validate()) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    const paymentSubPayment = new SubSection(
        'Payment',
        displaySubContentPayment,
        removeSubContentPayment,
        validateSubContentPayment,
        valuesSubContentPayment,
        );

    const paymentSubSections = [
        paymentSubPayment
    ];
    return {
        PaymentSection: new Section('Payment.', $('.payment-container'), paymentSubSections, showSummary, hideSummary)
    }
})();