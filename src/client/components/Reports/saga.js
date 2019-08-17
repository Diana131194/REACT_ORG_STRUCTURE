import { ViewManagerActionsConstants } from '../ViewManager/constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import ViewManagerActions from '../ViewManager/actions'


function* fetchReports(action) {

    try {
        const res = yield call(fetch, '/api/fetchReports',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: action.payload.first_name,
                    last_name: action.payload.last_name
                })
            })
        const json = yield call([res, 'json'])
        yield put(ViewManagerActions.fetchReportsSuccessAction(json.reports))
    }
    catch (e) {
        yield put(ViewManagerActions.fetchReportsFailAction(e.message))
    }
}

function* ReportsSaga() {
    yield takeEvery(ViewManagerActionsConstants.FETCH_REPORTS, fetchReports)
}

export default ReportsSaga;