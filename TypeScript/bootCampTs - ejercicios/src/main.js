var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createElement } from "./utils/CreateHtmlElement.js";
import { ApiConnect } from "../services/ApiConnect.js";
const api = new ApiConnect("https://pokeapi.co/api/v2/pokemon");
// Ejercicio 1
/*
  En el archivo Util/createHtmlElement tenemos una función generica sin tipar, tenemos que conseguir que dicha función reciba un nuevo elemento HTML pero que este sea valido,
  y realizar su tipado.
  Por ejemplo:
    document.createElement('axz') => Nos va a retornar la etiqueta <axz></axz>
  Por lo que necesitamos que esta función asegure que esto no pueda suceder.
*/
// Ejercicio 2
/*
  En app/models/interface crea una interfaz de la api https://pokeapi.co/api/v2/pokemon/id
  Web de la API: https://pokeapi.co/
*/
// Ejercicio 3
/*
  En el archivo services/ApiConnect se encuentra una clase definida.
  El objetivo de esta clase es el de tener la responsabilidad de gestionar la conexión a una Api especifica
  El constructor aceptara un parametro privado URL
  La clase tendra un metodo getData() para realiza la solicitud y este admite un parametro id
  Llamar a la api en este mismo archivo
*/
// Ejercicio 4
/*
  Este ejercicio queda solucionado el apartado de los errores de createElement que solucionamos en el apartado 1
  albumPokemon esta tipado por la inferencia de tipos tipalo manualmente y usa el operador de aserción no nulo para este elemento.
*/
// Usamos la función generica para que la inferencia de tipos se ocupe de validar y tipar las etiquetas HTML
const $btn = createElement("button", "album-main__capture"); // Creamos el boton
const $img = createElement("img", "album-main__capture__item"); // Creamos la imagen
const $albumPokemon = document.querySelector(".album-main"); // Obtenemos el elemento main
$img.setAttribute("src", "src/asset/pokeball.png"); // Añadimos el atributo src con la ruta de la imagen
$btn.appendChild($img); // añadimos la imagen como hija del boton
$albumPokemon === null || $albumPokemon === void 0 ? void 0 : $albumPokemon.insertBefore($btn, $albumPokemon === null || $albumPokemon === void 0 ? void 0 : $albumPokemon.firstElementChild); // en el elemento main insertamos despues del sectión el botón
// Ejercicio 5
/*
  En la función modifiElement:
  - Tipar el argumento y retorno de función
  - Investigar los errores y tipar las variables
*/
const modifyElement = (pokemon) => {
    const queryClass = [
        ".pokemon-card__img",
        ".pokemon-card__data__name",
        ".pokemon-card__data__hp",
        ".pokemon-card__data__type",
        ".pokemon-information__defense",
        ".pokemon-information__stroke",
        ".pokemon-information__speed",
    ];
    // Tipar variable
    const $elements = queryClass.map((className) => document.querySelector(className));
    const { name, stats, sprites, types } = pokemon; // Destructuración del pokemon
    // Actuamos sobre los elementos pasandole los datos de la API
    $elements[0].setAttribute("src", sprites.front_default);
    $elements[1].textContent = name;
    $elements[2].textContent = stats[0].base_stat + "hp";
    $elements[3].textContent = types[0].type.name;
    $elements[4].textContent = stats[2].base_stat + "hp";
    $elements[5].textContent = stats[1].base_stat + "hp";
    $elements[6].textContent = stats[5].base_stat + "hp";
};
// Ejercicio 6
/*
  - Usar el metodo de la instancia de la clase ApiConnect y pasarle como argumento el ID
  - Resolver la promesa que retorna el metodo de la clase api y usar la función modifyElement() para pasar un pokémon como argumento
*/
// Ponemos a la escucha al eventListener para el evento click
$btn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const id = Math.floor(Math.random() * 1017) + 1;
    api
        .getData(id)
        .then((data) => {
        modifyElement(data);
    })
        .catch((error) => {
        console.error("Error:", error.message);
    });
}));
