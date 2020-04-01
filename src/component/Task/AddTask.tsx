import React from 'react';
import './AddTask.css'
import { connect} from 'react-redux';
import { Redirect } from 'react-router-dom';


interface Task {
    taskName:String,
    priority:String
}
interface Props {
    addTask: (task:Task) => void;

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
                taskName:'',
                priority:''
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
            this.props.addTask(this.state.task);
            this.setState( { isSubmitted: true } );
          }

    render() {
        let redirect = null;
        if (this.state.isSubmitted) {
            redirect = <Redirect to="/viewTasks" />;
        }
        return (
            <div className="AddTask">
            {redirect}
                <h3>Add Task</h3>
                <form>
                    <label>
                        TaskName : <input name="taskName" type="text" placeholder="Enter Task Name" onChange={this.handleInputChange}/>
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                        Priority : <select name="priority" value="L" onChange={this.handleInputChange}>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">Heigh</option>
                        </select>
                    </label>
                    <br></br>
                    <br></br>
                    <button onClick={this.onAddTask}>Submit</button>
                    <br></br>
                    <br></br>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch :any) => {
    return {
         addTask : (task:Task) => dispatch({type:'ADDTASK', task:[task]})
    }
    }
export default connect(null,mapDispatchToProps)(AddTask);