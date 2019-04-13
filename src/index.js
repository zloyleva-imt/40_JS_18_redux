import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initState = ['first task', 'second task'];
const reducer = (state=initState,action) => {
    console.log(action);
    if(action.type === "ADD_TASK"){
        return [
            ...state,
            action.payload
        ];
    }
    return state;
};

const store = createStore(reducer);

// console.log(store);
// console.log(store.getState());
//
// store.subscribe(()=>{
//     console.log("Change store",store.getState());
// });
//
// store.dispatch({type:"CHANGE_STORE", payload: "something too"});
// store.dispatch({type:"CHANGE_STORE", payload: "something other"});

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
