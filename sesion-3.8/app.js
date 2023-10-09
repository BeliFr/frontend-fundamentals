function miFuncion(parameter1, parameter2) {
    // Código a ejecutar
}

function suma(a,b){
    return a+b;
}

console.log(suma(4,5));

function calcularEdad(fechaNacimiento) {
    const fecha = new Date();
    let edad;
    let anioActual = fecha.getFullYear();
    const mesActual = fecha.getMonth();
    const diaActual = fecha.getDate();
    
 /*  let arr = fechaNacimiento.split('/');   
    let diaNac = arr[0];
    let mesNac = arr[1];
    let anioNac = arr[2];  */

    /*  Se llama “asignación desestructurante” porque “desestructura” al copiar elementos dentro de variables, 
    pero el array en sí no es modificado.

    Es sólo una manera más simple de escribir: */

    const [diaNac,mesNac,anioNac] = fechaNacimiento.split('/');

    // si el mes es el mismo pero el dia es inferior, aun 
    // no ha cumplido años, le quitaremos un año al actual 

    if(mesNac == mesActual && diaNac > diaActual){
        anioActual--;
    }
    // si el mes es superior al actual tampoco habra 
    // cumplido años, por eso le quitamos un año al actual  

    if (mesNac > mesActual){
        anioActual--;
    }	
    // ya no habría más condiciones, ahora simplemente 
    // restamos los años y mostramos el resultado como su edad 

    edad = anioActual - anioNac;
    return edad;
  }
  
  const edadPepe = calcularEdad("12/11/1995");
  
  console.log("edad: "+edadPepe); // 

  //Ahora podemos llamar la misma función las veces que queramos sin necesidad de repetir las mismas líneas de código 
  //una y otra vez. Las funciones también pueden llamar a otras funciones.

  function aniosHastaRetiro(fechaNacimiento, nombre) {
    const edad = calcularEdad(fechaNacimiento);
    const retiro = 65 - edad;
    console.log(`${nombre} se retira en ${retiro} años.`);
  }

  //console.log(edad);
  aniosHastaRetiro("15/9/2004", "Pedro Picapiedra");
  //console.log(info);

  //Reto hacer una función que Crear una función power que recibe dos argumentos base y exponent. 
  //La función debe retornar el resultado de elevar base a la potencia exponent.
  //Evita usar la función Math.pow o el operador de potencia **



  //Ya vimos cómo en las declaraciones de funciones comenzamos con function 
  //después el nombre y los argumentos de la función dentro de paréntesis.

  //La sintaxis cambia un poco en una expresión de función.

  const seDedicaA = function(trabajo, nombre) {
    switch (trabajo) {
      case 'desarrollador':
        return nombre + ' desarrolla apps.';
      case 'diseñador':
        return nombre + ' diseña sitios web asombrosos.';
      default:
        return nombre + ' se dedica a otra cosa.'
    }
  }
  
  console.log(seDedicaA('desarrollador', 'John Doe'));
  console.log(seDedicaA('diseñador', 'Jane Doe'));
  console.log(seDedicaA('retired', 'Mark Doe'));

//Reto 2
//En la serie de Fibonacci:
//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
//Cada elemento se obtiene sumando los dos valores anteriores.
//Completar la función fibonacciSequence la cuál recibe limit, 
//un entero positivo que representa la cantidad de elementos de la serie que queremos.
  function fibonacciSequence(limite) {

  }
//Otro ejemplo de expresión de función 

  const square = function(number) {
    return number * number;
  }
  
  const squareOfFour = square(4);
  
  console.log(squareOfFour); // 16

  //Recursividad

  const factorial = function fac(num) {
    return num < 2 ? 1 : num * fac(num - 1)
  }
  
  console.log(factorial(5)); // 120


//IIFE: Expresión de función ejecutada inmediatamente

//Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) 
//son funciones que se ejecutan tan pronto como se definen.
//Son útiles cuando queremos ejecutar una función una sola vez y 
//no queremos que otras partes del programa puedan ejecutar dicha función accidentalmente.


(function () {
  //código
})();

//Desarrollo
//Supongamos que tenemos una función que muestra en consola un nombre cualquiera.

function logName() {
  const name = "John Doe";
  console.log(name);
}

logName(); // John Doe

//Para convertir esta función en una IIFE debemos envolver toda la función en paréntesis, 
//eso lo hace una expresión, posteriormente usamos () para ejecutar la función justo después de ser definida.

(function() {
  const name = "John Doe";
  console.log(name);
})();


//Como ya fue ejecutada y es anónima, no hay forma de que podamos volver a llamar la función de nuevo.
//También se pueden pasar argumentos a este tipo de funciones, de la misma forma que 
//lo hacemos con las funciones normales.

(function(lastName) {
  const firstName = "John";
  console.log(`${firstName} ${lastName}`);
})('Doe');


//Arrow functions
//Este tipo de funciones presenta una sintaxis más concisa comparada con las funciones normales. 
//Antes de ver la sintaxis veamos un ejemplo más con funciones normales.



// Función tradicional
function suma (a){
  return a + 100;
}

// Desglose de la función flecha

// 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
(a) => {
  return a + 100;
}

// 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
(a) => a + 100;

// 3. Suprime los paréntesis de los argumentos
a => a + 100;

//Por ejemplo, si tienes varios argumentos o ningún argumento, 
//deberás volver a introducir paréntesis alrededor de los argumentos:
// Función tradicional
var a = 4;
var b = 2;

function suma (a, b){
  return a + b + 100;
}

// Función flecha
c = (a, b) => a + b + 100;


console.log("Regreso de función flecha "+c);

//Antes
var saludoNormal = function (nombre) {
  return 'Hola ' + nombre;
};
console.log( saludoNormal('Jonathan') ); //Imprime Hola Jonathan

//Ahora
let saludo = nombre => `Hola ${nombre}`;
console.log( saludo('Jonathan') ); //Imprime Hola Jonathan


//Antes
const sumar1 = function (a, b) {
  return a + b;
};
console.log( sumar1(10, 9) ); //Imprime 19

//Ahora
const sumar2 = (a, b) => a + b;
console.log( sumar2(10, 9) ); //Imprime 19

//Tenemos un arreglo firstNames.

const firstNames = [ 'John', 'Jane', 'Mark'];

//A cada nombre le vamos a agregar el apellido Doe y crear un nuevo arreglo fullNames. 
//Para esto usaremos un ciclo y aprovecharemos la flexibilidad de template strings.


function getFullNames(names) {
  const fullNames = []
	
  for(const name of names) {
    fullNames.push(`${name} Doe`)
  }
  
  return fullNames
}

const fullNames = getFullNames(firstNames)

console.log(fullNames); // ["John Doe", "Jane Doe", "Mark Doe"]


//Ahora veamos cómo podemos sobreescribir esta función para usar arrow functions.

//Sintaxis
//Lo primero que debemos tomar en cuenta es que las arrow functions son funciones anónimas. Significa que el primer
// paso es usar una expresión de función.

//const firstNames = [ 'John', 'Jane', 'Mark'];

const getFullNamesO = function(names) {
  const fullNames = []
	
  for(const name of names) {
    fullNames.push(`${name} Doe`)
  }
  
  return fullNames
}

//const fullNames = getFullNames(firstNames)

console.log(fullNames); // ["John Doe", "Jane Doe", "Mark Doe"]

//Ahora bien, para escribir un arrow function solo debemos quitar el keyword function y 
//agregar lo que se conoce como _ fat arrow_ (=>) justo después de los paréntesis que contienen los parámetros de la función.

//const firstNames = [ 'John', 'Jane', 'Mark'];

const getFullNames1 = (names) => {
  const fullNames = []
	
  for(const name of names) {
    fullNames.push(`${name} Doe`)
  }
  
  return fullNames
}

//const fullNames = getFullNames(firstNames)

console.log(fullNames); // ["John Doe", "Jane Doe", "Mark Doe"]


//Arreglos
//Ya hemos trabajado con distintos tipos de datos como string, number y boolean. Muchas veces necesitamos representar una colección de variables, en lugar de crear múltiples variables podemos utilizar arreglos.

const color1 = 'Red'
const color2 = 'Blue'
const color3 = 'Green'

console.log(color1)  // Red
console.log(color2)  // Blue
console.log(color3)  // Green

//En lugar de crear tres variables distintas podemos crear un arreglo usando corchetes [] y separando cada elemento del arreglo con comas.

const colors = ['Red', 'Blue', 'Green']

console.log(colors)  // ['Red', 'Blue', 'Green']


const numbers = [1, 3, 4, 7, 2, 1, 9, 0];

const doubled = [];

for(let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

console.log(numbers); // [1, 3, 4, 7, 2, 1, 9, 0]
console.log(doubled);  // [2, 6, 8, 14, 4, 2, 18, 0]

//Una variación del ciclo for que hemos visto hasta ahora es el ciclo for...of que nos permite ejecutar 
//un bloque de código para cada elemento de un objeto iterable como es el caso de los arreglos


for(const number of numbers) {
  doubled.push(number * 2);
}

console.log(numbers)  // [1, 3, 4, 7, 2, 1, 9, 0]
console.log(doubled)  // [2, 6, 8, 14, 4, 2, 18, 0]


//Objetos
//En los arreglos utilizamos un índice numérico para acceder a un elemento de la colección. 
//Con los objetos en lugar de usar valores numéricos como índice utilizamos propiedades con nombre y valor, 
//el cual puede ser cualquier tipo de dato. Para crear un objeto utilizamos llaves {} separando cada propiedad con coma.

const john = {
  firstName: 'John',
  lastName: 'Doe',
  birthYear: 1990
}
//Se puede acceder al valor de una propiedad de dos formas. 
//La primera es con un punto después del nombre del objeto seguido del nombre de la propiedad que queremos leer, 
//la segunda es usando corchetes [] similar a como se hace con los arreglos pero pasando un string 
//con el nombre de la propiedad en lugar de un index.



console.log(john.firstName)  // 'John'

console.log(john['lastName'])  // 'Doe'
//De igual forma se puede cambiar el valor de las propiedades de los objetos.


console.log(john.firstName)  // 'John'

john.firstName = 'Jane'

console.log(john.firstName)  // 'Jane'

john['firstName'] = 'Joe'

console.log(john['firstName'])  // 'Joe'


//En el ejemplo anterior vimos que no podemos iterar un objeto de la manera que lo hacemos con un arreglo. 
//Tuvimos que extraer en nombre de las propiedades usando el método de JavaScript Object.keys() para después 
//iterar sobre el arreglo que retorna dicho método.

//Similar a for...of contamos con la instrucción for...in que nos permite iterar sobre las 
//propiedades enumerables de un objeto. Por lo que el código del ejemplo 2 puede reescribirse de la siguiente manera.

const car = {
  brand: 'Nissan',
  model: 'Versa',
  year: 2020
}

const pairs = []

for(const property in car) {
  pairs.push( [property, car[property]] )
}

console.log(pairs)

// [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]

//Entonces, for...of lo podemos usar para iterar sobre arreglos, 
//mientras que for...in lo podemos usar para iterar sobre las propiedades de un objeto.


//Spread operator
//El operador de propagación o spread operator hace más fácil trabajar con iterables como arreglos y objetos. 
//La sintaxis de este operador es ... y se coloca justo antes de la variable.

//Copiar iterables
//Uno de los usos más comunes de este operador es duplicar arreglos. 
//Después de declarar el nombre de la variable usamos corchetes para asignar un nuevo arreglo y 
//dentro colocamos el spread operator para obtener todos los elementos del arreglo que queremos copiar.

const colors2 = ['blue', 'red', 'yellow'];
const copyOfColors2 = [ ...colors2 ];

console.log(copyOfColors2); // ['blue', 'red', 'yellow']
//En el caso de objetos es casi lo mismo, la única diferencia es el uso de llaves en lugar de corchetes.

const book = {
  author: 'Marijn Haverbeke',
  title: 'Eloquent JavaScript',
  year: 2018
};

const copyOfBook = { ...book };

console.log(copyOfBook); 
// { author: "Marijn Haverbeke", title: "Eloquent JavaScript", year: 2018 }

//Unir iterables
//También podemos usar el spread operator para concatenar arreglos.

const oneToThree = [1, 2, 3];
const fourToSix = [4, 5, 6];
const oneToSix = [ ...oneToThree, ...fourToSix ]

console.log(oneToSix); // [1, 2, 3, 4, 5, 6]














































