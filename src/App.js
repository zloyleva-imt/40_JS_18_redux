import React, { Component } from 'react';
import './App.css';

import { connect } from "react-redux";

class App extends Component {
  render() {
    const {tasks} = this.props;
    return (
      <div>
        <form action="" onSubmit={this.onSubmitAddTask.bind(this)}>
          <input type="text" ref={(input)=>{this.inputTaskRef = input}}/>
          <button>Add task</button>
        </form>

        <form action="" onSubmit={this.onSubmitSearchTask.bind(this)}>
          <input type="text" ref={(input)=>{this.searchTaskRef = input}}/>
          <button>Search task</button>
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

  onSubmitSearchTask(e){
    e.preventDefault();
    this.props.onSearchTask(this.searchTaskRef.value);
  }

  onSubmitAddTask(e){
    e.preventDefault();
    this.props.onAddTask(this.inputTaskRef.value);
    this.inputTaskRef.value = "";
  }
}

export default connect(
    state => ({tasks: state.tasks.filter(el => el.title.includes(state.search))}),
    dispatch => ({
      onAddTask(title){dispatch({type:"ADD_TASK", payload:title})},
      onSearchTask(search){dispatch({type:"SEARCH_TASK", payload:search})}
    })
)(App);
