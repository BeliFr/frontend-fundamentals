const title = document.getElementById("title");

const red = document.getElementById("red");
const blue = document.getElementById("blue");
const black = document.getElementById("black");
const boton = document.getElementById("boton");

red.addEventListener("click",()=>{
  title.style = "color:red;"
});

blue.addEventListener("click",()=>{
  title.style = "color:blue;"
});

black.addEventListener("click",()=>{
  title.style = "color:black;"
});


boton.addEventListener("mousedown",(event) => {
  console.log(event);
  if (event.button == 0) {
    console.log("Left button");
  } else if (event.button == 1) {
    console.log("Middle button");
  } else if (event.button == 2) {
    console.log("Right button");
  }
});