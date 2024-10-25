document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container'); // Selecciona el contenedor de la clase 'container'
    const registerForm = document.getElementById('registerForm');
    const registerErrorMessage = document.getElementById('registerErrorMessage');
    const backgroundOverlay = document.getElementById('backgroundOverlay');

    // Cambiar la opacidad del fondo cuando se pasa el mouse sobre el contenedor
    container.addEventListener('mouseenter', () => {
        backgroundOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Aumentar la opacidad
    });

    // Cambiar la opacidad al quitar el mouse
    container.addEventListener('mouseleave', () => {
        backgroundOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Reducir la opacidad
    });

    registerForm.addEventListener('submit', (e) => {
        const name = document.getElementById('registerName').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;

        clearErrorMessages(); // Llama a la función para limpiar mensajes

        let hasError = false; // Variable para rastrear errores

        // Validación de campos vacíos
        if (!name || !email || !password || !confirmPassword) {
            e.preventDefault(); // Prevenir el envío si hay campos vacíos
            registerErrorMessage.textContent = 'Todos los campos son obligatorios. ¡Por favor, complétalos!';
            registerErrorMessage.style.color = '#ff6b6b';
            registerForm.classList.add('shake'); // Añadir clase de animación 'shake'
            setTimeout(() => {
                registerForm.classList.remove('shake'); // Quitar la clase después de 500ms
            }, 500);
            hasError = true; // Indicar que hubo un error
        }

        // Validación de formato de correo electrónico
        else if (!validateEmail(email)) {
            e.preventDefault();
            document.getElementById('emailError').textContent = 'El correo electrónico no tiene un formato válido. Asegúrate de que esté correcto.';
            registerErrorMessage.textContent = 'Por favor, resuelve el error.';
            registerErrorMessage.style.color = '#ff6b6b';
            hasError = true;
        }

        // Validación de longitud de la contraseña
        else if (password.length < 8) {
            e.preventDefault();
            document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 8 caracteres.';
            registerErrorMessage.textContent = 'Por favor, resuelve el error.';
            registerErrorMessage.style.color = '#ff6b6b';
            hasError = true;
        }

        // Validación de contraseñas
        else if (password !== confirmPassword) {
            e.preventDefault(); // Prevenir el envío si las contraseñas no coinciden
            document.getElementById('confirmPasswordError').textContent = 'Las contraseñas no coinciden. Por favor, verifica.';
            registerErrorMessage.textContent = 'Por favor, resuelve el error.';
            registerErrorMessage.style.color = '#ff6b6b';
            hasError = true;
        }

        // Si no hay errores, limpia el mensaje de error
        if (!hasError) {
            registerErrorMessage.textContent = ''; // Limpiar el mensaje de error
        }
    });

    // Función para limpiar mensajes de error
    function clearErrorMessages() {
        registerErrorMessage.textContent = '';
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        document.getElementById('confirmPasswordError').textContent = '';
    }

    // Función para validar el formato de correo electrónico
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para el formato de correo
        return regex.test(email);
    }

    // Crear y animar las bolas de fondo
    const background = document.querySelector('.background');
    for (let i = 0; i < 20; i++) {
        const circle = document.createElement('span');
        circle.style.width = `${Math.random() * 50 + 10}px`;
        circle.style.height = circle.style.width;
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.position = 'absolute';
        circle.style.borderRadius = '50%';
        circle.style.background = 'rgba(255, 255, 255, 0.2)'; // Color de las bolas
        circle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
        circle.style.animationDelay = `${Math.random() * 5}s`;

        // Agregar las bolas al contenedor de fondo
        background.appendChild(circle);
    }
});
