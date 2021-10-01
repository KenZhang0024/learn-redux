import { createSelector } from "reselect";
import { todos } from "./reducers";

export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.todos.isLoading;

export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => !todo.isCompleted),
);

export const getCompltedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.isCompleted),
);