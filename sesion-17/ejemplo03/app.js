function createNode(type, child){
    const node = document.createElement(type);
    const text = document.createTextNode(child);
    node.appendChild(text);
    return node
}

console.log (createNode('h1','Hello world'));

const autor = createNode("strong","- Karl Popper");
console.log(autor);

const cita = document.getElementById('quote');
console.log(cita);

cita.appendChild(autor);

const link = document.getElementById('link');
console.log(link);
link.textContent = "Some cool link"
link.href = "http://google.com";
link.className = "styled-link"