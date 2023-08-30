//SYNC
function foo(){
    setTimeout(() => {
        return "Hola function";
    }, 5000);    
}

var saludo = foo();

console.log(saludo);//Esto marca indefinido porque no se puede esperar el hilo de js

function setTimeout(callback,mili){
    stop(mili);
    callback();
}

//Callbacks

function fooC(callback){
    setTimeout(() => {
        callback("Hola callback");
    }, 5000);    
}

fooC((texto)=>console.log(texto));
console.log("Sigo esperando");

//Callback hell

function imprime(){
    setTimeout(()=>{
        console.log("1");
        setTimeout(()=>{
            console.log("2")
            setTimeout(() => {
                console.log("3")
            }, 3000);
        },2000)
    },1000);
}

imprime();

//Promesas

function fooP(){
    //console.log("Antes del return");
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            //console.log("Antes del resolve");
            resolve("Hola Promesa");
            reject(new Error("La promesa se rompió"));
        }, 2000);
    })
}

fooP()
    .then(value => console.log(value))
    .catch(error => console.log(error))
