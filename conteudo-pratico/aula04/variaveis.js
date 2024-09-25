var nome = "Maria"; // global
console.log(nome);
let cpf = "147852657";
const estadoCivil = "solteiro";

function Imprimeidade() {
  let idade = 28; //existe dentro do bloco de código
  idade = 32;
  console.log(idade);
}
console.log(idade);
// resultado = erro no console pois, o valor dela dentro do bloco de códdigo, não é lido globalmente

function ImprimirNome() {
  console.log(nome);
}

const telefone = 24874616854; //valor não pode ser mudado
telefone = 554683541685; // reesultado: erro no console - pois a variável é constante e não pode ser modificada

function ImprimeEndereco() {
  const endereco = "rua B"; //existe dentro do bloco de código
  console.log(endereco);
}

console.log(endereco);
// resultado = erro no console pois, o valor dela dentro do bloco de códdigo, não é lido globalmente

//   tipos de variáveis
// string
let nome = "Carol";
//number
let idade = 28;
//   booleano
let estaCalor = true;
//undefined
let variavelIndefinida;
