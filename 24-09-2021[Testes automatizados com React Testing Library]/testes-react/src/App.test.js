import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tela de inserção do email', () => {
  it('Verifica que há um campo de input na tela', () => {
    //Acessar os elementos  que estão na tela
    const{getByLabelText} = render(<App/>)   //Descontrução
    const inputEmail = getByLabelText('Email');
    //Interagir com os elementos da tela caso haja necessidade
      
    //Fazer o teste
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
    });
    
    it('Verifica  há dois botões',()=>{
      const {getAllByRole} = render(<App/>);
      const button = getAllByRole('button');
      expect(button.length).toBe(2);
    })
    
    it('Verifica que há um botão com o value "enviar"',()=>{
      const {getByTestId} = render(<App/>)
      const button  = getByTestId('id-send');
      expect(button).toBeInTheDocument();
      expect(button).toHaveValue('Enviar')
    });

    it('verifica que ao inserir um email e clicar em "enviar", o email aparece na tela', ()=>{
      const{getByTestId, getByLabelText} = render(<App/>)
      const emailInput   = getByLabelText('Email');
      const buttonSend = getByTestId('id-send');
      const  userEmail = getByTestId('id-email-user');

      //Simulando a interação do usuário 
      //1- Passando um email no input
      //2 - Clicando no botão
      fireEvent.change(emailInput,{target:{value:'daniel@teste.com'}});
      fireEvent.click(buttonSend)

      //Fazendo o testes
      expect(emailInput.value).toBe('');
      expect(userEmail.textContent).toBe('Email: daniel@teste.com')

    });
});
