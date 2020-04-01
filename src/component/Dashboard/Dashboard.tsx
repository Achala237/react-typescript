import React from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';
import './Dashboard.css'


export class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
               <Header></Header>
               <div className="Dashboard">
               <h1>Dashboard</h1>
                <Link to="/addTask">Add Tasks</Link>
               <Link to="/viewTasks">View Tasks</Link>
               </div>
             </React.Fragment>
        )
    }
}