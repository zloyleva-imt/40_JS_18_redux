import React, { Component } from 'react';
import './App.css';

import { connect } from "react-redux";

class App extends Component {

  constructor(props){
    super(props);
    this.inputTaskRef = React.createRef();
  }

  render() {
    const {tasks} = this.props;
    return (
      <div>
        <form action="" onSubmit={this.onSubmitAddTask.bind(this)}>
          <input type="text" ref={this.inputTaskRef}/>
          <button>Add task</button>
        </form>

        <div>
          <ul>
            {
              tasks.map((el,i) => (
                  <li key={i}>{ el.title }</li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }

  onSubmitAddTask(e){
    e.preventDefault();
    this.props.onAddTask(this.inputTaskRef.current.value);
    this.inputTaskRef.current.value = "";
  }
}

export default connect(
    state => ({tasks: state}),
    dispatch => ({
      onAddTask(title){dispatch({type:"ADD_TASK", payload:title})}
    })
)(App);
