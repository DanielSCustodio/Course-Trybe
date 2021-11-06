import React from 'react';
import ReactDOM from 'react-dom';
import ISSProvider from './context/ISSProvider'

import './index.css';
import App from './App';

ReactDOM.render(
  <ISSProvider><App/></ISSProvider>, document.getElementById('root'),
);
