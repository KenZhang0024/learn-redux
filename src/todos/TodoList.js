import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { removeTodo, markTodoAsComplete } from '../actions';
import { loadTodos } from '../thunks';


const TodoList = ({ todos = [], onRemovePressed, onCompletePressed, isLoading, startLoadTodos }) => {
    useEffect(() => {
        startLoadTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => 
                <TodoListItem 
                    key={todo.text} 
                    todo={todo} 
                    onRemovePressed={onRemovePressed} 
                    onCompletePressed={onCompletePressed}
                />
            )}
        </div>
    )
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    startLoadTodos: () => dispatch(loadTodos()),
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(markTodoAsComplete(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);