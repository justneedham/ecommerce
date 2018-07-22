// Data Structures //
function Section(name, element, subSections, showSummary, hideSummary) {
    this.title = name;
    this.element = element;
    this.subSections = subSections;
    this.currentSubSection = 0;
    this.showSummary = showSummary;
    this.hideSummary = hideSummary;
}

function SubSection(name, showContent, removeContent, validate, values) {
    this.title = name;
    this.isValid = false;
    this.showContent = showContent;
    this.removeContent = removeContent;
    this.validate = validate;
    this.values = values;
}

// Input Validation Helper Functions //
function displayInvalidLineInput(element, errorMessage) {
    element.addClass('line-input-invalid');
    let text = element.attr('placeholder');
    element.attr('placeholder', text + ' ' + errorMessage);
}

function removeInvalidLineInput(event) {
    const element = $(event.target);
    if (element.hasClass('line-input-invalid')) {
        element.removeClass('line-input-invalid');
        let text = element.attr('placeholder').split(' ');
        text.pop();
        element.attr('placeholder', text.join(' '));
    }
}

function allValid(test) {
    return test;
}

// Validation Logic //
function isNotEmpty(element) {
    if (!element.hasClass('line-input-invalid')) {
        const value = element.val();
        if (value === "") {
            displayInvalidLineInput(element, '(required)');
            return false;
        } else {
            return true;
        }
    }
}