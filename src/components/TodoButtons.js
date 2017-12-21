import React from 'react';

const todoButtons = (props) => {
  return (
    <div className="btn-group" role="group" aria-label="...">
      <button
        style={{width: "100px"}}
        type="button" 
        className="btn btn-default"
        onClick={props.onDoneClick}
      >
        <span className={props.todoItem.done ? "glyphicon glyphicon-thumbs-down" : "glyphicon glyphicon-thumbs-up"} aria-hidden="true"></span>
        {props.todoItem.done ? " Undone" : " Done"}
      </button>
      <button 
        type="button" 
        className="btn btn-default btn-danger"
        onClick={props.onRemoveClick}
      >
        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Remove
      </button>
    </div>
  )
};

export default todoButtons;
