let titulo = document.getElementById("titulo");
let paragrafo = document.querySelector(".paragrafo");

console.log(titulo);
console.log(paragrafo);

function mudarTexto() {
    titulo.innerText = "Novo Título";
    paragrafo.innerText = "Novo Parágrafo";
}

function mudarFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
}

function adicionarClasse(){
    titulo.classList.add("Descricao");
    document.querySelector(".descricao").style.color = "red"
}