const http = require("node:http");

const server = http.createServer(function(request, response) {
    //Agrega datos a la respuesta
    response.write("Hello world form Node.js")
    //Termina la petición
    response.end();
});

server.listen(8080,function(){
    console.log("Servidor escuchando el puerto 8080");
});

