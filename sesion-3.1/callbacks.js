
//Se importa la libreria fs de node
const fs = require("node:fs");


//callbak es una operación que se va a ejecutar en el futuro
//después de determinada acción

fs.readFile('./readme.txt','utf-8',function(err,text){
    if(err){
        console.log("Ocurrió un error al leer el archivo");
    }else{
        console.log(text)
    }
});

console.log("Leyendo un archivo...");