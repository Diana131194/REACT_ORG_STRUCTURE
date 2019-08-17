import React, { Component } from 'react';
import ViewEmployee from '../ViewEmployee';
import ViewManager from '../ViewManager';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import EmployeeListActions from './actions';
import ViewManagerActions from '../ViewManager/actions';
import TasksActions from '../Tasks/actions';
import { Sidebar } from 'primereact/sidebar';
import { ScrollPanel } from 'primereact/scrollpanel';
import '../ViewEmployee/ViewEmployee.css';
import { Card } from 'primereact/card';

class EmployeeList extends Component {

    state = {
        employees: [],
        managers: [],
        view_employee: {},
        view_manager: {},
        employee_visible: false,
        manager_visible: false
    }

    componentDidMount() {
        this.props.fetchEmployeesEventHandler();
        this.props.fetchManagersEventHandler();
    }

    render() {
        console.log('render employee')
        this.state.employees = this.props.employees.map((employee) => {
            return (
                <div>
                    <Card className="center"
                        style={{ width: '1000px', position: 'absolute', left: '200px' }}
                    >
                        <div className="rowC">
                        <h2>{employee.first_name + " " + employee.last_name}</h2> 
                        <h2 style={{
                            position: 'absolute', left: '300px'
                        }}>{employee.position}</h2>
                            <Button
                            style={{
                                position: 'absolute', left: '600px', height: '40px'
                            }}
                            type="view"
                            label="View"
                            className="p-button-raised p-button-rounded"
                            onClick={() => { this.setState({ view_employee: employee, employee_visible: true })
                                             this.props.fetchTasksEventHandler(employee.first_name, employee.last_name)}}
                        />
                        </div>
                        </Card>
                    <br /><br /><br /><br /><br /><br />
                    </div>
                    
            )
        })
        this.state.managers = this.props.managers.map((manager) => {
            return (
                <div>
                        <Card className="center"
                            style={{ width: '1000px', position: 'absolute', left: '200px' }}
                        >
                        <div className="rowC">
                            <h2>{manager.first_name + " " + manager.last_name}</h2>
                            <h2 style={{
                                position: 'absolute', left: '300px'
                            }}>{manager.position}</h2>
                                <Button
                                    style={{
                                        position: 'absolute', left: '600px', height: '40px'
                                    }}
                                    type="view"
                                    label="View"
                                    className="p-button-raised p-button-rounded"
                                    onClick={() => {
                                        this.setState({ view_manager: manager, manager_visible: true })
                                        this.props.fetchSubordinatesEventHandler(manager)
                                        this.props.fetchReportsEventHandler(manager.first_name, manager.last_name)
                                    }
                                    }
                                />
                        </div>
                        </Card>
                    <br /><br /><br /><br /><br /><br />
                    </div>
               
            )
        })
        return (
            <div>
                <div className="employee container">
                    <h2>Employee List</h2><br/>
                    {this.state.managers}
                    {this.state.employees}
                </div>
                <Sidebar visible={this.state.employee_visible} fullScreen={true} onHide={(e) => this.setState({ employee_visible: false })}>
                    <ScrollPanel style={{ width: '100%', height: '600px' }}>
                        <ViewEmployee employee={this.state.view_employee} 
                                    myManager={this.state.view_employee.manager}
                                    tasks={this.props.tasks}/>
                    </ScrollPanel>
                </Sidebar>
                <Sidebar visible={this.state.manager_visible} fullScreen={true} onHide={(e) => this.setState({ manager_visible: false })}>
                    <ScrollPanel style={{ width: '100%', height: '600px' }}>
                        <ViewManager manager={this.state.view_manager}
                                    myManager={this.state.view_manager.manager}
                                    subordinates={this.props.subordinates}
                                    reports={this.props.reports} />
                    </ScrollPanel>
                </Sidebar>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        employees: (state['app'])['employees'],
        managers: (state['app'])['managers'],
        subordinates: (state['manager'])['subordinates'],
        tasks: (state['employee'])['tasks'],
        reports: (state['manager'])['reports']
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEmployeesEventHandler: () => {
            dispatch(EmployeeListActions.fetchEmployeesAction())
        },
        fetchManagersEventHandler: () => {
            dispatch(EmployeeListActions.fetchManagersAction())
        },
        fetchSubordinatesEventHandler: (manager) => {
            dispatch(ViewManagerActions.fetchSubordinatesAction(manager))
        },
        fetchTasksEventHandler: (first_name, last_name) => {
            dispatch(TasksActions.fetchTasksAction(first_name, last_name))
        },
        fetchReportsEventHandler: (first_name, last_name) => {
            dispatch(ViewManagerActions.fetchReportsAction(first_name, last_name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);