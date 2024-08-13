
document.addEventListener('DOMContentLoaded', function() {
    const notificacionesDiv = document.getElementById('notificaciones');

    // Simular algunas notificaciones
    const notificaciones = [
        { mensaje: "¡Oferta especial! 20% de descuento en productos de cuidado personal.", fecha: "2024-08-12" },
        { mensaje: "Tu pedido ha sido enviado y está en camino.", fecha: "2024-08-11" },
        { mensaje: "Nuevo producto disponible: Suplemento Multivitamínico.", fecha: "2024-08-10" }
    ];

    // Renderizar notificaciones
    let notificacionesHTML = '<ul>';
    notificaciones.forEach(notificacion => {
        notificacionesHTML += `
            <li>
                <strong>${notificacion.fecha}</strong>: ${notificacion.mensaje}
            </li>
        `;
    });
    notificacionesHTML += '</ul>';
    notificacionesDiv.innerHTML = notificacionesHTML;
});
