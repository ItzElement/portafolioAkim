const observerOptions = {
    root: null,
    rootMargin: '0px', // Con esto activamos la animación apenas entramos a la página
    threshold: 0.1 // El elemento debe ser visible a un 10% para empezar a animarse
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Deja de observar una vez que se ha animado
        }
    });
}, observerOptions);

// Seleccionamos todos los elementos con la clase y los observamos
document.querySelectorAll('.reveal-on-scroll').forEach(element => {
    observer.observe(element);
});
