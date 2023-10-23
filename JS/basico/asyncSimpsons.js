async function buscarPersonajeSimpson(nombre) {
  try {
    const respuesta = await fetch(
      "https://apisimpsons.fly.dev/api/personajes/find/" + nombre
    );
    datos = await respuesta.json();
    datos.result.map((personaje) => {
      console.log(
        " -",
        personaje.Nombre,
        "\n",
        "-",
        personaje.Genero,
        "\n",
        "-",
        personaje.Historia
      );
      console.log("_______________________");
    });
  } catch (error) {
    console.log("Error", error);
  }
  return datos;
}

buscarPersonajeSimpson("Bart");
