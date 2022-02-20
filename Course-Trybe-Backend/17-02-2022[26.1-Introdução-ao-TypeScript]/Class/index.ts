/* let email = 10;
console.log(typeof email);
console.log(email);
email='daniel@gmail.com'; // Não vai aceitar
console.log(email); */

/* 
const gritar = (name:string) =>{
  console.log(typeof name);
  return name.toUpperCase();
}

console.log(gritar('Olá, você!'));

 */
/* 
let numberOrString: string|number;
numberOrString = 'Um Nome qualquer',
numberOrString = 17;
/* numberOrString = false; */ 

/* const gritar = (value:string|number|boolean) =>{
  if(typeof value === 'string'){
    return value.toUpperCase();
  }else if(typeof value === 'number'){
    return value.toString().toUpperCase();
  }else{
    return "Not found"
  }
}

console.log(gritar('daniel'));
console.log(gritar(true)); */

/* let languages: string[] = [];
let ids : number[] = [];

languages.push('My name is Coca Cola');//passa
languages.push(1);//falha

ids.push(1); //passa
ids.push('My name is Jhon'); //não passa
console.log(languages);
console.log(ids); */

import {gritar, loga} from "./hello";

const nomes:string[]= ['Batman', 'Lanterna Verde','Mulher Maravilha', 'Lex Luthor']

nomes.map((nome)=>{
  let nameUpperCase = gritar(nome);
  loga(nameUpperCase.trim());  
})




