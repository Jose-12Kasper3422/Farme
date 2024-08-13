
document.addEventListener('DOMContentLoaded', function() {
    const productosNormales = [
        { "name": "Aspirina", "category": "medicamentos", "price": 5400, "image": "images/producto.png" },
        { "name": "Paracetamol", "category": "medicamentos", "price": 6800, "image": "images/producto.png" },
        { "name": "Ibuprofeno", "category": "medicamentos", "price": 7200, "image": "images/producto.png" },
        { "name": "Vitamina C", "category": "suplementos", "price": 3800, "image": "images/producto.png" },
        { "name": "Omeprazol", "category": "medicamentos", "price": 4600, "image": "images/producto.png" },
        { "name": "Loratadina", "category": "medicamentos", "price": 3200, "image": "images/producto.png" },
        { "name": "Antibiótico", "category": "medicamentos", "price": 8500, "image": "images/producto.png" },
        { "name": "Antiinflamatorio", "category": "medicamentos", "price": 6900, "image": "images/producto.png" },
        { "name": "Analgésico", "category": "medicamentos", "price": 5400, "image": "images/producto.png" },
        { "name": "Antihistamínico", "category": "medicamentos", "price": 7200, "image": "images/producto.png" },
        { "name": "Laxante", "category": "medicamentos", "price": 3700, "image": "images/producto.png" },
        { "name": "Antidepresivo", "category": "medicamentos", "price": 9200, "image": "images/producto.png" },
        { "name": "Broncodilatador", "category": "medicamentos", "price": 7600, "image": "images/producto.png" },
        { "name": "Antiepiléptico", "category": "medicamentos", "price": 10400, "image": "images/producto.png" },
        { "name": "Diurético", "category": "medicamentos", "price": 5800, "image": "images/producto.png" },
        { "name": "Estatinas", "category": "medicamentos", "price": 8000, "image": "images/producto.png" },
        { "name": "Insulina", "category": "medicamentos", "price": 15000, "image": "images/producto.png" },
        { "name": "Antimicótico", "category": "cuidado personal", "price": 6200, "image": "images/producto.png" },
        { "name": "Antiviral", "category": "medicamentos", "price": 9300, "image": "images/producto.png" },
        { "name": "Antipirético", "category": "medicamentos", "price": 4100, "image": "images/producto.png" },
        { "name": "Anticoagulante", "category": "medicamentos", "price": 9800, "image": "images/producto.png" },
        { "name": "Anticonceptivo Oral", "category": "anticonceptivos", "price": 12000, "image": "images/producto.png" },
        { "name": "Anticonceptivo Inyectable", "category": "anticonceptivos", "price": 18000, "image": "images/producto.png" },
        { "name": "Crema Antifúngica", "category": "cuidado personal", "price": 5000, "image": "images/producto.png" },
        { "name": "Suplemento Multivitamínico", "category": "suplementos", "price": 8500, "image": "images/producto.png" },
        { "name": "Protector Solar", "category": "cuidado personal", "price": 12000, "image": "images/producto.png" },
        { "name": "Gel Antibacterial", "category": "cuidado personal", "price": 3000, "image": "images/producto.png" },
        { "name": "Jarabe para la Tos", "category": "medicamentos", "price": 7500, "image": "images/producto.png" },
        { "name": "Antigripal", "category": "medicamentos", "price": 5600, "image": "images/producto.png" },
        { "name": "Suero Oral", "category": "suplementos", "price": 3500, "image": "images/producto.png" },
        { "name": "Toallitas Desinfectantes", "category": "cuidado personal", "price": 9000, "image": "images/producto.png" },
        { "name": "Pastillas para Garganta", "category": "medicamentos", "price": 4200, "image": "images/producto.png" },
        { "name": "Crema Analgésica", "category": "cuidado personal", "price": 6800, "image": "images/producto.png" },
        { "name": "Colirio", "category": "cuidado personal", "price": 4300, "image": "images/producto.png" },
        { "name": "Protector Gástrico", "category": "medicamentos", "price": 8700, "image": "images/producto.png" }
    ];

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productContainer = document.getElementById('product-list-normales');

    // Función para renderizar productos según la búsqueda o el filtro
    function renderProducts(productList) {
        productContainer.innerHTML = '';
        productList.forEach(function(product) {
            const productElement = document.createElement('div');
            productElement.className = 'product-item';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Precio: ₡${product.price}</p>
                <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">Añadir al carrito</button>
            `;
            productContainer.appendChild(productElement);
        });
    }

    // Inicializar la lista de productos
    renderProducts(productosNormales);

    // Barra de búsqueda
    const searchInput = document.getElementById('product-search');
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = productosNormales.filter(product => product.name.toLowerCase().includes(query));
        renderProducts(filteredProducts);
    });

    // Filtros por categoría
    const categoryFilters = document.querySelector('.category-filter');
    categoryFilters.addEventListener('change', function() {
        const selectedCategory = this.value;
        const filteredProducts = selectedCategory === 'all' 
            ? productosNormales 
            : productosNormales.filter(product => product.category === selectedCategory);
        renderProducts(filteredProducts);
    });

    // Manejar la adición al carrito
    productContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart')) {
            const name = event.target.getAttribute('data-name');
            const price = parseInt(event.target.getAttribute('data-price'));
            const productInCart = cart.find(item => item.name === name);
            if (productInCart) {
                productInCart.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1, image: "images/producto.png" });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${name} ha sido añadido al carrito.`);
        }
    });
});
