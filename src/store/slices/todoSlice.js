import { createSlice } from '@reduxjs/toolkit';


const initTodos = () => {
    return JSON.parse( localStorage.getItem( "todos" ) ) || [];
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        done: false,
        todos: initTodos()
    },
    reducers: {
        Add_Todo: (state, {payload}) => {
            state.todos.push(payload);
        },
        Delete_Todo: (state, {payload}) => {
            state.todos = state.todos.filter(todo => todo.id !== payload);
        },
        Toggle_Todo: (state) => {
            state.done = !state.done
        },
    }
});


// Action creators are generated for each case reducer function
export const { Add_Todo, Delete_Todo, Toggle_Todo } = todoSlice.actions;