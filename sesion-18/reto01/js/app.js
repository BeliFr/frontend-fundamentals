const globo = document.getElementById("globo");
let tam = 20;
globo.style.fontSize = `${tam}px`;
window.addEventListener("keydown", inflar)

function inflar(event){
    if (event.key == "ArrowUp") {
        tam *= 1.1;
        if(tam >= 80) {
            globo.textContent = '💥'
            removeEvent()
        
        }
    }
    globo.style.fontSize = `${tam}px`;
    if (event.key == "ArrowDown") {
        tam *= 0.9 
        globo.style.fontSize = `${tam}px`
        console.log("Tecla abajo");
      }
}

const removeEvent = () => window.removeEventListener('keydown', inflar)