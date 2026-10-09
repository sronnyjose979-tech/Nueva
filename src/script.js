// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // 1. Seleccionamos el footer y el elemento de audio
  const footer = document.querySelector("footer");
  const sonido = document.querySelector("#sonido");

  // 2. Escuchamos el evento 'mouseenter' en el footer
  footer.addEventListener("mouseenter", () => {
    // Reiniciamos el tiempo a 0 para reproducir desde el inicio siempre
    sonido.currentTime = 0;
    
    // Intentamos reproducir el audio
    sonido.play().catch((error) => {
      console.log("El navegador bloqueó el reproductor de audio:", error);
    });
  });
});