async function miPromesa() {
  try {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon");
    const datos = await respuesta.json();
  } catch (error) {
    console.log("Error", error);
  }
  return datos;
}


