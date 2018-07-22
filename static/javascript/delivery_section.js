var deliverySectionModule = (function () {
    // Type SubContent //
    function displaySubContentType() {
        $('.type-container').show();
        $('.img-viewable').show();

        const traditionalContainer = $('.traditional-container');
        const traditionalImageActive = $('.traditional-image--active');
        const traditionalImageInactive = $('.traditional-image--inactive');
        const traditionalOutline = $('.traditional-outline');

        const localContainer = $('.local-container');
        const localImageActive = $('.local-image--active');
        const localImageInactive = $('.local-image--inactive');
        const localOutline = $('.local-outline');

        //Delivery Type Binding//
        const typeContainers = $('.type-container-item');
        typeContainers.click(typeToggle);

        function typeToggle(event) {
            const element = $(event.target.parentNode);
            if (!$(element).hasClass('highlighted')) {
                if (element.hasClass('local-container')) {
                    currentType = 'Local';
                    traditionalContainer.removeClass('highlighted');
                    localContainer.addClass('highlighted');

                    traditionalImageActive.removeClass('img-viewable');
                    traditionalImageActive.addClass('img-hidden');
                    traditionalImageInactive.removeClass('img-hidden');
                    traditionalImageInactive.addClass('img-viewable');
                    traditionalOutline.removeClass('outline-viewable');
                    traditionalOutline.addClass('outline-hidden');

                    localImageActive.removeClass('img-hidden');
                    localImageActive.addClass('img-viewable');
                    localImageInactive.removeClass('img-viewable');
                    localImageInactive.addClass('img-hidden');
                    localOutline.removeClass('outline-hidden');
                    localOutline.addClass('outline-vieable');

                } else {
                    currentType = 'Traditional';
                    localContainer.removeClass('highlighted');
                    traditionalContainer.addClass('highlighted');

                    localImageActive.removeClass('img-viewable');
                    localImageActive.addClass('img-hidden');
                    localImageInactive.removeClass('img-hidden');
                    localImageInactive.addClass('img-viewable');
                    localOutline.removeClass('outline-viewable');
                    localOutline.addClass('outline-hidden');

                    traditionalImageActive.removeClass('img-hidden');
                    traditionalImageActive.addClass('img-viewable');
                    traditionalImageInactive.removeClass('img-viewable');
                    traditionalImageInactive.addClass('img-hidden');
                    traditionalOutline.removeClass('outline-hidden');
                    traditionalOutline.addClass('outline-vieable');
                }
            }
        }
    }

    function removeSubContentType() {
        $('.type-container').hide();

    }

    // Summary Container //
    function showSummary() {
        $('.delivery-summary').removeClass('hidden');

        // Set Details //
        $('.summary-value-delivery-type').text(valuesSubContentType.type);
        $('.summary-value-delivery-time').text(valuesSubContentTime.time);
        $('.summary-value-delivery-date').text(month+' '+valuesSubContentTime.date+'th');

        // Set Address//
        $('.summary-value-delivery-street').text(valuesSubContentAddress.streetOne);
        $('.summary-value-delivery-city').text(valuesSubContentAddress.city);
        $('.summary-value-delivery-zip').text(valuesSubContentAddress.zip);
        $('.summary-value-delivery-apt').text(valuesSubContentAddress.streetTwo);
        $('.summary-value-delivery-state').text(valuesSubContentAddress.state);
        $('.summary-value-delivery-country').text(valuesSubContentAddress.country);
    }

    function hideSummary() {
        $('.delivery-summary').addClass('hidden');
    }




    function validateSubContentType() {
        if ($('.local-container').hasClass('highlighted')) {
            this.isValid = true;
            this.values.type = 'Local'
        } else {
            this.isValid = true;
            this.values.type = 'Traditional'
        }
    }
    const valuesSubContentType = {
        type: null
    };
    const deliverySubType = new SubSection(
        'Type',
        displaySubContentType,
        removeSubContentType,
        validateSubContentType,
        valuesSubContentType
    );
    // End SubContent Type //


    // SubContent Address //
    function displaySubContentAddress() {
        const addressContainer = $('.address-container');
        addressContainer.removeClass('hidden');
    }
    function removeSubContentAddress() {
        const addressContainer = $('.address-container');
        addressContainer.addClass('hidden');
    }
    // Address Validation //
    const streetOneInput = $('.street-input').find('input');
    const streetTwoInput = $('.street-two-input').find('input');
    const cityInput = $('.city-input').find('input');
    const stateInput = $('.state-input').find('input');
    const zipInput = $('.zip-input').find('input');
    const countryInput = $('.country-input').find('input');

    // Input Binding //
    streetOneInput.click(removeInvalidLineInput);
    streetTwoInput.click(removeInvalidLineInput);
    cityInput.click(removeInvalidLineInput);
    stateInput.click(removeInvalidLineInput);
    zipInput.click(removeInvalidLineInput);
    countryInput.click(removeInvalidLineInput);

    function validateSubContentAddress() {
        const validators = [
            validateStreetOne(),
            validateStreetTwo(),
            validateCity(),
            validateState(),
            validateZip(),
            validateCountry()
        ];

        if (validators.every(allValid)) {
            this.isValid = true
        } else {
            this.isValid = false
        }

    }
    // Validation //
    function validateStreetOne() {
        const validators = [
            isNotEmpty(streetOneInput)
        ];

        if (validators.every(allValid)) {
            valuesSubContentAddress.streetOne = streetOneInput.val();
            return true;
        } else {
            return false;
        }
    }

    function validateStreetTwo() {
        const validators = [
            isNotEmpty(streetTwoInput)
        ];

        if (validators.every(allValid)) {
            valuesSubContentAddress.streetTwo = streetTwoInput.val();
            return true;
        } else {
            return false;
        }
    }

    function validateCity() {
        const validators = [
            isNotEmpty(cityInput)
        ];

        if (validators.every(allValid)) {
            valuesSubContentAddress.city = cityInput.val();
            return true;
        } else {
            return false;
        }
    }

    function validateState() {
        const validators = [
            isNotEmpty(stateInput)
        ];

        if (validators.every(allValid)) {
            valuesSubContentAddress.state = stateInput.val();
            return true;
        } else {
            return false;
        }
    }

    function validateZip() {
        const validators = [
            isNotEmpty(zipInput)
        ];

        if (validators.every(allValid)) {
            valuesSubContentAddress.zip = zipInput.val();
            return true;
        } else {
            return false;
        }
    }

    function validateCountry() {
        const validators = [
            isNotEmpty(countryInput)
        ];

        if (validators.every(allValid)) {
            valuesSubContentAddress.country = countryInput.val();
            return true;
        } else {
            return false
        }
    }

    const valuesSubContentAddress = {
        streetOne: null,
        streetTwo: null,
        city: null,
        state: null,
        zip: null,
        country: null,
    };

    const deliverySubAddress = new SubSection(
        'Address',
        displaySubContentAddress,
        removeSubContentAddress,
        validateSubContentAddress,
        valuesSubContentAddress,
    );
    // End SubContent Address


    // SubContent Time //



    function buildCalendarDays(totalDays) {
        const daysInMonth = [];
        for (day = 1; day <= totalDays; day++) {
            const dayElement = $('<p class="calendar-number">'+day+'</p>');
            dayElement.click(daySelection);
            daysInMonth.push(dayElement)
        }
        return daysInMonth;
    }

    function daySelection() {
        const element = $(event.target);
        $('.calendar-number').removeClass('calendar-number--active');
        element.addClass('calendar-number--active');
    }

    function buildWeekDays() {
        return [
            $('<p class="calendar-weekday">S</p>'),
            $('<p class="calendar-weekday">M</p>'),
            $('<p class="calendar-weekday">T</p>'),
            $('<p class="calendar-weekday">W</p>'),
            $('<p class="calendar-weekday">T</p>'),
            $('<p class="calendar-weekday">F</p>'),
            $('<p class="calendar-weekday">S</p>'),
        ];
    }

    function buildTimes() {
        return [
            $('<p class="time-item">7:00 pm</p>').click(timeSelection),
            $('<p class="time-item">7:30 pm</p>').click(timeSelection),
            $('<p class="time-item">8:00 pm</p>').click(timeSelection),
            $('<p class="time-item">8:30 pm</p>').click(timeSelection),
            $('<p class="time-item">9:00 pm</p>').click(timeSelection),
        ];
    }

    function timeSelection() {
        const element = $(event.target);
        $('.time-item').removeClass('time-item--active');
        element.addClass('time-item--active');
    }

    function buildOptions() {
        return [
            $('<p class="time-item">Overnight</p>'),
            $('<p class="time-item">Expedited</p>'),
            $('<p class="time-item">Standard</p>'),
        ]
    }

    function buildTraditionalCalendarElement(currentDay, month, year) {
        // Builds and hides the content for time subsection
        const timeContainer = $('<div class="flex-container time-container time-container-traditional hidden"></div>');

        // Calendar
        const calendar = $('<div class="traditional-calendar"></div>');
        const calendarHeader = $('<h2 class="time-header calendar-header">' + month + ' ' + year + '</h2>');
        const weekDays = buildWeekDays();
        const daysInMonth = buildCalendarDays(31);
        const gridValues = weekDays.concat(daysInMonth);

        calendar.append(calendarHeader);
        const mainGrid = $('<div class="main-days-grid traditional-days-grid"></div>');
        mainGrid.append(gridValues);
        calendar.append(mainGrid);

        // Shipping Selector
        const shippingSelector = $('<div class="flex-container time-selector"></div>');
        const selectorHeader = $('<h2 class="time-header selector-header">Traditional</h2>');
        const options = buildOptions();
        shippingSelector.append(selectorHeader, options);

        // Calendar Key
        const todayKey = $('<div class="flex-container today-key"></div>');
        const todayBubble = $('<p class="key-bubble">X</p>');
        const todayText = $('<p class="text key-text">Today</p>');
        todayKey.append(todayBubble, todayText);

        const deliveryKey = $('<div class="flex-container delivery-key"></div>');
        const deliveryBubble = $('<p class="key-bubble">X</p>');
        const deliveryText = $('<p class="text key-text">Delivery</p>');
        deliveryKey.append(deliveryBubble, deliveryText);

        const calendarKeyContainer = $('<div class="flex-container calendar-key"></div>');
        calendarKeyContainer.append(todayKey, deliveryKey);

        // Put all together
        timeContainer.append(calendar, shippingSelector, calendarKeyContainer);
        $('.delivery-container').append(timeContainer);
    }

    function buildLocalCalandarElement(currentDay, month, year) {
        // Builds and hides the contents for time subsection
        const timeContainer = $('<div class="flex-container time-container time-container-local hidden"></div>');

        // Calendar
        const calendar = $('<div class="local-calendar"></div>');
        const calendarHeader = $('<h2 class="time-header calendar-header">' + month + ' ' + year + '</h2>');
        const weekDays = buildWeekDays();
        const daysInMonth = buildCalendarDays(31);
        const gridValues = weekDays.concat(daysInMonth);

        calendar.append(calendarHeader);
        const mainGrid = $('<div class="main-days-grid local-days-grid"></div>');
        mainGrid.append(gridValues);
        calendar.append(mainGrid);

        // Time Selector
        const timeSelector = $('<div class="flex-container time-selector"></div>');
        const selectorHeader = $('<h2 class="time-header selector-header">May 6th</h2>');
        const times = buildTimes();
        timeSelector.append(selectorHeader, times);

        // Put all together
        timeContainer.append(calendar, timeSelector);
        $('.delivery-container').append(timeContainer);
    }

    const month = 'May';
    const year = '2018';
    const currentDay = '24';
    buildLocalCalandarElement(currentDay, month, year);
    buildTraditionalCalendarElement(currentDay, month, year);



    function displaySubContentTime() {
        if (valuesSubContentType.type === 'Local') {
            $('.time-container-local').removeClass('hidden')
        } else {
            $('.time-container-traditional').removeClass('hidden')
        }
    }

    function removeSubContentTime() {
        $('.time-container').addClass('hidden');
    }

    function validateSubContentTime() {
        const validators = [
            validateDate(),
            validateTime()
        ];

        if (validators.every(allValid)) {
            this.isValid = true
        } else {
            this.isValid = false
        }
    }

    function validateDate() {
        const dateElement = $('.calendar-number--active');
        if (dateElement.length > 0) {
            valuesSubContentTime.date = dateElement.text();
            return true;
        } else {
            return false;
        }
    }

    function validateTime() {
        const timeElement = $('.time-item--active');
        if (timeElement.length > 0) {
            valuesSubContentTime.time = timeElement.text();
            return true;
        } else {
            return false;
        }
    }

    const valuesSubContentTime = {
        date: null,
        time: null,
    };

    const deliverySubTime = new SubSection(
        'Time',
        displaySubContentTime,
        removeSubContentTime,
        validateSubContentTime,
        valuesSubContentTime,
        );
    // End SubContent Time //

    const deliverySubSections = [
        deliverySubType,
        deliverySubAddress,
        deliverySubTime
    ];

    return {
        DeliverySection: new Section('Delivery.', $('.delivery-container'), deliverySubSections, showSummary, hideSummary)
        }
})();

