const texto = document.getElementById("texto");
const titulo = document.getElementById("titulo");

texto.addEventListener(
  "input", //Evento
  (event)=>{//Handler
    //console.log(event.data);
    //console.log(event.target.value);
    titulo.textContent = event.target.value;
  }  
  )