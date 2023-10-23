window.addEventListener("load", function () {
  const div = document.getElementById("miDiv");

  // Evento cuando el ratón entra en el div
  div.addEventListener("mouseenter", function () {
    div.style.backgroundColor = "red";
  });

  // Evento cuando el ratón sale del div
  div.addEventListener("mouseleave", function () {
    div.style.backgroundColor = "white";
  });
});
