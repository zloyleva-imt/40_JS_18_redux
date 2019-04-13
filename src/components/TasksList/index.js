import React from 'react';

import {connect} from "react-redux";

const TasksList = ({tasks}) => {
    return (
        <div>
            <ul>
                {
                    tasks.map((el,i) => (
                        <li key={i}>{ el.title }</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default connect(
    state => ({tasks: state.tasks.filter(el => el.title.includes(state.search))}),
)(TasksList);