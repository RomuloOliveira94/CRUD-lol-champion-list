import React, { Component } from "react";

import { FaPlusCircle } from "react-icons/fa";

import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./Main.css";

class Main extends Component {
  state = {
    newTask: "",
    tasks: [],
    index: -1,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return alert("Tarefa já incluida");

    /* aqui estou colocando as tarefas dentro das new tasks, ou seja o que foi digitado vai ficandoo salvo nessa variavel, para nao ser sobreposta. */
    const newTasks = [...tasks];

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: "",
      });
    } else {
      newTasks[index] = newTask;
      this.setState({
        tasks: [...newTasks],
        index: -1,
      });
    }
  };

  handleInputChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTask: tasks[index],
    });
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    return this.setState({
      tasks: [...newTasks],
    });
  };

  render() {
    const { tasks, newTask } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleInputChange}
            type="text"
            value={newTask}
          />
          <button type="submit">
            <FaPlusCircle />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <span>
                <FaEdit
                  className="edit"
                  onClick={(e) => this.handleEdit(e, index)}
                />
                <FaWindowClose
                  className="delete"
                  onClick={(e) => this.handleDelete(e, index)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;
