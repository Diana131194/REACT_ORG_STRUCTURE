import { EmployeeListActionsConstants } from './constants'
import initialState from '../../initialState'

const EmployeeListReducer = (state = initialState.app, action) => {

    switch(action.type){
        case EmployeeListActionsConstants.FETCH_EMPLOYEES_SUCCESS:
            console.log("this is from reducer")
            console.log(action.payload.employees[0])
            return {
                ...state,
                employees: action.payload.employees,
                
            }
        case EmployeeListActionsConstants.FETCH_MANAGERS_SUCCESS:
            return {
                ...state,
                managers: action.payload.managers,
               
            }
            
        default: 
            return state
    }
}

export default EmployeeListReducer
