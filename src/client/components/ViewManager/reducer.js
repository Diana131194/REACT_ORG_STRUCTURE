import { ViewManagerActionsConstants } from './constants'
import initialState from '../../initialState'

const ViewManagerReducer = (state = initialState.manager, action) => {

    switch (action.type) {
        
        case ViewManagerActionsConstants.FETCH_SUBORDINATES_SUCCESS:
            console.log("hi from reducer view manager")
            console.log(action.payload.subordinates)
            return {
                ...state,
                subordinates: action.payload.subordinates
            }
        
        case ViewManagerActionsConstants.FETCH_REPORTS_SUCCESS:
            return {
                ...state,
                reports: action.payload.reports
            }

        default:
            return state
    }
}

export default ViewManagerReducer
