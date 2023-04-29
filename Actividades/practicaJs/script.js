alert("Que onda facha?");

var nombre = "Nahuel Alegre";
var altura = 1.78;
var edad = 23;

var conjunto = nombre + " " + altura + " " + edad;

/* document.write(conjunto); */

/*var datos = document.getElementById("datos");
/* datos.innerHTML = conjunto; */

/*datos.innerHTML = `
    <h1>Estoy escribiendo html desde JS</h1>
    <h2>Mi name es: ${nombre}</h2>
    <h3>Altura: ${altura}</h3>
    <h4>Edad: ${edad}</h4>
`;*/

/* if(altura >= 179){
    datos.innerHTML += '<h1>Sos re alto</h1>';
}else{
    datos.innerHTML += '<h1>Sos re petizo</h1>'
} */

/* 
  for (Iniciación ; Condicional ; Incrementador)
for (var i = 0; i<=2023; i++){
    datos.innerHTML += "<h2>Estamos en el año: </h2>"+i;
}
 */

/* for(var i = 1999; i<=2023; i++){
    datos.innerHTML += "<h2>Estamos en el año: </h2>"+i;
}
 */

function mostrarNombre(nombre, altura, edad){
/*     var datos = document.getElementById("datos"); */

    var misDatos = `
        <h1>Estoy escribiendo html desde JS</h1>
        <h2>Mi name es: ${nombre}</h2>
        <h3>Altura: ${altura}</h3>
        <h4>Edad: ${edad}</h4>
    `;

    return misDatos;
}

function imprimir(){
    /* var datos = document.getElementById("datos"); */
    datos.innerHTML = mostrarNombre("Nahuel Alegre", 1.78, 23);
}

imprimir();

/* mostrarNombre("Nahuel Alegre", 178, 23); */

var nombres = ['Nahuel', 'Osman', 'Ulises'];

/* alert(nombres[1]); */


document.write('<h1>Lista de names</h1>')
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>');
}

