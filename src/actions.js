export const CREAT_TODO = 'CREAT_TODO';
export const createTodo = todo => ({
    type: CREAT_TODO,
    payload: { todo }
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = todo => ({
    type: REMOVE_TODO,
    payload: { todo }
});

export const MARK_TODO_AS_COMPLETE = 'MARK_TODO_AS_COMPLETE';
export const markTodoAsComplete = todo => ({
    type: MARK_TODO_AS_COMPLETE,
    payload: { todo }
});

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = todos => ({
    type: LOAD_TODOS_SUCCESS,
    payload: { todos }
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE,
});