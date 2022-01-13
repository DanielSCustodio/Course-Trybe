const fs = require('fs');

let content ='Valor inicial'

const functionAsynAwait = async () => {

  try {
    content = await fs.promises.readFile('arquivo1.txt','utf-8');
    console.log(`Fuction Async/Await: ${content}`);  
  } catch (error) {
    console.log(`Erro aqui: ${error}`)
  }
}

const fuctionCallback = () => {
  fs.readFile('arquivo1.txt','utf-8',(err, response) => {
  console.log(`Fuction Callback:${response}`);
  if(err){
    console.log(`Erro aqui: ${err}`);
  }
  });
}

const functionThen = () => {
  fs.promises.readFile('./arquivo1.txt','utf-8')
    .then((response) => console.log(`Fuction Then: ${response}`))
    .catch((err)=> console.log(`Erro aqui: ${err}`));
}

const showContent = () =>{
  console.log(`Show Content: ${content}`);
}

functionThen();
fuctionCallback();
functionAsynAwait();
showContent();
