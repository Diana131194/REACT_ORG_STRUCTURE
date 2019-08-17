import { TasksActionsConstants } from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import TasksActions from './actions'


function* fetchTasks(action) {
    console.log("in fetch tasks")
    console.log(action.payload.first_name + " " + action.payload.last_name)
    try {
        const res = yield call(fetch, '/api/fetchTasks',
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
        console.log(json.tasks)
        yield put(TasksActions.fetchTasksSuccessAction(json.tasks))
    }
    catch (e) {
        yield put(TasksActions.fetchTasksFailAction(e.message))
    }
}

function* TasksSaga() {
    yield takeEvery(TasksActionsConstants.FETCH_TASKS, fetchTasks)
}

export default TasksSaga;