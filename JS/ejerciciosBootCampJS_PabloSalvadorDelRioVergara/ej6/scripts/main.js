// Función para mostrar un bloque por su ID
function showBlock(id) {
  const block = document.getElementById(id);
  if (block) {
    block.style.display = "block";
  }
}

// Función para ocultar todos los bloques
function hideAllBlocks() {
  const blocks = document.querySelectorAll(".hidden-block");
  blocks.forEach((block) => {
    block.style.display = "none";
  });
}

// Evento de teclado
document.addEventListener("keydown", (event) => {
  // Oculta todos los bloques al presionar cualquier tecla
  hideAllBlocks();

  // Muestra el bloque correspondiente a la tecla presionada
  if (event.key === "1") {
    showBlock("ficha1");
  } else if (event.key === "2") {
    showBlock("ficha2");
  } else if (event.key === "3") {
    showBlock("ficha3");
  }
});
