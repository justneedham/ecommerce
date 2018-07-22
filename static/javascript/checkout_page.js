/////////////////////Global Variables////////////////

const sectionContainers = $('.checkout-step-container');
const closedHeight = $('.contact-container').height();

// TEST DATA //
const testCart = new Cart('Test Cart');
const bookOne = new Book(
    'Test Book One',
    'Test Author One',
    '89.99',
    '30.01',
    '30.02',
    '40.03',
    '20',
    'NO IMAGE'
);
const bookTwo = new Book(
    'Test Book Two',
    'Test Author One',
    '39.32',
    '23.12',
    '23.43',
    '23.43',
    '10.00',
    'NO IMAGE'
);
const cartItemOne = new CartItem(bookOne, 'purchase', 2);
const cartItemTwo = new CartItem(bookOne, 'purchase', 1);
const cartItemThree = new CartItem(bookTwo, 'purchase', 1);
testCart.products.push(cartItemOne, cartItemTwo, cartItemThree);

// END TEST DATA //
const contact = contactSectionModule.ContactSection;
const payment = paymentSectionModule.PaymentSection;
const delivery = deliverySectionModule.DeliverySection;
const summary = summarySectionModule.SummarySection;

// Main Data Structure //
const sections = [
    delivery,
    contact,
    payment,
    summary
];

/////////////////////Helper Functions////////////////

function toggleContainer(event) {
    const element = $(event.target.parentNode);
    if (element.hasClass('checkout-step-container')) {
        const elementNumber = getCurrentSectionNumber(element);
        if (elementNumber !== currentSection) {
            removeSection(sections[currentSection]);
            restoreDefault();
            closeSections();
            currentSection = elementNumber;
            displaySection(sections[currentSection]);
        }
    }
}

function getCurrentSectionNumber(element) {
    const elementClasses = element[0].className.split(' ');
    if (elementClasses.indexOf('delivery-container') >= 0){
        return 0;
    } else if (elementClasses.indexOf('contact-container') >= 0) {
        return 1;
    } else if (elementClasses.indexOf('payment-container') >= 0) {
        return 2;
    } else if (elementClasses.indexOf('summary-container') >= 0) {
        return 3;
    } else {
        console.log('error')
    }
}




////////////Helper Functions/////////////
function restoreDefault() {
    $('.delivery-header').text('Delivery');
    $('.summary-header').text('Summary');
}

function updateTitle(title) {
    $('.page-title').text(title);
}

function openSection(section) {
    section.animate({
        height: "40vw"
    });
}

function closeSections() {
    sectionContainers.animate({
        height: closedHeight
    })
}

function displaySection(section) {
    const subSection = section.subSections[section.currentSubSection];
    const subSectionTitleElement = section.element.find('h2.checkout-header');
    openSection(section.element);
    updateTitle(section.title);
    subSectionTitleElement.text(subSection.title);
    subSection.showContent();
}

function removeSection(section) {
    const subSection = section.subSections[section.currentSubSection];
    subSection.removeContent();
}

function validateSection(section) {
    const subSection = section.subSections[section.currentSubSection];
    subSection.validate();
    console.log(subSection.values)
}

// Main //
var currentSection = 0;
const startingSection = sections[currentSection];
displaySection(startingSection);

// Event Handling //
sectionContainers.click(toggleContainer);

$('.purple-button-next').click( function () {
    // Prevent out of range error //
    console.log(sessionStorage.getItem('test'));
    if (currentSection === 3) {
        console.log('error');
    } else {
        var section = sections[currentSection];
        if (section.currentSubSection !== section.subSections.length-1) {
            validateSection(section);
            if (section.subSections[section.currentSubSection].isValid === true) {
                removeSection(sections[currentSection]);
                section.currentSubSection += 1;
                displaySection(section);
            } else {
                console.log('invalid input')
            }
        } else {
            validateSection(section);
            if (section.subSections[section.currentSubSection].isValid === true) {
                removeSection(sections[currentSection]);
                restoreDefault();
                closeSections();
                currentSection += 1;
                displaySection(sections[currentSection])
            } else {
                console.log('invalid input')
            }
        }
    }
});

$('.purple-button-back').click( function () {
    // Prevent out of range error //
    if ((currentSection === 0) && (delivery.currentSubSection === 0)) {
     console.log('error');
    } else {
        var section = sections[currentSection];
        if (section.currentSubSection !== 0) {
            removeSection(sections[currentSection]);
            section.currentSubSection -= 1;
            displaySection(section)
        } else {
            removeSection(sections[currentSection]);
            restoreDefault();
            closeSections();
            currentSection -= 1;
            displaySection(sections[currentSection])
        }
    }
});












