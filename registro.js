
document.addEventListener('DOMContentLoaded', function() {
    const registroForm = document.getElementById('registro-form');
    
    registroForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validar que no exista un usuario con el mismo email
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert('Ya existe un usuario con este correo electrónico.');
            return;
        }

        // Guardar datos del usuario en localStorage
        users.push({ nombre, email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        window.location.href = 'login.html';
    });
});
