const miPromise = new Promise((resolve, reject) => {
  console.log("Iniciando promesa");
  setTimeout(() => {
    const exito = true; //cambiar a false para simular un fallo
    if (exito) {
      resolve("Todo salió bien");
    } else {
      reject("Algo salió mal");
    }
  }, 2000);
});

miPromise
  .then((resultado) => {
    console.log("Éxito:", resultado);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Terminando promesa");
  });
