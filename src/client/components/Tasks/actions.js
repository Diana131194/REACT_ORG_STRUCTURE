import { TasksActionsConstants } from './constants.js';

function fetchTasksAction(first_name, last_name){
    console.log("this is from tasks action")
    console.log(first_name + " " + last_name)
    return{
        type: TasksActionsConstants.FETCH_TASKS,
        payload:{
            first_name,
            last_name
        }
    }
}

function fetchTasksSuccessAction(tasks) {
    return {
        type: TasksActionsConstants.FETCH_TASKS_SUCCESS,
        payload: {
            tasks
        }
    }
}

function fetchTasksFailAction(message) {
    return {
        type: TasksActionsConstants.FETCH_TASKS_FAIL,
        payload: {
            message
        }
    }
}



let TasksActions = {
    fetchTasksAction,
    fetchTasksSuccessAction,
    fetchTasksFailAction
}


export default TasksActions