let name = 'Fabio';
let lastName = 'Fernandes'
let space = ' ';
let year = 2023;
let age = 33;

let fullName = name+space+lastName;
let yearBorn = year-age;

console.log("Seja Bem vindo!"+space+fullName+space+"você nasceu em:"+space+yearBorn);

let valor1String = prompt('Insira o primeiro número:');
let valor2String = prompt('Insira o segundo número:');

let valor1 = parseInt(valor1String);
let valor2 = parseInt(valor2String);

let valorTotal = valor1+valor2;

console.log('O resultado da soma dos números é de :'+valorTotal);
alert('O resultado da soma dos números é de :'+space+valorTotal);