import React, { Component } from 'react';

export class TaskInput extends Component {
  state = {
    taskInput: "",
  };
  handleChange = event => {
    this.setState({ taskInput: event.target.value });
    console.log(this.state.taskInput);
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   alert(this.state.taskInput);
  // }
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.taskInput.trim() !== '') {
      this.props.createTask(this.state.taskInput);
    }
    this.setState({ taskInput: "" });
  }

  render() {
    return (
      <div className="row" style={{ width: '60%' }}>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="icon_prefix">Search</label>
              <input id="icon_prefix"
                type="text"
                className="validate"
                value={this.state.taskInput}
                type="text" placeholder="Input your task..."
                onChange={this.handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskInput;
