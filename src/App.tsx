import React from 'react';
import Login from './component/Login/Login';
import {BrowserRouter , Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Route path='/' exact component={Login}></Route>
    </BrowserRouter>
  );
}

export default App;
