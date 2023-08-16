import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            id: 1,
            title: "Task #0",
            completed: false
        }
    ]
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        updateTask: (state, action) => {
            const { id, title, completed } = action.payload;
            const taskToUpdate = state.tasks.find((task) => task.id === id);

            if (taskToUpdate) {
                taskToUpdate.title = title;
                taskToUpdate.completed = completed;
            }
        },
        removeTask: (state, action) => {
            const idToRemove = action.payload;
            return state.tasks.filter((task) => task.id !== idToRemove);
        },
    },
});

export const { addTask, updateTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
