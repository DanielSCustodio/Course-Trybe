import {render,screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderWithRouter from "./utils/renderWithRouter";
import App from '../App';


describe('App.js test',() => {

  it('Ao entrar na página principal o texto "Sobre Mim" aparece e clica no link de projetos',() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const aboutText=screen.getByRole('heading',{name: /página sobre mim/i});
    const projectLink=screen.getByRole('link',{name: /projetos/i});

    expect(aboutText).toBeInTheDocument();
    expect(projectLink).toBeInTheDocument();

    userEvent.click(projectLink);
    const projectText=screen.getByRole('heading',{name: /página de projetos/i})
    expect(projectText).toBeInTheDocument();

  });

  it('Ao entrar na página  principal o texto "Sobre Mim" aparece e clica no link de comentários',() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const aboutText=screen.getByRole('heading',{name: /página sobre mim/i});
    const commentstLink=screen.getByRole('link',{name: /deixe um comentário/i});

    expect(aboutText).toBeInTheDocument();
    expect(commentstLink).toBeInTheDocument();

    userEvent.click(commentstLink);

    const commentsText=screen.getByRole('heading',{name: /comente!/i})
    expect(commentsText).toBeInTheDocument();

  });

  it('Exibe a página "Não Encontrado" quando digito uma rota inexistente',()=>{
    const {history}= renderWithRouter(<App/>);
    history.push('/rota-inexistente');

    const notFoundText = screen.getByRole('heading', {  name: /página não encontrada/i});
    expect(notFoundText).toBeInTheDocument();
  });

  it('Ao entrar na paǵina de comentário, é possível adicionar um comentário',()=>{
    const {history}= renderWithRouter(<App/>);
    history.push('/comments');

    const commentsText = screen.getByRole('heading', {  name: /comente!/i});
    const  commentsButton = screen.getByRole('button', {  name: /add comment/i});
    const commentsInput =  screen.getByRole('textbox');

    expect(commentsText).toBeInTheDocument();
    
    userEvent.type(commentsInput, 'xablau');
    userEvent.click(commentsButton);

    const xablauText = screen.getByText('xablau');
    expect(xablauText).toBeInTheDocument();

  })
});