//¿Qué es scope?
//Scope es la accesibilidad que tienen las variables, funciones y objetos en partes específicas del código
// durante el tiempo de ejecución. En otras palabras, el scope determina la visibilidad de las variables en áreas 
// del código.

/* JavaScript cuenta con dos tipos de scope: global y local. Las variables dentro de una función se encuentran
 en un scope local, aquellas definidas fuera de una función están en un scope global. */

/*  Scope global
Al momento de empezar a escribir en un documento de JavaScript ya estás en un scope global y 
solamente existe uno todo el documento. Todas las variables que estén definidas fuera de una función 
se encuentran en el scope global. Esto significa que se puede acceder a dichas variables e incluso modificarlas 
desde cualquier otra parte del código, incluso dentro de una función. */

const name = "John Doe";

console.log(name); // "John Doe"

function foo() {
  console.log(name); 
}

foo(); // "John Doe"

/* Scope local
Las variables definidas dentro de una función se encuentran en un scope local, 
esto significa que solo se puede acceder a ellas dentro de la función donde se definió 
la variable. Esto te permite tener variables con el mismo nombre en distintas funciones, 
cada una de esas variables estará ligada a su respectiva función. */

function foo() {
  const bar = "John Doe";
  console.log(bar); 
}

foo(); // "John Doe"

//console.log(bar); // Uncaught ReferenceError: name is not defined

/* Execution context
El ambiente en el cual cada línea de código es ejecutada se conoce como Execution Context. 
Cada vez que se llama o ejecuta una nueva función, JavaScript crea un nuevo execution context, 
estos se van apilando en lo que se conoce como Execution Stack. */

/* Todas las variables y declaraciones de funciones por default forman parte del Global Execution Context, 
como es el caso de name, first, second, y third. Al momento de ejecutar first() se crea un nuevo execution context 
encima del global, después de crear var a en este nuevo contexto se ejecuta second() y el proceso se repite. 
El contexto que esté hasta arriba en la pila es el que se está ejecutando en el momento, una vez que la ejecución 
finalice se elimina de la pila y se procede a ejecutar el que sigue, así hasta terminar.

Para evitar confusiones, el scope se refiere a la visibilidad de variables mientras que el contexto se refiere
al valor de this. Es decir, conforme cambia el execution context también lo hace el objeto this. */

/* 
 ¿Cuál es el valor de this?
Ya mencionamos que la ejecución de un execution context por default es global. 
Esto significa que this por default está haciendo referencia a un objeto global.

En un navegador o browser este objeto global es window. */
console.log(this);
/* this como método
Ya mencionamos que las propiedades de los objetos pueden contener cualquier tipo de dato, 
esto incluye expresiones de funciones, en cuyo caso deja de llamarse propiedad y se conoce como método. */

const john = {
  firstName: 'John',
  lastName: 'Doe',
  birthYear: 1990,
  calculateAge: function(birthYear) {
    const today = new Date()
    const year = today.getFullYear()
    return year - birthYear
	}
}
/* 
El objeto john contiene el método calculateAge. Este método es una expresión de función que 
recibe birthYear como argumento y retorna la edad actual de john. */

console.log(john.calculateAge(1990))	// 31


/* Sesión 6: Programación orientada a objetos
Objetivos
Crear constructores a partir de los cuales se puedan instanciar múltiples objetos. */



/* Paradigma de programación
Un paradigma de programación es una forma de pensar a la hora de hacer tu código. 
Es como una receta que nos explica cómo debemos estructurar y organizar el código. 
Existen distintos tipos de paradigmas y estos difieren unos de otros en cuanto a conceptos y la 
forma de solucionar problemas.

Existen dos grandes categorías en cuanto a estilos de programación, y la mayoría de paradigmas es 
una variante de una de estas dos. */

/* Programación imperativa
Describe paso a paso un conjunto de instrucciones necesarias para solucionar el problema. 
Se enfoca en describir el cómo se llega a la solución.
Programación orientada a objetos	Se encapsulan tanto variables como funciones en objetos. 
Dichos objetos manipulan los datos de entrada para la obtención de datos de salida específicos. 
Cada objeto creado ofrece una funcionalidad específica. Ejemplos: C++, C#, Java. */

/* Programación declarativa
Se describe el problema que se pretende solucionar. Está más enfocado en el qué solución se desea alcanzar.
Programación funcional	Está basado en las funciones matemáticas, lo que permite hacer uso de mecanismos matemáticos 
para optimizar procesos. Prevalece la inmutabilidad y los datos son usados con transparencia referencial. 
Ejemplos: Erlang, Rust, Haskell. */

/* Existen también lenguajes multiparadigma, es decir, que te permiten crear programas con múltiples 
estilos de programación, dándole al desarrollador la flexibilidad de escoger el mejor paradigma para 
cada tarea, esto implica que ningún paradigma resuelve todos los problemas de la forma más sencilla y eficiente. */


/* Programación orientada a objetos
También conocido como OOP por sus siglas en inglés (Object Oriented Programming), es un paradigma imperativo que 
hace fuerte uso de las propiedades y métodos de los objetos. Múltiples objetos interactúan entre 
ellos para construir aplicaciones complejas. Permite estructurar las aplicaciones en módulos, una buena forma 
de organizar y mantener limpio el código.

El siguiente objeto representa información personal de una persona. */


//Si queremos representar información de más personas tendríamos que crear múltiples objetos de la misma forma.

const johnny = {
  name: 'John',
  birthYear: 1990,
  job: 'Developer'
}

const mark = {
  name: 'Mark',
  birthYear: 1985,
  job: 'Teacher'
}

const jane = {
  name: 'Jane',
  birthYear: 1975,
  job: 'Designer'
}

/* Herencia
En términos simples la herencia es cuando un objeto está basado en otro objeto, es decir, 
un objeto puede acceder a las propiedades y métodos de otro objeto. */

/* Prototype
En JavaScript la herencia es posible gracias a una propiedad con la que cuentan todos los 
objetos que se denomina Prototype. Si queremos que las instancias hereden un método lo podemos 
colocar en el Prototype del constructor. Veamos un ejemplo con el constructo Person y la instancia 
john con la que hemos trabajado anteriormente. */

/* ES6 Classes
Ahora que vimos cómo funciona el function constructor y prototype podemos ver otra característica de JavaScript agregada en ES6. Las clases en JavaScript solamente son Syntactic Sugar, es decir, funcionan exactamente igual que function constructor, lo que cambia es la sintaxis que hace más fácil su lectura y escritura.

Veamos el código del ejemplo 3: */

const Person = function(name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
}

//Lo primero que se ejecuta en la clase es el método constructor al cual le debemos pasar los argumentos de la función.


//Y por último agregamos las asignaciones de variables.

class Persona {
  constructor(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
  }
}

//Ahora veamos el método que agregamos al prototype en el ejemplo 3.
const john1 = new Person('John', 1990, 'Developer');

const mark1 = new Person('Mark', 1985, 'Teacher');

const jane1 = new Person('Jane', 1975, 'Designer');

console.log(john1);
console.log(mark1);
console.log(jane1);

Person.prototype.calculateAge = function() {
  const today = new Date();
  const year = today.getFullYear();

  console.log( year - this.birthYear );
}
//Si inspeccionamos en consola estos tres objetos nos damos cuenta de que ninguno de ellos tiene el método calculateAge().


john1.calculateAge();

mark1.calculateAge();

jane1.calculateAge();


class Person2 {
    constructor(name, birthYear, job) {
      this.name = name;
      this.birthYear = birthYear;
      this.job = job;
    }
      
    calculateAge() {
      const today = new Date();
      const year = today.getFullYear();
      console.log( year - this.birthYear );
    }
  }

  const john3 = new Person('John', 1990, 'Developer');
  console.log(john3);


/*   Programación funcional
Como vimos en la sesión anterior existen distintos paradigmas de programación. 
La programación funcional es un paradigma declarativo, es decir, se enfoca en el qué se
 desea lograr sin preocuparse mucho en el cómo (el lenguaje de programación se encarga de esta parte). */

const numbers = [1, 2, 3, 4, 5];
const doubles = [];

for(let i = 0; i < numbers.length; i++) {
  doubles.push(numbers[i] * 2);
}

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]
/* Este es un ejemplo de código imperativo. Generalmente usar ciclos es programación imperativa
 pues queda del lado del programador controlar cuándo iniciar, cuándo terminar y qué hacer en cada ciclo. */

const numbers2 = [1, 2, 3, 4, 5];
const doubles2 = numbers.map(function(number) {
  return number * 2;
});

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]
/* Esta es la forma declarativa del mismo código. Ambos fragmentos de código hacen exactamente 
lo mismo, crear un arreglo doubles con el doble de cada elemento del arreglo numbers. 
La diferencia con el segundo ejemplo es que hacemos uso del método map(), el programador no se encarga de 
controlar cuándo y dónde terminar el ciclo, solo se encarga del resultado, obtener el doble de cada 
elemento dentro de numbers. */

/* Inmutabilidad
Decimos que algo es mutable cuando puede ser cambiado o modificado. Por lo tanto, inmutable es 
algo que no puede ser alterado. En términos de programación, las variables inmutables nunca 
cambian su valor. Este es un principio muy importante en la programación funcional, de hecho, 
lenguajes de programación como Elixir o Erlang no permiten la mutación de variables.

En lugar de alterar una variable, creamos nuevos valores y reemplazamos los antiguos. 
Si bien JavaScript no es puramente funcional, es lo suficientemente flexible como para permitir o pretender serlo. */

/* Funciones puras
Para que una función pueda ser considerada pura debe cumplir dos reglas:

El valor retornado siempre es el mismo cuando se da el mismo valor de entrada.

No debe producir side effects (efectos secundarios). */

/* El primer punto se refiere a que si ejecutamos la misma función varias veces con los mismos argumentos 
siempre obtendremos el mismo resultado. */

function add(a, b) {
  return a + b;
}

function randomNumber() {
    return Math.floor(Math.random() * 10);
  }

/* Esta función no cumple la primera regla porque si la llamamos 10 veces, 
obtendremos cada vez un número aleatorio entre 1 y 10. 
No podemos predecir el valor de retorno de esta función. */

/* Desarrollo
Para ver cómo funciona la inmutabilidad vamos a empezar creando un objeto que represente un carro. */

const car = {
  brand: 'Nissan',
  model: 'Sentra',
  year: 2020
}
/* Ahora vamos a crear una función que agregue la propiedad color al auto. */

function addColor(car) {
  car.color = 'Black';
  return car;
}
/* Ahora llamamos a la función pasándole el objeto car y guardamos en resultado en otra variable. */

console.log('Before calling addColor()', car);

const mismoCar = addColor(car);

console.log('Después de llamar addColor()', car);
console.log('Después de llamar addColor()', mismoCar);

console.log('Mismo carro?', car === mismoCar); // true

/* La función addColor muta el objeto car que recibe. La primera vez que mostramos en consola vemos 
que no existe la propiedad color, después de llamar a la función vemos la propiedad en ambos objetos. */

//Tenemos que hacer unos cambios para que addColor no mute el objeto que recibe.

function addColor(car) {
  const newCar = Object.assign({}, car, {
    color: 'Black'
  });
  return newCar;
}
//Object.assign() asigna las propiedades de un objeto a otro sin modificar el objeto original. 
//En este ejemplo está copiando todas las propiedades de car en un nuevo objeto vacío {} y agregando la propiedad color.

console.log('Before calling addColor()', car);

const newCar = addColor(car);

console.log('After calling addColor()', car);
console.log('After calling addColor()', newCar);

console.log('Same car?', car === newCar); // false