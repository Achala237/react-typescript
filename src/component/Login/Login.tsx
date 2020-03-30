import React from 'react';
import { connect} from 'react-redux';
// import {State} from '../../store/reducer'


interface Props {
    onSignIn: (userName:String, password:String) => void;
}


interface Login {
    userName:string;
    passWord:string
}
interface State {
   login : Login
}


class Login extends React.Component<Props,State> {
 constructor (props:Props) {
   super(props);
   this.state = {
       login: {
        userName:'',
        passWord:''
       } 
   }  
   this.handleInputChange = this.handleInputChange.bind(this);
}
    handleInputChange (e:any) {
    const name = e.target.name;
    const updatedLogin = {
        ...this.state.login,
        [`${name}`]: e.target.value
      };  
        this.setState({login:updatedLogin});
    }
   render () {
  return (
  <div>
      <h1>Login</h1>
      <form>
          <label>
              UserName : <input name= "userName" type="text"  onChange={this.handleInputChange} placeholder="Enter UserName"/>
          </label>
          <label>
              Password : <input name="passWord" type="text"onChange={this.handleInputChange}  placeholder="Enter Password"/>
          </label>
          <button onClick ={()=>this.props.onSignIn(this.state.login.userName, this.state.login.passWord)}>Sign In</button>
      </form>
      </div>
      )
  }
}

// interface State {
//     userName: String,
//     password : String
// }
// const mapStateToProps = (state : any) => {
// return {
//     userName:state.login.userName,
//     passWord:state.login.passWord
// }
// }


// interface DispatchProps {
//     onSignIn: () => void;   
// }

const mapDispatchToProps = (dispatch :any) => {
return {
     onSignIn : (userName : String, passWord:String) => dispatch({type:'SIGNIN', userName:userName, password: passWord})  
}
}
export default connect(null, mapDispatchToProps)(Login);


