
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
  if (action.type === 'SIGNIN') {
    return {
      ...state,
      login: action.login
    };
  }
  if (action.type === 'ADDTASK') {
    return {
      ...state,
      taskList: [...action.task]
    };
  }
  return state;
};
