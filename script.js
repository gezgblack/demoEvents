document.getElementById('adClickBtn').addEventListener('click', function() {
    console.log('AdClick button was clicked');
    alert('AdClick action performed');
});

document.getElementById('addToCartBtn').addEventListener('click', function() {
    console.log('Item added to cart');
    alert('Item added to cart');
});

document.getElementById('beginCheckoutBtn').addEventListener('click', function() {
    console.log('Checkout process started');
    alert('Checkout process started');
});

document.getElementById('finishCheckoutBtn').addEventListener('click', function() {
    console.log('Checkout completed');
    alert('Checkout completed');
});
