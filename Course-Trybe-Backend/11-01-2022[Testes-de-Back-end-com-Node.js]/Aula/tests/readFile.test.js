//Instalação das dependencias: npm i mocha chai sinon --save-dev  

const {expect} = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const {lerArquivo} = require('../readFile')

describe('Chama a função `readFile`',() => {
  describe('Quando o arquivo é lido com sucesso',()=> {

    const CONTENT_FILE =  'Hello, World!';

    before(()=> {
      sinon.stub(fs,'readFile').resolves(CONTENT_FILE);
    });

    after(() => {
      fs.readFile.restore();
    })

    describe('Resposta',  () => {

      it('É uma string', async () => {
        const content = await lerArquivo('./arquivo1.txt')
        expect(content).to.be.a('string');
      })

      it('É igual ao conteúdo do arquivo', async () => {                                                                                       
        const content = await lerArquivo('./arquivo1.txt')
        expect(content).to.be.eq(CONTENT_FILE);
      })
    });
  })

  describe('Quando ocorre um erro na leitura do arquivo', ()=> {

    before(()=> {
      sinon.stub(fs,'readFile').resolves(null);
    });

    after(() => {
      fs.readFile.restore();
    })

    describe('Resposta', ()=> {
      it('Deve ser igual a null', async () => {
        const content = await lerArquivo('./arquivoNaoExiste.txt')
        expect(content).to.be.null;
      })
    })
  });
});