async function fooA(){
    //return Promise.reject ("Hola Async Await");
    return "Hola Async Await";
}

console.log(fooA());

fooA()
    .then(value=>console.log(value));


async function bar(){
    try{
        let saludo = await fooA();
        console.log("Esto no es un error", saludo);
    }catch(e){
        console.log("Esto es un error ", e);
    }
}


bar()