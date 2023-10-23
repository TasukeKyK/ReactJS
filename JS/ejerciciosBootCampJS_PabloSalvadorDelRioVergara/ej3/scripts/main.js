const form = document.getElementById("registration-form");

form.addEventListener("submit", function (event) {
  if (!validateForm()) {
    event.preventDefault(); // Evita el envío del formulario si la validación no pasa
  }
});

function validateForm() {
  let valid = true;
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const comentarios = document.getElementById("coments").value;
  const password = document.getElementById("password").value;

  if (nombre.trim() === "") {
    alert("El campo Nombre es obligatorio.");
    valid = false;
  }

  if (email.trim() === "" || !validateEmail(email)) {
    alert("El campo Email debe ser una dirección de correo válida.");
    valid = false;
  }

  if (comentarios.length > 50) {
    alert("El campo Comentarios no debe exceder los 50 caracteres.");
    valid = false;
  }

  if (password.length < 6 || !validatePassword(password)) {
    alert(
      "La contraseña debe tener al menos 6 caracteres y contener una letra minúscula, una letra mayúscula y un dígito."
    );
    valid = false;
  }

  return valid;
}

function validateEmail(email) {
  const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
  return passwordRegex.test(password);
}
