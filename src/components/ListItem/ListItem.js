import React, { Component } from 'react';
import './ListItem.css'

// const ListItem = props => {
//   return (
//     <div className="item">

//       <span>
//         {taskName}
//         {props.task}
//       </span>

//       <br></br>

//       <span>Deadline: {props.deadline}</span>

//       <br></br>

//       <button onClick={
//         function () {
//           alert(props.task);
//         }}>Edit</button>

//       <button>Delete</button>
//     </div>  
//   );
// };


class ListItem extends React.Component {

  state = {
    timer: 0
  };
  timer = null;
  //add auto counttimer
  handleStartTimer = event => {
    event.stopPropagation();
  }

  changeName = () => {
    this.setState({
      title: "Edited"
    });
  }

  backName = () => {
    this.setState({
      title: "undoo"
    });
  }

  handleClick = () => {
    //call id from app
    this.props.changeStatus(this.props.id);
  }

  //xoa item
  handleDelete = event => {
    event.stopPropagation(); //xu li su kien chong len nhau
    this.props.deleteTask(this.props.id);
  }

  // method này được thực thi khi 1 component được render trên client side.Đây là nơi các hàm AJAX requests, DOM or update state được thực thi.Method này cũng đucợ sử dụng để kết nối với các JS Framework khác và các function với delayed execution như setTimeout or setInterval.
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  //sau khi componentWillUpdate ở trên được gọi xong thì đến lượt thằng này được goi.
  componentDidUpdate() {

  }

  //được gọi khi chúng ta unmout 1 component kiểu như xóa nó khỏi react.
  componentWillUnmount() {
    clearInterval(this.timer);
  }


  render() {
    const { id, task, deadline, done } = this.props;
    //const {listofkey}=object

    return (
      <div
        className="item"
        style={{ textDecoration: done ? "line-through" : "unset" }}
        onClick={this.handleClick}
      >
        <p>id: {id}, task: {task}, deadline: {deadline}, time: {this.state.timer}s
        </p>

        <button
          onClick={this.handleStartTimer}
          className="waves-effect waves-light waves-effect btn "
          style={{
            backgroundColor: 'trasparent',
            borderRadius: '5px'
          }}><i className="far fa-star"></i></button>

        <button
          className="waves-effect waves-light waves-effect btn "
          style={{
            backgroundColor: 'trasparent',
            borderRadius: '5px'
          }}><i className="far fa-edit"></i></button>

        <button
          className="waves-effect waves-light waves-effect btn red"
          style={{
            backgroundColor: 'trasparent',
            borderRadius: '5px'
          }}
          onClick={this.handleDelete}
        ><i className="far fa-trash-alt"></i></button>

      </div >
    );
  }
}

export default ListItem;

