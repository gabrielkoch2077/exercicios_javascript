console.log("Hello World")

function verificarPar(numero) {
    if (numero % 2 === 0) {
        console.log("par");
    } else {
        console.log("impar");
    }
}

verificarPar(4);
verificarPar(7);

function calcular(n1, n2) {

    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const divisao = n2 !== 0 ? n1 / n2 : "Não pode dividir por zero";
    const multiplicacao = n1 * n2;



    console.log(soma);
    console.log(subtracao);
    console.log(divisao);
    console.log(multiplicacao);

}

let n1 = parseFloat(prompt("Digite seu primeiro número"));
let n2 = parseFloat(prompt("Digite seu segundo número"));

calcular(n1, n2);


let numero = 10;
let delay = 0;
while(numero>=1){

    console.log(numero);
    numero --;
}

function inverterTexto(texto) {
    
    return texto.split('').reverse().join('');
}


console.log(inverterTexto("JavaScript")); 
console.log(inverterTexto("Olá mundo!")); 
console.log(inverterTexto("12345"));      

function contarCaracteres(str) {

    return str.length;
}

console.log(contarCaracteres("gabriel"));


class Carro{

constructor(marca,modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano
}

exibirinformacoes(){
    console.log(`carro: ${this.marca} ${this.modelo} ${this.ano}`);
    }

}
const meuCarro = new Carro('Volkswagen', 'Beetle', '1963');
meuCarro.exibirinformacoes();

function mensagemPersonalizada(nome, mensagem = "Olá!") {
    console.log(`${mensagem} ${nome}`);
}

mensagemPersonalizada("João"); 
mensagemPersonalizada("Gabriel", "Bem-vinda,"); 