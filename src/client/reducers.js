import { combineReducers } from 'redux';
import EmployeeListReducer from './components/EmployeeList/reducer';
import TasksReducer from './components/Tasks/reducer';
import ViewManagerReducer from './components/ViewManager/reducer';

export default combineReducers({
    app: EmployeeListReducer,
    employee: TasksReducer,
    manager: ViewManagerReducer
});