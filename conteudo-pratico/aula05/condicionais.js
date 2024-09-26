let x = 10;

if (x > 15) {
  console.log("x é maior que 15");
} else if (x > 5) {
  console.log("x é maiot que 5, mas menor ou igual a 15");
} else {
  console.log("x é maior ou igual 5");
}

//ternário (maneira alternativa e mais curta de escrecver uma condicional)
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}

let mensagem = idade >= 18 ? "Você é maior de idade" : "Você é menor de idade";
console.log(mensagem);


//usado quando se tem várias condições possíveis para uma única variável
//compara o valor da expressão a diferentes "casos" e executa o correspondente
let cor = 'red';

switch (cor) {
  case 'red':
    console.log("a cor é vermelha");
    break;
  case 'blue':
    console.log("a cor é azul");
    break;
  default:
    console.log("a cor é desconhecida");
}
