
// import {Action} from './action';

export interface Login {
  userName:String,
  passWord: String
}


export interface State {
 login:Login,
 taskList: any
}


let initialState :State = {
  login: {
    userName: '',
    passWord: ''
  },
  taskList: []
};


export const reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
        login: action.login
      };
    case 'ADDTASK' : 
    return {
      ...state,
      taskList: [...state.taskList, ...action.task]
    };
    case 'DELETETASK': 
    return {
      ...state,
      taskList: state.taskList.filter((task:any) => {
        return task.id !== action.id;
      })
    };
    case 'UPDATETASK': 
    console.log('updated task ---',action.task)
    return {
     ...state,
     taskList:  state.taskList.map((task:any) => (
      task.id === action.task.id ? action.task :task
  ))
     }
    default:
      return state;
  }
};
