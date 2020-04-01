import React from 'react';
import { connect} from 'react-redux';

interface Props {
    taskList:any
}

class TaskList extends React.Component<Props> {

    render () {
        const taskListData = this.props.taskList.map((task:any) => {
        return <span>{task.taskName} : {task.priority}</span>;
        })
        return (
            <div>
            <h2>TaskList</h2>
            {taskListData}
            </div> 
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