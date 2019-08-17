import { ViewEmployeeActionsConstants } from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import ViewEmployeeActions from './actions'


function* saveReport(action){


    try{
        yield call(fetch, '/api/saveReport',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: action.payload.first_name,
                    last_name: action.payload.last_name,
                    manager: action.payload.manager,
                    report_text: action.payload.report_text

                })
            })
    }
    catch(e){
        console.log(e.message)
    }
}

function* ViewEmployeeSaga() {
    yield takeEvery(ViewEmployeeActionsConstants.SAVE_REPORT, saveReport)
}

export default ViewEmployeeSaga;