
document.addEventListener('DOMContentLoaded', function() {
    const anticonceptivos = [
        { "name": "Pastillas Anticonceptivas", "price": 4500, "image": "images/producto.png" },
        { "name": "Anillo Vaginal", "price": 7200, "image": "images/producto.png" },
        { "name": "Parche Anticonceptivo", "price": 6800, "image": "images/producto.png" },
        { "name": "Implante Subdérmico", "price": 10500, "image": "images/producto.png" },
        { "name": "DIU Hormonal", "price": 13000, "image": "images/producto.png" },
        { "name": "DIU de Cobre", "price": 12000, "image": "images/producto.png" },
        { "name": "Inyección Anticonceptiva", "price": 5400, "image": "images/producto.png" },
        { "name": "Condón Masculino", "price": 1500, "image": "images/producto.png" },
        { "name": "Condón Femenino", "price": 2200, "image": "images/producto.png" },
        { "name": "Píldora de Emergencia", "price": 3600, "image": "images/producto.png" }
    ];

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productContainer = document.getElementById('product-list-anticonceptivos');

    anticonceptivos.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('producto');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Precio: ₡${product.price}</p>
            <label for="quantity-${product.name}">Cantidad:</label>
            <input type="number" id="quantity-${product.name}" name="quantity" value="1" min="1">
            <button class="add-to-cart" data-product="${product.name}">Agregar al Carrito</button>
        `;
        productContainer.appendChild(productDiv);
    });

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart')) {
            const productName = event.target.getAttribute('data-product');
            const product = anticonceptivos.find(p => p.name === productName);
            const quantityInput = document.getElementById(`quantity-${productName}`);
            const quantity = parseInt(quantityInput.value);
            const cartItem = cart.find(item => item.name === productName);

            if (cartItem) {
                cartItem.quantity += quantity;
            } else {
                cart.push({ ...product, quantity: quantity });
            }

            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Su producto ya se agregó al carrito.');
        }
    });
});
