import React, { Component } from "react";

import Tasks from "./Task";
import Form from "./Form";

import "./Main.css";

class Main extends Component {
  state = {
    newTask: "",
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) return;
    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

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

        <Form
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          newTask={newTask}
        />

        <Tasks
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          tasks={tasks}
        />
      </div>
    );
  }
}

export default Main;
