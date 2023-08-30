/* window.addEventListener("click", function() {
    console.log("Hello World!");
  }); */

  const button = document.querySelector("button");

  const but1 = document.getElementById("but1");

  but1.addEventListener(
    "click", //Evento 
    () => { //Handler
    console.log("Button clicked.");
  });

  const but2 = document.getElementById("but2");

  function once(){
    console.log("Click en el otro botón");
    but2.removeEventListener("click",once);//Se manda llamar la referencia a la función, no el resultado de la invocación
  }

  but2.addEventListener("click",once);//Se debe mandar llamar la misma