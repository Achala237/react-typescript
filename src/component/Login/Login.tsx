import React from 'react';
import { connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Login.css'


interface Props {
    onSignIn: (login:ILogin) => void;
}


interface ILogin {
    userName:string;
    passWord:string
}
interface State {
   login : ILogin,
   submitted: boolean
}


class Login extends React.Component<Props,State> {
 constructor (props:Props) {
   super(props);
   this.state = {
       login: {
        userName:'',
        passWord:''
       },
       submitted:false 
   }  
   this.handleInputChange = this.handleInputChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);

}
    handleInputChange (e:any) {
    const name = e.target.name;
    const updatedLogin = {
        ...this.state.login,
        [`${name}`]: e.target.value
      };  
        this.setState({login:updatedLogin});
    }


    onSubmit (e:any) {
      e.preventDefault();
      this.props.onSignIn(this.state.login);
      this.setState( { submitted: true } );
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
          <br></br>

          <label>
              Password : <  input name="passWord" type="text"onChange={this.handleInputChange}  placeholder="Enter Password"/>
          </label>
          <br></br>
          <br></br>
         <button onClick ={this.onSubmit}>Sign In</button>
      </form>
      </div>
      )
  }
}

const mapDispatchToProps = (dispatch :any) => {
return {
     onSignIn : (login:ILogin) => dispatch({type:'SIGNIN', login:login})
}
}
export default connect(null, mapDispatchToProps)(Login);


