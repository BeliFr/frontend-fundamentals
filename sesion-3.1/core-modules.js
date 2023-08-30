//Core modules, paquetes que vienen incluidos en la instalación de Nodejs
//Se pueden agregar paquetes y módulos para desarrollar aplicaciones

//Se utiliza una función especial llamada require para poder importar las funciones o módulos que se quieren usar

//Se pueden agregar módulos, se pueden crear propios módulos y paquetes npm de terceros
//Cuando se usan : se importan los paquetes que son parte de node

//Common JS
const os = require("node:os");

//Ecmascript 6
//import os from "node:os";


console.log(os.platform());//Se muestra en pantalla el sistema operativo que se está ejecutando



