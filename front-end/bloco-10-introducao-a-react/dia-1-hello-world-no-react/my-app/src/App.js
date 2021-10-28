import React, { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Acordar às 7 horas', 'Exercitar por no mínimo 30 min', 'Fazer almoço', 'Estudar o conteúdo da Trybe']

class App extends Component {
  render() {
    return (
      <ul>{ tasks.map(task => Task(task)) }</ul>
    )
  }
}

export default App;
