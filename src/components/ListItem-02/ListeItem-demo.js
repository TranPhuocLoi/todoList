import React, { Component } from 'react';
import '../ListItem/ListItem.css'

const ListItemDemo = props => {
  return (
    <div className="item">
      <p>{props.task}</p>
      <p>{props.deadline}</p>
      <button onClick={
        function () {
          alert(props.task)
        }
      }>
        Edit
      </button>
      <button>Delete</button>
    </div>
  );
};

export default ListItemDemo;