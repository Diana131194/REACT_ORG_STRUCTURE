import { all } from 'redux-saga/effects'
import EmployeeListSaga from './components/EmployeeList/saga'
import ViewEmployeeSaga from './components/ViewEmployee/saga'
import ViewManagerSaga from './components/ViewManager/saga'
import TasksSaga from './components/Tasks/saga'
import ReportsSaga from './components/Reports/saga'



export default function* Sagas() {
    yield all([
        EmployeeListSaga(),
        ViewEmployeeSaga(),
        ViewManagerSaga(),
        TasksSaga(),
        ReportsSaga()

    ])
}
