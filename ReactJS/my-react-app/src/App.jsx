import React, { useEffect } from "react";
import "./App.css";
import TodosPokes from "./components/todosPokes.jsx";
import * as Formik from "formik";
import * as Yup from "yup";

export default function App() {
  const [pokemon, setPokemon] = React.useState("");
  const [pokemonName, setPokemonName] = React.useState("ditto");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPokemon(data.sprites.other.dream_world.front_default);
        console.log(data);
      })
      .catch((error) => {
        setLoading(false);
      });
    return () => {};
  }, [pokemonName]);

  const formik = Formik.useFormik({
    initialValues: {
      name: "ditto",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
    }),
    onSubmit: (values) => {
      setPokemonName(values.name);
    },
    handleChange: (e) => {
      setPokemonName(e.target.value);
    }
  });

  return (
    <div>
      <img src={pokemon} alt="pokemon" />
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <p>
            <b>Error: </b>
            {formik.errors.name}
          </p>
        )}
        <input type="submit" value={"Buscar pokemon"} />
      </form>
    </div>
  );
}
