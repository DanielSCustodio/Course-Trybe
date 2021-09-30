import React from 'react';
import {render,screen,fireEvent,waitForElementToBeRemoved} from '@testing-library/react';
import App from './App';

describe('MovieList',() => {
  it('Renderiza "Carregando..." quando a aplicação é iniciada',() => {
    const {getByText}=render(<App />);
    expect(getByText(/carregando/i)).toBeInTheDocument();
  });

  it('Exibe o primeiro filme',async () => {
    render(<App />);
    //Aguardando o loading ser retirado da tela
    await waitForElementToBeRemoved(() =>
    screen.getByText(/carregando/i),
    {timeout:3000}
    );
    expect(screen.getByText('Final Fantasy')).toBeInTheDocument();
  });

  it('Renderiza a página de detalhes ao clicar em "Ver detalhes"',async()=>{
    render(<App />);
    //Aguardando o loading ser retirado da tela
    await waitForElementToBeRemoved(() =>
    screen.getByText(/carregando/i),
    {timeout:3000}
    );
    const  detailsButton = screen.getByTestId(/Kingsglaivedetails/i);
    fireEvent.click(detailsButton);

    await waitForElementToBeRemoved(() =>
    screen.getByText(/carregando/i),
    {timeout:3000}
    );

    expect(screen.getByText(/genre/i)).not.toBeNull();

  })
});