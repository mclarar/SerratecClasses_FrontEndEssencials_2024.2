let animes = ['Dragon Ball', 'One Piece', 'AoT', 'HxH', 'Sakura', 'Naruto', 'Sailor Moon']

//Acessando um index do array
console.log(animes[1]);

//Adcionando um index ao array

animes.push('Clube das Winx');

console.log("push", animes);

//deletando o ultimo elemento do array
let animesPop = animes.pop();
console.log(animesPop);
console.log("pop", animes);

//ver se elemento existe dentro do array
console.log(animes.includes('AoT'));

// ver tamanho do array
console.log("length", animes.length);

//filtrar elementos de um array
let numeros = [1,2,3,4,5,6];

let numerosPares = numeros.filter(function(numero){
    return numero % 2 === 0;
});

console.log("filter", numerosPares);

// modificando o array a partir de uma função
let maisNumeros = [1,2,3,4,5];

let numerosMultiplicados = maisNumeros.map(function(numero){
    return numero *2
});

console.log("map", numerosMultiplicados);

//percorre o array
let numerosDeNovo = [1,2,3];

numerosDeNovo.forEach(function(numeros){
    return numeros * 3
});

console.log("forEach", numerosDeNovo);