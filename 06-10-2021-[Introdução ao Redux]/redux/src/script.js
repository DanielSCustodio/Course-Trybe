
const CHANGE_TO_DARK='CHANGE_TO_DARK';
const CHANGE_TO_LIGHT='CHANGE_TO_LIGHT';
const CHANGE_THEME='CHANGE_THME'

//Actions
const changeToDark=() => {
  return ({type: CHANGE_TO_DARK});
}

const changeToLight=() => {
  return ({type: CHANGE_TO_LIGHT});
}

const changeTheme=() => ({type: CHANGE_THEME});

//State
const INITIAL_STATE={
  theme: 'light',
}

//Reducer
//params =>(state, action)
//action é um objeto
const reducer=(state=INITIAL_STATE,action) => {
  switch(action.type) {
    case CHANGE_TO_DARK:
      return {theme: 'dark'}

    case CHANGE_TO_LIGHT:
      return {theme: 'light'}

    case CHANGE_THEME:
      return {theme: state.theme==='light'? 'dark':'light'}
    default:
      return state;
  }
}

//Store
const store=Redux.createStore(reducer);
store.subscribe(() => {
  const {theme}=store.getState();
  document.getElementById('wrapper').className=theme;
  document.getElementById('lamp').src=
    `img/${theme}.png`;
})

document.getElementById('ligth-switch').addEventListener('click',() => {
  const {theme}=store.getState();
  store.dispatch(changeTheme());
})