import React from 'react'
import TodoButtons from './TodoButtons'

import './Todo.css'

const todo = (props) => {
  return (
    <div className={props.todoItem.done ? "panel panel-default todoCard todoCardChecked" : "panel panel-default todoCard"}>
      <div className="panel-heading">
        <p>{props.todoItem.id} - {props.todoItem.title}</p>
        <TodoButtons 
          todoItem={props.todoItem}
          onDoneClick={props.onDoneClick}
          onRemoveClick={props.onRemoveClick}
        />
      </div>
      <div className="panel-body">
        <p className="widthFix">{props.todoItem.description}</p>
      </div>
    </div>
  );
};

export default todo;
