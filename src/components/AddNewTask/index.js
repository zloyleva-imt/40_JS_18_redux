import React from 'react';

import {connect} from "react-redux";

const AddNewTask = ({onAddTask}) => {
    return (
        <form action="" onSubmit={(e)=>onSubmitAddTask(e,onAddTask)}>
            <input type="text" />
            <button>Add task</button>
        </form>
    );
};

const onSubmitAddTask = (e,onAddTask) => {
    e.preventDefault();
    onAddTask(e.target[0].value);
    e.target[0].value = "";
};

export default connect(
    () => ({}),
    dispatch => ({
        onAddTask(title){dispatch({type:"ADD_TASK", payload:title})},
    })
)(AddNewTask);