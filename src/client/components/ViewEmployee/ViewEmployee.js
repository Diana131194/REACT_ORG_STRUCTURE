import React, { Component } from 'react';
import personIcon from "./icon-for-person-1.png"
import { Card } from 'primereact/card';
import './ViewEmployee.css';
import { Button } from 'primereact/button';
import Popup from "reactjs-popup";
import { InputTextarea } from 'primereact/inputtextarea';
import ViewEmployeeActions from './actions';
import { connect } from 'react-redux';
import Tasks from '../Tasks'


class ViewEmployee extends Component {

    state={
        report_visible:false,
        report_text: ''
    }
    
    render(){
        console.log("this is empolee")
        console.log(this.props.myManager)
        const header = <img alt="Card" src={personIcon} />;
        return(
            <div>
                <div className="rowC">
                            <Card className="left"
                                style={{ width: '200px', position: 'left' }}
                                header={header}>
                            </Card>
                            <Card className="left"
                                style={{ width: '550px', position: 'left' }}
                                >
                                <br/><br/>
                                <ln>Name: {this.props.employee.first_name + " " + this.props.employee.last_name}</ln>
                                <br/><br/><br/>
                                <ln>Position: {this.props.employee.position}</ln><br />
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
                                                    onClick={() => {this.props.saveReportEventHandler(this.props.employee.first_name, this.props.employee.last_name, this.props.myManager, this.state.report_text)
                                                                    this.setState({report_text: ''})}}
                                                />
                                                <Button
                                                    type="cancel"
                                                    label="Cancel"
                                                    className="p-button-raised p-button-rounded"
                                                    onClick = {() => this.setState({report_text: ''})}
                                                />
                                        </div>
                                    </Popup>
                                    </div>
                                    : null}
                                
                            </Card>
                            
                </div>
                <Tasks first_name={this.props.employee.first_name}
                       last_name={this.props.employee.last_name}
                       tasks={this.props.tasks}/>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    console.log("this is from map to state view employee")
    console.log(props.tasks)
    return {
        employee: props.employee,
        myManager: props.myManager,
        tasks: props.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveReportEventHandler: (first_name, last_name, manager, report_text) => {
            dispatch(ViewEmployeeActions.saveReportAction(first_name, last_name, manager, report_text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployee);