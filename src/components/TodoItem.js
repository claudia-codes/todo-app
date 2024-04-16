import React from 'react';
import "./TodoItem.css"

function TodoItem(props) {
  return (
    <div className="singleTodoItem">
      <div className={props.item.compleated ? "compleated" : ""}>
        {props.item.value}
        <button onClick={props.handleCompleate} className="markCompleteTodoItem">Complete</button>
        <button onClick={props.handleRemove} className="removeTodoItem">X</button>
      </div>
    </div>
  );
}

export default TodoItem;