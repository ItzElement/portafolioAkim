// Este plugin es Lenis, el cual nos ayuda a tener un scroll suave y optimizado para la página, así se ve más profesional.
import Lenis from '@studio-freight/lenis';

// 1. Inicializamos Lenis
const lenis = new Lenis({
  duration: 0.1, // Velocidad de la animación (más alto = más lento)
  easing: (t) => Math.min(1, 1.001 - Math.pow(1, -1 * t)), // Fórmula de easing (desaceleración)
  smoothTouch: true, // Scroll suave en dispositivos táctiles
});

// 2. Creamos un bucle de animación
// Esto sincroniza el scroll de Lenis con la tasa de refresco del navegador para un rendimiento óptimo.
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

// 3. Iniciamos el bucle de animación
requestAnimationFrame(raf);