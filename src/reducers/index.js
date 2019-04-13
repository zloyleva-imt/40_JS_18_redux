import tasksReducer from './tasksReducer';
import searchReducer from './searchReducer';
import {combineReducers} from "redux";

export default combineReducers({
    tasks: tasksReducer,
    search: searchReducer,
    users: ()=>[{name: "oleh", role: "admin"}]
})