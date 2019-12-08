import React from 'react';
import './App.css';
import ListItem from './components/ListItem/ListItem';
import TaskInput from './components/TaskInput/TaskInput';
// const tasks = [
//   { title: "learn html", deadline: "23/11/19" },
//   { title: "learn css", deadline: "24/11/19" },
//   { title: "learn js", deadline: "25/11/19" },
//   { title: "learn js", deadline: "25/11/19" },
// ]


//TODO
//1.slider
//2. range silder
//3. cv by reactjs
class App extends React.Component {

  state = {
    tasks: [
      { id: 'task1', title: "learn html", deadline: "1/11/19", done: false },//task
      { id: 'task2', title: "learn css", deadline: "2/11/19", done: false },
      { id: 'task3', title: "learn css", deadline: "3/11/19", done: false },
    ]
  };
  //doi trang thai done cua job cos index la 

  createTask = title => {
    const newTasks = [...this.state.tasks, { id: Math.random(), title: title, deadline: "25/11/19", done: true }];
    this.setState({ tasks: newTasks });
  }
  //cap nhat items
  updateStatus = id => {
    const newTasks = [...this.state.tasks];

    //using findIndex find id
    const index = newTasks.findIndex(function (task) {
      return task.id === id;
    });

    newTasks[index].done = !newTasks[index].done;

    newTasks.sort(function (task1, task2) {
      return task1.done - task2.done;
    })

    this.setState({ tasks: newTasks });

  }

  //Xoa items
  deleteTask = id => {
    //filter chon phan tu co id #
    const newTasks = this.state.tasks.filter((task) => {
      return task.id !== id;
    })
    this.setState({ tasks: newTasks });
  }

  render() {
    const ListItems =
      this.state.tasks.map(task => {
        return <ListItem
          key={task.id}
          id={task.id}
          task={task.title}
          deadline={task.deadline}
          done={task.done}
          changeStatus={this.updateStatus}
          deleteTask={this.deleteTask}
        ></ListItem>
      })

    return (
      <div className="App">
        <div className="App-header">
          <TaskInput createTask={this.createTask}></TaskInput>
          {this.state.tasks.length === 0 ? <h1>No task :v </h1> : ListItems}
        </div>
      </div>
    );
  }
}

export default App;
