document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('authForm');
    const formTitle = document.getElementById('formTitle');
    const nameField = document.getElementById('nameField');
    const submitButton = document.getElementById('submitButton');
    const toggleAuth = document.getElementById('toggleAuth');
    const errorMessage = document.getElementById('errorMessage');
    const googleAuth = document.getElementById('googleAuth');
    const googleButtonText = document.getElementById('googleButtonText');

    let isLogin = true;

    function toggleAuthMode() {
        isLogin = !isLogin;
        formTitle.textContent = isLogin ? 'Welcome to Maranatha' : 'Join Maranatha';
        nameField.classList.toggle('hidden');
        submitButton.textContent = isLogin ? 'Login' : 'Register';
        toggleAuth.textContent = isLogin ? "Don't have an account? Register" : 'Already have an account? Login';
        googleButtonText.textContent = isLogin ? 'Login with Google' : 'Register with Google';
        errorMessage.textContent = '';
    }

    toggleAuth.addEventListener('click', toggleAuthMode);

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const name = document.getElementById('name').value;

        if (isLogin) {
            // Mock login logic
            if (email === 'user@example.com' && password === 'password') {
                errorMessage.textContent = 'Login successful!';
                errorMessage.style.color = '#4CAF50';
            } else {
                errorMessage.textContent = 'Invalid email or password';
                errorMessage.style.color = '#ff6b6b';
                authForm.classList.add('shake');
                setTimeout(() => {
                    authForm.classList.remove('shake');
                }, 500);
            }
        } else {
            // Mock registration logic
            if (name && email && password) {
                errorMessage.textContent = 'Registration successful!';
                errorMessage.style.color = '#4CAF50';
            } else {
                errorMessage.textContent = 'Please fill in all fields';
                errorMessage.style.color = '#ff6b6b';
                authForm.classList.add('shake');
                setTimeout(() => {
                    authForm.classList.remove('shake');
                }, 500);
            }
        }
    });

    googleAuth.addEventListener('click', () => {
        alert(`${isLogin ? 'Login' : 'Registration'} with Google clicked. Implement actual Google authentication here.`);
    });

    // Create and animate background circles
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