// 1. AND (&&)
//retorna true se ambas as expressões forem verdadeiras

const a = 10;
const b = 20;

if (a > 5 && b > 10) {
  console.log("ambas as condições são verdadeiras");
} else {
  console.log("Pelo menos uma condição é falsa");
}

//2 OR (||)
// retornar true de pelo menos uma condição for verdadeira

const temperatura = 30;

if (temperatura < 15 || temperatura > 25) {
  console.log("temperatura está fora da faixa confortável");
} else {
  console.log("temperatura está numa faixa confortável");
}

// 3 NOT (!)

let lojaAberta = true;

if (!lojaAberta) {
  console.log("a loja está fechada");
} else {
  console.log("a loja está aberta");
}
