import React, {Component, Fragment} from 'react';
import './App.css';

import TasksList from './components/TasksList'
import Header from './components/Header'

import { connect } from "react-redux";

class App extends Component {
  render() {
    const {tasks} = this.props;
    return (
      <Fragment>
          <Header/>
        <form action="" onSubmit={this.onSubmitAddTask.bind(this)}>
          <input type="text" ref={(input)=>{this.inputTaskRef = input}}/>
          <button>Add task</button>
        </form>

        <form action="" onSubmit={this.onSubmitSearchTask.bind(this)}>
          <input type="text" ref={(input)=>{this.searchTaskRef = input}}/>
          <button>Search task</button>
        </form>

        <TasksList/>
      </Fragment>
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
    () => ({}),
    dispatch => ({
      onAddTask(title){dispatch({type:"ADD_TASK", payload:title})},
      onSearchTask(search){dispatch({type:"SEARCH_TASK", payload:search})}
    })
)(App);
