
document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentsListDiv = document.getElementById('comments-list');

    // Obtener comentarios desde localStorage (simulación de base de datos)
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Renderizar comentarios
    function renderComments() {
        commentsListDiv.innerHTML = '';
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment-item';
            commentElement.innerHTML = `
                <p><strong>${comment.text}</strong></p>
                <p>Calificación: ${comment.rating}</p>
            `;
            commentsListDiv.appendChild(commentElement);
        });
    }

    renderComments();

    // Manejar el envío del formulario de comentarios
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const commentText = document.getElementById('comment-text').value;
        const commentRating = document.getElementById('comment-rating').value;

        // Guardar el comentario
        comments.push({ text: commentText, rating: commentRating });
        localStorage.setItem('comments', JSON.stringify(comments));

        // Actualizar la lista de comentarios
        renderComments();

        // Limpiar el formulario
        commentForm.reset();
    });
});
