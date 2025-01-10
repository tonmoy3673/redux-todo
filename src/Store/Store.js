import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice } from "../Component/Reducers/TodoSlice";

export const store = configureStore({
    reducer: TodoSlice
})