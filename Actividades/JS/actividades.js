/* Ejercicio (Dificultad FACIL):

Escribe un programa que le pida al usuario su nombre y su edad. Luego, el programa debe imprimir un mensaje que diga "Hola, [nombre]! Tienes [edad] años." Si la edad es menor de 18 años, el mensaje debe incluir también "Eres menor de edad."; de lo contrario, debe incluir "Eres mayor de edad.".

Después, el programa debe crear un array vacío llamado numeros y llenarlo con los números del 1 al 10. A continuación, el programa debe definir una función llamada sumarNumeros que acepte un array como parámetro y devuelva la suma de todos sus elementos.

Por último, el programa debe llamar a la función sumarNumeros con el array numeros como argumento y mostrar el resultado por consola. */

/* var nombre = prompt("Ingrese su nombre:");
var edad = parseInt(prompt("Ingrese su edad:"));

// Mensaje
var mensaje = "Hola, " + nombre + "! Tenés " + edad + " años.";
if (edad < 18) {
  mensaje += " Sos un wachin";
} else {
  mensaje += " Sos un viejo choto.";
}
console.log(mensaje);

// Array
var numeros = [];
for (var n = 1; n <= 10; n++) {
  numeros.push(n);
}

// Funcion
function sumarNumeros(array) {
  var suma = 0;
  for (var n = 0; n < array.length; n++) {
    suma += array[n];
  }
  return suma;
}

// Llamar
var resultado = sumarNumeros(numeros);
console.log("La suma de los números del 1 al 10 es: " + resultado);
 */


/* 
Ejercicio (Dificultad FACIL):

Escribe un programa que pida al usuario que ingrese una lista de números separados por comas (por ejemplo, "1,2,3,4"). Luego, el programa debe crear un array con los números ingresados, calcular la suma de todos los números y mostrarla en consola, utilizando una función. */

/* var numeros = prompt("Ingresá una lista de números separados por comas:");

var numerosArray = numeros.split(",");

function sumaNumeros(numerosArray){
  var suma = 0;
  for (var i = 0; i < numerosArray.length; i++){
    suma += Number(numerosArray[i]);
  }
  return suma;
}

var resultado = sumaNumeros(numerosArray);
console.log("El total de la suma es: " + resultado);
 */

/* 

Ejercicio (Dificultad FACIL):

Escribe una función llamada imprimirNumeros que reciba dos números enteros como parámetros, y que imprima en consola los números enteros entre ellos, en orden ascendente si el primer parámetro es menor que el segundo, o en orden descendente si el primer parámetro es mayor que el segundo. La función no debe devolver nada. */


/* function imprimirNumeros(num1, num2) {
  let numeros = [];
  
  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      numeros.push(i);
    }
  } else {
    for (let i = num1; i >= num2; i--) {
      numeros.push(i);
    }
  }
  
  console.log(numeros);
}

imprimirNumeros(3,30); */


/* Presentar: 22/04/2023 */

/* Ejercicio 1:
Crea una función llamada multiplicarArray que reciba como parámetro un array de números y un número n, y que multiplique cada elemento del array por n. La función debe devolver el nuevo array con los elementos multiplicados. */

/* 
function multiplicarArray(arr, n) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * n);
  }
  return newArray;
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5];
let multiplicador = 2;
let resultado = multiplicarArray(numeros, multiplicador);
console.log(resultado); // [2, 4, 6, 8, 10]
 */


/* Ejercicio 2:

Escribe un programa que le pida al usuario su nombre y su edad, y que luego determine si el usuario puede votar en las próximas elecciones.

Para poder votar, el usuario debe tener al menos 18 años. El programa debe mostrar un mensaje que diga "Hola, [nombre]. Puedes votar en las próximas elecciones" si el usuario tiene 18 años o más, o "Hola, [nombre]. No puedes votar en las próximas elecciones" si el usuario tiene menos de 18 años.
 */

/* let nombre = prompt("Ingrese su nombre:");
let edad = prompt("Ingrese su edad:");

if (edad >= 18) {
  console.log("Hola, " + nombre + ". Puedes votar en las próximas elecciones");
} else {
  console.log("Hola, " + nombre + ". No puedes votar en las próximas elecciones");
} */


// Ejercicio 3:
//  rear una calculadora básica
// El programa debe pedir al usuario que ingrese dos números y una operación (+, -, * o /)
// Después, debe mostrar el resultado de la operación elegida

/* let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let operacion = prompt("Ingresa la operación a realizar (+, -, * o /):");

function calcular(a, b, op) {
  let resultado;
  switch(op) {
    case "+":
      resultado = a + b;
      break;
    case "-":
      resultado = a - b;
      break;
    case "*":
      resultado = a * b;
      break;
    case "/":
      resultado = a / b;
      break;
    default:
      resultado = "Operación inválida";
  }
  return resultado;
}

let resultado = calcular(num1, num2, operacion);
console.log(`El resultado de ${num1} ${operacion} ${num2} es ${resultado}`);
 */

/* ______________________________________________________________________________________ */

/* Presentar: 29/04/2023 */

/* Ejercicio 1:
Simular una tienda de videojuegos en la que se pregunta al usuario el nombre del juego, la consola en la que quiere jugar y la cantidad de juegos que desea comprar. Dependiendo de la consola, se debe establecer un precio para el juego y se calcula el precio final con impuestos incluidos. Luego crear un objeto con la información del juego y mostrar en consola.*/


let nombreJuego, consolaJuego, precioJuego;

function calcularPrecio(cantidadJuegos) {
  const subtotal = precioJuego * cantidadJuegos;
  const impuesto = subtotal * 0.21;
  const total = subtotal + impuesto;
  return total;
}

nombreJuego = prompt("Que juego estás buscando pibe?");

consolaJuego = prompt("En cual consola querés jugarlo?");

switch (consolaJuego) {
  case "Xbox":
    precioJuego = 30000;
    break;
  case "PlayStation 4":
    precioJuego = 24000;
    break;
  case "Nintendo Switch":
    precioJuego = 20000;
    break;
  default:
    console.log("Perdón facha, no nos quedaron. Se nos volaron todos");
}
let cantidadJuegos = prompt("Cuantos juegos querés llevar?");

if (cantidadJuegos <= 0) {
  console.log("Dale, dejate de joder. Como me vas a pedir 0");
} else {

  const precioFinal = calcularPrecio(cantidadJuegos);

  const juego = {
    nombre: nombreJuego,
    consola: consolaJuego,
    precio: precioJuego,
    cantidad: cantidadJuegos,
    total: precioFinal
  };

  console.log("Resumen de la compra:");
  console.log(juego);
}