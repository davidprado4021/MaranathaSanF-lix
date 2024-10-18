document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const registerErrorMessage = document.getElementById('registerErrorMessage');

    registerForm.addEventListener('submit', (e) => {
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        // Validación
        if (!name || !email || !password) {
            e.preventDefault(); // Prevenir el envío si hay campos vacíos
            registerErrorMessage.textContent = 'Please fill in all fields';
            registerErrorMessage.style.color = '#ff6b6b';
            registerForm.classList.add('shake');
            setTimeout(() => {
                registerForm.classList.remove('shake');
            }, 500);
        } else {
            // Si todos los campos están completos, no se necesita hacer nada
            registerErrorMessage.textContent = ''; // Limpiar el mensaje de error
        }
    });

    // Crear y animar las bolas de fondo
    const background = document.querySelector('.background');
    for (let i = 0; i < 20; i++) {
        const circle = document.createElement('span');
        circle.style.width = `${Math.random() * 50 + 10}px`;
        circle.style.height = circle.style.width;
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        circle.style.animationDelay = `${Math.random() * 5}s`;
        background.append
