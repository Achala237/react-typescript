import React from 'react';
import { connect} from 'react-redux';

 interface Props {
     userName:String
 }
 class Header extends React.Component<Props> {
    render () {
        return (
        <span>Welcome:{this.props.userName}</span>
        )
    }
}

const mapStateToProps = (state : any) => {
    return {
        userName:state.login.userName
    }
}
export default connect(mapStateToProps)(Header)
