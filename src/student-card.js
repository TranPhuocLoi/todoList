import React, { Component } from 'react';

function NameCard(props) {
  return (
    <div>
      <div>name: {props.name}</div>
      <div>Student ID: {props.number}</div>
    </div>
  )
}

export default NameCard