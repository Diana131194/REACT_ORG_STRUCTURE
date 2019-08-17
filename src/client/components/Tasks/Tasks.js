
import React, { Component } from 'react'
import { Card } from 'primereact/card';
import './Tasks.css'
import { connect } from 'react-redux';
import TasksActions from './actions'

class Tasks extends Component {

    state = {
        tasks: []
    }

    render() {
  
        this.state.tasks = this.props.tasks.map(task => {
            return (
                <div>
                    <Card className="left"
                          style={{ width: '850px', position: 'left' }}>
                        <div className="rowC">
                            <p>{task.task_text}</p>
                            <p style={{
                                position: 'absolute', left: '550px'
                            }}>Due Date: {task.task_dueDate}</p>
                        </div>
                    </Card>
                </div>
            )
        })

        return(
            <div>
                <br/>
                <h3 style={{textAlign: 'left'}}>My Tasks: </h3>
                {this.state.tasks.length ? this.state.tasks : <p style={{textAlign: 'left'}}>You have no tasks yet!</p>}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    console.log("from map to props tasks")
    console.log(props)
    return {
        tasks: (state['employee'])['tasks'],
        first_name: props.first_name,
        last_name: props.last_name,
        tasks: props.tasks
    }
}


export default connect(mapStateToProps)(Tasks);