import { EmployeeListActionsConstants } from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import EmployeeListActions from './actions'

function* fetchEmployees(action){
    console.log("saga")
    try{
        const res = yield call(fetch, '/api/employees',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        const json = yield call([res, 'json'])
        yield put(EmployeeListActions.fetchEmployeesSuccessAction(json.employees))      
    }
    catch (e) {
        console.log("fail")
        console.log(e)
        yield put(EmployeeListActions.fetchEmployeesFailAction(e.message))
    }
}

function* fetchManagers(action) {
    try {
        const res = yield call(fetch, '/api/managers/fetch')
        const json = yield call([res, 'json'])
        yield put(EmployeeListActions.fetchManagersSuccessAction(json.managers))
    }
    catch (e) {
        yield put(EmployeeListActions.fetchManagersFailAction(e.message))
    }
}

function* EmployeeListSaga() {
    yield takeEvery(EmployeeListActionsConstants.FETCH_EMPLOYEES, fetchEmployees)
    yield takeEvery(EmployeeListActionsConstants.FETCH_MANAGERS, fetchManagers)
}

export default EmployeeListSaga;