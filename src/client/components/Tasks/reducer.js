import { TasksActionsConstants } from './constants'
import initialState from '../../initialState'

const TasksReducer = (state = initialState.employee, action) => {

    switch (action.type) {
        case TasksActionsConstants.FETCH_TASKS_SUCCESS:
            console.log("from fetch tasks reducer")
            return {
                tasks: action.payload.tasks
            }
        default:
            return state
    }
}

export default TasksReducer
