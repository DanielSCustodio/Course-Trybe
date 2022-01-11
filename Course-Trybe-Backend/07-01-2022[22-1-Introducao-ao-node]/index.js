//npm init -y cria o pacore automagicamente
const {soma, subtracao} = require('./calculadora');
const {readName, readWeight, readHeight} = require('./questions');
const imc = require('./imc');
const fs = require('fs');

const name = readName();
const weight = readWeight();
const height = readHeight();
const imcValue = imc(weight, height);

const message = `Nome: ${name}, Peso: ${weight}, Altura: ${height}, IMC: ${imcValue}`;
fs.appendFileSync('imc.txt', message);
// console.log(`Resultado: `+ subtracao(15,7));