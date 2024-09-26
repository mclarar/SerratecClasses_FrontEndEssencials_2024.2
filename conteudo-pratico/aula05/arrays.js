let series = ['House', 'Fringe', 'The Walking Dead', 'Breaking Bad', 'Game of Thrones', 'Chaves', 'Chapolin', 'Ted Lasso', 'The Office' ]

// verifica o tamanho do array
console.log( 'array:', series.length);

console.log(series[0]);
console.log(series[3]);

//deleta o último índice do array
let deletarIndice = series.pop();
console.log(series);
console.log(deletarIndice);


//adiciona elementos no array
let adicionarItem = series.push('Dexter')
console.log(series);


let numeros = [1,2,3,4,5,6];

// // filtra elementos do array
 let numerosPares = numeros.filter(function(numero){
    return numero % 2 === 0;
})
    
console.log("filter", numerosPares);


 //itera o array e retorna um novo array de acordo com a função passada no map.   
let numerosMultiplicados = numeros.map(function(numero){
        return numero * 2 
    });
    
console.log(numerosMultiplicados);
    

// itera o array, mas não retorna um array novo
let forEachArray =  (numeros.forEach(function(numero){
  console.log(numero*3);
  
}));






