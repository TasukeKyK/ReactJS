const infoDiv = document.getElementById("info");
const mousePositionParagraph = document.getElementById("mouse-position");
const keyPressParagraph = document.getElementById("key-press");

// Evento para detectar el movimiento del ratón
window.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const pageX = event.pageX;
  const pageY = event.pageY;

  mousePositionParagraph.textContent = `Posición del ratón en el navegador: (${mouseX}, ${mouseY}) - Posición en la página: (${pageX}, ${pageY})`;
});

// Evento para detectar las teclas presionadas
window.addEventListener("keydown", (event) => {
  const pressedKeys = event.key;
  keyPressParagraph.textContent = `Teclas presionadas: ${pressedKeys}`;
});

// Evento para borrar el mensaje al soltar la tecla
window.addEventListener("keyup", () => {
  keyPressParagraph.textContent = `Teclas presionadas: Ninguna`;
});


