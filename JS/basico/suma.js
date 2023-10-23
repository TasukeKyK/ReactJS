const sumarArrow = (a, b) => a + b; //Sumar con Arrow function

function sumar(a, b) {              //Sumar de manera tradicional
  return a + b;
}

a = 4;
b = 2;

console.log(sumar(a, b));
console.log(sumarArrow(a, b));
