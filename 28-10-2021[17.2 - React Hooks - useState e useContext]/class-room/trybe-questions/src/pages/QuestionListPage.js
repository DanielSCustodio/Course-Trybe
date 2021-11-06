import React from 'react';
import QuestionList from '../components/QuestionList';
import QuestionsContext from '../context/QuestionsContext';

class QuestionListPage extends React.Component {
  componentDidMount() {
    const { fetchQuestion } = this.context; // quando é componente de classe pega a informação assim
    fetchQuestion();
  }

  render() {
    const { isLoading } = { isLoading: false };
    const { history } = this.props;
    return !isLoading ? (
      <section>
        <QuestionList />
        <button
          type="button"
          onClick={ () => history.push('/new-question') }
        >
          Nova Pergunta
        </button>
      </section>
    ) : <span>Carregando...</span>;
  }
}
QuestionListPage.contextType = QuestionsContext; // quando é componente de classe pega a informação assim

export default QuestionListPage;
