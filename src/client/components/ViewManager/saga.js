import { ViewManagerActionsConstants } from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import ViewManagerActions from './actions.js'


function* fetchSubordinates(action) {
    
    console.log("this is from saga: ")
    console.log(action.payload.manager)

    try {
        const res = yield call(fetch, '/api/fetchSubordinates',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    manager: action.payload.manager
                })
            })
        console.log("after fetch subordinates")
        const json = yield call([res, 'json'])
        console.log("subordinates from saga")
        console.log(json.subordinates)
        yield put(ViewManagerActions.fetchSubordinatesSuccessAction(json.subordinates))
    }
    catch (e) {
        yield put(ViewManagerActions.fetchSubordinatesFailAction(e.message))
    }
}


function* saveTask(action) {

    try {
        const res = yield call(fetch, '/api/saveTask',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: action.payload.first_name,
                    last_name: action.payload.last_name,
                    task_text: action.payload.task_text,
                    task_date: action.payload.task_date
                })
            })
        const json = yield call([res, 'json'])
        console.log(json.tasks)
    }
    catch (e) {
        console.log(e.message)
    }
}

function* ViewManagerSaga() {
    console.log("im in manager saga")
    yield takeEvery(ViewManagerActionsConstants.SAVE_TASK, saveTask)
    yield takeEvery(ViewManagerActionsConstants.FETCH_SUBORDINATES, fetchSubordinates)
}

export default ViewManagerSaga;