import React from 'react';
import { connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './TaskList.css'

interface Props {
    taskList:any,
    deleteTask : (id:number) => void;
}

class TaskList extends React.Component<Props> {
    render () {
        return (
            <div className="TaskList">
            <h2>TaskList</h2>
            {
                this.props.taskList.map( (task:any, index:number) => {
                    return <li key={task.id}>
                     {task.taskName} : { task.priority === 'H' ? 'High' : task.priority === 'L' ? 'Low' : 'Medium' }
                   <button onClick={()=>this.props.deleteTask(task.id)}>Delete</button>
                   <NavLink to={'/editTask/'+task.id}>Edit</NavLink>
                    </li>
                })
            }
            {this.props.taskList.length === 0? 'No tasks added': ''}
            </div> 
            )
        }
    }
    const mapStateToProps = (state : any) => {
    return {
        taskList:state.taskList
    }
}
    const mapDispatchToProps = (dispatch:any) => {
     return {
         deleteTask : (id:number) => dispatch({type:'DELETETASK', id: id})
     }
    }

export default  connect(mapStateToProps, mapDispatchToProps)(TaskList);