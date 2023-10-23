const promesa1 = fetch("https://pokeapi.co/api/v2/pokemon/1 ");
const promesa2 = fetch("https://pokeapi.co/api/v2/pokemon/2 ");
const promesa3 = fetch("https://pokeapi.co/api/v2/pokemon/3 ");

Promise.all([promesa1, promesa2, promesa3])
  .then((response) => Promise.all(response.map((response) => response.json())))
  .then((data) => console.log(data))
  .catch((error) => {
    console.log("Error:", error);
  });


/*   Promise.race([promesa1, promesa2])
  .then((response) => {
    response.json()
    console.log("Primera respuesta:", response)
  })
  .catch((error) => {
    console.error("Error:", error);
  }); */
