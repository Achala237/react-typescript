import React from 'react';
import { connect} from 'react-redux';

interface Props {
    taskList:any
}

class TaskList extends React.Component<Props> {
    render () {
        return (
            <span>TaskList</span>
            )
        }
    }
    const mapStateToProps = (state : any) => {
        console.log('state----', JSON.stringify(state));
    return {
        taskList:state.taskList
    }
}
export default  connect(mapStateToProps)(TaskList);