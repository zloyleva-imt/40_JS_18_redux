import React, {Component, Fragment} from 'react';
import './App.css';

import TasksList from './components/TasksList'
import Header from './components/Header'

import { connect } from "react-redux";
import AddNewTask from "./components/AddNewTask";

class App extends Component {
  render() {
    const {tasks} = this.props;
    return (
      <Fragment>
          <Header/>
          <AddNewTask/>

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

  // onSubmitAddTask(e){
  //   e.preventDefault();
  //   this.props.onAddTask(this.inputTaskRef.value);
  //   this.inputTaskRef.value = "";
  // }
}

export default connect(
    () => ({}),
    dispatch => ({
      onSearchTask(search){dispatch({type:"SEARCH_TASK", payload:search})}
    })
)(App);
