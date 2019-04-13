import tasksReducer from './tasksReducer';
import {combineReducers} from "redux";

export default combineReducers({
    tasks: tasksReducer,
    users: ()=>[{name: "oleh", role: "admin"}]
})