// 1. AND (&&)
// Retorna true se ambas as expressões forem verdadeiras

const a = 10;
const b = 20;

if (a > 5 && b > 10) {
  console.log("ambas as condições são verdadeiras");
} else {
  console.log("Pelo menos uma condição é falsa");
}

// 2 OR (||)
// Retornar true se pelo menos uma condição for verdadeira

const temperatura = 30;

if (temperatura < 15 || temperatura > 25) {
  console.log("temperatura está fora da faixa confortável");
} else {
  console.log("temperatura está na faixa confortável");
}

// 3 NOT (!)
// Inverte o valor da condição: se for true, retorna false, e vice versa

const chovendo = false;

if (!chovendo) {
    console.log('não está chovendo');
}else{
    console.log('está chovendo');
}