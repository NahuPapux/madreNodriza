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

var numeros = prompt("Ingresá una lista de números separados por comas:");

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


/* 

Ejercicio (Dificultad FACIL):

Escribe una función llamada imprimirNumeros que reciba dos números enteros como parámetros, y que imprima en consola los números enteros entre ellos, en orden ascendente si el primer parámetro es menor que el segundo, o en orden descendente si el primer parámetro es mayor que el segundo. La función no debe devolver nada. */


function imprimirNumeros(num1, num2) {
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

imprimirNumeros(3,30);