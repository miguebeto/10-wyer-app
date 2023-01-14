import { createSlice } from '@reduxjs/toolkit';

const initTasks = () => {
    return JSON.parse( localStorage.getItem( "tasks" ) ) || [];
};

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        currentContactId: '',
        tasks: initTasks()
    },
    reducers: {
        Add_CurrentId: (state, {payload}) => {
            state.currentContactId = payload
        },
        Add_Task: (state, {payload}) => {
            state.tasks.push(payload)
        },
        Delete_Task: (state, {payload}) => {
            state.tasks = state.tasks.filter(task => task.id !== payload);
        },
    }
});


// Action creators are generated for each case reducer function
export const { Add_Task, Add_CurrentId, Delete_Task } = taskSlice.actions;