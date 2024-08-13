
document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cart-icon');
    const cartPreview = document.createElement('div');
    cartPreview.id = 'cart-preview';
    document.body.appendChild(cartPreview);

    cartIcon.addEventListener('click', function() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length > 0) {
            let cartItemsHTML = '<h2>Carrito de Compras</h2><ul>';
            cart.forEach((item, index) => {
                cartItemsHTML += `
                    <li>
                        <img src="${item.image}" alt="${item.name}" style="width:50px;height:auto;">
                        <strong>${item.name}</strong> - ₡${item.price} x ${item.quantity}
                        <button class="remove-from-cart" data-index="${index}">Eliminar</button>
                    </li>`;
            });
            cartItemsHTML += '</ul><button id="checkout-btn">Pagar</button>';
            cartPreview.innerHTML = cartItemsHTML;

            document.querySelectorAll('.remove-from-cart').forEach(button => {
                button.addEventListener('click', function() {
                    const index = this.getAttribute('data-index');
                    cart.splice(index, 1);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    location.reload();
                });
            });

            document.getElementById('checkout-btn').addEventListener('click', function() {
                alert('Funcionalidad de pago aún no implementada');
            });
        } else {
            cartPreview.innerHTML = '<p>El carrito está vacío</p>';
        }
        cartPreview.classList.toggle('visible');
    });

    document.addEventListener('click', function(event) {
        if (!cartIcon.contains(event.target) && !cartPreview.contains(event.target)) {
            cartPreview.classList.remove('visible');
        }
    });
});
