// Variable para rastrear qué imagen se está mostrando actualmente (índice)
let slideIndex = 0; 
// Al cargar la página, muestra la primera imagen (posición 0)
showSlides(slideIndex);

// Función para avanzar o retroceder el slider
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Función principal para mostrar una imagen específica
function showSlides(n) {
  let i;
  // Obtiene todos los elementos con la clase 'slide' (las imágenes)
  let slides = document.getElementsByClassName("slide"); 
  
  // Si el índice es mayor que el número de imágenes, vuelve al principio
  if (n >= slides.length) {
    slideIndex = 0; 
  }    
  // Si el índice es menor que 0, salta a la última imagen
  if (n < 0) {
    slideIndex = slides.length - 1; 
  }
  
  // Oculta todas las imágenes (quitando la clase 'active')
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  
  // Muestra la imagen actual (añadiendo la clase 'active')
  slides[slideIndex].classList.add('active');
}