import React from 'react';
import './AddTask.css'
import { connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions';


interface Task {
    taskName:string,
    priority:string,
    id:any
}
interface Props {
    addTask: (task:Task) => void,
    taskList: any,
    currentTask: any
    updatedTask: (task:Task) => void

}

interface State {
task:Task,
isSubmitted:Boolean
}
class AddTask extends React.Component<Props,State> {

    constructor(props:Props){
        super(props);
        this.state={
            task: {
                taskName:this.props.currentTask? this.props.currentTask.taskName : '',
                priority:this.props.currentTask? this.props.currentTask.priority : '',
                id:this.props.currentTask? this.props.currentTask.id: ''
            },
            isSubmitted:false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onAddTask = this.onAddTask.bind(this);
    }
    handleInputChange (e:any) {
        const name = e.target.name;
        const updatedTask = {
            ...this.state.task,
            [`${name}`]: e.target.value
          };  
            this.setState({task:updatedTask});
        }

        onAddTask (e:any) {
            e.preventDefault();
            const updatedTask = {
                ...this.state.task,
                id:this.getTaskId()
            }
            this.setState(
                () => ({ isSubmitted: true , task:updatedTask}),
                () => {
                    this.props.currentTask ? this.props.updatedTask(this.state.task):
                    this.props.addTask(this.state.task);
                }
              );
            this.setState((prevState, props)=> { 
                return  {isSubmitted: true , task:updatedTask}
            });

          }

          getTaskId() {
            let taskId = 1;
            const currentTaskId = (this.state.task.id) || null;
           const taskList = this.props.taskList;
           if(taskList.length > 0 && !currentTaskId) {
            const lastId = taskList.length;
            taskId = lastId + 1;
           }
           return  currentTaskId? currentTaskId :taskId;
          }

    render() {
        let redirect = null;
        if (this.state.isSubmitted) {
            redirect = <Redirect to="/viewTasks" />;
        }
        return (
            <div className="AddTask">
            {redirect}
                <h3> {this.props.currentTask? 'Update' : 'Add'} Task</h3>
                <form>
                    <label>
                        TaskName : <input name="taskName"  type="text" placeholder="Enter Task Name" value={this.state.task.taskName} onChange={this.handleInputChange}/>
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                        Priority : <select name="priority" value={this.state.task.priority}  onChange={this.handleInputChange}>
                            <option value="">Select</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                        </select>
                    </label>
                    <br></br>
                    <br></br>
        <button onClick={this.onAddTask}>{this.props.currentTask? 'Update' : 'Add'} Task</button>
                    <br></br>
                    <br></br>
                </form>
            </div>
        )
    }
}

function getTask(taskList : any[], id:any) {
 if(id && taskList) {
 return taskList.find(task=>{
      return parseInt(task.id) === parseInt(id);
  })
 }
}
const mapStateToProps = (state : any, ownProps:any) => {
    const currentTask = getTask(state.taskList , ownProps.match.params.id);
    return {
        currentTask,
        taskList:state.taskList
    }
    }
const mapDispatchToProps = (dispatch :any) => {
    return {
         addTask : (task:Task) => dispatch(actions.addTask([task])),
         updatedTask : (task:Task) => dispatch(actions.updateTask(task))

    }
    }
export default connect(mapStateToProps,mapDispatchToProps)(AddTask);