import React, { Component } from 'react';
import personIcon from "../ViewEmployee/icon-for-person-1.png"
import { Card } from 'primereact/card';
import '../ViewEmployee/ViewEmployee.css';
import { Button } from 'primereact/button';
import Popup from "reactjs-popup";
import { InputTextarea } from 'primereact/inputtextarea';
import { connect } from 'react-redux';
import ViewEmployeeActions from '../ViewEmployee/actions';
import ViewManagerActions from './actions';
import Reports from '../Reports'
import '../Tasks/Tasks.css'
import { Calendar } from 'primereact/calendar';

class ViewManager extends Component{

    state = {
        report_text: '',
        assign_task_text: '',
        subordinates: [],
        task_date: ''
    }


    render() {
        const header = <img alt="Card" src={personIcon} />;
        this.state.subordinates = this.props.subordinates.map(subordinate => {
            return(
                <div>
                    <Card className="left"
                        style={{ width: '750px', position: 'left' }}>
                        <div className="rowC">
                            <p>{subordinate.first_name + " " + subordinate.last_name}</p>
                            <p style={{
                                position: 'absolute', left: '250px'}}>
                               {subordinate.position}</p>
                            <p style={{
                                position: 'absolute', left: '500px' }}>
                                <Popup trigger={<Button
                                    type="assign task"
                                    label="Assign Task"
                                    className="p-button-raised p-button-rounded" />}
                                    position="right center">
                                    <div><InputTextarea rows={5}
                                        cols={18}
                                        value={this.state.assign_task_text}
                                        onChange={(e) => this.setState({ assign_task_text: e.target.value })} />
                                        <Calendar dateFormat="dd/mm/yy" 
                                                  value={this.state.task_date} 
                                                  onChange={(e) => this.setState({ task_date: e.value })}>
                                        </Calendar>
                                        <Button
                                            type="save"
                                            label="Save"
                                            className="p-button-raised p-button-rounded"
                                            onClick={() => {
                                                let date = this.state.task_date.getDate().toString() + "/" + (this.state.task_date.getMonth() + 1).toString() + "/" + this.state.task_date.getFullYear().toString()
                                                this.props.saveTaskEventHandler(subordinate.first_name, subordinate.last_name, this.state.assign_task_text, date)
                                                this.setState({ assign_task_text: '', task_date: ''})
                                            }}
                                        />
                                        <Button
                                            type="cancel"
                                            label="Cancel"
                                            className="p-button-raised p-button-rounded"
                                            onClick={() => this.setState({ assign_task_text: '', task_date: ''})}
                                        />
                                    </div>
                                </Popup>
                            </p>
                        </div>
                    </Card>
                </div>
            )
        })
        return (
            <div>
                <div className="rowC">
                    <Card className="left"
                        style={{ width: '200px', position: 'left' }}
                        header={header}>
                    </Card>
                    <Card className="left"
                        style={{ width: '550px', position: 'left' }}
                    >
                        <br /><br />
                        <ln>Name: {this.props.manager.first_name + " " + this.props.manager.last_name}</ln>
                        <br /><br /><br />
                        <ln>Position: {this.props.manager.position}</ln><br />
                        <ln>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</ln><br /><br />
                        {this.props.myManager ? <div><ln>Manager: {this.props.myManager.first_name + " " + this.props.myManager.last_name}   </ln>
                            <Popup trigger={<Button
                                type="report"
                                label="Report"
                                className="p-button-raised p-button-rounded" />}
                                position="right center">
                                <div><InputTextarea rows={4}
                                    cols={17}
                                    value={this.state.report_text}
                                    onChange={(e) => this.setState({ report_text: e.target.value })} />
                                    <Button
                                        type="save"
                                        label="Save"
                                        className="p-button-raised p-button-rounded"
                                        onClick={() => {
                                            this.props.saveManagerReportEventHandler(this.props.manager.first_name, this.props.manager.last_name, this.props.myManager, this.state.report_text)
                                            this.setState({ report_text: '' })
                                        }}
                                    />
                                    <Button
                                        type="cancel"
                                        label="Cancel"
                                        className="p-button-raised p-button-rounded"
                                        onClick={() => this.setState({ report_text: '' })}
                                    />
                                </div>
                            </Popup>
                        </div>
                        :null}

                    </Card>

                </div>
                <Reports first_name={this.props.manager.first_name}
                         last_name={this.props.manager.last_name} />
                <br />
                <h3 style={{ textAlign: 'left' }}>My Subordinates: </h3>
                {this.state.subordinates}
                             
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return{
        manager: props.manager,
        myManager: props.myManager,
        subordinates: props.subordinates
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveManagerReportEventHandler: (first_name, last_name, manager, report_text) => {
            dispatch(ViewEmployeeActions.saveReportAction(first_name, last_name, manager, report_text))
        },
        saveTaskEventHandler: (first_name, last_name, text, date) => {
            dispatch(ViewManagerActions.saveTaskAction(first_name, last_name, text, date))
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewManager);
