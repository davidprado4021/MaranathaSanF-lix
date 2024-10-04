let hasScrolledPastThreshold = false; // Para rastrear si hemos pasado el umbral

window.addEventListener('scroll', function () {
    const navLogo = document.querySelector(".navLogo");
    const topHeaderLogo = document.querySelector(".topHeader .logo");
    const topHeader = document.querySelector(".topHeader");
    const navBar = document.querySelector('.navbar'); // Seleccionamos el navbar

    const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

    // Verifica si el scroll ha pasado el umbral de 1
    if (scrollPosition > 1 && !hasScrolledPastThreshold) {
        // Si pasamos el umbral por primera vez
        navLogo.classList.remove("hidden"); // Mostrar el logo 2
        topHeaderLogo.classList.add("hidden"); // Ocultar el logo 1
        topHeader.classList.add("scrolling");
        navBar.classList.add("blue-background"); // Cambiar color de fondo a azul
        navBar.classList.add("white-text"); // Cambiar color del texto a blanco
        hasScrolledPastThreshold = true; // Actualizamos el estado
    }
    // Verifica si estamos de regreso en el umbral y si habíamos pasado antes
    else if (scrollPosition <= 1 && hasScrolledPastThreshold) {
        // Si volvemos al tope del scroll
        navLogo.classList.add("hidden"); // Ocultar el logo 2
        topHeaderLogo.classList.remove("hidden"); // Mostrar el logo 1
        topHeader.classList.remove("scrolling");
        navBar.classList.remove("blue-background"); // Quitar el color de fondo azul
        navBar.classList.remove("white-text"); // Quitar el color de texto blanco
        hasScrolledPastThreshold = false; // Actualizamos el estado
    }
});
