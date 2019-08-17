import {EmployeeListActionsConstants} from './constants.js';

function fetchEmployeesAction() {
    console.log("action")
    return {
        type: EmployeeListActionsConstants.FETCH_EMPLOYEES
    }
}

function fetchEmployeesSuccessAction(employees) {
    return {
        type: EmployeeListActionsConstants.FETCH_EMPLOYEES_SUCCESS,
        payload: {
            employees
        }
    }
}

function fetchEmployeesFailAction(message) {
    return {
        type: EmployeeListActionsConstants.FETCH_EMPLOYEES_FAIL,
        payload: {
            message
        }
    }
}

function fetchManagersAction(){
    return {
        type: EmployeeListActionsConstants.FETCH_MANAGERS
    }
}

function fetchManagersSuccessAction(managers) {
    return {
        type: EmployeeListActionsConstants.FETCH_MANAGERS_SUCCESS,
        payload: {
            managers
        }
    }
}

function fetchManagersFailAction(message) {
    return {
        type: EmployeeListActionsConstants.FETCH_MANAGERS_FAIL,
        payload: {
            message
        }
    }
}



let EmployeeListActions = {
    fetchEmployeesAction,
    fetchEmployeesSuccessAction,
    fetchEmployeesFailAction,
    fetchManagersAction,
    fetchManagersSuccessAction,
    fetchManagersFailAction


}


export default EmployeeListActions