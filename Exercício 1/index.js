var n_numeros = parseInt(prompt('Quantos números você deseja?'))

var array = []

for (let a = 1; a <= n_numeros; a++) {
    let numero = parseFloat(prompt(`Digite aqui o ${a}º número`))
    array.push(parseFloat(numero))
}

console.log('array = '+array)

let soma = 0
let media

for (let valor of array) {
    soma = soma + valor
}

media = soma / array.length

console.log('soma = '+soma)
console.log('media = '+media)

console.log('Calculando Potencia de 2!')

var multiplicacao

array.forEach(function(element, index, array){
    console.log()
    multiplicacao = Math.pow(element,2);
    console.log(element+' * '+element+' = '+multiplicacao)
});

console.log('Calculando Raizes!')

var quadrada
array.forEach(function(element, index, array){
    sqrt = Math.sqrt(element); 
    console.log('raiz quadrada de '+element+' = '+sqrt);       
});

var cubica
array.forEach(function(element, index, array){
    cubica = Math.cbrt(element); 
    console.log('raiz cubica de '+element+' = '+cubica);                   
});