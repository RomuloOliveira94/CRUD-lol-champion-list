import React, { Component } from "react";

import { FaPlusCircle } from "react-icons/fa";

import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./Main.css";

class Main extends Component {
  state = {
    newTask: "",
    tasks: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return alert("Tarefa já incluida");

    const newTasks = [...tasks];

    return this.setState({
      tasks: [...newTasks, newTask],
    });
  };

  handleInputChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input onChange={this.handleInputChange} type="text" />
          <button type="submit">
            <FaPlusCircle />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;
