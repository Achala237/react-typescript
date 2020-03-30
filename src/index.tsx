import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {createStore} from 'redux';
import { Provider } from "react-redux";
import {reducer} from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(
 <Provider store={store}>
 <BrowserRouter>
<React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

