import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodosPokes from './components/todosPokes.jsx';


export default function App() {

  

  const [pokemon, setPokemon] = React.useState('');
  const [pokemonName, setPokemonName] = React.useState('ditto');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPokemon(data.sprites.other.dream_world.front_default);
      })
      .catch((error) => {
        setLoading(false);
      });
    return () => {};
  }, [pokemonName]);

  return (
    <div>
      <img src={pokemon} />
      <br />
      <span> El pokemon es {pokemonName}</span>
      <br />
      <input type="text" onChange={(e) => setPokemonName(e.target.value)} />
      {loading && <div> Cargando </div>}
      <TodosPokes />
    </div>
  );
}
