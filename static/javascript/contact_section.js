var contactSectionModule = (function () {
    const displaySubContentContact = function () {
        $('.contact-content-container').removeClass('hidden');
    };
    const removeSubContentContact = function () {
        $('.contact-content-container').addClass('hidden');
    };

    function showSummary() {
        $('.contact-summary').removeClass('hidden');

        // Update Contact Values //
        $('.summary-value-contact-first').text(valuesSubContentContact.firstName);
        $('.summary-value-contact-last').text(valuesSubContentContact.lastName);
        $('.summary-value-contact-email').text(valuesSubContentContact.email);
        $('.summary-value-contact-phone').text(valuesSubContentContact.phone);
        console.log('contact called')
    }

    function hideSummary() {
        $('.contact-summary').addClass('hidden');
    }

    // Contact Validation //
    const firstNameInput = $('.first-input').find('input');
    const lastNameInput = $('.last-input').find('input');
    const phoneInput = $('.phone-input').find('input');
    const emailInput = $('.email-input').find('input');

    function validateSubContentContact() {
        const validators = [
            validateFirstName(),
            validateLastName(),
            validatePhone(),
            validateEmail(),
        ];

        if (validators.every(allValid)) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    };

    // Validation //
    function validateFirstName() {
        const validators = [
            isNotEmpty(firstNameInput)
        ];

        if (validators.every(allValid)) {
            valuesSubContentContact.firstName = firstNameInput.val();
            return true;
        } else {
            return false;
        }
    }

    function validateLastName() {
        const validators = [
            isNotEmpty(lastNameInput)
        ];

        if (validators.every(allValid)) {
            valuesSubContentContact.lastName = lastNameInput.val();
            return true;
        } else {
            return false;
        }
    }

    function validatePhone() {
        const validators = [
            isNotEmpty(phoneInput)
        ];

        if (validators.every(allValid)) {
            valuesSubContentContact.phone = phoneInput.val();
            return true;
        } else {
            return false;
        }
    }

    function validateEmail() {
        const validators = [
            isNotEmpty(emailInput)
        ];

        if (validators.every(allValid)) {
            valuesSubContentContact.email = emailInput.val();
            return true;
        } else {
            return false;
        }
    }

    // Input Binding //
    firstNameInput.click(removeInvalidLineInput);
    lastNameInput.click(removeInvalidLineInput);
    phoneInput.click(removeInvalidLineInput);
    emailInput.click(removeInvalidLineInput);

    // Main //
    const valuesSubContentContact = {
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
    };

    const contactSubContact = new SubSection(
        'Contact',
        displaySubContentContact,
        removeSubContentContact,
        validateSubContentContact,
        valuesSubContentContact
    );
    const contactSubSections = [
        contactSubContact
    ];

    return {
        ContactSection: new Section('Contact.', $('.contact-container'), contactSubSections, showSummary, hideSummary),
    }

})();


