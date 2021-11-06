import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import QuestionsContext from '../context/QuestionsContext';

function NewQuestionPage() {
  // ______________________ESTADOS LOCAIS______________________
  const [question, setquestion] = useState('');
  const [user, setName] = useState('');
  // ______________________ESTADOS LOCAIS______________________

  const { createNewQuestion: createNewQuestionApi } = useContext(QuestionsContext);
  const history = useHistory();

  async function createNewQuestion(event) {
    event.preventDefault();
    const newQuestion = { user, question }; // Esses são os valores do useState
    await createNewQuestionApi(newQuestion);
    history.push('/');
  }
  return (
    // poderia   ser também (event) => createNewQuestion(event)
    <section className="question-section">
      <form onSubmit={ createNewQuestion }>
        <label htmlFor="question">
          Digite a sua pergunta:
          <textarea
            onChange={ (event) => setquestion(event.target.value) }
            value={ question }
            name="question"
            placeholder="Escreva aqui sua pergunta"
            id="question"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="user">
          Digite o seu nome:
          <input
            onChange={ (event) => setName(event.target.value) }
            value={ user }
            type="text"
            name="name"
            placeholder="Maria"
            id="user"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default NewQuestionPage;
