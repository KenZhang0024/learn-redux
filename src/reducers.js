import { 
    CREAT_TODO, 
    REMOVE_TODO, 
    MARK_TODO_AS_COMPLETE, 
    LOAD_TODOS_IN_PROGRESS, 
    LOAD_TODOS_SUCCESS, 
    LOAD_TODOS_FAILURE 
} from "./actions";

export const isLoading = (state = false, action) => {
    const { type } = action;

    switch (type) {
        case LOAD_TODOS_IN_PROGRESS:
            return true;
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE:
            return false;
        default:
            return state;
    }
};

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREAT_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isComplete: false,
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }
        case MARK_TODO_AS_COMPLETE: {
            const { text } = payload;
            return state.map(todo => todo.text === text ? { ...todo, isComplete: true } : todo);
        }
        default: {
            return state;
        }
    }
};