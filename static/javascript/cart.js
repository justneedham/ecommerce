// Shopping Cart //

// Cart Data Structure //
var shoppingCart = Cart();

function Cart() {
    this.products = [];
    this.getSubTotal = function () {
        var total = 0;
        for (i = 0; i < this.products.length; i++) {
            const item = this.products[i];
            if (item.type === 'sell') {
                total -= item.quantity * item.book.value;
            } else if (item.type === 'purchase') {
                total += item.quantity * item.book.purchasePrice;
            } else if (item.type === 'rentOne') {
                total += item.quantity * item.book.rentalPriceOne;
            } else if (item.type === 'rentTwo') {
                total += item.quantity * item.book.rentalPriceTwo;
            } else if (item.type === 'rentThree') {
                total += item.quantity * item.book.rentalPriceThree;
            } else {
                console.log('GET SUBTOTAL ERROR')
            }
        }
        return roundToDollar(total);
    }
}

function CartItem(item, type, quantity) {
    this.book = item;
    this.type = type;
    this.quantity = quantity;
}

function Book(title, author, purchase, rentOne, rentTwo, rentThree, value, img) {
    this.title = title;
    this.author = author;
    this.purchasePrice = purchase;
    this.rentalPriceOne = rentOne;
    this.rentalPriceTwo = rentTwo;
    this.rentalPriceThree = rentThree;
    this.value = value;
    this.image = img;
}

// Cart Helper Functions //

function roundToDollar(number) {
    return Math.round(number * 100) / 100;
}

function cartToJSON() {
    var jsonCart = JSON.stringify(shoppingCart);
    sessionStorage.setItem('Cart', jsonCart);
}

function JSONtoCart() {
    var jsonCart = sessionStorage.getItem('Cart');
    shoppingCart = JSON.parse(jsonCart);
}

cartToJSON()
