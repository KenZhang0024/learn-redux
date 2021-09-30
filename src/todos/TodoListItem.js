import React from "react";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed}) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div>
            {
                todo.isComplete 
                    ? null : 
                    <button onClick={() => onCompletedPressed(todo.text)}>Mark As Complete</button>
            }
            <button onClick={() => onRemovePressed(todo.text)}>Remove</button>
        </div>
    </div>
);

export default TodoListItem;