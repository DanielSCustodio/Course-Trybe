//Action vai alterar a informação no reducer quando ela for chamada pela aplicação através do dispatch
//Deve ter pelo menos um estado igual ao estado inicial
export const  SELECT_MOVIE = 'SELECT_MOVIE';

export const selectMovie= (selectedMovie, selectedCategory)=>( {
  type: SELECT_MOVIE,
  payload: {                         //São as informações que a action vai disparar 
    selectedMovie,           // A action captura as informações na interfaca e leva até o reducer onde é feita a atualização do estado
    selectedCategory,
  },
});