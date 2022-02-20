var nome = prompt('Digite aqui seu texto')
console.log(nome.toLocaleUpperCase())
console.log(nome.toLowerCase())
var arr = nome.split('')
for(let elemento of arr){
    console.log(elemento)
}