
document.addEventListener('DOMContentLoaded', function() {
    const orderSummaryDiv = document.getElementById('order-summary');
    const paymentForm = document.getElementById('payment-form');

    // Obtener el carrito desde localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Renderizar el resumen del pedido
    let total = 0;
    let orderSummaryHTML = '<ul>';
    cart.forEach(item => {
        orderSummaryHTML += `
            <li>
                <strong>${item.name}</strong> - ₡${item.price} x ${item.quantity}
            </li>
        `;
        total += item.price * item.quantity;
    });
    orderSummaryHTML += `</ul><p><strong>Total a pagar:</strong> ₡${total}</p>`;
    orderSummaryDiv.innerHTML = orderSummaryHTML;

    // Manejar el envío del formulario de pago
    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulación de proceso de pago
        alert('Pago completado con éxito.');

        // Limpiar carrito y redirigir al perfil
        localStorage.removeItem('cart');
        window.location.href = 'perfil.html';
    });
});
