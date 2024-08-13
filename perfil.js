
document.addEventListener('DOMContentLoaded', function() {
    const userInfoDiv = document.getElementById('user-info');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        userInfoDiv.innerHTML = `
            <p><strong>Nombre:</strong> ${loggedInUser.nombre}</p>
            <p><strong>Correo Electrónico:</strong> ${loggedInUser.email}</p>
            <button id="logout-btn">Cerrar Sesión</button>
        `;

        document.getElementById('logout-btn').addEventListener('click', function() {
            localStorage.removeItem('loggedInUser');
            alert('Sesión cerrada.');
            window.location.href = 'login.html';
        });
    } else {
        alert('No has iniciado sesión. Por favor, inicia sesión.');
        window.location.href = 'login.html';
    }
});
