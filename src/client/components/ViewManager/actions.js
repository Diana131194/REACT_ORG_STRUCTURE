import { ViewManagerActionsConstants } from './constants.js';

function saveTaskAction(first_name, last_name, task_text, task_date) {
    return {
        type: ViewManagerActionsConstants.SAVE_TASK,
        payload: {
            first_name,
            last_name,
            task_text,
            task_date
        }
    }
}

function fetchSubordinatesAction(manager) {
    console.log("this is from action: ")
    console.log(manager)
    return {
        type: ViewManagerActionsConstants.FETCH_SUBORDINATES,
        payload: {
            manager
        }
    }
}

function fetchSubordinatesSuccessAction(subordinates) {
    return {
        type: ViewManagerActionsConstants.FETCH_SUBORDINATES_SUCCESS,
        payload: {
            subordinates
        }
    }
}

function fetchSubordinatesFailAction(message) {
    return {
        type: ViewManagerActionsConstants.FETCH_SUBORDINATES_FAIL,
        payload: {
            message
        }
    }
}

function fetchReportsAction(first_name, last_name) {
    return {
        type: ViewManagerActionsConstants.FETCH_REPORTS,
        payload: {
            first_name,
            last_name
        }
    }
}

function fetchReportsSuccessAction(reports) {
    return {
        type: ViewManagerActionsConstants.FETCH_REPORTS_SUCCESS,
        payload: {
            reports
        }
    }
}

function fetchReportsFailAction(message) {
    return {
        type: ViewManagerActionsConstants.FETCH_REPORTS_FAIL,
        payload: {
            message
        }
    }
}

let ViewManagerActions = {
    saveTaskAction,
    fetchSubordinatesAction,
    fetchSubordinatesSuccessAction,
    fetchSubordinatesFailAction,
    fetchReportsAction,
    fetchReportsSuccessAction,
    fetchReportsFailAction

}

export default ViewManagerActions