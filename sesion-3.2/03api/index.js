const express = require('express');
const app = express();
const db = [
    {
        id:1,
        name:"Gansito",
        price:20,
    },
    {
        id:2,
        name:"Coca cola 600 ml sin azúcar",
        price:18,
    },
    {
        id:3,
        name:"Sabritas 20 gr",
        price:15,
    },
];

//Obtener todos los productos
app.get('/getProducts',function(request,response){
    //Envía la lista como recurso al cliente

    //la función .json() convierte los objetos de JS a JSON
    response.json(db);
});

//Una API tiene 4 maneras de recibir parámetros
//1. A través de la URL
//2. A través del Query String (en la URL)
//3. A través de los encabezados
//4. A través del body de la petición

//Obtener el producto con un ID en específico

//EN express para definir que un pedazo de la URL es una variable, se utilizan:
//  /ruta/algo/:variable -> donde "variable" es dinámico 
app.get('/getProduct/:id',function(request, response){
    //recuperar la variable :id de la URL
    //como una cadena de texto
    const id = request.params.id;
    const product = db.find( x=> x.id.toString() === id);
    response.json(product);
});

app.listen(8080,function(){
    console.log("> Escuchando puerto 8080")
});