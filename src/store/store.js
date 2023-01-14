import { configureStore } from "@reduxjs/toolkit";
import { contactSlice, taskSlice, todoSlice } from "./slices";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer, 
    contact: contactSlice.reducer, 
    task: taskSlice.reducer, 
  },
});