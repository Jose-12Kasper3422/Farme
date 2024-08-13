
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            alert('Inicio de sesión exitoso.');
            window.location.href = 'perfil.html';
        } else {
            alert('Correo electrónico o contraseña incorrectos.');
        }
    });
});
