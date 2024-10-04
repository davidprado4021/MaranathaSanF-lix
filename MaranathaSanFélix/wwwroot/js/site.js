window.addEventListener('scroll', function () {
    const navLogo = document.querySelector(".navLogo");
    const topHeaderLogo = document.querySelector(".topHeader .logo"); // Selecciona el logo del topHeader
    const topHeader = document.querySelector(".topHeader");

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navLogo.classList.remove("hidden"); // Mostrar el logo 2 al scrollear
        topHeaderLogo.classList.add("hidden"); // Ocultar el logo 1 al scrollear
        topHeader.classList.add("scrolling"); // Puedes agregar una animación si lo deseas
    } else {
        navLogo.classList.add("hidden"); // Ocultar el logo 2 cuando vuelves al top
        topHeaderLogo.classList.remove("hidden"); // Mostrar el logo 1 cuando vuelves al top
        topHeader.classList.remove("scrolling");
    }
});
