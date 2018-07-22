$('.search-filter-button').click(showDropDown);
$('.dropdown-button').click(hideDropDown);

function showDropDown() {
    const dropDown = $('.dropdown-container');
    dropDown.show();
}

function hideDropDown() {
    const dropDown = $('.dropdown-container');
    const filterBtn = $('.search-filter-button');
    const text = $(this).text();
    filterBtn.text(text);
    dropDown.hide()
}