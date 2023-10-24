import React from 'react';

function TodosPokes() {
  const [pokes, setPokes] = React.useState([]);

  const getData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => res.json())
      .then((data) => {
        setPokes(data.results);
      })
      .catch((error) => {});
  };

  React.useEffect(() => {
    getData();
  }, []);

  const listPokes = pokes.map((poke) => {
    <li key={poke.url}> {poke.name}</li>;
    console.log(poke);
  });

  return (
    <div>
      <br />
      Lista de pokemons:
      <br />
      <ul>{listPokes}</ul>
    </div>
  );
}

export default TodosPokes;
