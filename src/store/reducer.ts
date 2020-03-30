
import {Action} from './action';

export interface Login {
  userName:String,
  passWord: String
}


export interface State {
 login:Login,
 taskList: any[]
}


const initialState :State = {
  login: {
    userName: '',
    passWord: ''
  },
  taskList: []
};


export const reducer = (state = initialState, action:Action) => {
  if (action.type === 'SIGNIN') {
    return {
      ...state,
      login : action.login
    };
  }
  return state;
};
