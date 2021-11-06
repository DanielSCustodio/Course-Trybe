import React, { useContext } from 'react';
import QuestionsContext from '../context/QuestionsContext';

import QuestionCard from './QuestionCard';

function QuestionList() {
  const { question } = useContext(QuestionsContext); // retorna o value do Provider
  // question na linha acima está sendo destruturado do value
  console.log(question);
  return (
    <section>
      {
        question
          .map((questions, index) => (
            <QuestionCard key={ index } question={ questions } />
          ))
      }
    </section>
  );
}

export default QuestionList;
