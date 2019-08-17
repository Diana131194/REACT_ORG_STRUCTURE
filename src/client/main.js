import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Sagas from './sagas';
import reducers from './reducers';
//import theme - change nova-light to other theme as needed
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { combineReducers } from 'redux';
import EmployeeListReducer from './components/EmployeeList/reducer';
import ViewEmployeeReducer from './components/ViewEmployee/reducer';

//create saga middleware
const sagaMiddleware = createSagaMiddleware();



//create store, add reducers, attach saga
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

//run saga(s)
sagaMiddleware.run(Sagas);

// Render the main component into the dom

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));


