import React from 'react';
import { connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Login.css'
import * as actions from  '../../store/actions'

interface Props {
    onSignIn: (login:ILogin) => void;
}


interface ILogin {
    userName:string;
    password:string
}
interface State {
   login : ILogin,
   submitted: boolean,
   isFromValid: boolean,
   errors:any
}


class Login extends React.Component<Props,State> {
 constructor (props:Props) {
   super(props);
   this.state = {
       login: {
        userName:'',
        password:''
       },
       submitted:false,
       isFromValid:false,
       errors:{
         userName:'',
         password:''
       }
   }  
   this.handleInputChange = this.handleInputChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);

}
    handleInputChange (e:any) {
    const name = e.target.name;
    let errors = this.state.errors;
    const value = e.target.value;
    const updatedLogin = {
        ...this.state.login,
        [`${name}`]: value
      };  
      errors[name] = this.getErrorMessage(name,value);
       this.setState(
        () => ({login:updatedLogin, errors:errors}),
        () => {
          this.setState({isFromValid:this.hasErrors(this.state.errors)});
        }
      );
    }
     getErrorMessage(name:string,value:any) {
      let errorMsg = '';
     switch (name) {
     case 'userName': 
     errorMsg = value.length === 0 ? 'User Name is required' :''
     return errorMsg;
     case 'password' :
     errorMsg = value.length === 0 ? 'Password is required' :''
     return errorMsg;
     default :
     return errorMsg;
     }
     }
     hasErrors = (errors:any) => {
      let valid = true;
      Object.values(errors).forEach(
        (val:any) => {
          valid =val.length === 0 && valid
        }
      );
      return valid;
    }
    validateForm (state:State) {
    let errors = state.errors ;
    if(state.login.userName === '') {
      errors.userName = this.getErrorMessage('userName',state.login.userName);;
    }
    if(state.login.password === '') {
      errors.password = this.getErrorMessage('password',state.login.password);
    }
    this.setState({isFromValid:this.hasErrors(this.state.errors), errors:errors})
    }
    onSubmit (e:any) {
      e.preventDefault();
      if(this.state.isFromValid) {
        this.props.onSignIn(this.state.login);
        this.setState( { submitted: true } );
      } else {
        this.validateForm(this.state)
      }
    }
    
   render () {
    let redirect = null;
    if (this.state.submitted) {
        redirect = <Redirect to="/dashboard" />;
    }
  return (
  <div className="Login">
    {redirect}
      <h1>Login</h1>
      <form>
          <label>
              UserName : <input name= "userName" type="text"  onChange={this.handleInputChange} placeholder="Enter UserName"/>
          </label>
          <br></br>
          {this.state.errors.userName}
          <br></br>
          <label>
              Password : <input name="password" type="text"onChange={this.handleInputChange}  placeholder="Enter Password"/>
          </label>
          <br></br>
          {this.state.errors.password}
          <br></br>
         <button onClick ={this.onSubmit}>Sign In</button>
      </form>
      </div>
      )
  }
}

const mapDispatchToProps = (dispatch :any) => {
return {
     onSignIn : (login:ILogin) => dispatch(actions.signIn(login))
}
}
export default connect(null, mapDispatchToProps)(Login);


