import React from "react";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed}) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div>
            {
                todo.isCompleted
                    ? null : 
                    <button onClick={() => onCompletedPressed(todo.id)}>Mark As Complete</button>
            }
            <button onClick={() => onRemovePressed(todo.id)}>Remove</button>
        </div>
    </div>
);

export default TodoListItem;