
import React, { Component } from 'react'
import { Card } from 'primereact/card';
import '../Tasks/Tasks.css'
import { connect } from 'react-redux';
import ViewManagerActions from '../ViewManager/actions';

class Reports extends Component {

    state = {
        reports: []
    }

    render() {

        this.state.reports = this.props.reports.map(report => {
            console.log("this is report text: " + report.report_text)
            return (
                <div>
                    <Card className="left"
                        style={{ width: '950px', position: 'left' }}>
                        <div className="rowC">
                            <p>Reporter Name: {report.first_name+" "+report.last_name}</p>
                            <p className="tab">{report.report_text}</p>  
                            <p className='tab'>Report Date: {report.report_date.getDate().toString()+"/"+(report.report_date.getMonth()+1).toString()+"/"+report.report_date.getFullYear().toString()}</p>               
                        </div>
                    </Card>
                </div>
            )
        })

        return (
            <div>
                <br />
                <h3 style={{ textAlign: 'left' }}>Reports: </h3>
                {this.state.reports.length ? this.state.reports : <p style={{ textAlign: 'left' }}>You have no reports yet!</p>}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
  
    return {
        reports: (state['manager'])['reports'],
        first_name: props.first_name,
        last_name: props.last_name
    }
}


export default connect(mapStateToProps)(Reports);