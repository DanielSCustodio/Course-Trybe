import React, { useState } from 'react';
import QuestiosnContext from './QuestionsContext';
import { createQuestion, getQuestions } from '../services/api';

function QuestionsProvider({ children }) { // children é a destruturação da props
  // useState();  Sempre retorna um array [valor, setValor()]
  const [question, setQuestion] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  async function fetchQuestion() {
    setisLoading(true);
    const questions = await getQuestions();
    setQuestion(questions);
    setisLoading(false);
  }

  async function createNewQuestion(newQuestion) {
    setisLoading(true);
    await createQuestion(newQuestion);
    setQuestion([...question, newQuestion]); // concat:question.concat(newQuestion)
    setisLoading(false);
  }

  return (
    <QuestiosnContext.Provider
      value={
        { question, isLoading, fetchQuestion, createNewQuestion }
      }
    >
      {children}
    </QuestiosnContext.Provider>
  );
}

export default QuestionsProvider;
