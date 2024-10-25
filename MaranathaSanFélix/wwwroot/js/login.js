document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('authForm');
    const formTitle = document.getElementById('formTitle');
    const submitButton = document.getElementById('submitButton');
    const toggleAuth = document.getElementById('toggleAuth');
    const errorMessage = document.getElementById('errorMessage');
    const googleAuth = document.getElementById('googleAuth');
    const googleButtonText = document.getElementById('googleButtonText');
    const container = document.querySelector('.container'); // Selecciona el contenedor de la clase 'container'
    const backgroundOverlay = document.getElementById('backgroundOverlay'); // Selecciona la superposición de fondo

    // Manejar el envío del formulario
    authForm.addEventListener('submit', (e) => {
        // Si hay lógica que necesitas implementar antes de enviar, hazlo aquí
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Aquí puedes agregar lógica adicional si es necesario, o simplemente dejar que el formulario se envíe normalmente
    });

    // Manejo de Google Auth
    googleAuth.addEventListener('click', () => {
        alert('Login with Google clicked. Implement actual Google authentication here.');
    });

    // Cambiar la opacidad del fondo cuando se pasa el mouse sobre el contenedor
    container.addEventListener('mouseenter', () => {
        backgroundOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Aumentar la opacidad
    });

    // Cambiar la opacidad al quitar el mouse
    container.addEventListener('mouseleave', () => {
        backgroundOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Reducir la opacidad
    });

    // Crear y animar círculos de fondo
    const background = document.querySelector('.background');
    for (let i = 0; i < 20; i++) {
        const circle = document.createElement('span');
        circle.style.width = `${Math.random() * 50 + 10}px`;
        circle.style.height = circle.style.width;
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        circle.style.animationDelay = `${Math.random() * 5}s`;
        background.appendChild(circle);
    }
});
