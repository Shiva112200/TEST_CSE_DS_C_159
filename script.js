const quantityInput = document.getElementById('quantity');
const totalPrice = document.getElementById('total');
const pricePerItem = 15;

quantityInput.addEventListener('input', updateTotalPrice);

function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value) || 1;
    totalPrice.textContent = pricePerItem * quantity;
}

function buyNow() {
    const quantity = parseInt(quantityInput.value) || 1;
    const total = pricePerItem * quantity;
    alert(`You added ${quantity} items in your cart for Rs. ${total}`);
}
