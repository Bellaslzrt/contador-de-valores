// estado da minha aplicação
let numero = 0; 

// alteradores de estados da minha aplicação    
function aumentar() {
numero = numero + 1;
mostrarNaTela();
}
function diminuir () {
    if( numero > 0 ) {
        numero = numero - 1;
        mostrarNaTela();
    }

}
// jogar o estado da aplicação na tela
function mostrarNaTela() {
    const p = document.querySelector("p");
    p.innerText = numero;
}
// iniciar 
MostrarNaTela();