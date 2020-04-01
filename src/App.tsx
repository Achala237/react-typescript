import React from 'react';
import Login from './component/Login/Login';
import {BrowserRouter , Route} from 'react-router-dom';
import {Dashboard} from './component/Dashboard/Dashboard';
import AddTask from './component/Task/AddTask';
import TaskList from './component/Task/TaskList/TaskList';
function App() {
  return (
    <BrowserRouter>
    <Route path='/' exact component={Login}></Route>
    <Route path='/dashboard' exact component={Dashboard} />
    <Route path="/addTask"  component={AddTask}/>
    <Route path="/viewTasks"  component={TaskList}/>
    </BrowserRouter>
  );
}

export default App;
