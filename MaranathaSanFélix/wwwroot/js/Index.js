let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    items.forEach((item, index) => {
        item.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots[index].classList.toggle('active', index === currentIndex);
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Iniciar el carrusel automáticamente
setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}, 3000); // Cambia la imagen cada 3 segundos

//------------------------------------------------------------

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const leftImage = document.querySelector('.image-left');
const rightImage = document.querySelector('.image-right');

observer.observe(leftImage);
observer.observe(rightImage);

